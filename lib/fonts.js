import {
    Nunito_Sans,
    Cormorant_Garamond,
} from "next/font/google";

export const nunito = Nunito_Sans({
    variable: "--font-nunito",
    subsets: ["latin"],
    display: "swap",
});

export const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});