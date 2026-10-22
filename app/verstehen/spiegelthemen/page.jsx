
import SpiegelthemenIntro from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenIntro";
import SpiegelthemenErklaerung from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenErklaerung";
import SpiegelthemenBeispiele from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenBeispiele";
import SpiegelthemenAbschluss from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenAbschluss";

export const metadata = {
    title: "Spiegelthemen | Feegeflüster",
    description:
        "Spiegelthemen als Einladung, die Beziehung zwischen Mensch und Tier aus einer neuen Perspektive zu betrachten.",
};

export default function SpiegelthemenPage() {
    return (
        <>
            <SpiegelthemenIntro />
            <SpiegelthemenErklaerung />
            <SpiegelthemenBeispiele />
            <SpiegelthemenAbschluss />
        </>
    );
}
