import {verstehenContent} from "@/lib/content/verstehenContent";

import VerstehenIntro from "@/ui/components/verstehen/VerstehenIntro";
import PageContentWidth from "@/ui/components/utils/PageContentWidth";
import {cn} from "@/lib/utils/cn";

export default function VerstehenPage() {
    const content = verstehenContent;

    return (
        <main className="min-h-screen">
            <VerstehenIntro content={content.intro} />

            <section
                className={`
                    px-8
                    pt-5
                    pb-20
                `}
            >
                <PageContentWidth width="default">
                    <div className="px-30">
                        {/*<p*/}
                        {/*    className={cn(*/}
                        {/*        "font-accent font-light",*/}
                        {/*        "font-accent italic",*/}
                        {/*        "text-4xl",*/}
                        {/*        "tracking-tight",*/}
                        {/*        "leading-tight",*/}
                        {/*    )}*/}
                        {/*>*/}
                        {/*    {content.tierkommunikation.title}*/}
                        {/*</p>*/}
                        <p
                            className={cn(
                                "font-accent font-light",
                                "text-[#827d87]",
                                "tracking-tight",
                                "leading-tight",
                                "text-4xl",
                            )}
                        >
                            {content.tierkommunikation.subtitle}
                        </p>

                        <div className="mt-10 space-y-6">
                            {content.tierkommunikation.paragraphs.map(
                                (paragraph) => (
                                    <p
                                        key={paragraph}
                                        className={`
                                            text-[#827d87]
                                            leading-relaxed
                                            text-2xl
                                        `}
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </div>
                </PageContentWidth>
            </section>
        </main>
    );
}