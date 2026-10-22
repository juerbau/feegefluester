import { kontaktContent } from "@/lib/content/kontaktContent";
import KontaktForm from "@/ui/components/kontakt/KontaktForm";
import KontaktHero from "@/ui/components/kontakt/KontaktHero";


export default function KontaktPage() {
    const content = kontaktContent;

    return (
        <main className="min-h-screen">

            <KontaktHero />

            <KontaktForm />

        </main>
    );
}