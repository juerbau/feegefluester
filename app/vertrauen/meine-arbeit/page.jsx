import MeineArbeitIntro from "@/ui/components/vertrauen/meine-arbeit/MeineArbeitIntro";
import MeineArbeitWeiterbildungen from "@/ui/components/vertrauen/meine-arbeit/MeineArbeitWeiterbildungen";
import MeineArbeitAblauf from "@/ui/components/vertrauen/meine-arbeit/MeineArbeitAblauf";
import MeineArbeitGrenzen from "@/ui/components/vertrauen/meine-arbeit/MeineArbeitGrenzen";
import {buildMetadata} from "@/lib/seo";


export const metadata = buildMetadata({
    title: "Meine Arbeit mit Mensch und Tier",
    description:
        "Erfahre, wie Manuela Catalan-Bermudez in der Tierkommunikation arbeitet und welche Werte sie dabei begleiten. " +
        "Mit Achtsamkeit, Respekt und einem offenen Herzen.",
    path: "/vertrauen/meine-arbeit",
});


export default function MeineArbeitPage() {
    return (
        <>
            <MeineArbeitIntro/>

            <MeineArbeitWeiterbildungen/>

            <MeineArbeitAblauf/>

            <MeineArbeitGrenzen/>
        </>
    );
}
