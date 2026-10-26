import TierkommunikationIntro from "@/ui/components/verstehen/tierkommunikation/TierkommunikationIntro";
import TierkommunikationSituationen from "@/ui/components/verstehen/tierkommunikation/TierkommunikationSituationen";
import TierkommunikationAbschluss from "@/ui/components/verstehen/tierkommunikation/TierkommunikationAbschluss";
import {buildMetadata} from "@/lib/seo";
import {tierkommunikationContent} from "@/lib/content/tierkommunikationContent";


export const metadata = buildMetadata({
    title: "Tierkommunikation – Tiere besser verstehen",
    description:
        "Was ist Tierkommunikation und wie kann sie die Verbindung zu deinem Tier bereichern? " +
        "Entdecke Manuelas einfühlsamen Blick auf die Verständigung zwischen Mensch und Tier.",
    path: "/verstehen/tierkommunikation",
});


export default function TierkommunikationPage() {
    const { intro, situationen, abschluss } = tierkommunikationContent;

    return (
        <main>
            <TierkommunikationIntro intro={intro} />
            <TierkommunikationSituationen situationen={situationen} />
            <TierkommunikationAbschluss abschluss={abschluss} />
        </main>
    );
}