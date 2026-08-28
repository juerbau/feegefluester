import { cn } from "@/lib/utils/cn";

import SparkleDivider from "@/ui/components/utils/SparkleDivider";

export default function PageIntro({
                                      content,
                                      className,
                                  }) {
    return (
        <section
            className={cn(
                "mx-auto h-160",
                "flex flex-col items-center",
                "px-6",
                "pb-20",
                "pt-20",
                "text-center",
                "bg-[#c8beae]/50",
                className
            )}
        >
            <SparkleDivider
                size={35}
                count={1}
                className="my-12"
            />

            {/*<h1*/}
            {/*    className={cn(*/}
            {/*        "mt-8",*/}
            {/*        "font-caveat font-light",*/}
            {/*        "text-5xl",*/}
            {/*        "text-[#827d87]",*/}
            {/*        "tracking-tight",*/}
            {/*        "leading-[1.4]",*/}
            {/*        "whitespace-pre-line",*/}
            {/*    )}*/}
            {/*>*/}
            {/*    {content.statement}*/}
            {/*</h1>*/}
            <h1
                className={cn(
                    "mt-8",
                    "font-accent",
                    "text-5xl",
                    "text-[#827d87]",
                    "tracking-tight",
                    "leading-[1.4]",
                    "whitespace-pre-line",
                )}
            >
                {content.statement}
            </h1>

            {/*<p*/}
            {/*    className={cn(*/}
            {/*        "mt-7",*/}
            {/*        "font-accent italic",*/}
            {/*        "text-[#c8a56e]",*/}
            {/*        "leading-relaxed",*/}
            {/*        "text-4xl",*/}
            {/*    )}*/}
            {/*>*/}
            {/*    {content.subline}*/}
            {/*</p>*/}
            <p
                className={cn(
                    "mt-7",
                    "font-shadowsIntoLight",
                    "text-[#c8a56e]",
                    "leading-relaxed",
                    "text-4xl",
                )}
            >
                {content.subline}
            </p>

            <SparkleDivider
                size={16}
                className="my-12"
            />
        </section>
    );
}