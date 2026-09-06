import {cn} from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";

export default function HomeStory({
                                      story,
                                      className,
                                  }) {
    return (
        <section
            className={cn(
                "mx-auto",
                "py-20",
                className
            )}
        >
            {/* StoryTitle */}

            <h2
                className={cn(
                    "font-accent",
                    "text-[clamp(2rem,3vw,3rem)]",
                    "leading-tight",
                    "text-[#827d87]"
                )}
            >
                {story.title}
            </h2>

            <h3
                className={cn(
                    "text-[clamp(1rem,2vw,2rem)]",
                    "mt-5",
                    "leading-tight",
                    "text-[#827d87]"
                )}
            >
                {story.subtitle}
            </h3>

            {/* InnerVoice */}

            <div
                className={cn(
                    "mt-12",
                    "space-y-8"
                )}
            >

                <p
                    className={cn(
                        "text-[clamp(1.15rem,1.4vw,1.4rem)]",
                        "leading-relaxed",
                        "text-[#827d87]"
                    )}
                >
                    {story.innerVoice}
                </p>
            </div>

            {/* Questions */}

            <div
                className={cn(
                    "mt-10",
                    "space-y-3"
                )}
            >
                <p
                    className={cn(
                        "text-[clamp(1.15rem,1.4vw,1.4rem)]",
                        "leading-relaxed",
                        "whitespace-pre-line",
                        "text-[#827d87]",
                        "italic",
                        "pl-6"
                    )}
                >
                    {story.questions}
                </p>
            </div>


            {/* Guidance */}

            <div
                className={cn(
                    "space-y-8",
                    "mt-10"
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