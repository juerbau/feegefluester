"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

import cat from "@/ui/images/hero/Katze_neu_2.png";
import dog from "@/ui/images/hero/Hund_neu.png";
import horse from "@/ui/images/hero/Pferd_neu.png";

const images = [
    { src: cat, alt: "" },
    { src: dog, alt: "" },
    { src: horse, alt: "" },
];

export default function HomeHeroImages() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full">
            <AnimatePresence mode="sync">
                <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{
                        opacity: 0,
                        filter: "blur(3px)",
                        scale: 1.01,
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        filter: "blur(3px)",
                        scale: 1.01,
                    }}
                    transition={{
                        duration: 1.8,
                        ease: [0.5, 0.25, 0.5, 0.5],
                    }}
                >
                    <Image
                        src={images[index].src}
                        alt={images[index].alt}
                        priority={index === 0}
                        sizes="100vw"
                        className="object-contain"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Platzhalter für die Höhe */}
            <Image
                src={images[0].src}
                alt=""
                aria-hidden="true"
                className="invisible block h-auto w-full"
            />
        </div>
    );
}