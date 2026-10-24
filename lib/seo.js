
export function buildMetadata({
                                  title,
                                  description,
                                  image = "/og-image.jpg",
                                  path = "/",
                                  noIndex = false,
                              }) {
    const isProduction =
        process.env.NEXT_PUBLIC_SITE_IS_LIVE === "true";

    return {
        title,
        description,

        robots: {
            index: isProduction && !noIndex,
            follow: isProduction && !noIndex,
        },

        alternates: {
            canonical: path,
        },

        openGraph: {
            title,
            description,
            url: path,
            siteName: "Feegeflüster",
            locale: "de_DE",
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: "Feegeflüster – Tierkommunikation & Begleitung",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}
