
import { UserRound } from "lucide-react";

import { cn } from "@/lib/utils/cn";

export default function ManuelaPortrait() {
    return (
        <div
            className={cn(
                "relative flex aspect-[4/5] w-full flex-col",
                "items-center justify-center overflow-hidden",
                "rounded-tr-[90px] rounded-bl-[90px]",
                "bg-[#afbdaf]/35",
                "px-8 text-center"
            )}
            role="img"
            aria-label="Platzhalter für ein Portraitfoto von Manuela"
        >
            <div
                className={cn(
                    "flex h-28 w-28 items-center justify-center",
                    "rounded-full bg-white/60",
                    "sm:h-32 sm:w-32"
                )}
                aria-hidden="true"
            >
                <UserRound
                    className="h-16 w-16 text-[#827d87]/65 sm:h-20 sm:w-20"
                    strokeWidth={1}
                />
            </div>

            <p
                className={cn(
                    "mt-8 font-handwrite text-[#827d87]",
                    "text-[clamp(2.5rem,4vw,3.5rem)]"
                )}
            >
                Manuela
            </p>

            <div
                className="mt-5 h-px w-16 bg-[#c8a56e]"
                aria-hidden="true"
            />

            <p className="mt-5 font-body text-sm text-[#827d87]">
                Hier entsteht ein persönlicher Einblick.
            </p>
        </div>
    );
}
