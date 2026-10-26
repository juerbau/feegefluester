import { cn } from "@/lib/utils/cn";

export default function TierkommunikationSituationen({ situationen }) {
    const bodyTextClass = cn(
        "font-body text-[#827d87]",
        "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
        "leading-[1.9]"
    );

    return (
        <section className="w-full bg-white">
            <div
                className={cn(
                    "mx-auto w-full max-w-6xl",
                    "px-6 py-16 md:px-10 lg:py-24"
                )}
            >
                {/* Zentrierte Einleitung */}
                <div className="mx-auto max-w-3xl text-center">
                    <p
                        className={cn(
                            "font-handwrite text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-tight"
                        )}
                    >
                        {situationen.eyebrow}
                    </p>

                    <h2
                        className={cn(
                            "mt-5 font-body font-light text-[#827d87]",
                            "text-[clamp(1.8rem,3vw,3rem)]",
                            "leading-[1.2]"
                        )}
                    >
                        {situationen.title}
                    </h2>
                </div>

                {/* Luftiges Raster statt klassischer Liste */}
                <ul
                    className={cn(
                        "mx-auto mt-14 grid max-w-5xl",
                        "grid-cols-1 gap-x-14 gap-y-10",
                        "lg:mt-20 lg:grid-cols-2 lg:gap-y-14"
                    )}
                >
                    {situationen.items.map((situation, index) => (
                        <li
                            key={index}
                            className={cn(
                                "border-t border-[#c8a56e]/40",
                                "pt-5"
                            )}
                        >
                            <span
                                className={cn(
                                    "font-handwrite text-[#afbdaf]",
                                    "text-[clamp(1.8rem,2.2vw,2.5rem)]",
                                    "leading-none"
                                )}
                                aria-hidden="true"
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <p className={cn("mt-4", bodyTextClass)}>
                                {situation}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
