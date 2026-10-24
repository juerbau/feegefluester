import LegalPage from "@/ui/components/legal/LegalPage";
import {legalContent} from "@/lib/content/legalContent";
import {buildMetadata} from "@/lib/seo";


export const metadata = buildMetadata({
    title: "Impressum",
    description:
        "Rechtliche Angaben und Kontaktinformationen zu Feegeflüster von Manuela Catalan-Bermudez.",
    path: "/impressum",
});


export default function ImpressumPage() {
    return <LegalPage content={legalContent.imprint}/>;
}
