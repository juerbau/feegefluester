"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils/cn";

const DEFAULT_EASE = [0.22, 1, 0.36, 1];

function Star() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="size-4 fill-current"
            aria-hidden="true"
        >
            <path d="M12 1.5L13.4 10.6L22.5 12L13.4 13.4L12 22.5L10.6 13.4L1.5 12L10.6 10.6L12 1.5Z" />
        </svg>
    );
}

export default function GoldenTransition({
                                             className,
                                             once = true,
                                             margin = "-15%",
                                         }) {
    return (
        <div
            className={cn(
                "flex items-center justify-center gap-4 text-[#c8a56e]",
                className
            )}
        >
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once, margin }}
                transition={{
                    duration: 1.3,
                    ease: DEFAULT_EASE,
                }}
                style={{
                    originX: 1,
                }}
                className="h-px w-30  bg-[#c8a56e]"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once, margin }}
                transition={{
                    duration: 0.6,
                    delay: 0.45,
                    ease: DEFAULT_EASE,
                }}
            >
                <Star />
            </motion.div>

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once, margin }}
                transition={{
                    duration: 1.3,
                    ease: DEFAULT_EASE,
                }}
                style={{
                    originX: 0,
                }}
                className="h-px w-30  bg-[#c8a56e]"
            />
        </div>
    );
}