import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Plane, CheckCircle2, Star, Phone, ArrowRight, Package, ShieldCheck, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Expat Leaving UAE? Storage Checklist & Solutions Dubai | SafeStorage",
  description: "Moving back home from Dubai? SafeStorage offers expat-friendly long-term storage — keep belongings safely stored while you decide what to ship. Free pickup, flexible terms. Call +971505773388.",
  keywords: "expat leaving uae storage, leaving dubai storage, storage for expats dubai, moving out dubai storage, expat storage dubai long term, leaving dubai checklist, repatriation storage dubai",
  openGraph: {
    title: "Expat Leaving UAE? Complete Storage Checklist | SafeStorage Dubai",
    description: "Trusted by 500+ expats leaving Dubai. Store belongings safely — flexible terms, free pickup. Don't ship everything when you can store affordably.",
    url: "https://safestorage.ae/expat-leaving-uae",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/expat-leaving-uae" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Expat Leaving UAE — Long-Term Storage Dubai",
    description: "Long-term storage solutions for expats leaving the UAE. Flexible month-to-month terms, free pickup, and remote management while you're abroad.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/expat-leaving-uae",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Long-Term Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/expat-leaving-uae#webpage",
    name: "Expat Leaving UAE? Storage Checklist & Solutions Dubai",
    url: "https://safestorage.ae/expat-leaving-uae",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Expat Leaving UAE", item: "https://safestorage.ae/expat-leaving-uae" },
    ],
  },
]

const checklist = [
  { category: "90 Days Before", items: ["Decide ship vs store vs sell for each category of belongings", "Get shipping quotes (sea freight FCL/LCL, air freight)", "Compare storage costs to shipping costs", "Sort through clothes, books, and accumulated items", "List items for sale on Dubizzle or Facebook Marketplace UAE"] },
  { category: "60 Days Before", items: ["Book your storage unit", "Cancel or transfer subscriptions (Etisalat, DEWA, gym, etc.)", "Notify your bank of departure — keep UAE account active for storage payments", "Arrange power of attorney for someone in Dubai if needed", "Begin selling non-essential furniture"] },
  { category: "30 Days Before", items: ["Give landlord notice (30 days standard in Dubai)", "Schedule SafeStorage pickup date", "Begin boxing and labelling items for storage", "Photograph all stored items for insurance records", "Cancel vehicle registration or arrange vehicle storage"] },
  { category: "2 Weeks Before", items: ["SafeStorage collects your items — condition report signed", "Deep clean apartment for deposit recovery", "Return keys and complete tenancy checkout", "Transfer utilities and cancel DEWA", "Confirm storage access for any authorised person in Dubai"] },
  { category: "Final Week", items: ["Final walk-through of apartment", "Collect NOC from building if required", "Settle all bills and bank accounts", "Keep storage contract and emergency contact numbers accessible", "Set up auto-payment for monthly storage fees from home country bank"] },
]

