import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Declutter Your Dubai Apartment — Step-by-Step Guide | SafeStorage",
  description: "Complete guide to decluttering your Dubai apartment or villa. What to keep, store, sell and donate. The Dubai declutter framework that works for expat lifestyles.",
  keywords: "how to declutter dubai apartment, declutter dubai home, marie kondo dubai, minimalism dubai apartment, clear out apartment dubai, declutter before moving dubai",
  openGraph: {
    title: "How to Declutter Your Dubai Apartment — Complete Step-by-Step Guide",
    description: "The Dubai declutter method for expat apartments. What to keep, store, sell and donate without regret.",
    url: "https://safestorage.ae/blog/declutter-dubai-apartment",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/declutter-dubai-apartment" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Declutter Your Dubai Apartment — Step-by-Step Guide",
    description: "Complete decluttering guide for Dubai apartments. The four-category system for expat households: keep, store, sell, donate.",
    url: "https://safestorage.ae/blog/declutter-dubai-apartment",
    datePublished: "2025-03-10",
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
      { "@type": "ListItem", position: 3, name: "Declutter Dubai Apartment", item: "https://safestorage.ae/blog/declutter-dubai-apartment" },
    ],
  },
]

export default function DeclutterDubaiApartmentPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Home & Lifestyle</div>
            <h1 className="text-4xl font-bold mb-4">How to Declutter Your Dubai Apartment — Step-by-Step Guide</h1>
            <p className="text-white/80">Updated April 2025 · 8 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">Dubai apartments accumulate stuff fast. Shopping malls on every corner, frequent online deliveries, and the expat tendency to over-buy "just in case" creates clutter that builds over years. Add the challenge of not knowing how long you'll stay in Dubai — and suddenly decluttering becomes a surprisingly complex decision. This guide uses a system specifically designed for Dubai's expat lifestyle.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">The Dubai Declutter Framework: Four Categories</h2>
            <p className="mb-6">Standard declutter advice ("if you haven't used it in a year, throw it out") doesn't account for Dubai's unique situation. You might have items that are valuable in Dubai but useless abroad, or items you'd regret disposing of if you return. Here's a better framework:</p>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                { cat: "KEEP (daily use)", color: "bg-green-50 border-green-300", desc: "Items you use regularly or that have immediate daily value. These stay in your apartment.", examples: ["Daily clothes and shoes", "Kitchen essentials", "Work setup and tech", "Children's current toys"] },
                { cat: "STORE (seasonal/uncertain)", color: "bg-blue-50 border-blue-300", desc: "Items you don't need daily but would want again — either here or potentially abroad. Don't make irreversible decisions under pressure.", examples: ["Seasonal clothing", "Items you'd use if you return to Dubai", "Furniture from upgraded rooms", "Sports equipment used occasionally"] },
                { cat: "SELL (value to others)", color: "bg-yellow-50 border-yellow-300", desc: "Items in good condition that others would pay for. Dubai's Dubizzle and Facebook Marketplace have strong markets for quality second-hand goods.", examples: ["Furniture you're replacing", "Electronics you've upgraded from", "Baby/children's gear they've outgrown", "Fitness equipment you no longer use"] },
                { cat: "DONATE/DISPOSE (no value)", color: "bg-red-50 border-red-300", desc: "Items with no sell value and no personal significance. Dubai has excellent charity networks.", examples: ["Worn clothing", "Expired items", "Broken items not worth repairing", "Items with no sentimental value you haven't used in 3+ years"] },
              ].map((cat) => (
                <div key={cat.cat} className={`rounded-xl p-5 border-2 ${cat.color}`}>
                  <h3 className="font-bold text-dubai-navy mb-2">{cat.cat}</h3>
                  <p className="text-sm text-gray-600 mb-3">{cat.desc}</p>
                  <div className="space-y-1">
                    {cat.examples.map((ex) => (
                      <div key={ex} className="flex gap-2 text-xs text-gray-500">
                        <span>→</span>{ex}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Room-by-Room Dubai Declutter Plan</h2>
            <div className="space-y-5 mb-8">
              {[
                { room: "Bedroom & Wardrobe", time: "2-3 hours", tips: ["Sort clothes into seasons — summer clothes stay, winter clothes are often worth storing or selling in Dubai's market", "Jewellery and accessories: keep what you wear regularly, store high-value pieces safely off-site", "Under-bed storage is prime — use it for items you store on-site seasonally"] },
                { room: "Living Room", time: "1-2 hours", tips: ["Question every decorative item — each piece should earn its space in smaller Dubai apartments", "Books: keep current reads and references, donate the rest to Dubai's many expat book exchanges", "Electronics graveyard (old remotes, cables): photograph serial numbers then responsibly dispose or donate"] },
                { room: "Kitchen", time: "2-3 hours", tips: ["Appliances: if you haven't used it in 3 months in a Dubai kitchen, you likely won't", "Storage containers: keep a set that nests properly, dispose of mismatched items", "Spices and pantry: Dubai grocery access is excellent — don't hoard pantry items"] },
                { room: "Study / Storage Room", time: "3-4 hours", tips: ["Documents: create a keep/scan/shred system. Scan important documents digitally", "Sports equipment: assess honestly — Dubai summer limits outdoor activity anyway", "Children's items: sort by age — donate outgrown items to Filipino Community or other Dubai charity networks"] },
              ].map((r) => (
                <div key={r.room} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-dubai-navy">{r.room}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">~{r.time}</span>
                  </div>
                  <ul className="space-y-2">
                    {r.tips.map((tip) => (
                      <li key={tip} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Where to Sell, Donate and Dispose in Dubai</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { title: "Sell", places: ["Dubizzle.com — best for furniture", "Facebook Marketplace UAE", "Instagram marketplace accounts", "WhatsApp expat community groups", "Melltoo app (Dubai-based)"] },
                { title: "Donate", places: ["Dar Al Ber Society", "Al Ihsan Charity Centre", "Philippines Consulate community drives", "Indian Consulate charity events", "JumblAid (Dubai charity shop)"] },
                { title: "Dispose Responsibly", places: ["Dubai Municipality recycling points", "Electronics recycling — Enviroserve Dubai", "Textile recycling — H&M drop-off points", "IKEA take-back programme", "RTA scrap collection services"] },
              ].map((cat) => (
                <div key={cat.title} className="bg-slate-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-dubai-navy mb-3">{cat.title}</h3>
                  <ul className="space-y-1">
                    {cat.places.map((place) => (
                      <li key={place} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-dubai-gold">→</span>{place}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Store What You're Not Ready to Decide On</h2>
              <p className="text-white/80 mb-6">The STORE pile is where SafeStorage comes in. Don't make permanent decisions under time pressure. Store items while you take time to decide what truly matters — from AED 99/month.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg">Get a Storage Quote</Button>
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
