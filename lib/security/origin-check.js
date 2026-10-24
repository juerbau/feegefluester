export function checkOrigin(request) {
    const origin = request.headers.get("origin");

    if (!origin) {
        return false;
    }

    const allowedOrigins = (
        process.env.ALLOWED_ORIGINS || ""
    )
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);

    return allowedOrigins.includes(origin);
}