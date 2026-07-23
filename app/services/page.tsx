import ServicesPage from "@/components/services/services-page"
import type { Metadata } from "next"
import Link from "next/link"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Storage Services Dubai — Personal, Business & Vehicle",
  description:
    "Secure & hassle-free storage solutions for household, personal, business, document, and vehicle storage in Dubai. Secure units with 24/7 security. Call +971505773388.",
  keywords:
    "storage services dubai, personal storage, business storage, document storage, vehicle storage, self storage dubai, secure storage dubai, furniture storage, moving storage",
  openGraph: {
    title: "SafeStorage Services - Personal, Business & Vehicle Storage",
    description: "Complete storage solutions in Dubai. Secure units, 24/7 security, door-to-door pickup. Call +971505773388.",
    url: "https://safestorage.ae/services",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "SafeStorage Services"
      }
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeStorage Services Dubai | +971505773388",
    description: "Personal, business & vehicle storage solutions with door-to-door pickup & delivery.",
    images: ["/twitter-services.jpg"],
  },
  alternates: {
    canonical: "https://safestorage.ae/services",
  },
}

const servicesSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/services#webpage',
    name: 'Storage Services Dubai | Personal, Business & Vehicle',
    description: 'Secure & hassle-free storage solutions for household, personal, business, document, and vehicle storage in Dubai.',
    url: 'https://safestorage.ae/services',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://safestorage.ae/services' },
    ],
  },
]

