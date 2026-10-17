import Image from "next/image";

import MainButton from "@/ui/components/common/MainButton";
import SparkleDivider from "@/ui/components/utils/SparkleDivider";

import catImage from "@/ui/images/katze-naehe.png";

export default function HomeIntroduction() {
    return (
        <section
            aria-labelledby="home-introduction-title"
            className="mx-auto w-full max-w-[1920px] bg-champagner-light"
        >

            <div
                className={[
                    "mx-auto grid w-full max-w-7xl",
                    "grid-cols-1 items-center",
                    "gap-10 px-6 pb-16 pt-10",
                    "md:grid-cols-2 md:gap-12",
                    "lg:gap-20 lg:px-12 lg:pb-24 lg:pt-12",
                ].join(" ")}
            >
                {/* Katzenbild mit stärkerem Salbeigrün-Akzent */}

                <div className="relative pb-8 pr-8">
                    <div
                        aria-hidden="true"
                        className={[
                            "absolute bottom-0 right-0",
                            "h-[90%] w-[90%]",
                            "rounded-sm bg-[#afbdaf]",
                        ].join(" ")}
                    />

                    <div className="relative overflow-hidden rounded-sm">
                        <Image
                            src={catImage}
                            alt="Eine Katze genießt die sanfte Berührung einer menschlichen Hand."
                            className="h-auto w-full"
                            sizes="(min-width: 768px) 50vw, 100vw"
                        />
                    </div>
                </div>

                {/* Text */}

                <div className="flex flex-col items-start">
                    <h2
                        id="home-introduction-title"
                        className={[
                            "font-body font-light",
                            "text-[#827d87]",
                            "text-[clamp(2rem,3vw,3.25rem)]",
                            "leading-[1.2]",
                            "tracking-[-0.025em]",
                            "text-balance",
                        ].join(" ")}
                    >
                        Wenn Worte fehlen,
                        <br className="hidden lg:block" />
                        {" "}beginnt das Zuhören.
                    </h2>

                    <div
                        className={[
                            "mt-7 max-w-xl space-y-5",
                            "font-body",
                            "text-[#827d87]",
                            "text-[clamp(0.95rem,1.1vw,1.125rem)]",
                            "leading-[1.8]",
                        ].join(" ")}
                    >
                        <p>
                            Manchmal verändert sich etwas im Verhalten
                            unseres Tieres. Es zieht sich zurück,
                            reagiert ungewohnt oder scheint uns etwas
                            mitteilen zu wollen. Wir spüren, dass
                            etwas nicht stimmt, finden aber keine
                            Erklärung.
                        </p>

                        <p>
                            Tierkommunikation eröffnet die Möglichkeit,
                            deinem Tier auf einer anderen Ebene zu
                            begegnen. Sie lädt dazu ein, seine Gefühle
                            und Bedürfnisse bewusster wahrzunehmen,
                            neue Perspektiven zu entdecken und eure
                            Verbindung zu vertiefen.
                        </p>
                    </div>

                    <MainButton
                        href="/verstehen"
                        className="mt-8"
                    >
                        Tierkommunikation entdecken
                    </MainButton>
                </div>
            </div>
        </section>
    );
}