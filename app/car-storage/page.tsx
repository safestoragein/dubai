import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Car, ShieldCheck, Clock, Star, CheckCircle2, Phone, Bike, Ship, Trophy, Camera, Truck, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Car Storage Dubai — Vehicle Storage",
  description: "Store your car, motorcycle, boat or classic vehicle safely in Dubai. Secure covered indoor bays, 24/7 CCTV, free insurance up to AED 5,000. Vehicle storage from 12.60 AED / sqft. Hassle-free pickup. Call +971505773388.",
  keywords: "car storage dubai, vehicle storage dubai, motorcycle storage dubai, classic car storage dubai, boat storage dubai, covered car storage, indoor vehicle storage dubai, summer car storage dubai, car storage near me dubai",
  openGraph: {
    title: "Car Storage Dubai — Secure Indoor Vehicle Storage | SafeStorage",
    description: "Protect your car, motorcycle, or classic vehicle from Dubai's harsh outdoor conditions. Secure covered indoor storage from 12.60 AED / sqft with hassle-free pickup.",
    url: "https://safestorage.ae/car-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/car-storage" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Car & Vehicle Storage Dubai",
    description: "Secure covered indoor vehicle storage in Dubai for cars, motorcycles, boats and classic vehicles. 24/7 security, free insurance, from 12.60 AED / sqft.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/car-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Vehicle Storage",
    offers: { "@type": "Offer", price: "12.60", priceCurrency: "AED", availability: "https://schema.org/InStock" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/car-storage#webpage",
    name: "Car Storage Dubai — Secure Indoor Vehicle Storage",
    url: "https://safestorage.ae/car-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Car Storage Dubai", item: "https://safestorage.ae/car-storage" },
    ],
  },
]

const faqs = [
  { q: "How much does car storage cost in Dubai?", a: "Car storage in Dubai starts from 12.60 AED / sqft (VAT-inclusive) at SafeStorage Dubai, covering cars, motorcycles, and standard vehicles. Classic cars and larger vehicles are quoted individually. Long-term storage (3+ months) receives significant discounts." },
  { q: "Is your car storage indoors and covered?", a: "Yes, all our vehicle storage bays are indoors and under cover. Your vehicle is protected from direct sun, dust, sandstorms, rain, and bird droppings — the outdoor exposure that causes paint oxidation, interior fading, and body damage to cars left parked in the open across Dubai." },
  { q: "Do you offer pickup for vehicle storage?", a: "Yes, we offer drive-in options and can arrange transportation for vehicles that cannot be driven. For motorcycles and smaller vehicles, our team can coordinate transport. Contact us at +971505773388 to discuss your specific vehicle." },
  { q: "Is my vehicle insured while in storage?", a: "Yes, every stored vehicle is covered by our complimentary insurance policy up to AED 5,000. For high-value classic cars, luxury vehicles, or collector items worth more, we offer extended coverage options. Our facility's 24/7 CCTV security and controlled access also provides an additional layer of protection." },
  { q: "Can I access my vehicle while it's in storage?", a: "Yes, you can access your vehicle during our operating hours: Monday–Saturday 8 AM–8 PM, Sunday 10 AM–6 PM. Simply give us 2 hours' notice and your vehicle will be ready. For business customers with special requirements, extended access can be arranged." },
  { q: "What do you do to maintain my vehicle during storage?", a: "Our team conducts regular visual inspections of stored vehicles, checks tire pressure monthly, and monitors the storage environment 24/7. For classic or long-term storage (6+ months), we recommend our premium care package which includes battery trickle charging, regular engine start-ups, and detailed condition reporting." },
  { q: "Can you store oversized vehicles like caravans or trucks?", a: "Yes, we accommodate oversized vehicles including caravans, motorhomes, light commercial vehicles and boats on a case-by-case basis. Please contact us with your vehicle's dimensions so we can confirm availability and pricing." },
]

