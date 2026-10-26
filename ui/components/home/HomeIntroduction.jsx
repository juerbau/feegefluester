import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";
import catImage from "@/ui/images/home/katze-naehe.png";


export default function HomeIntroduction({ introduction }) {
    return (
        <section
            aria-labelledby="home-introduction-title"
            className="w-full bg-background"
        >
            <div
                className={cn(
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1 items-center",

                    // Mobile
                    "gap-10 px-6 pb-16 pt-10",

                    // Tablet: weiterhin einspaltig
                    "md:gap-12 md:px-10",

                    // Desktop: zweispaltig ab 1024 px
                    "lg:grid-cols-2 lg:gap-20",
                    "lg:px-12 lg:pb-24 lg:pt-12"
                )}
            >
                {/* Katzenbild mit Salbeigrün-Akzent */}
                <div className="relative mx-auto w-full max-w-130 pb-8 pr-8 lg:mx-0 lg:max-w-none">
                    <div
                        aria-hidden="true"
                        className={cn(
                            "absolute bottom-0 right-0",
                            "h-[90%] w-[90%]",
                            "rounded-sm bg-[#afbdaf]"
                        )}
                    />

                    <div className="relative overflow-hidden rounded-sm">
                        <Image
                            src={catImage}
                            alt="Eine Katze genießt die sanfte Berührung einer menschlichen Hand."
                            className="h-auto w-full"
                            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 520px, (min-width: 568px) 520px, calc(100vw - 80px)"
                        />
                    </div>
                </div>

                {/* Textbereich */}
                <div
                    className={cn(
                        "mx-auto flex w-full max-w-xl flex-col items-start",
                        "text-left",
                        "lg:mx-0 lg:max-w-none"
                    )}
                >
                    {/* Überschrift */}
                    <h2
                        id="home-introduction-title"
                        className={cn(
                            "font-body font-light",
                            "text-[#827d87]",
                            "text-[clamp(2rem,3vw,3.25rem)]",
                            "leading-[1.2]",
                            "tracking-tight",
                            "text-balance"
                        )}
                    >
                        {introduction.title.firstLine}
                        <br className="hidden lg:block" />
                        {" "}{introduction.title.secondLine}
                    </h2>

                    {/* Beschreibung */}
                    <div
                        className={cn(
                            "mt-7 w-full max-w-xl space-y-5",
                            "font-body",
                            "text-[#827d87]",
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

                    {/* Weiterführender Button */}
                    <MainButton
                        href={introduction.cta.href}
                        className="mt-8"
                    >
                        {introduction.cta.label}
                    </MainButton>
                </div>
            </div>
        </section>
    );
}
