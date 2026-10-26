import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";


export default function HomeStory({ story }) {
    return (
        <section
            aria-labelledby="home-story-title"
            className="w-full bg-background"
        >
            <div
                className={cn(
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1",

                    // Mobile
                    "gap-10 px-6 pb-16 pt-10",

                    // Tablet: weiterhin einspaltig
                    "md:px-10",

                    // Desktop ab 1024 px
                    "lg:grid-cols-[0.85fr_1.15fr]",
                    "lg:gap-24 lg:px-12 lg:pb-24 lg:pt-12"
                )}
            >
                {/* Überschrift */}
                <div
                    className={cn(
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none"
                    )}
                >
                    <span
                        className={cn(
                            "font-handwrite",
                            "text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.2]"
                        )}
                    >
                        {story.eyebrow}
                    </span>

                    <h2
                        id="home-story-title"
                        className={cn(
                            "mt-6 font-body font-light",
                            "text-[#827d87]",
                            "text-[clamp(2rem,3vw,3.25rem)]",
                            "leading-[1.2]",
                            "tracking-tight",
                            "text-balance"
                        )}
                    >
                        {story.title.firstLine}
                        <br className="hidden lg:block" />
                        {" "}{story.title.secondLine}
                    </h2>
                </div>

                {/* Geschichte */}
                <div
                    className={cn(
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none"
                    )}
                >
                    <div
                        className={cn(
                            "w-full max-w-2xl space-y-5",
                            "font-body",
                            "text-[#827d87]",
                            "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.8]"
                        )}
                    >
                        {story.paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Salbeigrüner Zitatkasten */}
                    <blockquote
                        className={cn(
                            "mt-9 w-full max-w-2xl",
                            "rounded-xl bg-[#afbdaf]",
                            "px-7 py-8",
                            "lg:px-9 lg:py-9"
                        )}
                    >
                        <p
                            className={cn(
                                "font-handwrite",
                                "text-white",
                                "text-[clamp(1.625rem,1.38rem+1.00vw,2.125rem)]",
                                "leading-[1.4]"
                            )}
                        >
                            {story.quote}
                        </p>
                    </blockquote>

                    {/* Weiterführender Button */}
                    <MainButton
                        href={story.cta.href}
                        className="mt-9"
                    >
                        {story.cta.label}
                    </MainButton>
                </div>
            </div>
        </section>
    );
}
