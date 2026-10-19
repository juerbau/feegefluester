import { IconSparkle } from "@tabler/icons-react";
import { cn } from "@/lib/utils/cn";

export default function SectionSpacer({ variant = "white" }) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                "flex h-14 w-full items-center justify-center",
                {
                    "bg-white": variant === "white",
                    "bg-champagner-light": variant === "champagner",
                }
            )}
        >
            <div className="flex w-full max-w-[640px] items-center justify-center gap-5 px-6">

                {/* Linke Linie */}
                <div
                    className="
                        h-px flex-1
                        bg-gradient-to-r
                        from-transparent
                        to-[#c8a56e]/70
                    "
                />

                {/* Goldener Sparkle */}
                <IconSparkle
                    size={34}
                    stroke={1.4}
                    className="shrink-0 text-[#c8a56e]"
                />

                {/* Rechte Linie */}
                <div
                    className="
                        h-px flex-1
                        bg-gradient-to-l
                        from-transparent
                        to-[#c8a56e]/70
                    "
                />

            </div>
        </div>
    );
}