import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, ShieldCheck, Truck, Clock, FileBox, Headphones, Star, Users, Award, ArrowRight } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Business Storage Dubai — Inventory & Office Storage",
  description:
    "Business storage solutions for Dubai companies — store excess inventory, office equipment, trade show materials, and retail stock. Flexible monthly contracts, pickup & delivery on demand. Call +971505773388.",
  keywords:
    "business storage dubai companies, inventory storage dubai warehouse alternative, office equipment storage dubai, commercial storage dubai SME, stock storage dubai retail, trade show storage dubai, b2b storage dubai",
  openGraph: {
    title: "Business Storage Dubai — Inventory & Office Storage",
    description: "Flexible storage for Dubai businesses — inventory, office equipment & stock. Monthly contracts, on-demand delivery. Call +971505773388.",
    url: "https://safestorage.ae/business-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/business-storage",
  },
}

const features = [
  {
    icon: FileBox,
    title: "Document Archiving",
    description: "Secure storage for business records and important documents",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Round-the-clock surveillance and access control",
  },
  {
    icon: Truck,
    title: "Hassle-Free Pickup & Delivery",
    description: "We collect and deliver your items at your convenience",
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description: "Monthly contracts with no long-term commitments",
  },
  {
    icon: Building2,
    title: "Climate Controlled",
    description: "Temperature-regulated units to protect sensitive items",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager for your business needs",
  },
]

const businessStorageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Storage Dubai',
    description: 'Business storage solutions for Dubai companies — store excess inventory, office equipment, trade show materials, and retail stock. Flexible monthly contracts, pickup & delivery on demand.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/business-storage',
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Business Storage',
    offers: { '@type': 'Offer', priceCurrency: 'AED', price: '12.6' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/business-storage#webpage',
    name: 'Business Storage Dubai | Inventory & Office Storage for Companies',
    description: 'Flexible storage for Dubai businesses — inventory, office equipment & stock. Monthly contracts, on-demand delivery.',
    url: 'https://safestorage.ae/business-storage',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Business Storage', item: 'https://safestorage.ae/business-storage' },
    ],
  },
]

