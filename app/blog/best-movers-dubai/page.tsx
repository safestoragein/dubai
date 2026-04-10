import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Movers Dubai 2025 — How to Choose & What to Look For | SafeStorage",
  description: "Complete guide to choosing the best movers in Dubai for 2025. What to check, red flags to avoid, how to get accurate quotes, and what to do with belongings while moving.",
  keywords: "best movers dubai 2025, how to choose movers dubai, dubai moving company guide, professional movers dubai, moving tips dubai, trusted movers dubai",
  openGraph: {
    title: "Best Movers Dubai 2025 — Complete Hiring Guide",
    description: "How to find and vet the best movers in Dubai. What to check, red flags, and protecting your belongings during the move.",
    url: "https://safestorage.ae/blog/best-movers-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/best-movers-dubai" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Best Movers Dubai 2025 — How to Choose & What to Look For",
    description: "Complete guide to choosing professional movers in Dubai. Verification checklist, red flags, quote comparison, and protecting belongings during the move.",
    url: "https://safestorage.ae/blog/best-movers-dubai",
    datePublished: "2025-02-05",
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
      { "@type": "ListItem", position: 3, name: "Best Movers Dubai", item: "https://safestorage.ae/blog/best-movers-dubai" },
    ],
  },
]

export default function BestMoversDubaiPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Moving Guide</div>
            <h1 className="text-4xl font-bold mb-4">Best Movers Dubai 2025 — Complete Guide to Choosing & Vetting Moving Companies</h1>
            <p className="text-white/80">Updated April 2025 · 9 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">Dubai has hundreds of moving companies — from established professional firms to unlicensed one-van operations. The difference in quality is enormous, and choosing wrong can cost you thousands in damaged belongings. This guide gives you a framework for selecting movers and protecting yourself during the process.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">The 6 Things to Verify Before Hiring Any Dubai Mover</h2>
            <div className="space-y-4 mb-8">
              {[
                { check: "DED Trade License", how: "Ask for the company trade license number and verify at Dubai Economy portal (dubaieconomy.ae). No license = no accountability if things go wrong." },
                { check: "Insurance coverage", how: "Any professional mover should carry public liability insurance and goods-in-transit insurance. Ask specifically for the policy number and coverage amount." },
                { check: "Physical office address", how: "Verify a real physical address, not just a WhatsApp number. Google Street View the address. Companies with no physical office have nowhere to hold accountable." },
                { check: "Google and Trustpilot reviews", how: "Look for movers with 50+ reviews (not 5 reviews all from last month). Pay attention to how complaints are handled — every company has occasional issues; professional ones resolve them." },
                { check: "Written quote with itemised costs", how: "Any quote should be in writing with the cost breakdown — packing materials, labour, vehicle, any access charges (high floor, distance to lift, etc.)." },
                { check: "Damage claim process", how: "Ask: 'If something is damaged during the move, what is the claim process?' Professionals will have a clear answer. Vague or dismissive answers are a red flag." },
              ].map((c) => (
                <div key={c.check} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-dubai-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-dubai-navy">{c.check}</h3>
                    <p className="text-gray-600 text-sm mt-1">{c.how}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Red Flags: Warning Signs of a Bad Dubai Mover</h2>
            <div className="space-y-3 mb-8">
              {[
                "Quotes are verbal only — they won't put it in writing",
                "Significantly cheaper than every other quote (labour is labour — extreme discounts mean corners cut)",
                "Cash-only payment with no receipt",
                "No physical office or business address — just a mobile number",
                "Can't provide insurance documentation when asked",
                "Demand full payment upfront before moving day",
                "Previous reviews mention items going missing or arriving damaged with no resolution",
                "Turn up with fewer people or smaller vehicle than agreed",
              ].map((flag) => (
                <div key={flag} className="flex gap-3 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-gray-700">
                  <span className="text-red-500">✗</span>{flag}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Getting Accurate Quotes: What to Tell Movers</h2>
            <p className="mb-4">Many Dubai moving price disputes happen because the customer's description didn't match reality. Give movers the following information for an accurate quote:</p>
            <div className="space-y-2 mb-8">
              {["Current property address (building name, floor, distance to lift/stairs)", "Destination address (same details)", "Access restrictions (parking, building service lift availability, time restrictions)", "Number of rooms and inventory — be specific (3BR with 2 king beds, sofa set, dining table for 8, etc.)", "Any particularly large, heavy or fragile items (pianos, safes, large TVs)", "Packing service required or self-packed?", "Required date and time"].map((item) => (
                <div key={item} className="flex gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">What to Do When Dates Don't Align — Using Storage as a Bridge</h2>
            <p className="mb-4">A common Dubai moving problem: your current lease ends before your new place is ready. Options:</p>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                { option: "Option A: Rush the new property", problem: "Pressure to take a suboptimal property because of timeline. Common source of regret in Dubai's competitive rental market." },
                { option: "Option B: Pay overlap rent", problem: "Expensive — paying two rents simultaneously for 2-4 weeks is AED 7,000–20,000+ depending on area." },
                { option: "Option C: Storage bridge", solution: "Move belongings to SafeStorage. Stay with friends/family or short-term accommodation. Search for the right property without pressure. Move properly when ready.", highlight: true },
                { option: "Option D: Rush both sides", problem: "Rush move-out AND rush move-in leads to damaged items, poor decisions, and significant stress." },
              ].map((o) => (
                <div key={o.option} className={`p-5 rounded-xl border-2 ${o.highlight ? "bg-green-50 border-green-300" : "bg-slate-50 border-gray-200"}`}>
                  <h3 className={`font-bold mb-2 ${o.highlight ? "text-green-800" : "text-dubai-navy"}`}>{o.option}</h3>
                  <p className="text-sm text-gray-600">{o.problem || o.solution}</p>
                </div>
              ))}
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Need Storage During Your Dubai Move?</h2>
              <p className="text-white/80 mb-6">SafeStorage provides free pickup, climate-controlled storage, and flexible monthly contracts — perfect for bridging between Dubai properties.</p>
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
