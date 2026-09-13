import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { route: "", changeFrequency: "daily" as const, priority: 1.0 },
    { route: "/portfolio", changeFrequency: "weekly" as const, priority: 0.95 },
    { route: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
    { route: "/blog", changeFrequency: "weekly" as const, priority: 0.85 },
    { route: "/faq", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/careers", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const staticRoutes = routes.map((item) => ({
    url: `${siteConfig.url}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const blogRoutes = blogs.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