export default function CarStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 md:px-8 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Car className="w-4 h-4" /> Vehicle Storage Specialists
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Car Storage Dubai — Secure Covered Indoor Vehicle Storage
              </h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">
                Store your car, motorcycle, boat, or classic vehicle in our secure indoor facility, under cover and out of the sun, dust, and rain. 24/7 CCTV security, free insurance up to AED 5,000, and regular vehicle inspections. Dubai's most trusted vehicle storage.
              </p>
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

        {/* Stats Bar */}
        <section className="bg-dubai-navy/5 border-b border-gray-200 py-6">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "4.9★", label: "Google Rating" },
                { value: "500+", label: "Vehicles Stored" },
                { value: "Indoor", label: "Covered Storage Bays" },
                { value: "12.60 AED", label: "Vehicles from / sqft" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-dubai-navy">{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Vehicle Storage Matters in Dubai */}
        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-6">Why Leaving Your Vehicle Parked Outdoors is a Costly Mistake</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>A vehicle left parked in the open in Dubai takes a beating the moment you walk away. Between the relentless sun, blowing sand, and the risk of knocks and theft in public parking, here's what happens to cars stored outdoors:</p>
                <ul className="space-y-3">
                  {[
                    { icon: "🎨", text: "Paint oxidises and fades — UV radiation in Dubai is among the highest in the world (UV Index 9-11+ daily in summer)" },
                    { icon: "🏜️", text: "Blowing sand and dust scratch paintwork and clog vents, air intakes, and door seals" },
                    { icon: "🐦", text: "Bird droppings, tree sap, and construction dust etch and stain exposed bodywork and glass" },
                    { icon: "🛞", text: "Tyres develop flat spots and crack when left stationary and unattended — replacing 4 tyres costs AED 800-3,000" },
                    { icon: "🚗", text: "Kerbside dents, trolley knocks, and theft are constant risks in open public parking" },
                    { icon: "🔋", text: "Batteries drain flat and fluids stagnate when a car sits unused for weeks with no one checking on it" },
                  ].map((item) => (
                    <li key={item.text} className="flex gap-3">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 font-medium">
                  A single Dubai summer in exposed outdoor parking can reduce a vehicle's resale value by AED 5,000-20,000 and result in AED 2,000-8,000 in preventable repairs.
                </p>
              </div>
              <div className="bg-dubai-navy/5 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-dubai-navy">Who Needs Car Storage in Dubai?</h3>
                <div className="space-y-3">
                  {[
                    { title: "Expats traveling for extended periods", desc: "Summer trips to Europe, India, or home countries lasting 1-3 months" },
                    { title: "Multiple vehicle owners", desc: "Second car, weekend car, or luxury vehicle not used daily" },
                    { title: "Classic & vintage car collectors", desc: "Protecting investment-grade vehicles from Dubai's harsh environment" },
                    { title: "Motorcycle owners", desc: "Bikes often stored April-October when Dubai heat makes riding impractical" },
                    { title: "Expats leaving the UAE", desc: "Storing vehicle while deciding whether to ship, sell, or return" },
                    { title: "Seasonal residents", desc: "Part-time Dubai residents who split time between countries" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-dubai-navy">{item.title}</span>
                        <span className="text-gray-600"> — {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Store */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Vehicles We Store</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Car, title: "Cars & SUVs", desc: "Sedans, SUVs, sports cars, family vehicles. From hatchbacks to Range Rovers.", price: "From 12.60 AED / sqft" },
                { icon: Bike, title: "Motorcycles & Scooters", desc: "All makes and models. Harley Davidson, Ducati, Yamaha, delivery scooters.", price: "From 12.60 AED / sqft" },
                { icon: Trophy, title: "Classic & Luxury Cars", desc: "Ferrari, Lamborghini, Porsche, vintage and collector vehicles with white-glove care.", price: "Quoted individually" },
                { icon: Ship, title: "Boats & Jet Skis", desc: "Personal watercraft, speedboats, and small leisure vessels.", price: "Quoted individually" },
                { icon: Truck, title: "Caravans & Motorhomes", desc: "Large recreational vehicles and camper vans with oversized bay options.", price: "Quoted individually" },
                { icon: Car, title: "Light Commercial Vehicles", desc: "Pickups, vans, and small trucks for businesses between contracts.", price: "From 12.60 AED / sqft" },
              ].map((v) => (
                <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <v.icon className="w-10 h-10 text-dubai-gold mb-4" />
                  <h3 className="text-xl font-bold text-dubai-navy mb-2">{v.title}</h3>
                  <p className="text-gray-600 mb-4">{v.desc}</p>
                  <span className="bg-dubai-gold/10 text-dubai-navy font-semibold px-3 py-1 rounded-full text-sm">{v.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Storage Features */}
        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-4">What's Included with Every Vehicle Storage</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">No hidden extras. No surprise charges. Everything your vehicle needs to stay in perfect condition.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Car, title: "Covered Indoor Bays", desc: "Your vehicle is stored indoors under cover — shielded from direct sun, dust, sandstorms, rain, and bird droppings that damage vehicles left parked outdoors." },
                { icon: Camera, title: "24/7 HD CCTV Coverage", desc: "Every bay is covered by high-definition CCTV cameras monitored around the clock. Footage retained for 30 days." },
                { icon: CheckCircle2, title: "Monthly Inspections", desc: "Our team conducts monthly visual inspections of all stored vehicles — checking for leaks, tyre condition, and any visible issues." },
                { icon: Star, title: "Free Insurance AED 5,000", desc: "Complimentary insurance coverage included with every storage booking. Extended coverage available for high-value vehicles." },
                { icon: Clock, title: "Flexible Terms", desc: "Month-to-month contracts with no penalty. Store for 1 month or 5 years. A wide range of discounts available on longer prepaid commitments." },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-slate-50">
                  <f.icon className="w-8 h-8 text-dubai-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dubai-navy mb-1">{f.title}</h3>
                    <p className="text-gray-600 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-dubai-navy text-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How Vehicle Storage Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Get a Quote", desc: "Tell us your vehicle type, size, and storage duration. Get an instant quote by phone or online." },
                { step: "2", title: "Drive In or We Arrange Transport", desc: "Drive your vehicle to our facility, or we can arrange pickup/transport assistance. We'll do a pre-storage condition report." },
                { step: "3", title: "Secure Storage", desc: "Your vehicle is placed in its covered indoor bay. Our system logs it in with photos and condition notes." },
                { step: "4", title: "Retrieve Anytime", desc: "Give us 2 hours' notice to have your vehicle ready. Drive it out or we arrange delivery." },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-dubai-gold text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">{s.step}</div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-white/80 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "James R.", location: "Dubai Marina", vehicle: "Porsche 911", text: "Stored my Porsche for 4 months while I was back in the UK on family leave. Collected it in exactly the same condition — battery perfect, no paint issues. The monthly inspection reports gave me complete peace of mind. Wouldn't trust anyone else with my car in Dubai.", rating: 5 },
                { name: "Mohammed A.", location: "Business Bay", vehicle: "Harley Davidson", text: "Dubai summer heat makes riding impossible from June to September. SafeStorage is where my Harley lives for 4 months every year. Secure, covered indoors, and the team actually cares about the bikes. The battery maintenance service is worth every dirham.", rating: 5 },
                { name: "Sarah K.", location: "Jumeirah", vehicle: "Classic Mercedes 280SL", text: "My 1971 Mercedes is irreplaceable. When I found SafeStorage I visited in person before committing — the facility is immaculate. Clean, covered indoor bays, professional staff, and they understood exactly what a classic car needs. My car is in better shape now than when I dropped it off.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex mb-3">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-dubai-gold text-dubai-gold" />)}</div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div>
                    <div className="font-bold text-dubai-navy">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.location} • {t.vehicle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="border border-gray-200 rounded-xl p-6 group">
                  <summary className="font-semibold text-dubai-navy cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-dubai-gold transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dubai-gold text-white text-center">
          <div className="container px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Vehicle?</h2>
            <p className="text-xl text-white/90 mb-8">Get a free quote in 2 minutes. Vehicle storage from 12.60 AED / sqft. No commitment required.</p>
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


        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-8">About Our Car &amp; Vehicle Storage Service in Dubai</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-12">
              <p>SafeStorage Dubai provides specialist covered indoor vehicle storage for cars, motorcycles, classic and luxury vehicles, boats, caravans, and light commercial vehicles across Dubai. Every vehicle is stored indoors under cover &mdash; shielded from the direct sun, UV, blowing sand, dust, rain, and bird droppings that damage cars left parked in the open. Dubai&apos;s outdoor conditions are uniquely destructive to vehicles left in exposed parking, where paintwork oxidises, bodywork is scratched and stained, and tyres crack while a car sits unattended. A single summer in inadequate outdoor parking can reduce a vehicle&apos;s resale value by AED 5,000&ndash;20,000 and result in thousands of dirhams in preventable repairs.</p>
              <p>Vehicle storage at SafeStorage Dubai is used by expats taking extended summer trips, multiple-car owners managing seasonal vehicles, classic car collectors protecting investment-grade vehicles, motorcycle owners who avoid riding in Dubai&apos;s extreme summer heat, and businesses storing fleet vehicles between contracts. Vehicle storage starts from 12.60 AED / sqft (VAT-inclusive), and all vehicles receive complimentary insurance coverage up to AED 5,000. Extended coverage for luxury, classic, and high-value vehicles is available. Call us at +971505773388 for a free, no-obligation quote.</p>
            </div>

            <h2 className="text-3xl font-bold text-dubai-navy mb-8">Comprehensive Vehicle Storage FAQs</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What vehicles can be stored at SafeStorage Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai stores a comprehensive range of vehicles including standard cars and SUVs, sports cars, luxury vehicles (Ferrari, Lamborghini, Porsche, Rolls-Royce, Bentley), classic and vintage cars, motorcycles and scooters of all makes and models, jet skis, speedboats and small leisure vessels, caravans, motorhomes, and light commercial vehicles including pickups and vans. Classic and luxury vehicles receive our white-glove care protocol with additional handling precautions and dedicated covered bays. Oversized vehicles including caravans and larger boats are accommodated on a case-by-case basis &mdash; contact us with your vehicle&apos;s dimensions so we can confirm availability and appropriate bay allocation.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What is the minimum storage period for a vehicle?</h3>
                <p className="text-gray-700 leading-relaxed">The minimum storage period at SafeStorage Dubai is one month. This flexibility is important for our customers who may be taking a short international trip, managing a temporary vehicle surplus, or waiting for export paperwork to be finalised. There is no maximum storage period &mdash; many customers store vehicles for 6 months, 12 months, or longer. For storage commitments of 3 months or more, we offer progressive discounts that make long-term storage significantly more cost-effective. If you need to end your storage early, 30 days&apos; notice is required with no penalty fees. We aim to make vehicle storage as flexible as your schedule requires.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How are vehicles protected in your storage facility?</h3>
                <p className="text-gray-700 leading-relaxed">Our vehicles are stored in a clean, enclosed indoor facility, under cover and out of the elements. Storing your vehicle indoors keeps it away from the direct sun and UV that oxidise and fade paint, the blowing sand and dust that scratch bodywork and clog vents, the rain that pools and stains, and the bird droppings and tree sap that etch exposed surfaces. Because your car sits in a secure, controlled-access building rather than open public parking, it is also protected from kerbside knocks, trolley dents, and theft. For classic and long-term storage, our premium care package adds battery trickle-charging and periodic engine starts so a car that would otherwise sit unattended stays mechanically healthy.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Does my car insurance remain valid while the vehicle is in storage?</h3>
                <p className="text-gray-700 leading-relaxed">This depends entirely on your existing car insurance policy in the UAE. Most UAE comprehensive car insurance policies remain valid while the vehicle is not in use, but you should confirm this directly with your insurance provider before placing your vehicle in storage. Some insurers require notification that a vehicle is being stored, while others may offer a reduced-premium &ldquo;storage endorsement&rdquo; for non-driven periods. SafeStorage Dubai provides our own complimentary storage insurance up to AED 5,000 covering damage occurring while in our care, but this is not a substitute for your own policy. We recommend confirming your policy status with your insurer and keeping it active throughout storage.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What happens to the car battery during long-term storage?</h3>
                <p className="text-gray-700 leading-relaxed">Car batteries are one of the most common points of failure during extended vehicle storage in Dubai, where heat accelerates battery self-discharge and degradation. In exposed outdoor parking, a car battery can drain completely within 4&ndash;6 weeks of non-use during summer. For short-term storage (1&ndash;3 months), no additional intervention is typically needed. For longer periods, our premium care package includes battery trickle-charging using an approved maintenance charger that keeps the battery at an optimal charge level without overcharging. We can also disconnect the battery on request for very long-term storage.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Is fuel drained from vehicles before storage?</h3>
                <p className="text-gray-700 leading-relaxed">No, we do not drain fuel from stored vehicles as a standard procedure. In fact, storing a vehicle with a full or near-full tank is generally recommended for periods up to 12 months, as a full tank prevents moisture from forming inside the fuel system. For very long-term storage (over 12 months), some vehicle manufacturers recommend a fuel stabiliser additive to prevent the fuel from degrading and leaving deposits in the fuel system &mdash; we can advise on this during your intake consultation. Keeping the tank near-full and the vehicle indoors and out of the weather helps limit condensation in the fuel system compared with a car left standing outdoors. Contact us to discuss your specific vehicle&apos;s requirements.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Can I access my vehicle at any time while it is in storage?</h3>
                <p className="text-gray-700 leading-relaxed">Yes, you can access your stored vehicle during our business hours: Monday to Saturday 8 AM to 8 PM, Sunday 10 AM to 6 PM. We request approximately 2 hours&apos; advance notice so our team can prepare your vehicle and have it ready at the access point when you arrive. For business customers with regular or frequent access needs, we can arrange a dedicated access schedule to accommodate your workflow. If you need to retrieve your vehicle outside standard hours due to an emergency or urgent travel, please call us directly at +971505773388 and we will do our best to accommodate. Your vehicle is always your property and accessible to you at reasonable notice.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What is the price for luxury cars versus motorcycles?</h3>
                <p className="text-gray-700 leading-relaxed">Vehicle storage at SafeStorage starts from 12.60 AED / sqft (VAT-inclusive), covering motorcycles and scooters, standard cars and SUVs, and light commercial vehicles &mdash; making our storage accessible for riders who want to protect their bikes during Dubai&apos;s April-to-October heat season and drivers protecting their cars. Luxury and classic cars &mdash; Ferrari, Lamborghini, Porsche, Rolls-Royce, vintage vehicles &mdash; are quoted individually as they may require dedicated bays, premium care packages, and enhanced insurance arrangements. The price includes covered indoor storage, 24/7 CCTV monitoring, monthly inspections, and complimentary insurance up to AED 5,000. A wide range of discounts applies to longer prepaid commitments &mdash; the longer you store, the more you save. Call +971505773388 for a personalised quote.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How is security maintained at the vehicle storage facility?</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Can I store a boat or jet ski at SafeStorage Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">Yes, SafeStorage Dubai accommodates boats, jet skis, and personal watercraft on a case-by-case basis. Dubai&apos;s salt-laden Gulf air and harsh sun are particularly hard on marine vessels during the off-season, making proper enclosed indoor storage significantly better than leaving a boat exposed at a marina. We store vessels on appropriate trailers or cradles and ensure they are correctly supported and protected during storage. Please contact us with your vessel&apos;s dimensions, weight, and trailer configuration before booking so we can confirm bay availability and any special handling requirements. Pricing for boats and jet skis is quoted individually based on size and storage configuration.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Do you handle RTA paperwork or vehicle registration while the car is in storage?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai is a vehicle storage facility and does not directly handle RTA (Roads and Transport Authority) registration paperwork, emissions testing (Tasjeel/Wasel), or vehicle licensing on your behalf. However, we can accommodate retrieval of your vehicle for you to attend to RTA requirements and return it to storage afterwards. If your vehicle registration expires during storage, this is your responsibility to manage directly with the RTA. We recommend checking your registration renewal dates before entering long-term storage and planning accordingly. Our team can advise on practical logistics for managing your vehicle&apos;s paperwork during storage periods.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What if my car needs maintenance while it is in storage?</h3>
                <p className="text-gray-700 leading-relaxed">If a mechanical issue is identified during one of our monthly inspections, we notify you immediately with photographs and details. You can then arrange for a mechanic or the vehicle&apos;s dealer service centre to attend to the vehicle at our facility, or we can arrange temporary retrieval for you to take it for servicing. We do not perform mechanical work on stored vehicles ourselves. For long-term storage customers, we recommend completing all outstanding servicing before placing the vehicle in storage, so that it is in optimal mechanical condition when you retrieve it. Pre-storage servicing also helps avoid issues such as oil breakdown or brake binding that can develop during extended non-use.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How do I book vehicle storage at SafeStorage Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">Booking vehicle storage is straightforward. You can get a free quote by calling us at +971505773388 or by completing the online quote form at safestorage.ae/get-quote. Tell us your vehicle type, approximate size, intended storage duration, and any special requirements. We will provide a same-day quote and confirm bay availability. Once confirmed, you can drive your vehicle directly to our facility during business hours, or we can arrange transport assistance for vehicles that cannot be driven. We complete the intake process on arrival &mdash; condition photographs, documentation, key handover &mdash; and your vehicle is placed in its covered indoor bay. The whole intake process typically takes 20&ndash;30 minutes.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Are cars driven or moved while in storage?</h3>
                <p className="text-gray-700 leading-relaxed">No, stored vehicles are not driven by our staff unless you specifically request it as part of a premium care package that includes periodic engine starts to keep mechanical components lubricated. Standard storage means the vehicle remains stationary in its assigned bay for the duration. Monthly inspections are conducted as a visual walk-around and tyre pressure check, not requiring the vehicle to be moved. All movement of vehicles within the facility is done only by authorised staff, with proper documentation, and never for any purpose other than maintenance or retrieval. Our policy is clear: your vehicle is stored where you left it and returned to you in the same condition, with no unauthorised use under any circumstances.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What preparation is needed before storing my vehicle?</h3>
                <p className="text-gray-700 leading-relaxed">To get your vehicle ready for storage, we recommend the following steps: (1) Wash and wax the exterior to create a protective layer on the paintwork. (2) Clean the interior thoroughly, including removing any food items that could attract pests. (3) Complete any outstanding servicing &mdash; oil change, brake check, and fluid top-ups. (4) Inflate tyres to the manufacturer&apos;s recommended pressure (slightly higher than normal for long-term storage to prevent flat spots). (5) Fill the fuel tank to near-full to prevent fuel system condensation. (6) Remove any toll tags (Salik), dashcams, or personal valuables from the vehicle. Our team will advise on any additional preparation specific to your vehicle type during the booking process.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
