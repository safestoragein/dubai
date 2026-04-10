import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "How Much Does Self Storage Cost in Dubai? 2025 Price Guide | SafeStorage",
  description: "Complete 2025 guide to self storage costs in Dubai. Unit prices by size, what's included, hidden fees to watch for, and how to get the best deal. From AED 99/month.",
  keywords: "self storage cost dubai, storage unit price dubai, how much is storage dubai, storage unit cost per month dubai, cheap storage dubai, affordable storage dubai 2025",
  openGraph: {
    title: "How Much Does Self Storage Cost in Dubai? 2025 Price Guide",
    description: "Detailed breakdown of self storage costs in Dubai by unit size. AED 99 to AED 2,500/month depending on size. What's included and what to avoid.",
    url: "https://safestorage.ae/blog/self-storage-cost-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/self-storage-cost-dubai" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How Much Does Self Storage Cost in Dubai? 2025 Price Guide",
    description: "Complete breakdown of self storage costs in Dubai by unit size, with hidden fees to watch for and tips to get the best price.",
    url: "https://safestorage.ae/blog/self-storage-cost-dubai",
    datePublished: "2025-01-15",
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
      { "@type": "ListItem", position: 3, name: "Self Storage Cost Dubai", item: "https://safestorage.ae/blog/self-storage-cost-dubai" },
    ],
  },
]

const prices = [
  { size: "Locker / Mini (25 sq ft)", monthlyRange: "AED 99–150", bestFor: "Boxes, suitcases, seasonal items" },
  { size: "Small Unit (50 sq ft)", monthlyRange: "AED 199–299", bestFor: "Studio apartment contents" },
  { size: "Medium Unit (100 sq ft)", monthlyRange: "AED 499–699", bestFor: "1-2 bedroom apartment" },
  { size: "Large Unit (150 sq ft)", monthlyRange: "AED 899–1,299", bestFor: "3 bedroom apartment / small villa" },
  { size: "Extra Large (200+ sq ft)", monthlyRange: "AED 1,499–2,499", bestFor: "4-5 bedroom villa / business" },
  { size: "Vehicle Bay (car)", monthlyRange: "AED 899–1,499", bestFor: "Cars, SUVs, classic vehicles" },
  { size: "Vehicle Bay (motorbike)", monthlyRange: "AED 399–599", bestFor: "Motorcycles, scooters" },
]

export default function SelfStorageCostDubaiPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Storage Costs</div>
            <h1 className="text-4xl font-bold mb-4">How Much Does Self Storage Cost in Dubai? 2025 Price Guide</h1>
            <p className="text-white/80">Updated April 2025 · 8 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">Storage costs in Dubai range from <strong>AED 99/month</strong> for a small locker to <strong>AED 2,500/month</strong> for a large unit suitable for a full villa. The exact price depends on unit size, whether it's climate-controlled, and what's included in the monthly rate. This guide breaks down exactly what you should expect to pay — and the hidden fees some facilities charge that you should watch out for.</p>

              <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-6">2025 Self Storage Price Guide by Unit Size</h2>
              <p className="mb-6">These are current market prices for Dubai self storage as of 2025. Climate-controlled units are now standard with reputable providers — prices below include climate control:</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-dubai-navy text-white">
                      <th className="text-left p-4">Unit Size</th>
                      <th className="text-left p-4">Monthly Range</th>
                      <th className="text-left p-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((row, i) => (
                      <tr key={row.size} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="p-4 font-medium text-dubai-navy">{row.size}</td>
                        <td className="p-4 font-bold text-dubai-gold">{row.monthlyRange}</td>
                        <td className="p-4 text-gray-600">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">What's Typically Included in Dubai Storage Prices</h2>
              <p className="mb-4">With established Dubai storage providers, these are typically included in the monthly rate:</p>
              <ul className="space-y-2 mb-8">
                {["Climate-controlled temperature (18-24°C)", "24/7 CCTV security monitoring", "Basic contents insurance", "Free access during business hours", "One padlock per unit (some providers)"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Hidden Fees to Watch Out For</h2>
              <p className="mb-4">Not all Dubai storage facilities are transparent about costs. Before signing, ask specifically about:</p>
              <div className="space-y-4 mb-8">
                {[
                  { fee: "Admin / registration fee", detail: "Some facilities charge AED 100–300 one-time registration fee on top of the first month. Ask if this applies." },
                  { fee: "Pickup / delivery charges", detail: "Free pickup is offered by premium providers like SafeStorage. Others charge AED 200–500 per pickup trip — significant for large moves." },
                  { fee: "Insurance premium", detail: "Basic insurance is usually included but some providers charge separately. Confirm coverage limits (typically AED 5,000 per unit standard)." },
                  { fee: "Late payment penalty", detail: "Can be 5-15% of monthly rent. Know the late payment window before committing — some facilities lock access the day after payment is due." },
                  { fee: "Move-out notice period", detail: "Most require 30 days written notice. Not knowing this means paying an extra month when you want to leave." },
                ].map((f) => (
                  <div key={f.fee} className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="text-red-500 font-bold flex-shrink-0">⚠</div>
                    <div>
                      <div className="font-semibold text-red-800">{f.fee}</div>
                      <div className="text-red-700 text-sm">{f.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">How to Get the Best Storage Price in Dubai</h2>
              <div className="space-y-4 mb-8">
                {[
                  { tip: "Choose the right size first", desc: "Paying for a large unit when a medium would suffice is the most common waste. Use our size guide or call a consultant to size correctly before booking." },
                  { tip: "Ask about longer-term discounts", desc: "Most Dubai storage providers offer 10-20% discount for 3-month, 6-month or annual payments upfront. If you know you'll store for 6+ months, ask about discounted rates." },
                  { tip: "Choose providers with free pickup", desc: "Free pickup saves AED 200-500 on initial move. SafeStorage Dubai offers free pickup across all Dubai areas — factor this into your total cost comparison." },
                  { tip: "Compare total cost not headline rate", desc: "A facility advertising AED 350/month may end up costing AED 500/month after admin fees, insurance add-ons, and paid pickup. Always ask for an all-in monthly total." },
                ].map((t) => (
                  <div key={t.tip} className="flex gap-3 p-4 bg-slate-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-dubai-navy">{t.tip}</div>
                      <div className="text-gray-600 text-sm mt-1">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Is Self Storage Worth the Cost in Dubai?</h2>
              <p className="mb-4">In most common Dubai scenarios, storage saves money compared to alternatives:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { vs: "vs Keeping apartment for renovation", storage: "AED 499/mo (medium unit)", alternative: "AED 3,500–8,000/mo (keeping flat during renovation)" },
                  { vs: "vs International shipping", storage: "AED 499/mo (medium unit, 12 months)", alternative: "AED 12,000–25,000 (one-way sea freight to UK)" },
                  { vs: "vs Replacing items abroad", storage: "AED 600/mo (full year)", alternative: "AED 15,000–30,000 (refurnishing abroad)" },
                  { vs: "vs Warehouse rental for business", storage: "AED 1,500/mo (large unit)", alternative: "AED 5,000–15,000/mo (min. 2-3 year warehouse lease)" },
                ].map((c) => (
                  <div key={c.vs} className="p-4 border border-gray-200 rounded-xl">
                    <div className="font-semibold text-dubai-navy text-sm mb-2">{c.vs}</div>
                    <div className="text-green-700 text-sm">Storage: <strong>{c.storage}</strong></div>
                    <div className="text-red-600 text-sm">Alternative: <strong>{c.alternative}</strong></div>
                  </div>
                ))}
              </div>

              <div className="bg-dubai-gold/10 border border-dubai-gold/30 rounded-xl p-6 my-8">
                <h3 className="font-bold text-dubai-navy mb-2">SafeStorage Dubai Pricing</h3>
                <p>At SafeStorage Dubai, our monthly rates start from AED 99 for mini units and include free pickup across Dubai, climate control, 24/7 security, and basic insurance — with no hidden admin fees. Get a personalised quote for your specific needs.</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-dubai-navy text-white rounded-2xl text-center">
              <h2 className="text-2xl font-bold mb-3">Get an Exact Price for Your Storage</h2>
              <p className="text-white/80 mb-6">Tell us what you need to store and we'll give you an accurate all-in monthly price. No hidden fees, no surprises.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg">Get a Free Quote</Button>
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
