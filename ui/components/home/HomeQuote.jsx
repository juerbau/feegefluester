import { IconSparkle } from "@tabler/icons-react";

export default function HomeQuote() {
    return (
        <section
            aria-label="Ein Gedanke von Feegeflüster"
            className="
                relative
                mx-auto
                mt-4
                w-full
                max-w-[1920px]
                overflow-hidden
                bg-[#f4f2ef]
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-5xl
                    flex-col
                    items-center
                    px-6
                    py-14
                    text-center
                    sm:py-16
                    lg:py-20
                "
            >
                {/* Drei goldene Funkelsterne */}
                <div
                    aria-hidden="true"
                    className="flex items-center justify-center gap-3 text-[#c8a56e]"
                >
                    {Array.from({ length: 3 }).map((_, index) => (
                        <IconSparkle
                            key={index}
                            size={22}
                            stroke={1.25}
                        />
                    ))}
                </div>

                {/* Zitat */}
                <blockquote className="mt-8">
                    <p
                        className="
                            text-[clamp(1.8rem,3vw,2.9rem)]
                            font-handwrite
                            leading-[1.35]
                            tracking-[0.01em]
                            text-[#827d87]
                            text-balance
                        "
                    >
                        Tiere sind nicht unser ganzes Leben,
                        <br className="hidden sm:block" />
                        {" "}aber sie machen unser Leben ganz.
                    </p>
                </blockquote>

                {/* Goldene Abschlusslinie */}
                <div
                    aria-hidden="true"
                    className="mt-8 h-px w-14 bg-[#c8a56e]"
                />
            </div>
        </section>
    );
}