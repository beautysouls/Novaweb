import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nova.example.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...["products", "downloads", "roadmap", "changelog", "contact"].map(
      (section) => ({
        url: `${baseUrl}/#${section}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })
    ),
  ];
}
