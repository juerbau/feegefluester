import {cn} from "@/lib/utils/cn";

import SparkleDivider from "@/ui/components/utils/SparkleDivider";

export default function PageIntro({
                                      content,
                                      className,
                                  }) {
    return (
        <section
            className={cn(
                "h-160",
                "bg-[#c8beae]/50",
                "px-6",
                className
            )}
        >
            <div
                className={cn(
                    "mx-auto h-full",
                    "flex flex-col items-center justify-center",
                    "text-center"
                )}
            >
                <SparkleDivider
                    size={35}
                    count={1}
                />

                <h1
                    className={cn(
                        "mt-14",
                        "font-accent",
                        "text-5xl",
                        "text-[#827d87]",
                        "tracking-tight",
                        "leading-[1.4]",
                        "whitespace-pre-line"
                    )}
                >
                    {content.statement}
                </h1>

                <p
                    className={cn(
                        "mt-7",
                        "font-handwrite",
                        "text-4xl",
                        "text-[#c8a56e]",
                        "leading-relaxed"
                    )}
                >
                    {content.subline}
                </p>

                <SparkleDivider
                    size={16}
                    className="mt-14"
                />
            </div>
        </section>
    );
}