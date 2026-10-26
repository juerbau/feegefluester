import WegeZueinanderContent from "@/ui/components/verbinden/WegeZueinanderContent";
import {buildMetadata} from "@/lib/seo";
import {neueWegeContent} from "@/lib/content/verbinden/neueWege/neueWegeContent";


export const metadata = buildMetadata({
    title: "Tierkommunikation & Begleitung – Wege zueinander",
    description:
        "Entdecke die Möglichkeiten der Tierkommunikation und persönlichen Begleitung bei Feegeflüster. " +
        "Finde einen Weg, der zu dir und deinem Tier passt.",
    path: "/verbinden/wege-zueinander",
});


export default function WegeZueinanderPage() {
    const content = neueWegeContent;

    return <WegeZueinanderContent content={content}/>;
}
