import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import verbindenMiteinander from "@/ui/images/verbinden/verbinden-miteinander.png";

export default function VerbindenMiteinander({ miteinander }) {

    return (
        <section
            id="miteinander"
            className="w-full bg-white"
            aria-labelledby="miteinander-title"
        >
            <div
                className={cn(
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1 items-center gap-12",
                    "px-6 py-16 md:px-10",
                    "lg:grid-cols-2 lg:gap-20 lg:py-24"
                )}
            >
                {/* Bild links */}
                <div className="mx-auto w-full max-w-xl lg:mx-0">
                    <div
                        className={cn(
                            "relative aspect-4/5 w-full overflow-hidden",
                            "rounded-tr-[90px] rounded-bl-[90px]"
                        )}
                    >
                        <Image
                            src={verbindenMiteinander}
                            alt="Eine Frau und eine Katze sitzen gemeinsam in einer Wiese und schauen in den Sonnenuntergang."
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                {/* Text rechts */}
                <div className="mx-auto w-full max-w-xl lg:mx-0">
                    {/* Handschriftliche Überschrift */}
                    <h2
                        id="miteinander-title"
                        className={cn(
                            "font-handwrite text-center text-[#c8a56e]",
                            "text-[clamp(2.3rem,3.5vw,3.8rem)]",
                            "leading-[1.2]"
                        )}
                    >
                        {miteinander.title}
                    </h2>

                    {/* Textbereich bewusst asymmetrisch */}
                    <div
                        className={cn(
                            "mx-auto mt-12 w-full max-w-md",
                            "lg:mt-14"
                        )}
                    >
                        {/* Einleitender Gedanke */}
                        <p
                            className={cn(
                                "font-body font-light text-[#827d87]",
                                "text-[clamp(1.2rem,1.6vw,1.5rem)]",
                                "leading-[1.7]"
                            )}
                        >
                            {miteinander.paragraphs[0]}
                        </p>

                        {/* Vertiefender Absatz */}
                        <div
                            className={cn(
                                "mt-7 space-y-5",
                                "font-body text-[#827d87]",
                                "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                                "leading-[1.9]"
                            )}
                        >
                            {miteinander.paragraphs
                                .slice(1)
                                .map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                        </div>

                        {/* Dezenter Abschluss mit Herz */}
                        <div className="mt-10 flex flex-col items-center gap-5">
                            <div
                                className="h-px w-20 bg-[#c8a56e]/60"
                                aria-hidden="true"
                            />

                            <svg
                                viewBox="0 0 48 48"
                                className="h-12 w-12 text-[#c8a56e]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M24 41 C19 34 7 26 7 16 C7 10 11 7 16 7 C20 7 23 10 24 14 C25 10 28 7 32 7 C37 7 41 10 41 16 C41 26 29 34 24 41 Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
