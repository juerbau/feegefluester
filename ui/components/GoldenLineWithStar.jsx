"use client";

import {motion} from "motion/react";
import GoldenStar from "@/ui/components/GoldenStar";
import {cn} from "@/lib/utils/cn";

const DEFAULT_EASE = [0.22, 1, 0.36, 1];

export default function GoldenLineWithStar({
                                               className,
                                               once = true,
                                               margin = "-15%",
                                           }) {
    return (
        <div
            className={cn(
                "flex items-center gap-1",
                "text-[#c8a56e]",
                className
            )}
        >
            {/*<GoldenStar className="size-5 shrink-0"/>*/}

            <motion.div
                initial={{scaleX: 0}}
                whileInView={{scaleX: 1}}
                viewport={{once, margin}}
                transition={{
                    duration: 1.3,
                    ease: DEFAULT_EASE,
                }}
                style={{
                    originX: 0,
                }}
                className="h-px flex-1 bg-[#c8a56e]"
            />
        </div>
    );
}