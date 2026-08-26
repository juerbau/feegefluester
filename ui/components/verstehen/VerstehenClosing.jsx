import {cn} from "@/lib/utils/cn";

import MainButton from "@/ui/components/MainButton";
import PageContentWidth from "@/ui/components/utils/PageContentWidth";

export default function VerstehenClosing({
                                             content,
                                             className,
                                         }) {
    return (
        <section
            className={cn(
                "px-8 py-20",
                className
            )}
        >
            <PageContentWidth width="default">
                <div
                    className={cn(
                        "mx-auto",
                        "flex max-w-3xl flex-col items-center",
                        "text-center"
                    )}
                >
                    {content.title && (
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
                    )}

                    {content.paragraphs?.length > 0 && (
                        <div
                            className={cn(
                                content.title && "mt-10",
                                "space-y-6"
                            )}
                        >
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
                    )}

                    {content.quote && (
                        <p
                            className={cn(
                                "mt-10",
                                "font-accent italic",
                                "text-[#c8a56e]",
                                "leading-relaxed",
                                "text-3xl"
                            )}
                        >
                            {content.quote}
                        </p>
                    )}

                    {content.cta && (
                        <MainButton
                            href={content.cta.href}
                            className="mt-12"
                        >
                            {content.cta.label}
                        </MainButton>
                    )}
                </div>
            </PageContentWidth>
        </section>
    );
}