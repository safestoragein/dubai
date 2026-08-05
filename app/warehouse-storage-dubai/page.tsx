import type { Metadata } from "next"
import Link from "next/link"
import SchemaScript from "@/components/schema-script"
import { Warehouse, Package, Truck, ShieldCheck, Clock, CheckCircle2, ArrowRight, Phone } from "lucide-react"

// P1 landing page from the August 2026 SEO audit.
//
// SpaceHub owns a ~4,650 searches/month "warehouse" cluster at an average
// difficulty of 15 (several terms at KD 0-7) that no SafeStorage page addressed
// at all — the site had a business-storage page and an e-commerce page, neither
// using warehouse language. This is the lowest-difficulty volume in the market.
//
// IMPORTANT — honesty constraint: SafeStorage operates ONE facility, in Dubai
// Investment Park. This page therefore targets warehouse *storage* intent
// truthfully: it is positioned as the alternative to signing a warehouse lease,
// and Al Quoz / Jebel Ali are named as areas we collect from and compare against,
// never as locations where we operate a warehouse. Claiming facilities we do not
// run is what got flagged in llms.txt and is a Google Business Profile risk.

export const metadata: Metadata = {
  title: "Warehouse Storage Dubai | Space Without a Lease",
  description:
    "Warehouse storage in Dubai from 12.65 AED/sqft, VAT incl. Pay for the space you use instead of leasing a whole warehouse — no 3-year lease, no fit-out.",
  keywords:
    "warehouse storage dubai, warehouse dubai, warehouse for rent in dubai, warehouse al quoz, warehouse in dubai, warehouse rent dubai, small warehouse for rent dubai, warehouse space dubai, business storage dubai, jebel ali warehouse",
  alternates: {
    canonical: "https://safestorage.ae/warehouse-storage-dubai",
    languages: {
      en: "https://safestorage.ae/warehouse-storage-dubai",
      "x-default": "https://safestorage.ae/warehouse-storage-dubai",
    },
  },
  openGraph: {
    title: "Warehouse Storage Dubai | Space Without a Lease",
    description:
      "Flexible warehouse storage in Dubai from 12.65 AED/sqft. Scale up or down monthly instead of committing to a commercial lease.",
    url: "https://safestorage.ae/warehouse-storage-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Warehouse storage in Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warehouse Storage Dubai | Space Without a Lease",
    description: "Pay for the warehouse space you actually use. From 12.65 AED/sqft, VAT included.",
    images: ["/twitter-image.jpg"],
  },
}

const SIZES = [
  { size: "100 sq ft", equiv: "~5 pallets", use: "Sample stock, spare parts, seasonal overflow" },
  { size: "250 sq ft", equiv: "~12 pallets", use: "Small e-commerce inventory, event equipment" },
  { size: "500 sq ft", equiv: "~25 pallets", use: "Growing online retailer, contractor materials" },
  { size: "1,000 sq ft", equiv: "~50 pallets", use: "Established distributor, full office relocation" },
  { size: "2,000+ sq ft", equiv: "100+ pallets", use: "Bulk inventory, long-term archive, fit-out storage" },
]

const COMPARISON = [
  ["Commitment", "Month to month", "1–3 year lease, typically"],
  ["Minimum size", "100 sq ft", "Usually 2,000+ sq ft"],
  ["Fit-out & racking", "Included — space is ready to use", "Your cost, plus reinstatement at exit"],
  ["Ejari / trade licence", "Not required to store with us", "Required"],
  ["DEWA, chiller, insurance", "Included in the rate", "Billed separately"],
  ["Staffing & handling", "Our team loads, stores and retrieves", "You hire or contract labour"],
  ["Scaling down", "Reduce space with 30 days' notice", "Lease-break penalty"],
  ["Transport", "Door-to-door collection and delivery included", "You arrange it"],
]

