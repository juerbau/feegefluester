const baseUrl = "https://feegefluester.de";

export default function robots() {
    const isLive =
        process.env.NEXT_PUBLIC_SITE_IS_LIVE === "true";

    if (!isLive) {
        return {
            rules: {
                userAgent: "*",
                disallow: "/",
            },
        };
    }

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}