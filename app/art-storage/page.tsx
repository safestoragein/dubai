import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Shield, Star, Phone, CheckCircle2, Package, Camera, Lock, ArrowRight, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Art Storage Dubai — Secure Art Vaults",
  description: "Specialist art storage in Dubai for paintings, sculptures, antiques & collectibles. Secure vaults, photography on intake, white-glove handling. Call +971505773388.",
  keywords: "art storage dubai, artwork storage dubai, painting storage dubai, sculpture storage dubai, antique storage dubai, secure art storage, valuables storage dubai, gallery storage dubai",
  openGraph: {
    title: "Art Storage Dubai — Secure Vaults for Artwork & Valuables",
    description: "Specialist art storage in Dubai. Secure vaults, photography on intake, white-glove handling for paintings, sculptures & collectibles.",
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
    description: "Specialist secure art storage in Dubai for paintings, sculptures, antiques and high-value collectibles. Photography on intake, white-glove handling.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/art-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Art Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/art-storage#webpage",
    name: "Art Storage Dubai — Secure Vaults for Artwork & Valuables",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Art Storage Dubai — Secure Specialist Art Vaults</h1>
              <p className="text-xl text-white/85 mb-8">Your art collection deserves more than a standard storage unit. SafeStorage Dubai provides specialist secure storage for paintings, sculptures, antiques, Persian rugs, and high-value collectibles — with photography on intake and white-glove handling.</p>
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
            <h2 className="text-3xl font-bold text-dubai-navy mb-6">Why Fine Art Needs Specialist Storage</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Art and valuables are far too fragile and too valuable for a standard storage unit. Careless handling, poor packing, dust, light, pests, and theft are the everyday risks that damage collections &mdash; and each demands a specialist approach that general self-storage simply does not provide.</p>
                <div className="space-y-3">
                  {[
                    { item: "Oil paintings", risk: "Vulnerable to pressure, punctures, and surface scuffing. We store them vertically in padded slots, never stacked, and wrapped in archival materials that never touch the painted surface." },
                    { item: "Wood-framed artwork", risk: "Frames chip and joints loosen when knocked or stacked. We fit corner protectors and handle every piece with trained, two-person lifting." },
                    { item: "Photographs & prints", risk: "Fingerprints, dust, and light cause permanent marks and fading. We handle with cotton gloves, interleave with acid-free tissue, and store flat in archival boxes away from light." },
                    { item: "Sculptures & ceramics", risk: "Edge chips and impact cracks are the main risks. Each piece is cradled on bespoke foam supports and wrapped individually to prevent any movement." },
                    { item: "Persian & Oriental rugs", risk: "Creasing, crushing, and moths ruin fine rugs. We roll them on archival tubes rather than folding, and keep them dust-protected and off the floor." },
                    { item: "Antique furniture", risk: "Original finishes and gilding are easily scuffed. We wrap with acid-free tissue, pad all surfaces, and photograph condition on intake." },
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
                { icon: Package, title: "Dust-Protected Dedicated Storage", desc: "Each collection is stored in a clean, enclosed indoor vault on dedicated racking — kept dust-protected, off the floor, and away from light, never mixed into open warehouse bays." },
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
                { title: "Estate & Probate", desc: "Families managing estate contents who need secure storage while legal processes are completed and items are catalogued for sale." },
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
                { q: "Do you photograph items before storage?", a: "Yes, every item is photographed in detail before storage begins. We document condition, dimensions, and any pre-existing damage. Both parties sign the condition report. You receive a digital copy. This protects both you and us." },
                { q: "How do you pack paintings for storage?", a: "Large paintings are wrapped in acid-free tissue, then in polyethylene foam, and stored vertically in dedicated slots — never stacked horizontally unless specifically padded for it. Framed works have corner protectors. Works on canvas without frames are handled with particular care to avoid any pressure on the canvas surface." },
                { q: "Can you arrange art transportation?", a: "We do not operate an art courier service, but we work with trusted specialist art transportation companies in Dubai and can recommend or facilitate connections. International art shipping for major works should always use an accredited fine art shipper." },
                { q: "How much does art storage cost?", a: "Art storage at SafeStorage starts from 12.60 AED / sqft (VAT-inclusive), based on the volume and type of items stored. A full collection requires an in-person consultation and quotation. Please call us at +971505773388 to discuss your specific requirements." },
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

        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-8">About Our Art Storage Service in Dubai</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-12">
              <p>Our facility serves clients across all major Dubai districts including DIFC, Downtown Dubai, Palm Jumeirah, Emirates Hills, Dubai Hills, and Jumeirah. We work with private collectors, commercial galleries, interior designers, auction houses, corporate clients, and individuals managing estate contents. Whether you need short-term storage during a villa renovation or long-term archive-quality storage for a collection not currently on display, SafeStorage Dubai provides the environment, security, and professional handling that fine art requires. Call us at +971505773388 for a free, confidential consultation.</p>
            </div>

            <h2 className="text-3xl font-bold text-dubai-navy mb-8">Comprehensive Art Storage FAQs</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What can I store in art storage at SafeStorage Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai&apos;s art storage service accommodates a wide range of artworks and valuables including original oil paintings, acrylic and watercolour works, limited edition prints and photographs, sculptures in bronze, marble, ceramic, resin and wood, antique furniture and decorative objects, Persian and Oriental rugs, wine collections, designer furniture pieces, musical instruments including pianos and string instruments, numismatic and philatelic collections, sports memorabilia, and high-value collectibles of all kinds. We handle each category with specific packing and positioning standards tailored to the material and fragility of the items. If you are unsure whether a specific item qualifies, call us at +971505773388 and we will advise on suitability and handling requirements before your visit.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How is art protected while it is in storage?</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What packing and racking standards are used in the art vault?</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How are sculptures stored to prevent damage?</h3>
                <p className="text-gray-700 leading-relaxed">Sculptures require customised storage solutions depending on their material, weight, dimensions, and fragility. Bronze and stone sculptures are placed on heavy-duty padded platforms or custom foam cradles that distribute weight evenly and prevent contact with any hard surface. Ceramic and glazed pieces are individually wrapped in acid-free tissue and bubble wrap before being positioned in padded compartments that prevent movement during vibration. Resin and lightweight sculptures may be suspended or cradled depending on their centre of gravity. Our team assesses each sculpture at intake and designs the appropriate support structure. For extremely fragile or high-value pieces, we can commission bespoke wooden crates lined with Ethafoam &mdash; the same material used by leading international art shippers.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Can I store antiques in your art vault?</h3>
                <p className="text-gray-700 leading-relaxed">Yes, antique furniture, decorative objects, silverware, ceramics, clocks, and historical artefacts are all well-suited to our specialist art storage. Antiques require particular care because their original glues, varnishes, and gilding are delicate and easily scuffed or chipped through careless handling and poor packing. We handle all antiques with cotton gloves and assess the appropriate packing material &mdash; acid-free tissue, archival foam, and custom crating &mdash; based on each item&apos;s specific needs, then store them on dedicated racking, dust-protected and away from light. We photograph each piece comprehensively before storage so you have an accurate visual condition record.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How is packing done for artworks entering storage?</h3>
                <p className="text-gray-700 leading-relaxed">All artworks are packed using archival-grade, acid-free materials that will not off-gas chemicals or cause discolouration over time. Paintings are wrapped in glassine paper (never bubble wrap directly against the painted surface), then in polyethylene foam sheeting, and stored vertically in padded slots or custom racks. Framed works receive corner protectors before wrapping. Works on paper &mdash; prints, drawings, photographs &mdash; are interleaved with acid-free tissue and stored flat in archival boxes or folio drawers. Textiles and rugs are rolled on acid-free tubes. If you bring items already professionally crated or boxed, we accept them as-is after a photographic record of the outer packaging condition is made for our records.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What is white-glove handling and why does it matter for art storage?</h3>
                <p className="text-gray-700 leading-relaxed">White-glove handling is a professional standard for the movement and care of high-value, fragile, or irreplaceable items. The term comes from the cotton gloves worn during handling to prevent skin oils, moisture, and particulates from transferring to artworks &mdash; oil from fingerprints alone can cause permanent damage to unvarnished canvases, photographs, and paper-based works over time. At SafeStorage Dubai, white-glove handling means our team uses appropriate gloves for each material, moves larger pieces with at least two trained personnel, uses padded dollies and lifting equipment rather than manual carry wherever possible, and never stacks artworks without adequate protective separation. This standard of care is what distinguishes specialist art storage from general storage facilities.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Can I add items to my art storage after the initial intake?</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How do I retrieve a specific piece from my stored collection?</h3>
                <p className="text-gray-700 leading-relaxed">To retrieve a specific artwork, contact us by phone or email with the piece&apos;s reference from your intake condition report or inventory list. Our team locates the item, prepares it for your visit, and has it ready for collection within an agreed timeframe &mdash; typically the same or next business day for standard requests. For pieces that require decanting from crates or complex unpacking, we may need slightly more advance notice. You can arrange to collect the item yourself, or we can coordinate specialist art courier delivery to your address in Dubai or internationally. All retrievals are documented, and the relevant entry is updated in your storage inventory record accordingly.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How are works on paper, canvas, and textiles packed?</h3>
                <p className="text-gray-700 leading-relaxed">Paper-based and textile works are the most delicate items we handle, so they receive the most careful packing. Works on paper &mdash; prints, drawings, and photographs &mdash; are interleaved with acid-free tissue and stored flat in archival boxes or folio drawers, never folded or leaned. Canvases are wrapped in glassine (never bubble wrap directly against the surface), then in polyethylene foam, and stored vertically in padded slots. Textiles and rugs are rolled on acid-free tubes rather than folded, which prevents permanent creasing. All of these items are kept dust-protected, off the floor, and away from light, and are handled only with cotton gloves. Detailed intake photography and a condition report document the state of each piece for your records.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What happens if damage occurs to my artwork while in storage?</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How long can I store artwork at SafeStorage Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">There is no maximum storage duration &mdash; you can store artworks for as long as required. Our storage contracts are flexible, running month-to-month with no long-term lock-in period. Many clients store collections for years, particularly expats who move between countries and prefer not to ship valuable works internationally, estate collections awaiting probate resolution, or galleries archiving works not currently on display. Long-term storage customers benefit from archival packing, dedicated racking, and secure controlled access that protect artworks indefinitely. For storage periods of three months or more, we offer discounted rates. Call us at +971505773388 to discuss your timeline and we will recommend the most cost-effective arrangement for your specific situation.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
