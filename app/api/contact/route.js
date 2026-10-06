import {Resend} from "resend";

import {contactSchema} from "@/lib/validation/contactSchema";
import ContactMail from "@/emails/ContactMail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
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

    const {
        name,
        email,
        phone,
        message,
    } = result.data;

    const emailTemplate = (
        <ContactMail
            name={name}
            email={email}
            phone={phone}
            message={message}
        />
    );

    try {
        const {data, error} = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL,
            to: process.env.CONTACT_TO_EMAIL,
            replyTo: email,
            subject: `Neue Kontaktanfrage von ${name}`,
            react: emailTemplate,
        });

        if (error) {
            console.error(
                "Resend Fehler:",
                error
            );

            return Response.json(
                {
                    success: false,
                    message:
                        "Die Nachricht konnte nicht versendet werden.",
                },
                {
                    status: 500,
                }
            );
        }

        console.log(
            "Kontaktanfrage versendet:",
            data?.id
        );

        return Response.json(
            {
                success: true,
                message:
                    "Nachricht erfolgreich versendet.",
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error(
            "Fehler beim Versand der Kontaktanfrage:",
            error
        );

        return Response.json(
            {
                success: false,
                message:
                    "Die Nachricht konnte nicht versendet werden.",
            },
            {
                status: 500,
            }
        );
    }
}