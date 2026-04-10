import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Declutter Guide Dubai 2025 — Sell, Store, Donate or Dispose | SafeStorage",
  description: "Complete Dubai declutter guide for 2025. Where to sell, donate and store items in Dubai. The step-by-step process for expats and long-term residents clearing out their homes.",
  keywords: "declutter guide dubai 2025, how to declutter dubai, sell old stuff dubai, donate items dubai, storage declutter dubai, clear out home dubai",
  openGraph: {
    title: "Declutter Guide Dubai 2025 — Complete Step-by-Step Process",
    description: "Where to sell, donate, store and dispose of items when decluttering in Dubai. Updated 2025 guide with current platforms and charities.",
    url: "https://safestorage.ae/blog/declutter-guide-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/declutter-guide-dubai" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Declutter Guide Dubai 2025 — Sell, Store, Donate or Dispose",
    description: "Comprehensive 2025 declutter guide for Dubai. Where to sell, donate, store and dispose of items when clearing out your home.",
    url: "https://safestorage.ae/blog/declutter-guide-dubai",
    datePublished: "2025-03-15",
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
      { "@type": "ListItem", position: 3, name: "Declutter Guide Dubai", item: "https://safestorage.ae/blog/declutter-guide-dubai" },
    ],
  },
]

export default function DeclutterGuideDubaiPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Declutter Guide</div>
            <h1 className="text-4xl font-bold mb-4">Declutter Guide Dubai 2025 — Sell, Store, Donate or Dispose</h1>
            <p className="text-white/80">Updated April 2025 · 10 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">Dubai is a fantastic city for consumption — malls, online shopping, and an abundance of inexpensive goods mean most Dubai residents accumulate more than they realise. Decluttering is a recurring need, whether you're spring cleaning, preparing to move, or just trying to reclaim your living space. This guide is the definitive 2025 resource for what to do with everything you no longer need.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">The Decision Framework: What to Do with Each Item</h2>
            <p className="mb-6">For every item you pick up, ask these questions in order:</p>
            <div className="space-y-4 mb-8">
              {[
                { q: "Do I use this regularly or will I soon?", action: "YES → KEEP", color: "bg-green-50 border-green-200" },
                { q: "Is it valuable but I'm unsure about disposing of it permanently?", action: "YES → STORE (don't make irreversible decisions)", color: "bg-blue-50 border-blue-200" },
                { q: "Is it in good condition and worth something to someone?", action: "YES → SELL", color: "bg-yellow-50 border-yellow-200" },
                { q: "Is it serviceable but I can't sell it quickly?", action: "YES → DONATE", color: "bg-orange-50 border-orange-200" },
                { q: "Is it broken, expired, or unsalvageable?", action: "YES → DISPOSE", color: "bg-red-50 border-red-200" },
              ].map((q) => (
                <div key={q.q} className={`flex justify-between items-center p-4 rounded-xl border-2 ${q.color}`}>
                  <span className="text-gray-700 font-medium">{q.q}</span>
                  <span className="font-bold text-dubai-navy ml-4 flex-shrink-0">{q.action}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Where to SELL Items in Dubai (2025)</h2>
            <div className="space-y-4 mb-8">
              {[
                { platform: "Dubizzle.com", best: "Furniture, electronics, appliances, vehicles", tips: "Dubai's largest classifieds. Strong for large items. Post with good photos and fair prices. Negotiate expected — list 15-20% above your floor price.", link: "dubizzle.com" },
                { platform: "Facebook Marketplace UAE", best: "Furniture, household items, children's gear", tips: "Strong expat community buyer base. Community groups (Dubai Expat Hub, various neighbourhood groups) are faster than the main Marketplace for quick sales.", link: "facebook.com/marketplace" },
                { platform: "Instagram Marketplace Accounts", best: "Fashion, accessories, designer items, home décor", tips: "Many Dubai-specific Instagram resale accounts accept listings. Search 'Dubai preloved', 'Dubai second hand' for active accounts in your category." },
                { platform: "Melltoo", best: "General household items, electronics, clothing", tips: "Dubai-built platform with good mobile app. Safe escrow payment. Slightly smaller audience than Dubizzle but legitimate buyers." },
                { platform: "Careem/Arif (WhatsApp groups)", best: "Anything, especially in your building/area", tips: "Building WhatsApp groups and area Facebook groups often have 'selling/buying' threads. Hyperlocal — buyer comes to you." },
              ].map((p) => (
                <div key={p.platform} className="p-5 border border-gray-200 rounded-xl bg-slate-50">
                  <h3 className="font-bold text-dubai-navy">{p.platform}</h3>
                  <div className="text-sm text-dubai-gold font-medium mt-1">Best for: {p.best}</div>
                  <p className="text-sm text-gray-600 mt-2">{p.tips}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Where to DONATE in Dubai (2025)</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { org: "Dar Al Ber Society", accepts: "Clothing, furniture, household items", contact: "daralbersociety.com" },
                { org: "Al Ihsan Charity Centre", accepts: "Clothing, toys, household goods", contact: "alihsan.ae" },
                { org: "JumblAid", accepts: "Good-condition items in exchange for charity points", contact: "jumblaid.com" },
                { org: "Indian Social & Cultural Centre", accepts: "Community clothing drives, household goods", contact: "Via community Facebook groups" },
                { org: "Filipino Community Dubai", accepts: "Clothing, children's items, household goods", contact: "Via Filipino expat Facebook groups" },
                { org: "Sri Lankan Community Dubai", accepts: "Various items for community drives", contact: "Via community associations" },
              ].map((d) => (
                <div key={d.org} className="p-4 border border-gray-200 rounded-xl">
                  <div className="font-bold text-dubai-navy">{d.org}</div>
                  <div className="text-sm text-gray-600 mt-1">Accepts: {d.accepts}</div>
                  <div className="text-xs text-dubai-gold mt-1">{d.contact}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Where to DISPOSE Responsibly in Dubai</h2>
            <div className="space-y-3 mb-8">
              {[
                { type: "Electronics recycling", where: "Enviroserve Dubai — free electronic waste collection. Emirates Environmental Group collection drives." },
                { type: "Clothing textiles", where: "H&M in-store textile recycling (all Dubai branches). Ibn Battuta Mall textile bins." },
                { type: "Furniture disposal", where: "Dubai Municipality bulk waste collection — call 800900. Many removal companies also offer eco-disposal." },
                { type: "Batteries", where: "Battery recycling bins at most major malls and supermarkets." },
                { type: "General recycling", where: "Dubai's green, blue and orange bin system in residential areas. Tetra Pak recycling via major supermarkets." },
              ].map((d) => (
                <div key={d.type} className="flex gap-3 p-4 bg-slate-50 rounded-xl text-sm">
                  <CheckCircle2 className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-dubai-navy">{d.type}: </span>
                    <span className="text-gray-600">{d.where}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">The Role of Storage in Your Declutter</h2>
            <p className="mb-4">Storage is the bridge between "I don't want it cluttering my home right now" and "I'm not ready to permanently dispose of it." The most common mistakes in Dubai declutters:</p>
            <div className="space-y-3 mb-8">
              {[
                "Selling furniture under time pressure (pre-move) and later regretting at 20% of replacement cost",
                "Disposing of items you'd want if you return to Dubai or move to a larger place",
                "Giving away children's items before you're sure you don't want more children",
                "Getting rid of sentimental items during a stressful move that you'd regret losing permanently",
              ].map((mistake) => (
                <div key={mistake} className="flex gap-3 p-3 bg-orange-50 border border-orange-200 rounded-xl text-sm text-gray-700">
                  <span className="text-orange-500">⚠</span>{mistake}
                </div>
              ))}
            </div>
            <p className="mb-8">Storage solves all of these. At AED 99-499/month, storing items "for now" while you decide is almost always the financially rational choice compared to disposing and regretting.</p>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Keep Your Options Open While You Decide</h2>
              <p className="text-white/80 mb-6">Storage from AED 99/month. Free pickup. No long-term commitment. Store while you declutter — decide later without pressure.</p>
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
