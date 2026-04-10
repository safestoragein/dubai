import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Car, ShieldCheck, Thermometer, Clock, Star, CheckCircle2, Phone, Bike, Ship, Trophy, Camera, Truck, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Car Storage Dubai — Climate-Controlled Vehicle Storage from AED 899/mo | SafeStorage",
  description: "Store your car, motorcycle, boat or classic vehicle safely in Dubai. Climate-controlled 20-25°C, 24/7 CCTV, free insurance up to AED 5,000. Cars from AED 899/month. Free pickup. Call +971505773388.",
  keywords: "car storage dubai, vehicle storage dubai, motorcycle storage dubai, classic car storage dubai, boat storage dubai, climate controlled car storage, indoor vehicle storage dubai, summer car storage dubai, car storage near me dubai",
  openGraph: {
    title: "Car Storage Dubai — Climate-Controlled Vehicle Storage | SafeStorage",
    description: "Protect your car, motorcycle, or classic vehicle from Dubai's 50°C summer heat. Secure climate-controlled storage from AED 899/month with free pickup.",
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
    description: "Climate-controlled vehicle storage in Dubai for cars, motorcycles, boats and classic vehicles. 24/7 security, free insurance, from AED 899/month.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/car-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Vehicle Storage",
    offers: [
      { "@type": "Offer", name: "Car Storage", price: "899", priceCurrency: "AED", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Motorcycle Storage", price: "399", priceCurrency: "AED", availability: "https://schema.org/InStock" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/car-storage#webpage",
    name: "Car Storage Dubai — Climate-Controlled Vehicle Storage",
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
  { q: "How much does car storage cost in Dubai?", a: "Car storage in Dubai starts from AED 899/month at SafeStorage Dubai. Pricing depends on vehicle size and duration. Motorcycles start from AED 399/month. Classic cars and larger vehicles are quoted individually. Long-term storage (3+ months) receives significant discounts." },
  { q: "Is your car storage climate-controlled?", a: "Yes, all our vehicle storage bays are climate-controlled at 20-25°C year-round with 45-55% humidity — critical protection against Dubai's 50°C summer heat. This prevents paint oxidation, rubber seal cracking, battery damage, and interior fading that occurs in non-climate-controlled storage." },
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
                Car Storage Dubai — Protect Your Vehicle from Dubai's 50°C Heat
              </h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">
                Store your car, motorcycle, boat, or classic vehicle in our climate-controlled facility (20-25°C year-round). 24/7 CCTV security, free insurance up to AED 5,000, and regular vehicle inspections. Dubai's most trusted vehicle storage.
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
                { value: "20-25°C", label: "Year-Round Temperature" },
                { value: "AED 899", label: "Cars from /month" },
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
            <h2 className="text-3xl font-bold text-dubai-navy mb-6">Why Dubai's Climate is Your Vehicle's Worst Enemy</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Dubai summers are brutal — and not just for humans. Between May and October, ambient temperatures regularly hit 45-50°C, with ground temperatures on asphalt exceeding 70°C. If you park or store a vehicle in a non-climate-controlled environment, here's what happens:</p>
                <ul className="space-y-3">
                  {[
                    { icon: "🔋", text: "Car batteries degrade rapidly above 35°C — average battery lifespan in Dubai is just 2 years vs 5+ years in temperate climates" },
                    { icon: "🎨", text: "Paint oxidises and fades — UV radiation in Dubai is among the highest in the world (UV Index 9-11+ daily in summer)" },
                    { icon: "🛞", text: "Tyres develop flat spots and crack when left stationary in extreme heat — replacing 4 tyres costs AED 800-3,000" },
                    { icon: "💺", text: "Leather interiors crack and split at temperatures above 60°C — dashboard and steering wheel damage is irreversible" },
                    { icon: "⚙️", text: "Rubber seals and gaskets dry out, causing oil leaks and costly repairs" },
                    { icon: "🌊", text: "High humidity (80-90% in summer) accelerates rust and corrosion on chassis and exposed metal components" },
                  ].map((item) => (
                    <li key={item.text} className="flex gap-3">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 font-medium">
                  A single Dubai summer in non-climate-controlled parking can reduce a vehicle's resale value by AED 5,000-20,000 and result in AED 2,000-8,000 in preventable repairs.
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
                { icon: Car, title: "Cars & SUVs", desc: "Sedans, SUVs, sports cars, family vehicles. From hatchbacks to Range Rovers.", price: "From AED 899/month" },
                { icon: Bike, title: "Motorcycles & Scooters", desc: "All makes and models. Harley Davidson, Ducati, Yamaha, delivery scooters.", price: "From AED 399/month" },
                { icon: Trophy, title: "Classic & Luxury Cars", desc: "Ferrari, Lamborghini, Porsche, vintage and collector vehicles with white-glove care.", price: "Quoted individually" },
                { icon: Ship, title: "Boats & Jet Skis", desc: "Personal watercraft, speedboats, and small leisure vessels.", price: "Quoted individually" },
                { icon: Truck, title: "Caravans & Motorhomes", desc: "Large recreational vehicles and camper vans with oversized bay options.", price: "Quoted individually" },
                { icon: Car, title: "Light Commercial Vehicles", desc: "Pickups, vans, and small trucks for businesses between contracts.", price: "From AED 1,299/month" },
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
                { icon: Thermometer, title: "Climate Control 20-25°C", desc: "Precise temperature and humidity control year-round. Not just 'air conditioning' — actual climate management protecting paint, rubber, leather, and electronics." },
                { icon: Camera, title: "24/7 HD CCTV Coverage", desc: "Every bay is covered by high-definition CCTV cameras monitored around the clock. Footage retained for 30 days." },
                { icon: ShieldCheck, title: "Biometric Access Control", desc: "Only authorised personnel enter the facility. No tailgating, no unauthorised access — your vehicle is in a controlled-access environment." },
                { icon: CheckCircle2, title: "Monthly Inspections", desc: "Our team conducts monthly visual inspections of all stored vehicles — checking for leaks, tyre condition, and any visible issues." },
                { icon: Star, title: "Free Insurance AED 5,000", desc: "Complimentary insurance coverage included with every storage booking. Extended coverage available for high-value vehicles." },
                { icon: Clock, title: "Flexible Terms", desc: "Month-to-month contracts with no penalty. Store for 1 month or 5 years. Discounts available for 3, 6, and 12-month commitments." },
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
                { step: "3", title: "Secure Storage", desc: "Your vehicle is placed in its climate-controlled bay. Our system logs it in with photos and condition notes." },
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
                { name: "Mohammed A.", location: "Business Bay", vehicle: "Harley Davidson", text: "Dubai summer heat makes riding impossible from June to September. SafeStorage is where my Harley lives for 4 months every year. Temperature-controlled, secure, and the team actually cares about the bikes. The battery maintenance service is worth every dirham.", rating: 5 },
                { name: "Sarah K.", location: "Jumeirah", vehicle: "Classic Mercedes 280SL", text: "My 1971 Mercedes is irreplaceable. When I found SafeStorage I visited in person before committing — the facility is immaculate. Climate-controlled bays, professional staff, and they understood exactly what a classic car needs. My car is in better shape now than when I dropped it off.", rating: 5 },
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
            <p className="text-xl text-white/90 mb-8">Get a free quote in 2 minutes. Cars from AED 899/month. No commitment required.</p>
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
