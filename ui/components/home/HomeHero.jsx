import HomeHeroImages from "@/ui/components/home/HomeHeroImages";
import HomeHeroIntro from "@/ui/components/home/HomeHeroIntro";
import {cn} from "@/lib/utils/cn";


export default function HomeHero({content}) {
    return (
        <section
            aria-label="Willkommen bei Feegeflüster"
            className="w-full"
        >
            <div className="relative w-full overflow-hidden">

                {/* Wechselnde Hero-Bilder */}
                <HomeHeroImages/>

                {/* Sanfter Champagnerbeige-Farbverlauf */}
                <div
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none",
                        "absolute inset-0 z-1",
                        "hidden lg:block",
                        "bg-[linear-gradient(to_right,#e4dfd7_0%,#e4dfd7_15%,rgba(228,223,215,0.95)_28%,rgba(228,223,215,0.65)_43%,rgba(228,223,215,0.2)_55%,transparent_70%)]"
                    )}
                />

                {/* Desktop-Text über dem Bild */}
                <HomeHeroIntro
                    content={content}
                    className="hidden lg:flex"
                />
            </div>

            {/* Mobile: Text unter dem Bild */}
            <div className="bg-champagner-light px-6 py-10 lg:hidden">
                <HomeHeroIntro
                    content={content}
                    mobile
                />
            </div>
        </section>
    );
}