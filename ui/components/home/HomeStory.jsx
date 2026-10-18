import MainButton from "@/ui/components/common/MainButton";

export default function HomeStory() {
    return (
        <section
            aria-labelledby="home-story-title"
            className="mx-auto w-full max-w-[1920px] bg-champagner-light"
        >
            <div
                className={[
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1",

                    // Mobile
                    "gap-10 px-6 pb-16 pt-10",

                    // Tablet: weiterhin einspaltig
                    "md:px-10",

                    // Desktop ab 1024 px
                    "lg:grid-cols-[0.85fr_1.15fr]",
                    "lg:gap-24 lg:px-12 lg:pb-24 lg:pt-12",
                ].join(" ")}
            >
                {/* Überschrift */}

                <div
                    className={[
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none",
                    ].join(" ")}
                >
                    <span
                        className={[
                            "font-handwrite",
                            "text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.2]",
                        ].join(" ")}
                    >
                        Eine Geschichte, die berührt
                    </span>

                    <h2
                        id="home-story-title"
                        className={[
                            "mt-6 font-body font-light",
                            "text-[#827d87]",
                            "text-[clamp(2rem,3vw,3.25rem)]",
                            "leading-[1.2]",
                            "tracking-[-0.025em]",
                            "text-balance",
                        ].join(" ")}
                    >
                        Wenn Eifersucht
                        <br className="hidden lg:block" />
                        {" "}das Miteinander stört.
                    </h2>
                </div>

                {/* Geschichte */}

                <div
                    className={[
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none",
                    ].join(" ")}
                >
                    <div
                        className={[
                            "w-full max-w-2xl space-y-5",
                            "font-body",
                            "text-[#827d87]",
                            "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.8]",
                        ].join(" ")}
                    >
                        <p>
                            In unserem Mehrkatzenhaushalt herrschte
                            plötzlich Unfrieden. Eine unserer
                            Stallkatzen wies ihre eigene Tochter
                            immer wieder ab. Schließlich blieb
                            die Tochter ganz fern.
                        </p>

                        <p>
                            Was war zwischen den beiden passiert?
                            Hatten wir etwas übersehen?
                            Und wie konnten wir ihnen helfen?
                        </p>

                        <p>
                            Im Tiergespräch zeigte sich nach und nach
                            eine mögliche Erklärung: Eifersucht und
                            die Sorge, nicht mehr genügend Nähe
                            und Aufmerksamkeit zu bekommen.
                        </p>

                        <p>
                            Rund zehn Tage später kehrte unsere
                            vermisste Katze zurück.
                        </p>
                    </div>

                    {/* Salbeigrüner Zitatkasten */}

                    <blockquote
                        className={[
                            "mt-9 w-full max-w-2xl",
                            "rounded-xl bg-[#afbdaf]",
                            "px-7 py-8",
                            "lg:px-9 lg:py-9",
                        ].join(" ")}
                    >
                        <p
                            className={[
                                "font-handwrite",
                                "text-[#827d87]",
                                "text-[clamp(1.625rem,1.38rem+1.00vw,2.125rem)]",
                                "leading-[1.4]",
                            ].join(" ")}
                        >
                            Manchmal beginnt Veränderung dort,
                            wo wir einander besser verstehen.
                        </p>
                    </blockquote>

                    <MainButton
                        href="/verstehen"
                        className="mt-9"
                    >
                        Die ganze Geschichte lesen
                    </MainButton>
                </div>
            </div>
        </section>
    );
}