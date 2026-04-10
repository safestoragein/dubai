import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Cpu, CheckCircle2, Star, Phone, ArrowRight, Shield, Thermometer, Lock, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Electronics Storage Dubai — Climate-Controlled Tech & Gadget Storage | SafeStorage",
  description: "Safe, climate-controlled electronics storage in Dubai. Protect laptops, TVs, gaming gear, servers and tech equipment from Dubai's extreme heat and humidity. From AED 199/month. Free pickup.",
  keywords: "electronics storage dubai, laptop storage dubai, TV storage dubai, tech storage dubai, gadget storage dubai, server storage dubai, climate controlled electronics storage, gaming equipment storage dubai",
  openGraph: {
    title: "Electronics Storage Dubai — Protect Your Tech from Dubai's Heat | SafeStorage",
    description: "Dubai's extreme heat destroys electronics. Climate-controlled storage from AED 199/month. Protect laptops, TVs, servers & gaming gear. Free pickup included.",
    url: "https://safestorage.ae/electronics-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/electronics-storage" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Electronics Storage Dubai",
    description: "Climate-controlled electronics and technology storage in Dubai. Safe storage for laptops, TVs, servers, gaming equipment and sensitive tech items protected from heat and humidity.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/electronics-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Electronics Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/electronics-storage#webpage",
    name: "Electronics Storage Dubai — Climate-Controlled Tech Storage",
    url: "https://safestorage.ae/electronics-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Electronics Storage Dubai", item: "https://safestorage.ae/electronics-storage" },
    ],
  },
]

const electronicsRisks = [
  { temp: "Above 35°C", risk: "Lithium batteries begin permanent capacity loss. Most laptops throttle or shut down entirely above 35°C ambient temperature." },
  { temp: "Above 45°C", risk: "Hard drives experience head crashes as metal components expand. SSD NAND cells degrade faster reducing lifespan by 30-50%." },
  { temp: "Above 50°C", risk: "LCD screens develop permanent discolouration and pixel damage. Capacitors in power supplies can rupture." },
  { temp: "Above 60°C", risk: "Circuit boards delaminate. Solder joints crack due to thermal expansion. Permanent component damage likely." },
  { temp: "High Humidity (>70% RH)", risk: "Condensation forms on circuit boards. Oxidation destroys copper traces. Mould grows on organic components." },
  { temp: "Rapid Temp Changes", risk: "Moving from AC to 48°C Dubai heat causes condensation inside devices — the same effect as moving a cold glass to a hot day." },
]

