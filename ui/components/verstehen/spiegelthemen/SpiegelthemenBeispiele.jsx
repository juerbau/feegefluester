import { cn } from "@/lib/utils/cn";


export default function SpiegelthemenBeispiele({ beispiele }) {

    return (
        <section
            className="w-full bg-champagner-light"
            aria-labelledby="spiegelthemen-beispiele-title"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-6xl",
                    "px-6 py-16 md:px-10 lg:py-24"
                )}
            >
                {/* Einleitung */}
                <div className="mx-auto max-w-3xl text-center">
                    <p
                        className={cn(
                            "font-body text-sm font-medium",
                            "tracking-[0.12em] text-[#c8a56e]"
                        )}
                    >
                        {beispiele.eyebrow}
                    </p>

                    <h2
                        id="spiegelthemen-beispiele-title"
                        className={cn(
                            "mt-5 font-body font-light text-[#827d87]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.25]"
                        )}
                    >
                        {beispiele.title}
                    </h2>

                    <p
                        className={cn(
                            "mx-auto mt-7 max-w-2xl",
                            "font-body text-[#827d87]",
                            "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.9]"
                        )}
                    >
                        {beispiele.description}
                    </p>
                </div>

                {/* Drei Beispiele */}
                <div
                    className={cn(
                        "mt-14 grid gap-10",
                        "lg:grid-cols-3 lg:gap-12",
                        "lg:mt-20"
                    )}
                >
                    {beispiele.items.map((item) => (
                        <article
                            key={item.number}
                            className="mx-auto w-full max-w-xl lg:max-w-none"
                        >
                            <span
                                className={cn(
                                    "font-body font-light text-[#afbdaf]",
                                    "text-[clamp(2.8rem,4vw,4rem)]",
                                    "leading-none"
                                )}
                                aria-hidden="true"
                            >
                                {item.number}
                            </span>

                            <h3
                                className={cn(
                                    "mt-5 font-body text-[#827d87]",
                                    "text-[clamp(1.3rem,1.5vw,1.6rem)]",
                                    "leading-[1.4]"
                                )}
                            >
                                {item.title}
                            </h3>

                            <div
                                className="mt-5 h-px w-12 bg-[#c8a56e]"
                                aria-hidden="true"
                            />

                            <p
                                className={cn(
                                    "mt-6 font-body text-[#827d87]",
                                    "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                                    "leading-[1.9] text-left"
                                )}
                            >
                                {item.text}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
