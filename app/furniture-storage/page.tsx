import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Sofa, CheckCircle2, Star, Phone, ArrowRight, Shield, Thermometer, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Furniture Storage Dubai — Safe, Climate-Controlled Storage for All Furniture | SafeStorage",
  description: "Furniture storage in Dubai with free pickup and climate control. Safe storage for sofas, beds, wardrobes, dining sets and full apartment contents. From AED 299/month. Call +971505773388.",
  keywords: "furniture storage dubai, sofa storage dubai, bed storage dubai, wardrobe storage dubai, dining table storage dubai, moving furniture storage dubai, apartment furniture storage dubai, villa furniture storage",
  openGraph: {
    title: "Furniture Storage Dubai — Climate-Controlled with Free Pickup | SafeStorage",
    description: "Store your furniture safely in Dubai. Climate-controlled, free pickup, flexible monthly contracts. From AED 299/month for single items to full villa contents.",
    url: "https://safestorage.ae/furniture-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/furniture-storage" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Furniture Storage Dubai",
    description: "Safe, climate-controlled furniture storage in Dubai with free pickup. Store sofas, beds, wardrobes and full apartment or villa contents. Flexible monthly contracts.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/furniture-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Furniture Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/furniture-storage#webpage",
    name: "Furniture Storage Dubai — Safe Climate-Controlled Storage",
    url: "https://safestorage.ae/furniture-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Furniture Storage Dubai", item: "https://safestorage.ae/furniture-storage" },
    ],
  },
]

const furnitureTypes = [
  { name: "Sofas & Seating", desc: "L-shapes, corner sofas, 3-seaters, loveseats, armchairs. Wrapped in protective covers and stored upright or on padded risers.", icon: "🛋️" },
  { name: "Beds & Mattresses", desc: "Single, double, king, super-king and custom beds. Mattresses stored vertically in protective wrap to prevent compression and sagging.", icon: "🛏️" },
  { name: "Wardrobes & Closets", desc: "Built-in components and freestanding wardrobes. Disassembled if necessary, all hardware bagged and labelled for reassembly.", icon: "🚪" },
  { name: "Dining Sets", desc: "Tables, chairs, sideboards, and display units. Table legs wrapped, glass surfaces protected with foam and bubble wrap.", icon: "🍽️" },
  { name: "Kitchen Appliances", desc: "Fridges, washing machines, dishwashers, ovens. Drained, cleaned and stored upright in climate-controlled environment to prevent seal damage.", icon: "🍳" },
  { name: "Office Furniture", desc: "Desks, executive chairs, filing cabinets, boardroom tables. Stored with full inventory for easy selection when needed.", icon: "🖥️" },
  { name: "Outdoor Furniture", desc: "Garden sets, patio furniture, sun loungers. Cleaned and stored indoors — climate-controlled storage prevents UV fade and material breakdown.", icon: "☀️" },
  { name: "Antique & Designer Pieces", desc: "High-value or irreplaceable furniture handled with white-glove care. Acid-free wrapping, padded storage, and condition photography on intake.", icon: "🏛️" },
]

