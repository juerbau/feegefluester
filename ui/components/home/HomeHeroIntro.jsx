import {cn} from "@/lib/utils/cn";
import GoldenLine from "@/ui/components/GoldenLine";

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
                    "font-body",
                    "font-light",
                    "tracking-[-0.035em]",
                    "text-[#827d87]",
                    "leading-[1.02]",
                    "text-[clamp(2.5rem,4.8vw,5rem)]"
                )}
            >
                {content.title.firstLine}
                <span className="block">
                    {content.title.secondLinePrefix}
                    <span
                        className={cn(
                            "font-accent",
                            "font-medium",
                            "italic",
                            "tracking-[-0.02em]",
                            "text-[#c8a56e]",
                            "text-[90px]",
                            "pl-1.5"
                        )}
                    >
                        {`${content.title.highlight}`}
                    </span>
                </span>
            </h1>

            <div
                className={cn(
                    "mt-[clamp(1.25rem,2vw,2rem)]",
                    "text-[#c8a56e]"
                )}
            >
                {/*<GoldenLine className="w-[clamp(16rem,30vw,30rem)]" />*/}
                <p
                    className={cn(
                        "text-xl",
                        "font-medium",
                        "tracking-[0.2em]",
                        "font-accent"
                    )}
                >
                    {content.eyebrow}
                </p>


            </div>

            <p
                className={cn(
                    "mt-[clamp(1.5rem,2.5vw,2.75rem)]",
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