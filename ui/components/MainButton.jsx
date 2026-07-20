"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export default function MainButton({
                                       href,
                                       children,
                                       className,
                                   }) {
    return (
        <Link
            href={href}
            className={cn(
                "inline-flex items-center justify-center",
                "rounded-full",
                "bg-[#afbdaf]",
                "text-black",
                "px-8 py-3",
                "text-base font-medium",
                "transition-all duration-300",
                "hover:bg-[#9fae9f]",
                "focus:outline-none",
                "focus:ring-2",
                "focus:ring-[#afbdaf]/40",
                className
            )}
        >
            {children}
        </Link>
    );
}