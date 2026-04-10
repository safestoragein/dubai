import type { MetadataRoute } from "next"

// Helper function to generate slug from title (matches blog page logic)
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

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
      url: `${baseUrl}/thank-you`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
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
      url: `${baseUrl}/locations/dubai-marina`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/business-bay`,
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
      url: `${baseUrl}/locations/dubai-investment-park`,
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
      url: `${baseUrl}/self-storage-dubai/household-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/self-storage-dubai/student-storage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/self-storage-dubai/furniture-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/self-storage-dubai/short-term-moving-renovation`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/self-storage-dubai/climate-controlled`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/self-storage-dubai/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
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
      url: `${baseUrl}/blog/climate-controlled-storage-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
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
    {
      url: `${baseUrl}/storage-dubai/ecommerce-fulfilment`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/storage-dubai/vehicle-storage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/storage-dubai/records-archival`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
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

    // Generate blog routes from actual blog posts
    blogRoutes = blogs.map((post: any) => {
      const title = post.title || post.seo_title || ''
      const slug = generateSlug(title)

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }
    }).filter((route: any) => route.url.includes('/blog/') && route.url.split('/blog/')[1].length > 0)
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    // Return empty blog routes if fetch fails
    blogRoutes = []
  }

  return [...routes, ...blogRoutes]
}