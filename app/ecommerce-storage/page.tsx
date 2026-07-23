import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { ShoppingBag, CheckCircle2, Star, Phone, ArrowRight, Package, Truck, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "E-Commerce Storage Dubai — Inventory",
  description: "Flexible e-commerce and inventory storage in Dubai. Cheaper than warehouse rental, no 3-year leases, scale up or down as needed. From 12.60 AED / sqft. Hassle-free pickup. Call +971505773388.",
  keywords: "ecommerce storage dubai, inventory storage dubai, online seller storage dubai, fulfilment storage dubai, amazon fba storage dubai, product storage dubai, business inventory storage dubai",
  openGraph: {
    title: "E-Commerce Storage Dubai — Flexible Inventory & Fulfilment",
    description: "Scale your Dubai e-commerce business without warehouse commitments. Flexible monthly storage from 12.60 AED / sqft. Store, pick and ship your inventory affordably.",
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
  { aspect: "Monthly cost", storage: "From 12.60 AED / sqft", warehouse: "AED 5,000–15,000+" },
  { aspect: "Setup time", storage: "Same week", warehouse: "2-3 months" },
  { aspect: "Scaling up", storage: "Next day", warehouse: "New lease or negotiation" },
  { aspect: "Scaling down", storage: "30 days notice", warehouse: "Lease break fees" },
  { aspect: "Access", storage: "Business hours + scheduled", warehouse: "24/7 typically" },
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
              <p className="text-xl text-white/85 mb-8">Growing your Dubai e-commerce business shouldn't mean committing to a 3-year warehouse lease. SafeStorage Dubai provides flexible monthly inventory storage — scale up or down as your business demands. From 12.60 AED / sqft with no long-term commitment.</p>
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
                { stat: "12.60 AED", label: "Starting price / sqft" },
                { stat: "24hrs", label: "Scale up time" },
                { stat: "Door-to-Door", label: "Initial inventory pickup" },
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
                { name: "Khaled R.", location: "DIP", business: "Electronics Reseller", text: "I store and ship electronics for Amazon UAE and noon.com. SafeStorage's clean, secure units keep my stock dust-protected and in sellable condition, and the access hours work perfectly for my pick-and-pack schedule.", rating: 5 },
                { name: "Nour H.", location: "Business Bay", business: "Home Décor Brand", text: "Tried 2 traditional storage facilities before SafeStorage. Both were cramped and access was a battle. SafeStorage is what a business storage solution should look like. Professional, accessible, clean and secure. My product photography is even done in the parking area before items go in.", rating: 5 },
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
                { q: "Is my inventory insured against theft or damage?", a: "Basic coverage is included in all storage plans. For high-value inventory (electronics, luxury goods), we recommend declaring full replacement value and arranging extended coverage through our insurance partners. Coverage is based on declared value — please do not undervalue inventory at intake." },
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

        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-8">About Our E-Commerce Storage Service in Dubai</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-12">
              <p>SafeStorage Dubai&apos;s e-commerce storage service is designed specifically for online sellers, D2C brands, and growing businesses that need flexible inventory space without the financial and legal commitments of a traditional warehouse lease. Unlike warehouse rentals that require 2&ndash;3 year minimum commitments, deposits equivalent to 3&ndash;6 months&apos; rent, and significant fit-out costs, our storage units are available on a month-to-month basis with no setup fees and no penalty for scaling up or down. This model is particularly valuable in Dubai&apos;s e-commerce market, where rapid growth, seasonal demand peaks, and category pivots are common, and where locking into a large warehouse before your business is ready creates financial risk that can threaten the entire venture.</p>
              <p>We serve a wide range of Dubai e-commerce businesses including Amazon UAE and noon.com sellers, Instagram and TikTok shop operators, direct-to-consumer brands, importers and distributors, subscription box companies, and businesses selling across multiple platforms simultaneously. Our units range from small (suitable for high-value, low-volume categories like electronics or luxury goods) to large (suitable for high-volume fashion, electronics, or home goods sellers). Scaling from one unit size to the next can happen within 24&ndash;48 hours, giving you a responsive infrastructure that matches your business growth. Call us at +971505773388 to discuss your specific inventory needs and get a same-day business quote.</p>
            </div>

            <h2 className="text-3xl font-bold text-dubai-navy mb-8">Comprehensive E-Commerce Storage FAQs</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What types of products can be stored for e-commerce fulfilment?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai accommodates virtually all standard e-commerce product categories including fashion and apparel, footwear and accessories, consumer electronics and accessories, home d&eacute;cor and furnishings, kitchenware, health and beauty products, cosmetics and skincare, nutritional supplements, books and media, sporting goods, outdoor equipment, toys, stationery, pet products, and small appliances. Products should be properly packaged and labelled before storage. We cannot store flammable goods (aerosols above regulated thresholds, petrol products), explosives, corrosive materials, live animals, or perishable food items requiring cold chain storage. If you are unsure whether your products qualify, call us at +971505773388 before booking and we will confirm suitability.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How does pick-and-pack work at SafeStorage?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai is primarily a storage facility rather than a full 3PL (third-party logistics) operator. Pick-and-pack means you access your storage unit yourself, select the products for individual orders, pack them in your shipping materials, label them with your shipping labels, and then arrange collection by your courier partner (DHL, Aramex, FedEx, Emirates Post, or any other). Many of our e-commerce customers bring their packing materials to the unit, conduct packing runs daily or several times per week, and coordinate courier collection from our facility&apos;s loading area. This gives you full control over your order quality while avoiding the cost of a full 3PL service fee on every order. Our access hours of 8 AM&ndash;8 PM, Monday to Saturday, support most fulfilment workflows.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Can my team access the unit for order fulfilment?</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What are the access hours for e-commerce customers?</h3>
                <p className="text-gray-700 leading-relaxed">Standard access hours at SafeStorage Dubai are Monday to Saturday 8 AM to 8 PM, and Sunday 10 AM to 6 PM. These hours are designed to accommodate most business fulfilment schedules, including morning order reviews, afternoon packing runs, and evening courier cut-off times. For sellers with particularly high order volumes or unusual dispatch windows &mdash; for example, those fulfilling marketplace same-day delivery orders with early morning courier collections &mdash; we can discuss extended or pre-arranged early access options. The goal is to ensure that your access schedule never becomes a constraint on your fulfilment capability. Please discuss any access requirements outside standard hours with us when booking your unit.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How is inventory tracked in a SafeStorage unit?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai provides the physical storage space &mdash; inventory management and tracking is managed by you using your own systems. Most of our e-commerce customers use a spreadsheet, an inventory management app (such as Shopify&apos;s built-in inventory, Linnworks, Cin7, or similar), or their marketplace seller account&apos;s inventory system to track stock levels. You are responsible for your own stock counts, SKU management, and inventory reconciliation. When you bring new stock in or remove items for orders, you update your own records. This approach gives you full flexibility to use whichever inventory system fits your business without being locked into our platform. We can advise on practical inventory organisation within your unit during onboarding.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Can I receive supplier deliveries at the storage facility?</h3>
                <p className="text-gray-700 leading-relaxed">Yes, by prior arrangement. We can accept deliveries to the facility on your behalf during business hours &mdash; stock from suppliers, goods imported through Dubai customs, or transfers from other storage locations. Deliveries must be pre-arranged with our team (not simply addressed to the facility without notice) and correctly addressed with your name and unit reference. A staff member will receive the delivery, photograph it, and place it in your unit or hold it at reception until you arrive to take it in. We charge a small receiving fee for deliveries accepted on your behalf. If you receive deliveries frequently, we can set up a regular receiving arrangement as part of your storage plan. Contact us to confirm logistics before your first incoming delivery.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What is the minimum storage duration for e-commerce businesses?</h3>
                <p className="text-gray-700 leading-relaxed">The minimum storage duration is one month. This is ideal for businesses that need short-term overflow space during peak seasons, businesses testing a new product category before committing to larger volumes, or sellers who are in the early growth phase and want to maintain maximum flexibility. There is no penalty for ending storage after the minimum period &mdash; just 30 days&apos; written notice. For businesses with predictable seasonal patterns, we recommend booking ahead to guarantee unit availability during high-demand periods such as White Friday, Ramadan, and the end-of-year holiday season when demand for storage increases significantly across Dubai. Early booking secures your preferred unit size and location within the facility.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How does this compare to warehouse rental in Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">Traditional warehouse rental in Dubai typically requires a 2&ndash;3 year minimum lease, a deposit equivalent to 3&ndash;6 months of rent, legal costs for the lease agreement, fit-out costs for racking and infrastructure, and a minimum space commitment far larger than most growing businesses actually need. Monthly costs for a modest 1,000 sq ft warehouse in Al Quoz, DIP, or Jebel Ali typically range from AED 5,000 to AED 15,000+. SafeStorage provides an equivalent effective storage area from 12.60 AED / sqft (VAT-inclusive) on a month-to-month basis, with no setup costs, no deposit beyond the first month, and the ability to scale up or down in 24 hours. For businesses with annual revenue below AED 5 million, warehouse rental is almost never the right solution.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How are products kept in good condition in storage?</h3>
                <p className="text-gray-700 leading-relaxed">All SafeStorage Dubai units are clean, enclosed indoor spaces that keep your stock dust-protected and away from the rain, direct sun, and outdoor elements. Boxes and pallets are kept off the floor and organised so products stay orderly and in sellable condition. We do not offer cold-chain refrigerated storage for perishable food items requiring below-ambient temperatures &mdash; if your products have specific temperature requirements, contact us to discuss suitability before booking. For the vast majority of e-commerce product categories, our secure indoor units provide the clean, protected environment your inventory needs.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Can I use SafeStorage for Amazon UAE or noon.com fulfilment?</h3>
                <p className="text-gray-700 leading-relaxed">Yes, many of our e-commerce customers use SafeStorage as their primary inventory location for Amazon UAE (Fulfillment by Merchant, or FBM orders) and noon.com seller operations. You store your inventory with us, visit the unit to pick and pack orders as they come in, and arrange courier collection for dispatch to buyers or for periodic replenishment of Amazon FBA warehouses. Our clean, secure units help sellers keep products dust-protected and in the condition needed to meet Amazon&apos;s standards. We can discuss storage and access arrangements that specifically support Amazon or noon seller workflows &mdash; including regular replenishment runs and return stock management.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What happens during peak seasons like White Friday or Ramadan?</h3>
                <p className="text-gray-700 leading-relaxed">Dubai&apos;s e-commerce calendar has well-defined peak periods &mdash; White Friday (UAE&apos;s equivalent of Black Friday), Ramadan, and the December holiday season typically see order volumes 3&ndash;5x above normal levels for many sellers. To prepare for peak seasons, we recommend booking additional storage space 4&ndash;6 weeks before the peak period begins, as demand for units increases significantly. We can accommodate temporary unit upgrades or additional units for the peak period only. On the fulfilment side, we can discuss extended access arrangements during peak periods to support morning-to-night packing operations if needed. Planning ahead with your account manager at SafeStorage ensures you have the space and access schedule you need when your business is at its most critical point.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How are returns handled by e-commerce businesses using storage?</h3>
                <p className="text-gray-700 leading-relaxed">Return management is entirely managed by you as the seller. Returned items are typically sent back to your home address or directly to your SafeStorage unit (by arrangement for direct courier delivery). Once returns arrive, you inspect them, process refunds or exchanges through your marketplace, and either restock the item in your unit or dispose of it. Many sellers designate a specific area of their unit for returns processing, keeping returned items separate from new stock until they have been inspected and graded. For high return-rate categories like fashion, having a dedicated returns processing area within your unit makes the workflow significantly more efficient. We do not inspect, process, or make decisions about returned items on your behalf.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Is there a weight limit per storage unit?</h3>
                <p className="text-gray-700 leading-relaxed">Our storage units have standard floor load ratings of 750 kg per square metre, which is sufficient for the vast majority of e-commerce inventory categories. For particularly heavy items &mdash; such as machinery, large appliances, gym equipment, or dense palletised loads &mdash; please advise us at booking so we can confirm the appropriate unit and ensure floor load limits are not exceeded. We can advise on shelving and racking configurations that distribute weight safely across the unit floor. Most standard consumer goods in boxes and on shelving are well within our weight ratings. If you have a specific heavy inventory category, share the details and we will confirm suitability before you book.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What about hazardous goods &mdash; can any be stored?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai cannot store goods classified as hazardous under IATA or UAE transport regulations, including flammable liquids and aerosols above regulated thresholds, compressed gases, explosives, oxidising materials, toxic chemicals, corrosives, and radioactive materials. Most standard consumer goods &mdash; cosmetics, electronics, clothing, food supplements, household goods, books, and sporting goods &mdash; are not classified as hazardous and are perfectly acceptable. Some products that appear innocent (certain aerosol sprays, lithium battery devices in bulk quantities, or specific cleaning products) may require classification checks. If you are unsure whether your specific product qualifies, share the Safety Data Sheet (SDS) or product specification with us and we will advise before booking.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How do I scale up my storage as my business grows?</h3>
                <p className="text-gray-700 leading-relaxed">Scaling up at SafeStorage Dubai is designed to be fast and frictionless. When your current unit is approaching capacity, call us at +971505773388 and we will check availability in the next unit size up or adjacent units that could be used together. Unit upgrades typically take 24&ndash;48 hours to arrange, with a smooth transfer of your inventory &mdash; either you move your stock yourself or we can assist with internal transfer. Your monthly fee is adjusted to the new unit size from the effective upgrade date with no penalty or administrative fee for changing unit size. For businesses growing rapidly, we recommend discussing a growth plan with us at onboarding so we can proactively manage unit availability as your inventory expands.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