export default function Services() {
  return (
    <>
      <SchemaScript schema={servicesSchemas} />
      <ServicesPage />
      {/* Static rich-text section for SEO — server-rendered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Complete Storage Services in Dubai</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage Dubai offers a comprehensive range of secure storage services designed for
            individuals, families, and businesses across Dubai. Whether you need to store furniture during a renovation,
            keep business inventory safe, or find a long-term solution for household items, we have the right storage
            unit for you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Personal & Household Storage</h3>
              <p className="text-gray-700 mb-3">
                Our personal storage units are ideal for Dubai residents who need extra space at home. Store seasonal
                clothes, sports equipment, holiday decorations, bicycles, and bulky furniture in secure, clean,
                dust-protected units that keep your belongings safe. We offer units starting from
                25 sq ft up to 300+ sq ft, so you only pay for the space you actually need.
              </p>
              <p className="text-gray-700">
                Our door-to-door pickup service means you never need to rent a truck or struggle with heavy lifting.
                Our trained team collects your items from your home, packs them securely if needed, and returns them
                to you whenever you call. Most Dubai areas are covered with same-day or next-day pickup options.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Business & Commercial Storage</h3>
              <p className="text-gray-700 mb-3">
                Businesses across Dubai trust SafeStorage for flexible, cost-effective storage of office furniture,
                retail inventory, documents, equipment, and seasonal stock. Our commercial storage solutions help
                companies reduce overhead costs by eliminating the need for expensive warehouse space.
              </p>
              <p className="text-gray-700">
                We serve startups, SMEs, and large corporations with dedicated storage consultants, flexible monthly
                plans, and the option to scale storage space up or down as your business needs change. Regular
                delivery and retrieval services keep your supply chain running smoothly.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Furniture Storage Dubai</h3>
              <p className="text-gray-700">
                Renovating your home or moving between apartments? Our dedicated furniture storage service keeps
                sofas, beds, wardrobes, dining tables, and appliances safe during transition periods. All furniture
                is wrapped in protective covers and stored on raised platforms in our secure, dust-protected
                units. Storage periods range from
                1 week to multiple years with no long-term lock-in required.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Vehicle & Car Storage</h3>
              <p className="text-gray-700">
                SafeStorage offers covered, secure vehicle storage for cars, motorcycles, boats, jet skis, and
                caravans. Our vehicle storage bays are monitored by 24/7 CCTV cameras, protected by perimeter
                security, and include battery maintenance options for long-term storage. Ideal for expatriates
                returning home temporarily, owners of seasonal vehicles, and collectors needing secure facilities.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Document & Archive Storage</h3>
              <p className="text-gray-700">
                Businesses and professionals needing secure document storage in Dubai rely on SafeStorage for
                compliant, organised archive solutions. Our document storage service includes fireproof units,
                barcode-indexed retrieval, and secure shredding for expired records. Meeting Dubai and UAE
                regulatory requirements for document retention has never been easier.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Secure Indoor Storage</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Why Choose SafeStorage Dubai?</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Door-to-door Pickup &amp; Delivery:</strong> We collect from anywhere in Dubai and return your items on demand — no truck rental needed.</li>
              <li><strong>Flexible Plans:</strong> Monthly contracts with no long-term commitment required. Scale up or down at any time.</li>
              <li><strong>Free Insurance:</strong> Every unit comes with complimentary insurance coverage up to AED 5,000, with optional extended coverage available.</li>
              <li><strong>Transparent Pricing:</strong> No hidden fees, no surprise charges. Prices include storage, security, and basic insurance.</li>
              <li><strong>Professional Packing:</strong> Our team offers expert packing services using quality materials to ensure your items arrive safely.</li>
              <li><strong>Dedicated Consultant:</strong> Every customer gets a personal storage consultant available via phone, WhatsApp, or email.</li>
            </ul>
          </div>

          {/* Specialized service pages — internal links to prevent orphan pages */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-[#0A2463] mb-4">Specialized Storage Services</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { href: "/car-storage", label: "Car & Vehicle Storage" },
                { href: "/art-storage", label: "Art & Valuables Storage" },
                { href: "/electronics-storage", label: "Electronics Storage" },
                { href: "/furniture-storage", label: "Furniture Storage" },
                { href: "/ecommerce-storage", label: "E-commerce Storage" },
                { href: "/document-storage", label: "Document Storage" },
                { href: "/student-storage", label: "Student Storage" },
                { href: "/storage-size-guide", label: "Storage Size Guide" },
                { href: "/expat-leaving-uae", label: "Expat Leaving UAE" },
                { href: "/international-relocation", label: "International Relocation" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-[#0A2463] text-sm font-medium hover:border-[#D8315B] hover:text-[#D8315B] transition-colors"
                >
                  {label} →
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Ready to find the perfect storage solution in Dubai? Get your free, no-obligation quote today.
            </p>
            <Link
              href="/get-quote"
              className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* All Services Explained Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">All SafeStorage Dubai Services Explained in Detail</h2>

          <div className="space-y-8 mb-10">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">1. Household &amp; Personal Storage Dubai</h3>
              <p className="text-gray-700 mb-4">
                Our household and personal storage service is designed for Dubai residents who need extra space for home items without the inconvenience of visiting a storage facility. Whether you are moving apartments, renovating your home, travelling for an extended period, or simply need to declutter a busy household, our personal storage service provides the perfect solution.
              </p>
              <p className="text-gray-700 mb-4">
                Personal storage customers typically store seasonal clothing, sports equipment, holiday decorations, extra bedding, books, electronics not in current use, suitcases, and items inherited or gifted that they are not ready to part with. In Dubai, where apartments tend to be compact relative to the average household&apos;s belongings, personal storage is an increasingly popular alternative to cramming everything into already-full wardrobes and store rooms.
              </p>
              <p className="text-gray-700">
                Plans start from 12.60 AED / sqft (VAT-inclusive), scaling with the volume you store. Door-to-Door pickup from your home address, digital photo inventory, secure storage, and insurance are included in every personal storage plan. On-demand delivery back to your address is available within 24–48 hours.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">2. Furniture Storage Dubai</h3>
              <p className="text-gray-700 mb-4">
                Furniture storage is one of SafeStorage&apos;s most in-demand services, particularly during apartment and villa renovations, between lease transitions, and when expats are leaving Dubai and want to keep their furnishings without shipping them internationally. Dubai residents invest significantly in quality furniture, and protecting that investment during a temporary period of displacement is a sensible and cost-effective choice.
              </p>
              <p className="text-gray-700 mb-4">
                Our furniture storage service includes professional wrapping of all pieces using furniture blankets, corner protectors, and stretch film. Mattresses are sealed in protective covers. Glass table tops and mirrors are wrapped and padded separately. All items are loaded into enclosed moving vehicles and transported to our secure facility, where they are placed on raised platforms and stored away from external walls.
              </p>
              <p className="text-gray-700">
                Furniture stored in our secure, clean, dust-protected units is wrapped and handled with care throughout its stay. Short-term furniture storage starts from 1 week with no minimum contract required.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">3. Business &amp; Commercial Storage Dubai</h3>
              <p className="text-gray-700 mb-4">
                Business storage with SafeStorage is a flexible, cost-effective alternative to leasing warehouse space in Dubai. Companies across all sectors — from startups to large corporations — use our commercial storage service to store office furniture, IT equipment, retail inventory, promotional materials, seasonal stock, and production samples on month-to-month terms without long-term commitments.
              </p>
              <p className="text-gray-700 mb-4">
                Our commercial storage units range from 50 sq ft for small business needs to 1,000+ sq ft for large-scale commercial storage requirements. Dedicated business accounts receive a commercial storage consultant who manages all aspects of storage and retrieval, including regular scheduled deliveries, inventory management, and flexible adjustments to storage volume as business needs change.
              </p>
              <p className="text-gray-700">
                Key benefits for businesses include eliminating expensive warehouse leases, reducing physical office footprint (and associated rental costs), maintaining an organised inventory with our digital inventory management system, and scaling storage up or down month-by-month to match seasonal or project-based demands.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">4. Document Storage &amp; Archive Management Dubai</h3>
              <p className="text-gray-700 mb-4">
                SafeStorage provides professional document archiving and records management for businesses and professionals across Dubai. UAE law requires companies to retain various categories of business records for defined periods — from 5 years for most business records to 10+ years for certain financial and legal documents. Managing these archives efficiently and securely is a significant operational challenge for businesses of all sizes.
              </p>
              <p className="text-gray-700 mb-4">
                Our document storage service solves this challenge comprehensively. Documents are stored in individual fireproof units, with each box individually labelled and indexed using barcodes. When a specific file or box is needed, clients request retrieval via phone, WhatsApp, or our portal, and the item is delivered to their office within 24–48 hours. Annual box audits help clients identify documents that have reached their required retention period and can be securely shredded.
              </p>
              <p className="text-gray-700">
                Document storage starts from 12.60 AED / sqft (VAT-inclusive). Secure shredding with a certificate of destruction is available for records that have exceeded their required retention period. Our service is trusted by law firms, financial institutions, DIFC companies, free zone businesses, and government-related entities across Dubai.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">5. Car &amp; Vehicle Storage Dubai</h3>
              <p className="text-gray-700 mb-4">
                SafeStorage provides covered, secure vehicle storage for cars, motorcycles, classic cars, boats, jet skis, and caravans. Our vehicle storage bays are fully enclosed and monitored by 24/7 CCTV. Battery maintenance trickle charging is available for vehicles stored long-term to prevent battery discharge and ensure the vehicle starts when you need it.
              </p>
              <p className="text-gray-700 mb-4">
                Vehicle storage is particularly popular among expats who are leaving Dubai temporarily (taking a sabbatical, returning home for a long holiday, or transitioning between jobs) and want to keep their car safely in Dubai rather than selling and rebuying. Collectors of classic or vintage cars use our facilities for long-term secure storage between shows or events.
              </p>
              <p className="text-gray-700">
                All vehicles are inspected and photographed upon arrival with a detailed condition report. Vehicles are stored on clean, hard surfaces and checked periodically by our team. Insurance options are available for all stored vehicles. Contact us for current vehicle storage pricing based on the type and size of your vehicle.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">6. Art &amp; Valuables Storage Dubai</h3>
              <p className="text-gray-700 mb-4">
                Dubai&apos;s international art scene and the high concentration of wealthy collectors among its resident population create significant demand for specialist art storage. SafeStorage provides secure, dedicated art storage — ideal for paintings, sculptures, photography prints, and mixed-media works. Each piece is wrapped in archival materials, handled with care, and kept in our clean, dust-protected facility.
              </p>
              <p className="text-gray-700 mb-4">
                Valuable items beyond art — including antiques, wine collections, musical instruments, and rare collectibles — are stored in our most secure units with enhanced insurance options. Our team uses acid-free tissue paper, custom padded crating, and archival wrapping materials for art and antiques to prevent contact damage during handling and storage.
              </p>
              <p className="text-gray-700">
                Customers storing art and valuables with SafeStorage receive a fully itemised, photographed inventory for insurance and customs purposes. For international arrivals or departures, we coordinate with freight forwarders and art handlers to ensure seamless transit and proper documentation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">7. Electronics Storage Dubai</h3>
              <p className="text-gray-700 mb-4">
                Electronics need careful handling when stored in Dubai. Computers, televisions, audio equipment, gaming systems, and professional electronics all benefit from proper wrapping and protection from dust and knocks. SafeStorage stores all electronics securely, wrapped in protective materials, in our clean, dust-protected facility.
              </p>
              <p className="text-gray-700 mb-4">
                Electronics storage is popular among Dubai residents who are upgrading their devices and want to store older equipment, professionals storing production or broadcasting equipment between projects, businesses storing IT assets not currently deployed, and expats who have more electronics than can practically be shipped internationally.
              </p>
              <p className="text-gray-700">
                Our team wraps all electronics using anti-static bubble wrap and foam padding. Large items like televisions are stored in purpose-appropriate packaging. We recommend removing batteries from devices stored long-term to prevent leakage. For sensitive professional electronics, we can provide a detailed pre-storage condition report for insurance purposes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4">8. Student Storage Dubai</h3>
              <p className="text-gray-700 mb-4">
                Dubai&apos;s numerous universities, colleges, and international schools create a large student population with specific storage needs. Students who return home during semester breaks — whether domestically within the UAE or internationally — need affordable, flexible storage for their room&apos;s worth of belongings without committing to long-term contracts.
              </p>
              <p className="text-gray-700 mb-4">
                SafeStorage&apos;s student storage plans are specifically designed to be affordable and aligned with academic calendars. We pick up from student accommodation at the end of term and return everything to the same or a new address at the start of the next term. Plans are month-to-month with no minimum and pricing starts from 12.60 AED / sqft (VAT-inclusive).
              </p>
              <p className="text-gray-700">
                Student storage includes the same secure storage, insurance, and on-demand delivery as all other SafeStorage plans. We serve students from universities in Knowledge Village, Dubai International Academic City, Dubai Knowledge Park, and all other major educational hubs across Dubai. Special student discount rates are available — contact us with your student ID for current pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — SafeStorage Dubai Services</h2>
          <p className="text-gray-600 text-center mb-10">Detailed answers to the most common questions about all SafeStorage Dubai storage services.</p>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">What is the minimum storage period at SafeStorage Dubai?</h3>
              <p className="text-gray-700">SafeStorage has no minimum storage period across any of its services. You can store items for as short as one week and for as long as several years. All plans are billed monthly with no long-term commitment required. This flexibility makes SafeStorage suitable for very short-term needs (such as apartment renovation clearances lasting 2–3 weeks) all the way to long-term storage needs (such as expats who store belongings for years while they determine their long-term plans). You can end your storage plan at any time with 14 days&apos; notice.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">How does the pickup and delivery service work?</h3>
              <p className="text-gray-700">Door-to-door pickup from your Dubai address is part of our hassle-free service with every SafeStorage plan — our team handles collection and return so you never need to hire a van or do any heavy lifting, in any area of Dubai. For locations outside Dubai (Sharjah, Ajman, Abu Dhabi) a modest fixed transport fee applies. All fees are explained in your quote before you confirm, so there are never any surprise charges.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">How does the digital inventory system work?</h3>
              <p className="text-gray-700">When SafeStorage collects your items, our team photographs every individual item and box, creating a complete digital inventory that is accessible through your online account or provided as a document. Each photo is tagged with a description, location in the facility, and date of storage. When you want to retrieve specific items, you can browse your digital inventory and request exactly what you need — without having to retrieve everything. This is particularly useful for customers who store many boxes of similar-looking items and want to identify exactly what they need before requesting delivery.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">What security measures protect items stored at SafeStorage Dubai?</h3>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">What does the free insurance cover?</h3>
              <p className="text-gray-700">Every SafeStorage plan includes complimentary insurance covering all stored items against theft, fire, flood, water damage, and accidental damage while in our facility and during collection and delivery by our team. The standard complimentary insurance covers items up to a declared total value. Customers storing items with a higher combined value should declare this at booking and can purchase extended coverage at an additional premium. For high-value items such as art, electronics, and antiques, we recommend declaring accurate values and discussing extended insurance options with your storage consultant to ensure full coverage.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">How quickly can I get my items back from SafeStorage?</h3>
              <p className="text-gray-700">Standard item retrieval and delivery takes 24–48 hours from the time of your request. For urgent requests made before 12 PM on working days, same-day delivery may be available to most Dubai addresses — call us directly on +971505773388 to check same-day availability. You can request specific items from your digital inventory for delivery, so you do not need to retrieve your entire stored collection if you only need a few things. Delivery is available Monday through Saturday in morning, afternoon, and evening time windows. Emergency after-hours access can be arranged in exceptional circumstances.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can SafeStorage help with the packing, or do I need to pack myself?</h3>
              <p className="text-gray-700">SafeStorage can handle both scenarios. If you have already packed your items in boxes, our team will collect, label, and store them as-is. If you need packing assistance, our team provides professional packing services using quality boxes, bubble wrap, packing paper, and specialist materials for fragile, valuable, or unusually shaped items. We wrap all furniture professionally as a standard part of the pickup service at no additional charge. Professional packing for boxes and fragile items is available as an optional add-on service, priced per box or per hour of packing time depending on what is needed.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is SafeStorage suitable for businesses with high-volume or frequent retrieval needs?</h3>
              <p className="text-gray-700">Yes, SafeStorage is well-suited for businesses with regular storage and retrieval needs. Our commercial storage plans include options for scheduled weekly or bi-weekly deliveries, making it easy for businesses to maintain a steady flow of inventory or documents between storage and their office or warehouse. We work with e-commerce businesses that store inventory and fulfil orders, retail chains that rotate seasonal stock, hospitality businesses that store seasonal equipment and linen, and professional services firms that regularly archive and retrieve client files. Dedicated commercial account managers ensure high-volume business clients receive fast, reliable service.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">What payment methods does SafeStorage accept?</h3>
              <p className="text-gray-700">SafeStorage accepts all major credit and debit cards (Visa, Mastercard), bank transfers, and online payment through our secure portal. Monthly storage charges are billed automatically to your saved card on file, eliminating the need to manually renew your plan each month. Business customers can also arrange invoice-based billing with net-30 payment terms on approved accounts. There are no cash payments accepted. All transactions are processed securely and receipts are provided automatically for every payment made.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can I visit the SafeStorage facility to check on my belongings?</h3>
              <p className="text-gray-700">Yes, customers are welcome to visit the SafeStorage facility by appointment. Simply contact your storage consultant to schedule a visit during operating hours. When you arrive, our team will escort you to your storage unit and you can inspect your belongings, add or remove items, or simply satisfy yourself that everything is being stored properly. Most customers find the digital inventory and photo system sufficient and never need to visit, but we always welcome customers who want to see their storage environment in person.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">How do I calculate how much storage space I need?</h3>
              <p className="text-gray-700">Rather than having customers estimate storage space (which most people find difficult), SafeStorage uses a volume-based quoting system. Simply describe or show us what you need to store — either verbally on a call or via photos and video sent on WhatsApp — and our experienced team will calculate the exact volume and provide an accurate quote. As a rough guide: a small number of boxes fills 25–50 sq ft, a 1-bedroom apartment requires approximately 100–150 sq ft, a 2-bedroom apartment requires approximately 200–250 sq ft, and a large villa can require 400+ sq ft. Our storage size guide at safestorage.ae/storage-size-guide provides more detailed guidance.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Does SafeStorage offer e-commerce fulfilment or inventory management services?</h3>
              <p className="text-gray-700">SafeStorage offers e-commerce storage solutions for businesses that need flexible inventory storage without the commitment of a warehouse lease. We store your inventory in our secure facility and can arrange delivery of specific items to your specified address or fulfilment partner on request. While we do not currently offer direct-to-consumer order picking and packing, our e-commerce storage service is ideal for businesses that fulfil orders through a 3PL partner but need flexible, cost-effective inventory overflow storage. Contact our commercial team at +971505773388 to discuss your specific e-commerce storage needs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">What should I do to prepare my items for SafeStorage pickup?</h3>
              <p className="text-gray-700">Preparation depends on what you are storing. For boxed items, ensure boxes are properly sealed and labelled with a general description of contents. For furniture, you do not need to disassemble anything — our team handles disassembly and reassembly if needed. For electronics, remove batteries from devices where possible and note down any serial numbers for insurance purposes. For clothing, items can be left on hangers (we use wardrobe boxes) or folded and packed in boxes. For fragile items, let our team know so they can bring appropriate specialist packing materials. If in doubt, leave items as they are and let our team advise on the best packing approach.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is SafeStorage available on weekends for pickup and delivery?</h3>
              <p className="text-gray-700">SafeStorage operates pickup and delivery services Monday through Saturday. Saturday pickups and deliveries are available across all Dubai service zones. Sunday availability is limited to pre-arranged commercial pickups and emergency retrievals — contact us if you require Sunday service and we will do our best to accommodate your needs. Public holiday availability varies; contact us directly on +971505773388 to check availability around UAE public holidays. Our customer service team is available 7 days a week by WhatsApp and phone for booking, account queries, and urgent requests even outside standard service hours.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
