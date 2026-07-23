import ContactPage from "@/components/contact/contact-page"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact SafeStorage Dubai | Get in Touch",
  description:
    "Contact SafeStorage Dubai for secure storage solutions. Call us, visit our locations, or get a free quote. We're here to help with all your storage needs in Dubai.",
  keywords:
    "contact storage dubai, storage company dubai, storage locations dubai, storage customer service, dubai storage contact",
  alternates: {
    canonical: "https://safestorage.ae/contact",
  },
}

const contactSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://safestorage.ae/contact#webpage',
    name: 'Contact SafeStorage Dubai',
    description: 'Contact SafeStorage Dubai for storage solutions. Call +971505773388, email support@safestorage.ae, or get a free quote online.',
    url: 'https://safestorage.ae/contact',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    mainEntity: { '@id': 'https://safestorage.ae/#organization' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://safestorage.ae/contact' },
    ],
  },
]

export default function Contact() {
  return (
    <>
      <SchemaScript schema={contactSchemas} />
      {/* Static header content for SEO — server-rendered */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] py-14 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact SafeStorage Dubai</h1>
          <p className="text-lg text-white/90 mb-6">
            Get in touch for a free quote, storage advice, or any questions about our services.
            Our team responds within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971505773388"
              className="inline-block bg-white text-[#0A2463] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call: +971 50 577 3388
            </a>
            <a
              href="https://wa.me/971505773388"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
      <ContactPage />
      {/* Static informational content for SEO — server-rendered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6">How to Reach SafeStorage Dubai</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-3">Phone</h3>
              <p className="text-gray-700 mb-2">
                Call us directly for immediate assistance, storage quotes, and booking:
              </p>
              <p className="font-semibold text-[#D8315B]">+971 50 577 3388</p>
              <p className="text-sm text-gray-500 mt-2">Monday–Saturday: 8 AM – 8 PM</p>
              <p className="text-sm text-gray-500">Sunday: 10 AM – 6 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-3">WhatsApp</h3>
              <p className="text-gray-700 mb-2">
                Send us photos of items to store, ask questions, or request a callback via WhatsApp:
              </p>
              <p className="font-semibold text-green-600">+971 50 577 3388</p>
              <p className="text-sm text-gray-500 mt-2">Typical response time: under 15 minutes</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-3">Online Quote</h3>
              <p className="text-gray-700 mb-2">
                Fill in our online quote form to get a personalised storage quote emailed to you:
              </p>
              <Link
                href="/get-quote"
                className="inline-block text-[#0A2463] font-semibold underline"
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Frequently Asked Contact Questions</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold mb-1">How quickly will you respond to my query?</p>
                <p>Our team responds to all queries within 15 minutes during business hours. WhatsApp and phone calls are answered immediately during operating hours.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Can I visit the storage facility?</p>
                <p>Yes, you are welcome to visit our storage facility. Please call ahead on +971 50 577 3388 to schedule a tour and ensure a consultant is available to assist you.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">What information do I need to provide to get a quote?</p>
                <p>For an accurate quote, let us know what you need to store (type and quantity of items), how long you plan to store, and your pickup location in Dubai. Photos via WhatsApp are helpful for bulk or unusual items.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Do you have customer support in English and Arabic?</p>
                <p>Yes. Our team provides support in both English and Arabic. All correspondence, contracts, and documentation are available in both languages.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Services Available Across Dubai</h3>
            <p className="text-gray-700 mb-4">
              SafeStorage provides pickup and delivery services covering all major areas of Dubai including:
            </p>
            <div className="grid md:grid-cols-3 gap-2 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li>• Dubai Marina &amp; JBR</li>
                <li>• Business Bay &amp; DIFC</li>
                <li>• Downtown Dubai</li>
                <li>• Jumeirah 1, 2, 3</li>
              </ul>
              <ul className="space-y-1">
                <li>• JLT &amp; Media City</li>
                <li>• Palm Jumeirah</li>
                <li>• Al Quoz</li>
                <li>• Dubai Investment Park</li>
              </ul>
              <ul className="space-y-1">
                <li>• Motor City &amp; Sports City</li>
                <li>• Deira &amp; Bur Dubai</li>
                <li>• Mirdif &amp; Rashidiya</li>
                <li>• And all other Dubai areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ and Why Choose Us — extensive SEO content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions About Storage in Dubai</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Everything you need to know about renting storage space in Dubai, our pickup service, pricing, security standards, and how to get started with SafeStorage Dubai.
          </p>

          <div className="space-y-6 mb-16">

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">1. How do I get started with SafeStorage Dubai?</h3>
              <p className="text-gray-700">Getting started is simple. Call us on <strong>+971505773388</strong>, send a WhatsApp message, or fill in the quote form on our website. A dedicated storage consultant will contact you within 15 minutes to understand your requirements, recommend the right unit size, and provide a transparent quote with no hidden charges. Once you confirm, we schedule a door-to-door pickup at a time that suits you — usually within 24 hours.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">2. What is the minimum storage period at SafeStorage Dubai?</h3>
              <p className="text-gray-700">Our minimum storage period is one month. We do not impose long-term contracts — you can store for a single month and cancel at any time with prior notice. Many customers start with a one-month plan and extend as their circumstances evolve. For those committing to longer prepaid plans, we offer a wide range of discounts on the total cost — the longer you store, the more you save.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">3. How much does storage cost in Dubai?</h3>
              <p className="text-gray-700">SafeStorage Dubai offers some of the most competitive storage rates in the UAE. Our pricing starts from <strong>12.60 AED / sqft</strong> (VAT-inclusive). All plans include secure storage, 24/7 security, and free insurance up to AED 5,000. There are no setup fees or admin fees, and the price quoted is the price charged — period.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">4. Do you offer door-to-door service in Dubai?</h3>
              <p className="text-gray-700">Yes. Our door-to-door service is one of the key reasons customers choose SafeStorage over traditional self-storage. Our professional team arrives at your home, office, or any Dubai address, wraps and packs your belongings with care, and transports them to our secure facility. When you need your items back, simply call or WhatsApp us and we deliver them back to your door — usually within 24 to 48 hours. We cover all of Dubai door-to-door; for locations outside Dubai (Sharjah, Ajman, Abu Dhabi) a modest fixed transport fee applies, which we confirm before you book.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">5. What security measures protect my stored items?</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">6. Is insurance included in the storage price?</h3>
              <p className="text-gray-700">Yes. Every SafeStorage Dubai plan includes free insurance coverage of up to AED 5,000 at no additional cost. This covers loss or damage due to fire, flood, theft, or accidental damage while your items are in our care. For customers with higher-value belongings — such as artwork, antiques, or electronics — we offer additional premium insurance at competitive rates. Our team can help you select the right coverage when you book.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">7. Can I store my vehicle at SafeStorage Dubai?</h3>
              <p className="text-gray-700">Yes. SafeStorage offers covered vehicle storage bays for cars, motorcycles, boats, jet skis, and caravans. Vehicle storage starts from 12.60 AED / sqft (VAT-inclusive) and includes 24/7 CCTV monitoring, covered shelter from Dubai&apos;s sun and sandstorms, and optional battery maintenance and tire pressure checks for long-term vehicle storage. Our facility is popular among expats leaving Dubai temporarily, classic car collectors, and owners of seasonal recreational vehicles.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">8. What areas of Dubai do you serve?</h3>
              <p className="text-gray-700">We provide door-to-door service coverage across all of Dubai — from Palm Jumeirah and Dubai Marina in the west, to Deira and Rashidiya in the east, to Dubai Investment Park and Sports City in the south. Areas we regularly serve include Dubai Marina, JBR, JLT, Media City, Business Bay, DIFC, Downtown Dubai, Jumeirah 1-3, Al Quoz, Palm Jumeirah, Mirdif, Motor City, Arabian Ranches, Dubai South, and all other communities. If you are unsure whether we cover your area, call +971505773388 and we will confirm immediately.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">9. Can I access my items after they are in storage?</h3>
              <p className="text-gray-700">Yes. You can request access to your stored items at any time during operating hours. For customers with dedicated private units, you can visit the facility personally on Monday–Saturday 8 AM to 8 PM and Sunday 10 AM to 6 PM. Alternatively, simply call or WhatsApp us to arrange delivery of specific items back to your address. For business customers requiring frequent access, we offer extended access arrangements including 24/7 access packages.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">10. What items are not allowed in storage?</h3>
              <p className="text-gray-700">For safety and compliance reasons, certain items cannot be stored at SafeStorage Dubai. Please note we do not store the following items: food or grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items. We also cannot accept hazardous materials and chemicals, flammable liquids or gases, perishable food and beverages, live plants and animals, illegal or stolen goods, weapons and ammunition, and items with strong odours. If you are unsure whether a specific item is permitted, contact our team before booking and we will advise you promptly.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">11. How quickly can you pick up my items?</h3>
              <p className="text-gray-700">For requests made before 12 PM on any day, we offer same-day pickup subject to availability. Standard pickup slots are available within 24 to 48 hours of booking. For urgent or emergency pickups — such as evictions, last-minute relocations, or flooded properties — call us directly on +971505773388 and we will do our best to arrange immediate assistance. Our team is flexible and responsive to your schedule.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">12. Do you provide packing materials and packing help?</h3>
              <p className="text-gray-700">Yes. SafeStorage provides a complete range of packing materials including cardboard boxes of various sizes, bubble wrap, packing paper, tape, furniture covers, mattress bags, and wardrobe boxes. We also offer a professional packing service where our trained team carefully wraps, boxes, and labels all your belongings before transportation. This service is particularly popular for delicate antiques, electronics, fine art, and china. Ask us about packing service pricing when you book.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">13. What payment methods does SafeStorage accept?</h3>
              <p className="text-gray-700">We accept all major payment methods for your convenience. These include Visa and Mastercard credit and debit cards, bank transfers, cash payments at the facility, and cheques. We also support monthly, quarterly, and annual billing cycles. Customers who prepay in advance receive a wide range of discounts — the longer the cycle you prepay, the more you save. Our accounts team can set up automatic monthly billing linked to your card for complete convenience.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">14. Do you provide storage for businesses in Dubai?</h3>
              <p className="text-gray-700">Yes. SafeStorage Dubai is an excellent solution for businesses of all sizes. We cater to e-commerce companies needing stock storage and fulfilment support, retail businesses requiring overflow inventory space, offices undergoing refurbishment or downsizing, hospitality businesses storing seasonal equipment, and construction firms needing equipment storage. We offer custom corporate rates, dedicated account managers, and flexible access arrangements for business customers. Email support@safestorage.ae or call +971505773388 to discuss your business storage requirements.</p>
            </div>

          </div>

          {/* Why Choose SafeStorage Dubai */}
          <div className="bg-gradient-to-br from-[#0A2463] to-[#3E92CC] rounded-2xl p-10 text-white mb-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose SafeStorage Dubai</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-300">A Trusted Name in Dubai Storage</h3>
                <p className="text-white/90 leading-relaxed">SafeStorage Dubai has been serving residents and businesses across the UAE for over a decade. With more than 10,000 satisfied customers and a track record of reliability, we have become the go-to storage provider for expats, families, and businesses across Dubai. Our commitment to transparency, exceptional service, and competitive pricing has earned us a 4.8-star average rating across all review platforms. When you store with SafeStorage, you are not just renting space — you are gaining a trusted partner who takes responsibility for your belongings as if they were our own.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-300">Clean, Secure Facilities</h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-300">Uncompromising Security</h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-300">Genuinely Hassle-Free Service</h3>
                <p className="text-white/90 leading-relaxed">Traditional self-storage requires you to hire a van, do all the heavy lifting yourself, drive to a facility, navigate loading bays, and repeat the process every time you need access. SafeStorage is completely different. Our professional team comes to your door at a time you choose, handles all the packing and heavy lifting, transports everything safely, and delivers it back whenever you need it. There is nothing for you to do except tell us where you are and what needs storing. This door-to-door model is why thousands of Dubai residents — especially expats, families, and busy professionals — choose us over conventional storage facilities.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-white/80 mb-4 text-lg">Ready to experience Dubai&apos;s best storage service?</p>
              <a
                href="tel:+971505773388"
                className="inline-block bg-yellow-400 text-[#0A2463] px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-lg"
              >
                Call +971505773388 Now
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Contact SafeStorage Dubai</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold mb-1">Phone &amp; WhatsApp</p>
                <p className="text-[#D8315B] text-lg font-bold">+971505773388</p>
                <p className="text-sm text-gray-500 mt-1">Mon–Sat: 8 AM – 8 PM &nbsp;|&nbsp; Sun: 10 AM – 6 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-[#0A2463] font-semibold">support@safestorage.ae</p>
                <p className="text-sm text-gray-500 mt-1">We respond within 2 hours during business hours</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
