import MainButton from "@/ui/components/common/MainButton";

export default function VerstehenTopics() {
    const topics = [
        {
            number: "01",
            title: "Verhalten\nverstehen",
            description:
                "Dein Tier verhält sich plötzlich anders, zieht sich zurück oder reagiert ungewohnt? Manchmal hilft ein neuer Blickwinkel, sein Verhalten besser einzuordnen.",
        },
        {
            number: "02",
            title: "Bedürfnisse\nerkennen",
            description:
                "Du möchtest wissen, was dein Tier beschäftigt und was es braucht? Tierkommunikation lädt dazu ein, seine Gefühle und Bedürfnisse bewusster wahrzunehmen.",
        },
        {
            number: "03",
            title: "Verbindung\nvertiefen",
            description:
                "Du wünschst dir ein noch tieferes Verständnis füreinander? Ein achtsamer Austausch kann neue Perspektiven eröffnen und eure Verbindung bereichern.",
        },
    ];

    return (
        <section
            aria-labelledby="verstehen-topics-title"
            className="w-full bg-champagner-light"
        >
            <div
                className={[
                    "mx-auto w-full max-w-7xl",
                    "px-6 py-16",
                    "md:px-10",
                    "lg:px-12 lg:py-24",
                ].join(" ")}
            >
                {/* Einleitung */}
                <div className="mx-auto max-w-3xl text-center">
                    <p
                        className={[
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.3]",
                        ].join(" ")}
                    >
                        Manchmal bleiben Fragen offen …
                    </p>

                    <h2
                        id="verstehen-topics-title"
                        className={[
                            "mt-5 font-body font-light",
                            "text-[#827d87]",
                            "text-[clamp(2rem,3.5vw,3.5rem)]",
                            "leading-[1.2]",
                            "tracking-[-0.025em]",
                            "text-balance",
                        ].join(" ")}
                    >
                        Was möchtest du deinem Tier sagen –
                        oder von ihm erfahren?
                    </h2>
                </div>

                {/* Themenkarten */}
                <div
                    className={[
                        "mx-auto mt-14 grid w-full max-w-xl",
                        "grid-cols-1 gap-6",
                        "lg:max-w-none lg:grid-cols-3 lg:gap-8",
                    ].join(" ")}
                >
                    {topics.map((topic) => (
                        <article
                            key={topic.number}
                            className={[
                                "flex h-full flex-col",
                                "rounded-xl bg-white",
                                "px-8 py-10",
                                "lg:px-9 lg:py-12",
                            ].join(" ")}
                        >
                            {/* Kleine Nummer als Gestaltungselement */}
                            <span
                                aria-hidden="true"
                                className={[
                                    "font-handwrite text-[#afbdaf]",
                                    "text-5xl leading-none",
                                ].join(" ")}
                            >
                                {topic.number}
                            </span>

                            {/* Feine Linie */}
                            <div
                                aria-hidden="true"
                                className="mt-6 h-px w-14 bg-[#c8a56e]/70"
                            />

                            <h3
                                className={[
                                    "mt-7 font-body font-light",
                                    "text-[#827d87]",
                                    "text-[clamp(1.5rem,2vw,2rem)]",
                                    "leading-[1.3] whitespace-pre-line",
                                ].join(" ")}
                            >
                                {topic.title}
                            </h3>

                            <p
                                className={[
                                    "mt-5 font-body",
                                    "text-[#827d87]",
                                    "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                                    "leading-[1.8]",
                                ].join(" ")}
                            >
                                {topic.description}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <MainButton href="/verstehen/tierkommunikation">
                        Was Tierkommunikation für mich bedeutet
                    </MainButton>
                </div>
                <p
                    className={[
                        "mx-auto mt-8 max-w-2xl",
                        "text-center font-body",
                        "leading-relaxed text-[#827d87]",
                        "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                    ].join(" ")}
                >
                    Tierkommunikation kann neue Perspektiven eröffnen,
                    ersetzt jedoch keine tierärztliche Untersuchung,
                    Diagnose oder Behandlung.
                </p>
            </div>
        </section>
    );
}