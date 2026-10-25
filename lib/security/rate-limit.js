import {Redis} from "@upstash/redis";
import {Ratelimit} from "@upstash/ratelimit";

// Redis-Client
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// 5 Anfragen pro Minute und IP-Adresse
const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "60 s"),
    prefix: "feegefluester:ratelimit",
});

// IP-Adresse ermitteln
function getIP(request) {
    const forwarded = request.headers.get("x-forwarded-for");

    if (forwarded) {
        return forwarded.split(",")[0].trim();
    }

    return request.headers.get("x-real-ip") || null;
}

// Rate Limit prüfen
export async function checkRateLimit(request, keyPrefix = "contact") {
    const ip = getIP(request);

    // Keine IP ermittelbar: Anfrage vorsichtshalber ablehnen
    if (!ip) {
        return false;
    }

    const {success} = await ratelimit.limit(`${keyPrefix}:${ip}`);

    return success;
}