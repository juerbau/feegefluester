import Image from "next/image";

import catImage from "@/ui/images/verstehen/verstehen-introduction.png";

export default function VerstehenIntroduction() {
    return (
        <section
            aria-labelledby="verstehen-introduction-title"
            className="w-full bg-white"
        >
            <div
                className={[
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1 items-center",
                    "gap-12 px-6 py-16",
                    "md:px-10",
                    "lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24",
                ].join(" ")}
            >
                {/* Linke Seite – emotionaler Gedanke */}
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
                            "text-[clamp(2.25rem,3.2vw,3.5rem)]",
                            "leading-[1.45]",
                        ].join(" ")}
                    >
                        Klarheit und Zuversicht wachsen,
                        wenn wir bereit sind,
                        neue Wege zu gehen.
                    </p>

                    <p
                        className={[
                            "mt-7 font-handwrite text-[#c8a56e]",
                            "text-[clamp(2.25rem,3.2vw,3.5rem)]",
                            "leading-[1.45]",
                        ].join(" ")}
                    >
                        Genau dort entsteht Raum für das,
                        was vorher verborgen war.
                    </p>

                    {/* Dezenter goldener Akzent */}
                    <div
                        aria-hidden="true"
                        className="mt-10 h-px w-20 bg-[#c8a56e]"
                    />
                </div>

                {/* Rechte Seite – Bild und Erklärung */}
                <div
                    className={[
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none",
                    ].join(" ")}
                >
                    {/* Katzenfoto */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
                        <Image
                            src={catImage}
                            alt="Eine Katze ruht entspannt in einer gemütlichen Umgebung."
                            fill
                            className="object-cover object-center"
                            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 576px, 100vw"
                        />
                    </div>

                    {/* Überschrift */}
                    <h2
                        id="verstehen-introduction-title"
                        className={[
                            "mt-9 font-body font-light",
                            "text-[#827d87]",
                            "text-[clamp(2rem,3vw,3.25rem)]",
                            "leading-[1.2]",
                            "tracking-[-0.025em]",
                        ].join(" ")}
                    >
                        Jedes Verhalten hat einen Sinn.
                    </h2>

                    {/* Beschreibung */}
                    <div
                        className={[
                            "mt-6 max-w-xl space-y-5",
                            "font-body text-[#827d87]",
                            "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.8]",
                        ].join(" ")}
                    >
                        <p>
                            Für mich bedeutet Tierkommunikation, einem Tier
                            auf einer anderen Ebene zu begegnen und ihm
                            bewusst zuzuhören.
                        </p>

                        <p>
                            In einem Tiergespräch nehme ich auf telepathischem
                            Weg Kontakt zu deinem Tier auf. Was ich dabei an
                            Eindrücken, Gefühlen und Botschaften wahrnehme,
                            gebe ich an dich weiter.
                        </p>

                        <p>
                            So kann ein Austausch entstehen, der neue
                            Sichtweisen eröffnet und dabei hilft, dein Tier
                            und seine Bedürfnisse besser zu verstehen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}