import {cn} from "@/lib/utils/cn";

import MainButton from "@/ui/components/common/MainButton";
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


                    {content.quote && (
                        <p
                            className={cn(
                                "mt-10",
                                "font-accent italic",
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