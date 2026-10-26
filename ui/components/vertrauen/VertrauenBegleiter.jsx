import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import feeImage from "@/ui/images/vertrauen/fee.jpeg";
import lewiImage from "@/ui/images/vertrauen/lewi.jpeg";
import lunaImage from "@/ui/images/vertrauen/luna.jpeg";

const animalImages = {
    Fee: feeImage,
    Lewi: lewiImage,
    Luna: lunaImage,
};

export default function VertrauenBegleiter({ tierischeBegleiter }) {

    return (
        <section
            className="w-full bg-white"
            aria-labelledby="vertrauen-begleiter-title"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-6xl",
                    "px-6 py-16 md:px-10 lg:py-24"
                )}
            >
                {/* Überschrift und Einleitung */}
                <div className="mx-auto max-w-3xl text-center">
                    <p
                        className={cn(
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(1.8rem,2.5vw,2.6rem)]"
                        )}
                    >
                        {tierischeBegleiter.subtitle}
                    </p>

                    <h2
                        id="vertrauen-begleiter-title"
                        className={cn(
                            "mt-3 font-body font-light text-[#827d87]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.2]"
                        )}
                    >
                        {tierischeBegleiter.title}
                    </h2>

                    <p
                        className={cn(
                            "mx-auto mt-7 max-w-2xl",
                            "font-body text-[#827d87]",
                            "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.9]"
                        )}
                    >
                        {tierischeBegleiter.description}
                    </p>
                </div>

                {/* Tierfotos */}
                <div
                    className={cn(
                        "mt-12 grid grid-cols-1 gap-12",
                        "lg:mt-16 lg:grid-cols-3 lg:gap-8"
                    )}
                >
                    {tierischeBegleiter.animals.map((animal) => (
                        <article
                            key={animal.name}
                            className="mx-auto w-full max-w-sm"
                        >
                            <div
                                className={cn(
                                    "relative aspect-4/5 w-full overflow-hidden",
                                    "rounded-tr-[80px] rounded-bl-[80px]",
                                    "bg-[#afbdaf]/20"
                                )}
                            >
                                <Image
                                    src={animalImages[animal.name]}
                                    alt={`${animal.name}, einer von Manuelas tierischen Begleitern`}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3
                                    className={cn(
                                        "font-handwrite text-[#afbdaf]",
                                        "text-[clamp(2rem,2.5vw,2.8rem)]"
                                    )}
                                >
                                    {animal.name}
                                </h3>

                                <p
                                    className={cn(
                                        "mt-2 font-body text-[#827d87]",
                                        "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                                        "leading-[1.7]"
                                    )}
                                >
                                    {animal.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
