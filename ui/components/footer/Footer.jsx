import Image from "next/image";
import Link from "next/link";
import {IconHeart} from "@tabler/icons-react";
import footerBackground from "@/ui/images/footer/Footer-Natur.png";
import logo from "@/ui/images/logo/Feegefluester-FINAL.png";

export default function Footer() {
    return (
        <footer className="mx-auto w-full max-w-[1920px]">

            {/* Naturbild */}
            <div className="relative isolate overflow-hidden">

                {/* Hintergrundbild */}
                <Image
                    src={footerBackground}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-[40%_center] sm:object-center"
                    aria-hidden="true"
                />

                {/* Herzenssatz und Logo */}
                <div
                    className="
                        relative z-10
                        mx-auto flex
                        min-h-100
                        max-w-6xl
                        flex-col items-center
                        justify-start
                        px-5
                        pt-12 pb-20
                        text-center
                        sm:min-h-[440px]
                        sm:pt-14 sm:pb-24
                        lg:min-h-[480px]
                        lg:pt-16 lg:pb-28
                    "
                >

                    {/* Herzenssatz – jetzt oberhalb des Logos */}
                    <div
                        className="
                            flex
                            max-w-full
                            flex-wrap
                            items-center
                            justify-center
                            gap-x-2 gap-y-0.5
                        "
                    >
                        <p
                            className="
                                font-handwrite
                                text-center
                                text-[clamp(1.65rem,4.5vw,2rem)]
                                leading-tight
                                text-[#c8a56e]
                                lg:text-[2.5rem]
                            "
                        >
                            Mit Herz für Mensch und Tier
                        </p>

                        <IconHeart
                            size={28}
                            stroke={1.25}
                            className="
                                shrink-0
                                text-[#c8a56e]
                                lg:h-8 lg:w-8
                            "
                            aria-hidden="true"
                        />
                    </div>

                    {/* Klickbares Logo */}
                    <Link
                        href="/"
                        aria-label="Zur Feegeflüster-Startseite"
                        className="
                            mt-6
                            inline-block
                            transition-opacity
                            hover:opacity-85
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-[#c8a56e]
                            sm:mt-8
                        "
                    >
                        <Image
                            src={logo}
                            alt="Feegeflüster – Tierkommunikation & Begleitung"
                            className="
                                h-auto
                                w-60
                                sm:w-[320px]
                                lg:w-125
                            "
                            sizes="
                                (max-width: 640px) 240px,
                                (max-width: 1024px) 320px,
                                430px
                            "
                        />
                    </Link>

                </div>
            </div>

            {/* Abschlussleiste */}
            <div>
                <div
                    className="
                        mx-auto flex max-w-6xl
                        flex-col items-center justify-between
                        gap-4 px-6 py-6
                        sm:flex-row sm:px-10
                        lg:px-12
                    "
                >

                    {/* Copyright */}
                    <p className="font-body text-lg font-medium text-[#827d87]">
                        © {new Date().getFullYear()} Feegeflüster
                    </p>

                    {/* Rechtliche Links */}
                    <nav
                        aria-label="Rechtliche Informationen"
                        className="flex items-center gap-8"
                    >
                        <Link
                            href="/impressum"
                            className="
                                font-body text-lg font-medium
                                text-[#827d87] hover:text-[#c8a56e]
                                transition-colors
                            "
                        >
                            Impressum
                        </Link>

                        <Link
                            href="/datenschutz"
                            className="
                                font-body text-lg font-medium
                                text-[#827d87] hover:text-[#c8a56e]
                                transition-colors
                            "
                        >
                            Datenschutz
                        </Link>
                    </nav>

                </div>
            </div>

        </footer>
    );
}