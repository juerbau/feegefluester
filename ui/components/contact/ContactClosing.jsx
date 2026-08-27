import SparkleDivider from "@/ui/components/utils/SparkleDivider";
import { cn } from "@/lib/utils/cn";

export default function ContactClosing({ content }) {
    return (
        <section
            className="
                py-24
                text-center
            "
        >
            <SparkleDivider className="mb-16" />

            <p
                className={cn(
                    "font-accent italic",
                    "text-[#c8a56e]",
                    "text-4xl"
                )}
            >
                {content.quote}
            </p>
        </section>
    );
}