const FAQS = [
  {
    q: "Do you have a warehouse for rent in Dubai?",
    a: "Not in the traditional sense — and for most businesses that is the point. SafeStorage does not lease you an empty shell that you then have to fit out, insure, staff and commit to for years. We give you a defined, secure area inside our Dubai Investment Park warehouse, charged by the square foot you actually occupy, with racking, security, utilities and handling already included. If you genuinely need your own premises with a trade licence attached to the address, a commercial lease is the right route. If you need space for goods, this is faster, cheaper to start and far easier to exit.",
  },
  {
    q: "How much does warehouse space cost in Dubai?",
    a: "SafeStorage warehouse storage starts from 12.65 AED per sq ft per month, VAT included, and that rate covers the space, racking, security, utilities and door-to-door collection and delivery. A conventional Dubai warehouse lease is typically quoted per square foot per year, and then adds fit-out, DEWA, chiller, insurance, Ejari and labour on top — costs that usually only become visible after you have signed. For anything under roughly 2,000 sq ft, paying only for the space you use is normally the cheaper option once those extras are counted.",
  },
  {
    q: "Do you cover Al Quoz, Jebel Ali and Ras Al Khor?",
    a: "Yes — we collect from and deliver to Al Quoz, Jebel Ali, JAFZA, Ras Al Khor, Dubai South, DIP, Techno Park and every other industrial and commercial area in Dubai. Your goods are stored at our Dubai Investment Park facility, which sits directly on the Al Quoz–Jebel Ali corridor, so transit to either is short. You do not need to travel to us: our team collects from your premises and delivers back on request.",
  },
  {
    q: "Can I get a small warehouse for rent in Dubai?",
    a: "Small units are exactly where conventional leasing breaks down — most Dubai landlords will not split a warehouse below about 2,000 sq ft, which is far more than a growing business needs. We start at 100 sq ft, roughly five pallets, and you can move up in increments as your stock grows. Many customers start at 100–250 sq ft and scale to 1,000 sq ft over a couple of years without ever renegotiating a lease.",
  },
  {
    q: "Can I access my stock or send items out?",
    a: "Yes. Tell us what you need and we retrieve and deliver it, typically within 24–48 hours, anywhere in Dubai. You can also visit the facility during business hours (Monday–Saturday 8 AM–8 PM, Sunday 10 AM–6 PM) to check or pick stock yourself. Business customers who need frequent movements can arrange extended and out-of-hours access.",
  },
  {
    q: "Is the warehouse secure and suitable for business inventory?",
    a: "The facility is a purpose-fitted indoor warehouse with multi-angle CCTV covering every corridor, entry point, loading area and storage zone. Access is controlled and logged, motion alerts trigger after hours, and fire detection and suppression are in place. Goods are stored on raised platforms away from external walls, and everything is inventoried and signed for at intake so there is a documented record of your stock.",
  },
  {
    q: "Do I need a trade licence to store business goods?",
    a: "No trade licence or Ejari is required to store goods with us — that is one of the main reasons new and overseas businesses use this route while their Dubai entity is still being set up. We do need to know what you are storing, since prohibited goods such as hazardous materials, flammables, perishables and unlicensed items cannot be accepted. VAT invoices are issued for every payment so the cost is fully claimable as a business expense.",
  },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/warehouse-storage-dubai#webpage",
    name: "Warehouse Storage Dubai | Space Without a Lease",
    description:
      "Flexible warehouse storage in Dubai from 12.65 AED/sqft, VAT-inclusive. Pay for the space you use instead of leasing a whole warehouse.",
    url: "https://safestorage.ae/warehouse-storage-dubai",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    about: { "@id": "https://safestorage.ae/#business" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Warehouse Storage Dubai",
    description:
      "Flexible warehouse storage space in Dubai charged per square foot, including racking, security, utilities and door-to-door collection and delivery.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    areaServed: { "@type": "City", name: "Dubai" },
    url: "https://safestorage.ae/warehouse-storage-dubai",
    serviceType: "Warehouse Storage",
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      price: "12.65",
      description: "From 12.65 AED per sq ft per month, VAT-inclusive",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Warehouse Storage Dubai",
        item: "https://safestorage.ae/warehouse-storage-dubai",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

export default function WarehouseStorageDubaiPage() {
  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] py-16 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1 rounded-full text-sm mb-5">
            <Warehouse className="h-4 w-4" />
            Warehouse storage in Dubai
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            Warehouse Storage in Dubai — Space Without the Lease
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Pay for the square footage you actually use, from 100 sq ft upward, at
            12.65 AED per sq ft per month including VAT. Racking, security, utilities
            and door-to-door collection are included. No 3-year lease, no fit-out,
            no Ejari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+971505773388"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2463] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-4 w-4" />
              +971 50 577 3388
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">
            Looking for a Warehouse for Rent in Dubai?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Most businesses searching for a warehouse in Dubai do not actually want a
            warehouse. They want somewhere secure to put stock, equipment, archives or
            fit-out materials — and a commercial lease is simply the only option they
            know about. It is also the most expensive and least flexible one.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Renting warehouse space in Al Quoz, Jebel Ali or Ras Al Khor typically means
            a one to three year commitment, a minimum of around 2,000 sq ft, your own
            fit-out and racking, separate DEWA and chiller accounts, insurance, Ejari
            registration, and staff to load and unload. For a business storing 20 pallets,
            almost all of that is wasted spend.
          </p>
          <p className="text-lg text-gray-700">
            SafeStorage gives you a defined, secure area inside our Dubai Investment Park
            warehouse instead. You are charged per square foot per month, the space comes
            ready to use, and our team handles collection, storage and retrieval. Scale up
            as your stock grows or scale down with 30 days&apos; notice — no lease-break
            penalty either way.
          </p>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-3">Warehouse Space Sizes &amp; What Fits</h2>
          <p className="text-gray-700 mb-8">
            All sizes are charged from 12.65 AED per sq ft per month, VAT included.
            Pallet counts assume standard 1.2 × 1.0 m pallets stacked to normal height.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#0A2463] text-white text-left">
                  <th className="p-4 font-semibold">Space</th>
                  <th className="p-4 font-semibold">Roughly</th>
                  <th className="p-4 font-semibold">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map((s, i) => (
                  <tr key={s.size} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-semibold text-[#0A2463] whitespace-nowrap">{s.size}</td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">{s.equiv}</td>
                    <td className="p-4 text-gray-700">{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Not sure which you need? Tell us what you are storing and we will size it for
            you — <Link href="/storage-size-guide" className="text-[#D8315B] underline">see the full size guide</Link>.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8">
            SafeStorage vs Leasing Your Own Warehouse
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b-2 border-gray-200">
                  <th className="p-4 font-semibold text-gray-600"></th>
                  <th className="p-4 font-semibold text-[#0A2463]">SafeStorage warehouse space</th>
                  <th className="p-4 font-semibold text-gray-600">Conventional Dubai lease</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([label, ours, theirs], i) => (
                  <tr key={label} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-semibold text-[#0A2463] align-top">{label}</td>
                    <td className="p-4 text-gray-700 align-top">
                      <span className="inline-flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-1" />
                        {ours}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600 align-top">{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8 text-center">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "Door-to-door transport",
                body: "We collect from your premises anywhere in Dubai and deliver back on request — no lorry to hire, no separate transport bill.",
              },
              {
                icon: ShieldCheck,
                title: "Security & compliance",
                body: "Multi-angle CCTV, logged access control, fire detection and suppression, and a signed inventory at intake.",
              },
              {
                icon: Package,
                title: "Racking & handling",
                body: "Pallet racking, raised platforms and trained staff to load, store and retrieve. Nothing for you to buy or install.",
              },
              {
                icon: Clock,
                title: "24–48 hour retrieval",
                body: "Request full or partial retrieval and we deliver within 24–48 hours. Visit in person during business hours if you prefer.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-200">
                <Icon className="h-9 w-9 text-[#D8315B] mb-3" />
                <h3 className="font-bold text-[#0A2463] mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">
            Serving Al Quoz, Jebel Ali, DIP and Every Dubai Industrial Area
          </h2>
          <p className="text-gray-700 mb-4">
            Our facility is at Building 23, Warehouse 5, Dubai Investment Park (DIP-1) —
            positioned on the corridor between Al Quoz and Jebel Ali, with quick access to
            Sheikh Zayed Road and Emirates Road. That matters for turnaround: collections
            from Al Quoz, Jebel Ali, JAFZA, Ras Al Khor, Techno Park and Dubai South are
            short runs rather than cross-city trips.
          </p>
          <p className="text-gray-700 mb-6">
            You do not need to travel to the warehouse at all. Our team collects from your
            office, shop, showroom or existing unit and delivers back whenever you need
            stock — which is what makes this practical for businesses based anywhere in
            Dubai, not just the industrial belt.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Al Quoz 1–4",
              "Jebel Ali",
              "JAFZA",
              "Dubai Investment Park",
              "Ras Al Khor",
              "Dubai South",
              "Techno Park",
              "Al Qusais",
              "Umm Ramool",
              "Dubai Industrial City",
              "Business Bay",
              "DIFC",
            ].map((area) => (
              <span
                key={area}
                className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who uses it */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8">Who Uses Warehouse Storage in Dubai</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "E-commerce and online retailers",
                body: "Hold inventory without committing to a warehouse before volumes justify one. Scale space up through peak season and back down afterwards. Pair it with our e-commerce storage service for stock you move frequently.",
                href: "/ecommerce-storage",
                link: "E-commerce storage",
              },
              {
                title: "Businesses between premises",
                body: "Office relocations, showroom refits and lease gaps. Store furniture, stock and equipment for a few weeks or a few years without signing anything long-term.",
                href: "/business-storage",
                link: "Business storage",
              },
              {
                title: "Contractors and fit-out firms",
                body: "Materials, tools and site equipment between projects, collected and delivered to site when the next job starts.",
                href: "/get-quote",
                link: "Get a quote",
              },
              {
                title: "Companies with archives",
                body: "Paper records that must be retained for compliance but do not belong in expensive office space. Catalogued and retrievable on request.",
                href: "/document-storage",
                link: "Document storage",
              },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#0A2463] mb-2">{c.title}</h3>
                <p className="text-gray-700 mb-3">{c.body}</p>
                <Link href={c.href} className="text-[#D8315B] font-semibold inline-flex items-center hover:underline">
                  {c.link}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8">
            Warehouse Storage Dubai — Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {FAQS.map((f) => (
              <div key={f.q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#0A2463] mb-2">{f.q}</h3>
                <p className="text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A2463] text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Tell Us What You Need to Store</h2>
          <p className="text-white/85 mb-8">
            Send us a rough idea of your stock — pallets, boxes, equipment — and we will
            size the space and quote a VAT-inclusive monthly rate. No obligation, and the
            quote holds for 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/971505773388"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
