
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export default function ScrollTopButton() {
    const [visible, setVisible] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.7;
            setVisible(window.scrollY > threshold);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: shouldReduceMotion ? "auto" : "smooth",
        });
    };

    return (
        <div
            className={cn(
                "pointer-events-none fixed inset-x-0 bottom-0 z-50",
                "flex justify-center"
            )}
        >
            <motion.button
                type="button"
                onClick={scrollToTop}
                initial={false}
                animate={{
                    opacity: visible ? 1 : 0,
                    y: visible ? 0 : 12,
                }}
                transition={{
                    duration: shouldReduceMotion ? 0 : 0.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
                aria-label="Zum Seitenanfang scrollen"
                aria-hidden={!visible}
                tabIndex={visible ? 0 : -1}
                className={cn(
                    "flex h-5 w-17.5 items-center justify-center",
                    "rounded-t-xl bg-[#c8a56e] text-white",
                    "shadow-md",
                    "transition-colors duration-300",
                    "hover:bg-[#b38f58]",
                    "focus-visible:outline-2 focus-visible:outline-offset-4",
                    "focus-visible:outline-[#827d87]",
                    visible
                        ? "pointer-events-auto"
                        : "pointer-events-none"
                )}
            >
                <ChevronUp
                    size={24}
                    strokeWidth={3}
                    aria-hidden="true"
                />
            </motion.button>
        </div>
    );
}
