import Link from "next/link";

import { cn } from "@/lib/utils/cn";
import SparkleDivider from "@/ui/components/utils/SparkleDivider";
import PageContentWidth from "@/ui/components/utils/PageContentWidth";

export default function Footer({ className }) {
    return (
        <footer
            className={cn(
                "mt-24",
                "bg-[#e4dfd6]",
                className
            )}
        >
            <PageContentWidth width="default">
                <div
                    className={cn(
                        "flex flex-col items-center",
                        "px-8 py-12",
                        "text-center"
                    )}
                >
                    {/* Sparkles */}

                    <SparkleDivider
                        size={16}
                        className="mb-10"
                    />

                    {/* Legal */}

                    <nav
                        className={cn(
                            "flex items-center gap-8",
                            "font-body",
                            "text-[#827d87]",
                            "text-base"
                        )}
                    >
                        <Link
                            href="/impressum"
                            className="transition-colors hover:text-[#c8a56e]"
                        >
                            Impressum
                        </Link>

                        <Link
                            href="/datenschutz"
                            className="transition-colors hover:text-[#c8a56e]"
                        >
                            Datenschutz
                        </Link>
                    </nav>

                    {/* Copyright */}

                    <p
                        className={cn(
                            "mt-6",
                            "font-body",
                            "text-sm",
                            "text-[#827d87]/70"
                        )}
                    >
                        © {new Date().getFullYear()} Feegeflüster
                    </p>
                </div>
            </PageContentWidth>
        </footer>
    );
}