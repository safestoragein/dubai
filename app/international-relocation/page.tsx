import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Globe, CheckCircle2, Star, Phone, ArrowRight, Package, ShieldCheck, Clock, Plane } from "lucide-react"

export const metadata: Metadata = {
  title: "International Relocation Storage Dubai",
  description: "Moving internationally from Dubai? Store your belongings affordably while you settle abroad. Avoid costly international shipping. From AED 499/month. Hassle-free pickup. Call +971505773388.",
  keywords: "international relocation storage dubai, moving abroad from dubai storage, dubai international moving storage, shipping vs storage dubai, expat relocation dubai, moving overseas dubai storage",
  openGraph: {
    title: "International Relocation Storage Dubai — Moving Abroad?",
    description: "Moving abroad from Dubai? Store instead of shipping — save thousands of dirhams and keep your options open. Hassle-free pickup, climate-controlled, from AED 499/month.",
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

        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">International Relocation Storage — Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Should I store or ship when leaving Dubai for another country?</h3>
                <p className="text-gray-700 leading-relaxed">The honest answer depends on your certainty about the move and your destination housing. If you are 100% certain the move is permanent, you have confirmed your new accommodation size, and you have a clear list of what you need immediately, shipping specific items can make sense. However, for most expats, a hybrid approach works best: store the bulk of your belongings in Dubai, ship only the essentials you need immediately on arrival, and make the remaining decisions once you are settled and know what space you actually have, what is readily available locally, and what is worth the freight cost. This approach prevents the costly and common mistake of shipping furniture that does not fit, electronics incompatible with local voltage, or items available much cheaper locally.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How much does international shipping from Dubai cost compared to storage?</h3>
                <p className="text-gray-700 leading-relaxed">A full container of household furniture shipped from Dubai to the UK or Europe costs AED 12,000–25,000 by sea freight, with transit times of 4–8 weeks. To India or South Asia, the cost is AED 6,000–15,000. To the USA or Canada, expect AED 18,000–35,000. Air freight is far more expensive — AED 20–50 per kilogram. By comparison, storing the same volume at SafeStorage in a medium unit costs AED 499–699 per month. Even storing for 24 months costs AED 12,000–17,000 — competitive with the cheapest shipping option, while keeping all your options open. For expats who later return to Dubai (a significant percentage), storage saves them from paying full shipping costs twice.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How long can I store my belongings during a relocation?</h3>
                <p className="text-gray-700 leading-relaxed">There is no maximum storage duration at SafeStorage. Month-to-month contracts mean you can store for as long as you need — whether that is 3 months while you settle into your new country or 3 years while you maintain the possibility of returning to Dubai. Our longest-serving relocation customers have stored for 4–5 years. The only requirement is maintaining your monthly payments, which can be automated from any international bank card. If you decide you no longer need the storage at any point, simply give 30 days&apos; written notice and arrange the final disposition of your belongings, which can all be managed remotely without returning to Dubai.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I retrieve specific items once I have settled abroad?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. Once settled in your new country, you may realise you want specific items from storage — a beloved piece of furniture, a particular artwork, children&apos;s toys, or specific documents. SafeStorage will locate your specified items, prepare them for international shipping, and coordinate with your chosen courier or freight company for collection from our facility. You arrange the shipping contract; we handle the physical preparation. Many customers use this service over time to gradually retrieve what they realise they need, avoiding the cost and waste of shipping everything at once before knowing what they truly want.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">What items are most cost-effective to store versus ship?</h3>
                <p className="text-gray-700 leading-relaxed">Items that are most cost-effective to store rather than ship include large, heavy furniture (wardrobes, dining tables, sofas, beds) where shipping costs per cubic metre are very high; items you are uncertain about needing in the new country; seasonal items that depend on your new climate; and quality pieces that cost more to replace abroad than to store. Items that are most cost-effective to ship are lightweight, high-value essentials (electronics, sentimental jewellery, important documents), items required immediately on arrival, and goods that are significantly more expensive or unavailable in your destination country. Appliances with incompatible voltage (e.g., 220V appliances going to the USA) are almost always better sold in Dubai than stored or shipped.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Do you partner with international moving companies?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage works cooperatively with international moving companies and shipping agents to provide a seamless relocation experience. We can serve as the Dubai-side storage partner for moves coordinated by international removals companies — collecting items they are not immediately shipping, storing them in our facility, and providing access for collection when the customer arranges their subsequent shipments. We can also provide access to storage units for third-party courier companies to collect items for international delivery on behalf of our customers. We do not act as a freight forwarder ourselves, but we have working relationships with reputable Dubai-based logistics companies who can assist with the shipping side of the process.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How do you protect items stored during long international relocations?</h3>
                <p className="text-gray-700 leading-relaxed">All SafeStorage units are climate-controlled at 18–24°C with humidity maintained at 45–55%, protecting stored items from Dubai&apos;s extreme heat and humidity cycles year-round. Furniture is wrapped in protective covers, foam padding, and corner protection at intake. A photographic inventory and condition report is completed on arrival. Items are stored on pallets where appropriate, keeping them off the floor. For long-term relocation storage (12+ months), we recommend requesting a periodic condition check — our team can photograph your items and send the images remotely. Our facilities have 24/7 CCTV surveillance, access control, and on-site security.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I add items to storage after the initial pickup?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. Adding items after the initial storage pickup is common — many customers clear their apartment in stages, or realise after departure that they left items with friends that they want added to storage. You can arrange secondary pickups for additional furniture or boxes, or bring small items directly to the facility. A trusted person in Dubai can also add items on your behalf if you have already left. If the additional items require a larger unit, we will transfer your existing storage to a bigger space. Monthly billing adjusts only if your unit size changes; adding items within your existing unit capacity does not change your monthly rate.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">What happens to my stored items if I decide not to return to Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">If you decide not to return, you have several options for managing your stored belongings remotely. An authorised person in Dubai can collect and distribute items to buyers, family members, or charities. SafeStorage can coordinate access for Dubizzle or other buyers to collect purchased items. We can refer you to UAE-based auction houses that handle international estate sales if you want to sell furniture. Charities can collect donated items from our facility. For uncollected items after an agreed end date with 30 days&apos; notice, we handle the disposition according to your written instructions. None of these processes require you to return to Dubai in person.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How does the digital inventory work during my relocation?</h3>
                <p className="text-gray-700 leading-relaxed">At intake, our team photographs all major items and notes them on a condition report, which is signed and shared with you digitally. This gives you a photographic record of what is in storage and its condition on arrival. During your storage period, you can request updated photographs of your unit or specific items at any time — we provide these within 48 hours. You can maintain your own tracking list alongside the intake photos, which many customers do using a shared document or note app. When items are retrieved or added, the inventory record is updated accordingly. This system gives expats abroad the peace of mind of knowing exactly what they have in storage without needing to be physically present.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Can a family member access my storage unit during my relocation?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. You can authorise any person in Dubai — family member, trusted friend, or professional contact — to access your storage unit on your behalf. Authorised access requires presenting your written authorisation letter and their own valid ID (Emirates ID or passport) at the facility. You can specify whether the authorised person has full access (including removing items) or visit-only access. You can add, change, or revoke authorised persons remotely via email or WhatsApp at any time. This is particularly useful for customers who want a family member to retrieve specific items and arrange their international shipping, or who want someone to periodically check on the storage unit.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">What is the minimum storage period for international relocations?</h3>
                <p className="text-gray-700 leading-relaxed">The minimum storage period at SafeStorage is one month. There is no minimum for relocation storage specifically — it is the same as for all other storage types. However, most relocation customers store for considerably longer: typically 6–18 months while they establish themselves in their new country and make considered decisions about their belongings. Shorter-term relocation storage (1–3 months) is also common for customers making temporary moves with a confirmed return date, such as a fixed-term international assignment. Whatever your timeline, we accommodate it with month-to-month flexibility and no long-term contract requirement.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How do I handle storage billing while living abroad?</h3>
                <p className="text-gray-700 leading-relaxed">Storage billing from abroad is fully automated at SafeStorage. We accept all major international credit and debit cards (Visa, Mastercard, Amex) as well as UAE bank transfers. Monthly charges are processed automatically on your billing date, and you receive a receipt by email. You can update your payment details remotely at any time via email or WhatsApp. For customers on prepaid plans, billing is a one-time transaction at the start of the storage period with no recurring monthly management required. Many expats appreciate the auto-payment setup because it eliminates the need to remember monthly payments or manage UAE banking relationships from abroad.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I ship items directly from the SafeStorage facility to my new country?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. Your SafeStorage unit can serve as the shipping origin point for items you decide to send abroad. You arrange the shipping contract with your chosen freight company or courier, and they collect the prepared items from our facility on a scheduled date. Our team prepares the specified items for transit — wrapping, boxing, or palletising as required — and has them ready for collection. We require advance notice of collection dates (typically 3–5 business days) to ensure items are correctly prepared and accessible. You pay SafeStorage for any preparation work beyond standard storage; the shipping cost itself is between you and your carrier.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How do I choose between storage and selling my furniture before leaving?</h3>
                <p className="text-gray-700 leading-relaxed">The key factors in the store-vs-sell decision are replacement cost, shipping cost, sentimental value, and your confidence in the move being permanent. If a piece of furniture cost AED 5,000 and you can sell it for AED 2,000 but storage for 12 months costs AED 6,000, selling is the rational choice — unless you are likely to return or the item has irreplaceable sentimental value. Conversely, if a custom wardrobe cost AED 15,000 and storage for 18 months costs AED 9,000, storage is clearly preferable. The challenge is that most expats undersell furniture under time pressure, accepting 20–30% of original value. Our advice is always to calculate the storage cost for your realistic timeline first, then compare it honestly to the sale price you can actually achieve — not the original purchase price.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-6">About International Relocation Storage at SafeStorage Dubai</h2>
            <p className="text-gray-700 leading-relaxed mb-6">International relocation is one of the most financially consequential decisions an expat makes in Dubai. The choice between shipping, storing, and selling accumulated belongings — often accumulated over years of Dubai life — can result in saving or wasting tens of thousands of dirhams depending on the approach taken. SafeStorage was founded with this specific scenario in mind, providing Dubai-based expats with an affordable, flexible alternative to the irreversible commitment of international shipping. Our storage-first approach has helped hundreds of families make better long-term decisions about their belongings without the pressure of departure deadlines forcing rushed choices.</p>
            <p className="text-gray-700 leading-relaxed mb-6">The mathematics of storage versus shipping consistently favour storage for most expat scenarios. International sea freight from Dubai starts at AED 6,000–12,000 for a partial container to South Asia and rises to AED 25,000–35,000 for a full container to North America or Australia. Once belongings are shipped, there is no flexibility — they arrive at a fixed destination with substantial transit risk and customs complexity. Storage at AED 499–899 per month keeps all options open: you can retrieve items for a new Dubai assignment, gradually ship what you need once settled, arrange local sales through an authorised contact, or donate items to UAE charities. This optionality has proven invaluable for the significant percentage of expats whose international plans change within the first 12–18 months.</p>
            <p className="text-gray-700 leading-relaxed mb-6">SafeStorage&apos;s relocation storage service is designed to require minimal active management once established. Auto-payment handles monthly billing from any international bank card, authorised access contacts in Dubai can manage physical interactions on your behalf, and remote communication via WhatsApp handles any account changes or special requests. Customers living in the UK, India, Australia, Canada, and across Europe routinely manage their Dubai storage relationships entirely remotely for years at a time. The service provides a Dubai base without requiring a Dubai presence — a valuable asset for expats who leave with some uncertainty about whether their departure is truly permanent.</p>
            <p className="text-gray-700 leading-relaxed">For those planning an international relocation from Dubai, we recommend booking storage as early as possible — ideally 2–4 weeks before your departure date — to ensure we have the right unit size available and can schedule pickup at a time convenient to your moving schedule. Call or WhatsApp +971505773388 to discuss your specific situation. Our relocation advisors can review your inventory, compare storage costs to your shipping quotes, and help you design an approach that minimises cost while maximising flexibility for what is often a major life transition.</p>
          </div>
        </section>

        <section className="py-16 bg-dubai-gold text-white text-center">
          <div className="container px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t Rush Your International Move</h2>
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
