import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Globe, CheckCircle2, Star, Phone, ArrowRight, Package, ShieldCheck, Clock, Plane } from "lucide-react"

export const metadata: Metadata = {
  title: "International Relocation Storage Dubai — Moving Abroad? Store First | SafeStorage",
  description: "Moving internationally from Dubai? Store your belongings affordably while you settle abroad. Avoid costly international shipping. From AED 499/month. Free pickup. Call +971505773388.",
  keywords: "international relocation storage dubai, moving abroad from dubai storage, dubai international moving storage, shipping vs storage dubai, expat relocation dubai, moving overseas dubai storage",
  openGraph: {
    title: "International Relocation Storage Dubai — Moving Abroad? Store First | SafeStorage",
    description: "Moving abroad from Dubai? Store instead of shipping — save thousands of dirhams and keep your options open. Free pickup, climate-controlled, from AED 499/month.",
    url: "https://safestorage.ae/international-relocation",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/international-relocation" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "International Relocation Storage Dubai",
    description: "Affordable storage for expats relocating internationally from Dubai. Store belongings while settling abroad, avoid expensive shipping costs.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/international-relocation",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Relocation Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/international-relocation#webpage",
    name: "International Relocation Storage Dubai — Moving Abroad?",
    url: "https://safestorage.ae/international-relocation",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "International Relocation", item: "https://safestorage.ae/international-relocation" },
    ],
  },
]

const shippingCosts = [
  { destination: "UK / Europe", sea: "AED 12,000–25,000 (FCL)", air: "AED 20–40/kg", time: "4–8 weeks sea" },
  { destination: "India / South Asia", sea: "AED 6,000–15,000 (FCL)", air: "AED 15–30/kg", time: "2–4 weeks sea" },
  { destination: "USA / Canada", sea: "AED 18,000–35,000 (FCL)", air: "AED 25–50/kg", time: "6–10 weeks sea" },
  { destination: "Australia / NZ", sea: "AED 15,000–30,000 (FCL)", air: "AED 20–45/kg", time: "5–8 weeks sea" },
]

