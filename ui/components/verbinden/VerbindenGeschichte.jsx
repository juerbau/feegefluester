
import { cn } from "@/lib/utils/cn";
import { verbindenContent } from "@/lib/content/verbindenContent";

import MainButton from "@/ui/components/common/MainButton";

export default function VerbindenGeschichte() {
    const { katzenGeschichte } = verbindenContent;

    return (
        <section
            className="w-full bg-champagner-light"
            aria-labelledby="verbinden-geschichte-title"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-5xl",
                    "px-6 py-20 md:px-10",
                    "lg:py-28"
                )}
            >
                {/* Einleitung und Überschrift */}
                <div className="mx-auto max-w-3xl text-center">
                    <p
                        className={cn(
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-tight"
                        )}
                    >
                        {katzenGeschichte.subtitle}
                    </p>

                    <h2
                        id="verbinden-geschichte-title"
                        className={cn(
                            "mt-5 font-body font-light text-[#827d87]",
                            "text-[clamp(2rem,3.5vw,3.5rem)]",
                            "leading-[1.2]"
                        )}
                    >
                        {katzenGeschichte.title}
                    </h2>
                </div>

                {/* Ruhiger Textbereich */}
                <div
                    className={cn(
                        "mx-auto mt-12 max-w-2xl",
                        "space-y-6",
                        "font-body text-[#827d87]",
                        "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                        "leading-[1.9]"
                    )}
                >
                    {katzenGeschichte.paragraphs.map(
                        (paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        )
                    )}
                </div>

                {/* Link zur vollständigen Geschichte */}
                <div className="mt-12 flex justify-center">
                    <MainButton href={katzenGeschichte.href}>
                        {katzenGeschichte.linkText}
                    </MainButton>
                </div>
            </div>
        </section>
    );
}
