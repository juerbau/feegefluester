
import Image from "next/image";

import { cn } from "@/lib/utils/cn";
import { kontaktContent } from "@/lib/content/kontaktContent";
import kontaktHero from "@/ui/images/kontakt/kontakt-hero.png";

export default function KontaktHero() {
    const { hero } = kontaktContent;

    return (
        <section
            className="w-full overflow-hidden bg-champagner-light"
            aria-labelledby="kontakt-hero-title"
        >
            <div
                className={cn(
                    "relative isolate w-full",
                    "lg:min-h-[680px]"
                )}
            >
                {/* Bild: Desktop als Hintergrund */}
                <Image
                    src={kontaktHero}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 100vw, 1px"
                    className={cn(
                        "hidden lg:block",
                        "z-0 object-cover object-center"
                    )}
                />

                {/* Desktop-Verlauf */}
                <div
                    className={cn(
                        "pointer-events-none absolute inset-0 z-[1]",
                        "hidden lg:block",
                        "bg-[linear-gradient(90deg,rgba(247,242,233,0.99)_0%,rgba(247,242,233,0.98)_30%,rgba(247,242,233,0.90)_43%,rgba(247,242,233,0.45)_58%,rgba(247,242,233,0.08)_72%,transparent_82%)]"
                    )}
                    aria-hidden="true"
                />

                {/* Bild: Mobile und Tablet */}
                <div
                    className={cn(
                        "relative w-full overflow-hidden",
                        "aspect-[16/10] sm:aspect-[16/8]",
                        "lg:hidden"
                    )}
                >
                    <Image
                        src={kontaktHero}
                        alt={hero.imageAlt}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-[70%_center]"
                    />
                </div>

                {/* Hero-Inhalt */}
                <div
                    className={cn(
                        "relative z-10",
                        "mx-auto flex w-full max-w-7xl items-center",
                        "px-6 py-14 md:px-10 md:py-16",
                        "lg:min-h-[680px] lg:py-20"
                    )}
                >
                    <div
                        className={cn(
                            "mx-auto w-full max-w-xl",
                            "lg:mx-0 lg:w-[43%] lg:max-w-[520px]"
                        )}
                    >
                        <h1
                            id="kontakt-hero-title"
                            className={cn(
                                "font-body font-light text-[#827d87]",
                                "text-[clamp(3rem,4.5vw,5rem)]",
                                "leading-[1.15]",
                                "text-center lg:text-left"
                            )}
                        >
                            {hero.title}
                        </h1>

                        <p
                            className={cn(
                                "mt-7 font-handwrite font-normal",
                                "text-[#c8a56e]",
                                "text-[clamp(2.3rem,3.4vw,3.6rem)]",
                                "leading-[1.35] whitespace-pre-line",
                                "text-center lg:text-left"
                            )}
                        >
                            {hero.subtitle}
                        </p>

                        <p
                            className={cn(
                                "mt-9 w-full",
                                "font-body text-[#827d87]",
                                "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                                "leading-[1.9] text-left"
                            )}
                        >
                            {hero.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
