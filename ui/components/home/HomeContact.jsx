import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";


export default function HomeContact({ contact }) {
    return (
        <section
            aria-labelledby="home-contact-title"
            className="w-full bg-champagner-light"
        >
            <div
                className={cn(
                    "mx-auto flex max-w-4xl flex-col items-center",
                    "px-6 py-16 text-center",
                    "sm:px-10 lg:py-20"
                )}
            >
                {/* Handschriftliche Einleitung */}
                <p
                    className={cn(
                        "font-handwrite",
                        "text-[clamp(2rem,3vw,3rem)]",
                        "leading-tight text-[#c8a56e]"
                    )}
                >
                    {contact.eyebrow}
                </p>

                {/* Überschrift */}
                <h2
                    id="home-contact-title"
                    className={cn(
                        "mt-5 font-body font-light",
                        "text-[clamp(2rem,3.5vw,3.5rem)]",
                        "leading-[1.2]",
                        "tracking-tight",
                        "text-[#827d87] text-balance"
                    )}
                >
                    {contact.title.firstLine}
                    <br className="hidden sm:block" />
                    {" "}{contact.title.secondLine}
                </h2>

                {/* Beschreibung */}
                <p
                    className={cn(
                        "mt-7 max-w-2xl font-body",
                        "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
                        "leading-[1.8]",
                        "text-[#827d87] text-balance"
                    )}
                >
                    {contact.description}
                </p>

                {/* Kontakt-Button */}
                <MainButton
                    href={contact.cta.href}
                    className="mt-9"
                >
                    {contact.cta.label}
                </MainButton>
            </div>
        </section>
    );
}
