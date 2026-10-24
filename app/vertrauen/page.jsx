import VertrauenHero from "@/ui/components/vertrauen/VertrauenHero";
import VertrauenWachsen from "@/ui/components/vertrauen/VertrauenWachsen";
import VertrauenManuela from "@/ui/components/vertrauen/VertrauenManuela";
import VertrauenBegleiter from "@/ui/components/vertrauen/VertrauenBegleiter";
import VertrauenWege from "@/ui/components/vertrauen/VertrauenWege";
import {buildMetadata} from "@/lib/seo";


export const metadata = buildMetadata({
    title: "Über Manuela Catalan-Bermudez",
    description:
        "Lerne Manuela Catalan-Bermudez kennen und erfahre, was sie auf ihrem Weg zur Tierkommunikation geprägt hat. " +
        "Persönlich, einfühlsam und mit Herz für Mensch und Tier.",
    path: "/vertrauen",
});


export default function VertrauenPage() {
    return (
        <>
            <VertrauenHero/>

            <VertrauenWachsen/>

            <VertrauenManuela/>

            <VertrauenBegleiter/>

            <VertrauenWege/>
        </>
    );
}
