import { IconSparkle } from "@tabler/icons-react";

export default function SectionSpacer() {
    return (
        <div
            aria-hidden="true"
            className="flex h-16 w-full items-center justify-center bg-white md:h-20"
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