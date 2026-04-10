import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Mobile Storage Dubai — Door-to-Door Pickup & Delivery Storage | SafeStorage",
  description: "Mobile storage in Dubai — we come to you, pick up your belongings, store them safely, and deliver back when you're ready. Free pickup across Dubai. From AED 199/month.",
  keywords: "mobile storage dubai, door to door storage dubai, pickup storage dubai, collect and store dubai, storage with pickup and delivery dubai, valet storage dubai",
  openGraph: {
    title: "Mobile Storage Dubai — We Pick Up, Store & Deliver Back",
    description: "Mobile storage with free pickup across Dubai. We come to you, collect your items, store them safely, and deliver back. No hassle, no transport needed.",
    url: "https://safestorage.ae/blog/mobile-storage-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/mobile-storage-dubai" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Mobile Storage Dubai — Door-to-Door Pickup & Delivery Storage",
    description: "Complete guide to mobile and doorstep storage in Dubai. How it works, what it costs, and why it's increasingly the preferred storage model for Dubai residents.",
    url: "https://safestorage.ae/blog/mobile-storage-dubai",
    datePublished: "2025-02-25",
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
      { "@type": "ListItem", position: 3, name: "Mobile Storage Dubai", item: "https://safestorage.ae/blog/mobile-storage-dubai" },
    ],
  },
]

export default function MobileStorageDubaiPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Storage Guide</div>
            <h1 className="text-4xl font-bold mb-4">Mobile Storage Dubai — We Come to You, Pick Up, Store & Deliver Back</h1>
            <p className="text-white/80">Updated April 2025 · 7 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">Traditional self storage requires you to load everything into a van or car, drive to the facility, unload into your unit, and repeat when you want to collect. Mobile storage (also called valet storage or doorstep storage) flips this — a professional team comes to your home, wraps and loads your items, drives them to secure climate-controlled storage, and delivers back when you're ready. SafeStorage Dubai's free pickup model makes this the standard, not the premium.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">How Mobile Storage Works at SafeStorage Dubai</h2>
            <div className="grid md:grid-cols-4 gap-5 mb-8">
              {[
                { step: "01", title: "Book Online or Call", desc: "Tell us what you need to store and your address. We provide a quote and confirm a pickup date." },
                { step: "02", title: "We Come to You", desc: "Our professional team arrives at your door with all necessary wrapping materials and a suitable vehicle." },
                { step: "03", title: "We Wrap, Load & Go", desc: "Our team wraps furniture, loads everything carefully, and transports to our secure climate-controlled facility." },
                { step: "04", title: "We Deliver Back", desc: "When you're ready, we bring everything back — delivered and placed in your new location as directed." },
              ].map((s) => (
                <div key={s.step} className="text-center p-4 bg-slate-50 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-dubai-gold rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">{s.step}</div>
                  <h3 className="font-bold text-dubai-navy mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-xs">{s.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Mobile Storage vs Traditional Self Storage</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-dubai-navy text-white">
                    <th className="p-4 text-left">Aspect</th>
                    <th className="p-4 text-left bg-dubai-gold">Mobile Storage (SafeStorage)</th>
                    <th className="p-4 text-left">Traditional Self Storage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Pickup", "Free — team comes to you", "You arrange and pay for transport"],
                    ["Furniture wrapping", "Professional wrapping included", "You wrap it yourself"],
                    ["Heavy lifting", "Team does it", "You do it"],
                    ["Vehicle needed", "No", "Yes — car or rental van"],
                    ["Physical effort required", "Minimal", "Significant"],
                    ["Delivery back", "We deliver to your door", "You pick up yourself"],
                    ["Best for", "Furniture, full apartments, large items", "Boxes and small items you transport yourself"],
                  ].map(([aspect, mobile, traditional], i) => (
                    <tr key={aspect} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="p-4 font-medium text-dubai-navy">{aspect}</td>
                      <td className="p-4 text-green-700 bg-green-50/30">{mobile}</td>
                      <td className="p-4 text-gray-600">{traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Who Benefits Most from Mobile Storage in Dubai</h2>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                { who: "Families with large furniture", why: "Getting a 3-seater sofa, dining table, and beds to a self storage unit without professional help is near-impossible. Mobile storage makes it straightforward." },
                { who: "Single professionals without a vehicle", why: "Dubai has many car-free residents who rely on taxis and ride-sharing. Without a car, self storage requiring personal transport is impractical." },
                { who: "Expats in high-floor apartments", why: "High-floor Dubai apartments mean service lifts, building permits, and strict time windows. Professional teams handle all of this." },
                { who: "People with limited time", why: "A professional team picks up a full 2BR apartment in 2-4 hours. Doing it yourself across multiple car trips takes days." },
                { who: "International relocations", why: "Leaving Dubai soon and can't stay for a long self-service move? Mobile storage accommodates tight timelines." },
                { who: "Renovation storage", why: "Need to clear an apartment quickly before contractors start? One call books pickup for the entire apartment contents." },
              ].map((u) => (
                <div key={u.who} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-dubai-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dubai-navy">{u.who}</h3>
                    <p className="text-gray-600 text-sm mt-1">{u.why}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Coverage Areas: Where SafeStorage Dubai Collects</h2>
            <div className="grid md:grid-cols-3 gap-3 mb-8">
              {["Dubai Marina & JBR", "Downtown Dubai & DIFC", "Business Bay", "Jumeirah & JVC", "Dubai Silicon Oasis", "Al Barsha & Motor City", "Mirdif & Rashidiya", "Dubai Investment Park", "Palm Jumeirah", "Emirates Hills & Meadows", "Arabian Ranches", "Dubai Hills Estate"].map((area) => (
                <div key={area} className="flex gap-2 items-center p-3 bg-slate-50 rounded-lg text-sm text-gray-700 border border-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0" />{area}
                </div>
              ))}
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Book Your Free Pickup Today</h2>
              <p className="text-white/80 mb-6">Available 7 days a week across all Dubai areas. Free pickup, professional wrapping, climate-controlled storage.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg">Book Free Pickup</Button>
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
