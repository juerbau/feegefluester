import SpiegelthemenIntro from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenIntro";
import SpiegelthemenErklaerung from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenErklaerung";
import SpiegelthemenBeispiele from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenBeispiele";
import SpiegelthemenAbschluss from "@/ui/components/verstehen/spiegelthemen/SpiegelthemenAbschluss";
import {buildMetadata} from "@/lib/seo";
import { spiegelthemenContent } from "@/lib/content/verstehen/spiegelthemen/spiegelthemenContent";


export const metadata = buildMetadata({
    title: "Spiegelthemen – Was dein Tier dir zeigen kann",
    description:
        "Können Tiere uns etwas über uns selbst zeigen? " +
        "Entdecke, wie Spiegelthemen neue Perspektiven auf dich und die Beziehung zu deinem Tier eröffnen können.",
    path: "/verstehen/spiegelthemen",
});


export default function SpiegelthemenPage() {
    const { intro, erklaerung, beispiele, abschluss } = spiegelthemenContent;

    return (
        <>
            <SpiegelthemenIntro intro={intro} />
            <SpiegelthemenErklaerung erklaerung={erklaerung} />
            <SpiegelthemenBeispiele beispiele={beispiele} />
            <SpiegelthemenAbschluss abschluss={abschluss} />
        </>
    );
}
