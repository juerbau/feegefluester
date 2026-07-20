import {IconSparkle} from "@tabler/icons-react";
import {cn} from "@/lib/utils/cn";

export default function StoryTransition({className}) {
    return (
        <div
            className={cn(
                "flex items-center justify-center gap-3",
                "text-[#afbdaf]",
                className
            )}
            aria-hidden="true"
        >
            <span
                className={cn(
                    "h-px",
                    "w-[clamp(4rem,14vw,12.5rem)]",
                    "bg-current/40"
                )}
            />

            <IconSparkle
                className="size-7 shrink-0"
                stroke={1.25}
            />

            <span
                className={cn(
                    "h-px",
                    "w-[clamp(4rem,14vw,12.5rem)]",
                    "bg-current/40"
                )}
            />
        </div>
    );
}