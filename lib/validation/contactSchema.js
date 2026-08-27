import {z} from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Bitte gib deinen Namen ein.")
        .max(100, "Der Name ist zu lang."),

    email: z
        .string()
        .trim()
        .min(1, "Bitte gib deine E-Mail-Adresse ein.")
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
});