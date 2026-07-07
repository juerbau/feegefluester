import {roboto} from "@/lib/fonts";
import "@/app/globals.css";


export default function RootLayout({children}) {
    return (
        <html lang="de">
        <body className={`${roboto.variable} font-roboto antialiased`}>
        {children}
        </body>
        </html>
    );
}