export default function BusinessStoragePage() {
  return (
    <>
    <SchemaScript schema={businessStorageSchemas} />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dubai-navy to-dubai-midnight py-24 md:py-32">
        <div className="absolute inset-0 bg-dubai-pattern opacity-5"></div>
        <div className="container px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-medium">4.9/5 (6700+ Reviews Globally)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-dubai-gold" />
                <span className="text-white text-sm font-medium">Trusted by 500+ Corporate Clients Globally</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Business Storage <span className="text-dubai-gold">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Secure, flexible storage for your business documents, inventory, and equipment.
              Focus on growing your business while we handle the storage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-8 py-6"
                asChild
              >
                <Link href="/get-quote">
                  Get Your Free Quote in 2 Minutes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-dubai-gold text-dubai-gold hover:bg-dubai-gold hover:text-white text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+971505773388">Call: 050-577-3388</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Why Choose SafeStorage for Business?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across Dubai for secure and reliable storage solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-100 hover:border-dubai-gold/30 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-dubai-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-dubai-gold" />
                </div>
                <h3 className="text-xl font-semibold text-dubai-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-dubai-navy text-white">
        <div className="container px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Simplify Your Business Storage?
            </h2>
            <p className="text-white/80 mb-8">
              Join 500+ global businesses who trust SafeStorage Dubai. Get a customized quote in just 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-10 py-6"
                asChild
              >
                <Link href="/get-quote" className="group">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-black border-white hover:bg-gray-100 text-lg px-10 py-6"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Business Storage Solutions for Dubai Companies</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage provides flexible, secure business storage for companies across Dubai — from startups
            and SMEs to large corporations. Our commercial storage solutions help businesses reduce overhead
            costs by eliminating the need for expensive warehouse space while keeping inventory, equipment,
            and documents accessible on demand.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Office Clearance &amp; Furniture Storage</h3>
              <p className="text-gray-700 mb-3">
                When businesses in Dubai downsize, relocate, or renovate their offices, they need a fast and
                reliable solution for surplus furniture, equipment, and fixtures. SafeStorage provides
                same-day office clearance pickups, with our team handling all the dismantling, packing, and
                transportation. Items are stored in climate-controlled units and can be retrieved when
                the new office is ready.
              </p>
              <p className="text-gray-700">
                Our service is particularly popular with businesses in Business Bay, DIFC, Downtown Dubai,
                and Dubai Internet City where office space is expensive and storing excess assets on-site
                is not practical.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Retail Inventory &amp; Seasonal Stock Storage</h3>
              <p className="text-gray-700 mb-3">
                Retailers in Dubai face significant demand fluctuations — peak periods during Ramadan, Dubai
                Shopping Festival, and the holiday season require substantial stock increases, while slower
                periods leave businesses with excess inventory taking up expensive retail floor space.
              </p>
              <p className="text-gray-700">
                SafeStorage&apos;s scalable storage model lets retailers store overflow stock in our facility
                during quiet periods and scale back when demand picks up. Our same-day delivery service
                ensures your retail location can be restocked within hours whenever needed.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Business Storage Plans &amp; Pricing</h3>
            <p className="text-gray-700 mb-4">
              Business storage plans at SafeStorage start from 12.6 AED / Sqft (VAT-inclusive). Medium units (50–100 sq ft)
              suit a small office clearance or modest inventory, while larger units (100–300+ sq ft) are
              available for full office contents, warehouse overflow, or bulk retail stock.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>No minimum contract:</strong> Month-to-month flexibility allows businesses to scale storage up or down</li>
              <li>• <strong>Business account manager:</strong> Dedicated point of contact for scheduling pickups, deliveries, and additional requirements</li>
              <li>• <strong>Bulk discounts:</strong> Multi-unit bookings and annual prepayments receive preferential rates</li>
              <li>• <strong>Document archiving:</strong> Add-on service for businesses needing compliant records storage alongside physical inventory</li>
              <li>• <strong>Hassle-free pickup &amp; delivery:</strong> All business plans include complimentary pickup and delivery across Dubai</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Industries We Serve in Dubai</h3>
            <div className="grid md:grid-cols-3 gap-3 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li>• Retail and fashion brands</li>
                <li>• E-commerce and online sellers</li>
                <li>• Food and beverage distributors</li>
              </ul>
              <ul className="space-y-1">
                <li>• Technology and electronics companies</li>
                <li>• Healthcare and pharmaceutical</li>
                <li>• Construction and engineering</li>
              </ul>
              <ul className="space-y-1">
                <li>• Event management companies</li>
                <li>• Real estate and property management</li>
                <li>• Media and production agencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Business Storage Solutions Dubai — Full Guide for Companies</h2>
          <p className="text-lg text-gray-700 mb-8">
            Business storage in Dubai is not a niche service — it is a practical operational tool used by thousands of companies across every industry sector. As Dubai&apos;s commercial real estate market continues to rank among the most expensive in the world, businesses are increasingly looking for ways to reduce the footprint of their physical office and warehouse space without compromising operational efficiency. SafeStorage provides a flexible, scalable alternative to traditional warehousing that allows Dubai businesses to pay only for the space they actually need, month by month.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Office Furniture Storage During Renovation</h3>
              <p className="text-gray-700 mb-4">
                Office renovation is one of the most common triggers for business storage in Dubai. Companies upgrading or refurbishing their offices in Business Bay, DIFC, Downtown Dubai, or JLT face the challenge of temporarily relocating furniture, IT equipment, filing cabinets, and office supplies while contractors work on the space. Storing these items at a serviced offsite facility is far more practical and cost-effective than renting temporary alternative office space.
              </p>
              <p className="text-gray-700">
                SafeStorage offers same-day or next-day office clearance services. Our team arrives at your office with the appropriate packing materials, dismantles and wraps furniture, loads everything into climate-controlled vehicles, and transports it to our facility. When your renovation is complete — whether in 2 weeks or 6 months — we return everything to your new office on a scheduled basis. Delivery can be coordinated to arrive floor by floor or room by room to match your office fit-out schedule.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Inventory Overflow &amp; Warehouse Alternative</h3>
              <p className="text-gray-700 mb-4">
                Many Dubai businesses reach a point where they have more inventory than their current space can comfortably accommodate, but not enough to justify the cost of a full warehouse lease. This is particularly common for retail businesses managing seasonal stock peaks, e-commerce sellers scaling their operations, and distributors handling growing product catalogues.
              </p>
              <p className="text-gray-700">
                SafeStorage&apos;s business storage units serve as an efficient inventory overflow solution. Unlike a traditional warehouse, there is no minimum lease period, no DEWA connection required, and no fit-out costs. Storage space can be increased for peak periods (Ramadan, back-to-school, Q4 festive season) and reduced again in quieter months. Same-day delivery ensures restocking from our facility to your retail location can happen within hours whenever needed.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Retail Stock Storage in Dubai</h3>
            <p className="text-gray-700 mb-4">
              Retail businesses in Dubai face a structural challenge: prime retail locations in malls and high streets command very high rents, so every square metre of floor space must generate revenue. Storing seasonal stock, display fixtures, or overflow inventory in expensive retail floor space is not a viable option. Backroom storage space in Dubai retail units is typically minimal.
            </p>
            <p className="text-gray-700 mb-4">
              SafeStorage provides Dubai retailers with a practical alternative. Seasonal collections, promotional display materials, trade show stands, excess packaging, and slow-moving stock are stored at our climate-controlled facility. When you need items — for a promotional campaign, seasonal changeover, or stock replenishment — our team delivers to your store or mall loading bay on the same day or next day. This model is used by fashion retailers, home décor brands, electronics sellers, and luxury goods companies across Dubai.
            </p>
            <p className="text-gray-700">
              For retailers with multiple Dubai locations, SafeStorage can serve as a central distribution point, consolidating stock delivery from suppliers and dispatching to individual store locations as needed. This reduces direct-to-store delivery costs and gives head office teams better visibility and control over stock allocation.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Seasonal Stock Storage for Dubai Businesses</h3>
            <p className="text-gray-700 mb-4">
              Dubai&apos;s retail calendar is driven by distinct seasonal events including Ramadan, Eid Al Fitr, Eid Al Adha, Dubai Shopping Festival, White Friday, National Day, and the back-to-school period. Each of these events creates a predictable surge in demand for specific product categories, requiring businesses to pre-stock inventory weeks or months in advance.
            </p>
            <p className="text-gray-700">
              Storing pre-season stock in a SafeStorage unit is significantly cheaper than paying for additional retail or warehouse space. Our business clients typically increase their storage allocation by 50–100% in the 4–6 weeks before major shopping events and return to their standard allocation within 2–3 weeks after the event. The flexibility to scale without any penalty or notice requirement makes SafeStorage a genuinely useful tool for managing seasonal stock cycles.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8">Frequently Asked Questions — Business Storage Dubai</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">1. What is the difference between business storage and a warehouse lease in Dubai?</h3>
              <p className="text-gray-700">A warehouse lease in Dubai typically requires a minimum 1-year commitment, upfront rental payments (often 1–4 cheques), DEWA deposit for utilities, and significant fit-out investment to make the space usable. Business storage at SafeStorage has no minimum contract, no deposit, no DEWA costs, and no fit-out requirement. You pay monthly for the space you use and can adjust your allocation with 30 days&apos; notice. For most SMEs and growing businesses, this flexibility represents a saving of AED 20,000–100,000 per year compared to maintaining a standalone warehouse.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">2. Can SafeStorage handle large office clearance jobs in Dubai?</h3>
              <p className="text-gray-700">Yes. We have handled office clearances ranging from single meeting rooms to entire floors of commercial office buildings. Our team can mobilise within 24–48 hours for planned clearances, or same-day for urgent requirements. We provide all necessary packing materials, dismantle and wrap furniture, photograph and inventory all items, load onto our vehicles, and transport to our facility. For large clearances, we can deploy multiple teams and vehicles simultaneously to complete the job efficiently.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">3. How quickly can business clients access or retrieve stored items?</h3>
              <p className="text-gray-700">Business clients with inventory storage can arrange same-day delivery for orders received before 12 PM. Standard retrieval and delivery is available next business day for orders placed by 5 PM. For businesses with high-frequency retrieval needs (such as e-commerce sellers requiring daily dispatches), we can set up a scheduled daily collection arrangement. Your dedicated account manager coordinates all retrieval requests and ensures items are ready at the agreed time.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">4. Is climate control important for business inventory storage?</h3>
              <p className="text-gray-700">For many product categories, climate control is essential rather than optional. Electronics and IT equipment can suffer permanent damage when stored above 35°C. Cosmetics and health supplements can degrade, separate, or lose efficacy in heat. Fashion items can develop mould in humid conditions. Paper and cardboard packaging can warp and become unusable. Rubber and silicone components can crack. SafeStorage&apos;s 18–22°C climate-controlled units protect your inventory investment from Dubai&apos;s extreme summer heat and ensure products remain in sellable condition.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">5. Can SafeStorage store trade show and exhibition materials?</h3>
              <p className="text-gray-700">Yes. Dubai hosts numerous major trade shows and exhibitions year-round at DWTC, Dubai Exhibition Centre, and other venues. Managing trade show materials — custom display stands, banner systems, demo units, branded fixtures, promotional products — between events is a common challenge for exhibiting companies. SafeStorage provides a convenient storage solution for these materials. We can store complete exhibition setups and deliver to the venue loading bay on the day before your event, then collect and return to storage after the show closes.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">6. How is business storage priced in Dubai?</h3>
              <p className="text-gray-700">Business storage at SafeStorage starts from 12.6 AED / Sqft (VAT-inclusive), based on the unit size required. Medium units (50–100 sq ft) are suitable for small office clearances, modest inventory, or document archives. Large units (100–200 sq ft) accommodate full office contents or substantial inventory volumes. Extra-large units (200–400+ sq ft) suit larger commercial storage needs. All plans include hassle-free pickup and delivery across Dubai, climate control, 24/7 security, and a dedicated account manager.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">7. Can SafeStorage help with document archiving as part of a business storage plan?</h3>
              <p className="text-gray-700">Yes. Many business storage clients add document archiving services to their account alongside physical inventory storage. Business documents — financial records, contracts, HR files, legal correspondence — are stored in our dedicated document archival section with barcoded box tracking, indexed retrieval, and compliance-appropriate security controls. This add-on service integrates seamlessly with your business storage account under a single monthly invoice and single account manager.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">8. Do you offer storage for pharmaceutical and healthcare businesses?</h3>
              <p className="text-gray-700">Yes. Healthcare and pharmaceutical businesses in Dubai have specific storage requirements including temperature control, cleanliness, access security, and regulatory compliance. SafeStorage&apos;s climate-controlled units (18–22°C) are suitable for pharmaceutical samples, medical devices, healthcare marketing materials, and general healthcare consumables. For cold-chain pharmaceutical products requiring refrigeration (2–8°C), please contact us to discuss options — requirements vary by product category and Dubai Health Authority classification.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">9. How secure is business storage at SafeStorage?</h3>
              <p className="text-gray-700">Business storage security at SafeStorage operates at enterprise grade. The facility is protected by 24/7 HD CCTV covering all areas, biometric access control limiting entry to authorised personnel, individual unit locks and alarms, fire detection and suppression systems, perimeter security, and on-site security staff. For business clients storing high-value inventory, we offer additional security enhancements including dual-factor authentication, additional camera coverage, and alarm system integration with your business security team. All access events are logged and available for audit.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">10. Can multiple employees from our company access our storage unit?</h3>
              <p className="text-gray-700">Yes. Business accounts allow multiple authorised users to access the storage unit or liaise with our operations team. Each authorised employee is registered in our access control system with individual biometric credentials. All access events are logged with time-stamps for your records. You can add or remove authorised users at any time by notifying your account manager. For businesses using our pick-and-pack or delivery coordination services, multiple team members can submit requests through our portal.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">11. Is there a minimum contract period for business storage in Dubai?</h3>
              <p className="text-gray-700">No. SafeStorage offers month-to-month business storage contracts with no minimum commitment. You can store for as short as 1 month or as long as you need. Cancel with 30 days&apos; written notice (via email or WhatsApp). Businesses that commit to longer periods (3, 6, or 12 months in advance) qualify for discounts of 10–20%. There are no setup fees, no exit fees, and no penalties for adjusting your storage size during the contract period.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">12. Can I store event management equipment at SafeStorage between events?</h3>
              <p className="text-gray-700">Yes. Event management companies are frequent users of SafeStorage. Between events, companies need to store staging equipment, audio-visual gear, lighting rigs, furniture, props, branded materials, and event logistics supplies. These items are often bulky, expensive, and not needed on a continuous basis — making dedicated storage far more cost-effective than keeping them in an office. SafeStorage can handle collection from event venues after events conclude, store items securely, and deliver to the next event venue as required.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">13. How do construction and engineering companies use business storage in Dubai?</h3>
              <p className="text-gray-700">Construction and engineering businesses use SafeStorage for a range of purposes including storing project documentation and drawings, securing tools and equipment between project sites, holding construction samples and materials not yet required on site, storing office furniture and equipment during project-site relocations, and archiving completed project records. Some businesses also use our facility to stage equipment and materials before mobilising to project sites in remote UAE locations or neighbouring GCC countries.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">14. Do you provide storage for media and production companies in Dubai?</h3>
              <p className="text-gray-700">Yes. Dubai&apos;s growing media and production industry — including film production, advertising agencies, photography studios, and content creation companies — generates substantial volumes of equipment and props that need secure, climate-controlled storage between productions. Camera equipment, lighting gear, production props, costumes, and set dressings can be stored at SafeStorage and retrieved when the next production begins. Our climate control is particularly important for protecting sensitive optics, electronic equipment, and perishable props from Dubai&apos;s heat.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">15. What payment options are available for business storage accounts?</h3>
              <p className="text-gray-700">SafeStorage accepts all major payment methods for business accounts including bank transfers, credit and debit cards (Visa, Mastercard, Amex), cheque payments, and cash. Corporate accounts can be set up with monthly invoicing against purchase orders, which is the preferred payment arrangement for larger companies with formal procurement processes. We issue VAT-compliant tax invoices for all business storage services, which can be used for input VAT recovery where applicable. Invoices are provided electronically on the billing date each month.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
