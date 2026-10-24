import {verstehenContent} from "@/lib/content/verstehenContent";
import VerstehenHero from "@/ui/components/verstehen/VerstehenHero";
import VerstehenIntroduction from "@/ui/components/verstehen/VerstehenIntroduction";
import VerstehenTopics from "@/ui/components/verstehen/VerstehenTopics";
import VerstehenPerspectives from "@/ui/components/verstehen/VerstehenPerspectives";
import {buildMetadata} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Mensch und Tier besser verstehen",
    description:
        "Entdecke neue Perspektiven auf die Verbindung zwischen Mensch und Tier. " +
        "Erfahre mehr über Tierkommunikation und Spiegelthemen bei Feegeflüster.",
    path: "/verstehen",
});

export default function VerstehenPage() {
    const content = verstehenContent;

    return (
        <main className="min-h-screen">

            <VerstehenHero/>

            <VerstehenIntroduction/>

            <VerstehenTopics/>

            <VerstehenPerspectives/>

        </main>
    );
}