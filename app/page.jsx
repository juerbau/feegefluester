import {client} from "@/sanity/client";

import {homeContent} from "@/lib/content/homeContent";
import HomeHero from "@/ui/components/home/HomeHero";
import PageContentWidth from "@/ui/components/utils/PageContentWidth";
import HomeStory from "@/ui/components/home/HomeStory";
import PageIntro from "@/ui/components/common/PageIntro";
import HomeTopics from "@/ui/components/home/HomeTopics";
import HomeQuote from "@/ui/components/home/HomeQuote";
import HomeIntroduction from "@/ui/components/home/HomeIntroduction";
import SparkleDivider from "@/ui/components/utils/SparkleDivider";
import SectionTransition from "@/ui/components/utils/SectionTransition";
import HomeAbout from "@/ui/components/home/HomeAbout";
import SectionSpacer from "@/ui/components/utils/SectionSpacer";
import HomeContact from "@/ui/components/home/HomeContact";

const TEST_QUERY = `*[_type == "test"]{_id, title}`;

const options = {next: {revalidate: 30}};

export default async function HomePage() {
    const content = homeContent;
    // const posts = await client.fetch(TEST_QUERY, {}, options);

    return (
        <main className="min-h-screen">
            <HomeHero
                content={content}
            />

            <HomeTopics />

            {/*<SectionSpacer />*/}

            <HomeIntroduction />

            {/*<SectionSpacer />*/}

            <HomeAbout />

            {/*<SectionSpacer />*/}

            <HomeStory />

            {/*<SectionSpacer />*/}

            <HomeContact />

            <SectionSpacer />
            {/*<HomeQuote />*/}

            {/*<PageIntro*/}
            {/*    content={content.intro}*/}
            {/*    className="bg-[#ffffff] h-120"*/}
            {/*/>*/}
            {/*<PageContentWidth width="hero">*/}


            {/*    <HomeStory*/}
            {/*        story={content.stories[0]}*/}
            {/*        className="px-25 font-body"*/}
            {/*    />*/}

            {/*</PageContentWidth>*/}

            {/*<br />*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<h1 className="text-4xl font-bold mb-8">Posts</h1>*/}
            {/*<ul className="flex flex-col gap-y-4">*/}
            {/*    {posts.map((post) => (*/}
            {/*        <li key={post._id}>*/}
            {/*            <h2 className="text-xl font-semibold">{post.title}</h2>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </main>
    );
}