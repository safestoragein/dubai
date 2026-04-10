import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Long-Term Storage Dubai for Expats — Complete Guide & Pricing | SafeStorage",
  description: "Complete guide to long-term storage in Dubai for expats. How it works, what it costs, managing your storage remotely, and when long-term storage makes sense vs other options.",
  keywords: "long term storage dubai expats, expat storage dubai long term, 6 month storage dubai, 12 month storage dubai, year long storage dubai expat, remote storage management dubai",
  openGraph: {
    title: "Long-Term Storage Dubai for Expats — Complete Guide & Pricing",
    description: "Everything Dubai expats need to know about long-term storage. Cost breakdown, remote management, and when it's the right choice.",
    url: "https://safestorage.ae/blog/long-term-storage-expats",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/long-term-storage-expats" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Long-Term Storage Dubai for Expats — Complete Guide & Pricing",
    description: "Complete guide to long-term storage in Dubai for expats. Pricing, remote management, and decision frameworks for 3-month to 2-year storage.",
    url: "https://safestorage.ae/blog/long-term-storage-expats",
    datePublished: "2025-02-15",
    dateModified: "2025-04-01",
    author: { "@type": "Organization", name: "SafeStorage Dubai", url: "https://safestorage.ae" },
    publisher: { "@id": "https://safestorage.ae/#organization" },
    isPartOf: { "@id": "https://safestorage.ae/blog#webpage" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://safestorage.ae/blog" },
      { "@type": "ListItem", position: 3, name: "Long-Term Storage Expats", item: "https://safestorage.ae/blog/long-term-storage-expats" },
    ],
  },
]

const longTermPricing = [
  { period: "3 months (summer)", small: "AED 597–897", medium: "AED 1,497–2,097", large: "AED 2,697–3,897" },
  { period: "6 months", small: "AED 1,094–1,794", medium: "AED 2,994–4,194", large: "AED 5,394–7,794" },
  { period: "12 months", small: "AED 1,988–3,388", medium: "AED 5,388–7,788", large: "AED 9,588–14,388" },
  { period: "24 months", small: "AED 3,576–6,076", medium: "AED 9,576–14,376", large: "AED 16,776–25,776" },
]

