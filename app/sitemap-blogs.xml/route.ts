import { NextResponse } from "next/server"
import { getBlogSitemapEntries } from "@/lib/blog-lastmod"

// Blog-only sitemap: every published post from the safestorage.in feed, each
// carrying the date its own content last changed.
//
// It is a route handler rather than another app/sitemap.ts export because the
// <lastmod> values come from the blog_lastmod table, not from the feed — see
// lib/blog-lastmod.ts for why the feed cannot answer "when was this edited".
//
// app/sitemap.ts no longer emits individual post URLs, so a post appears in
// exactly one sitemap. Two sitemaps quoting different lastmod for the same URL
// would make both worthless.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  try {
    const entries = await getBlogSitemapEntries()

    const body =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      entries
        .map(
          (e) =>
            `  <url>\n` +
            `    <loc>${esc(e.url)}</loc>\n` +
            `    <lastmod>${esc(e.lastModified)}</lastmod>\n` +
            `    <changefreq>monthly</changefreq>\n` +
            `    <priority>0.7</priority>\n` +
            `  </url>\n`
        )
        .join("") +
      `</urlset>\n`

    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        // Cron refreshes the table every 10 minutes; there is no point serving
        // a crawler something staler than that, and no point recomputing it for
        // every hit either.
        "Cache-Control": "public, max-age=600, s-maxage=600",
      },
    })
  } catch (error) {
    console.error("sitemap-blogs error:", error)
    // A 500 tells Search Console to keep the last good copy. Emitting an empty
    // <urlset> instead would read as "every post was deleted".
    return new NextResponse("sitemap temporarily unavailable", { status: 500 })
  }
}
