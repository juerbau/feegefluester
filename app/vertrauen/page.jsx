
import VertrauenHero from "@/ui/components/vertrauen/VertrauenHero";
import VertrauenWachsen from "@/ui/components/vertrauen/VertrauenWachsen";
import VertrauenManuela from "@/ui/components/vertrauen/VertrauenManuela";
import VertrauenBegleiter from "@/ui/components/vertrauen/VertrauenBegleiter";
import VertrauenWege from "@/ui/components/vertrauen/VertrauenWege";

export const metadata = {
    title: "Vertrauen | Feegeflüster",
    description:
        "Lerne Manuela und ihre Haltung zur Tierkommunikation kennen. Erfahre, wie Vertrauen zwischen Mensch und Tier wachsen darf.",
};

export default function VertrauenPage() {
    return (
        <>
            <VertrauenHero />
            <VertrauenWachsen />
            <VertrauenManuela />
            <VertrauenBegleiter />
            <VertrauenWege />
        </>
    );
}
