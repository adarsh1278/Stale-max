import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stalemax Technologies",
    short_name: "Stalemax",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a20",
    theme_color: "#17143c",
    icons: [
      {
        src: "/icon.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
