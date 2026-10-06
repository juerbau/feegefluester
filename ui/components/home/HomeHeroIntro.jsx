import { cn } from "@/lib/utils/cn";

import MainButton from "@/ui/components/common/MainButton";

export default function HomeHeroIntro({
                                          className,
                                          content,
                                      }) {
    return (
        <div
            className={cn(
                "absolute z-10",

                // Position
                "left-[clamp(1.5rem,8vw,10rem)]",
                "top-1/2",
                "-translate-y-1/2",

                // Breite
                // "max-w-xl",

                "flex flex-col items-start",
                "text-left",

                className
            )}
        >
            {/* Title */}

            <h1
                className={cn(
                    "font-body",

                    "text-[clamp(1.000rem,-0.38rem+5.50vw,3.750rem)]",
                    "w-[clamp(12.500rem,-6.25rem+75.00vw,50.000rem)]",

                    "text-[#827d87]",
                    "whitespace-pre-line"
                )}
            >
                {content.title}
            </h1>

            {/* Handwritten statement */}

            <p
                className={cn(
                    "mt-3",
                    "pl-4",

                    "font-handwrite",

                    "text-[clamp(1.000rem,0.00rem+4.00vw,3.000rem)]",
                    "leading-[1.05]",

                    "text-[#c8a56e]",
                    "text-shadow-eyebrow",
                    "whitespace-pre-line",

                    "md:mt-4",
                    "md:pl-8",

                    "lg:mt-5",
                    "lg:pl-14"
                )}
            >
                {content.eyebrow}
            </p>

            {/* Subtitle */}

            <p
                className={cn(
                    "mt-6",
                    "w-[clamp(9.375rem,-4.69rem+56.25vw,37.500rem)]",

                    "font-body font-medium",
                    "text-[clamp(0.500rem,0.13rem+1.50vw,1.250rem)]",

                    "leading-[1.6]",

                    "text-[#827d87]",
                    "text-shadow-subtitle",
                    "whitespace-pre-line",

                )}
            >
                {content.subtitle}
            </p>

            {/* CTA */}

            <MainButton
                href={content.cta.href}
                className={cn(
                    "mt-6",
                    "px-5 py-2.5",
                    "text-sm",

                    "md:mt-8",
                    "md:px-6",

                    "lg:mt-10",
                    "lg:px-8",
                    "lg:text-base"
                )}
            >
                {content.cta.label}
            </MainButton>
        </div>
    );
}