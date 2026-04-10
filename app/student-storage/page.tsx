import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { GraduationCap, CheckCircle2, Star, Phone, ArrowRight, Package, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Storage Dubai — Affordable Storage Between Semesters | SafeStorage",
  description: "Cheap, safe student storage in Dubai. Store your belongings between semesters, summer holidays or graduation. From AED 99/month. Free pickup near major universities. Call +971505773388.",
  keywords: "student storage dubai, university storage dubai, semester storage dubai, summer student storage dubai, student accommodation storage, UAEU student storage, AUD student storage",
  openGraph: {
    title: "Student Storage Dubai — Affordable Between-Semester Storage | SafeStorage",
    description: "Student storage in Dubai from AED 99/month. Store between semesters, summer breaks or after graduation. Free pickup near major universities.",
    url: "https://safestorage.ae/student-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/student-storage" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Student Storage Dubai",
    description: "Affordable student storage in Dubai for semester breaks, summer holidays and graduation. Small units from AED 99/month with free pickup near universities.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/student-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Student Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/student-storage#webpage",
    name: "Student Storage Dubai — Affordable Between-Semester Storage",
    url: "https://safestorage.ae/student-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Student Storage Dubai", item: "https://safestorage.ae/student-storage" },
    ],
  },
]

export default function StudentStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" /> Student Storage Specialists
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Storage Dubai — Affordable Storage Between Semesters</h1>
              <p className="text-xl text-white/85 mb-8">Going home for summer or between semesters in Dubai? Don't haul everything back and forth or pay for an empty room. SafeStorage Dubai offers affordable student storage from AED 99/month — free pickup near your university, flexible contracts, and easy access when you return.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Student Quote</Button>
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
                { stat: "AED 99", label: "Starting price/month" },
                { stat: "1 Month", label: "Minimum contract" },
                { stat: "Free", label: "Pickup near universities" },
                { stat: "7 Days", label: "Access per week" },
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
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">When Students Need Storage in Dubai</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Summer Holiday Break", desc: "Most Dubai universities have 3-month summer breaks (May-August). Rather than paying for accommodation through summer or hauling everything home, store for 3 months from AED 297 total.", icon: "☀️" },
                { title: "Between Academic Years", desc: "Lease ended, next-year housing not confirmed? Bridge the gap with 4-8 weeks of storage. Don't rush into a bad housing decision — store comfortably while you search.", icon: "📅" },
                { title: "Studying Abroad Semester", desc: "Heading abroad for an exchange semester? Store your Dubai room contents safely. Return to the same items — avoid the cost and hassle of replacing everything on return.", icon: "✈️" },
                { title: "Graduation Transition", desc: "Graduated but not leaving Dubai immediately? Job search, visa transition, staying with friends? Don't take all your belongings between temporary accommodation. Store until settled.", icon: "🎓" },
                { title: "Downsizing Room", desc: "Sharing from studio to shared villa or moving to smaller room? Can't fit everything? Store the overflow without disposing of items you'll want later.", icon: "📦" },
                { title: "Internship in Another Emirate", desc: "Internship in Abu Dhabi or Sharjah while enrolled in Dubai? Don't keep paying Dubai accommodation. Store everything and relocate cost-effectively.", icon: "💼" },
              ].map((s) => (
                <div key={s.title} className="bg-slate-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-dubai-navy mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-4">Student Storage Pricing</h2>
            <p className="text-center text-gray-600 mb-10">Transparent, all-inclusive monthly pricing. No hidden fees, no admin charges, no long-term commitment.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Locker / Mini", size: "25 sq ft", price: "AED 99–150/mo", bestFor: "Boxes, suitcases, small items", fits: ["10–15 boxes", "Suitcases and bags", "Books and documents", "Sports equipment", "Bedding and soft items"], badge: "bg-blue-100 text-blue-700" },
                { name: "Small Unit", size: "50 sq ft", price: "AED 199–299/mo", bestFor: "Full student room contents", fits: ["Single bed + mattress", "Desk and chair", "Wardrobe", "20–30 boxes", "TV and small electronics", "Mini fridge"], badge: "bg-green-100 text-green-700 ring-2 ring-green-500" },
                { name: "Medium Unit", size: "100 sq ft", price: "AED 499–699/mo", bestFor: "Large room or shared apartment", fits: ["Full 1-2 room contents", "Full furniture set", "Appliances", "30–50 boxes", "Bikes and sports gear", "Multiple wardrobes"], badge: "bg-yellow-100 text-yellow-700" },
              ].map((p) => (
                <div key={p.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${p.badge}`}>{p.price}</div>
                  <h3 className="text-xl font-bold text-dubai-navy mb-1">{p.name}</h3>
                  <div className="text-sm text-gray-500 mb-2">{p.size}</div>
                  <div className="text-sm font-medium text-dubai-gold mb-4">Best for: {p.bestFor}</div>
                  <ul className="space-y-1.5">
                    {p.fits.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">* Small unit is our most popular choice for a full student room. Not sure? Call us and we'll advise based on your inventory.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">What Students Typically Store</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-dubai-navy mb-4">Common Student Items</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Laptop and chargers", "Books and textbooks", "Clothes and shoes", "Bedding and pillows", "Small TV or monitor", "Kitchen appliances", "Mini fridge", "Study desk and chair", "Wardrobe", "Sports equipment", "Musical instruments", "Art supplies and portfolios", "Bike or scooter", "Suitcases and bags"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-dubai-navy/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-4">Packing Tips for Students</h3>
                <div className="space-y-4">
                  {[
                    { tip: "Label boxes by category", desc: "Use clear labels: BOOKS, CLOTHES, KITCHEN, ELECTRONICS. When you return, you can pick exactly what you need without unpacking everything." },
                    { tip: "Take photos before packing", desc: "Quick photos of electronics with serial numbers supports insurance claims and helps you confirm everything's accounted for on return." },
                    { tip: "Use vacuum bags for bedding", desc: "Duvets and pillows take up huge amounts of space. Vacuum bags compress them to 1/4 the size — worth the AED 20 investment from any supermarket." },
                    { tip: "Put fragile items in clothes", desc: "Use clothes and soft items as padding around breakable items. Reduces the number of boxes needed and protects fragile contents." },
                  ].map((t) => (
                    <div key={t.tip} className="flex gap-3">
                      <Package className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-dubai-navy text-sm">{t.tip}</div>
                        <div className="text-gray-600 text-sm">{t.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Student Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Yasmin K.", location: "DIFC", university: "American University in Dubai", text: "Going back to Lebanon for 3 months summer. My Dubai room was AED 2,500/mo — I wasn't going to keep paying it empty. SafeStorage stored all my stuff for AED 150/mo. Saved over AED 7,000 vs keeping the room. Came back and everything was exactly as I left it.", rating: 5 },
                { name: "Siddharth P.", location: "Dubai Silicon Oasis", university: "University of Wollongong Dubai", text: "Exchange semester in Australia — stored all my Dubai apartment contents with SafeStorage. The pickup was super easy, they came to my building. When I came back 5 months later, collected everything in one go. No damage, no missing items. Exactly what I needed.", rating: 5 },
                { name: "Emma L.", location: "JVC", university: "Middlesex University Dubai", text: "Graduated in May and had a month before my visa expired. Stored everything with SafeStorage — they picked up from student residence. Had all my belongings safely stored while I sorted out my employment visa. Way less stressful than trying to move everything at once.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex mb-3">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-dubai-gold text-dubai-gold" />)}</div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div className="font-bold text-dubai-navy">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location} · {t.university}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Student Storage FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "Is there a student discount available?", a: "We offer competitive pricing for students and can provide flexible payment options. Call us at +971505773388 and mention you're a student — we'll make sure you get the best available rate for your storage period. Short-term packages for semester breaks are available at reduced monthly rates." },
                { q: "How do I book pickup from my university accommodation?", a: "Call or WhatsApp us with your address and an approximate list of what you're storing. We'll confirm a date and time, provide an estimate, and send a team to collect. We cover all Dubai areas including Dubai Silicon Oasis, DIFC, Al Barsha, JVC, Jumeirah and Sports City where most Dubai universities are located." },
                { q: "Can my parents in another country manage my storage if I need items shipped?", a: "Yes. You can authorise another person to access or make decisions about your storage remotely — just complete our authorisation form when you sign up. We can also coordinate with international shipping companies to send specific items from your unit to your location abroad." },
                { q: "What's the minimum storage period?", a: "1 month is our minimum. For students, we offer semester-based packages — typically 3 months (summer break) or 5 months (semester abroad). These packages are priced slightly lower than month-to-month rates. Contact us to discuss the package that matches your academic calendar." },
                { q: "Can I access my items during the storage period?", a: "Yes — access is included. Visit during business hours (8 AM–8 PM, 7 days a week) to add items, collect specific things, or reorganise your unit. There's no charge for access visits. Just come during business hours and present your ID and booking reference." },
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
            <h2 className="text-3xl font-bold mb-4">Store Smart This Semester Break</h2>
            <p className="text-xl text-white/90 mb-8">Don't haul everything home or pay for an empty room. Get a free student storage quote — we'll pick up from your accommodation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-white text-dubai-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold">Get a Student Quote</Button>
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
