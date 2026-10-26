import type { Metadata } from "next"
import SchemaScript from "@/components/schema-script"
import MoversQuoteFlow from "@/components/movers-quote/movers-quote-flow"
import { manrope, sora } from "@/components/landing/fonts"

const URL = "https://safestorage.ae/packers-and-movers/get-quote"

export const metadata: Metadata = {
  title: { absolute: "Packers and Movers Quote in Dubai | SafeStorage Dubai" },
  description:
    "Get a free, itemised quote for packers and movers in Dubai. Tell us your move, add your items, and our team replies with a written quote.",
  alternates: { canonical: URL },
  // Not indexed while the flow is being tested; remove when it is linked from the site.
  robots: { index: false, follow: false },
  openGraph: {
    url: URL,
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
  },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    name: "Packers and Movers Quote | SafeStorage Dubai",
    url: URL,
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Packers and Movers", item: "https://safestorage.ae/moving-storage-dubai" },
      { "@type": "ListItem", position: 3, name: "Get Quote", item: URL },
    ],
  },
]

export default function MoversGetQuotePage() {
  return (
    <div className={`${sora.variable} ${manrope.variable}`}>
      <SchemaScript schema={schemas} />
      <section className="bg-[#19212e] px-4 py-10 text-white md:py-14">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffac88]">Packers &amp; movers</p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl" style={{ fontFamily: "var(--font-sora)" }}>
            Get your free moving quote <span className="text-[#ee5824]">in 4 quick steps.</span>
          </h1>
          <p className="mt-3 max-w-xl text-white/80" style={{ fontFamily: "var(--font-manrope)" }}>
            Tell us about your move and list your items. Our team replies with a written, itemised quote.
          </p>
        </div>
      </section>
      <MoversQuoteFlow />
    </div>
  )
}
