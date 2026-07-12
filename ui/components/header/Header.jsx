"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {Menu, X} from "lucide-react";
import logo from "@/ui/images/logo/feegefluester-header-subtitle-larger-v2.svg";
import {cn} from "@/lib/utils/cn";

const navigation = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Über mich",
        href: "/ueber-mich",
    },
    {
        label: "Begleitung",
        href: "/begleitung",
    },
    {
        label: "Dein Weg",
        href: "/dein-weg",
    },
    {
        label: "Kontakt",
        href: "/kontakt",
    },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="mx-auto max-w-384 relative z-50 py-3 pr-5">
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    onClick={closeMenu}
                    aria-label="Feegeflüster Startseite"
                    className="relative block w-64 sm:w-72 lg:w-100"
                >
                    <Image
                        src={logo}
                        alt="Feegeflüster – Tierkommunikation und Begleitung"
                        priority
                        className="h-auto w-full"
                    />
                </Link>

                <nav
                    aria-label="Hauptnavigation"
                    className="ml-20 hidden lg:block xl:ml-28"
                >
                    <ul className="flex items-center gap-8 xl:gap-15">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "relative py-2",
                                        "text-lg font-normal tracking-[0.04em]",
                                        "text-[#827d87]",
                                        "transition-colors duration-300",
                                        "hover:text-[#c8a56e]",
                                        "after:absolute after:inset-x-0 after:-bottom-0.5",
                                        "after:h-px after:origin-center after:scale-x-0",
                                        "after:bg-[#c8a56e]",
                                        "after:transition-transform after:duration-300",
                                        "hover:after:scale-x-100"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    type="button"
                    onClick={() => setMenuOpen((current) => !current)}
                    aria-label={
                        menuOpen
                            ? "Navigation schließen"
                            : "Navigation öffnen"
                    }
                    aria-expanded={menuOpen}
                    className={cn(
                        "flex size-11 items-center justify-center",
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

            <div
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
                        {navigation.map((item) => (
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
                                    className={cn(
                                        "block py-4",
                                        "text-base tracking-[0.04em]",
                                        "text-[#827d87]",
                                        "transition-colors duration-300",
                                        "hover:text-[#c8a56e]"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}