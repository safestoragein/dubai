import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Shield, Star, Phone, CheckCircle2, Thermometer, Camera, Lock, ArrowRight, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Art Storage Dubai — Climate-Controlled Vaults for Artwork & Valuables | SafeStorage",
  description: "Specialist art storage in Dubai for paintings, sculptures, antiques & collectibles. Precise climate control, photography on intake, white-glove handling. Call +971505773388.",
  keywords: "art storage dubai, artwork storage dubai, painting storage dubai, sculpture storage dubai, antique storage dubai, climate controlled art storage, valuables storage dubai, gallery storage dubai",
  openGraph: {
    title: "Art Storage Dubai — Specialist Climate-Controlled Vaults | SafeStorage",
    description: "Museum-grade art storage in Dubai. Precise temperature and humidity control, photography on intake, white-glove handling for paintings, sculptures & collectibles.",
    url: "https://safestorage.ae/art-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/art-storage" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Art & Valuables Storage Dubai",
    description: "Specialist climate-controlled art storage in Dubai for paintings, sculptures, antiques and high-value collectibles. Photography on intake, white-glove handling.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/art-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Art Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/art-storage#webpage",
    name: "Art Storage Dubai — Climate-Controlled Vaults for Artwork & Valuables",
    url: "https://safestorage.ae/art-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Art Storage Dubai", item: "https://safestorage.ae/art-storage" },
    ],
  },
]

