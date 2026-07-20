import {client} from "@/sanity/client";

import {homeContent} from "@/lib/content/homeContent";
import HomeHero from "@/ui/components/home/HomeHero";
import PageContentWidth from "@/ui/components/utils/PageContentWidth";
import HomeStory from "@/ui/components/home/HomeStory";

const TEST_QUERY = `*[_type == "test"]{_id, title}`;

const options = {next: {revalidate: 30}};

export default async function HomePage() {
    const content = homeContent;
    // const posts = await client.fetch(TEST_QUERY, {}, options);

    return (
        <main className="px-8 min-h-screen">
            <PageContentWidth width="hero">
                <HomeHero
                    content={content.hero}
                />
            </PageContentWidth>

            <PageContentWidth width="default">
                <HomeStory
                    story={content.stories[0]}
                    className="bg-[#FAF6F0] px-25"
                />
            </PageContentWidth>

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