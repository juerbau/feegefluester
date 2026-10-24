import Image from "next/image";
import {cn} from "@/lib/utils/cn";
import {verstehenContent} from "@/lib/content/verstehenContent";
import MainButton from "@/ui/components/common/MainButton";
import tierkommunikationHund from "@/ui/images/verstehen/tierkommunikation-hund.png";


export default function TierkommunikationContent() {
    const chapter = verstehenContent.chapters.find(
        (item) => item.id === "tierkommunikation"
    );

    if (!chapter) return null;

    const bodyTextClass = cn(
        "font-body text-[#827d87]",
        "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
        "leading-[1.9]"
    );

    return (
        <>
            {/* 1. Persönlicher Einstieg */}
            <section className="w-full bg-champagner-light">
                <div
                    className={cn(
                        "mx-auto grid w-full max-w-7xl",
                        "grid-cols-1 items-center gap-12",
                        "px-6 py-16 md:px-10",
                        "lg:grid-cols-2 lg:gap-16 lg:py-24"
                    )}
                >
                    {/* Text */}
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <p
                            className={cn(
                                "font-handwrite text-[#c8a56e]",
                                "text-[clamp(2rem,3vw,3rem)]",
                                "leading-tight"
                            )}
                        >
                            {chapter.subtitle}
                        </p>

                        <h1
                            className={cn(
                                "mt-5 font-body font-light text-[#827d87]",
                                "text-[clamp(2.2rem,4vw,4rem)]",
                                "leading-[1.15]"
                            )}
                        >
                            {chapter.title}
                        </h1>

                        <p className={cn("mt-8", bodyTextClass)}>
                            {chapter.innerVoice}
                        </p>
                    </div>

                    {/* Hundebild */}
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <div
                            className={cn(
                                "relative aspect-[4/3] w-full overflow-hidden",
                                "rounded-tl-[90px] rounded-br-[90px]"
                            )}
                        >
                            <Image
                                src={tierkommunikationHund}
                                alt="Ein Hund blickt vertrauensvoll zu einem Menschen auf einer sonnigen Wiese."
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Typische Situationen */}
            <section className="w-full bg-white">
                <div
                    className={cn(
                        "mx-auto w-full max-w-6xl",
                        "px-6 py-16 md:px-10 lg:py-24"
                    )}
                >
                    {/* Zentrierte Einleitung */}
                    <div className="mx-auto max-w-3xl text-center">
                        <p
                            className={cn(
                                "font-handwrite text-[#c8a56e]",
                                "text-[clamp(2rem,3vw,3rem)]",
                                "leading-tight"
                            )}
                        >
                            Manchmal bleiben Fragen offen …
                        </p>

                        <h2
                            className={cn(
                                "mt-5 font-body font-light text-[#827d87]",
                                "text-[clamp(1.8rem,3vw,3rem)]",
                                "leading-[1.2]"
                            )}
                        >
                            Vielleicht erkennst du euch hier wieder.
                        </h2>
                    </div>

                    {/* Luftiges Raster statt klassischer Liste */}
                    <ul
                        className={cn(
                            "mx-auto mt-14 grid max-w-5xl",
                            "grid-cols-1 gap-x-14 gap-y-10",
                            "lg:mt-20 lg:grid-cols-2 lg:gap-y-14"
                        )}
                    >
                        {chapter.situations.map((situation, index) => (
                            <li
                                key={index}
                                className={cn(
                                    "border-t border-[#c8a56e]/40",
                                    "pt-5"
                                )}
                            >
                                <span
                                    className={cn(
                                        "font-handwrite text-[#afbdaf]",
                                        "text-[clamp(1.8rem,2.2vw,2.5rem)]",
                                        "leading-none"
                                    )}
                                    aria-hidden="true"
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className={cn("mt-4", bodyTextClass)}>
                                    {situation}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 3. Persönlicher Abschluss */}
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
                            Jedes Tiergespräch ist anders.
                        </h2>

                        <div className="mt-10 space-y-6">
                            {chapter.paragraphs.map((paragraph, index) => (
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
                            {chapter.closing}
                        </p>

                        <div className="mt-12 flex justify-center">
                            <MainButton href="/verstehen">
                                Zurück zu Verstehen
                            </MainButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
