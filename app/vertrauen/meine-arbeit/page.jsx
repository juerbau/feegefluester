
import MeineArbeitIntro from "@/ui/components/vertrauen/meine-arbeit/MeineArbeitIntro";
import MeineArbeitWeiterbildungen from "@/ui/components/vertrauen/meine-arbeit/MeineArbeitWeiterbildungen";
import MeineArbeitAblauf from "@/ui/components/vertrauen/meine-arbeit/MeineArbeitAblauf";
import MeineArbeitGrenzen from "@/ui/components/vertrauen/meine-arbeit/MeineArbeitGrenzen";

export const metadata = {
    title: "Meine Arbeit | Feegeflüster",
    description:
        "Erfahre mehr über Manuelas Haltung, ihre Weiterbildungen und ihren verantwortungsvollen Umgang mit Tierkommunikation.",
};

export default function MeineArbeitPage() {
    return (
        <>
            <MeineArbeitIntro />
            <MeineArbeitWeiterbildungen />
            <MeineArbeitAblauf />
            <MeineArbeitGrenzen />
        </>
    );
}
