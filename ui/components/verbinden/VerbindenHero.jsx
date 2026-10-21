
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
                    "relative mx-auto w-full",
                    "lg:min-h-[580px] xl:min-h-[650px]"
                )}
            >
                {/* Bildbereich */}
                <div
                    className={cn(
                        "relative h-[300px] w-full",
                        "sm:h-[400px]",
                        "lg:absolute lg:inset-y-0 lg:left-0",
                        "lg:h-full lg:w-[62%] xl:w-[72%]"
                    )}
                >
                    <Image
                        src={verbindenHero}
                        alt="Eine Katze legt ihre Pfote vertrauensvoll in die Hand eines Menschen."
                        fill
                        priority
                        sizes="(min-width: 1280px) 72vw, (min-width: 1024px) 62vw, 100vw"
                        className={cn(
                            "object-cover",
                            "object-[35%_center]",
                            "lg:object-[40%_center]"
                        )}
                    />

                    {/* Sanfte Überblendung nur auf Desktop */}
                    <div
                        className={cn(
                            "pointer-events-none absolute inset-0",
                            "hidden lg:block",
                            "bg-gradient-to-r",
                            "from-transparent from-[38%]",
                            "via-[#f8f4ed]/75 via-[72%]",
                            "to-champagner-light to-[100%]"
                        )}
                        aria-hidden="true"
                    />
                </div>

                {/* Textbereich */}
                <div
                    className={cn(
                        "relative z-10 mx-auto flex w-full max-w-7xl",
                        "px-6 py-14 md:px-10",
                        "lg:min-h-[580px] lg:items-center",
                        "lg:justify-end lg:py-20",
                        "xl:min-h-[650px]"
                    )}
                >
                    <div
                        className={cn(
                            "mx-auto w-full max-w-xl",
                            "lg:mx-0 lg:w-[42%] lg:max-w-none",
                            "xl:w-[40%]",
                            "lg:pl-0 xl:pl-12"
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
                                "leading-[1.15]",
                                "whitespace-pre-line"
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
            </div>
        </section>
    );
}
