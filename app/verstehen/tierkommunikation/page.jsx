import TierkommunikationContent from "@/ui/components/verstehen/TierkommunikationContent";
import {buildMetadata} from "@/lib/seo";


export const metadata = buildMetadata({
    title: "Tierkommunikation – Tiere besser verstehen",
    description:
        "Was ist Tierkommunikation und wie kann sie die Verbindung zu deinem Tier bereichern? " +
        "Entdecke Manuelas einfühlsamen Blick auf die Verständigung zwischen Mensch und Tier.",
    path: "/verstehen/tierkommunikation",
});


export default function TierkommunikationPage() {
    return (
        <main>
            <TierkommunikationContent/>
        </main>
    );
}