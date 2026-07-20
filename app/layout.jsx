import {nunito, cormorant} from "@/lib/fonts";
import "@/app/globals.css";

import Header from "@/ui/components/header/Header";

export default function RootLayout({children}) {
    return (
        <html lang="de">
        <body
            className={`${nunito.variable} ${cormorant.variable} font-body`}
        >
        <Header />

        <main>
            {children}
        </main>
        </body>
        </html>
    );
}