import SparkleDivider from "@/ui/components/utils/SparkleDivider";

export default function SectionTransition() {
    return (
        <div
            aria-hidden="true"
            className="relative mx-auto w-full max-w-[1920px] bg-[#f4f2ef]"
        >
            {/* Sanfte salbeigrüne Welle */}

            <svg
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                className="block h-[clamp(2rem,4vw,4.5rem)] w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 0H1440V20C1080 65 360 65 0 20Z"
                    fill="#afbdaf"
                    fillOpacity="0.45"
                />
            </svg>

            {/* Drei goldene Sparkles */}

            <SparkleDivider
                size={22}
                gap="gap-2"
                count={3}
                className="relative -mt-1 pb-5"
            />
        </div>
    );
}