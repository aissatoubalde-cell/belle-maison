/** URL publique du site, sans slash final. À définir dans .env.local (NEXT_PUBLIC_SITE_URL). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, "");
