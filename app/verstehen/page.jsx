import {Fragment} from "react";

import {verstehenContent} from "@/lib/content/verstehenContent";

import PageIntro from "@/ui/components/common/PageIntro";
import VerstehenChapter from "@/ui/components/verstehen/VerstehenChapter";
import VerstehenClosing from "@/ui/components/verstehen/VerstehenClosing";
import SparkleDivider from "@/ui/components/utils/SparkleDivider";
import VerstehenHero from "@/ui/components/verstehen/VerstehenHero";
import VerstehenIntroduction from "@/ui/components/verstehen/VerstehenIntroduction";
import VerstehenTopics from "@/ui/components/verstehen/VerstehenTopics";
import VerstehenPerspectives from "@/ui/components/verstehen/VerstehenPerspectives";

export default function VerstehenPage() {
    const content = verstehenContent;

    return (
        <main className="min-h-screen">

            <VerstehenHero />

            <VerstehenIntroduction />

            <VerstehenTopics />

            <VerstehenPerspectives />

            {/*<PageIntro*/}
            {/*    content={content.intro}*/}
            {/*/>*/}

            {/*{content.chapters.map((chapter, index) => (*/}
            {/*    <Fragment key={chapter.id}>*/}
            {/*        {index > 0 && (*/}
            {/*            <SparkleDivider*/}
            {/*                size={16}*/}
            {/*                className="my-12"*/}
            {/*            />*/}
            {/*        )}*/}

            {/*        <VerstehenChapter*/}
            {/*            content={chapter}*/}
            {/*        />*/}
            {/*    </Fragment>*/}
            {/*))}*/}

            {/*<SparkleDivider*/}
            {/*    size={16}*/}
            {/*    className="my-12"*/}
            {/*/>*/}

            {/*<VerstehenClosing*/}
            {/*    content={content.closing}*/}
            {/*/>*/}
        </main>
    );
}