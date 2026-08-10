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
    // Two sitemaps, no overlap: /sitemap.xml carries the site's pages and the
    // blog listing pages, /sitemap-blogs.xml carries the individual posts with
    // a per-post <lastmod> that moves only when that post is edited.
    sitemap: [
      "https://safestorage.ae/sitemap.xml",
      "https://safestorage.ae/sitemap-blogs.xml",
    ],
  }
}
