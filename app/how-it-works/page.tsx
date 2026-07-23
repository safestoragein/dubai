import HowItWorksPage from "@/components/how-it-works/how-it-works-page"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How It Works | SafeStorage Dubai Process",
  description:
    "Learn how SafeStorage Dubai's simple 3-step process works: Book online, we collect your items, and access them anytime. Door-to-Door service in Dubai.",
  keywords:
    "how storage works dubai, storage process, pickup delivery dubai, storage booking, self storage process dubai",
  alternates: {
    canonical: "https://safestorage.ae/how-it-works",
    languages: { 'en': 'https://safestorage.ae/how-it-works', 'x-default': 'https://safestorage.ae/how-it-works' },
  },
}

const howItWorksSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/how-it-works#webpage',
    name: 'How It Works | SafeStorage Dubai Storage Process',
    description: 'Learn how SafeStorage Dubai\'s simple 3-step process works: book, we collect, you access anytime.',
    url: 'https://safestorage.ae/how-it-works',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://safestorage.ae/how-it-works' },
    ],
  },
]

export default function HowItWorks() {
  return (
    <>
      <SchemaScript schema={howItWorksSchemas} />
      {/* Static header content for SEO — server-rendered */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] py-14 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How SafeStorage Dubai Works</h1>
          <p className="text-lg text-white/90">
            Our simple 3-step process makes storing your belongings in Dubai completely hassle-free.
            No truck rental, no heavy lifting — we do everything for you.
          </p>
        </div>
      </section>
      <HowItWorksPage />
      {/* Static detailed process content for SEO — server-rendered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">The Complete SafeStorage Process — Step by Step</h2>
          <p className="text-lg text-gray-700 mb-8">
            SafeStorage Dubai has redesigned the entire storage experience to remove every friction point.
            Here is exactly what happens from the moment you get in touch to the day your items are returned.
          </p>

          <div className="space-y-8 mb-12">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-[#D8315B] min-w-[3rem]">1</div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3">Get a Free Quote &amp; Book Your Pickup</h3>
                  <p className="text-gray-700 mb-3">
                    Start by telling us what you need to store. You can get a quote online through our website,
                    call us on +971 50 577 3388, or send us a WhatsApp message with photos of your items. Our
                    storage consultant will assess your requirements and provide a transparent, itemised quote
                    within minutes — no hidden fees, no estimate ranges.
                  </p>
                  <p className="text-gray-700">
                    Once you are happy with the quote, book a pickup time that suits you. We offer morning
                    (8 AM–12 PM), afternoon (12 PM–4 PM), and evening (4 PM–8 PM) slots from Monday to Saturday.
                    Same-day pickup is available for bookings made before 12 PM.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-[#D8315B] min-w-[3rem]">2</div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3">We Collect &amp; Pack Your Items</h3>
                  <p className="text-gray-700 mb-3">
                    Our professional team arrives at your home, office, or any Dubai location at the agreed time.
                    They bring all necessary packing materials — boxes, bubble wrap, furniture covers, and straps.
                    If you have opted for our packing service, the team carefully wraps and packages every item.
                    If you have already packed, they simply load everything securely.
                  </p>
                  <p className="text-gray-700">
                    Every item is handled with care. Furniture is wrapped in protective blankets, fragile items
                    are cushioned individually, and electronics are packed in anti-static materials. Our team
                    does a final walkthrough with you before departure to confirm everything has been collected.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-[#D8315B] min-w-[3rem]">3</div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3">Secure Indoor Storage</h3>
                  <p className="text-gray-700 mb-3">
                    Your items are transported to our secure storage facility and placed in your
                    dedicated unit. Every unit is a clean, dust-protected indoor space, with items stored on
                    raised platforms and away from external walls for added protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-[#D8315B] min-w-[3rem]">4</div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3">Request Delivery Whenever You Need Your Items</h3>
                  <p className="text-gray-700 mb-3">
                    When you want your items back — whether after one week or three years — simply call,
                    WhatsApp, or email us. We schedule a delivery to your address within 24–48 hours. If you
                    only need specific boxes or pieces rather than everything, just let us know and we will
                    retrieve only those items.
                  </p>
                  <p className="text-gray-700">
                    There is no penalty for early retrieval and no requirement to clear the entire unit.
                    You can continue storing the remaining items for as long as needed on the same monthly rate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Frequently Asked Questions About the Process</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold mb-1">How long does pickup take?</p>
                <p>Pickup time depends on the volume of items. A small apartment (20–30 boxes) typically takes 45–60 minutes. A full villa can take 2–3 hours. Our team works efficiently and will give you a time estimate when you book.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Do I need to be present for pickup?</p>
                <p>Yes, someone over 18 should be present to supervise the pickup and sign the inventory sheet. If you cannot be there, you can authorise another adult to be present on your behalf.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">What happens if my items are damaged?</p>
                <p>All stored items are covered by free insurance up to AED 5,000. Additional coverage can be arranged for high-value items. In the unlikely event of damage, file a claim with your dedicated consultant and we will process it within 48 hours.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Can I access my unit directly at the facility?</p>
                <p>Yes. Unit access is available during operating hours: Monday–Saturday 8 AM–8 PM and Sunday 10 AM–6 PM. Bring your ID and the access credentials provided at signup. Extended access hours can be arranged for business customers.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-6">More Frequently Asked Questions</h3>
            <div className="space-y-6 text-gray-700">
              <div>
                <p className="font-semibold mb-2">What areas of Dubai do you collect from?</p>
                <p>We collect from every neighbourhood in Dubai including Business Bay, Dubai Marina, JBR, Jumeirah, Downtown Dubai, Palm Jumeirah, JLT, JVC, Al Barsha, Motor City, Sports City, Dubai Hills, Arabian Ranches, Mirdif, Deira, Bur Dubai, Al Quoz, Dubai Investment Park, Silicon Oasis, and all other residential and commercial areas. If you are unsure whether we cover your location, call +971505773388 and we will confirm within minutes.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Do you offer same-day pickup?</p>
                <p>Yes. Same-day pickup is available for bookings placed before 12 PM. Our team will arrive within the same day&apos;s available time slots. This is ideal for urgent situations such as a lease ending unexpectedly, a renovation starting sooner than planned, or a sudden relocation requirement. For next-day pickups, we have slots available from 8 AM to 8 PM Monday through Saturday.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Is packing service included or is it extra?</p>
                <p>Basic pickup and loading is included in all plans. Professional packing — where our team wraps and boxes your items using quality materials — is an optional add-on service. It is priced per hour and includes all materials such as bubble wrap, packing paper, boxes, furniture covers, and stretch film. Many customers opt for the full packing service for fragile or high-value items and handle standard boxes themselves. Your consultant will give you a clear quote for packing before your pickup appointment.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">How are my items transported?</p>
                <p>All items are transported in our dedicated covered vehicles — never in open flatbeds or shared lorries. Furniture is wrapped in moving blankets before loading, fragile items are packed securely, and everything is strapped in place to prevent movement during transit. For very large moves, we use our larger vehicles with professional loading equipment. The entire journey from your door to our facility is handled by our trained team, not subcontracted third parties.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Do I receive an inventory of my stored items?</p>
                <p>Yes. Upon collection, our team creates a detailed inventory list of everything loaded. For customers who prefer a photo inventory — particularly useful for insurance purposes or businesses storing multiple SKUs — we offer a photo documentation service at no extra charge. The inventory is shared with you via WhatsApp or email on the same day as pickup so you have a complete record of what is in storage.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">How long can I keep items in storage?</p>
                <p>There is no maximum storage period. Some of our customers have been storing with us for several years, including expats who left Dubai temporarily and businesses with long-term archival needs. As long as you continue your monthly plan, your items remain in secure storage indefinitely. We notify you in advance of any plan renewals and you can adjust, downsize, or cancel at any time with appropriate notice.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Can I retrieve just some of my items rather than everything?</p>
                <p>Yes, partial retrieval is one of our most commonly used features. If you need a specific box, a piece of furniture, or a set of documents, simply let your consultant know. Our team retrieves the specified items from your unit and delivers them to your address within 24–48 hours. The remaining items stay in storage unchanged. There is no extra fee for partial retrievals, and you can request as many partial retrievals as you need throughout your storage period.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Do I need to sign a contract?</p>
                <p>Yes, a simple storage agreement is signed before or at the time of pickup. The agreement covers your unit size, monthly rate, access terms, insurance details, and cancellation policy. There are no hidden clauses or automatic long-term commitments — the contract is month-to-month by default. We strongly encourage customers to read the agreement and ask questions before signing. Our team is happy to walk you through every section.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Can I change my unit size after storing?</p>
                <p>Yes. If you find your unit is too large or too small after storing, you can request a unit size change. Upgrades to a larger unit are typically processed within 2–3 business days subject to availability. Downgrades involve moving your items to a smaller unit, which our team can facilitate on your behalf. There is no penalty for changing unit size, and pricing adjusts from the next billing cycle. Many business customers start with a medium unit and grow into a larger one as their inventory expands.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">What payment methods does SafeStorage Dubai accept?</p>
                <p>SafeStorage Dubai accepts credit and debit cards (Visa, Mastercard, and American Express), bank transfers, cash payments at our facility, post-dated cheques for advance payments, Apple Pay, and Google Pay. Monthly, quarterly, and annual payment options are available. Longer prepaid cycles unlock a wide range of discounts, with annual plans offering the best per-month rate compared to month-by-month billing. All invoices are provided digitally and can be used for business expense reporting.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Ready to experience hassle-free storage in Dubai?</p>
            <Link
              href="/get-quote"
              className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