export default function ElectronicsStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" /> Electronics Storage Specialists
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Electronics Storage Dubai — Climate-Controlled Protection for Your Tech</h1>
              <p className="text-xl text-white/85 mb-8">Dubai's 48°C summer heat is the number-one killer of electronics in storage. At SafeStorage Dubai, our climate-controlled units maintain 18-24°C year-round — protecting your laptops, TVs, servers, gaming equipment and sensitive tech from heat, humidity, and dust.</p>
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
                { stat: "18–24°C", label: "Year-round temperature" },
                { stat: "45–55%", label: "Relative humidity maintained" },
                { stat: "24/7", label: "Climate monitoring" },
                { stat: "Free", label: "Pickup & delivery" },
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
            <h2 className="text-3xl font-bold text-dubai-navy mb-4">Why Dubai's Heat Destroys Electronics in Storage</h2>
            <p className="text-gray-600 mb-8 text-lg">Standard storage facilities in Dubai are essentially metal warehouses or converted industrial units. In summer, internal temperatures regularly exceed 55–65°C. Here's what happens to electronics at each temperature threshold:</p>
            <div className="space-y-4">
              {electronicsRisks.map((r) => (
                <div key={r.temp} className="flex gap-4 p-4 border border-red-100 rounded-xl bg-red-50/50">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-red-700">{r.temp}: </span>
                    <span className="text-gray-700">{r.risk}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-dubai-navy/5 border border-dubai-navy/20 rounded-xl p-6">
              <p className="text-dubai-navy font-medium">
                <strong>The SafeStorage difference:</strong> Our climate-controlled units never exceed 24°C — even during Dubai's peak summer months of June–September. Humidity is maintained at 45–55% RH, the optimal range for all electronics. Your equipment stores safely for months or years without degradation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Electronics We Store Safely</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: "Computing Equipment",
                  icon: "💻",
                  items: ["Laptops and desktop computers", "Servers and NAS units", "Monitors and displays", "External hard drives and SSDs", "Networking equipment (routers, switches)", "UPS and power equipment", "Printers and scanners", "Point-of-sale systems"],
                },
                {
                  category: "Consumer Electronics",
                  icon: "📺",
                  items: ["Flat-screen TVs (all sizes)", "Home theatre systems", "Gaming consoles (PS5, Xbox, Nintendo)", "Smart home devices", "Tablets and iPads", "Cameras and photography gear", "Drones and accessories", "Streaming devices and smart speakers"],
                },
                {
                  category: "Professional & Specialist Equipment",
                  icon: "🎛️",
                  items: ["DJ and audio equipment", "Professional audio/video gear", "Medical devices and diagnostic equipment", "Lab instruments and measurement tools", "CCTV and security systems", "Broadcast and production equipment", "Industrial control units", "Scientific instruments"],
                },
              ].map((cat) => (
                <div key={cat.category} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="text-xl font-bold text-dubai-navy mb-4">{cat.category}</h3>
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
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Our Electronics Storage Protection Standards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Thermometer, title: "Precise Climate Control", desc: "Temperature held at 18-24°C year-round. Humidity maintained at 45-55% RH. Continuous monitoring with automated alerts. Never exposed to Dubai summer extremes." },
                { icon: Shield, title: "Dust-Free Environment", desc: "HEPA-filtered air circulation keeps dust particles away from sensitive components. Dust is the second-biggest cause of electronics failure in storage after heat." },
                { icon: Lock, title: "Secure Individual Access", desc: "Biometric access control. CCTV coverage 24/7. Your electronics are stored in a dedicated, individually secured area — not mixed in open warehouse bays." },
                { icon: Cpu, title: "Anti-Static Handling", desc: "Our trained team uses anti-static procedures when handling circuit boards, storage media, and sensitive components. ESD (electrostatic discharge) can permanently damage electronics without leaving visible signs." },
                { icon: CheckCircle2, title: "Original Packaging Preferred", desc: "We recommend storing electronics in original packaging where possible. If you don't have it, we provide appropriate anti-static bags, foam padding and protective cartons at cost." },
                { icon: AlertTriangle, title: "Inventory Documentation", desc: "All electronics stored are photographed and documented with serial numbers where visible. You receive a digital copy. This supports insurance claims and ensures accountability." },
              ].map((f) => (
                <div key={f.title} className="bg-slate-50 rounded-xl p-6 border border-gray-200">
                  <f.icon className="w-10 h-10 text-dubai-gold mb-4" />
                  <h3 className="font-bold text-dubai-navy mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Who Stores Electronics with SafeStorage Dubai</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Expats Leaving Dubai", desc: "Taking 2 suitcases on the plane but leaving a laptop, gaming setup, and home theatre behind? Store safely in Dubai at a fraction of the shipping cost. Access or ship items internationally when you're ready." },
                { title: "Businesses Between Offices", desc: "Relocating offices, downsizing, or fitting out new premises? Store IT equipment, servers, monitors and peripherals safely while the new space is prepared. Avoid rushed decisions about what to keep vs dispose." },
                { title: "Renovation & Remodelling", desc: "Keeping electronics in a dusty Dubai villa renovation is risky. Dust from drilling and construction is as damaging as heat. Store your tech safely during the 2-4 month renovation window." },
                { title: "Seasonal Residents", desc: "Leaving Dubai for summer in Europe, India, or the UK? Don't leave expensive electronics in a hot apartment with the AC off. Short-term storage ensures they're in perfect condition when you return." },
                { title: "E-Commerce & Resellers", desc: "Storing a tech inventory for resale? Climate-controlled storage prevents stock degradation. Products stay in sellable condition — no warranty voids, no returns due to heat damage." },
                { title: "IT Asset Management", desc: "Companies with surplus IT equipment pending refresh, donation, or resale. Proper climate-controlled storage maintains equipment value and supports ESG/circular economy commitments." },
              ].map((u) => (
                <div key={u.title} className="flex gap-4 p-5 border border-gray-200 rounded-xl bg-white">
                  <CheckCircle2 className="w-6 h-6 text-dubai-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dubai-navy mb-2">{u.title}</h3>
                    <p className="text-gray-600 text-sm">{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Customer Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Ravi M.", location: "Business Bay", text: "Relocated from Dubai to Singapore for work. Had a full home office setup — 2 monitors, gaming PC, PS5, plus work servers. SafeStorage stored everything climate-controlled. 6 months later when I came back to collect, everything powered on perfectly. No heat damage, no dust. Worth every dirham.", rating: 5 },
                { name: "Chris B.", location: "JLT", text: "IT manager at a mid-size company. We needed to store 40+ laptops and servers during our office move. SafeStorage handled the inventory documentation, stored everything climate-controlled, and returned items on schedule. Everything accounted for and working. Professional service from start to finish.", rating: 5 },
                { name: "Aisha K.", location: "Mirdif", text: "Left Dubai for summer and came back to find my friend's place (where I left my TV and laptop) had AC failure during my trip. Everything was destroyed. Never again — this year I stored with SafeStorage. Came back to a perfectly working TV and laptop. The peace of mind alone is worth it.", rating: 5 },
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

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Electronics Storage FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "Do I need to prepare my electronics before storage?", a: "We recommend: (1) Power down all devices fully — not sleep mode. (2) Remove batteries from devices that allow it (remotes, detachable battery packs). (3) Back up important data to cloud before storage. (4) Use original packaging if available. (5) Label all cables with the device they belong to. We can advise further during pickup." },
                { q: "Can you store my gaming PC or desktop computer?", a: "Yes, desktop computers, gaming PCs, and towers are stored routinely. We recommend placing them upright (not on their side) in climate-controlled storage. If transported, we use appropriate anti-shock foam. Your graphics card, CPU and motherboard are safe in our temperature-controlled environment." },
                { q: "What temperature do you maintain for electronics?", a: "Our climate-controlled units maintain 18-24°C year-round, which is the optimal range recommended by IEEE and most electronics manufacturers for long-term storage. Humidity is maintained at 45-55% relative humidity to prevent condensation and oxidation." },
                { q: "Can I store a server or data centre equipment?", a: "Yes. We regularly store rack-mounted servers, NAS units, network switches, and UPS systems. For sensitive data equipment, we recommend you remove or encrypt drives before storage if you have data security requirements. We treat all storage contents with full confidentiality." },
                { q: "How long can electronics be safely stored?", a: "In our climate-controlled environment, electronics can be stored indefinitely. Manufacturers design equipment for 10-15 year lifespans in controlled conditions. The main risks to electronics in storage — heat, humidity and dust — are all eliminated in our facility. Batteries are the only component that degrade over time regardless of conditions; lithium batteries lose about 3-5% capacity per year even when stored perfectly." },
                { q: "Is my electronics storage insured?", a: "Basic coverage is included in all storage plans. For high-value electronics (servers, professional equipment, large collections), we can arrange extended coverage through our insurance partners — quoted based on declared value. Please declare accurate replacement values at intake." },
              ].map((faq) => (
                <details key={faq.q} className="border border-gray-200 rounded-xl p-6 group bg-white">
                  <summary className="font-semibold text-dubai-navy cursor-pointer list-none flex justify-between items-center">
                    {faq.q}<ArrowRight className="w-4 h-4 text-dubai-gold transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-dubai-navy text-white text-center">
          <div className="container px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Don't Let Dubai's Heat Destroy Your Electronics</h2>
            <p className="text-xl text-white/85 mb-8">Get a free quote for climate-controlled electronics storage. Free pickup available across Dubai — available 7 days a week.</p>
            <div className="flex flex-wrap gap-4 justify-center">
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
        </section>
      </div>
    </>
  )
}
