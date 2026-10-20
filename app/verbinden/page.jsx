import VerbindenHero from "@/ui/components/verbinden/VerbindenHero";
import VerbindenMiteinander from "@/ui/components/verbinden/VerbindenMiteinander";
import VerbindenGeschichte from "@/ui/components/verbinden/VerbindenGeschichte";
import SectionSpacer from "@/ui/components/utils/SectionSpacer";


export default function VerbindenPage() {

    return (
        <main className="min-h-screen">

            <VerbindenHero/>

            <VerbindenMiteinander />

            <VerbindenGeschichte />

            <SectionSpacer />


        </main>
    );
}