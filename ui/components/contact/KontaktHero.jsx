import Image from "next/image";

import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";
import { contactContent } from "@/lib/content/contactContent";

export default function KontaktHero() {
    const { hero } = contactContent;

    return (
        <section
            className={cn(
                "relative isolate w-full overflow-hidden",
                "bg-champagner-light"
            )}
            aria-labelledby="kontakt-hero-title"
        >
            {/* Hintergrundbild */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/images/kontakt/kontakt-hero.jpg"
                    alt={hero.imageAlt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[65%_center]"
                />
            </div>

            {/* Heller Verlauf für gute Lesbarkeit */}
            <div
                className={cn(
                    "absolute inset-0 -z-10",
                    "bg-gradient-to-r",
                    "from-[#f7f2e9]/98 via-[#f7f2e9]/90 to-[#f7f2e9]/25",
                    "lg:from-[#f7f2e9]/98 lg:via-[#f7f2e9]/75 lg:to-transparent"
                )}
                aria-hidden="true"
            />

            <div
                className={cn(
                    "mx-auto flex w-full max-w-6xl items-center",
                    "px-6 py-20 md:px-10",
                    "min-h-[620px] lg:min-h-[680px]",
                    "lg:py-24"
                )}
            >
                <div className="w-full max-w-2xl">
                    <p
                        className={cn(
                            "font-body text-sm font-medium",
                            "tracking-[0.14em] text-[#c8a56e]"
                        )}
                    >
                        {hero.eyebrow}
                    </p>

                    <h1
                        id="kontakt-hero-title"
                        className={cn(
                            "mt-7 font-handwrite font-normal",
                            "text-[#c8a56e]",
                            "text-[clamp(2.7rem,4.8vw,4.7rem)]",
                            "leading-[1.2] whitespace-pre-line"
                        )}
                    >
                        {hero.title}
                    </h1>

                    <div
                        className="mt-8 h-px w-16 bg-[#c8a56e]"
                        aria-hidden="true"
                    />

                    <p
                        className={cn(
                            "mt-8 max-w-xl",
                            "font-body text-[#827d87]",
                            "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.9] text-left"
                        )}
                    >
                        {hero.description}
                    </p>

                    <div className="mt-10">
                        <MainButton href="#kontaktformular">
                            {hero.buttonText}
                        </MainButton>
                    </div>
                </div>
            </div>
        </section>
    );
}