import {
    Cormorant_Garamond,
    Quicksand,
    Dancing_Script,
} from "next/font/google";


export const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ['latin'],
    display: 'swap',
});

export const dancingScript = Dancing_Script({
    variable: "--font-dancingScript",
    subsets: ['latin'],
    display: 'swap',
});


export const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});
