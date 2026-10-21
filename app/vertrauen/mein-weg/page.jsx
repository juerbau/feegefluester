
import MeinWegIntro from "@/ui/components/vertrauen/mein-weg/MeinWegIntro";
import MeinWegGeschichte from "@/ui/components/vertrauen/mein-weg/MeinWegGeschichte";

export const metadata = {
    title: "Mein Weg | Feegeflüster",
    description:
        "Erfahre, wie Manuelas besondere Verbindung zu ihrer Katze Fee gewachsen ist und daraus Feegeflüster entstanden ist.",
};

export default function MeinWegPage() {
    return (
        <>
            <MeinWegIntro />
            <MeinWegGeschichte />
        </>
    );
}
