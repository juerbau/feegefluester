import Link from "next/link";
import {
    IconHeartHandshake,
    IconLeaf,
    IconSeeding,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils/cn";

const topicIcons = {
    "/verstehen": IconLeaf,
    "/verbinden": IconHeartHandshake,
    "/vertrauen": IconSeeding,
};

export default function HomeTopics({ topics }) {
    return (
        <section
            aria-label="Unsere Themen"
            className="relative z-10 -mt-px w-full bg-champagner-light"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 py-10 sm:grid-cols-3 lg:px-12 lg:py-12">
                {topics.items.map((topic, index) => {
                    const Icon = topicIcons[topic.href];

                    return (
                        <Link
                            key={topic.href}
                            href={topic.href}
                            className={cn(
                                "group flex flex-col items-center justify-center",
                                "px-5 py-7 text-center",
                                "transition-colors duration-300",
                                index !== 0 &&
                                "border-t border-[#827d87]/10 sm:border-l sm:border-t-0"
                            )}
                        >
                            {/* Salbeigrüner Icon-Kreis */}
                            <span
                                className={cn(
                                    "mb-5 flex size-17 items-center justify-center",
                                    "rounded-full bg-[#afbdaf]",
                                    "transition-all duration-300",
                                    "group-hover:bg-[#afbdaf]/70",
                                    "group-hover:-translate-y-1"
                                )}
                            >
                                <Icon
                                    size={34}
                                    stroke={1.25}
                                    className="text-white"
                                    aria-hidden="true"
                                />
                            </span>

                            <h2
                                className={cn(
                                    "font-body text-xl font-medium",
                                    "tracking-[0.08em]",
                                    "text-[#827d87]",
                                    "transition-colors duration-300",
                                    "group-hover:text-[#c8a56e]"
                                )}
                            >
                                {topic.title}
                            </h2>

                            <p className="mt-2 font-body text-sm text-[#827d87]">
                                {topic.subtitle}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
