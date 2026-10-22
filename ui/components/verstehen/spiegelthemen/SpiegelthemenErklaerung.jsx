
import { cn } from "@/lib/utils/cn";
import { spiegelthemenContent } from "@/lib/content/spiegelthemenContent";

export default function SpiegelthemenErklaerung() {
    const { erklaerung } = spiegelthemenContent;

    return (
        <section
            className="w-full bg-white"
            aria-labelledby="spiegelthemen-erklaerung-title"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-6xl",
                    "px-6 py-16 md:px-10 lg:py-24"
                )}
            >
                {/* Handschriftlicher Einstieg */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2
                        id="spiegelthemen-erklaerung-title"
                        className={cn(
                            "font-handwrite font-normal text-[#c8a56e]",
                            "text-[clamp(2rem,3.2vw,3.2rem)]",
                            "leading-[1.35] whitespace-pre-line"
                        )}
                    >
                        {erklaerung.quote}
                    </h2>
                </div>

                {/* Zusammenhängende Erzählung */}
                <div
                    className={cn(
                        "mx-auto mt-12 w-full max-w-2xl",
                        "space-y-7"
                    )}
                >
                    {erklaerung.paragraphs.map((paragraph) => (
                        <p
                            key={paragraph}
                            className={cn(
                                "font-body text-[#827d87]",
                                "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                                "leading-[1.9] text-left"
                            )}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
