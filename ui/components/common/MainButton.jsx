"use client";

import Link from "next/link";

import {cn} from "@/lib/utils/cn";

export default function MainButton({
                                       href,
                                       children,
                                       className,
                                       type = "button",
                                       disabled = false,
                                       onClick,
                                   }) {
    const classes = cn(
        "inline-flex items-center justify-center",
        "rounded-full",
        "bg-[#afbdaf]",
        "px-8 py-3",
        "text-base font-medium",
        "text-black/80",
        "transition-all duration-300",
        "hover:bg-[#9fae9f]",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-[#afbdaf]/40",
        disabled && "cursor-not-allowed opacity-50",
        className
    );

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={classes}
        >
            {children}
        </button>
    );
}