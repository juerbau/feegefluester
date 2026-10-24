import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Bitte gib deinen Namen ein.")
        .max(100, "Der Name ist zu lang.")
        .refine(
            (value) => !/[\u0000-\u001F\u007F]/.test(value),
            "Der Name enthält ungültige Zeichen."
        ),

    email: z
        .string()
        .trim()
        .min(1, "Bitte gib deine E-Mail-Adresse ein.")
        .max(254, "Die E-Mail-Adresse ist zu lang.")
        .email("Bitte gib eine gültige E-Mail-Adresse ein."),

    phone: z
        .string()
        .trim()
        .max(50, "Die Telefonnummer ist zu lang.")
        .optional()
        .or(z.literal("")),

    message: z
        .string()
        .trim()
        .min(10, "Bitte schreib noch ein paar Worte zu deinem Anliegen.")
        .max(5000, "Deine Nachricht ist zu lang."),

    // Honeypot: Muss bei echten Anfragen leer bleiben.
    website: z.string().max(200).default(""),
});