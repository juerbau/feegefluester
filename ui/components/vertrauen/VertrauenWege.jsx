
import { Heart, HandHeart } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import { vertrauenContent } from "@/lib/content/vertrauenContent";
import MainButton from "@/ui/components/common/MainButton";

const icons = {
    heart: Heart,
    "hand-heart": HandHeart,
};

export default function VertrauenWege() {
    const { weitereWege } = vertrauenContent;

    return (
        <section
            className="w-full bg-champagner-light"
            aria-labelledby="vertrauen-wege-title"
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
                        {weitereWege.eyebrow}
                    </p>

                    <h2
                        id="vertrauen-wege-title"
                        className={cn(
                            "mt-3 font-body font-light text-[#827d87]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.2]"
                        )}
                    >
                        {weitereWege.title}
                    </h2>

                    <p
                        className={cn(
                            "mx-auto mt-7 max-w-2xl",
                            "font-body text-[#827d87]",
                            "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.9]"
                        )}
                    >
                        {weitereWege.description}
                    </p>
                </div>

                {/* Zwei gleichwertige Karten */}
                <div
                    className={cn(
                        "mx-auto mt-12 grid max-w-xl grid-cols-1 gap-8",
                        "lg:mt-16 lg:max-w-none lg:grid-cols-2 lg:gap-10"
                    )}
                >
                    {weitereWege.cards.map((card) => {
                        const Icon = icons[card.icon];

                        return (
                            <article
                                key={card.href}
                                className={cn(
                                    "flex h-full flex-col items-center",
                                    "rounded-tr-[80px] rounded-bl-[80px]",
                                    "bg-white px-8 py-12 text-center",
                                    "sm:px-12 lg:py-14"
                                )}
                            >
                                <Icon
                                    size={40}
                                    strokeWidth={1.4}
                                    className="text-[#afbdaf]"
                                    aria-hidden="true"
                                />

                                <h3
                                    className={cn(
                                        "mt-7 font-handwrite text-[#827d87]",
                                        "text-[clamp(2.3rem,3vw,3.2rem)]"
                                    )}
                                >
                                    {card.title}
                                </h3>

                                <p
                                    className={cn(
                                        "mt-5 max-w-sm flex-1",
                                        "font-body text-[#827d87]",
                                        "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                                        "leading-[1.8]"
                                    )}
                                >
                                    {card.description}
                                </p>

                                <div className="mt-9">
                                    <MainButton
                                        href={card.href}
                                    >
                                        {card.buttonLabel}
                                    </MainButton>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
