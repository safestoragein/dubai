import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { ShoppingBag, CheckCircle2, Star, Phone, ArrowRight, Package, Truck, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "E-Commerce Storage Dubai — Flexible Inventory & Fulfilment Storage | SafeStorage",
  description: "Flexible e-commerce and inventory storage in Dubai. Cheaper than warehouse rental, no 3-year leases, scale up or down as needed. From AED 499/month. Free pickup. Call +971505773388.",
  keywords: "ecommerce storage dubai, inventory storage dubai, online seller storage dubai, fulfilment storage dubai, amazon fba storage dubai, product storage dubai, business inventory storage dubai",
  openGraph: {
    title: "E-Commerce Storage Dubai — Flexible Inventory Storage Without Long Leases | SafeStorage",
    description: "Scale your Dubai e-commerce business without warehouse commitments. Flexible monthly storage from AED 499/month. Store, pick and ship your inventory affordably.",
    url: "https://safestorage.ae/ecommerce-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/ecommerce-storage" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Commerce & Inventory Storage Dubai",
    description: "Flexible inventory and e-commerce storage in Dubai. Monthly contracts, no warehouse lease required. Scale up or down as your business needs change.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/ecommerce-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "E-Commerce Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/ecommerce-storage#webpage",
    name: "E-Commerce Storage Dubai — Flexible Inventory Storage",
    url: "https://safestorage.ae/ecommerce-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "E-Commerce Storage Dubai", item: "https://safestorage.ae/ecommerce-storage" },
    ],
  },
]

const comparison = [
  { aspect: "Minimum commitment", storage: "1 month", warehouse: "2-3 year lease" },
  { aspect: "Monthly cost (1,000 sq ft equiv.)", storage: "AED 1,500–2,500", warehouse: "AED 5,000–15,000+" },
  { aspect: "Setup time", storage: "Same week", warehouse: "2-3 months" },
  { aspect: "Scaling up", storage: "Next day", warehouse: "New lease or negotiation" },
  { aspect: "Scaling down", storage: "30 days notice", warehouse: "Lease break fees" },
  { aspect: "Access", storage: "Business hours + scheduled", warehouse: "24/7 typically" },
  { aspect: "Climate control", storage: "Included", warehouse: "Often extra cost" },
  { aspect: "Security", storage: "Biometric + CCTV", warehouse: "Varies widely" },
]

