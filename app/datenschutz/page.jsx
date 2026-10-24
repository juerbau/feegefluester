
import LegalPage from "@/ui/components/legal/LegalPage";
import { legalContent } from "@/lib/content/legalContent";
import { buildMetadata } from "@/lib/seo";


export const metadata = buildMetadata({
    title: "Datenschutzerklärung",
    description:
        "Informationen zum Datenschutz bei Feegeflüster: " +
        "Erfahre, wie personenbezogene Daten verarbeitet und geschützt werden.",
    path: "/datenschutz",
});


export default function DatenschutzPage() {
    return <LegalPage content={legalContent.privacy} />;
}
