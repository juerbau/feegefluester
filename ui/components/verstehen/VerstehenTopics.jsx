
import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";

export default function VerstehenTopics({ topics }) {
    return (
        <section
            aria-labelledby="verstehen-topics-title"
            className="w-full bg-champagner-light"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-7xl",
                    "px-6 py-16",
                    "md:px-10",
                    "lg:px-12 lg:py-24"
                )}
            >
                {/* Einleitung */}
                <div className="mx-auto max-w-3xl text-center">
                    <p
                        className={cn(
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.3]"
                        )}
                    >
                        {topics.eyebrow}
                    </p>

                    <h2
                        id="verstehen-topics-title"
                        className={cn(
                            "mt-5 font-body font-light",
                            "text-[#827d87]",
                            "text-[clamp(2rem,3.5vw,3.5rem)]",
                            "leading-[1.2]",
                            "tracking-[-0.025em]",
                            "text-balance"
                        )}
                    >
                        {topics.title}
                    </h2>
                </div>

                {/* Themenkarten */}
                <div
                    className={cn(
                        "mx-auto mt-14 grid w-full max-w-xl",
                        "grid-cols-1 gap-6",
                        "lg:max-w-none lg:grid-cols-3 lg:gap-8"
                    )}
                >
                    {topics.items.map((topic) => (
                        <article
                            key={topic.number}
                            className={cn(
                                "flex h-full flex-col",
                                "rounded-xl bg-white",
                                "px-8 py-10",
                                "lg:px-9 lg:py-12"
                            )}
                        >
                            {/* Kleine Nummer als Gestaltungselement */}
                            <span
                                aria-hidden="true"
                                className={cn(
                                    "font-handwrite text-[#afbdaf]",
                                    "text-5xl leading-none"
                                )}
                            >
                                {topic.number}
                            </span>

                            {/* Feine Linie */}
                            <div
                                aria-hidden="true"
                                className="mt-6 h-px w-14 bg-[#c8a56e]/70"
                            />

                            <h3
                                className={cn(
                                    "mt-7 font-body font-light",
                                    "text-[#827d87]",
                                    "text-[clamp(1.5rem,2vw,2rem)]",
                                    "leading-[1.3] whitespace-pre-line"
                                )}
                            >
                                {topic.title}
                            </h3>

                            <p
                                className={cn(
                                    "mt-5 font-body",
                                    "text-[#827d87]",
                                    "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                                    "leading-[1.8]"
                                )}
                            >
                                {topic.description}
                            </p>
                        </article>
                    ))}
                </div>

                {/* Weiterführender Link */}
                <div className="mt-12 flex justify-center">
                    <MainButton href={topics.cta.href}>
                        {topics.cta.label}
                    </MainButton>
                </div>

                {/* Hinweis */}
                <p
                    className={cn(
                        "mx-auto mt-8 max-w-2xl",
                        "text-center font-body",
                        "leading-relaxed text-[#827d87]",
                        "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]"
                    )}
                >
                    {topics.disclaimer}
                </p>
            </div>
        </section>
    );
}
