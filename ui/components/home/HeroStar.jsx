export default function HeroStar({className}) {
    return (
        <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className={className}
        >
            <path
                d="
        M50 6
        C53 30 70 47 94 50
        C70 53 53 70 50 94
        C47 70 30 53 6 50
        C30 47 47 30 50 6
        Z
    "
                fill="#c8a56e"
            />
        </svg>
    );
}