export default function ArtStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" /> Specialist Art Storage
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Art Storage Dubai — Museum-Grade Climate-Controlled Vaults</h1>
              <p className="text-xl text-white/85 mb-8">Your art collection deserves more than a standard storage unit. SafeStorage Dubai provides specialist climate-controlled storage for paintings, sculptures, antiques, Persian rugs, and high-value collectibles — with photography on intake and white-glove handling.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Request a Consultation</Button>
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
            <h2 className="text-3xl font-bold text-dubai-navy mb-6">Why Dubai's Climate is Art's Greatest Threat</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Dubai's environment is uniquely hostile to art and valuables. With summer temperatures exceeding 48°C and humidity swinging from 5% (desert winter) to 95% (summer coastal), artworks experience extreme stress in uncontrolled environments.</p>
                <div className="space-y-3">
                  {[
                    { item: "Oil paintings", risk: "Canvas warps and cracks when humidity fluctuates beyond 45-55% RH. Oil layers separate from the ground in sustained high heat." },
                    { item: "Wood-framed artwork", risk: "Timber joints expand and contract with humidity changes, causing structural damage and paint loss in as little as one season." },
                    { item: "Photographs & prints", risk: "UV light (extreme in Dubai) causes fading within months. High humidity causes adhesion failure and mould." },
                    { item: "Sculptures & ceramics", risk: "Thermal expansion cracks glazed ceramics. Metal sculptures develop patina and corrosion from salty Gulf humidity." },
                    { item: "Persian & Oriental rugs", risk: "Silk fibres degrade rapidly above 65% humidity. Wool rugs attract moths in warm, unventilated environments." },
                    { item: "Antique furniture", risk: "Veneer separates, wood splits, and brass fittings corrode in Dubai's extreme climate variation." },
                  ].map((r) => (
                    <div key={r.item} className="border-l-4 border-dubai-gold pl-4">
                      <span className="font-semibold text-dubai-navy">{r.item}: </span>
                      <span>{r.risk}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-4">What We Store</h3>
                <div className="space-y-2">
                  {[
                    "Original paintings (oil, acrylic, watercolour)",
                    "Limited edition prints and photographs",
                    "Sculptures (bronze, marble, ceramic, resin)",
                    "Antique furniture and decorative objects",
                    "Persian, Turkish and Oriental rugs",
                    "Wine and spirits collections",
                    "Jewellery and precious metals (arranged)",
                    "Designer furniture (Louis Vuitton, Fendi Casa, etc.)",
                    "Photography equipment and camera collections",
                    "Numismatic and philatelic collections",
                    "Musical instruments (pianos, string instruments)",
                    "Sports memorabilia and collectibles",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Our Art Storage Standards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Thermometer, title: "Precise Climate Control", desc: "Temperature maintained at 18-22°C with 45-55% relative humidity year-round. Monitored 24/7 with automated alerts if thresholds are exceeded." },
                { icon: Camera, title: "Photography on Intake", desc: "Every item photographed in detail before storage. Condition report signed by both parties. You receive digital copies for your records and insurance." },
                { icon: Lock, title: "Individual Access Control", desc: "Your art stored in a dedicated, locked area. Biometric access control means only authorised personnel ever touch your collection." },
                { icon: Shield, title: "Extended Insurance Options", desc: "Basic coverage up to AED 5,000 included. High-value art coverage available through our insurance partners — quoted based on declared value." },
                { icon: Award, title: "White-Glove Handling", desc: "Our trained team uses cotton gloves, acid-free tissue, custom crating, and appropriate packing for each artwork type. No amateur handling." },
                { icon: CheckCircle2, title: "Acid-Free Storage Materials", desc: "All packing materials are archival quality — acid-free tissue, polyethylene foam, and UV-resistant wrapping where appropriate." },
              ].map((f) => (
                <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <f.icon className="w-10 h-10 text-dubai-gold mb-4" />
                  <h3 className="font-bold text-dubai-navy mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Who Uses Our Art Storage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Private Collectors", desc: "Dubai residents with valuable art collections who travel frequently, renovate, or need secure off-site storage for items not on display." },
                { title: "Art Galleries", desc: "Galleries in Alserkal Avenue, DIFC, and across Dubai storing inventory between exhibitions, during gallery renovations, or for consignment works." },
                { title: "Interior Designers", desc: "Design firms storing client pieces during project delivery, awaiting installation, or holding inventory for upcoming projects." },
                { title: "Corporate Art Collections", desc: "Companies storing office art collections during renovation, fit-out, or between premises. Corporate art is a significant investment requiring proper care." },
                { title: "Expats with Valuable Items", desc: "Expats leaving Dubai temporarily or permanently who own artworks too valuable to risk in international shipping but not worth selling at local prices." },
                { title: "Estate & Probate", desc: "Families managing estate contents who need secure, climate-controlled storage while legal processes are completed and items are catalogued for sale." },
              ].map((u) => (
                <div key={u.title} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-dubai-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dubai-navy mb-1">{u.title}</h3>
                    <p className="text-gray-600 text-sm">{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Nadia K.", location: "DIFC", role: "Gallery Owner", text: "As a gallery owner in DIFC, I need storage I can trust completely. SafeStorage stores our between-exhibition inventory with the care our artists expect. The photography on intake is a professional touch that gives our artist clients confidence their works are in good hands.", rating: 5 },
                { name: "David W.", location: "Palm Jumeirah", role: "Private Collector", text: "I have 40+ artworks stored with SafeStorage while my Palm villa is being renovated. The condition reports, photo updates, and the fact that they use acid-free materials — this is professional-level service. My most valuable pieces cost more than most people's apartments. I wouldn't store them anywhere else.", rating: 5 },
                { name: "Fatima Al-H.", location: "Emirates Hills", role: "Interior Designer", text: "I hold client art pieces for weeks or months between project phases. SafeStorage is my reliable partner — they handle the pieces with the care I'd expect from a museum handler. Clients are always impressed when I tell them where their art is stored.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex mb-3">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-dubai-gold text-dubai-gold" />)}</div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div className="font-bold text-dubai-navy">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location} · {t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Art Storage FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "Do you store artworks worth over AED 500,000?", a: "Yes. We work with high-net-worth collectors and corporate clients with significant collections. For items above AED 5,000 in declared value, we can arrange comprehensive insurance coverage through our specialist insurance partners. Please declare values accurately at intake — insurance coverage depends on the declared amount." },
                { q: "Do you photograph items before storage?", a: "Yes, every item is photographed in detail before storage begins. We document condition, dimensions, and any pre-existing damage. Both parties sign the condition report. You receive a digital copy. This protects both you and us." },
                { q: "How do you pack paintings for storage?", a: "Large paintings are wrapped in acid-free tissue, then in polyethylene foam, and stored vertically in dedicated slots — never stacked horizontally unless specifically padded for it. Framed works have corner protectors. Works on canvas without frames are handled with particular care to avoid any pressure on the canvas surface." },
                { q: "Can you arrange art transportation?", a: "We do not operate an art courier service, but we work with trusted specialist art transportation companies in Dubai and can recommend or facilitate connections. International art shipping for major works should always use an accredited fine art shipper." },
                { q: "What temperature and humidity do you maintain?", a: "Our art storage areas are maintained at 18-22°C with 45-55% relative humidity year-round. These are the internationally accepted standards for fine art storage (as recommended by the American Institute for Conservation). Temperature and humidity are monitored automatically 24/7." },
                { q: "How much does art storage cost?", a: "Art storage pricing depends on the volume and type of items. A single painting may start from AED 150-300/month. A full collection requires an in-person consultation and quotation. Please call us at +971505773388 to discuss your specific requirements." },
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

        <section className="py-16 bg-dubai-navy text-white text-center">
          <div className="container px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Your Art Deserves Expert Care</h2>
            <p className="text-xl text-white/85 mb-8">Book a consultation to discuss your collection's specific requirements. All art storage consultations are free and confidential.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Request a Consultation</Button>
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
