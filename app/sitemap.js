const baseUrl = "https://feegefluester.de";

export default function sitemap() {
    const isLive =
        process.env.NEXT_PUBLIC_SITE_IS_LIVE === "true";

    if (!isLive) {
        return [];
    }

    const routes = [
        "/",
        "/verstehen",
        "/verstehen/tierkommunikation",
        "/verstehen/spiegelthemen",
        "/verbinden",
        "/verbinden/wege-zueinander",
        "/vertrauen",
        "/vertrauen/mein-weg",
        "/vertrauen/meine-arbeit",
        "/kontakt",
        "/impressum",
        "/datenschutz",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
    }));
}