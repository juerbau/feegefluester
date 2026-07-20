import hero from "@/ui/images/hero/Hero-neu_2.png";
import Image from "next/image";
import HomeHeroIntro from "@/ui/components/home/HomeHeroIntro";
import HomeHeroClaim from "@/ui/components/home/HomeHeroClaim";

export default function HomeHero({content}) {
    return (
        <>
            <section
                className="relative mx-auto overflow-hidden"
                aria-labelledby="home-hero-title"
            >
                <Image
                    src={hero}
                    alt=""
                    priority
                    sizes="(min-width: 1536px) 1536px, 100vw"
                    className="block h-auto w-full"
                />

                <HomeHeroIntro
                    content={content}
                    className="font-body"
                />
            </section>

            <HomeHeroClaim
                content={content.claim}
            />
        </>
    );
}