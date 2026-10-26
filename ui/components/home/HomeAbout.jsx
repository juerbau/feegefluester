import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";
import aboutImage from "@/ui/images/home/HomeAbout.png";


export default function HomeAbout({ about }) {
    return (
        <section
            aria-labelledby="home-about-title"
            className="relative w-full overflow-hidden bg-champagner-light"
        >
            <div
                className={cn(
                    "mx-auto grid w-full max-w-6xl",
                    "grid-cols-1 items-center",

                    // Mobile
                    "gap-12 px-6 py-16",

                    // Tablet: weiterhin einspaltig
                    "sm:px-10",

                    // Desktop ab 1024 px
                    "lg:grid-cols-2 lg:gap-20",
                    "lg:px-12 lg:py-24"
                )}
            >
                {/* Persönliche Vorstellung */}
                <div
                    className={cn(
                        "order-2",
                        "mx-auto w-full max-w-xl",
                        "text-left",
                        "lg:order-1 lg:mx-0 lg:max-w-none"
                    )}
                >
                    {/* Handschriftliche Einleitung */}
                    <p
                        className={cn(
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-tight"
                        )}
                    >
                        {about.eyebrow}
                    </p>

                    {/* Überschrift */}
                    <h2
                        id="home-about-title"
                        className={cn(
                            "mt-5 font-body font-light",
                            "text-[clamp(2rem,3.5vw,3.5rem)]",
                            "leading-[1.15]",
                            "tracking-tight",
                            "text-[#827d87]"
                        )}
                    >
                        {about.title.firstLine}
                        <br className="hidden sm:block" />
                        {" "}{about.title.secondLine}
                    </h2>

                    {/* Beschreibung */}
                    <div
                        className={cn(
                            "mt-7 max-w-130 space-y-5",
                            "font-body leading-[1.9]",
                            "text-[#827d87]",
                            "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]"
                        )}
                    >
                        {about.paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Button */}
                    <MainButton
                        href={about.cta.href}
                        className="mt-9"
                    >
                        {about.cta.label}
                    </MainButton>
                </div>

                {/* Bildbereich */}
                <div
                    className={cn(
                        "order-1 flex w-full justify-center",
                        "lg:order-2"
                    )}
                >
                    <div className="relative w-full max-w-110 pb-8 pr-8">
                        {/* Salbeigrüner Hintergrundakzent */}
                        <div
                            aria-hidden="true"
                            className={cn(
                                "absolute bottom-0 right-0",
                                "h-[90%] w-[90%]",
                                "rounded-sm bg-[#afbdaf]"
                            )}
                        />

                        {/* Tierbild */}
                        <div className="relative aspect-4/5 overflow-hidden rounded-sm">
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
