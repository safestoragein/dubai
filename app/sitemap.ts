import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
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
    // Location pages
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
      url: `${baseUrl}/self-storage-dubai/storage-unit-sizes`,
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
    {
      url: `${baseUrl}/self-storage-dubai/security-insurance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/self-storage-dubai/faqs`,
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
      url: `${baseUrl}/storage-dubai/business-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
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
      url: `${baseUrl}/storage-dubai/warehouse-storage`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/storage-dubai/records-archival`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/storage-dubai/long-term-storage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/storage-dubai/pricing-cost-guide`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/storage-dubai/self-vs-full-service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    
    // Neighborhood pages - Self Storage Dubai
    {
      url: `${baseUrl}/self-storage-dubai/near/dubai-marina`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/jlt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/jvc`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/jumeirah`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/downtown`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/business-bay`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/al-quoz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/al-barsha`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/deira`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/bur-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/mirdif`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/silicon-oasis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/motor-city`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/dubai-south`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/dip`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/al-quasis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/self-storage-dubai/near/dubai-hills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ]

  // All 50 blog post slugs
  const blogSlugs = [
    "complete-guide-household-storage-dubai-2024",
    "document-storage-solutions-dubai-businesses",
    "business-storage-units-dubai-save-costs",
    "furniture-storage-dubai-climate-controlled",
    "moving-storage-dubai-relocation",
    "storage-unit-sizes-guide-dubai",
    "climate-controlled-storage-dubai",
    "storage-facility-security-dubai",
    "ecommerce-storage-solutions-dubai",
    "vehicle-storage-dubai-cars-bikes-boats",
    "storage-insurance-dubai-protection",
    "seasonal-storage-dubai-summer-winter",
    "student-storage-dubai-university",
    "storage-for-expats-dubai-guide",
    "wine-storage-dubai-climate-controlled",
    "art-storage-dubai-museum-quality",
    "sports-equipment-storage-dubai",
    "medical-equipment-storage-dubai-healthcare",
    "retail-inventory-storage-dubai",
    "law-firm-document-storage-dubai",
    "construction-storage-dubai-tools-materials",
    "event-storage-dubai-equipment-decorations",
    "photography-equipment-storage-dubai",
    "restaurant-equipment-storage-dubai",
    "gym-equipment-storage-dubai-fitness",
    "musical-instrument-storage-dubai",
    "baby-items-storage-dubai-nursery",
    "hobby-storage-dubai-crafts-collections",
    "salon-equipment-storage-dubai-beauty",
    "it-equipment-storage-dubai-server-computer",
    "hotel-storage-dubai-hospitality",
    "school-storage-dubai-educational",
    "pharmaceutical-storage-dubai-medicine",
    "antique-storage-dubai-preserve-valuables",
    "library-storage-dubai-book-archive",
    "fashion-storage-dubai-clothing-accessories",
    "electronics-storage-dubai-gadget-device",
    "textile-storage-dubai-fabric-material",
    "automotive-parts-storage-dubai-car",
    "compare-safestorage-vs-thebox-dubai",
    "storage-pricing-guide-dubai-2024",
    "dubai-storage-locations-guide-best-areas",
    "storage-tips-tricks-dubai-packing-guide",
    "short-term-vs-long-term-storage-dubai",
    "storage-during-ramadan-dubai",
    "storage-small-businesses-dubai-startups",
    "dubai-free-zone-storage-solutions",
    "emergency-storage-dubai-last-minute",
    "eco-friendly-storage-dubai-sustainable",
    "storage-mistakes-avoid-dubai-expert-guide"
  ]

  // Add blog post routes
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes]
}