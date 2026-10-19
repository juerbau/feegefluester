"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

import logo from "@/ui/images/logo/feegefluester-header-subtitle-larger-v2.svg";
import { cn } from "@/lib/utils/cn";

const navigation = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Verstehen",
        href: "/verstehen",
    },
    {
        label: "Verbinden",
        href: "/verbinden",
    },
    {
        label: "Vertrauen",
        href: "/vertrauen",
    },
    {
        label: "Kontakt",
        href: "/kontakt",
    },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="w-full relative z-50 mx-auto max-w-384 py-3 pr-5">
            <div className="flex items-center justify-between">

                {/* Logo */}

                <Link
                    href="/"
                    onClick={closeMenu}
                    aria-label="Feegeflüster Startseite"
                    className={cn(
                        "relative block shrink-0",
                        "w-[clamp(16rem,25vw,25rem)]"
                    )}
                >
                    <Image
                        src={logo}
                        alt="Feegeflüster – Tierkommunikation und Begleitung"
                        priority
                        className="h-auto w-full"
                    />
                </Link>

                {/* Desktop-Navigation */}

                <nav
                    aria-label="Hauptnavigation"
                    className={cn(
                        "hidden lg:block",
                        "ml-[clamp(0.75rem,2vw,3rem)]"
                    )}
                >
                    <ul
                        className={cn(
                            "flex items-center",
                            "gap-[clamp(0.75rem,1.8vw,3rem)]"
                        )}
                    >
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <li
                                    key={item.href}
                                    className="relative"
                                >
                                    <Link
                                        href={item.href}
                                        aria-current={
                                            isActive
                                                ? "page"
                                                : undefined
                                        }
                                        className={cn(
                                            "relative py-2",
                                            "text-[clamp(1rem,0.3333rem+1.0417vw,1.375rem)]",
                                            "tracking-[0.04em]",
                                            "whitespace-nowrap",
                                            "transition-colors duration-300",

                                            isActive
                                                ? "text-[#c8a56e]"
                                                : "text-[#827d87] hover:text-[#c8a56e]",

                                            !isActive &&
                                            "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-[#c8a56e] after:transition-transform after:duration-300 hover:after:scale-x-100"
                                        )}
                                    >
                                        {item.label}
                                    </Link>

                                    {isActive && (
                                        <motion.div
                                            layoutId="navigation-indicator"
                                            className="absolute inset-x-0 -bottom-0.5 h-px bg-[#c8a56e]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 34,
                                            }}
                                        />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Hamburger-Button */}

                <button
                    type="button"
                    onClick={() =>
                        setMenuOpen((current) => !current)
                    }
                    aria-label={
                        menuOpen
                            ? "Navigation schließen"
                            : "Navigation öffnen"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    className={cn(
                        "flex size-11 shrink-0 items-center justify-center",
                        "text-[#827d87]",
                        "transition-colors duration-300",
                        "hover:text-[#c8a56e]",
                        "lg:hidden"
                    )}
                >
                    {menuOpen ? (
                        <X
                            size={26}
                            strokeWidth={1.5}
                        />
                    ) : (
                        <Menu
                            size={28}
                            strokeWidth={1.5}
                        />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}

            <div
                id="mobile-navigation"
                className={cn(
                    "absolute inset-x-0 top-full overflow-hidden",
                    "bg-background",
                    "transition-[max-height,opacity] duration-500 ease-in-out",
                    "lg:hidden",

                    menuOpen
                        ? "max-h-96 opacity-100"
                        : "pointer-events-none max-h-0 opacity-0"
                )}
            >
                <nav
                    aria-label="Mobile Navigation"
                    className="mx-auto max-w-7xl px-6 pb-8 pt-3"
                >
                    <ul className="flex flex-col">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <li
                                    key={item.href}
                                    className={cn(
                                        "border-b border-[#827d87]/10",
                                        "last:border-none"
                                    )}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={closeMenu}
                                        aria-current={
                                            isActive
                                                ? "page"
                                                : undefined
                                        }
                                        className={cn(
                                            "block py-4",
                                            "text-base tracking-[0.04em]",
                                            "transition-colors duration-300",

                                            isActive
                                                ? "text-[#c8a56e]"
                                                : "text-[#827d87] hover:text-[#c8a56e]"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}