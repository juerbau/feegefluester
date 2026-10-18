import Image from "next/image";
import Link from "next/link";

import aboutImage from "@/ui/images/HomeAbout.png";

export default function HomeAbout() {
    return (
        <section
            aria-labelledby="home-about-title"
            className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-champagner-light"
        >
            <div
                className={[
                    "mx-auto grid w-full max-w-6xl",
                    "grid-cols-1 items-center",

                    // Mobile
                    "gap-12 px-6 py-16",

                    // Tablet: weiterhin einspaltig
                    "sm:px-10",

                    // Desktop ab 1024 px
                    "lg:grid-cols-2 lg:gap-20",
                    "lg:px-12 lg:py-24",
                ].join(" ")}
            >
                {/* Persönliche Vorstellung */}
                <div
                    className={[
                        "order-2",
                        "mx-auto w-full max-w-xl",
                        "text-left",
                        "lg:order-1 lg:mx-0 lg:max-w-none",
                    ].join(" ")}
                >
                    {/* Handschriftliche Einleitung */}
                    <p
                        className={[
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-tight",
                        ].join(" ")}
                    >
                        Ein bisschen über mich
                    </p>

                    {/* Überschrift */}
                    <h2
                        id="home-about-title"
                        className={[
                            "mt-5 font-body font-light",
                            "text-[clamp(2rem,3.5vw,3.5rem)]",
                            "leading-[1.15]",
                            "tracking-[-0.025em]",
                            "text-[#827d87]",
                        ].join(" ")}
                    >
                        Hallo, ich bin
                        <br className="hidden sm:block" />
                        {" "}Manuela.
                    </h2>

                    {/* Beschreibung */}
                    <div
                        className={[
                            "mt-7 max-w-[520px] space-y-5",
                            "font-body text-base leading-[1.9]",
                            "text-[#827d87]",
                            "sm:text-lg",
                        ].join(" ")}
                    >
                        <p>
                            Tiere haben in meinem Leben schon immer
                            einen besonderen Platz.
                        </p>

                        <p>
                            Mit Feegeflüster möchte ich dazu beitragen,
                            dass Mensch und Tier einander besser verstehen
                            und ihre Verbindung stärken können.
                        </p>

                        <p>
                            Dabei stehen für mich Einfühlungsvermögen,
                            Vertrauen und ein liebevoller Blick auf jedes
                            einzelne Tier im Mittelpunkt.
                        </p>
                    </div>

                    {/* Button */}
                    <div className="mt-9">
                        <Link
                            href="/warum-feegefluester"
                            className={[
                                "inline-flex items-center justify-center",
                                "rounded-full border-[3px]",
                                "border-[#e4dfd6] bg-[#c8a56e]",
                                "px-8 py-3.5",
                                "font-body text-base font-medium text-white",
                                "transition-all duration-300",
                                "hover:-translate-y-0.5 hover:shadow-lg",
                                "focus-visible:outline",
                                "focus-visible:outline-2",
                                "focus-visible:outline-offset-4",
                                "focus-visible:outline-[#c8a56e]",
                            ].join(" ")}
                        >
                            Mehr über Feegeflüster erfahren
                        </Link>
                    </div>
                </div>

                {/* Bildbereich */}
                <div
                    className={[
                        "order-1 flex w-full justify-center",
                        "lg:order-2",
                    ].join(" ")}
                >
                    <div className="relative w-full max-w-[440px] pb-8 pr-8">

                        {/* Salbeigrüner Hintergrundakzent */}
                        <div
                            aria-hidden="true"
                            className={[
                                "absolute bottom-0 right-0",
                                "h-[90%] w-[90%]",
                                "rounded-sm bg-[#afbdaf]",
                            ].join(" ")}
                        />

                        {/* Tierbild */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                            <Image
                                src={aboutImage}
                                alt="Katze in einer ruhigen, natürlichen Umgebung"
                                fill
                                sizes="(min-width: 1024px) 440px, (min-width: 520px) 440px, calc(100vw - 80px)"
                                className="object-cover object-center"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}