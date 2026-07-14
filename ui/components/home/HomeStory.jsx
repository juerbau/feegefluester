import {cn} from "@/lib/utils/cn";

import GoldenTransition from "@/ui/components/GoldenTransition";
import MainButton from "@/ui/components/MainButton";

export default function HomeStory({
                                      story,
                                      className,
                                  }) {
    return (
        <section
            className={cn(
                "mx-auto",
                "max-w-4xl",
                "py-[clamp(5rem,8vw,8rem)]",
                className
            )}
        >
            {/* StoryTitle */}

            <h2
                className={cn(
                    "text-[clamp(2rem,3vw,3rem)]",
                    "leading-tight",
                    "text-[#827d87]"
                )}
            >
                {story.title}
            </h2>

            {/* InnerVoice */}

            <div
                className={cn(
                    "mt-12",
                    "space-y-8"
                )}
            >
                {story.innerVoice.map((paragraph) => (
                    <p
                        key={paragraph}
                        className={cn(
                            "max-w-3xl",
                            "text-[clamp(1.15rem,1.4vw,1.4rem)]",
                            "leading-relaxed",
                            "text-[#827d87]"
                        )}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* Questions */}

            <div
                className={cn(
                    "mt-10",
                    "space-y-3"
                )}
            >
                {story.questions.map((question) => (
                    <p
                        key={question}
                        className={cn(
                            "text-[clamp(1.15rem,1.4vw,1.4rem)]",
                            "leading-relaxed",
                            "text-[#827d87]"
                        )}
                    >
                        {question}
                    </p>
                ))}
            </div>

            {/* Perspektivwechsel */}

            <GoldenTransition
                className="my-16"
            />

            {/* Guidance */}

            <div
                className={cn(
                    "space-y-8",
                    "max-w-3xl"
                )}
            >
                {story.guidance.map((paragraph) => (
                    <p
                        key={paragraph}
                        className={cn(
                            "text-[clamp(1.15rem,1.4vw,1.4rem)]",
                            "leading-relaxed",
                            "text-[#827d87]"
                        )}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* CTA */}

            <MainButton
                href={story.cta.href}
                className="mt-16"
            >
                {story.cta.label}
            </MainButton>
        </section>
    );
}