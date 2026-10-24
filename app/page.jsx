import {client} from "@/sanity/client";

import {homeContent} from "@/lib/content/homeContent";
import HomeHero from "@/ui/components/home/HomeHero";
import HomeStory from "@/ui/components/home/HomeStory";
import HomeTopics from "@/ui/components/home/HomeTopics";
import HomeIntroduction from "@/ui/components/home/HomeIntroduction";
import HomeAbout from "@/ui/components/home/HomeAbout";
import HomeContact from "@/ui/components/home/HomeContact";
import {buildMetadata} from "@/lib/seo";


export const metadata = buildMetadata({
    title: "Tierkommunikation & Begleitung",
    description:
        "Entdecke Feegeflüster: Einfühlsame Tierkommunikation, neue Perspektiven und eine bewusste Verbindung " +
        "zwischen Mensch und Tier.",
    path: "/",
});


const TEST_QUERY = `*[_type == "test"]{_id, title}`;

const options = {next: {revalidate: 30}};

export default async function HomePage() {
    const content = homeContent;
    // const posts = await client.fetch(TEST_QUERY, {}, options);

    return (
        <div className="min-h-screen">
            <HomeHero
                content={content}
            />

            <HomeTopics/>

            <HomeIntroduction/>

            <HomeAbout/>

            <HomeStory/>

            <HomeContact/>

        </div>
    );
}