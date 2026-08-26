import {Fragment} from "react";

import {verstehenContent} from "@/lib/content/verstehenContent";

import VerstehenIntro from "@/ui/components/verstehen/VerstehenIntro";
import VerstehenChapter from "@/ui/components/verstehen/VerstehenChapter";
import VerstehenClosing from "@/ui/components/verstehen/VerstehenClosing";
import SparkleDivider from "@/ui/components/utils/SparkleDivider";

export default function VerstehenPage() {
    const content = verstehenContent;

    return (
        <main className="min-h-screen">
            <VerstehenIntro
                content={content.intro}
            />

            {content.chapters.map((chapter, index) => (
                <Fragment key={chapter.id}>
                    {index > 0 && (
                        <SparkleDivider
                            size={16}
                            className="my-12"
                        />
                    )}

                    <VerstehenChapter
                        content={chapter}
                    />
                </Fragment>
            ))}

            <SparkleDivider
                size={16}
                className="my-12"
            />

            <VerstehenClosing
                content={content.closing}
            />
        </main>
    );
}