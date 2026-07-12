import {cn} from "@/lib/utils/cn";

export default function HomeHeroIntro({className}) {
    return (
        <div
            className={cn(
                "absolute z-10",
                "left-[6%] top-[18%]",
                "w-[46%] max-w-3xl",
                className
            )}
        >
            <h1
                id="home-hero-title"
                className={cn(
                    "text-[#827d87]",
                    "leading-relaxed",
                    "text-[clamp(2.5rem,4.8vw,4.5rem)]"
                )}
            >
                Tierkommunikation
                <span className="block">
                    mit{" "}
                    <span className="text-[#c8a56e] italic font-semibold">
                        Herz
                    </span>
                </span>
            </h1>

            <div
                className={cn(
                    "mt-[clamp(1.25rem,2vw,2rem)]",
                    "text-[#c8a56e]"
                )}
            >
                <div
                    className={cn(
                        "mt-4 flex items-center gap-3",
                        "w-120"
                    )}
                    aria-hidden="true"
                >
                    <span className="text-lg leading-none">
                        ✦
                    </span>

                    <span className="h-px flex-1 bg-current/40"/>
                </div>
                <p
                    className={cn(
                        "text-lg",
                        "font-medium",
                        "tracking-[0.2em]"
                    )}
                >
                    VERSTEHEN · VERBINDEN · VERTRAUEN
                </p>


            </div>

            <p
                className={cn(
                    "mt-[clamp(1.5rem,2.5vw,2.75rem)]",
                    "max-w-xl",
                    "text-[#827d87]",
                    "font-light",
                    "leading-relaxed",
                    "text-2xl"
                )}
            >
                Feinfühlige Begleitung für die Verbindung
                <br/>
                zwischen dir und deinem Tier.
            </p>
        </div>
    );
}