import {cn} from "@/lib/utils/cn";

export default function HomeHeroClaim({className, content}) {
    return (
        <div
            className={cn(
                "mx-auto flex max-w-300 flex-col items-center",
                "px-6 pb-20",
                "pt-[clamp(1.25rem,2vw,2rem)]",
                "text-center",
                className
            )}
        >
            <p
                className={cn(
                    "mt-[clamp(1rem,1.5vw,1.5rem)]",
                    "text-2xl",
                    "font-medium",
                    "tracking-[0.2em]",
                    "text-[#c8a56e]",
                    "font-accent"
                )}
            >
                {content.eyebrow}
            </p>

            <p
                className={cn(
                    "mt-2",
                    "text-[clamp(1.25rem,1.8vw,1.75rem)]",
                    "leading-relaxed",
                    "text-[#827d87]"
                )}
            >
                {content.text}
            </p>
        </div>
    );
}