import { contactContent } from "@/lib/content/contactContent";

import PageIntro from "@/ui/components/common/PageIntro";
import ContactInvitation from "@/ui/components/contact/ContactInvitation";
import ContactForm from "@/ui/components/contact/ContactForm";
import ContactClosing from "@/ui/components/contact/ContactClosing";

export default function KontaktPage() {
    const content = contactContent;

    return (
        <main className="min-h-screen">
            <PageIntro
                content={content.intro}
            />

            <ContactInvitation content={content.invitation} />

            <ContactForm content={content.form} />

            <ContactClosing content={content.closing} />
        </main>
    );
}