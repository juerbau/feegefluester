import { PawPrint } from "lucide-react";

import MainButton from "@/ui/components/common/MainButton";
import { cn } from "@/lib/utils/cn";

export default function NotFound() {
    return (
        <main
            className={cn(
                "flex min-h-[65vh] w-full",
                "items-center justify-center",
                "bg-champagner-light",
                "px-6 py-20 md:px-10"
            )}
        >
            <div className="mx-auto max-w-2xl text-center">
                {/* Dezentes Pfötchen */}
                <div
                    className={cn(
                        "mx-auto flex h-20 w-20",
                        "items-center justify-center",
                        "rounded-full bg-white/70"
                    )}
                >
                    <PawPrint
                        size={38}
                        strokeWidth={1.2}
                        className="text-[#afbdaf]"
                        aria-hidden="true"
                    />
                </div>

                {/* Fehlercode */}
                <p
                    className={cn(
                        "mt-8 font-handwrite text-[#c8a56e]",
                        "text-[clamp(2.5rem,5vw,4rem)]"
                    )}
                >
                    404
                </p>

                {/* Überschrift */}
                <h1
                    className={cn(
                        "mt-3 font-body font-light text-[#827d87]",
                        "text-[clamp(1.8rem,3vw,2.8rem)]",
                        "leading-[1.3]"
                    )}
                >
                    Hier hat sich wohl ein Pfötchen verlaufen …
                </h1>

                {/* Beschreibung */}
                <p
                    className={cn(
                        "mx-auto mt-6 max-w-xl",
                        "font-body text-[#827d87]",
                        "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                        "leading-[1.9]"
                    )}
                >
                    Diese Seite konnten wir leider nicht finden.
                    Aber keine Sorge – manchmal führt ein kleiner
                    Umweg zu einem neuen Anfang.
                </p>

                {/* Zurück zur Startseite */}
                <div className="mt-10">
                    <MainButton href="/">
                        Zurück zur Startseite
                    </MainButton>
                </div>
            </div>
        </main>
    );
}