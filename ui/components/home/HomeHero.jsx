import HomeHeroImages from "@/ui/components/home/HomeHeroImages";
import HomeHeroIntro from "@/ui/components/home/HomeHeroIntro";

export default function HomeHero({ content }) {
    return (
        <section className="relative w-full overflow-hidden">
            <HomeHeroImages />

            <HomeHeroIntro
                content={content}
                className="z-10"
            />
        </section>
    );
}