import { verstehenContent } from "@/lib/content/verstehenContent";

export default function TierkommunikationContent() {
    const chapter = verstehenContent.chapters.find(
        (item) => item.id === "tierkommunikation"
    );

    if (!chapter) return null;

    return (
        <>
            {/* 1. Persönlicher Einstieg */}
            <section className="w-full bg-champagner-light">
                <div
                    className={[
                        "mx-auto grid w-full max-w-7xl",
                        "grid-cols-1 items-center gap-12",
                        "px-6 py-16",
                        "md:px-10",
                        "lg:grid-cols-2 lg:gap-16 lg:py-24",
                    ].join(" ")}
                >
                    {/* Text */}
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <p
                            className={[
                                "font-handwrite text-[#c8a56e]",
                                "text-[clamp(2rem,3vw,3rem)]",
                                "leading-tight",
                            ].join(" ")}
                        >
                            {chapter.subtitle}
                        </p>

                        <h1
                            className={[
                                "mt-5 font-body font-light",
                                "text-[#827d87]",
                                "text-[clamp(2.2rem,4vw,4rem)]",
                                "leading-[1.15]",
                            ].join(" ")}
                        >
                            {chapter.title}
                        </h1>

                        <p
                            className={[
                                "mt-8 font-body text-[#827d87]",
                                "text-[clamp(1rem,1.2vw,1.125rem)]",
                                "leading-[1.9]",
                            ].join(" ")}
                        >
                            {chapter.innerVoice}
                        </p>
                    </div>

                    {/* Bildplatzhalter */}
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <div
                            className={[
                                "aspect-[4/3] w-full",
                                "rounded-tl-[90px] rounded-br-[90px]",
                                "bg-[#afbdaf]/40",
                            ].join(" ")}
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </section>

            {/* 2. Typische Situationen */}
            <section className="w-full bg-white">
                <div className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 lg:py-24">
                    <div className="mx-auto max-w-2xl">
                        <p
                            className={[
                                "font-handwrite text-[#c8a56e]",
                                "text-[clamp(2rem,3vw,3rem)]",
                            ].join(" ")}
                        >
                            Manchmal bleiben Fragen offen …
                        </p>

                        <h2
                            className={[
                                "mt-4 font-body font-light text-[#827d87]",
                                "text-[clamp(1.8rem,3vw,3rem)]",
                                "leading-tight",
                            ].join(" ")}
                        >
                            Vielleicht erkennst du euch hier wieder.
                        </h2>
                    </div>

                    <ul className="mx-auto mt-12 max-w-2xl">
                        {chapter.situations.map((situation, index) => (
                            <li
                                key={index}
                                className={[
                                    "border-b border-[#c8a56e]/40",
                                    "py-6",
                                    "font-body text-[#827d87]",
                                    "text-[clamp(1rem,1.2vw,1.125rem)]",
                                    "leading-[1.8]",
                                    "first:border-t",
                                ].join(" ")}
                            >
                                {situation}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 3. Persönlicher Abschluss */}
            <section className="w-full bg-champagner-light">
                <div
                    className={[
                        "mx-auto w-full max-w-3xl",
                        "px-6 py-16",
                        "md:px-10 lg:py-24",
                    ].join(" ")}
                >
                    <h2
                        className={[
                            "font-body font-light text-[#827d87]",
                            "text-[clamp(1.9rem,3vw,3rem)]",
                            "leading-tight",
                        ].join(" ")}
                    >
                        Jedes Tiergespräch ist anders.
                    </h2>

                    <div className="mt-8 space-y-5">
                        {chapter.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className={[
                                    "font-body text-[#827d87]",
                                    "text-[clamp(1rem,1.2vw,1.125rem)]",
                                    "leading-[1.9]",
                                ].join(" ")}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <p
                        className={[
                            "mt-10 font-handwrite text-[#c8a56e]",
                            "text-[clamp(2.5rem,4vw,4rem)]",
                            "leading-tight",
                        ].join(" ")}
                    >
                        {chapter.closing}
                    </p>
                </div>
            </section>
        </>
    );
}