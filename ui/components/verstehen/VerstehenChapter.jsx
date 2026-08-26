import {cn} from "@/lib/utils/cn";

import PageContentWidth from "@/ui/components/utils/PageContentWidth";

export default function VerstehenChapter({
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

                    {content.situations?.length > 0 && (
                        <div className="mt-12 space-y-5">
                            {content.situations.map((situation) => (
                                <p
                                    key={situation}
                                    className={cn(
                                        "text-[#827d87]",
                                        "leading-relaxed",
                                        "text-2xl"
                                    )}
                                >
                                    {situation}
                                </p>
                            ))}
                        </div>
                    )}

                    {content.paragraphs?.length > 0 && (
                        <div className="mt-12 space-y-6">
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

                    {content.examples?.length > 0 && (
                        <div className="mt-12 space-y-5">
                            {content.examples.map((example) => (
                                <p
                                    key={example}
                                    className={cn(
                                        "font-accent italic",
                                        "text-[#827d87]",
                                        "leading-relaxed",
                                        "text-2xl"
                                    )}
                                >
                                    {example}
                                </p>
                            ))}
                        </div>
                    )}

                    {content.closing && (
                        <p
                            className={cn(
                                "mt-12",
                                "font-accent italic",
                                "text-[#c8a56e]",
                                "leading-relaxed",
                                "text-3xl"
                            )}
                        >
                            {content.closing}
                        </p>
                    )}
                </div>
            </PageContentWidth>
        </section>
    );
}