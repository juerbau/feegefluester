import {Fragment} from "react";
import {IconSparkle} from "@tabler/icons-react";

import {cn} from "@/lib/utils/cn";

export default function HomeHeroIntro({
                                          className,
                                          content,
                                      }) {
    return (
        <div
            className={cn(
                "absolute z-10",
                "left-[5%] top-[18%]",
                "w-[44%] max-w-3xl",
                "flex flex-col items-center",
                "text-center",
                className
            )}
        >
            <h1
                className={cn(
                    "font-body font-light",
                    "tracking-[-0.035em]",
                    "text-[#827d87]",
                    "text-7xl"
                )}
            >
    <span className="block leading-[1.1]">
        {content.title.firstLine}
    </span>

                <span className="mt-2 block leading-[1.1]">
        {content.title.secondLinePrefix}

                    <span
                        className={cn(
                            "pl-5",
                            "text-[90px]",
                            "font-accent font-medium italic",
                            "tracking-[-0.02em]",
                            "text-[#c8a56e]"
                        )}
                    >
            {content.title.highlight}
        </span>
    </span>
            </h1>

            <div
                className={cn(
                    "mt-15",
                    "flex items-center justify-center",
                    "gap-2",
                    "text-[#c8a56e]/90"
                )}
            >
                {content.eyebrow.map((item, index) => (
                    <Fragment key={item}>
                        {index > 0 && (
                            <IconSparkle
                                className={cn(
                                    "size-4",
                                    "-translate-y-px",
                                    "text-[#c8a56e]"
                                )}
                                stroke={1.25}
                            />
                        )}

                        <span className="text-2xl">
                            {item}
                        </span>
                    </Fragment>
                ))}
            </div>

            <p
                className={cn(
                    "mt-15",
                    "mx-auto max-w-xl",
                    "font-handwrite",
                    "leading-relaxed",
                    "text-3xl",
                    "text-[#827d87]",
                    "whitespace-pre-line"
                )}
            >
                {content.subtitle}
            </p>
        </div>
    );
}