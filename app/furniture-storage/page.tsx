import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Sofa, CheckCircle2, Star, Phone, ArrowRight, Shield, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Furniture Storage Dubai — Door-to-door Pickup",
  description: "Furniture storage in Dubai with door-to-door pickup and professional wrapping. Safe storage for sofas, beds, wardrobes, dining sets and full apartment contents. From 12.60 AED / sqft. Call +971505773388.",
  keywords: "furniture storage dubai, sofa storage dubai, bed storage dubai, wardrobe storage dubai, dining table storage dubai, moving furniture storage dubai, apartment furniture storage dubai, villa furniture storage",
  openGraph: {
    title: "Furniture Storage Dubai — Secure Storage with Door-to-door Pickup | SafeStorage",
    description: "Store your furniture safely in Dubai. Secure covered units, professional wrapping, door-to-door pickup, flexible monthly contracts. From 12.60 AED / sqft for single items to full villa contents.",
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
    description: "Safe, secure furniture storage in Dubai with door-to-door pickup and professional wrapping. Store sofas, beds, wardrobes and full apartment or villa contents. Flexible monthly contracts.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/furniture-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Furniture Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/furniture-storage#webpage",
    name: "Furniture Storage Dubai — Safe Secure Storage",
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
  { name: "Kitchen Appliances", desc: "Fridges, washing machines, dishwashers, ovens. Drained, cleaned and stored upright in a clean, secure indoor unit to prevent seal damage.", icon: "🍳" },
  { name: "Office Furniture", desc: "Desks, executive chairs, filing cabinets, boardroom tables. Stored with full inventory for easy selection when needed.", icon: "🖥️" },
  { name: "Outdoor Furniture", desc: "Garden sets, patio furniture, sun loungers. Cleaned and stored indoors — out of the direct sun and rain that cause UV fade and material breakdown.", icon: "☀️" },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Furniture Storage Dubai — Safe, Secure and Professionally Wrapped</h1>
              <p className="text-xl text-white/85 mb-8">Moving, renovating, or between leases? SafeStorage Dubai provides professional furniture storage with door-to-door pickup across Dubai. Clean, covered indoor units and professional wrapping protect your furniture from dust, damage, and the elements — from a single sofa to a full villa's contents.</p>
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
                { stat: "Door-to-Door", label: "Pickup across Dubai" },
                { stat: "Covered", label: "Clean indoor units" },
                { stat: "12.60 AED", label: "Per sqft from" },
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
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Why Furniture Needs Professional Storage & Wrapping</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                {[
                  { title: "Scratches, dents, and scuffs", desc: "Furniture handled and stored without proper protection gets scratched, dented, and scuffed. We wrap every piece in furniture covers, foam padding, and corner protectors before it goes into storage." },
                  { title: "Dust and sun exposure", desc: "Left in the open or in a dusty space, upholstery and timber collect dust and fade in direct sun. Our clean, covered indoor units keep furniture dust-protected and out of the sunlight." },
                  { title: "Crushing and poor stacking", desc: "Sofas sag and mattresses deform when items are piled on top of them. We store pieces correctly — sofas on padded risers, mattresses wrapped and upright — so nothing is crushed." },
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
                    { icon: Package, title: "Professional Wrapping", desc: "Furniture covers, stretch wrap, corner protectors and foam padding included at no extra charge on pickup." },
                    { icon: Shield, title: "Covered Indoor Storage", desc: "All furniture stored under cover indoors — never exposed to rain, direct sun or outdoor elements that cause fading and material breakdown." },
                    { icon: Sofa, title: "Correct Positioning", desc: "Sofas on padded risers, mattresses wrapped and upright, tables padded and never overloaded — so nothing is crushed, dented, or deformed in storage." },
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
                { scenario: "Apartment Renovation", detail: "Renovating a 1-2BR apartment takes 4-12 weeks in Dubai. Storing furniture keeps it safe and gives contractors full access. A medium unit (from 12.60 AED / sqft) handles most 1-2BR contents." },
                { scenario: "Between Rental Leases", detail: "New tenancy starting 2-4 weeks after current one ends? Rather than rushing or paying overlap rent, store furniture for the gap period. No long-term contracts — pay week by week if needed." },
                { scenario: "Downsizing Apartments", detail: "Moving from a 3BR to 1BR? Don't sell good furniture under pressure. Store it while you settle in the smaller place and decide what you actually want over 2-3 months." },
                { scenario: "Moving to New Country", detail: "International shipping furniture is expensive and risky. Store in Dubai first — most expats find they need different items abroad than they expected. Keep options open for 12 months from 12.60 AED / sqft." },
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
                { q: "Can I store a fridge or washing machine with my furniture?", a: "Yes. Large appliances are stored regularly. For fridges, please defrost and clean thoroughly before pickup (at least 24 hours notice). For washing machines, drain the drum and clean the seal. Appliances are stored upright in our clean, secure indoor facility. Storing a fridge on its side can permanently damage the compressor." },
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

        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Furniture Storage — Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">What types of furniture can be stored at SafeStorage Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai stores all types of household and commercial furniture including sofas, sectional couches, beds, mattresses, wardrobes, dining sets, coffee tables, side tables, bookshelves, TV units, office desks, filing cabinets, outdoor garden furniture, and antique or designer pieces. We also store large appliances such as refrigerators, washing machines, dishwashers, and dryers. There is no restriction on furniture type or size — whether you are storing a single armchair or the complete contents of a 5-bedroom villa, we have the space and the team to handle it professionally.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How are sofas and upholstered furniture protected during storage?</h3>
                <p className="text-gray-700 leading-relaxed">All sofas and upholstered furniture are wrapped in breathable protective furniture covers that are included in the storage price at no extra charge. We use breathable covers rather than direct plastic wrapping because sealing fabric in plastic can trap moisture, leading to mould or mildew. Sofas are stored on padded risers to prevent compression of the base cushioning, and armrests are padded with foam wrap. For high-value or designer sofas, we photograph the condition on intake and provide acid-free wrapping on request. Our clean, covered indoor units keep upholstery dust-protected and out of the direct sun that fades and degrades fabric.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How is wooden furniture protected during storage?</h3>
                <p className="text-gray-700 leading-relaxed">Wooden furniture &mdash; dining tables, bed frames, cabinets, and cupboards &mdash; is protected through careful preparation, wrapping, and correct storage. We ask that wooden items are clean and dry before storage, then we wrap surfaces in furniture blankets and foam padding, fit corner protectors, and disassemble larger pieces where appropriate to reduce stress on joints. Everything is stored in a clean, covered indoor unit, kept off the floor, dust-protected, and out of the direct sun and rain. Storing wood indoors and properly wrapped protects it from the dust, sun, knocks, and moisture that damage furniture left in the open or in a poorly kept space.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Why is professional wrapping and covered storage important in Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">Furniture left in the open, in a garage, or in a dusty budget storage space takes real damage &mdash; it collects dust, fades in the direct sun, gets scratched and dented in handling, and can be knocked or crushed when items are piled together. The way to prevent this is professional wrapping and correct storage. At SafeStorage, every piece is wrapped in furniture covers, foam padding, and corner protectors, then stored in a clean, covered indoor unit, off the floor and out of the sun and rain, and positioned so nothing is crushed. This hands-on care is what protects your furniture through a single move or years of storage.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How is a dining table transported safely?</h3>
                <p className="text-gray-700 leading-relaxed">Dining tables are among the most challenging items to transport without damage due to their glass surfaces, extended legs, and susceptibility to scratching on polished or lacquered finishes. Our team wraps the table surface in foam padding and furniture blankets, and for glass-top tables, adds additional corner protection and full-surface foam wrap with stretch wrap to secure it. Table legs are individually wrapped and, if the table disassembles, we bag and label all fixings and tape them to the table itself. Marble or stone tops are given additional reinforced padding. We transport tables in an upright or flat position depending on the table design and size, using vehicle strapping to prevent any movement in transit.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I store the complete contents of a villa?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. SafeStorage regularly stores the complete contents of 3, 4, and 5-bedroom villas for customers relocating internationally, undergoing major renovations, or transitioning between properties. A typical 3-bedroom villa requires a large unit of approximately 150 sq ft, while a larger 4–5 bedroom villa may require 200 sq ft or a combination of units. We send an experienced estimator (or you can send us a video walk-through) to confirm the volume before booking, ensuring we allocate the right unit size on collection day. Our vehicles include large furniture trucks and our team are trained in efficient packing to maximise storage space without causing item damage.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How is leather furniture protected during storage?</h3>
                <p className="text-gray-700 leading-relaxed">Leather furniture requires specific care during storage because genuine leather scuffs easily and fades in direct sun. At SafeStorage, we store all leather sofas, chairs, and ottomans in our clean, covered indoor units, kept dust-protected and out of the sunlight. Before storage, we recommend customers apply a leather conditioner to provide additional protection during the storage period. Items are wrapped in breathable covers rather than plastic to allow the leather to breathe and maintain its natural moisture balance.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Are mattresses stored properly to prevent damage?</h3>
                <p className="text-gray-700 leading-relaxed">Mattresses require careful storage to prevent permanent deformation. SafeStorage stores mattresses vertically in protective mattress wrap bags, which prevents the springs or foam core from compressing under the weight of other items placed on top. Storing a mattress flat with heavy items on it — a common mistake — permanently compresses the materials and creates a sleeping surface that is uneven and unsupportive. Our protective bags are breathable, keeping moisture out while allowing air circulation to prevent mildew. For memory foam mattresses, we take additional care as these are particularly sensitive to compression. All mattresses are stored off the floor on a clean surface.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I add more furniture items after my initial storage pickup?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. You can add items to your storage unit at any time. For small additions — a few boxes or small items — you are welcome to bring them to our facility during business hours and access your unit directly. For larger additions requiring vehicle collection, contact us to arrange a secondary pickup. If your accumulated items exceed your current unit size, we can upgrade you to a larger unit and transfer existing items — we handle the logistics. There is no administrative fee for adding items, and your billing adjusts only if you require a unit size upgrade. We recommend keeping a running inventory of added items for your own records.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How do I retrieve one specific piece of furniture from storage?</h3>
                <p className="text-gray-700 leading-relaxed">Retrieving a specific item from your stored furniture is straightforward. Contact our team via WhatsApp or phone, specify the item you need (by description or using the intake inventory photos), and we will schedule delivery to your Dubai address. For urgent retrievals, same-day or next-day delivery is available for requests made before 12 PM. The delivery cost is charged separately from your monthly storage fee and depends on the item size and delivery distance. Alternatively, if you prefer to collect in person, you can visit the facility during business hours and our team will help locate your specific item within the unit.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">What is the typical cost for furniture storage in Dubai?</h3>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How long can furniture safely remain in storage?</h3>
                <p className="text-gray-700 leading-relaxed">In SafeStorage&apos;s clean, covered indoor units, furniture can remain safely stored indefinitely — there is no upper time limit. Our oldest expat customers have stored furniture for 4–5 years while living abroad, and when they collected their items, the furniture was in the same condition as when it was stored. The keys to safe long-term storage are professional wrapping, correct positioning, and keeping items dust-protected, off the floor, and out of the sun and rain. With that care in place, quality furniture will maintain its condition across months and years. For items of very high value, we recommend requesting a periodic photographic condition check, which our team can conduct on request.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Do you disassemble and reassemble furniture for storage?</h3>
                <p className="text-gray-700 leading-relaxed">Our team assists with basic disassembly of furniture that requires it for safe storage or transport — including bed frames, dining tables with removable legs, modular shelving units, and flat-pack furniture. All hardware (screws, bolts, brackets, legs) is bagged, labelled with the item name, and taped securely to the relevant piece so nothing is lost. On delivery, our team reassembles any items we disassembled. For complex built-in furniture, fitted wardrobes, or specialised pieces requiring a carpenter, we recommend having this done before our pickup as our team is not trained in complex joinery. Please mention any items requiring disassembly when booking so we can allocate the right team and time.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">What about marble or stone furniture — is it safe to store?</h3>
                <p className="text-gray-700 leading-relaxed">Marble and stone furniture is stored safely at SafeStorage with additional care given the weight and fragility of natural stone. Marble tabletops are padded with foam sheets on both surfaces and wrapped in furniture blankets to prevent scratching. Stone surfaces are never stored with hard items pressing against them, and are kept dust-protected and away from anything that could chip or stain them. We transport stone furniture with vehicle strapping to prevent shifting, and our team is briefed to handle stone items with extra care given their vulnerability to edge chipping from impact. Clients with marble furniture are encouraged to mention it at booking.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How do you keep stored furniture clean and dry?</h3>
                <p className="text-gray-700 leading-relaxed">Furniture is stored in clean, covered indoor units, which keep it out of the rain, direct sun, and blowing dust that damage items left in the open, in garages, or in shipping containers. We ask that all items are clean and dry at the point of collection, then we wrap each piece in breathable furniture covers &mdash; rather than sealing them in plastic, which can trap moisture &mdash; and keep everything off the floor on a clean surface. Wrapping items breathable, storing them indoors and dust-protected, and positioning them correctly is what keeps your furniture in good condition throughout its time in storage.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-6">About Furniture Storage at SafeStorage Dubai</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Furniture storage in Dubai calls for more care than in most other countries: left in the open, in a garage, or in a dusty budget storage space, furniture collects dust, fades in the harsh sun, and gets scratched, dented, or crushed. SafeStorage Dubai operates clean, covered indoor facilities across the city, where every customer&apos;s furniture is kept dust-protected, off the floor, and out of the direct sun and rain from the moment it arrives until the moment it leaves. Professional wrapping and correct positioning protect each piece throughout its time in storage.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Furniture protection at SafeStorage is a hands-on process. Our collection team arrives with the appropriate vehicle size, protective materials including furniture covers, foam padding, corner protectors, stretch wrap, and furniture blankets, and a trained team experienced in moving furniture without damage. Every item is photographed and noted on a condition report signed by both the customer and our team at intake — a critical step that protects both parties and provides a clear record of the item&apos;s condition on arrival. This documentation is provided to the customer and retained on file for the entire storage period.</p>
            <p className="text-gray-700 leading-relaxed mb-6">The most common furniture storage scenarios in Dubai include renovation projects (typically 1–3 months), lease gap storage between tenancies (2–6 weeks), international relocation (6 months to 3 years), and summer travel storage (3 months). In each case, the economics of professional storage compare very favourably to the alternatives: replacing damaged furniture, paying for overlap rent, or making expensive international shipping decisions under time pressure. Particularly for expats leaving Dubai, storing quality furniture rather than shipping it immediately is almost always the more financially sensible choice.</p>
            <p className="text-gray-700 leading-relaxed">SafeStorage serves all areas of Dubai including Dubai Marina, JBR, Palm Jumeirah, Downtown Dubai, Business Bay, DIFC, Jumeirah, Al Barsha, Mirdif, Deira, Bur Dubai, Dubai Silicon Oasis, JVC, JLT, and all other residential and commercial areas. Our fleet of furniture trucks covers the entire emirate, and we can typically arrange pickup within 3–5 days of booking, or sooner for urgent situations. To get a clear, itemised quote for your furniture storage, call or WhatsApp us on +971505773388 with a list of your main items and we will provide a same-day estimate.</p>
          </div>
        </section>

        <section className="py-16 bg-dubai-gold text-white text-center">
          <div className="container px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Store Your Furniture Safely — Door-to-door Pickup Included</h2>
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
