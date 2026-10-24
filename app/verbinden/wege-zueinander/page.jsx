import WegeZueinanderContent from "@/ui/components/verbinden/WegeZueinanderContent";
import {buildMetadata} from "@/lib/seo";


export const metadata = buildMetadata({
    title: "Tierkommunikation & Begleitung – Wege zueinander",
    description:
        "Entdecke die Möglichkeiten der Tierkommunikation und persönlichen Begleitung bei Feegeflüster. " +
        "Finde einen Weg, der zu dir und deinem Tier passt.",
    path: "/verbinden/wege-zueinander",
});


export default function WegeZueinanderPage() {
    return <WegeZueinanderContent/>;
}
