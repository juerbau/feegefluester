import {createElement} from "react";
import {Resend} from "resend";
import {contactSchema} from "@/lib/validation/contactSchema";
import ContactMail from "@/emails/ContactMail";
import {checkOrigin} from "@/lib/security/origin-check";
import {checkRateLimit} from "@/lib/security/rate-limit";

// Maximale Größe einer Kontaktanfrage: 16 KB
const MAX_BODY_SIZE = 16 * 1024;


// Einheitliche Fehlerantwort
function errorResponse(message, status) {
    return Response.json(
        {
            success: false,
            message,
        },
        {status}
    );
}

// JSON-Body mit Größenbegrenzung einlesen
async function readJsonBody(request) {
    const reader = request.body?.getReader();

    if (!reader) {
        throw new Error("EMPTY_BODY");
    }

    const chunks = [];
    let totalBytes = 0;

    while (true) {
        const {done, value} = await reader.read();

        if (done) break;

        totalBytes += value.byteLength;

        if (totalBytes > MAX_BODY_SIZE) {
            await reader.cancel();
            throw new Error("BODY_TOO_LARGE");
        }

        chunks.push(value);
    }

    const bytes = new Uint8Array(totalBytes);
    let offset = 0;

    for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.byteLength;
    }

    const text = new TextDecoder("utf-8", {
        fatal: true,
    }).decode(bytes);

    return JSON.parse(text);
}

export async function POST(request) {

    // Origin prüfen
    if (!checkOrigin(request)) {
        return errorResponse(
            "Diese Anfrage ist nicht erlaubt.",
            403
        );
    }

    // Rate Limiting
    try {
        const allowed = await checkRateLimit(request);

        if (!allowed) {
            return errorResponse(
                "Du hast zu viele Anfragen gesendet. Bitte versuche es in einer Minute erneut.",
                429
            );
        }
    } catch (error) {
        console.error("Rate-Limit-Prüfung fehlgeschlagen:", error);

        return errorResponse(
            "Der Nachrichtenversand ist momentan nicht verfügbar. Bitte versuche es später erneut.",
            503
        );
    }

    // Content-Type prüfen
    const contentType = request.headers.get("content-type");

    if (
        !contentType ||
        !/^application\/json(?:\s*;|$)/i.test(contentType)
    ) {
        return errorResponse(
            "Ungültiges Anfrageformat.",
            415
        );
    }

    // Request-Größe vorab prüfen
    const contentLength = request.headers.get(
        "content-length"
    );

    if (contentLength !== null) {
        const length = Number(contentLength);

        if (
            !Number.isFinite(length) ||
            length < 0 ||
            length > MAX_BODY_SIZE
        ) {
            return errorResponse(
                "Die Anfrage ist zu groß oder ungültig.",
                413
            );
        }
    }

    // Request-Body sicher einlesen
    let body;

    try {
        body = await readJsonBody(request);
    } catch (error) {
        if (error.message === "BODY_TOO_LARGE") {
            return errorResponse(
                "Die Anfrage ist zu groß.",
                413
            );
        }

        console.error(
            "Fehler beim Lesen der Kontaktanfrage:",
            error
        );

        return errorResponse(
            "Die Nachricht konnte nicht verarbeitet werden.",
            400
        );
    }

    // Honeypot frühzeitig prüfen
    // Nur ein nicht-leerer String gilt als ausgelöster
    // Honeypot. Andere Werte prüft anschließend Zod.
    if (
        body !== null &&
        typeof body === "object" &&
        !Array.isArray(body) &&
        typeof body.website === "string" &&
        body.website.trim() !== ""
    ) {
        // Bewusst keine E-Mail versenden.
        // Der Bot erhält trotzdem eine Erfolgsantwort.
        return Response.json(
            {
                success: true,
                message: "Vielen Dank für deine Nachricht!",
            },
            {status: 200}
        );
    }

    // Eingaben serverseitig validieren
    const result = contactSchema.safeParse(body);

    if (!result.success) {
        return errorResponse(
            "Die eingegebenen Daten sind ungültig.",
            400
        );
    }

    // Validierte Daten extrahieren
    const {
        name,
        email,
        phone,
        message,
    } = result.data;

    // Umgebungsvariablen prüfen
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
        console.error(
            "Resend-Konfiguration unvollständig. " +
            "Bitte die Umgebungsvariablen prüfen."
        );

        return errorResponse(
            "Der Mailversand ist derzeit nicht verfügbar. " +
            "Bitte versuche es später erneut.",
            500
        );
    }

    // Resend initialisieren
    const resend = new Resend(apiKey);

    // E-Mail versenden
    try {
        const emailTemplate = createElement(
            ContactMail,
            {
                name,
                email,
                phone,
                message,
            }
        );

        const {data, error} = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            replyTo: email,
            subject: `Neue Kontaktanfrage von ${name}`,
            react: emailTemplate,
        });

        if (error) {
            console.error(
                "Resend-Fehler beim E-Mail-Versand:",
                error
            );

            return errorResponse(
                "Deine Nachricht konnte leider nicht " +
                "versendet werden. Bitte versuche es " +
                "später erneut.",
                502
            );
        }

        // Erfolgreichen Versand protokollieren
        console.info(
            "Kontaktanfrage erfolgreich versendet.",
            {emailId: data?.id}
        );

        // Erfolgsantwort zurückgeben
        return Response.json(
            {
                success: true,
                message:
                    "Vielen Dank für deine Nachricht! " +
                    "Ich melde mich so bald wie möglich bei dir.",
            },
            {status: 200}
        );
    } catch (error) {

        // Unerwartete Fehler behandeln
        console.error(
            "Unerwarteter Fehler beim E-Mail-Versand:",
            error
        );

        return errorResponse(
            "Beim Versenden deiner Nachricht ist " +
            "leider ein Fehler aufgetreten. " +
            "Bitte versuche es später erneut.",
            500
        );
    }
}
