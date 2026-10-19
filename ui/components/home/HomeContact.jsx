import MainButton from "@/ui/components/common/MainButton";

export default function HomeContact() {
    return (
        <section
            aria-labelledby="home-contact-title"
            className="
                w-full
                bg-champagner-light
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-4xl
                    flex-col
                    items-center
                    px-6
                    py-16
                    text-center
                    sm:px-10
                    lg:py-20
                "
            >
                {/* Handschriftliche Einleitung */}
                <p
                    className="
                        font-handwrite
                        text-[clamp(2rem,3vw,3rem)]
                        leading-tight
                        text-[#c8a56e]
                    "
                >
                    Ich freue mich auf euch
                </p>

                {/* Überschrift */}
                <h2
                    id="home-contact-title"
                    className="
                        mt-5
                        font-body
                        text-[clamp(2rem,3.5vw,3.5rem)]
                        font-light
                        leading-[1.2]
                        tracking-[-0.025em]
                        text-[#827d87]
                        text-balance
                    "
                >
                    Du möchtest dein Tier
                    <br className="hidden sm:block" />
                    {" "}besser verstehen?
                </h2>

                {/* Beschreibung */}
                <p
                    className="
                        mt-7
                        max-w-2xl
                        font-body
                        text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]
                        leading-[1.8]
                        text-[#827d87]
                        text-balance
                    "
                >
                    Manchmal beginnt eine besondere Verbindung mit
                    einer einfachen Frage. Wenn du mehr über die
                    Tierkommunikation erfahren möchtest oder ein
                    Anliegen hast, freue ich mich darauf, von dir
                    und deinem tierischen Begleiter zu hören.
                </p>

                {/* Kontakt-Button */}
                <MainButton
                    href="/kontakt"
                    className="mt-9"
                >
                    Kontakt aufnehmen
                </MainButton>
            </div>
        </section>
    );
}