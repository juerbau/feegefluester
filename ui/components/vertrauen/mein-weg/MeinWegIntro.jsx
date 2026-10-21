
import { cn } from "@/lib/utils/cn";
import { meinWegContent } from "@/lib/content/meinWegContent";

export default function MeinWegIntro() {
    const { intro } = meinWegContent;

    return (
        <section
            className="w-full bg-champagner-light"
            aria-labelledby="mein-weg-title"
        >
            <div
                className={cn(
                    "mx-auto flex w-full max-w-6xl flex-col items-center",
                    "px-6 py-20 text-center",
                    "md:px-10 md:py-24",
                    "lg:py-32"
                )}
            >
                <p
                    className={cn(
                        "font-body text-sm font-medium",
                        "tracking-[0.12em] text-[#c8a56e]"
                    )}
                >
                    {intro.eyebrow}
                </p>

                <h1
                    id="mein-weg-title"
                    className={cn(
                        "mt-5 font-body font-light text-[#827d87]",
                        "text-[clamp(2.8rem,5vw,5rem)]",
                        "leading-[1.15]"
                    )}
                >
                    {intro.title}
                </h1>

                <p
                    className={cn(
                        "mt-7 font-handwrite text-[#c8a56e]",
                        "text-[clamp(2rem,3.5vw,3.5rem)]",
                        "leading-[1.3]"
                    )}
                >
                    {intro.subtitle}
                </p>

                <div
                    className="mt-9 h-px w-16 bg-[#c8a56e]"
                    aria-hidden="true"
                />

                <p
                    className={cn(
                        "mt-9 max-w-2xl font-body text-[#827d87]",
                        "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                        "leading-[1.9]"
                    )}
                >
                    {intro.description}
                </p>
            </div>
        </section>
    );
}
