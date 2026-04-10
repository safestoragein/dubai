import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Package, CheckCircle2, ArrowRight, Star, Phone, Home, Building2, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Storage Unit Size Guide Dubai — What Size Do I Need? | SafeStorage",
  description: "Find the perfect storage unit size in Dubai. Detailed guide covering locker to extra-large units, what fits in each size, and pricing. From AED 99/month. Call +971505773388.",
  keywords: "storage unit size guide dubai, what size storage do I need, storage unit sizes dubai, self storage sizes, storage unit calculator dubai, how big storage unit do i need",
  openGraph: {
    title: "Storage Unit Size Guide Dubai — Find Your Perfect Fit | SafeStorage",
    description: "Complete guide to storage unit sizes in Dubai. See what fits in each unit and get the right size first time. From AED 99/month.",
    url: "https://safestorage.ae/storage-size-guide",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/storage-size-guide" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/storage-size-guide#webpage",
    name: "Storage Unit Size Guide Dubai — What Size Do I Need?",
    description: "Complete guide to storage unit sizes in Dubai with pricing, what fits, and how to choose.",
    url: "https://safestorage.ae/storage-size-guide",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Storage Size Guide", item: "https://safestorage.ae/storage-size-guide" },
    ],
  },
]

const sizes = [
  {
    name: "Locker / Mini Unit",
    sqft: "25 sq ft (2.3 m²)",
    price: "AED 99–150/month",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    fits: ["10–15 medium boxes", "Small seasonal items", "Suitcases & bags", "Sports equipment", "Files & documents"],
    ideal: "Students, short-term storage, single room items, document archival",
    notFor: "Any furniture or appliances",
  },
  {
    name: "Small Unit",
    sqft: "50 sq ft (4.6 m²)",
    price: "AED 199–299/month",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
    fits: ["Studio apartment contents", "20–30 boxes", "Small sofa or 2 armchairs", "Single mattress + bed frame", "TV up to 55 inch", "Small fridge"],
    ideal: "Studio apartment, single room, renovation overflow",
    notFor: "Full 1-bedroom apartment",
  },
  {
    name: "Medium Unit",
    sqft: "100 sq ft (9.3 m²)",
    price: "AED 499–699/month",
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    fits: ["1–2 bedroom apartment contents", "Full sofa set", "Dining table + 6 chairs", "Double bed + frame", "Washing machine & fridge", "30–50 boxes", "Wardrobe"],
    ideal: "1-2 bedroom apartment renovation, between-lease storage, expat storage",
    notFor: "Full 3-bedroom villa",
  },
  {
    name: "Large Unit",
    sqft: "150 sq ft (14 m²)",
    price: "AED 899–1,299/month",
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    fits: ["3 bedroom apartment contents", "Multiple sofa sets", "King bed + furniture", "Full kitchen appliances", "50–80 boxes", "Exercise equipment", "Bicycles"],
    ideal: "3-bedroom apartment, small villa, business inventory, office relocation",
    notFor: "Full 4-5 bedroom villa",
  },
  {
    name: "Extra Large Unit",
    sqft: "200+ sq ft (18+ m²)",
    price: "AED 1,499–2,499/month",
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700",
    fits: ["4–5 bedroom villa contents", "Entire home furniture", "80–120+ boxes", "Multiple sets of everything", "Business stock & inventory", "Large appliances"],
    ideal: "Full villa, large family relocation, business warehouse alternative",
    notFor: "N/A — our largest option",
  },
  {
    name: "Vehicle Bay",
    sqft: "Dedicated bay",
    price: "Cars AED 899+, Bikes AED 399+",
    color: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    fits: ["Cars & SUVs", "Motorcycles & scooters", "Classic cars", "Boats & jet skis", "Light commercial vehicles"],
    ideal: "Long trips, summer storage, extra vehicle, expat storage",
    notFor: "Daily-use vehicles needing constant access",
  },
]

const scenarios = [
  { icon: Home, title: "Renovating your apartment", rec: "Medium unit (AED 499–699/mo)", desc: "Most 1-2BR apartments fit comfortably in a medium unit for renovation periods of 2-4 months." },
  { icon: Building2, title: "Between rental leases", rec: "Small to Medium unit", desc: "Gap between leases averages 2-4 weeks in Dubai. Don't rush into a bad apartment — bridge with storage." },
  { icon: Truck, title: "Expat leaving temporarily", rec: "Large unit (AED 899–1,299/mo)", desc: "If you're leaving Dubai for 3-12 months and plan to return, storing everything costs a fraction of shipping and back." },
  { icon: Package, title: "E-commerce inventory", rec: "Medium to Large unit", desc: "Flexible alternative to warehouse rental — no 3-year lease, scale up or down as inventory changes." },
]

