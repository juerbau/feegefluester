import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import tierkommunikationHund from "@/ui/images/verstehen/tierkommunikation-hund.png";

export default function TierkommunikationIntro({ intro }) {
    const bodyTextClass = cn(
        "font-body text-[#827d87]",
        "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
        "leading-[1.9]"
    );

    return (
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
                        {intro.subtitle}
                    </p>

                    <h1
                        className={cn(
                            "mt-5 font-body font-light text-[#827d87]",
                            "text-[clamp(2.2rem,4vw,4rem)]",
                            "leading-[1.15]"
                        )}
                    >
                        {intro.title}
                    </h1>

                    <p className={cn("mt-8", bodyTextClass)}>
                        {intro.innerVoice}
                    </p>
                </div>

                {/* Hundebild */}
                <div className="mx-auto w-full max-w-xl lg:mx-0">
                    <div
                        className={cn(
                            "relative aspect-4/3 w-full overflow-hidden",
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
    );
}
