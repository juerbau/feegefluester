import { IconSparkle } from "@tabler/icons-react";
import {cn} from "@/lib/utils/cn";

export default function SparkleDivider({
                                           className,
                                           size = 20,
                                           gap = "gap-3",
                                           count = 3,
                                       }) {
    return (
        <div
            className={cn(
                "flex items-center justify-center text-[#c8a56e]",
                gap,
                className
            )}
        >
            {Array.from({ length: count }).map((_, index) => (
                <IconSparkle
                    key={index}
                    size={size}
                    stroke={1.25}
                />
            ))}
        </div>
    );
}