export default function StorageSizeGuidePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Package className="w-4 h-4" /> Size Guide & Calculator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Storage Unit Size Guide Dubai — Find Your Perfect Fit</h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto">Stop paying for space you don't need — or cramming into a unit that's too small. Use our complete Dubai storage size guide to choose right the first time.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Size Recommendation</Button>
              </Link>
              <a href="tel:+971505773388">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" /> Call Us
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Unit Sizes */}
        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-4">All Unit Sizes at a Glance</h2>
            <p className="text-center text-gray-600 mb-12">Click any size to see what fits and whether it's right for your situation.</p>
            <div className="space-y-6">
              {sizes.map((size) => (
                <div key={size.name} className={`border-2 rounded-2xl p-6 ${size.color}`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-48 flex-shrink-0">
                      <h3 className="text-xl font-bold text-dubai-navy">{size.name}</h3>
                      <div className="text-sm text-gray-600 mt-1">{size.sqft}</div>
                      <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${size.badge}`}>{size.price}</span>
                    </div>
                    <div className="flex-1 grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">What Fits</div>
                        <ul className="space-y-1">
                          {size.fits.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Ideal For</div>
                        <p className="text-sm text-gray-700">{size.ideal}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Not Suitable For</div>
                        <p className="text-sm text-red-600">{size.notFor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Scenarios */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">What Size Do You Need? Common Dubai Scenarios</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {scenarios.map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-200 flex gap-4">
                  <s.icon className="w-10 h-10 text-dubai-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dubai-navy text-lg mb-1">{s.title}</h3>
                    <div className="text-dubai-gold font-semibold text-sm mb-2">Recommended: {s.rec}</div>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-8">Top Tips for Maximising Your Storage Unit</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              {[
                { tip: "Disassemble furniture", desc: "Bed frames, shelving units and dining tables take up dramatically less space when disassembled. A king-size bed frame can save 40% of floor space when broken down." },
                { tip: "Stack vertically", desc: "Use the full height of your unit — stack boxes from floor to ceiling with heaviest items at the bottom. Label boxes on the side for easy identification." },
                { tip: "Fill hollow spaces", desc: "Drawers, wardrobes, and suitcases can hold boxes and soft items. Use every cubic foot you're paying for." },
                { tip: "Create an access aisle", desc: "Leave a 60cm aisle down the middle so you can reach items at the back without unpacking everything." },
                { tip: "Use uniform box sizes", desc: "Standardised boxes stack more efficiently. SafeStorage Dubai sells packing boxes in standard sizes — one size stacks perfectly on another." },
                { tip: "Wrap furniture in protectors", desc: "Furniture covers and stretch wrap are available from us. Protecting items also means you can stack more confidently." },
              ].map((t) => (
                <div key={t.tip} className="flex gap-3 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-dubai-navy mb-1">{t.tip}</div>
                    <div className="text-sm">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Customers Who Got Their Size Right</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Priya S.", location: "JVC", text: "Called SafeStorage confused about what size I needed for my 2-bedroom apartment renovation. The consultant asked me exactly what I had and recommended a medium unit. Perfect fit — everything went in, nothing wasted. Saved me from paying for a large unit I didn't need.", rating: 5 },
                { name: "Tom H.", location: "Downtown Dubai", text: "I tried to save money by getting a small unit. Lesson learned — it wasn't big enough. The SafeStorage team was upfront and honest that I needed a medium unit for my 1BR apartment. They were right. Get the honest advice first.", rating: 5 },
                { name: "Lina M.", location: "Al Barsha", text: "Running an e-commerce business, I was worried about committing to a size. SafeStorage allowed me to start medium and upgrade to a large unit as my inventory grew — same facility, seamless. That flexibility is worth everything for a small business.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex mb-3">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-dubai-gold text-dubai-gold" />)}</div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div className="font-bold text-dubai-navy">{t.name} <span className="text-gray-400 font-normal text-sm">· {t.location}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dubai-navy text-white text-center">
          <div className="container px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Size You Need?</h2>
            <p className="text-xl text-white/85 mb-8">Our storage consultants will help you choose the right unit — free of charge, no obligation. We'd rather you get the right size than overpay.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Free Size Consultation</Button>
              </Link>
              <a href="tel:+971505773388">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy px-8 py-4 text-lg">
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
