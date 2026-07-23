import BlogPostDetail from "@/components/blog/blog-post-detail"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"
import { cache } from "react"
import { notFound, permanentRedirect } from "next/navigation"
import { blogImageUrl } from "@/lib/blog-image"
import { getAllBlogs } from "@/lib/blog-db"

// ISR safety net; the blog sync also triggers on-demand revalidation so edits
// appear promptly rather than waiting for this window.
export const revalidate = 600

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Legacy climate-storage slugs were renamed when climate/temperature/humidity
// "control" wording was stripped from blog titles (climate-controlled -> secure,
// climate control -> secure storage, then de-duplicated). This maps an old slug
// onto its current form using the exact same substitutions, so legacy URLs can be
// 301-redirected to the live post instead of 404ing. Returns null if unchanged.
function remapLegacyClimateSlug(slug: string): string | null {
  const mapped = slug
    // "...-controlled" phrases -> secure
    .replace(/(climate|temperature|humidity)-controlled/g, 'secure')
    // standalone "...-control" -> secure-storage
    .replace(/(climate|temperature|humidity)-control(?![a-z])/g, 'secure-storage')
    // collapse the duplicate "secure" the substitutions can produce
    .replace(/secure-and-secure/g, 'secure')
    .replace(/(?:secure-)+secure/g, 'secure')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
  return mapped && mapped !== slug ? mapped : null
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// cache() deduplicates this across generateMetadata + page component in a single request
const fetchAllBlogs = cache(async () => {
  // Blog content now lives in the local EC2 MariaDB (see lib/blog-db.ts),
  // no longer fetched from safestorage.in at runtime.
  return await getAllBlogs()
})

// Pre-generate all CMS blog post pages at build time so they're served
// as static HTML from CDN instead of being server-rendered on demand.
export async function generateStaticParams() {
  try {
    const blogs = await fetchAllBlogs()
    return blogs
      .map((post: any) => {
        const title = post.title || post.seo_title || ''
        const slug = generateSlug(title)
        return slug ? { slug } : null
      })
      .filter(Boolean)
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const canonicalUrl = `https://safestorage.ae/blog/${slug}`

  try {
    const blogs = await fetchAllBlogs()

    const post = blogs.find((b: any) => {
      const title = b.title || b.seo_title || ''
      const postId = parseInt(b.post_id) || 0
      const idMatch = slug.match(/^(\d+)-/)
      if (idMatch) return parseInt(idMatch[1]) === postId
      return generateSlug(title) === slug
    })

    if (!post) {
      return {
        title: { absolute: "Blog Post Not Found" },
        description: "The requested blog post could not be found.",
        robots: { index: false, follow: false },
        alternates: { canonical: canonicalUrl, languages: { 'en': canonicalUrl, 'x-default': canonicalUrl } },
      }
    }

    // Use seo_title for browser tab / Google title, seo_desc for meta description
    // Root layout template already appends "| SafeStorage Dubai" — do NOT add it here
    const metaTitle = post.seo_title || post.title || "Blog"

    // Generate unique description: use seo_desc, fallback to first 160 chars of plain-text content
    const rawDesc = post.seo_desc || ""
    const description = rawDesc.trim()
      ? rawDesc.trim().slice(0, 160)
      : (post.description || "")
          .replace(/<[^>]+>/g, " ")   // strip HTML tags
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 160) ||
        `Learn about ${post.title || "storage tips"} from SafeStorage Dubai experts.`

    const imageUrl = blogImageUrl(post.post_images)

    return {
      title: { absolute: metaTitle },
      description: description,
      keywords: post.tags || "",
      alternates: { canonical: canonicalUrl, languages: { 'en': canonicalUrl, 'x-default': canonicalUrl } },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
      },
      openGraph: {
        title: metaTitle,
        description: description,
        url: canonicalUrl,
        siteName: "SafeStorage Dubai",
        type: "article",
        images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: metaTitle }] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: { absolute: "Storage Tips & Guides" },
      description: "Expert storage tips and guides from SafeStorage Dubai",
      alternates: { canonical: canonicalUrl, languages: { 'en': canonicalUrl, 'x-default': canonicalUrl } },
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const canonicalUrl = `https://safestorage.ae/blog/${slug}`

  let post: any = null
  // Legacy climate-storage slug to 301 to, if the requested one no longer exists.
  let legacyRedirect: string | null = null
  try {
    const blogs = await fetchAllBlogs()
    const matchPost = (candidate: string) =>
      blogs.find((b: any) => {
        const title = b.title || b.seo_title || ''
        const postId = parseInt(b.post_id) || 0
        const idMatch = candidate.match(/^(\d+)-/)
        if (idMatch) return parseInt(idMatch[1]) === postId
        return generateSlug(title) === candidate
      })

    post = matchPost(slug)

    if (!post) {
      // Legacy climate-storage URL? Map it to the renamed post so old
      // Google-indexed links and backlinks 301 through instead of 404ing.
      const remapped = remapLegacyClimateSlug(slug)
      if (remapped && matchPost(remapped)) {
        legacyRedirect = `/blog/${remapped}`
      }
    }
  } catch (error) {
    console.error('Error checking blog post:', error)
    // DB failed — treat as not found to avoid soft 404
    notFound()
  }

  // Redirect/notFound live outside the try so their control-flow errors
  // (NEXT_REDIRECT / NEXT_NOT_FOUND) are never swallowed by the catch above.
  if (legacyRedirect) {
    permanentRedirect(legacyRedirect)
  }
  if (!post) {
    notFound()
  }

  const imageUrl = blogImageUrl(post?.post_images)
    || 'https://safestorage.ae/images/storage-facility-background.png'

  const plainText = (post?.description || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200)

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    headline: post?.seo_title || post?.title || '',
    name: post?.title || '',
    description: post?.seo_desc?.trim() || plainText,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    url: canonicalUrl,
    datePublished: post?.created_at || new Date().toISOString(),
    dateModified: post?.updated_at || post?.created_at || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'SafeStorage Dubai',
      url: 'https://safestorage.ae',
    },
    publisher: {
      '@id': 'https://safestorage.ae/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    keywords: post?.tags || '',
    articleSection: post?.post_category || 'Storage Tips',
    inLanguage: 'en-AE',
    isPartOf: {
      '@type': 'Blog',
      '@id': 'https://safestorage.ae/blog#blog',
      name: 'SafeStorage Dubai Blog',
      publisher: { '@id': 'https://safestorage.ae/#organization' },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://safestorage.ae/blog' },
      { '@type': 'ListItem', position: 3, name: post?.title || slug, item: canonicalUrl },
    ],
  }

  return (
    <>
      <SchemaScript schema={[blogPostingSchema, breadcrumbSchema]} />
      {/* Server-rendered H1 — for Google/crawlers only, visually hidden to avoid duplicate with client title */}
      <h1 style={{ position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: "0" }}>
        {post.title} — SafeStorage Dubai Guide
      </h1>
      <BlogPostDetail slug={slug} />

      {/* Static section — server-rendered, boosts word count and internal linking */}
      <section style={{ padding: "48px 24px", background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
            Why Dubai Residents Trust SafeStorage
          </h2>
          <p style={{ color: "#374151", lineHeight: "1.75", marginBottom: "16px" }}>
            SafeStorage Dubai is the city&apos;s most trusted self-storage provider, offering secure, clean, dust-protected units for households and businesses alike. Every unit is monitored by 24/7 CCTV, secured with individual PIN access, and kept clean and dust-free — giving every customer peace of mind whether they are storing for a week or a year.
          </p>
          <p style={{ color: "#374151", lineHeight: "1.75", marginBottom: "16px" }}>
            With over 500 satisfied customers across Dubai and a 4.9-star average rating, we have helped households, businesses, expats, students, and e-commerce sellers manage their belongings efficiently. Every unit is monitored by 24/7 CCTV, secured with individual PIN access, and covered by complimentary insurance up to AED 5,000 — something very few storage providers in the UAE offer as standard.
          </p>

          <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#111827", marginBottom: "12px", marginTop: "24px" }}>
            What We Store
          </h3>
          <p style={{ color: "#374151", lineHeight: "1.75", marginBottom: "16px" }}>
            We accept a wide range of items: sofas, beds, dining sets, wardrobes, white goods, boxes, seasonal clothing, sports equipment, business inventory, office furniture, trade show displays, documents and files, vehicles (cars, motorcycles, classic cars), artwork, antiques, and e-commerce stock. Our unit sizes range from small lockers to full-villa-sized rooms — so you only pay for exactly the space you need.
          </p>

          <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#111827", marginBottom: "12px", marginTop: "24px" }}>
            Door-to-door Pickup Across Dubai
          </h3>
          <p style={{ color: "#374151", lineHeight: "1.75", marginBottom: "16px" }}>
            One of our most popular features is our door-to-door pickup service. You do not need to rent a lorry, hire movers separately, or make multiple trips. Our team comes to your door, carefully loads your belongings, transports them to our secure facility, and delivers them back when you need them — all included in your monthly plan. We serve every neighbourhood in Dubai including Business Bay, Dubai Marina, Jumeirah, JBR, DIFC, Downtown, Deira, Bur Dubai, Al Barsha, Dubai Investment Park, Motor City, and beyond.
          </p>

          <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#111827", marginBottom: "12px", marginTop: "24px" }}>
            Flexible Plans Starting from 12.60 AED / sqft
          </h3>
          <p style={{ color: "#374151", lineHeight: "1.75", marginBottom: "24px" }}>
            There are no long-term lock-ins. Pricing starts from 12.60 AED / sqft (VAT-inclusive), and you only pay for the space you use. You can start with as little as one week of storage, extend month by month, or book long-term for the best rates. Getting started takes less than two minutes: visit our website, select your unit size, book your pickup slot, and we handle everything else. Most customers have their items picked up within 24 hours of booking.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://safestorage.ae/get-quote"
              style={{
                display: "inline-block",
                background: "#f97316",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "0.95rem"
              }}
            >
              Get a Free Quote
            </a>
            <a
              href="https://safestorage.ae/self-storage-dubai/how-it-works"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#111827",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "0.95rem",
                border: "1px solid #d1d5db"
              }}
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Storage Tips & Extended FAQ — server-rendered, boosts text-to-HTML ratio on every blog post */}
      <section style={{ padding: "48px 24px", background: "#fff", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111827", marginBottom: "20px" }}>
            10 Essential Storage Tips for Dubai Residents
          </h2>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>1. Wrap and Cover Everything Against Dust</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Dust is the most common threat to items in any storage setting, and Dubai is a particularly dusty environment. Before storing, wrap furniture in breathable covers, seal boxes with strong tape on all seams, and use furniture blankets over wooden and upholstered surfaces. This keeps fine dust out and your belongings clean for retrieval. SafeStorage Dubai units are kept clean and dust-protected, and our team supplies quality covers and wrapping materials as part of our door-to-door service, so everything you store stays in the condition you left it.
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>2. Disassemble Furniture Before Storing</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Disassembling bed frames, dining tables, wardrobes, and shelving units before moving them into storage can reduce the space they occupy by 40–60%. A king-size bed frame, for example, takes up roughly half the floor area when broken down versus when assembled. This directly reduces the unit size you need — and therefore your monthly bill. Keep all screws, bolts, and fixings in labelled zip-lock bags taped to the corresponding furniture piece so reassembly is straightforward later. SafeStorage&apos;s team can assist with disassembly and reassembly as part of our door-to-door service.
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>3. Use Uniform Box Sizes for Maximum Efficiency</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Mixing box sizes creates gaps and unstable stacking. Standardising your boxes — typically medium (60x40x40 cm) for books and heavy items, and large (60x50x50 cm) for light bulky items like bedding — allows you to create clean, stable columns from floor to ceiling. Each additional layer of boxes you can safely stack is space you are fully utilising. SafeStorage Dubai sells quality double-walled boxes in standard sizes specifically designed to stack together. Using uniform boxes can increase the effective capacity of your unit by 25–35% compared to random assorted sizes.
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>4. Label Every Box on Three Sides</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              The most common frustration in storage is being unable to find a specific item without unpacking half the unit. Labelling each box clearly on the top and two sides with the contents, the room it belongs to, and a priority number (1 = need frequently, 3 = rarely needed) allows you to locate items quickly. For items you may need without warning — such as documents, tools, or seasonal clothing — place those boxes at the front of the unit. A simple spreadsheet or photo log of what is in each box, numbered sequentially, takes 15 minutes to create and saves hours of searching later.
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>5. Create a Central Access Aisle</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              When loading a storage unit, it is tempting to fill every square centimetre from front to back. This works if you never need to retrieve a single item — but most people do. Leave a 60–70 cm aisle down the centre of the unit so you can walk to the back without having to move everything. Place items you may need on a schedule (seasonal clothes, specific documents, equipment used quarterly) within arm&apos;s reach on the left and right sides of this aisle. Items you are storing indefinitely can go all the way to the back. This simple organisation system makes every retrieval visit quick and stress-free.
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>6. Protect Soft Furnishings Properly</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Sofas, mattresses, and cushions should be stored in breathable fabric covers — not plastic sheeting. Plastic traps moisture and promotes mould growth, which can penetrate deep into foam and fabric. Breathable woven covers allow air circulation while keeping out dust and insects. Mattresses should be stored upright (vertically) rather than flat to avoid compression deformation over time. Sofas can be wrapped in moving blankets for additional protection. SafeStorage Dubai supplies high-quality furniture covers and mattress bags as part of our packing service.
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>7. Document High-Value Items for Insurance</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Before placing high-value items into storage — electronics, artwork, antiques, musical instruments — photograph each item against a plain background and note the serial number, make, model, and estimated value. Store these records in a cloud folder or email them to yourself. SafeStorage Dubai includes free insurance up to AED 5,000 with every unit, and additional coverage is available for higher-value items. Having photo documentation and written records speeds up any insurance claim significantly and removes ambiguity about the pre-storage condition of your belongings.
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>8. Store Heavy Items at the Bottom, Light at the Top</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              This fundamental packing rule protects both your belongings and yourself. Boxes of books, kitchen appliances, and tools should go at floor level. Fragile items like glassware, lamps, and electronics should be cushioned on top of sturdy lower layers, never at the bottom where they could be crushed. When stacking within a box, place heavier items at the base and lighter items on top. If you are using shelving inside your unit, place the heaviest items on the lowest shelf. This keeps the unit stable and prevents the kind of cascading collapses that can damage an entire unit&apos;s worth of belongings.
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>9. Empty and Clean Appliances Before Storing</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Fridges, freezers, washing machines, and dishwashers must be thoroughly cleaned and completely dried before going into storage. Any residual moisture inside a sealed appliance will generate mould and odours within days. Defrost the freezer fully, wipe every surface dry, and leave the door slightly ajar during storage to allow air circulation. Washing machines should have the drum and rubber seal wiped clean and dried. Ovens and microwaves need grease and food residue removed. Taking 30 minutes to prepare appliances properly ensures they are ready to use immediately when you retrieve them — with no unpleasant surprises.
            </p>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>10. Review Your Unit Contents Every Six Months</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Long-term storage has a way of accumulating items that are no longer needed. Every six months, take 20 minutes to review your inventory list and ask honestly: do I still need this? Many people find that after a year in storage, a significant portion of their items could be sold, donated, or disposed of — freeing them to downsize to a smaller unit and reduce their monthly costs. SafeStorage Dubai makes this easy: simply schedule a partial retrieval, go through your items, remove what you no longer need, and return the rest. Many of our customers have reduced their unit size after a review and saved hundreds of dirhams per year.
            </p>
          </div>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111827", marginBottom: "20px", marginTop: "8px" }}>
            Frequently Asked Questions — Storage in Dubai
          </h2>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>How much does storage cost in Dubai per month?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Storage prices in Dubai vary widely depending on unit size and whether pickup and delivery are included. At SafeStorage Dubai, pricing starts from 12.60 AED / sqft (VAT-inclusive), and you only pay for the space you actually use. All SafeStorage plans include 24/7 security, insurance, and door-to-door service — which often saves customers AED 300–800 compared to hiring movers separately.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>Do storage companies in Dubai offer door-to-door pickup?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Most traditional storage facilities in Dubai do not include pickup — customers are expected to bring their own items to the facility. SafeStorage Dubai is different: our door-to-door model means our team comes to your home or office, loads your belongings, transports them to our facility, and delivers them back when you need them — all included as standard in your monthly plan. We cover all Dubai neighbourhoods including Business Bay, Dubai Marina, JBR, Jumeirah, Downtown, Al Barsha, Deira, Bur Dubai, JVC, JLT, and Dubai Investment Park.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>What is the minimum storage period at SafeStorage Dubai?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              SafeStorage Dubai offers flexible arrangements with no rigid minimum term. Most customers store on a month-to-month basis, and you can start with as little as one week of storage for renovation or short-term moving situations. There are no cancellation penalties — simply give seven days&apos; notice when you want your items returned. For longer-term storage of three months or more, we offer discounted rates. Annual plans provide the best value per month and are popular with expats and businesses storing long-term.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>How secure is storage in Dubai?</h3>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>What items can I NOT store in a Dubai storage unit?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              SafeStorage Dubai does not store the following items: food or grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items. The following are also prohibited in any professional storage facility in Dubai: flammable liquids (petrol, paint thinner, acetone), compressed gas cylinders, explosives or firearms, live animals or plants, perishable food or anything that will decompose, illegal substances or counterfeit goods, and corrosive chemicals. Everything else — furniture, electronics, clothing, documents, sports equipment, vehicles, business inventory, and seasonal items — is welcome at SafeStorage Dubai. If you are unsure about a specific item, call our team at +971505773388 and we will advise.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>Can I access my stored items anytime?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              SafeStorage Dubai offers facility access during operating hours: Monday through Saturday from 8 AM to 8 PM, and Sunday from 10 AM to 6 PM. Business customers and those with special requirements can arrange extended access hours. Alternatively, rather than visiting the facility yourself, you can request specific items or boxes to be delivered to your address — our team will retrieve and deliver them within 24–48 hours. This delivery-on-demand feature is particularly popular with customers who store business inventory or archive documents they need occasionally.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>How do I choose the right storage unit size in Dubai?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              The right unit size depends on what you are storing. As a general guide: a small unit (25 sq ft) suits documents, seasonal items, and 10–15 boxes. A medium unit (50–75 sq ft) comfortably holds a studio or one-bedroom apartment. A large unit (100–150 sq ft) accommodates a two-to-three bedroom apartment. An extra-large unit (200+ sq ft) handles a full four-to-five bedroom villa. The easiest way to get the right size is to call or WhatsApp SafeStorage Dubai — our consultants will ask about what you need to store and recommend the exact size. Getting the size right first time avoids paying for unused space or being forced to upgrade.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>Does SafeStorage Dubai offer packing services?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Yes. SafeStorage Dubai offers both a DIY packing option and a full professional packing service. For the DIY option, we provide high-quality packing materials including double-walled cardboard boxes in standard sizes, bubble wrap, packing paper, stretch film, furniture covers, mattress bags, and wardrobe boxes — all available for purchase. For the full service, our trained team arrives at your property, wraps and packs every item professionally, creates an inventory list, and loads everything into our vehicle. The professional packing service is popular with customers who are busy, have fragile or high-value items, or simply prefer to leave the heavy lifting to someone else.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>Can businesses use SafeStorage Dubai for commercial storage?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Absolutely. SafeStorage Dubai serves a large number of business customers including e-commerce sellers, trading companies, law firms, marketing agencies, event management companies, medical device distributors, and retail businesses. Business storage plans are available for inventory, documents, office furniture, trade show equipment, seasonal stock, and archival records. Our facility meets UAE document storage compliance requirements for the mandatory 5-year document retention period. Businesses benefit from flexible unit sizes that can be upgraded as inventory grows, without the commitment of a long warehouse lease. Call +971505773388 to discuss your business storage requirements.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>Is there insurance for stored items in Dubai?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              SafeStorage Dubai includes complimentary insurance coverage up to AED 5,000 with every storage plan at no extra charge. This covers theft, fire, water damage, and structural incidents. For customers with higher-value items — art, antiques, electronics collections, or high-end furniture — we offer additional insurance coverage up to AED 100,000. Before adding items to your unit, photograph them and note their estimated value so claims can be processed quickly and accurately if ever needed. Insurance claims are handled by our customer team within 48 working hours.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>How quickly can I get storage in Dubai?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Getting started with SafeStorage Dubai is fast. For same-day pickup, book by 12 PM and our team will collect your items on the same day. For next-day or scheduled pickups, we typically have slots available within 24–48 hours. The booking process takes under two minutes online, or you can call +971505773388 and one of our consultants will handle everything for you over the phone. There is no paperwork to complete in advance — we bring the necessary documents with us on pickup day.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>What neighbourhoods in Dubai does SafeStorage serve?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              SafeStorage Dubai provides door-to-door service across all Dubai neighbourhoods. Our coverage includes Business Bay, Downtown Dubai, Dubai Marina, JBR, Jumeirah 1, 2, and 3, Palm Jumeirah, JLT, JVC, Al Barsha, Motor City, Sports City, Dubai Hills, Arabian Ranches, Mirdif, Deira, Bur Dubai, Al Quoz, Dubai Investment Park, Dubai Silicon Oasis, Nad Al Sheba, Al Warqa, International City, and Al Nahda. If you are in a neighbourhood not listed here, contact us — we cover virtually all of Dubai and the surrounding emirate areas including Sharjah and parts of Abu Dhabi for long-term storage customers.
            </p>
          </div>

          <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f3f4f6" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>How do I get my items back from storage?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Retrieving your items from SafeStorage Dubai is simple. Call, WhatsApp, or email your dedicated storage consultant with a list of what you need returned. You can request your entire unit contents, specific boxes or items, or a combination. We schedule delivery within 24–48 hours to any Dubai address. If you need partial retrieval — for example, retrieving a specific piece of furniture while leaving the rest in storage — there is no additional charge. Simply describe what you need and our team will retrieve exactly those items. There is no penalty or fee for early retrieval, and you can retrieve items as many times as you like during your storage period.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>Does SafeStorage Dubai store vehicles?</h3>
            <p style={{ color: "#374151", lineHeight: "1.75" }}>
              Yes. SafeStorage Dubai offers dedicated indoor covered vehicle storage bays for cars, SUVs, motorcycles, scooters, and classic vehicles. Vehicle storage is indoor and under 24/7 CCTV surveillance. Vehicle storage pricing starts from 12.60 AED / sqft (VAT-inclusive), so you only pay for the space your vehicle occupies. This is ideal for expats travelling abroad for extended periods, classic car owners who want their vehicle stored safely over summer, or individuals who own a second vehicle they do not use daily. All vehicle storage bays include a complimentary wash before return. Call +971505773388 for vehicle storage availability and pricing.
            </p>
          </div>

          <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://safestorage.ae/get-quote"
              style={{ display: "inline-block", background: "#f97316", color: "#fff", padding: "12px 24px", borderRadius: "8px", fontWeight: "600", textDecoration: "none", fontSize: "0.95rem" }}
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+971505773388"
              style={{ display: "inline-block", background: "#0a2463", color: "#fff", padding: "12px 24px", borderRadius: "8px", fontWeight: "600", textDecoration: "none", fontSize: "0.95rem" }}
            >
              Call +971505773388
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
