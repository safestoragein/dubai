import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Self Storage Guide Dubai 2025 — Everything You Need to Know | SafeStorage",
  description: "The definitive guide to self storage in Dubai. How it works, what it costs, how to choose, what to look for, and mistakes to avoid. Updated 2025.",
  keywords: "self storage guide dubai, how does self storage work dubai, self storage dubai 2025, choosing storage unit dubai, self storage tips dubai beginners guide",
  openGraph: {
    title: "Complete Self Storage Guide Dubai 2025 — Everything You Need to Know",
    description: "Definitive beginner's guide to self storage in Dubai. Process, costs, tips, and what to look for. Updated 2025.",
    url: "https://safestorage.ae/blog/self-storage-guide-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/self-storage-guide-dubai" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Complete Self Storage Guide Dubai 2025 — Everything You Need to Know",
    description: "Definitive guide to self storage in Dubai covering how it works, pricing, what to look for, and practical tips for first-time storers.",
    url: "https://safestorage.ae/blog/self-storage-guide-dubai",
    datePublished: "2025-01-05",
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
      { "@type": "ListItem", position: 3, name: "Self Storage Guide Dubai", item: "https://safestorage.ae/blog/self-storage-guide-dubai" },
    ],
  },
]

export default function SelfStorageGuideDubaiPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Complete Guide</div>
            <h1 className="text-4xl font-bold mb-4">Complete Self Storage Guide Dubai 2025 — Everything You Need to Know</h1>
            <p className="text-white/80">Updated April 2025 · 12 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">Self storage in Dubai has grown dramatically over the past decade. With Dubai's transient expat population, frequent apartment moves, and space-conscious city living, storage has become a mainstream service used by hundreds of thousands of Dubai residents and businesses. If you've never used self storage before — or you want to make sure you're doing it right — this guide covers everything.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">How Self Storage Works in Dubai</h2>
            <p className="mb-4">Self storage is simple: you rent a secure, private unit in a dedicated facility and store your belongings there for as long as you need. The process:</p>
            <div className="space-y-4 mb-8">
              {[
                { step: "1. Get a quote", desc: "Contact a storage facility, describe what you need to store, and get a price for the right unit size." },
                { step: "2. Book your unit", desc: "Confirm your booking with ID and payment. Units are available monthly — no annual commitment required at good facilities." },
                { step: "3. Deliver your items", desc: "Either bring items yourself or use a facility that offers pickup (SafeStorage Dubai offers door-to-door pickup)." },
                { step: "4. Access as needed", desc: "Visit your unit during access hours whenever you need to add, remove, or reorganise items." },
                { step: "5. End when ready", desc: "Give notice (typically 30 days) when you're done. Collect your items and close your contract." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-8 h-8 bg-dubai-gold rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{s.step.split(".")[0]}</div>
                  <div>
                    <div className="font-semibold text-dubai-navy">{s.step}</div>
                    <div className="text-sm text-gray-600 mt-1">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Choosing the Right Storage Unit in Dubai</h2>
            <h3 className="text-xl font-bold text-dubai-navy mt-6 mb-3">The 5 Things to Check Before Booking</h3>
            <div className="space-y-3 mb-8">
              {[
                { check: "Is the facility secure and monitored?", what: "Ask about security: look for 24/7 CCTV monitoring, controlled access, and individually secured units. Your belongings should be protected around the clock." },
                { check: "Is pickup included?", what: "Good facilities offer door-to-door pickup. If you're quoted a pickup charge of AED 200-500, factor this into your total cost comparison." },
                { check: "What is the minimum contract length?", what: "1 month is standard. Some facilities require 3-month minimums. Know what you're committing to." },
                { check: "What are the access hours?", what: "8 AM–8 PM, 7 days/week is standard good access. 24/7 access is available at premium facilities. Restricted weekday-only access is too limiting for most users." },
              ].map((c) => (
                <div key={c.check} className="flex gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-dubai-navy">{c.check}</div>
                    <div className="text-sm text-gray-600 mt-1">{c.what}</div>
                  </div>
                </div>
              ))}
            </div>


            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Common Self Storage Mistakes in Dubai</h2>
            <div className="space-y-4 mb-8">
              {[
                "Booking too small a unit and having to move everything to a larger unit mid-storage",
                "Not labelling boxes, then spending hours searching for one specific item",
                "Not checking the access hours before booking — discovering it's weekday-only too late",
                "Storing prohibited items like food, flammables, or perishables",
                "Not photographing or documenting high-value items before storage",
              ].map((mistake) => (
                <div key={mistake} className="flex gap-3 p-4 bg-red-50 border border-red-100 rounded-xl text-sm">
                  <span className="text-red-500 flex-shrink-0">✗</span>
                  <span className="text-gray-700">{mistake}</span>
                </div>
              ))}
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
              <p className="text-white/80 mb-6">Get a free storage quote from SafeStorage Dubai. Secure, door-to-door pickup, no hidden fees — 7 days a week.</p>
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