export default function LongTermStorageExpatsPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Expat Guide</div>
            <h1 className="text-4xl font-bold mb-4">Long-Term Storage Dubai for Expats — Complete Guide & Pricing</h1>
            <p className="text-white/80">Updated April 2025 · 9 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">Long-term storage — typically 3 months to 2 years — is one of the most common storage needs for Dubai's expat community. Whether you're leaving on a work secondment, returning home to decide if Dubai is permanent, or managing an international relocation with uncertain timelines, long-term storage provides flexibility that international shipping cannot.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">When Long-Term Storage Makes Sense for Dubai Expats</h2>
            <div className="space-y-4 mb-8">
              {[
                { scenario: "You're not sure you're coming back", desc: "88% of expats who leave Dubai say they'd consider returning. If there's a 30%+ chance you'll be back within 2 years, storage often beats shipping. A medium unit for 18 months costs AED 8,982 — less than one-way shipping and far less than shipping both ways." },
                { scenario: "Your new country housing is uncertain", desc: "You don't know if you'll have space for Dubai furniture abroad. Store here, ship only what you need once you've seen the new accommodation — rather than shipping everything and discovering it doesn't fit." },
                { scenario: "Job contract has a fixed term", desc: "On a 12-month secondment or project contract? Storing in Dubai costs less than shipping and returning items. Keep your Dubai belongings safe while you complete the contract, then decide." },
                { scenario: "Children's school year timing", desc: "Many expat families time moves around school years. Summer departure with September re-entry is a 3-month storage window. Academic year timing means 9-12 month storage for families that take the full school year abroad." },
              ].map((s) => (
                <div key={s.scenario} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-dubai-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dubai-navy">{s.scenario}</h3>
                    <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Long-Term Storage Cost: Full Breakdown</h2>
            <p className="mb-4">These prices reflect SafeStorage Dubai's current rates including climate control, free pickup, and security:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-dubai-navy text-white">
                    <th className="text-left p-4 rounded-tl-lg">Storage Period</th>
                    <th className="text-left p-4">Small Unit (studio)</th>
                    <th className="text-left p-4">Medium Unit (1-2BR)</th>
                    <th className="text-left p-4 rounded-tr-lg">Large Unit (3BR)</th>
                  </tr>
                </thead>
                <tbody>
                  {longTermPricing.map((row, i) => (
                    <tr key={row.period} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="p-4 font-semibold text-dubai-navy">{row.period}</td>
                      <td className="p-4 text-gray-700">{row.small}</td>
                      <td className="p-4 text-gray-700">{row.medium}</td>
                      <td className="p-4 text-gray-700">{row.large}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-8">* Rates are monthly rates multiplied by period. Long-term discounts (typically 10-15%) may apply for 6-month and 12-month commitments — ask at time of booking.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Managing Your Dubai Storage Remotely</h2>
            <p className="mb-4">Many of our long-term customers manage their storage entirely from abroad. Here's how:</p>
            <div className="space-y-4 mb-8">
              {[
                { service: "Remote authorisation", desc: "Authorise a trusted person in Dubai (friend, family, colleague) to access your storage on your behalf. They sign our access form, you approve — they can collect, add, or organise items while you're abroad." },
                { service: "Item retrieval coordination", desc: "Need a specific item shipped to you? Contact us to locate the item, we prepare it for collection by your courier. You arrange the international shipping; we provide the Dubai-side access and handover." },
                { service: "Selling items in storage", desc: "Many expats sell furniture and items in storage from abroad via Dubizzle or Facebook Marketplace. We can coordinate access visits for buyers (with your authorisation). You close the deal remotely; we facilitate the collection." },
                { service: "End-of-storage clearance", desc: "At the end of your contract, your items can be collected by an authorised person, donated to UAE charities, or auctioned through trusted partners — all without you returning to Dubai." },
              ].map((s) => (
                <div key={s.service} className="p-5 bg-slate-50 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-dubai-navy mb-2">{s.service}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Long-Term Storage vs Shipping: The Real Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-dubai-navy text-white">
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-left bg-dubai-gold">2-Year Storage (Medium Unit)</th>
                    <th className="p-4 text-left">Sea Freight to UK + Back</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Total cost", "~AED 11,976", "AED 35,000–60,000 (both ways)"],
                    ["Decision flexibility", "Full — change mind any time", "None — committed once shipped"],
                    ["Risk of damage", "Low (climate-controlled)", "Higher (transit, customs handling)"],
                    ["If you return early", "Just collect early", "Re-shipping costs again"],
                    ["Items you didn't need abroad", "Stored in Dubai", "Had to be shipped and stored abroad"],
                    ["Customs and duty", "None", "Potential duty on re-entry"],
                  ].map(([factor, storage, shipping], i) => (
                    <tr key={factor} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="p-4 font-medium text-dubai-navy">{factor}</td>
                      <td className="p-4 text-green-700 bg-green-50/30">{storage}</td>
                      <td className="p-4 text-gray-600">{shipping}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-dubai-gold/10 border border-dubai-gold/30 rounded-xl p-6 mb-8">
              <p className="text-dubai-navy font-medium">
                <strong>Bottom line:</strong> For expats with any likelihood of returning to Dubai within 2 years, or who are uncertain about their final destination, long-term storage is almost always the financially and logistically superior choice compared to international shipping.
              </p>
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Start Your Long-Term Storage Plan</h2>
              <p className="text-white/80 mb-6">Discuss your timeline with our expat storage specialists. We'll recommend the right unit, contract length, and remote management setup.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg">Get a Long-Term Quote</Button>
                </Link>
                <a href="tel:+971505773388">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy px-8 py-3">
                    <Phone className="w-5 h-5 mr-2" /> +971505773388
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
