import SpiegelthemenIntro from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenIntro";
import SpiegelthemenErklaerung from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenErklaerung";
import SpiegelthemenBeispiele from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenBeispiele";
import SpiegelthemenAbschluss from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenAbschluss";
import {buildMetadata} from "@/lib/seo";


export const metadata = buildMetadata({
    title: "Spiegelthemen – Was dein Tier dir zeigen kann",
    description:
        "Können Tiere uns etwas über uns selbst zeigen? " +
        "Entdecke, wie Spiegelthemen neue Perspektiven auf dich und die Beziehung zu deinem Tier eröffnen können.",
    path: "/verstehen/spiegelthemen",
});


export default function SpiegelthemenPage() {
    return (
        <>
            <SpiegelthemenIntro/>
            <SpiegelthemenErklaerung/>
            <SpiegelthemenBeispiele/>
            <SpiegelthemenAbschluss/>
        </>
    );
}
