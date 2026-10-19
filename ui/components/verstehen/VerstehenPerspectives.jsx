import MainButton from "@/ui/components/common/MainButton";

export default function VerstehenPerspectives() {
    return (
        <section
            aria-labelledby="verstehen-perspectives-title"
            className="w-full bg-white"
        >
            <div
                className={[
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1 items-start",
                    "gap-10 px-6 pb-16 pt-10",
                    "md:px-10",
                    "lg:grid-cols-[0.9fr_1.1fr]",
                    "lg:gap-24 lg:px-12 lg:pb-24 lg:pt-12",
                ].join(" ")}
            >
                {/* Linke Seite – emotionaler Einstieg */}
                <div
                    className={[
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none",
                    ].join(" ")}
                >
                    <p
                        className={[
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.3]",
                        ].join(" ")}
                    >
                        Manchmal lohnt sich ein Blick nach innen.
                    </p>

                    <h2
                        id="verstehen-perspectives-title"
                        className={[
                            "mt-6 font-body font-light",
                            "text-[#827d87]",
                            "text-[clamp(2rem,3vw,3.25rem)]",
                            "leading-[1.2]",
                            "tracking-[-0.025em]",
                            "text-balance",
                        ].join(" ")}
                    >
                        Wenn Tiere uns neue Perspektiven zeigen.
                    </h2>
                </div>

                {/* Rechte Seite – Spiegelthemen */}
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
                            "font-body text-[#827d87]",
                            "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.8]",
                        ].join(" ")}
                    >
                        <p>
                            Unsere Tiere begleiten uns oft sehr aufmerksam
                            durch den Alltag. Manchmal regt uns ihr
                            Verhalten dazu an, nicht nur auf sie,
                            sondern auch auf uns selbst zu schauen.
                        </p>

                        <p>
                            Welche Gefühle beschäftigen uns gerade?
                            Gibt es Veränderungen oder Situationen,
                            die unser gemeinsames Leben beeinflussen?
                        </p>

                        <p>
                            In der Tierkommunikation werden solche
                            möglichen Zusammenhänge als Spiegelthemen
                            bezeichnet. Sie laden dazu ein, neue
                            Perspektiven einzunehmen und das
                            Miteinander bewusster zu betrachten.
                        </p>

                        <p>
                            Dabei ist nicht jedes Verhalten eines
                            Tieres ein Spiegel seines Menschen.
                            Spiegelthemen sind eine mögliche
                            Sichtweise, keine allgemeingültige Erklärung.
                        </p>
                    </div>

                    {/* Weiterführender Button */}
                    <MainButton
                        href="/verstehen/spiegelthemen"
                        className="mt-9"
                    >
                        Mehr über Spiegelthemen erfahren
                    </MainButton>
                </div>
            </div>
        </section>
    );
}