export default function FurnitureStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Sofa className="w-4 h-4" /> Furniture Storage Dubai
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Furniture Storage Dubai — Safe, Secure and Climate-Controlled</h1>
              <p className="text-xl text-white/85 mb-8">Moving, renovating, or between leases? SafeStorage Dubai provides professional furniture storage with free pickup across Dubai. Climate-controlled units protect your furniture from Dubai's extreme heat — from a single sofa to a full villa's contents.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Free Quote</Button>
                </Link>
                <a href="tel:+971505773388">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy px-8 py-4 text-lg">
                    <Phone className="w-5 h-5 mr-2" /> +971505773388
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-dubai-gold/10 border-y border-dubai-gold/20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "Free", label: "Pickup across Dubai" },
                { stat: "18–24°C", label: "Climate-controlled units" },
                { stat: "AED 299+", label: "Per month from" },
                { stat: "No", label: "Long-term contract required" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-dubai-navy">{s.stat}</div>
                  <div className="text-sm text-gray-600 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">All Types of Furniture We Store</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {furnitureTypes.map((f) => (
                <div key={f.name} className="bg-slate-50 rounded-xl p-5 border border-gray-200">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-dubai-navy mb-2">{f.name}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Why Dubai's Climate Damages Stored Furniture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                {[
                  { title: "Wood warps and cracks", desc: "Dubai's humidity swings between 5% in winter and 90%+ in coastal summer. Wood expands in humidity and contracts in dry heat, causing warping, cracking, and joint failure in all wooden furniture including dining tables, frames, and cabinets." },
                  { title: "Upholstery deteriorates", desc: "Fabric sofas and chairs absorb moisture in humid conditions, leading to mould and mildew that is nearly impossible to remove. Leather fades and cracks in extreme heat and UV exposure from warehouse roofs." },
                  { title: "Metal rusts and corrodes", desc: "Dubai's salty Gulf air accelerates corrosion on metal furniture frames, bed frames, and appliances. Even stainless steel develops surface rust in humid, uncontrolled storage environments." },
                ].map((r) => (
                  <div key={r.title} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle2 className="w-6 h-6 text-dubai-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-dubai-navy mb-1">{r.title}</h3>
                      <p className="text-gray-600 text-sm">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-dubai-navy mb-4">Our Furniture Protection Standards</h3>
                <div className="space-y-4">
                  {[
                    { icon: Thermometer, title: "Climate Control", desc: "18-24°C year-round with 45-55% humidity — ideal for all furniture types including wood, fabric, leather and metal." },
                    { icon: Package, title: "Professional Wrapping", desc: "Furniture covers, stretch wrap, corner protectors and foam padding included at no extra charge on pickup." },
                    { icon: Shield, title: "Covered Storage", desc: "All furniture stored under cover — never exposed to rain, direct sun or outdoor elements that cause fading and material breakdown." },
                  ].map((f) => (
                    <div key={f.title} className="flex gap-3">
                      <f.icon className="w-6 h-6 text-dubai-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-dubai-navy">{f.title}</div>
                        <div className="text-sm text-gray-600">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-4">Most Common Furniture Storage Scenarios in Dubai</h2>
            <p className="text-gray-600 text-center mb-12">Based on our customer patterns, these are the most frequent reasons Dubai residents store their furniture with us:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { scenario: "Apartment Renovation", detail: "Renovating a 1-2BR apartment takes 4-12 weeks in Dubai. Storing furniture keeps it safe and gives contractors full access. Medium unit (AED 499-699/mo) handles most 1-2BR contents." },
                { scenario: "Between Rental Leases", detail: "New tenancy starting 2-4 weeks after current one ends? Rather than rushing or paying overlap rent, store furniture for the gap period. No long-term contracts — pay week by week if needed." },
                { scenario: "Downsizing Apartments", detail: "Moving from a 3BR to 1BR? Don't sell good furniture under pressure. Store it while you settle in the smaller place and decide what you actually want over 2-3 months." },
                { scenario: "Moving to New Country", detail: "International shipping furniture is expensive and risky. Store in Dubai first — most expats find they need different items abroad than they expected. Keep options open for 12 months from AED 499/mo." },
                { scenario: "Summer Travel", detail: "Leaving for 2-3 months summer in home country? Put your apartment contents in storage rather than leaving valuables in an empty flat with AC off in 48°C summer heat." },
                { scenario: "Villa Clearance or Estate", detail: "Managing a villa clearance, estate contents, or inherited furniture? Secure storage gives you time to make decisions without rush. We can help coordinate access for buyers, charity collections, or shipping." },
              ].map((s) => (
                <div key={s.scenario} className="p-5 border border-gray-200 rounded-xl bg-slate-50">
                  <h3 className="font-bold text-dubai-navy mb-2">{s.scenario}</h3>
                  <p className="text-gray-600 text-sm">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">What Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Stephanie R.", location: "Dubai Marina", text: "Renovating my 2BR apartment in Dubai Marina. Getting quotes from storage companies that charged extra for pickup was ridiculous. SafeStorage came, wrapped everything professionally and I paid one clear monthly rate. When renovation was done they delivered back. Furniture was in perfect condition.", rating: 5 },
                { name: "Omar A.", location: "Jumeirah", text: "Between properties and needed somewhere for my villa furniture for 6 weeks. SafeStorage handled everything — even my large L-shape sofa that I was worried about. All came back wrapped perfectly. No damage, no hidden charges. The team knew what they were doing.", rating: 5 },
                { name: "Deepa S.", location: "Al Barsha", text: "Moving back to India and couldn't decide what to ship vs store. I stored everything with SafeStorage for a year. Some things I eventually shipped, others I sold through Dubizzle. The SafeStorage team even helped coordinate access for buyers. Saved me from making expensive shipping mistakes.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex mb-3">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-dubai-gold text-dubai-gold" />)}</div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div className="font-bold text-dubai-navy">{t.name}<span className="text-gray-400 font-normal text-sm"> · {t.location}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Furniture Storage FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "Do you disassemble furniture before storage?", a: "Our team can assist with basic disassembly — bed frames, dining tables that separate, and flat-pack furniture. We bag and label all hardware (screws, bolts, legs) and tape them to the relevant piece. For complex built-in furniture or large sectionals, we recommend disassembly before our arrival to speed up the process." },
                { q: "How do you protect upholstered furniture like sofas?", a: "All upholstered furniture is wrapped in protective furniture covers (included). Sofas are typically stored on padded risers to prevent compression of the base. We do not wrap directly in plastic film as this can cause condensation on fabric — instead, we use breathable furniture covers designed for long-term storage." },
                { q: "What happens if my furniture gets damaged during storage?", a: "All storage includes basic damage coverage. For high-value furniture (antiques, designer pieces, custom items), we recommend declaring the full replacement value so coverage applies appropriately. All furniture is photographed on intake — condition reports are signed by both parties, protecting you and us. If any damage occurs in our care, we follow a clear resolution process." },
                { q: "Can I store a fridge or washing machine with my furniture?", a: "Yes. Large appliances are stored regularly. For fridges, please defrost and clean thoroughly before pickup (at least 24 hours notice). For washing machines, drain the drum and clean the seal. Appliances are stored upright in our climate-controlled facility. Storing a fridge on its side can permanently damage the compressor." },
                { q: "What size unit do I need for a 2-bedroom apartment?", a: "A medium unit (100 sq ft / 9.3 m²) comfortably accommodates a 1-2 bedroom apartment including furniture, appliances and boxes. For a 3-bedroom apartment or large villa, a large unit (150 sq ft) is typically required. We always recommend calling us to discuss your specific inventory before booking — better to get the size right first time." },
                { q: "How much notice do you need for pickup?", a: "For a standard apartment or villa pickup, we request 3-5 days notice to allocate the right team and vehicle size. For small pickups (a few items), same-day or next-day is often possible if requested before 12 PM. For commercial or large-volume pickups, 1 week notice is preferred." },
              ].map((faq) => (
                <details key={faq.q} className="border border-gray-200 rounded-xl p-6 group">
                  <summary className="font-semibold text-dubai-navy cursor-pointer list-none flex justify-between items-center">
                    {faq.q}<ArrowRight className="w-4 h-4 text-dubai-gold transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-dubai-gold text-white text-center">
          <div className="container px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Store Your Furniture Safely — Free Pickup Included</h2>
            <p className="text-xl text-white/90 mb-8">Get a free quote for furniture storage across Dubai. Our team wraps, loads and stores — you don't lift a finger.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-white text-dubai-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold">Get a Free Quote</Button>
              </Link>
              <a href="tel:+971505773388">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-gold px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" /> +971505773388
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
