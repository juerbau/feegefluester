
import { Ear, Heart, Sprout } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import { meineArbeitContent } from "@/lib/content/meineArbeitContent";

const icons = {
    ear: Ear,
    heart: Heart,
    sprout: Sprout,
};

export default function MeineArbeitAblauf() {
    const { ablauf } = meineArbeitContent;

    return (
        <section
            className="w-full bg-champagner-light"
            aria-labelledby="meine-arbeit-ablauf-title"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-6xl",
                    "px-6 py-16 md:px-10 lg:py-24"
                )}
            >
                {/* Abschnittsüberschrift */}
                <div className="mx-auto max-w-3xl text-center">
                    <p
                        className={cn(
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(1.8rem,2.5vw,2.6rem)]"
                        )}
                    >
                        {ablauf.eyebrow}
                    </p>

                    <h2
                        id="meine-arbeit-ablauf-title"
                        className={cn(
                            "mt-3 font-body font-light text-[#827d87]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.25]"
                        )}
                    >
                        {ablauf.title}
                    </h2>
                </div>

                {/* Hinweis für Manuela – vor Veröffentlichung entfernen */}
                <div
                    className={cn(
                        "mx-auto mt-12 max-w-3xl",
                        "rounded-lg border border-[#c8a56e]/40",
                        "bg-white/60 px-6 py-5",
                        "font-body text-sm leading-relaxed text-[#827d87]"
                    )}
                >
                    <p className="font-medium text-[#c8a56e]">
                        Liebe Manu 💛
                    </p>

                    <p className="mt-2">
                        Der folgende Text ist vorerst ein Platzhalter.
                        Bitte beschreibe hier in deinen eigenen Worten,
                        wie du bei einem Tiergespräch vorgehst und was
                        dir dabei besonders wichtig ist.
                    </p>
                </div>

                {/* Beschreibung und Leitgedanken */}
                <div
                    className={cn(
                        "mt-12 grid items-start gap-12",
                        "lg:mt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]",
                        "lg:gap-20"
                    )}
                >
                    {/* Links: Persönliche Beschreibung */}
                    <div className="mx-auto w-full max-w-xl space-y-6 lg:max-w-none">
                        {ablauf.paragraphs.map((paragraph) => (
                            <p
                                key={paragraph}
                                className={cn(
                                    "font-body text-[#827d87]",
                                    "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                                    "leading-[1.9] text-left"
                                )}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Rechts: Drei Leitgedanken */}
                    <div className="mx-auto w-full max-w-xl space-y-9 lg:max-w-none">
                        {ablauf.values.map((value) => {
                            const Icon = icons[value.icon];

                            return (
                                <div
                                    key={value.title}
                                    className="flex items-start gap-5"
                                >
                                    <div
                                        className={cn(
                                            "flex h-14 w-14 shrink-0",
                                            "items-center justify-center",
                                            "rounded-full bg-white/70"
                                        )}
                                    >
                                        <Icon
                                            size={27}
                                            strokeWidth={1.5}
                                            className="text-[#afbdaf]"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3
                                            className={cn(
                                                "font-handwrite text-[#827d87]",
                                                "text-[clamp(1.8rem,2.2vw,2.4rem)]",
                                                "leading-[1.3]"
                                            )}
                                        >
                                            {value.title}
                                        </h3>

                                        <p
                                            className={cn(
                                                "mt-2 font-body text-[#827d87]",
                                                "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                                                "leading-[1.8] text-left"
                                            )}
                                        >
                                            {value.description}
                                        </p>

                                        <div
                                            className="mt-4 h-px w-12 bg-[#c8a56e]"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
