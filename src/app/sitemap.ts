import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://code-quest-kappa.vercel.app",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: "https://code-quest-kappa.vercel.app/problems",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: "https://code-quest-kappa.vercel.app/dashboard",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];
}
