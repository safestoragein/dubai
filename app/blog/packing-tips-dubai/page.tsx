import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Packing Tips for Storage in Dubai — Expert Guide to Pack Right | SafeStorage",
  description: "Professional packing tips for storage in Dubai. How to pack boxes, protect furniture, label correctly and maximise space. Expert advice from Dubai's storage specialists.",
  keywords: "packing tips storage dubai, how to pack for storage dubai, packing boxes storage dubai, furniture packing storage, moving storage dubai packing guide",
  openGraph: {
    title: "Packing Tips for Storage in Dubai — Pack Right the First Time",
    description: "Expert packing guide for Dubai storage. How to protect your belongings, use space efficiently, and avoid the most common packing mistakes.",
    url: "https://safestorage.ae/blog/packing-tips-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/packing-tips-dubai" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Packing Tips for Storage in Dubai — Expert Guide to Pack Right",
    description: "Professional packing tips for storage in Dubai covering boxes, furniture, electronics, labelling and space maximisation.",
    url: "https://safestorage.ae/blog/packing-tips-dubai",
    datePublished: "2025-02-01",
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
      { "@type": "ListItem", position: 3, name: "Packing Tips Dubai", item: "https://safestorage.ae/blog/packing-tips-dubai" },
    ],
  },
]

export default function PackingTipsDubaiPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Packing Guide</div>
            <h1 className="text-4xl font-bold mb-4">Packing Tips for Storage in Dubai — Pack Right the First Time</h1>
            <p className="text-white/80">Updated April 2025 · 10 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">How you pack for storage determines whether your belongings emerge in perfect condition or damaged and disorganised. After helping thousands of Dubai residents pack for storage, our team has developed a set of expert packing principles that apply specifically to Dubai's climate and storage conditions. Here's everything you need to know.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-6">The Right Materials: What You Need Before You Start</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { item: "Double-wall cardboard boxes", why: "Single-wall boxes collapse under stacking weight. Double-wall is essential for storage." },
                { item: "Bubble wrap", why: "For fragile items, electronics, and anything with glass or ceramic components." },
                { item: "Packing paper (not newspaper)", why: "Newspaper ink transfers. Use white packing paper for wrapping items directly." },
                { item: "Furniture covers / blankets", why: "Protect upholstery and wood surfaces from dust and minor abrasion." },
                { item: "Stretch wrap / stretch film", why: "Wrap around furniture, boxes of drawers, or bundle items together. Keeps dust out." },
                { item: "Strong packing tape", why: "Use 5cm wide tape, minimum 3 strips per box. Don't rely on single-strip closure." },
                { item: "Permanent markers (multiple colours)", why: "Colour-code boxes by room for easier unpacking." },
                { item: "Vacuum bags", why: "For duvets, pillows, and soft furnishings — compress to 1/4 size." },
              ].map((m) => (
                <div key={m.item} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-dubai-navy">{m.item}</div>
                    <div className="text-sm text-gray-600">{m.why}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">How to Pack Boxes for Storage</h2>
            <p className="mb-4">Poorly packed boxes are the most common cause of storage damage. Follow these rules:</p>
            <div className="space-y-4 mb-8">
              {[
                { rule: "Heavy items at the bottom, light at the top", detail: "Books, crockery, and dense items go in the bottom half. Clothes, linens, and soft items go on top. Never put a heavy item on top of something fragile." },
                { rule: "Fill every box completely", detail: "Half-empty boxes collapse when stacked. Fill gaps with crumpled packing paper, clothes, or soft items. The box should not compress when you press the top." },
                { rule: "Use uniform box sizes", detail: "Mixing box sizes makes stacking unstable. Use standard sizes (small, medium, large) that stack perfectly on each other." },
                { rule: "Keep boxes to 25kg maximum", detail: "Heavier boxes break handles, strain backs, and are difficult to move safely. Dense items (books, tiles) should always go in small boxes." },
                { rule: "Tape the base with 3 strips", detail: "One strip down the middle, then one on each side. Never rely on factory folds alone — they will fail under weight." },
              ].map((r) => (
                <div key={r.rule} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                  <div className="w-6 h-6 bg-dubai-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-dubai-navy">{r.rule}</div>
                    <div className="text-sm text-gray-600 mt-1">{r.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Packing Specific Items for Dubai Storage</h2>

            <h3 className="text-xl font-bold text-dubai-navy mt-6 mb-3">Electronics</h3>
            <ul className="space-y-2 mb-6">
              {["Use original packaging where possible — it's designed specifically for the item", "Wrap all electronics in anti-static bubble wrap (not plastic film)", "Remove batteries from remotes, cameras, and battery-powered devices", "Keep cables with their devices — tie and label cables before putting in boxes", "Never stack heavy items on top of a box containing electronics"].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-dubai-navy mt-6 mb-3">Furniture</h3>
            <ul className="space-y-2 mb-6">
              {["Disassemble bed frames, dining tables and bookcases to save space", "Bag all screws, bolts, and fittings — tape the bag to the relevant piece", "Wrap all wooden surfaces with furniture blankets to prevent scratching", "Stand mattresses vertically (not horizontal) — lying flat causes long-term sag", "Wrap fabric sofas in breathable furniture covers, not plastic film"].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-dubai-navy mt-6 mb-3">Appliances</h3>
            <ul className="space-y-2 mb-6">
              {["Defrost and clean fridges at least 24 hours before storage", "Remove and drain washing machine hoses", "Store all appliances upright — laying a fridge on its side can damage the compressor", "Tape all doors closed with masking tape (not packing tape which leaves residue)", "Clean ovens and microwaves thoroughly before storage to prevent mould and pest attraction"].map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Labelling Your Storage: Do It Right</h2>
            <p className="mb-4">Good labelling means you can find anything quickly when you return. Here's our system:</p>
            <div className="space-y-3 mb-8">
              {[
                "Label on two sides of every box (the side facing out when stacked)",
                "Write CONTENTS clearly — not 'Misc' or 'Stuff'",
                "Write ROOM in large letters at the top",
                "Mark fragile boxes as FRAGILE on all 4 sides and the top",
                "Number boxes and keep a corresponding inventory list (even a phone note works)",
                "Note which boxes you'll need FIRST ACCESS to — keep those near the front",
              ].map((item) => (
                <div key={item} className="flex gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Common Packing Mistakes in Dubai Storage</h2>
            <div className="space-y-4 mb-8">
              {[
                { mistake: "Using plastic bags for fabric and clothes", fix: "Plastic traps moisture in Dubai's humidity. Use cardboard boxes or breathable bags for all fabric items." },
                { mistake: "Packing damp or wet items", fix: "Moisture in a sealed box creates mould within weeks in Dubai. Everything must be completely dry." },
                { mistake: "Not disassembling furniture", fix: "Large furniture wastes space and is harder to move safely. Disassembly can reduce your storage unit need by one size." },
                { mistake: "Leaving food or organic matter in boxes", fix: "Even sealed food attracts pests. Remove all food items before storage." },
                { mistake: "Not creating an aisle", fix: "Pack with a 60cm aisle down the middle so you can access rear items without unpacking everything." },
              ].map((m) => (
                <div key={m.mistake} className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="font-semibold text-red-800 mb-1">❌ Mistake: {m.mistake}</div>
                  <div className="text-green-800 text-sm">✓ Fix: {m.fix}</div>
                </div>
              ))}
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center mt-10">
              <h2 className="text-2xl font-bold mb-3">Need Help Packing for Storage?</h2>
              <p className="text-white/80 mb-6">Our team provides free pickup with professional wrapping and packing assistance. We bring materials and ensure everything is stored safely.</p>
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
