export default function BotanicalAccent({
                                            className = "",
                                        }) {
    return (
        <svg
            viewBox="0 0 150 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={className}
        >
            <g
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Hauptstängel */}
                <path d="M48 210 C55 160 72 100 108 18" />

                {/* Seitentriebe */}
                <path d="M58 173 C35 157 23 135 20 112" />
                <path d="M67 140 C94 126 110 104 116 81" />
                <path d="M77 110 C53 94 42 75 43 54" />
                <path d="M90 76 C111 64 123 45 126 28" />

                {/* Blätter */}
                <path d="M58 173 C29 170 14 151 20 112 C42 125 54 148 58 173Z" />
                <path d="M67 140 C94 139 115 117 116 81 C93 93 77 114 67 140Z" />
                <path d="M77 110 C51 103 36 82 43 54 C62 68 74 87 77 110Z" />
                <path d="M90 76 C115 70 128 51 126 28 C108 40 96 57 90 76Z" />

                {/* Feine Blattadern */}
                <path d="M58 173 L20 112" />
                <path d="M67 140 L116 81" />
                <path d="M77 110 L43 54" />
                <path d="M90 76 L126 28" />
            </g>
        </svg>
    );
}