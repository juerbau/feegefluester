import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import feeImage from "@/ui/images/vertrauen/fee.jpeg";
import MainButton from "@/ui/components/common/MainButton";

export default function MeinWegGeschichte({ geschichte }) {

    const paragraphClass = cn(
        "font-body text-[#827d87]",
        "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
        "leading-[1.9] text-left"
    );

    return (
        <section
            className="w-full bg-white"
            aria-label="Meine Geschichte mit Fee"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-6xl",
                    "px-6 py-16 md:px-10 lg:py-24"
                )}
            >
                {/* Beginn der Geschichte mit Fees Foto */}
                <div
                    className={cn(
                        "grid items-center gap-12",
                        "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
                        "lg:gap-16"
                    )}
                >
                    <div className="mx-auto w-full max-w-sm lg:max-w-none">
                        <div
                            className={cn(
                                "relative aspect-[4/5] w-full overflow-hidden",
                                "rounded-tr-[80px] rounded-bl-[80px]",
                                "bg-[#afbdaf]/20"
                            )}
                        >
                            <Image
                                src={feeImage}
                                alt="Fee, Manuelas grau-weiße Katze"
                                fill
                                sizes="(min-width: 1024px) 40vw, 100vw"
                                className="object-cover"
                            />
                        </div>

                        <p
                            className={cn(
                                "mt-5 text-center font-handwrite",
                                "text-[clamp(2rem,2.5vw,2.8rem)]",
                                "text-[#afbdaf]"
                            )}
                        >
                            Fee
                        </p>
                    </div>

                    <div className="space-y-6">
                        {geschichte.opening.map((paragraph) => (
                            <p key={paragraph} className={paragraphClass}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Die Verbindung wächst */}
                <div className="mx-auto mt-16 max-w-3xl space-y-7 lg:mt-24">
                    {geschichte.middle.map((paragraph) => (
                        <p key={paragraph} className={paragraphClass}>
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Wendepunkt */}
                <div className="mx-auto my-16 max-w-3xl text-center lg:my-20">
                    <div
                        className="mx-auto mb-7 h-px w-16 bg-[#c8a56e]"
                        aria-hidden="true"
                    />

                    <p
                        className={cn(
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.4]"
                        )}
                    >
                        {geschichte.turningPoint}
                    </p>
                </div>

                {/* Manuelas Weg zu Feegeflüster */}
                <div className="mx-auto max-w-3xl space-y-7">
                    {geschichte.closing.map((paragraph) => (
                        <p key={paragraph} className={paragraphClass}>
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Persönlicher Abschluss */}
                <div
                    className={cn(
                        "mx-auto mt-16 max-w-3xl",
                        "rounded-tr-[80px] rounded-bl-[80px]",
                        "bg-[#afbdaf]",
                        "px-8 py-12 text-center",
                        "sm:px-12 lg:mt-24 lg:py-16"
                    )}
                >
                    <p
                        className={cn(
                            "font-handwrite text-white",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.4]"
                        )}
                    >
                        {geschichte.invitation}
                    </p>

                    <div
                        className="mx-auto mt-8 h-px w-16 bg-white/80"
                        aria-hidden="true"
                    />
                </div>
                {/* Zurück zur Vertrauen-Übersicht */}
                <div className="mt-12 flex justify-center lg:mt-16">
                    <MainButton href="/vertrauen">
                        Zurück zu Vertrauen
                    </MainButton>
                </div>
            </div>
        </section>
    );
}
