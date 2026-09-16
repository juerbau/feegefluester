import {contactSchema} from "@/lib/validation/contactSchema";

export async function POST(request) {
    try {
        const body = await request.json();

        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return Response.json(
                {
                    success: false,
                    message: "Die eingegebenen Daten sind ungültig.",
                    errors: result.error.flatten(),
                },
                {
                    status: 400,
                }
            );
        }

        const data = result.data;

        console.log("Kontaktanfrage:", data);

        return Response.json(
            {
                success: true,
                message: "Nachricht erfolgreich empfangen.",
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Fehler beim Verarbeiten der Kontaktanfrage:", error);

        return Response.json(
            {
                success: false,
                message: "Die Nachricht konnte nicht verarbeitet werden.",
            },
            {
                status: 500,
            }
        );
    }
}