import type { MetadataRoute } from "next";

const baseUrl = "https://alyssumlabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/what-we-do",
    "/our-approach",
    "/insights",
    "/insights/designing-intelligence-for-drug-development",
    "/insights/portfolio-intelligence-in-private-capital",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
    "/cookie-policy",
  ];

  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
