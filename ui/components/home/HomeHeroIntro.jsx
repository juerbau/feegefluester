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
                id="home-hero-title"
                className={cn(
                    "text-[#827d87]",
                    "leading-relaxed",
                    "text-[clamp(2.5rem,4.8vw,4.5rem)]"
                )}
            >
                {content.title.firstLine}
                <span className="block">
                    {content.title.secondLinePrefix}
                    <span className="text-[#c8a56e] italic font-semibold">
                        {content.title.highlight}
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
                        "text-lg",
                        "font-medium",
                        "tracking-[0.2em]"
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
                    "text-2xl"
                )}
            >
                {content.subtitle}
            </p>
        </div>
    );
}