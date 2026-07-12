import {cn} from "@/lib/utils/cn";

export default function PageContentWidth({
                                        children,
                                        width = "default",
                                        className,
                                    }) {
    return (
        <div
            className={cn(
                "mx-auto w-full",
                {
                    "max-w-160": width === "narrow", // 640px
                    "max-w-250": width === "default", // 1000px
                    "max-w-7xl": width === "wide", // 1280px
                    "max-w-350": width === "hero", // 1400px
                },
                className
            )}
        >
            {children}
        </div>
    );
}