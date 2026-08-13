import type { MetadataRoute } from "next"
import { getTotalPages } from "@/lib/blog-listing"

// The slug helper this file used to carry went with the per-post URLs, to
// /sitemap-blogs.xml. Both it and lib/blog-lastmod.ts build post URLs through
// blogSlug in lib/blog-post.ts — the same function /blog/[slug] canonicalises
// to — so there is one definition of a post's address rather than a copy here
// that can drift from it.

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://safestorage.ae"

  // Create the base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/get-quote`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/prohibited-items`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    // /thank-you removed from sitemap — post-form confirmation pages should not be indexed
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },

    // Main category pages
    {
      url: `${baseUrl}/personal-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/warehouse-storage-dubai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cheap-storage-dubai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/storage-units-dubai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },

    // Location pages
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/locations/business-bay`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/downtown-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/dubai-marina`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/palm-jumeirah`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/jumeirah`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/al-barsha`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/jumeirah-village-circle`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/dubai-hills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/mirdif`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/deira`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/dubai-silicon-oasis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/dubai-investment-park`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Industrial service areas. These target warehouse- and trade-intent queries
    // ("warehouse al quoz", "storage ras al khor") rather than the residential
    // storage intent the other location pages serve.
    {
      url: `${baseUrl}/locations/al-quoz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/ras-al-khor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/umm-ramool`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/al-qusais`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Top 10 Storage Company Ranking Pages (high-priority SEO)
    {
      url: `${baseUrl}/top-10-storage-companies-dubai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.98,
    },
    {
      url: `${baseUrl}/top-10-storage-companies-uae`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.98,
    },

    // SEO Content Pages (2026 guides)
    {
      url: `${baseUrl}/dubai-cost-of-living-2026`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/dubai-shopping-guide-2026`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/moving-to-dubai-2026`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/starting-business-dubai-2026`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/top-places-dubai-2026`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },


    // PILLAR 1: Self Storage Dubai
    {
      url: `${baseUrl}/self-storage-dubai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/short-term-storage-dubai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },


    // NEW Service Pages
    {
      url: `${baseUrl}/car-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/art-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/electronics-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/furniture-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecommerce-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/student-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/document-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/storage-size-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/expat-leaving-uae`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/international-relocation`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // NEW Blog Posts (static)
    {
      url: `${baseUrl}/blog/self-storage-cost-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/summer-storage-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/packing-tips-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/long-term-storage-expats`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/renovation-storage-tips`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/what-can-you-store`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/small-business-storage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/self-storage-guide-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-movers-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/villa-moving-guide-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/declutter-dubai-apartment`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/seasonal-ramadan-storage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/storage-vs-bigger-home`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mobile-storage-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/declutter-guide-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // PILLAR 2: Storage Dubai
    {
      url: `${baseUrl}/storage-dubai`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ]

  // Fetch actual blog posts from API
  let blogRoutes: MetadataRoute.Sitemap = []

  try {
    const response = await fetch('https://safestorage.in/get_blog_content', {
      cache: 'no-store'
    })
    const data = await response.json()

    const blogs = Array.isArray(data) ? data : []

    // Individual post URLs are NOT listed here — they live in
    // /sitemap-blogs.xml, which publishes a real per-post <lastmod>.
    //
    // They used to be emitted from this loop as
    //   new Date(post.updated_at || post.created_at || Date.now())
    // but the feed has no `updated_at`, so every post's lastmod was frozen at
    // its publish date and an edit changed nothing a crawler could see. The
    // blog_lastmod table exists to answer that question; see lib/blog-lastmod.ts.
    //
    // The feed is still fetched here because the listing-page count below
    // depends on how many posts there are.

    // Paginated listing pages (/blog is already in `routes` as page 1). These carry
    // self-referencing canonicals and are the crawl path to every post, so they
    // belong in the sitemap.
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