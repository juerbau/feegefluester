import PageContentWidth from "@/ui/components/utils/PageContentWidth";
import SparkleDivider from "@/ui/components/utils/SparkleDivider";
import { cn } from "@/lib/utils/cn";

export default function ContactInvitation({ content }) {
    return (
        <section className="px-8 py-20">
            <PageContentWidth width="default">
                <div className="px-30">
                    <h2
                        className={cn(
                            "font-accent font-light",
                            "text-[#827d87]",
                            "tracking-tight",
                            "leading-tight",
                            "text-4xl"
                        )}
                    >
                        {content.title}
                    </h2>

                    <div className="mt-10 space-y-6">
                        {content.paragraphs.map((paragraph) => (
                            <p
                                key={paragraph}
                                className={cn(
                                    "text-[#827d87]",
                                    "leading-relaxed",
                                    "text-2xl"
                                )}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </PageContentWidth>

            <SparkleDivider className="mt-24" />
        </section>
    );
}