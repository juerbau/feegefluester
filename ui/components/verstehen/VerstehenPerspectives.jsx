
import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";

export default function VerstehenPerspectives({ perspectives }) {
    return (
        <section
            aria-labelledby="verstehen-perspectives-title"
            className="w-full bg-white"
        >
            <div
                className={cn(
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1 items-start",
                    "gap-10 px-6 pb-16 pt-10",
                    "md:px-10",
                    "lg:grid-cols-[0.9fr_1.1fr]",
                    "lg:gap-24 lg:px-12 lg:pb-24 lg:pt-12"
                )}
            >
                {/* Linke Seite – emotionaler Einstieg */}
                <div
                    className={cn(
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none"
                    )}
                >
                    <p
                        className={cn(
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.3]"
                        )}
                    >
                        {perspectives.eyebrow}
                    </p>

                    <h2
                        id="verstehen-perspectives-title"
                        className={cn(
                            "mt-6 font-body font-light",
                            "text-[#827d87]",
                            "text-[clamp(2rem,3vw,3.25rem)]",
                            "leading-[1.2]",
                            "tracking-[-0.025em]",
                            "text-balance"
                        )}
                    >
                        {perspectives.title}
                    </h2>
                </div>

                {/* Rechte Seite – Spiegelthemen */}
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
                            "font-body text-[#827d87]",
                            "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.8]"
                        )}
                    >
                        {perspectives.paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Weiterführender Button */}
                    <MainButton
                        href={perspectives.cta.href}
                        className="mt-9"
                    >
                        {perspectives.cta.label}
                    </MainButton>
                </div>
            </div>
        </section>
    );
}
