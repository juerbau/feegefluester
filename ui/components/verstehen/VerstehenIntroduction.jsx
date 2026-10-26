
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import catImage from "@/ui/images/verstehen/verstehen-introduction.png";

export default function VerstehenIntroduction({ introduction }) {
    return (
        <section
            aria-labelledby="verstehen-introduction-title"
            className="w-full bg-white"
        >
            <div
                className={cn(
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1 items-center",
                    "gap-12 px-6 py-16",
                    "md:px-10",
                    "lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24"
                )}
            >
                {/* Linke Seite – emotionaler Gedanke */}
                <div
                    className={cn(
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none"
                    )}
                >
                    {introduction.statements.map((statement, index) => (
                        <p
                            key={index}
                            className={cn(
                                index > 0 && "mt-7",
                                "font-handwrite text-[#c8a56e]",
                                "text-[clamp(2.25rem,3.2vw,3.5rem)]",
                                "leading-[1.45]"
                            )}
                        >
                            {statement}
                        </p>
                    ))}

                    {/* Dezenter goldener Akzent */}
                    <div
                        aria-hidden="true"
                        className="mt-10 h-px w-20 bg-[#c8a56e]"
                    />
                </div>

                {/* Rechte Seite – Bild und Erklärung */}
                <div
                    className={cn(
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none"
                    )}
                >
                    {/* Katzenfoto */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
                        <Image
                            src={catImage}
                            alt="Eine Katze ruht entspannt in einer gemütlichen Umgebung."
                            fill
                            className="object-cover object-center"
                            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 576px, 100vw"
                        />
                    </div>

                    {/* Überschrift */}
                    <h2
                        id="verstehen-introduction-title"
                        className={cn(
                            "mt-9 font-body font-light",
                            "text-[#827d87]",
                            "text-[clamp(2rem,3vw,3.25rem)]",
                            "leading-[1.2]",
                            "tracking-[-0.025em]"
                        )}
                    >
                        {introduction.title}
                    </h2>

                    {/* Beschreibung */}
                    <div
                        className={cn(
                            "mt-6 max-w-xl space-y-5",
                            "font-body text-[#827d87]",
                            "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.8]"
                        )}
                    >
                        {introduction.paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
