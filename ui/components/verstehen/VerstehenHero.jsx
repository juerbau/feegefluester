
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import heroImage from "@/ui/images/verstehen/verstehen-hero.png";

export default function VerstehenHero({ hero }) {
    return (
        <section
            aria-labelledby="verstehen-hero-title"
            className="w-full bg-champagner-light"
        >
            <div
                className={cn(
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1 items-center",

                    // Mobile
                    "gap-12 px-6 py-16",

                    // Tablet: weiterhin einspaltig
                    "md:px-10",

                    // Desktop ab 1024 px
                    "lg:grid-cols-2 lg:gap-20",
                    "lg:px-12 lg:py-24"
                )}
            >
                {/* Bildbereich */}
                <div
                    className={cn(
                        "relative mx-auto w-full max-w-xl",
                        "lg:mx-0 lg:max-w-none"
                    )}
                >
                    <div
                        className={cn(
                            "relative aspect-[4/5] w-full overflow-hidden",
                            "rounded-tl-[72px] rounded-tr-sm",
                            "rounded-bl-sm rounded-br-[72px]",
                            "lg:rounded-tl-[110px]",
                            "lg:rounded-br-[110px]"
                        )}
                    >
                        <Image
                            src={heroImage}
                            alt="Ein Tier blickt aufmerksam in seine Umgebung."
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 576px, 100vw"
                        />
                    </div>
                </div>

                {/* Textbereich */}
                <div
                    className={cn(
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none"
                    )}
                >
                    {/* Hauptüberschrift */}
                    <h1
                        id="verstehen-hero-title"
                        className={cn(
                            "font-body font-light text-[#827d87]",
                            "text-[clamp(3.5rem,5.5vw,5.5rem)]",
                            "leading-[1.1] tracking-[-0.035em]"
                        )}
                    >
                        {hero.title}
                    </h1>

                    {/* Handschriftlicher Leitsatz */}
                    <p
                        className={cn(
                            "mt-7 font-handwrite text-[#c8a56e]",
                            "text-[clamp(2.25rem,3.2vw,3.5rem)]",
                            "leading-[1.2]"
                        )}
                    >
                        {hero.statement.firstLine}
                        <br className="hidden lg:block" />
                        {" "}{hero.statement.secondLine}
                    </p>

                    {/* Einführungstext */}
                    <p
                        className={cn(
                            "mt-9 max-w-xl",
                            "font-body text-[#827d87]",
                            "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.85]"
                        )}
                    >
                        {hero.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
