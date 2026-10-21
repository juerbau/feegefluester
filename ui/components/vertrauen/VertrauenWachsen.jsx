
import { PawPrint } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import { vertrauenContent } from "@/lib/content/vertrauenContent";

export default function VertrauenWachsen() {
    const { vertrauenWachsen } = vertrauenContent;

    return (
        <section
            className="w-full bg-white"
            aria-labelledby="vertrauen-wachsen-title"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-6xl",
                    "px-6 py-16 md:px-10 lg:py-24"
                )}
            >
                <div
                    className={cn(
                        "grid items-center gap-12",
                        "lg:grid-cols-2 lg:gap-16"
                    )}
                >
                    {/* Linker Bereich: Leitsatz */}
                    <div
                        className={cn(
                            "mx-auto flex min-h-[300px] w-full max-w-md flex-col",
                            "items-center justify-center",
                            "rounded-tr-[80px] rounded-bl-[80px]",
                            "bg-[#afbdaf]",
                            "px-8 py-12 text-center",
                            "lg:max-w-none"
                        )}
                    >
                        <p
                            className={cn(
                                "font-handwrite text-white",
                                "text-[clamp(2rem,3vw,3.2rem)]",
                                "leading-[1.35] whitespace-pre-line"
                            )}
                        >
                            {vertrauenWachsen.quote}
                        </p>

                        <div
                            className="mt-9 h-px w-16 bg-white"
                            aria-hidden="true"
                        />
                    </div>

                    {/* Rechter Bereich: Gedanken mit Pfoten */}
                    <div
                        className={cn(
                            "mx-auto w-full max-w-md",
                            "lg:max-w-none"
                        )}
                    >
                        <h2
                            id="vertrauen-wachsen-title"
                            className={cn(
                                "font-body font-light text-[#827d87]",
                                "text-[clamp(1.8rem,2.5vw,2.7rem)]",
                                "leading-[1.3]",
                                "text-center lg:text-left"
                            )}
                        >
                            {vertrauenWachsen.title}
                        </h2>

                        <ul
                            className={cn(
                                "mx-auto mt-9 max-w-md space-y-6",
                                "lg:max-w-none"
                            )}
                        >
                            {vertrauenWachsen.items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-4"
                                >
                                    <PawPrint
                                        size={35}
                                        strokeWidth={2}
                                        className={cn(
                                            "mt-1 shrink-0",
                                            "text-[#c8a56e]"
                                        )}
                                        aria-hidden="true"
                                    />

                                    <span
                                        className={cn(
                                            "font-body text-[#827d87]",
                                            "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                                            "leading-[1.8] text-left"
                                        )}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
