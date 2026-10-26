import KontaktForm from "@/ui/components/kontakt/KontaktForm";
import KontaktHero from "@/ui/components/kontakt/KontaktHero";
import {buildMetadata} from "@/lib/seo";
import { kontaktContent } from "@/lib/content/kontakt/kontaktContent";


export const metadata = buildMetadata({
    title: "Kontakt zu Manuela aufnehmen",
    description:
        "Du hast Fragen zur Tierkommunikation oder möchtest Manuela kennenlernen? " +
        "Nimm Kontakt zu Feegeflüster auf und teile, was dich und dein Tier bewegt.",
    path: "/kontakt",
});


export default function KontaktPage() {
    const { hero, form } = kontaktContent;

    return (
        <main className="min-h-screen">
            <KontaktHero hero={hero} />
            <KontaktForm form={form} />
        </main>
    );
}