import { cn } from "@/lib/utils/cn";
import ManuelaPortrait from "./ManuelaPortrait";

export default function VertrauenManuela({ manuela }) {

    return (
        <section
            className="w-full bg-champagner-light"
            aria-labelledby="vertrauen-manuela-title"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-6xl",
                    "px-6 py-16 md:px-10 lg:py-24"
                )}
            >
                {/* Zentrale Begrüßung */}
                <div className="mx-auto max-w-3xl text-center">
                    <p
                        className={cn(
                            "font-body text-[#c8a56e]",
                            "text-sm font-medium tracking-[0.12em]"
                        )}
                    >
                        {manuela.eyebrow}
                    </p>

                    <h2
                        id="vertrauen-manuela-title"
                        className={cn(
                            "mt-4 font-handwrite text-[#c8a56e]",
                            "text-[clamp(2.5rem,3.5vw,3.8rem)]",
                            "leading-[1.2]"
                        )}
                    >
                        {manuela.title}
                    </h2>
                </div>

                {/* Portrait und Vorstellung */}
                <div
                    className={cn(
                        "mt-12 grid items-center gap-10",
                        "lg:mt-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
                        "lg:gap-20"
                    )}
                >
                    {/* Portrait */}
                    <div
                        className={cn(
                            "mx-auto w-full max-w-sm",
                            "lg:max-w-none"
                        )}
                    >
                        <ManuelaPortrait />
                    </div>

                    {/* Persönlicher Text */}
                    <div className="mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="space-y-5">
                            {manuela.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={cn(
                                        "font-body text-[#827d87]",
                                        "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                                        "leading-[1.9] text-left",
                                        index === 0 && "font-medium"
                                    )}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gemeinsamer Abschluss */}
                <div
                    className={cn(
                        "mx-auto mt-14 max-w-3xl text-center",
                        "lg:mt-20"
                    )}
                >
                    <div
                        className="mx-auto mb-7 h-px w-16 bg-[#c8a56e]"
                        aria-hidden="true"
                    />

                    <p
                        className={cn(
                            "font-handwrite text-[#827d87]",
                            "text-[clamp(1.7rem,2.3vw,2.4rem)]",
                            "leading-[1.5]"
                        )}
                    >
                        „{manuela.quote}“
                    </p>
                </div>
            </div>
        </section>
    );
}
