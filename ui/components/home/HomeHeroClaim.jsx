import {cn} from "@/lib/utils/cn";
import HeroStar from "@/ui/components/home/HeroStar";

export default function HomeHeroClaim({className, content}) {
    return (
        <div
            className={cn(
                "mx-auto flex max-w-300 flex-col items-center",
                "px-6 pb-[clamp(4rem,6vw,6rem)]",
                "pt-[clamp(1.25rem,2vw,2rem)]",
                "text-center",
                className
            )}
        >
            {/*<div*/}
            {/*    className={cn(*/}
            {/*        "flex items-center justify-center",*/}
            {/*        "size-[clamp(4rem,5.2vw,5.25rem)]",*/}
            {/*        "rounded-full",*/}
            {/*        "border border-white/50",*/}
            {/*        "bg-[#c1bec3]/20",*/}
            {/*        "shadow-[0_0.75rem_2.5rem_rgba(130,125,135,0.06)]"*/}
            {/*    )}*/}
            {/*>*/}
            {/*    <HeroStar*/}
            {/*        className={cn(*/}
            {/*            "size-[clamp(2rem,2.5vw,2.5rem)]",*/}
            {/*            "text-[#c8a56e]"*/}
            {/*        )}*/}
            {/*    />*/}
            {/*</div>*/}

            <p
                className={cn(
                    "mt-[clamp(1rem,1.5vw,1.5rem)]",
                    "text-[clamp(0.875rem,1.15vw,1.125rem)]",
                    "font-medium",
                    "tracking-[0.2em]",
                    "text-[#c8a56e]"
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