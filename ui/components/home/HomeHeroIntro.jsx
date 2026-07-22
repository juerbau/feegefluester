import {cn} from "@/lib/utils/cn";
import {Fragment} from "react";
import {IconSparkle} from "@tabler/icons-react";


export default function HomeHeroIntro({className, content}) {
    return (
        <div
            className={cn(
                "absolute z-10",
                "left-[6%] top-[18%]",
                "w-[46%] max-w-3xl",
                className
            )}
        >
            <h1
                className={cn(
                    "font-accent",
                    "font-light",
                    "tracking-[-0.035em]",
                    "text-[#827d87]",
                    "text-[clamp(2.5rem,4.8vw,5rem)]"
                )}
            >
                <span className="block leading-normal">
                    {content.title.firstLine}
                </span>

                <span
                    className={cn(
                        "block",
                        "leading-none",
                        "-mt-[clamp(0.25rem,0.8vw,0.75rem)]"
                    )}
                >
                    {content.title.secondLinePrefix}
                    <span
                        className={cn(
                            "pl-1.5",
                            "font-medium italic",
                            "tracking-[-0.02em]",
                            "text-[#c8a56e]"
                        )}
                    >
                        {content.title.highlight}
                    </span>
                </span>

            </h1>

            <div className="flex items-center gap-2 mt-15 text-[#c8a56e]/90">
                {content.eyebrow.map((item, index) => (
                    <Fragment key={item}>
                        {index > 0 && (
                            <IconSparkle
                                className="size-4 text-[#c8a56e] -translate-y-px"
                                stroke={1.25}
                            />
                        )}

                        <span className="text-xl">{item}</span>
                    </Fragment>
                ))}
            </div>

            <p
                className={cn(
                    "mt-15",
                    "max-w-xl",
                    "text-[#827d87]",
                    "font-light",
                    "leading-relaxed",
                    "text-2xl",
                    "whitespace-pre-line"
                )}
            >
                {content.subtitle}
            </p>
        </div>
    );
}