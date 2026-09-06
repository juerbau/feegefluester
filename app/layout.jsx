import {nunito, cormorant, shadowsIntoLight} from "@/lib/fonts";
import "@/app/globals.css";

import Header from "@/ui/components/header/Header";
import Footer from "@/ui/components/footer/Footer";

export default function RootLayout({children}) {
    return (
        <html lang="de">
        <body
            className={`${nunito.variable} ${cormorant.variable} ${shadowsIntoLight.variable} font-body`}
        >
        <Header />

        <main>
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}