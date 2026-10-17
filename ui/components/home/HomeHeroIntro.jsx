import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";

export default function HomeHeroIntro({
                                          className,
                                          content,
                                          mobile = false,
                                      }) {
    return (
        <div
            className={cn(
                "z-10",
                "flex flex-col items-start",
                "text-left",

                mobile
                    ? [
                        "relative",
                        "mx-auto",
                        "w-full",
                        "max-w-lg",
                    ]
                    : [
                        "absolute",

                        // Horizontale Position
                        "left-[clamp(1.5rem,8vw,10rem)]",

                        // Vertikal zentrieren
                        "top-1/2",
                        "-translate-y-1/2",

                        // Responsive Breite
                        "w-[clamp(20rem,40vw,42rem)]",
                    ],

                className
            )}
        >

            {/* ----------------------------------------
                Überschrift
            ---------------------------------------- */}

            <h1
                className={cn(
                    "font-body font-light",
                    "leading-[1.05]",
                    "tracking-[-0.035em]",
                    "text-[#827d87]",
                    "whitespace-pre-line",

                    mobile
                        ? [
                            "text-[clamp(2.2rem,8vw,3.2rem)]",
                        ]
                        : [
                            "text-[clamp(2.2rem,3.5vw,4.5rem)]",
                        ]
                )}
            >
                {content.title}
            </h1>


            {/* ----------------------------------------
                Goldene Handschrift
            ---------------------------------------- */}

            <p
                className={cn(
                    "font-handwrite",
                    "leading-[1.05]",
                    "text-[#c8a56e]",
                    "whitespace-pre-line",

                    mobile
                        ? [
                            "mt-5",
                            "pl-5",
                            "text-[clamp(2.8rem,10vw,4rem)]",
                        ]
                        : [
                            // Abstand skaliert mit
                            "mt-[clamp(0.5rem,1vw,1.25rem)]",

                            // Einrückung skaliert mit
                            "pl-[clamp(1rem,3vw,3.5rem)]",

                            // Schriftgröße skaliert mit
                            "text-[clamp(2.5rem,4vw,5.25rem)]",
                        ]
                )}
            >
                {content.eyebrow}
            </p>


            {/* ----------------------------------------
                Untertitel
            ---------------------------------------- */}

            <p
                className={cn(
                    "font-body font-medium",
                    "text-[#827d87]",
                    "whitespace-pre-line",

                    mobile
                        ? [
                            "mt-7",
                            "max-w-md",
                            "text-base",
                            "leading-[1.7]",
                        ]
                        : [
                            // Abstand skaliert mit
                            "mt-[clamp(1rem,2vw,2.5rem)]",

                            // Breite
                            "max-w-lg",

                            // Schriftgröße
                            "text-[clamp(0.85rem,1vw,1.5rem)]",

                            // Kompaktere Zeilenhöhe
                            "leading-[1.5]",
                        ]
                )}
            >
                {content.subtitle}
            </p>


            {/* ----------------------------------------
                Call-to-Action
            ---------------------------------------- */}

            <MainButton
                href={content.cta.href}
                className={cn(
                    mobile
                        ? [
                            "mt-8",
                        ]
                        : [
                            // Abstand skaliert mit
                            "mt-[clamp(1rem,2vw,2.5rem)]",
                        ]
                )}
            >
                {content.cta.label}
            </MainButton>

        </div>
    );
}