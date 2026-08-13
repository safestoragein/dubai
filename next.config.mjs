/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental performance features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    // Display optimized images inline (Next defaults to "attachment", which makes
    // the /_next/image URL download instead of render when opened directly).
    contentDispositionType: 'inline',
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'safestorage.ae',
      },
      {
        protocol: 'https',
        hostname: 'safestorage.in',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'hobletsonthego.com',
      },
    ],
  },

  // Redirects for old/removed pages
  async redirects() {
    return [
      // Fix broken internal links: /terms → /terms-and-conditions
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },

      // ---------------------------------------------------------------------
      // Duplicate service pages → one canonical URL per service.
      //
      // Every core service used to exist at TWO live URLs. Both returned 200,
      // both self-canonicalised, and neither pointed at the other: /services
      // linked one set while the site-wide footer linked the other. Google saw
      // two competing pages for the same query, split link equity and relevance
      // between them, and ranked neither — the single biggest technical reason
      // the site had zero top-3 rankings.
      //
      // The duplicates also disagreed on material facts (document retrieval
      // "24 hours" vs "2 business hours", student reach "100 countries" vs
      // "150", e-commerce "full pick-and-pack" vs "not a 3PL"), so keeping both
      // was worse than plain duplication. The surviving page is the one linked
      // from /services; the route files for the others have been removed.
      // ---------------------------------------------------------------------
      {
        source: '/storage-dubai/vehicle-storage',
        destination: '/car-storage',
        permanent: true,
      },
      {
        source: '/storage-dubai/records-archival',
        destination: '/document-storage',
        permanent: true,
      },
      {
        source: '/storage-dubai/ecommerce-fulfilment',
        destination: '/ecommerce-storage',
        permanent: true,
      },
      {
        source: '/self-storage-dubai/student-storage',
        destination: '/student-storage',
        permanent: true,
      },
      {
        source: '/self-storage-dubai/furniture-storage',
        destination: '/furniture-storage',
        permanent: true,
      },
      {
        source: '/self-storage-dubai/household-storage',
        destination: '/personal-storage',
        permanent: true,
      },
      {
        source: '/self-storage-dubai/how-it-works',
        destination: '/how-it-works',
        permanent: true,
      },
      // The last page still living under the retired nested pattern. Unlike the
      // redirects above it is not a duplicate — it is the only page targeting
      // "short term storage dubai" — so the content moved to a top-level URL
      // rather than being folded into another page.
      {
        source: '/self-storage-dubai/short-term-moving-renovation',
        destination: '/short-term-storage-dubai',
        permanent: true,
      },
      // www → non-www for ALL pages (fixes hreflang conflicts and www 404s)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.safestorage.ae' }],
        destination: 'https://safestorage.ae/:path*',
        permanent: true,
      },
      // Arabic language redirect → homepage (no Arabic version exists)
      {
        source: '/ar',
        destination: '/',
        permanent: true,
      },
      // Old location area aliases that never had pages → main locations page.
      //
      // /locations/al-quoz was removed from this list: it now has a real page.
      // A redirect here wins over the route, so leaving it in place would have
      // sent every Al Quoz visitor to the generic index instead.
      {
        source: '/locations/arabian-ranches',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/downtown',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/jlt',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/jvc',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/motor-city',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/silicon-oasis',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/sports-city',
        destination: '/locations',
        permanent: true,
      },
      // Missing /services/* pages → correct existing service pages
      {
        source: '/services/climate-controlled',
        destination: '/self-storage-dubai',
        permanent: true,
      },
      {
        source: '/services/document-storage',
        destination: '/document-storage',
        permanent: true,
      },
      {
        source: '/services/ecommerce-storage',
        destination: '/ecommerce-storage',
        permanent: true,
      },
      {
        source: '/services/furniture-storage',
        destination: '/furniture-storage',
        permanent: true,
      },
      {
        source: '/services/vehicle-storage',
        destination: '/car-storage',
        permanent: true,
      },
      // Permanently deleted blog posts → redirect to /blog (fixes Google Soft 404)
      {
        source: '/blog/musical-instrument-storage-dubai',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/business-storage-units-dubai-save-costs',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/antique-storage-dubai-preserve-valuables',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/climate-controlled-storage-dubai',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/electronics-storage-dubai-gadget-device',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/seasonal-storage-dubai-summer-winter',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/vehicle-storage-dubai-cars-bikes-boats',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/textile-storage-dubai-fabric-material',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/storage-small-businesses-dubai-startups',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/document-storage-solutions-dubai-businesses',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/event-storage-dubai-equipment-decorations',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/photography-equipment-storage-dubai',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/library-storage-dubai-book-archive',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/climate-controlled-storage-benefits',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/baby-items-storage-dubai-nursery',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/emergency-storage-dubai-last-minute',
        destination: '/blog',
        permanent: true,
      },
      // Redirect old /near/* location pages to main self-storage page
      {
        source: '/self-storage-dubai/near/:location',
        destination: '/self-storage-dubai',
        permanent: true,
      },
      // Redirect old storage-dubai subpages that don't exist
      {
        source: '/storage-dubai/business-storage',
        destination: '/business-storage',
        permanent: true,
      },
      {
        source: '/storage-dubai/warehouse-storage',
        destination: '/storage-dubai',
        permanent: true,
      },
      {
        source: '/storage-dubai/long-term-storage',
        destination: '/storage-dubai',
        permanent: true,
      },
      {
        source: '/storage-dubai/pricing-cost-guide',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/storage-dubai/self-vs-full-service',
        destination: '/storage-dubai',
        permanent: true,
      },
      // Redirect old self-storage-dubai subpages that don't exist
      {
        source: '/self-storage-dubai/storage-unit-sizes',
        destination: '/storage-units-dubai',
        permanent: true,
      },
      {
        source: '/self-storage-dubai/security-insurance',
        destination: '/self-storage-dubai',
        permanent: true,
      },
      {
        source: '/self-storage-dubai/faqs',
        destination: '/faq',
        permanent: true,
      },
    ]
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Serve blog images from our own domain for SEO. The bytes still live on the
  // safestorage.in image store, but crawlers/social see safestorage.ae URLs.
  // Used by lib/blog-image.ts which builds /blog-images/<file> URLs.
  async rewrites() {
    return [
      {
        source: '/blog-images/:path*',
        destination: 'https://safestorage.in/post_images/:path*',
      },
    ]
  },
}

export default nextConfig
