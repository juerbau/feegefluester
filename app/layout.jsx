import {roboto} from "@/lib/fonts";
import "@/app/globals.css";

import Header from "@/ui/components/header/Header";


export default function RootLayout({children}) {
    return (
        <html lang="de">
        <body className={`${roboto.variable} font-roboto antialiased`}>
        <Header />

        <main>
            {children}
        </main>

        </body>
        </html>
    );
}

