import { contactContent } from "@/lib/content/contactContent";

import PageIntro from "@/ui/components/common/PageIntro";
import ContactInvitation from "@/ui/components/contact/ContactInvitation";
import ContactForm from "@/ui/components/contact/ContactForm";
import KontaktHero from "@/ui/components/contact/KontaktHero";


export default function KontaktPage() {
    const content = contactContent;

    return (
        <main className="min-h-screen">

            <KontaktHero />


            {/*<PageIntro*/}
            {/*    content={content.intro}*/}
            {/*/>*/}

            {/*<ContactInvitation content={content.invitation} />*/}

            <ContactForm />

        </main>
    );
}