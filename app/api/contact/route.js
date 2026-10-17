import { Resend } from "resend";

import { contactSchema } from "@/lib/validation/contactSchema";
import ContactMail from "@/emails/ContactMail";


export async function POST(request) {

    // --------------------------------------------------
    // 1. Request-Body einlesen
    // --------------------------------------------------

    let body;

    try {
        body = await request.json();
    } catch (error) {
        console.error(
            "Fehler beim Lesen der Kontaktanfrage:",
            error
        );

        return Response.json(
            {
                success: false,
                message:
                    "Die Nachricht konnte nicht verarbeitet werden.",
            },
            {
                status: 400,
            }
        );
    }


    // --------------------------------------------------
    // 2. Eingaben validieren
    // --------------------------------------------------

    const result = contactSchema.safeParse(body);

    if (!result.success) {
        return Response.json(
            {
                success: false,
                message:
                    "Die eingegebenen Daten sind ungültig.",
                errors: result.error.flatten(),
            },
            {
                status: 400,
            }
        );
    }


    // --------------------------------------------------
    // 3. Validierte Daten extrahieren
    // --------------------------------------------------

    const {
        name,
        email,
        phone,
        message,
    } = result.data;


    // --------------------------------------------------
    // 4. Umgebungsvariablen prüfen
    // --------------------------------------------------

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
        console.error(
            "Resend-Konfiguration unvollständig. " +
            "Bitte die Umgebungsvariablen prüfen."
        );

        return Response.json(
            {
                success: false,
                message:
                    "Der Mailversand ist derzeit nicht verfügbar. " +
                    "Bitte versuche es später erneut.",
            },
            {
                status: 500,
            }
        );
    }


    // --------------------------------------------------
    // 5. Resend initialisieren
    // --------------------------------------------------

    const resend = new Resend(apiKey);


    // --------------------------------------------------
    // 6. E-Mail-Template vorbereiten
    // --------------------------------------------------

    const emailTemplate = (
        <ContactMail
            name={name}
            email={email}
            phone={phone}
            message={message}
        />
    );


    // --------------------------------------------------
    // 7. E-Mail versenden
    // --------------------------------------------------

    try {
        const { data, error } = await resend.emails.send({
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

            return Response.json(
                {
                    success: false,
                    message:
                        "Deine Nachricht konnte leider nicht " +
                        "versendet werden. Bitte versuche es " +
                        "später erneut.",
                },
                {
                    status: 502,
                }
            );
        }


        // --------------------------------------------------
        // 8. Erfolgreichen Versand protokollieren
        // --------------------------------------------------

        console.info(
            "Kontaktanfrage erfolgreich versendet.",
            { emailId: data?.id }
        );


        // --------------------------------------------------
        // 9. Erfolgsantwort zurückgeben
        // --------------------------------------------------

        return Response.json(
            {
                success: true,
                message:
                    "Vielen Dank für deine Nachricht! " +
                    "Ich melde mich so bald wie möglich bei dir.",
            },
            {
                status: 200,
            }
        );

    } catch (error) {

        // --------------------------------------------------
        // 10. Unerwartete Fehler behandeln
        // --------------------------------------------------

        console.error(
            "Unerwarteter Fehler beim E-Mail-Versand:",
            error
        );

        return Response.json(
            {
                success: false,
                message:
                    "Beim Versenden deiner Nachricht ist " +
                    "leider ein Fehler aufgetreten. " +
                    "Bitte versuche es später erneut.",
            },
            {
                status: 500,
            }
        );
    }
}