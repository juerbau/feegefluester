"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils/cn";

const DEFAULT_EASE = [0.22, 1, 0.36, 1];

export default function GoldenLine({
                                       className,
                                       once = true,
                                       margin = "-15%",
                                   }) {
    return (
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
            className={cn(
                "h-px bg-[#c8a56e]",
                className
            )}
        />
    );
}