import { IconSparkle } from "@tabler/icons-react";

export default function SectionSpacer() {
    return (
        <div
            aria-hidden="true"
            className="flex h-12 w-full items-center justify-center bg-white md:h-16"
        >
            <IconSparkle
                size={28}
                stroke={1.25}
                className="text-[#c8a56e]"
            />
        </div>
    );
}