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
      // www → non-www for policy pages (www.safestorage.ae 404s)
      {
        source: '/privacy-policy',
        destination: '/privacy-policy',
        permanent: false,
        has: [{ type: 'host', value: 'www.safestorage.ae' }],
      },
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
        has: [{ type: 'host', value: 'www.safestorage.ae' }],
      },
      // Arabic language redirect → homepage (no Arabic version exists)
      {
        source: '/ar',
        destination: '/',
        permanent: true,
      },
      // Missing location area pages → main locations page
      {
        source: '/locations/al-barsha',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/al-quoz',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/arabian-ranches',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/deira',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/downtown',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/downtown-dubai',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/dubai-hills',
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
        source: '/locations/mirdif',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/motor-city',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/locations/palm-jumeirah',
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
        destination: '/self-storage-dubai/climate-controlled',
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
}

export default nextConfig