export default function EcommerceStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <ShoppingBag className="w-4 h-4" /> E-Commerce Inventory Storage
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">E-Commerce Storage Dubai — Flexible Inventory Storage Without Warehouse Leases</h1>
              <p className="text-xl text-white/85 mb-8">Growing your Dubai e-commerce business shouldn't mean committing to a 3-year warehouse lease. SafeStorage Dubai provides flexible monthly inventory storage — scale up or down as your business demands. From AED 499/month with no long-term commitment.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Business Quote</Button>
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
                { stat: "1 Month", label: "Minimum contract" },
                { stat: "AED 499+", label: "Starting price/month" },
                { stat: "24hrs", label: "Scale up time" },
                { stat: "Free", label: "Initial inventory pickup" },
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
            <h2 className="text-3xl font-bold text-dubai-navy mb-8">Storage vs Warehouse: Why Growing Dubai Sellers Choose Storage</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-dubai-navy text-white">
                    <th className="text-left p-4 rounded-tl-lg">Comparison</th>
                    <th className="text-left p-4 bg-dubai-gold">SafeStorage Dubai</th>
                    <th className="text-left p-4 rounded-tr-lg">Traditional Warehouse</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.aspect} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="p-4 font-semibold text-dubai-navy">{row.aspect}</td>
                      <td className="p-4 text-green-700 font-medium bg-green-50/50">{row.storage}</td>
                      <td className="p-4 text-gray-600">{row.warehouse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">What E-Commerce Businesses Store with Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { category: "Fashion & Apparel", icon: "👗", items: ["Clothing and accessories", "Bags and footwear", "Seasonal collections", "Sample inventory", "Return stock"] },
                { category: "Electronics & Gadgets", icon: "📱", items: ["Consumer electronics", "Accessories and cables", "Smart home devices", "Phone cases and peripherals", "Refurbished devices"] },
                { category: "Home & Living", icon: "🏠", items: ["Home décor", "Kitchenware", "Bedding and linens", "Cleaning products", "Small appliances"] },
                { category: "Health & Beauty", icon: "💄", items: ["Cosmetics and skincare", "Wellness products", "Fitness equipment", "Nutritional supplements", "Medical devices"] },
                { category: "Books & Media", icon: "📚", items: ["Books and textbooks", "DVD/Blu-ray inventory", "Educational materials", "Print media stock", "Digital products packaged"] },
                { category: "Sports & Outdoor", icon: "⚽", items: ["Sports equipment", "Outdoor gear", "Fitness accessories", "Water sports items", "Camping equipment"] },
              ].map((cat) => (
                <div key={cat.category} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-bold text-dubai-navy mb-3">{cat.category}</h3>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-dubai-gold flex-shrink-0" />{item}
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
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">How Our E-Commerce Storage Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Get a Quote", desc: "Tell us your inventory volume and type. We provide a same-day quote for the right unit size and access schedule." },
                { step: "02", title: "We Pick Up Your Stock", desc: "Our team collects inventory from your home, supplier, or existing location. Documented and photographed on intake." },
                { step: "03", title: "Access to Pick & Pack", desc: "Visit your unit during business hours to pick orders, add new stock, or reorganise. Coordinate scheduled access for regular pack runs." },
                { step: "04", title: "Scale as You Grow", desc: "Upgrade to a larger unit in 24-48 hours as your business grows. No lease renegotiations, no broker fees — just call us." },
              ].map((s) => (
                <div key={s.step} className="text-center p-5">
                  <div className="w-14 h-14 bg-dubai-gold rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">{s.step}</div>
                  <h3 className="font-bold text-dubai-navy mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Business Customer Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Lina M.", location: "Al Barsha", business: "Online Fashion Retailer", text: "I started with a medium unit and within 3 months needed to upgrade to large. SafeStorage made it seamless — same building, same access system, just a bigger space. For a small business without the capital to commit to a warehouse lease, this is the only sensible solution.", rating: 5 },
                { name: "Khaled R.", location: "DIP", business: "Electronics Reseller", text: "I store and ship electronics for Amazon UAE and noon.com. SafeStorage's climate-controlled units are essential — electronics degrade fast in non-climate-controlled storage in Dubai. The access hours work perfectly for my pick-and-pack schedule.", rating: 5 },
                { name: "Nour H.", location: "Business Bay", business: "Home Décor Brand", text: "Tried 2 traditional storage facilities before SafeStorage. Both were non-climate-controlled, cramped and access was a battle. SafeStorage is what a business storage solution should look like. Professional, accessible, climate-controlled. My product photography is even done in the parking area before items go in.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex mb-3">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-dubai-gold text-dubai-gold" />)}</div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div className="font-bold text-dubai-navy">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location} · {t.business}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">E-Commerce Storage FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "Can I access my unit daily for order fulfilment?", a: "Yes. Our standard access hours are 8 AM–8 PM, 7 days a week. For sellers needing very high-frequency access (daily or multiple times per day), we can arrange dedicated access schedules to accommodate your fulfilment workflow. Call us to discuss your specific needs." },
                { q: "Do you offer pick, pack and ship services?", a: "SafeStorage is primarily a storage facility — we don't operate a full 3PL (third-party logistics) service. However, you can use your unit as your pack station. You access the unit, pick orders, pack on-site, and arrange collection by your courier. Many of our e-commerce customers use DHL, Aramex or FedEx to collect directly from our facility." },
                { q: "What if my inventory grows quickly and I need more space?", a: "Contact us and we can typically upgrade your unit within 24-48 hours. We aim to have units available in the next size up. If you grow beyond our largest unit, we can discuss partitioned sections or multiple units in the same facility for easy access management." },
                { q: "Is my inventory insured against theft or damage?", a: "Basic coverage is included in all storage plans. For high-value inventory (electronics, luxury goods, jewellery), we recommend declaring full replacement value and arranging extended coverage through our insurance partners. Coverage is based on declared value — please do not undervalue inventory at intake." },
                { q: "Can I have parcels delivered directly to my SafeStorage unit?", a: "This depends on your access arrangement. We can accept deliveries during business hours by arrangement — the delivery must be addressed correctly and a staff member can receive and place in your unit. Contact us to set up a delivery arrangement before your first incoming delivery." },
                { q: "Do you store hazardous or flammable products?", a: "We cannot store flammable, explosive, corrosive or Class 1-9 dangerous goods as defined by IATA/UAE transport regulations. Most standard consumer goods (cosmetics, electronics, clothing, food supplements) are fine. If unsure about a specific product, contact us before booking and we will advise." },
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
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Dubai E-Commerce Business?</h2>
            <p className="text-xl text-white/85 mb-8">Get a free business storage quote today. No warehouse lease required — start in days, scale as you grow.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Business Quote</Button>
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
