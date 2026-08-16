import {IconSparkle} from "@tabler/icons-react";

import {cn} from "@/lib/utils/cn";
import StoryTransition from "@/ui/components/StoryTransition";
import SparkleDivider from "@/ui/components/utils/SparkleDivider";

export default function VerstehenIntro({
                                           content,
                                           className,
                                       }) {
    return (
        <section
            className={cn(
                "mx-auto",
                "flex flex-col items-center",
                "px-6",
                "pb-20",
                "pt-20",
                "text-center",
                className
            )}
        >
            <SparkleDivider
                size={35}
                count={1}
                className="my-12"
            />

            {/*<IconSparkle*/}
            {/*    className="size-10 text-[#c8a56e]"*/}
            {/*    stroke={1.25}*/}
            {/*    aria-hidden="true"*/}
            {/*/>*/}

            <h1
                className={cn(
                    "mt-8",
                    "font-accent font-light",
                    "text-5xl",
                    "text-[#827d87]",
                    "tracking-tight",
                    "leading-[1.4]",
                    "whitespace-pre-line",
                )}
            >
                {content.statement}
            </h1>

            <p
                className={cn(
                    "mt-7",
                    "font-accent italic",
                    "text-[#c8a56e]",
                    "leading-relaxed",
                    "text-4xl"
                )}
            >
                {content.subline}
            </p>

            {/*<div*/}
            {/*    className={cn(*/}
            {/*        "flex items-center justify-center gap-3",*/}
            {/*        "text-[#c8a56e]",*/}
            {/*        "mt-20",*/}
            {/*        className*/}
            {/*    )}*/}
            {/*    aria-hidden="true"*/}
            {/*>*/}
            {/*<span*/}
            {/*    className={cn(*/}
            {/*        "h-px",*/}
            {/*        "w-120",*/}
            {/*        "bg-current/40"*/}
            {/*    )}*/}
            {/*/>*/}

            {/*    <IconSparkle*/}
            {/*        className="size-10 shrink-0"*/}
            {/*        stroke={1.25}*/}
            {/*    />*/}

            {/*    <span*/}
            {/*        className={cn(*/}
            {/*            "h-px",*/}
            {/*            "w-120",*/}
            {/*            "bg-current/40"*/}
            {/*        )}*/}
            {/*    />*/}
            {/*</div>*/}

            <SparkleDivider
                size={16}
                className="my-12"
            />


        </section>

    );
}