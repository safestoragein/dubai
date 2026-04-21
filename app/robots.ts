import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/get-quote?*"],
      },
    ],
    sitemap: "https://safestorage.ae/sitemap.xml",
  }
}
