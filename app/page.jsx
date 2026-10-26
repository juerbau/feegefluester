import HomeHero from "@/ui/components/home/HomeHero";
import HomeStory from "@/ui/components/home/HomeStory";
import HomeTopics from "@/ui/components/home/HomeTopics";
import HomeIntroduction from "@/ui/components/home/HomeIntroduction";
import HomeAbout from "@/ui/components/home/HomeAbout";
import HomeContact from "@/ui/components/home/HomeContact";
import {buildMetadata} from "@/lib/seo";
import {homeContent} from "@/lib/content/home/homeContent";


export const metadata = buildMetadata({
    title: "Tierkommunikation & Begleitung",
    description:
        "Entdecke Feegeflüster: Einfühlsame Tierkommunikation, neue Perspektiven und eine bewusste Verbindung " +
        "zwischen Mensch und Tier.",
    path: "/",
});


export default async function HomePage() {
    const { hero, topics, introduction, about, story, contact } = homeContent;

    return (
        <div className="min-h-screen">
            <HomeHero content={hero}/>
            <HomeTopics topics={topics} />
            <HomeIntroduction introduction={introduction} />
            <HomeAbout about={about} />
            <HomeStory story={story} />
            <HomeContact contact={contact} />
        </div>
    );
}