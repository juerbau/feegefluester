import VerbindenHero from "@/ui/components/verbinden/VerbindenHero";
import VerbindenMiteinander from "@/ui/components/verbinden/VerbindenMiteinander";
import VerbindenGeschichte from "@/ui/components/verbinden/VerbindenGeschichte";


export default function VerbindenPage() {

    return (
        <main className="min-h-screen">

            <VerbindenHero/>

            <VerbindenMiteinander />

            <VerbindenGeschichte />


        </main>
    );
}