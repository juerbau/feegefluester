import MeinWegIntro from "@/ui/components/vertrauen/mein-weg/MeinWegIntro";
import MeinWegGeschichte from "@/ui/components/vertrauen/mein-weg/MeinWegGeschichte";
import { buildMetadata } from "@/lib/seo";


export const metadata = buildMetadata({
    title: "Mein Weg zur Tierkommunikation",
    description:
        "Erfahre mehr über Manuela Catalan-Bermudez und ihren persönlichen Weg zur Tierkommunikation. " +
        "Eine Geschichte über Erfahrungen, Vertrauen und die Verbindung zu Tieren.",
    path: "/vertrauen/mein-weg",
});


export default function MeinWegPage() {
    return (
        <>
            <MeinWegIntro />

            <MeinWegGeschichte />
        </>
    );
}
