import {cormorant, quicksand, dancingScript} from "@/lib/fonts";
import "@/app/globals.css";

import {cn} from "@/lib/utils/cn";

import Header from "@/ui/components/header/Header";
import Footer from "@/ui/components/footer/Footer";

export default function RootLayout({children}) {
    return (
        <html lang="de">
        <body
            className={cn(
                quicksand.variable,
                cormorant.variable,
                dancingScript.variable,
                "font-body"
            )}
        >
        {/* Salbeigrüner Außenbereich */}
        <div className="min-h-screen px-4 sm:px-8 lg:px-[clamp(1.5rem,5vw,5.5rem)]">
            {/* Eigentliche Website */}
            <div
                className={cn(
                    "mx-auto flex min-h-screen w-full flex-col",
                    "max-w-[1920px]",
                    "bg-background"
                )}
            >
                <Header />

                <main className="w-full flex-1">
                    {children}
                </main>

                <Footer />
            </div>
        </div>
        </body>
        </html>
    );
}