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
  //
  // THE SILO REDIRECT MAP (§9 of the plan).
  //
  // Three rules govern this whole block and they are worth stating because
  // breaking any one of them is expensive:
  //
  //   1. 301 only, never 302. A 302 passes no signal, and every URL here is
  //      being retired permanently.
  //   2. SINGLE HOP, never chained. Where an old redirect used to point at a
  //      URL that has itself now moved, the old redirect's destination was
  //      re-pointed at the FINAL target rather than left to chain through it.
  //      /services/vehicle-storage → /personal-storage-dubai/car-storage is
  //      the shape to copy; /services/vehicle-storage → /car-storage →
  //      /personal-storage-dubai/car-storage is the shape that loses equity.
  //   3. Ship the whole map in ONE deployment. Forty redirects released
  //      together cause a two-to-three week ranking wobble that recovers;
  //      dribbled out over a month they cause a longer one that does not.
  //
  // Internal links were re-pointed at the new targets directly rather than
  // relying on these, so this block catches external links and bookmarks.
  async redirects() {
    return [
      // =====================================================================
      // SILO 1 — /self-storage-dubai/*
      // =====================================================================
      //
      // The money page. `local self storage` is 2,400/mo (AE) at KD 16, and
      // the URL ranking #7 for it was a BLOG POST — a commercial local query
      // answered by an article URL, which is why that ranking kept vanishing
      // between crawls. This redirect and the page it points at MUST stay in
      // the same deployment: the redirect without the page is a 404, the page
      // without the redirect leaves the #7 ranking stranded.
      {
        source:
          '/blog/local-self-storage-the-ultimate-guide-to-the-best-storage-units-dubai-for-homes-businesses',
        destination: '/self-storage-dubai/local-self-storage',
        permanent: true,
      },
      {
        // Root-level exact match. The money page is nested so it inherits
        // topical relevance from the hub; this still captures direct-URL and
        // exact-match signals.
        source: '/local-self-storage-dubai',
        destination: '/self-storage-dubai/local-self-storage',
        permanent: true,
      },

      // Head-term consolidation. Five near-duplicate head-term pages sat flat
      // at root, all competing for one intent — Google picked a different URL
      // each crawl and none consolidated. The register gives each keyword one
      // owner; these retire the losers.
      { source: '/storage-dubai',             destination: '/self-storage-dubai',                    permanent: true },
      { source: '/services',                  destination: '/self-storage-dubai',                    permanent: true },
      { source: '/storage-units-dubai',       destination: '/self-storage-dubai/storage-units',      permanent: true },
      { source: '/storage-size-guide',        destination: '/self-storage-dubai/unit-sizes',         permanent: true },
      { source: '/short-term-storage-dubai',  destination: '/self-storage-dubai/short-term',         permanent: true },
      { source: '/how-it-works',              destination: '/self-storage-dubai/how-it-works',       permanent: true },
      { source: '/prohibited-items',          destination: '/self-storage-dubai/prohibited-items',   permanent: true },
      // /pricing and /cheap-storage-dubai MERGE into one page deliberately.
      // Seven of this site's own URLs competed for `storage cost per month`,
      // the worst cluster on the domain; one page serving both the "what does
      // it cost" and "what's cheapest" intent is what ends it.
      { source: '/pricing',                   destination: '/self-storage-dubai/prices',             permanent: true },
      { source: '/cheap-storage-dubai',       destination: '/self-storage-dubai/prices',             permanent: true },

      // =====================================================================
      // SILO 2 — /personal-storage-dubai/*
      // =====================================================================
      // Seven flat root URLs that competed with each other and with Silo 1.
      // The route files moved to these paths with their content intact.
      { source: '/personal-storage',      destination: '/personal-storage-dubai',                        permanent: true },
      { source: '/furniture-storage',     destination: '/personal-storage-dubai/furniture-storage',      permanent: true },
      { source: '/car-storage',           destination: '/personal-storage-dubai/car-storage',            permanent: true },
      { source: '/student-storage',       destination: '/personal-storage-dubai/student-storage',        permanent: true },
      { source: '/expat-leaving-uae',     destination: '/personal-storage-dubai/expat-storage',          permanent: true },
      { source: '/art-storage',           destination: '/personal-storage-dubai/art-storage',            permanent: true },
      { source: '/electronics-storage',   destination: '/personal-storage-dubai/electronics-storage',    permanent: true },
      // Ranking blog post → the commercial page that now owns the keyword.
      {
        source: '/blog/short-term-luggage-storage-lockers-dubai',
        destination: '/personal-storage-dubai/luggage-storage',
        permanent: true,
      },

      // =====================================================================
      // SILO 3 — /business-storage-dubai/*
      // =====================================================================
      { source: '/business-storage',        destination: '/business-storage-dubai',                        permanent: true },
      { source: '/warehouse-storage-dubai', destination: '/business-storage-dubai/warehouse-storage',      permanent: true },
      { source: '/document-storage',        destination: '/business-storage-dubai/document-storage',       permanent: true },
      { source: '/ecommerce-storage',       destination: '/business-storage-dubai/ecommerce-fulfilment',   permanent: true },

      // =====================================================================
      // SILO 5 — /moving-storage-dubai/*
      // =====================================================================
      { source: '/international-relocation', destination: '/moving-storage-dubai/international-relocation', permanent: true },
      // A SERVICE page misfiled among Sharjah's area pages. It belongs in Silo 5.
      { source: '/locations/sharjah/moving-storage', destination: '/moving-storage-dubai', permanent: true },

      // =====================================================================
      // GUIDES — /guides/*
      // =====================================================================
      //
      // Dropping the year from these slugs means the pages stop going stale
      // every January, which was worth doing while already redirecting them.
      //
      // ⚠ /top-10-storage-companies-dubai ranks #6 for `best storage company
      // in dubai` (390/mo). Its route file was MOVED with its content intact
      // rather than rewritten, precisely so that ranking has something to
      // transfer to. Watch this URL specifically after deployment.
      { source: '/top-10-storage-companies-dubai', destination: '/guides/best-storage-companies-dubai', permanent: true },
      { source: '/top-10-storage-companies-uae',   destination: '/guides/best-storage-companies-uae',   permanent: true },
      { source: '/dubai-cost-of-living-2026',      destination: '/guides/dubai-cost-of-living',         permanent: true },
      { source: '/moving-to-dubai-2026',           destination: '/guides/moving-to-dubai',              permanent: true },
      { source: '/starting-business-dubai-2026',   destination: '/guides/starting-a-business-in-dubai', permanent: true },
      { source: '/top-places-dubai-2026',          destination: '/guides/best-places-to-live-dubai',    permanent: true },
      { source: '/dubai-shopping-guide-2026',      destination: '/guides/dubai-shopping-guide',         permanent: true },

      // =====================================================================
      // SILO 4 — /locations/{emirate}/{area}
      // =====================================================================
      //
      // ⚠ DO NOT use a wildcard here. `/locations/:area` would also match the
      // live /locations/sharjah and /locations/ajman hubs and every new
      // emirate hub, 301-ing them into 404s on launch day. The sixteen Dubai
      // slugs are enumerated exactly.
      { source: '/locations/business-bay',            destination: '/locations/dubai/business-bay',            permanent: true },
      { source: '/locations/downtown-dubai',          destination: '/locations/dubai/downtown-dubai',          permanent: true },
      { source: '/locations/dubai-marina',            destination: '/locations/dubai/dubai-marina',            permanent: true },
      { source: '/locations/palm-jumeirah',           destination: '/locations/dubai/palm-jumeirah',           permanent: true },
      { source: '/locations/jumeirah',                destination: '/locations/dubai/jumeirah',                permanent: true },
      { source: '/locations/al-barsha',               destination: '/locations/dubai/al-barsha',               permanent: true },
      { source: '/locations/jumeirah-village-circle', destination: '/locations/dubai/jumeirah-village-circle', permanent: true },
      { source: '/locations/dubai-hills',             destination: '/locations/dubai/dubai-hills',             permanent: true },
      { source: '/locations/mirdif',                  destination: '/locations/dubai/mirdif',                  permanent: true },
      { source: '/locations/deira',                   destination: '/locations/dubai/deira',                   permanent: true },
      { source: '/locations/dubai-silicon-oasis',     destination: '/locations/dubai/dubai-silicon-oasis',     permanent: true },
      { source: '/locations/dubai-investment-park',   destination: '/locations/dubai/dubai-investment-park',   permanent: true },
      { source: '/locations/al-quoz',                 destination: '/locations/dubai/al-quoz',                 permanent: true },
      { source: '/locations/ras-al-khor',             destination: '/locations/dubai/ras-al-khor',             permanent: true },
      { source: '/locations/umm-ramool',              destination: '/locations/dubai/umm-ramool',              permanent: true },
      { source: '/locations/al-qusais',               destination: '/locations/dubai/al-qusais',               permanent: true },
      // Aliases that never had pages. These now point at the Dubai emirate hub
      // rather than the /locations index — a more specific, more useful target.
      { source: '/locations/arabian-ranches', destination: '/locations/dubai/arabian-ranches',          permanent: true },
      { source: '/locations/downtown',        destination: '/locations/dubai/downtown-dubai',           permanent: true },
      { source: '/locations/jlt',             destination: '/locations/dubai/jlt',                      permanent: true },
      { source: '/locations/jvc',             destination: '/locations/dubai/jumeirah-village-circle',  permanent: true },
      { source: '/locations/motor-city',      destination: '/locations/dubai/motor-city',               permanent: true },
      { source: '/locations/silicon-oasis',   destination: '/locations/dubai/dubai-silicon-oasis',      permanent: true },
      { source: '/locations/sports-city',     destination: '/locations/dubai/sports-city',              permanent: true },
      // NOT redirected — these stay as hubs:
      //   /locations  /locations/dubai  /locations/abu-dhabi  /locations/sharjah
      //   /locations/ajman  /locations/ras-al-khaimah  /locations/fujairah
      //   /locations/umm-al-quwain  /locations/al-ain

      // =====================================================================
      // Pre-existing redirects, re-pointed at their FINAL targets
      // =====================================================================
      //
      // Every one of these used to point at a URL that has since moved. They
      // were re-pointed rather than left to chain — rule 2 above.
      { source: '/terms',                              destination: '/terms-and-conditions',                        permanent: true },
      { source: '/storage-dubai/vehicle-storage',      destination: '/personal-storage-dubai/car-storage',          permanent: true },
      { source: '/storage-dubai/records-archival',     destination: '/business-storage-dubai/document-storage',     permanent: true },
      { source: '/storage-dubai/ecommerce-fulfilment', destination: '/business-storage-dubai/ecommerce-fulfilment', permanent: true },
      { source: '/storage-dubai/business-storage',     destination: '/business-storage-dubai',                      permanent: true },
      { source: '/storage-dubai/warehouse-storage',    destination: '/business-storage-dubai/warehouse-storage',    permanent: true },
      { source: '/storage-dubai/long-term-storage',    destination: '/self-storage-dubai/long-term',                permanent: true },
      { source: '/storage-dubai/pricing-cost-guide',   destination: '/self-storage-dubai/prices',                   permanent: true },
      { source: '/storage-dubai/self-vs-full-service', destination: '/self-storage-dubai/how-it-works',             permanent: true },
      { source: '/services/climate-controlled',        destination: '/self-storage-dubai/climate-controlled',       permanent: true },
      { source: '/services/document-storage',          destination: '/business-storage-dubai/document-storage',     permanent: true },
      { source: '/services/ecommerce-storage',         destination: '/business-storage-dubai/ecommerce-fulfilment', permanent: true },
      { source: '/services/furniture-storage',         destination: '/personal-storage-dubai/furniture-storage',    permanent: true },
      { source: '/services/vehicle-storage',           destination: '/personal-storage-dubai/car-storage',          permanent: true },
      { source: '/self-storage-dubai/student-storage',   destination: '/personal-storage-dubai/student-storage',      permanent: true },
      { source: '/self-storage-dubai/furniture-storage', destination: '/personal-storage-dubai/furniture-storage',    permanent: true },
      { source: '/self-storage-dubai/household-storage', destination: '/personal-storage-dubai/household-storage',    permanent: true },
      { source: '/self-storage-dubai/short-term-moving-renovation', destination: '/self-storage-dubai/short-term',    permanent: true },
      { source: '/self-storage-dubai/storage-unit-sizes', destination: '/self-storage-dubai/unit-sizes',              permanent: true },
      { source: '/self-storage-dubai/security-insurance', destination: '/self-storage-dubai/secure-storage',          permanent: true },
      { source: '/self-storage-dubai/faqs',              destination: '/faq',                                         permanent: true },
      { source: '/self-storage-dubai/near/:location',    destination: '/self-storage-dubai/near-me',                  permanent: true },

      // www → non-www for ALL pages (fixes hreflang conflicts and www 404s)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.safestorage.ae' }],
        destination: 'https://safestorage.ae/:path*',
        permanent: true,
      },

      // ---------------------------------------------------------------------
      // Withdrawn by decision, not deleted.
      //
      // The wine-storage article sold wine and spirits storage, which
      // /self-storage-dubai/prohibited-items lists as something we do NOT
      // store — the site contradicted itself, and alcohol storage in the UAE
      // carries a licensing dimension beyond storage. lib/blog-feed.ts drops
      // it from the listing, the feed and the sitemap; this sends anyone on
      // the old link somewhere that actually answers what they came for.
      //
      // A 301 rather than the 410 used below, because the content was
      // withdrawn on policy grounds and there is a genuinely relevant page to
      // send the reader to. Unpublishing it in the safestorage.in dashboard
      // remains the durable fix.
      // ---------------------------------------------------------------------
      {
        source: '/blog/wine-storage-dubai-keeping-your-collection-safe-in-the-uae-climate',
        destination: '/self-storage-dubai/climate-controlled',
        permanent: true,
      },

      // Permanently deleted blog posts → /blog. middleware.ts additionally
      // returns 410 for these so Google stops re-crawling them.
      ...[
        'musical-instrument-storage-dubai',
        'business-storage-units-dubai-save-costs',
        'antique-storage-dubai-preserve-valuables',
        'climate-controlled-storage-dubai',
        'electronics-storage-dubai-gadget-device',
        'seasonal-storage-dubai-summer-winter',
        'vehicle-storage-dubai-cars-bikes-boats',
        'textile-storage-dubai-fabric-material',
        'storage-small-businesses-dubai-startups',
        'document-storage-solutions-dubai-businesses',
        'event-storage-dubai-equipment-decorations',
        'photography-equipment-storage-dubai',
        'library-storage-dubai-book-archive',
        'climate-controlled-storage-benefits',
        'baby-items-storage-dubai-nursery',
        'emergency-storage-dubai-last-minute',
      ].map((slug) => ({
        source: `/blog/${slug}`,
        destination: '/blog',
        permanent: true,
      })),
    ]
  },

  // Headers for caching
  async headers() {
    return [
      {
        // Blog pages: always let the BROWSER revalidate.
        //
        // Next's default for an ISR page is `s-maxage=3600,
        // stale-while-revalidate=31532400` with no max-age, which leaves browsers
        // to guess a freshness lifetime. They guess generously, so a reader who
        // opened a post before an edit -- or worse, while it briefly 404'd -- kept
        // being shown that copy long after the server was serving the new one.
        // That cost real time on 2026-09-07: the page was repeatedly reported as
        // "still not updated" when the server had already fixed it.
        //
        // max-age=0 + must-revalidate makes the browser ask every time; the answer
        // is a 304 when nothing changed, so it costs a round trip and no payload.
        // s-maxage keeps the server-side ISR behaviour exactly as it was.
        source: '/blog/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
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
