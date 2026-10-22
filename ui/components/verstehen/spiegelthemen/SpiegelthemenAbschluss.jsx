import Link from "next/link";

import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";
import { spiegelthemenContent } from "@/lib/content/spiegelthemenContent";

export default function SpiegelthemenAbschluss() {
    const { abschluss } = spiegelthemenContent;

    return (
        <section
            className="w-full bg-white"
            aria-labelledby="spiegelthemen-abschluss-title"
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-4xl",
                    "px-6 py-20 md:px-10 lg:py-28"
                )}
            >
                <div className="flex flex-col items-center text-center">
                    <p
                        className={cn(
                            "font-body text-[#c8a56e]",
                            "text-sm tracking-[0.14em]"
                        )}
                    >
                        {abschluss.eyebrow}
                    </p>

                    <h2
                        id="spiegelthemen-abschluss-title"
                        className={cn(
                            "mt-7 font-handwrite text-[#c8a56e]",
                            "text-[clamp(2.2rem,4vw,3.5rem)]",
                            "leading-[1.3] whitespace-pre-line"
                        )}
                    >
                        {abschluss.title}
                    </h2>

                    <div
                        className="mt-8 h-px w-14 bg-[#c8a56e]"
                        aria-hidden="true"
                    />

                    <p
                        className={cn(
                            "mt-10 max-w-2xl",
                            "font-body text-[#827d87]",
                            "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.9]",
                            "text-left"
                        )}
                    >
                        {abschluss.text}
                    </p>

                    <div className="mt-12">
                        <MainButton href="/verstehen">
                            {abschluss.buttonText}
                        </MainButton>
                    </div>
                </div>
            </div>
        </section>
    );
}