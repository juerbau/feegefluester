import VerbindenHero from "@/ui/components/verbinden/VerbindenHero";
import VerbindenMiteinander from "@/ui/components/verbinden/VerbindenMiteinander";
import VerbindenGeschichte from "@/ui/components/verbinden/VerbindenGeschichte";
import {buildMetadata} from "@/lib/seo";


export const metadata = buildMetadata({
    title: "Die Verbindung zu deinem Tier stärken",
    description:
        "Entdecke neue Wege, die Beziehung zu deinem Tier bewusst zu gestalten. " +
        "Feegeflüster begleitet dich mit Einfühlungsvermögen und Raum für echte Verbindung.",
    path: "/verbinden",
});


export default function VerbindenPage() {

    return (
        <main className="min-h-screen">

            <VerbindenHero/>

            <VerbindenMiteinander/>

            <VerbindenGeschichte/>


        </main>
    );
}