export default function ExpatLeavingUAEPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Plane className="w-4 h-4" /> Trusted by 500+ Departing Expats
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Leaving Dubai? Here's Your Complete Storage & Exit Checklist</h1>
              <p className="text-xl text-white/85 mb-8">Don't rush to sell or ship everything. Storage in Dubai costs a fraction of international shipping — and gives you the flexibility to return. Over 500 expats trust SafeStorage Dubai as their base while they settle elsewhere.</p>
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

        <section className="bg-dubai-navy/5 border-b border-gray-200 py-6">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "80,000+", label: "Expats leave UAE annually" },
                { value: "88%", label: "Of Dubai residents are expats" },
                { value: "4-7 yrs", label: "Average expat stay in Dubai" },
                { value: "AED 99", label: "Storage from /month" },
              ].map((s) => (
                <div key={s.label}><div className="text-2xl font-bold text-dubai-navy">{s.value}</div><div className="text-sm text-gray-500">{s.label}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-6">Ship vs Store vs Sell — The Real Numbers</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { title: "🚢 Ship to Europe/UK", cost: "AED 8,000–25,000", timeframe: "4–8 weeks transit", pros: ["Items arrive at destination", "One-time cost"], cons: ["Huge upfront cost", "Long wait time", "Risk of damage in transit", "No flexibility if you return"] },
                { title: "✈️ Ship by Air", cost: "AED 15–35 per kg", timeframe: "3–7 days", pros: ["Fast delivery", "Good for valuables"], cons: ["Extremely expensive for furniture", "Not viable for large volumes"] },
                { title: "🏢 Store in Dubai", cost: "AED 499–1,299/month", timeframe: "Month-to-month flexibility", pros: ["Fraction of shipping cost", "Items ready if you return", "No customs hassle", "Climate-controlled protection"], cons: ["Ongoing monthly cost"] },
              ].map((opt) => (
                <div key={opt.title} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-dubai-navy mb-2">{opt.title}</h3>
                  <div className="text-dubai-gold font-semibold mb-1">{opt.cost}</div>
                  <div className="text-sm text-gray-500 mb-4">{opt.timeframe}</div>
                  <div className="space-y-2 mb-3">
                    {opt.pros.map(p => <div key={p} className="flex gap-2 text-sm text-green-700"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />{p}</div>)}
                  </div>
                  <div className="space-y-2">
                    {opt.cons.map(c => <div key={c} className="flex gap-2 text-sm text-red-600"><ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />{c}</div>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-dubai-gold/10 border border-dubai-gold/30 rounded-xl p-6">
              <p className="text-dubai-navy font-medium text-lg">
                <strong>Real example:</strong> A 2-bedroom apartment's furniture shipped to the UK costs AED 18,000–22,000 in sea freight. The same items stored at SafeStorage Dubai cost AED 599–899/month. Even if you store for 2 full years, you're still ahead — and you have the flexibility to return or sell locally.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Your 90-Day Departure Checklist</h2>
            <div className="space-y-8">
              {checklist.map((phase) => (
                <div key={phase.category} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-dubai-gold mb-4">{phase.category}</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-8">Managing Your Storage From Abroad</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">One of the biggest concerns expats have is: "How do I manage my storage when I'm no longer in Dubai?" SafeStorage Dubai is designed for exactly this situation.</p>
                <div className="space-y-4">
                  {[
                    { icon: Globe, title: "Authorised Access", desc: "Add a trusted person in Dubai (friend, family member, colleague) to access your unit on your behalf. We verify their identity before granting access." },
                    { icon: Package, title: "Delivery on Request", desc: "Need something shipped to you? Contact us from anywhere in the world and we'll retrieve specific items and arrange international shipping." },
                    { icon: ShieldCheck, title: "Auto-Payment Setup", desc: "Set up monthly direct debit from your home country bank card. Your storage fee is charged automatically — no manual transfers needed." },
                    { icon: Clock, title: "Inventory Photos on Request", desc: "Request photos of your stored items anytime. We photograph and send within 48 hours — peace of mind from 5,000 miles away." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                      <item.icon className="w-8 h-8 text-dubai-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-dubai-navy mb-1">{item.title}</div>
                        <div className="text-gray-600 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-dubai-navy text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Long-Term Storage Discounts</h3>
                <div className="space-y-4">
                  {[
                    { period: "3-Month Prepaid", discount: "10% off", saving: "Save AED 180–390" },
                    { period: "6-Month Prepaid", discount: "15% off", saving: "Save AED 540–1,170" },
                    { period: "12-Month Prepaid", discount: "20% off", saving: "Save AED 1,440–3,120" },
                  ].map((d) => (
                    <div key={d.period} className="flex justify-between items-center border-b border-white/20 pb-4">
                      <div><div className="font-semibold">{d.period}</div><div className="text-white/70 text-sm">{d.saving}</div></div>
                      <span className="bg-dubai-gold text-white px-3 py-1 rounded-full font-bold">{d.discount}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-sm mt-6">Based on medium unit (AED 599/month). Discounts applied to prepaid amount at time of booking.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Expat Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Emma T.", location: "Dubai Marina → London", text: "Moved back to London after 6 years in Dubai. Rather than shipping everything and paying AED 20,000, I stored my furniture with SafeStorage for AED 799/month. When my assignment fell through 8 months later and I came back to Dubai, everything was there. Best decision I made.", rating: 5 },
                { name: "Rajesh M.", location: "JLT → Bangalore", text: "Left Dubai temporarily for a family matter — wasn't sure if I'd be back. SafeStorage gave me the flexibility I needed. The auto-payment meant I didn't have to worry about losing my belongings. Returned after 5 months and everything was exactly as I'd left it.", rating: 5 },
                { name: "Steph & Mark B.", location: "Jumeirah → Brisbane", text: "As a couple with 8 years of Dubai life accumulated, we had too much to ship but too much to lose. We stored everything valuable and sold the rest. The inventory photos SafeStorage sent every quarter were incredibly reassuring. Will use them again when we eventually return.", rating: 5 },
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
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How long can I store my belongings?", a: "As long as you need — month-to-month with no upper limit. Many of our expat customers have stored for 2-4 years. The longer you commit upfront (3, 6, or 12-month prepaid), the more you save." },
                { q: "What happens if I can't pay while abroad?", a: "We ask for a 2-month deposit at the start of storage as security. If payments are missed, we'll contact you via email, phone, and WhatsApp. We give 60 days notice before any action on goods — unlike some facilities that act within 30 days." },
                { q: "Can someone in Dubai access my storage?", a: "Yes — you can authorise anyone you trust to access your unit. Bring them to the facility with your written authorisation letter and their Emirates ID or passport. We update their access credentials and notify you." },
                { q: "Do you provide an inventory of my stored items?", a: "We conduct a basic inventory at intake, photographing your goods. You can also request a full photograph inventory update at any time (within 48 hours). This is particularly useful for insurance and peace of mind while abroad." },
                { q: "Can I have specific items retrieved and shipped to me?", a: "Yes. Contact us via WhatsApp or email, specify which items you need, and we'll locate them, package them securely, and coordinate with a courier for international shipping. You pay the shipping cost; we handle the logistics." },
                { q: "What is the minimum storage period?", a: "Our minimum is 1 month. There is no maximum. Month-to-month contracts mean you can stop anytime with 30 days' notice." },
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
            <h2 className="text-3xl font-bold mb-4">Don't Stress About Your Belongings</h2>
            <p className="text-xl text-white/90 mb-8">Get a free quote today. Most expats are surprised by how affordable long-term storage is compared to shipping costs.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-white text-dubai-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold">Get a Free Quote</Button>
              </Link>
              <a href="tel:+971505773388">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-gold px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" /> Call +971505773388
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
