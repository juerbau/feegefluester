import {cn} from "@/lib/utils/cn";

import StoryTransition from "@/ui/components/StoryTransition";
import MainButton from "@/ui/components/MainButton";

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

            {/* Perspektivwechsel */}

            <StoryTransition
                className="my-15"
            />

            {/* Guidance */}

            <div
                className={cn(
                    "space-y-8",
                )}
            >
                <p
                    className={cn(
                        "text-[clamp(1.15rem,1.4vw,1.4rem)]",
                        "leading-relaxed",
                        "text-[#827d87]"
                    )}
                >
                    {story.guidance}
                </p>
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