import {
    MessagesSquare,
    Sparkles,
    Heart,
    HandHeart,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const icons = {
    messages: MessagesSquare,
    sparkles: Sparkles,
    heart: Heart,
    "hand-heart": HandHeart,
};

export default function MeineArbeitWeiterbildungen({ weiterbildungen }) {

    return (
        <section
            className="w-full bg-white"
            aria-labelledby="meine-arbeit-weiterbildungen-title"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-6xl",
                    "px-6 py-16 md:px-10 lg:py-24"
                )}
            >
                {/* Überschrift */}
                <div className="mx-auto max-w-3xl text-center">
                    <p
                        className={cn(
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(1.8rem,2.5vw,2.6rem)]"
                        )}
                    >
                        {weiterbildungen.eyebrow}
                    </p>

                    <h2
                        id="meine-arbeit-weiterbildungen-title"
                        className={cn(
                            "mt-3 font-body font-light text-[#827d87]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.25]"
                        )}
                    >
                        {weiterbildungen.title}
                    </h2>

                    <p
                        className={cn(
                            "mx-auto mt-7 max-w-2xl",
                            "font-body text-[#827d87]",
                            "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.9]"
                        )}
                    >
                        {weiterbildungen.description}
                    </p>
                </div>

                {/* Aus- und Weiterbildungen */}
                <div
                    className={cn(
                        "mx-auto mt-14 grid max-w-xl grid-cols-1 gap-x-15 gap-y-12",
                        "lg:mt-20 lg:max-w-4xl lg:grid-cols-2 lg:gap-y-16"
                    )}
                >
                    {weiterbildungen.items.map((item) => {
                        const Icon = icons[item.icon];

                        return (
                            <div
                                key={item.title}
                                className="flex items-start gap-5"
                            >
                                {/* Salbeigrünes Symbol */}
                                <div
                                    className={cn(
                                        "flex h-14 w-14 shrink-0",
                                        "items-center justify-center",
                                        "rounded-full bg-[#afbdaf]/20"
                                    )}
                                >
                                    <Icon
                                        size={27}
                                        strokeWidth={1.5}
                                        className="text-[#afbdaf]"
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Bezeichnung */}
                                <div className="min-w-0 flex-1">
                                    <h3
                                        className={cn(
                                            "font-body font-medium text-[#827d87]",
                                            "text-[clamp(1.1rem,1vw+0.5rem,1.4rem)]",
                                            "leading-[1.5]"
                                        )}
                                    >
                                        {item.title}
                                    </h3>

                                    {item.detail && (
                                        <p
                                            className={cn(
                                                "mt-2 font-body text-[#827d87]",
                                                "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                                                "leading-[1.8]"
                                            )}
                                        >
                                            {item.detail}
                                        </p>
                                    )}

                                    <div
                                        className="mt-5 h-px w-12 bg-[#c8a56e]"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
