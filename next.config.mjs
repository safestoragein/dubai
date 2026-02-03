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