export default function InternationalRelocationPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" /> International Relocation Specialists
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Moving Abroad from Dubai? Store While You Settle</h1>
              <p className="text-xl text-white/85 mb-8">Before you commit to shipping tens of thousands of dirhams of belongings internationally, consider storage. Most expats save AED 10,000–20,000 by storing first, then making informed decisions about what truly needs to be shipped.</p>
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

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-8">The Real Cost of International Shipping from Dubai</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-dubai-navy text-white">
                    <th className="text-left p-4 rounded-tl-lg">Destination</th>
                    <th className="text-left p-4">Sea Freight (Full Container)</th>
                    <th className="text-left p-4">Air Freight</th>
                    <th className="text-left p-4 rounded-tr-lg">Transit Time</th>
                  </tr>
                </thead>
                <tbody>
                  {shippingCosts.map((row, i) => (
                    <tr key={row.destination} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="p-4 font-semibold text-dubai-navy">{row.destination}</td>
                      <td className="p-4 text-gray-700">{row.sea}</td>
                      <td className="p-4 text-gray-700">{row.air}</td>
                      <td className="p-4 text-gray-500">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-dubai-gold/10 border border-dubai-gold/30 rounded-xl p-6">
              <p className="text-dubai-navy font-medium">
                <strong>Storage comparison:</strong> A medium storage unit at SafeStorage Dubai (suitable for a 1-2 bedroom apartment) costs AED 499–699/month. Even storing for 12 months costs AED 5,988–8,388 — less than the cheapest international shipping option for the same volume. And with storage, you keep all your options open.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">The Smart Relocation Framework: Store, Then Decide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "📦", title: "What to STORE", items: ["Furniture (cost more to replace than store)", "Seasonal items (winter clothes, etc.)", "Sentimental items not worth shipping risk", "Items you're unsure about", "Items you'll need if you return to Dubai", "Business equipment"] },
                { icon: "✈️", title: "What to SHIP", items: ["Irreplaceable personal items", "High-value items with sentimental meaning", "Items cheaper to ship than replace abroad", "Children's essentials", "Items needed immediately on arrival", "Important documents (originals)"] },
                { icon: "💰", title: "What to SELL", items: ["Furniture you can replace cheaply abroad", "Electronics with different voltages", "Region-specific appliances", "Items that won't survive shipping", "Anything you haven't used in 12 months", "Large items with low sentimental value"] },
              ].map((cat) => (
                <div key={cat.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="text-xl font-bold text-dubai-navy mb-4">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{item}
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
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Why Expats Choose to Store Before They Move</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "You're not sure it's permanent", desc: "Many international moves don't work out. Job contracts end, family circumstances change. If you ship everything and come back 6 months later, you've wasted AED 15,000–40,000 on freight both ways. Storage keeps your options open." },
                { title: "New country housing is uncertain", desc: "You don't know the size of your new accommodation until you arrive. Ship a full container of Dubai furniture to a London flat and you'll have nowhere to put it. Store first, ship only what fits." },
                { title: "Customs and duty concerns", desc: "International shipping triggers customs checks and duties. Not all your Dubai belongings will be permitted entry without duty, especially electronics and certain goods. Storage removes this risk." },
                { title: "You may return to Dubai", desc: "88% of expats who leave Dubai say they'd consider returning. If you're even 30% likely to return, storage for 1-2 years often makes more financial sense than shipping and re-buying abroad." },
              ].map((reason) => (
                <div key={reason.title} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-dubai-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dubai-navy mb-2">{reason.title}</h3>
                    <p className="text-gray-600 text-sm">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Customer Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Marcus & Helen T.", location: "JBR → Edinburgh", text: "Moving back to Scotland after 9 years in Dubai. Shipping quotes were AED 22,000 for our 3-bedroom villa contents. We stored with SafeStorage for AED 899/month instead. 14 months later we know exactly what we want to ship vs sell. Saved over AED 10,000 already and made much better decisions with time on our side.", rating: 5 },
                { name: "Arjun P.", location: "Business Bay → Mumbai", text: "Corporate relocation to India. Company would have paid shipping, but I knew Mumbai flat would be smaller. Stored in Dubai, took 2 suitcases to India. 8 months later I know exactly what I need. Having SafeStorage as my Dubai base has been invaluable.", rating: 5 },
                { name: "Melissa C.", location: "Al Barsha → Sydney", text: "Three kids, 7 years of Dubai life, and a tight deadline to leave. I didn't have time to sell everything or make good shipping decisions. SafeStorage took everything, stored it safely, and gave me time to sort things properly from Australia. Sold some things locally through Dubizzle with SafeStorage coordinating access.", rating: 5 },
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
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">International Relocation FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "How quickly can you pick up my belongings before I leave?", a: "We can arrange same-day pickup for requests made before 12 PM. For a full apartment or villa, we recommend booking 3-5 days in advance to ensure we have the right-sized team and vehicle. We offer evening pickup slots for those with restricted daytime access." },
                { q: "Can you help coordinate selling items I don't want to store?", a: "While we are primarily a storage company, we can advise on the best Dubai platforms for selling second-hand furniture (Dubizzle, Facebook Marketplace UAE). We can also provide authorised access to your storage for potential buyers to view items, coordinated with you remotely." },
                { q: "What happens to my storage if I decide not to return to Dubai?", a: "You can terminate your storage contract with 30 days' notice from anywhere in the world. We can then arrange for items to be: (1) collected by an authorised person in Dubai, (2) donated to UAE charities on your behalf, or (3) auctioned through trusted local auction houses. We coordinate everything — you don't need to return." },
                { q: "Can I access my storage from abroad to have specific items shipped?", a: "Yes. Contact us and specify which items you need. We locate them in your unit, package them for international shipping, and coordinate with your chosen courier or shipping company. You arrange the shipping logistics; we provide the physical access and packaging." },
                { q: "Do you offer family-of-items storage where different items go to different destinations?", a: "Absolutely. Many international movers store the bulk of their belongings while arranging different destinations for specific items — some to ship, some to sell, some to donate. We can hold items separately labelled and coordinate multiple collection events by different parties." },
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
            <h2 className="text-3xl font-bold mb-4">Don't Rush Your International Move</h2>
            <p className="text-xl text-white/90 mb-8">Store first, decide later. Get a free quote from our relocation storage specialists — available 7 days a week.</p>
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
