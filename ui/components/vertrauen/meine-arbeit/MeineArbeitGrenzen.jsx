import {
    Stethoscope,
    ClipboardList,
    Heart,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";

const icons = {
    stethoscope: Stethoscope,
    clipboard: ClipboardList,
    heart: Heart,
};

export default function MeineArbeitGrenzen({ grenzen }) {

    return (
        <section
            className="w-full bg-white"
            aria-labelledby="meine-arbeit-grenzen-title"
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
                        {grenzen.eyebrow}
                    </p>

                    <h2
                        id="meine-arbeit-grenzen-title"
                        className={cn(
                            "mt-3 font-body font-light text-[#827d87]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.25]"
                        )}
                    >
                        {grenzen.title}
                    </h2>

                    <p
                        className={cn(
                            "mx-auto mt-7 max-w-2xl",
                            "font-body text-[#827d87]",
                            "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.9]"
                        )}
                    >
                        {grenzen.description}
                    </p>
                </div>

                {/* Drei wichtige Grenzen */}
                <div
                    className={cn(
                        "mx-auto mt-14 grid max-w-xl grid-cols-1 gap-12",
                        "lg:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-10"
                    )}
                >
                    {grenzen.items.map((item) => {
                        const Icon = icons[item.icon];

                        return (
                            <div
                                key={item.title}
                                className="flex flex-col items-center text-center"
                            >
                                <div
                                    className={cn(
                                        "flex h-16 w-16 items-center justify-center",
                                        "rounded-full bg-[#afbdaf]/20"
                                    )}
                                >
                                    <Icon
                                        size={30}
                                        strokeWidth={1.5}
                                        className="text-[#afbdaf]"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3
                                    className={cn(
                                        "mt-6 font-body font-medium text-[#827d87]",
                                        "text-[clamp(1.1rem,1vw+0.5rem,1.4rem)]",
                                        "leading-[1.5]"
                                    )}
                                >
                                    {item.title}
                                </h3>

                                <div
                                    className="mt-5 h-px w-12 bg-[#c8a56e]"
                                    aria-hidden="true"
                                />

                                <p
                                    className={cn(
                                        "mt-5 font-body text-[#827d87]",
                                        "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                                        "leading-[1.8]"
                                    )}
                                >
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Persönlicher Abschluss */}
                <div className="mx-auto mt-16 max-w-3xl text-center lg:mt-24">
                    <p
                        className={cn(
                            "font-handwrite text-[#827d87]",
                            "text-[clamp(1.8rem,2.5vw,2.6rem)]",
                            "leading-[1.45]"
                        )}
                    >
                        „{grenzen.closing}“
                    </p>
                </div>

                {/* Zurück zur Vertrauen-Hauptseite */}
                <div className="mt-12 flex justify-center lg:mt-16">
                    <MainButton href="/vertrauen">
                        Zurück zu Vertrauen
                    </MainButton>
                </div>
            </div>
        </section>
    );
}
