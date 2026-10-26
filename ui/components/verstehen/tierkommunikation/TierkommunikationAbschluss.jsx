import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";

export default function TierkommunikationAbschluss({ abschluss }) {
    const bodyTextClass = cn(
        "font-body text-[#827d87]",
        "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
        "leading-[1.9]"
    );

    return (
        <section className="w-full bg-champagner-light">
            <div
                className={cn(
                    "mx-auto w-full max-w-7xl",
                    "px-6 py-16 md:px-10 lg:py-24"
                )}
            >
                {/* Ruhiger Lesebereich */}
                <div className="mx-auto w-full max-w-3xl">
                    <h2
                        className={cn(
                            "font-body font-light text-[#827d87]",
                            "text-[clamp(1.9rem,3vw,3rem)]",
                            "leading-tight"
                        )}
                    >
                        {abschluss.title}
                    </h2>

                    <div className="mt-10 space-y-6">
                        {abschluss.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className={bodyTextClass}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Handschriftlicher Abschluss */}
                <div
                    className={cn(
                        "mx-auto mt-16 w-full max-w-3xl",
                        "text-center lg:mt-20"
                    )}
                >
                    <div
                        className="mx-auto mb-8 h-px w-20 bg-[#c8a56e]/55"
                        aria-hidden="true"
                    />

                    <p
                        className={cn(
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(2.5rem,4vw,4rem)]",
                            "leading-tight"
                        )}
                    >
                        {abschluss.closing}
                    </p>

                    <div className="mt-12 flex justify-center">
                        <MainButton href={abschluss.cta.href}>
                            {abschluss.cta.label}
                        </MainButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
