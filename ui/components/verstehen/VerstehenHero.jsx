import Image from "next/image";

import heroImage from "@/ui/images/verstehen/verstehen-hero.jpg";

export default function VerstehenHero() {
    return (
        <section
            aria-labelledby="verstehen-hero-title"
            className="mx-auto w-full max-w-[1920px] bg-champagner-light"
        >
            <div
                className={[
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1 items-center",

                    // Mobile
                    "gap-12 px-6 py-16",

                    // Tablet: weiterhin einspaltig
                    "md:px-10",

                    // Desktop ab 1024 px
                    "lg:grid-cols-2 lg:gap-20",
                    "lg:px-12 lg:py-24",
                ].join(" ")}
            >
                {/* Bildbereich */}
                <div
                    className={[
                        "relative mx-auto w-full max-w-xl",
                        "lg:mx-0 lg:max-w-none",
                    ].join(" ")}
                >
                    <div
                        className={[
                            "relative aspect-[4/5] w-full overflow-hidden",
                            "rounded-tl-[72px] rounded-tr-sm",
                            "rounded-bl-sm rounded-br-[72px]",
                            "lg:rounded-tl-[110px]",
                            "lg:rounded-br-[110px]",
                        ].join(" ")}
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
                    className={[
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none",
                    ].join(" ")}
                >
                    {/* Hauptüberschrift */}
                    <h1
                        id="verstehen-hero-title"
                        className={[
                            "font-body font-light text-[#827d87]",
                            "text-[clamp(3.5rem,5.5vw,5.5rem)]",
                            "leading-[1.1] tracking-[-0.035em]",
                        ].join(" ")}
                    >
                        Verstehen
                    </h1>

                    {/* Handschriftlicher Leitsatz */}
                    <p
                        className={[
                            "mt-7 font-handwrite text-[#c8a56e]",
                            "text-[clamp(2.25rem,3.2vw,3.5rem)]",
                            "leading-[1.2]",
                        ].join(" ")}
                    >
                        Hinter jedem Verhalten
                        <br className="hidden lg:block" />
                        {" "}steckt eine Geschichte.
                    </p>

                    {/* Einführungstext */}
                    <p
                        className={[
                            "mt-9 max-w-xl",
                            "font-body text-[#827d87]",
                            "text-[clamp(0.95rem,1.1vw,1.125rem)]",
                            "leading-[1.85]",
                        ].join(" ")}
                    >
                        Manchmal zeigt uns unser Tier durch sein Verhalten,
                        dass etwas in ihm vorgeht. Tierkommunikation lädt
                        uns ein, genauer hinzuhören, neue Perspektiven
                        zu entdecken und einander besser zu verstehen.
                    </p>
                </div>
            </div>
        </section>
    );
}