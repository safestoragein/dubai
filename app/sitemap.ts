import type { MetadataRoute } from "next"
import { getTotalPages } from "@/lib/blog-listing"
import { getListingPosts } from "@/lib/blog-listing"
import { STATIC_POSTS } from "@/lib/static-blog-posts"
import { AR_EMIRATES } from "@/lib/ar/registry"
import { SILO_PAGES, HAND_WRITTEN } from "@/lib/silo/registry"
import { allAreaPaths } from "@/lib/areas/registry"

// The money page is listed explicitly above with a higher priority, so it is
// filtered out here to avoid a duplicate entry the de-duplication would have
// silently dropped at the wrong priority.
const HAND_WRITTEN_SITEMAP = Object.keys(HAND_WRITTEN).filter(
  (path) => path !== "/self-storage-dubai/local-self-storage",
)

// The slug helper this file used to carry went with the per-post URLs, to
// /sitemap-blogs.xml. Both it and lib/blog-lastmod.ts build post URLs through
// blogSlug in lib/blog-post.ts — the same function /blog/[slug] canonicalises
// to — so there is one definition of a post's address rather than a copy here
// that can drift from it.

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://safestorage.ae"

  // ---------------------------------------------------------------------
  // Static routes.
  //
  // Generated from the same registries the pages render from — lib/silo for
  // the commercial silos and the guides, lib/areas for Silo 4 — rather than
  // hand-listed. The previous hand-maintained block still advertised /services
  // and /storage-dubai months after both were retired, and would have needed a
  // manual entry for every one of the pages added since.
  //
  // A sitemap must never list a URL that redirects, so nothing that appears as
  // a `source` in next.config.mjs belongs here.
  // ---------------------------------------------------------------------
  const p = (
    path: string,
    priority: number,
    changeFrequency: "weekly" | "monthly" | "yearly" = "monthly",
  ) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  })

  const routes: MetadataRoute.Sitemap = [
    // Home and the conversion path
    p("", 1.0, "weekly"),
    p("/get-quote", 0.9, "monthly"),
    p("/contact", 0.8, "monthly"),

    // The five silo hubs. These are the top of the tree and the only
    // cross-silo connectors on the site.
    p("/self-storage-dubai", 0.95, "weekly"),
    p("/personal-storage-dubai", 0.9, "weekly"),
    p("/business-storage-dubai", 0.9, "weekly"),
    p("/moving-storage-dubai", 0.9, "weekly"),
    p("/locations", 0.9, "weekly"),
    p("/guides", 0.8, "weekly"),

    // THE money page. `local self storage` is 2,400/mo at KD 16 and this is
    // the one URL designated to receive the site's internal link equity.
    p("/self-storage-dubai/local-self-storage", 0.95, "weekly"),

    // Hand-written silo children that are not in the content registry.
    ...HAND_WRITTEN_SITEMAP.map((path) => p(path, 0.8)),

    // Every data-driven silo page and guide.
    ...SILO_PAGES.map((page) => p(page.path, page.silo === "guides" ? 0.7 : 0.8)),

    // Silo 4 — every emirate hub and every area page, in both trees.
    ...allAreaPaths().map((path) => p(path, path.split("/").length === 3 ? 0.85 : 0.7)),

    // Arabic mirror.
    p("/ar/locations", 0.6),
    ...AR_EMIRATES.flatMap((e) => [
      p(`/ar/locations/${e.slug}`, 0.6),
      ...e.areas.map((a) => p(`/ar/locations/${e.slug}/${a.slug}`, 0.5)),
    ]),

    // Trust and content
    p("/about", 0.8),
    p("/testimonials", 0.7),
    p("/faq", 0.8),
    p("/blog", 0.8, "weekly"),
    p("/privacy-policy", 0.3, "yearly"),
    p("/terms-and-conditions", 0.3, "yearly"),
  ]

  // Fetch actual blog posts from API
  let blogRoutes: MetadataRoute.Sitemap = []

  try {
    // Shared memo rather than a fresh 11.7 MB download per sitemap request --
    // `cache: 'no-store'` here is what timed /sitemap.xml out (504) on 13 Aug.
    const blogs = await getListingPosts()

    // The 15 hand-written posts under app/blog/<slug>/ ARE listed here, because
    // nothing else lists them. /sitemap-blogs.xml is built from blog_lastmod,
    // which is built from the safestorage.in feed, and these posts have no feed
    // row — so when individual post URLs moved out of this file they fell
    // through the gap between the two sitemaps. Measured 2026-09-09: all 15
    // returned 200, carried up to 47 inbound internal links, and appeared in
    // neither sitemap.
    //
    // Their <lastmod> is the datePublished their own BlogPosting schema
    // declares. These are static files in the repo; if one is edited the date
    // in lib/static-blog-posts.ts is what should move.
    for (const post of STATIC_POSTS) {
      blogRoutes.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })
    }

    // CMS post URLs are NOT listed here — they live in
    // /sitemap-blogs.xml, which publishes a real per-post <lastmod>.
    //
    // They used to be emitted from this loop as
    //   new Date(post.updated_at || post.created_at || Date.now())
    // but the feed has no `updated_at`, so every post's lastmod was frozen at
    // its publish date and an edit changed nothing a crawler could see. The
    // blog_lastmod table exists to answer that question; see lib/blog-lastmod.ts.
    //
    // The listing is still built here because the page count below depends on
    // how many posts it actually paginates.

    // Paginated listing pages (/blog is already in `routes` as page 1). These carry
    // self-referencing canonicals and are the crawl path to every post, so they
    // belong in the sitemap.
    // getListingPosts(), not the raw feed. The raw feed counts unpublished rows
    // and omits the 15 static posts, so this was wrong in both directions —
    // 293 raw against 303 actually listed, which put /blog/page/7 outside the
    // sitemap while the listing linked to it from every other page.
    const totalListingPages = getTotalPages(blogs.length)
    for (let page = 2; page <= totalListingPages; page++) {
      blogRoutes.push({
        url: `${baseUrl}/blog/page/${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.5,
      })
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    // Return empty blog routes if fetch fails
    blogRoutes = []
  }

  // De-duplicate by URL, keeping the first (highest-priority) entry for each.
  // Several service pages were listed twice after the duplicate /storage-dubai/*
  // and /self-storage-dubai/* URLs were consolidated onto their canonical
  // equivalents. A sitemap that lists the same URL more than once is a weak
  // quality signal and makes indexation reports harder to read, so collapse
  // them here rather than relying on every hand-maintained block staying unique.
  const seen = new Set<string>()
  return [...routes, ...blogRoutes].filter((route) => {
    if (!route?.url || seen.has(route.url)) return false
    seen.add(route.url)
    return true
  })
}