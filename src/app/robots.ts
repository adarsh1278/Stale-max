import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/*", "/api/*"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin", "/admin/*", "/api/*"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin", "/admin/*", "/api/*"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
