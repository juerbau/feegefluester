
import Image from "next/image";

import { cn } from "@/lib/utils/cn";
import { verbindenContent } from "@/lib/content/verbindenContent";
import verbindenHero from "@/ui/images/verbinden/verbinden-hero.png";

export default function VerbindenHero() {
    const { hero } = verbindenContent;

    return (
        <section
            className="w-full overflow-hidden bg-champagner-light"
            aria-labelledby="verbinden-title"
        >
            <div
                className={cn(
                    "relative w-full",
                    "lg:min-h-[650px]"
                )}
            >
                {/* Bild */}
                <div
                    className={cn(
                        "relative h-[300px] w-full",
                        "sm:h-[400px]",
                        "lg:absolute lg:inset-0 lg:h-full"
                    )}
                >
                    <Image
                        src={verbindenHero}
                        alt="Eine Katze legt ihre Pfote vertrauensvoll in die Hand eines Menschen."
                        fill
                        priority
                        sizes="100vw"
                        className={cn(
                            "object-cover",
                            "object-[35%_center]",
                            "lg:object-center"
                        )}
                    />

                    {/* Verlauf von Bild zu Champagner */}
                    <div
                        className={cn(
                            "pointer-events-none absolute inset-0",
                            "hidden lg:block",
                            "bg-gradient-to-r",
                            "from-transparent from-[30%]",
                            "via-[#f8f4ed]/85 via-[58%]",
                            "to-champagner-light to-[78%]"
                        )}
                        aria-hidden="true"
                    />
                </div>

                {/* Textfeld */}
                <div
                    className={cn(
                        "relative z-10",
                        "mx-auto w-full max-w-xl",
                        "px-6 py-14 md:px-10",
                        "lg:absolute lg:top-1/2",
                        "lg:right-[clamp(0.75rem,3vw,5rem)]",
                        "lg:w-[clamp(19rem,27vw,29rem)] lg:max-w-none",
                        "2xl:right-[clamp(5rem,7vw,10rem)]",
                        "2xl:w-[clamp(29rem,25vw,36rem)]",
                        "lg:-translate-y-1/2 lg:p-0"
                    )}
                >
                    <h1
                        id="verbinden-title"
                        className={cn(
                            "font-body font-light text-[#827d87]",
                            "text-[clamp(2.5rem,4vw,4.5rem)]",
                            "leading-[1.1]"
                        )}
                    >
                        {hero.title}
                    </h1>

                    <p
                        className={cn(
                            "mt-5 font-handwrite text-[#c8a56e]",
                            "text-[clamp(2.3rem,3.5vw,3.8rem)]",
                            "leading-[1.15] whitespace-pre-line"
                        )}
                    >
                        {hero.subtitle}
                    </p>

                    <p
                        className={cn(
                            "mt-8 font-body text-[#827d87]",
                            "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.9]"
                        )}
                    >
                        {hero.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
