import QuotePage from "@/components/quote/quote-page-alternative2"
import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import SchemaScript from "@/components/schema-script"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<Metadata> {
  const params = await searchParams
  const hasParams = Object.keys(params).length > 0

  return {
    title: "Get Free Storage Quote | SafeStorage Dubai",
    description:
      "Get a free, instant quote for storage solutions in Dubai. No obligations, transparent pricing. Book your storage space with SafeStorage Dubai today.",
    keywords:
      "free storage quote dubai, storage estimate, storage booking dubai, get storage quote, storage calculator dubai",
    alternates: {
      canonical: "https://safestorage.ae/get-quote",
    },
    ...(hasParams && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

const quoteSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/get-quote#webpage',
    name: 'Get Free Storage Quote | SafeStorage Dubai',
    description: 'Get a free, instant quote for storage solutions in Dubai. No obligations, transparent pricing.',
    url: 'https://safestorage.ae/get-quote',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Get Quote', item: 'https://safestorage.ae/get-quote' },
    ],
  },
]

export default function GetQuote() {
  return (
    <>
      <SchemaScript schema={quoteSchemas} />
      {/* Static introductory content for SEO — server-rendered */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] py-12 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Storage Quote in Dubai</h1>
          <p className="text-lg text-white/90 mb-2">
            Tell us what you need to store and we&apos;ll give you a transparent, no-obligation quote in minutes.
            Storage units start from 12.65 AED / sqft with hassle-free pickup and delivery across Dubai.
          </p>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <QuotePage />
      </Suspense>
      {/* Static informational content for SEO — server-rendered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6">How Our Free Quote Process Works</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-[#D8315B] mb-3">1</div>
              <h3 className="font-bold text-[#0A2463] mb-2">Tell Us What You Need</h3>
              <p className="text-gray-700 text-sm">
                Fill in the quote form with details about what you need to store — furniture, boxes, a vehicle, or
                business inventory. The more details you provide, the more accurate your quote will be.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-[#D8315B] mb-3">2</div>
              <h3 className="font-bold text-[#0A2463] mb-2">Get Your Personalised Quote</h3>
              <p className="text-gray-700 text-sm">
                Our storage consultant reviews your request and sends you a detailed, transparent quote — no hidden
                fees, no surprises. You&apos;ll know exactly what you&apos;re paying before you commit.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-[#D8315B] mb-3">3</div>
              <h3 className="font-bold text-[#0A2463] mb-2">Schedule Your Hassle-Free Pickup</h3>
              <p className="text-gray-700 text-sm">
                Once you&apos;re happy with the quote, we schedule a hassle-free pickup from your home or office at a time
                that suits you. Our team handles all the heavy lifting and transports your items safely to our
                climate-controlled facility.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Why SafeStorage Dubai?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p>✓ Storage units from 12.65 AED / sqft — no setup fees</p>
              <p>✓ Hassle-free pickup and delivery anywhere in Dubai</p>
              <p>✓ Climate-controlled units — 20–25°C year-round</p>
              <p>✓ 24/7 CCTV and biometric security</p>
              <p>✓ No long-term contracts — cancel anytime</p>
              <p>✓ Free insurance up to AED 5,000 included</p>
              <p>✓ Same-day pickup available for requests before 12 PM</p>
              <p>✓ Dedicated storage consultant for every customer</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Solutions We Offer</h3>
            <p className="text-gray-700 mb-4">
              SafeStorage Dubai provides storage for every need — from a few boxes to an entire villa. Our most
              popular services include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Household storage:</strong> Furniture, appliances, personal belongings during moves or renovations</li>
              <li>• <strong>Business storage:</strong> Office furniture, retail inventory, documents and archives</li>
              <li>• <strong>Furniture storage:</strong> Full furniture protection during renovation, lease transition, or relocation</li>
              <li>• <strong>Vehicle storage:</strong> Cars, motorcycles, boats, jet skis in covered, secure bays</li>
              <li>• <strong>Document storage:</strong> Fireproof archive storage with indexed retrieval</li>
              <li>• <strong>Student storage:</strong> Affordable short-term storage between university semesters</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Not sure which service you need? <Link href="/contact" className="text-[#0A2463] font-semibold underline">Contact us</Link> and
              our team will recommend the best solution for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed pricing guide and FAQ — extensive SEO content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">

          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">How Our Pricing Works — Complete Storage Pricing Guide</h2>
          <p className="text-lg text-gray-700 mb-8">
            SafeStorage Dubai believes pricing should be simple and transparent. Below is a full breakdown of our storage rates, what is included, how unit sizes are calculated, and how to get the best value for your specific storage needs. No jargon, no surprises — just honest pricing.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Starting Price: 12.65 AED / sqft</h3>
            <p className="text-gray-700 mb-4">
              Our storage starts from just <strong>12.65 AED / sqft</strong> (VAT-inclusive). This makes SafeStorage Dubai one of the most affordable storage solutions in the UAE — whether you need to store a handful of items or an entire villa. You pay for the space you actually use, not for a fixed unit regardless of how full it is. All prices are VAT-inclusive with no additional charges applied at checkout.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <h4 className="font-bold text-[#0A2463] mb-3">Flexible Item & Box Storage</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Single boxes and small items</li>
                  <li>• Sofas and large furniture pieces</li>
                  <li>• Wardrobes and large appliances</li>
                  <li>• Bicycles and sports equipment</li>
                  <li>• Mattresses (single/double)</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">Ideal for customers with fewer than 20 items, from 12.65 AED / sqft. Final price confirmed in your personalised quote.</p>
              </div>
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <h4 className="font-bold text-[#0A2463] mb-3">Dedicated Private Units</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Small unit (25–50 sq ft)</li>
                  <li>• Medium unit (50–100 sq ft)</li>
                  <li>• Large unit (100–200 sq ft)</li>
                  <li>• Extra Large (200+ sq ft)</li>
                  <li>• Vehicle bay (car/motorcycle)</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">All units are from 12.65 AED / sqft, climate-controlled and include hassle-free pickup, security, and insurance.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">What Is Included in Every Plan — No Hidden Costs</h3>
            <p className="text-gray-700 mb-4">Every SafeStorage plan — whether item-based or a dedicated unit — includes all of the following at no extra charge:</p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="space-y-3">
                <p><strong>Climate control (18–22°C):</strong> All storage is temperature and humidity controlled, protecting your belongings from Dubai&apos;s extreme heat year-round. This is not an upgrade — it is standard on every plan.</p>
                <p><strong>Hassle-free door-to-door pickup:</strong> Our team collects your items from any Dubai address at your chosen time. No van rental, no heavy lifting for you. Pickup is 100% free for all Dubai locations.</p>
                <p><strong>24/7 HD CCTV security:</strong> Every unit and corridor is monitored continuously by high-definition cameras. Footage is retained and available if any issue arises.</p>
              </div>
              <div className="space-y-3">
                <p><strong>Free insurance up to AED 5,000:</strong> Every plan includes complimentary insurance covering fire, theft, flood, and accidental damage. No paperwork to fill — it is automatic from day one.</p>
                <p><strong>Hassle-free delivery back to your door:</strong> When you need items returned, we deliver them back to any Dubai address. Standard delivery within 24–48 hours. Urgent same-day delivery available on request.</p>
                <p><strong>Dedicated storage consultant:</strong> Every customer is assigned a personal consultant who manages your account, answers questions, and coordinates pickups and deliveries on your behalf.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Long-Term Discounts &amp; Prepaid Plans</h3>
            <p className="text-gray-700 mb-4">Customers who know they need storage for several months save significantly by prepaying. Our long-term discounts are applied automatically:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-5 border-2 border-gray-200 text-center">
                <p className="text-3xl font-bold text-[#D8315B] mb-1">10%</p>
                <p className="font-semibold text-[#0A2463] mb-2">3-Month Prepaid</p>
                <p className="text-sm text-gray-600">Pay for 3 months upfront and save 10% on the total cost. Ideal for renovation projects, short-term relocations, and between-tenancy storage.</p>
              </div>
              <div className="bg-white rounded-lg p-5 border-2 border-[#0A2463] text-center">
                <p className="text-3xl font-bold text-[#D8315B] mb-1">15%</p>
                <p className="font-semibold text-[#0A2463] mb-2">6-Month Prepaid</p>
                <p className="text-sm text-gray-600">Pay for 6 months upfront and save 15%. Popular with expats on extended assignments outside Dubai who need reliable long-term storage.</p>
              </div>
              <div className="bg-white rounded-lg p-5 border-2 border-gray-200 text-center">
                <p className="text-3xl font-bold text-[#D8315B] mb-1">20%</p>
                <p className="font-semibold text-[#0A2463] mb-2">12-Month Prepaid</p>
                <p className="text-sm text-gray-600">Pay for a full year upfront and save 20%. Our best value plan, ideal for businesses with stable storage needs or customers planning extended international travel.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0A2463] mb-6 mt-12">Frequently Asked Questions About Getting a Quote &amp; Pricing</h2>

          <div className="space-y-5 mb-10">

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">1. How long does it take to get a quote?</h3>
              <p className="text-gray-700">Getting a quote from SafeStorage Dubai is very quick. If you fill in the online quote form, a consultant will contact you within 15 minutes during business hours with a detailed, personalised quote. If you call +971505773388 directly, we can provide an indicative price on the spot based on the items you describe. For accurate quotes on large volumes — villa clearances, commercial warehouses — we may request photos via WhatsApp before finalising the price.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">2. Is the quoted price VAT-inclusive?</h3>
              <p className="text-gray-700">Yes. All prices quoted by SafeStorage Dubai are fully VAT-inclusive. There are no surprise charges added at the point of payment. The UAE government imposes a 5% VAT on storage services, and this is already built into every price we quote. What you see is exactly what you pay. We also do not charge any administrative fees, security deposit, or registration fees.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">3. Can I get a quote for just a few items rather than a full unit?</h3>
              <p className="text-gray-700">Absolutely. Our item-based pricing model is designed for exactly this. Rather than paying for an entire storage unit, you can pay only for the space your items occupy. Starting from 12.65 AED / sqft (VAT-inclusive), this is the most economical option for customers storing fewer than 20 to 25 items. Simply list or photograph your items and send them to us via WhatsApp or the online form — we will price each item individually and give you a total monthly cost.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">4. What information do I need to get an accurate quote?</h3>
              <p className="text-gray-700">To provide the most accurate quote possible, it helps to know: the types of items you want to store (furniture, boxes, appliances, vehicle), the approximate quantity and size of each item or the number of rooms being cleared, how long you plan to store, and your pickup address in Dubai. Photos via WhatsApp are very helpful for unusual or large items. The more detail you provide, the more precise your quote will be — but even a rough estimate is enough for us to give you a ballpark figure.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">5. Is pickup really free, or are there fuel charges?</h3>
              <p className="text-gray-700">Pickup and delivery within Dubai is genuinely free — no fuel surcharges, no handling fees, no exceptions. This is included in your storage plan from day one. The only scenario where a pickup fee may apply is if you are located outside Dubai (for example, Sharjah, Ajman, or Abu Dhabi), in which case we charge a modest fixed transport fee. Our team will inform you of any such charges before you confirm the booking, so there are never any surprises.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">6. Can I get a custom quote for a business or commercial storage requirement?</h3>
              <p className="text-gray-700">Yes. Businesses have different storage needs — higher volumes, more frequent access, serialised inventory management, and sometimes multiple locations. SafeStorage Dubai offers dedicated corporate accounts with custom pricing, multiple user access, itemised invoicing for accounting purposes, and a dedicated account manager. Whether you are an e-commerce company storing SKUs, a law firm archiving documents, or a hotel storing seasonal furniture, we can build a storage programme tailored to your operation. Call +971505773388 or email safestoragedubai@gmail.com to discuss business storage.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">7. Do prices change after I confirm a quote?</h3>
              <p className="text-gray-700">No. Once you confirm a quote, that price is locked in for the duration of your agreed storage term. We do not raise prices mid-contract. For customers on rolling monthly plans, we provide a minimum of 30 days&apos; notice before any price adjustment. Our pricing philosophy is built on transparency and trust — we would rather lose a customer to a competitor than surprise them with an unannounced price increase.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">8. Can I add more items to my storage after my initial quote?</h3>
              <p className="text-gray-700">Yes. Storage needs change, and SafeStorage makes it easy to add or remove items at any time. Simply contact your dedicated consultant and let them know what you want to add. If the additional items fit within your current unit, there is no charge change. If you need to upgrade to a larger unit, we will move your belongings at no cost and adjust your monthly fee accordingly. Adding items mid-month is prorated so you never overpay.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">9. What happens if I need to cancel my storage before the contract ends?</h3>
              <p className="text-gray-700">SafeStorage operates on flexible monthly terms with no long-term lock-in. To cancel, simply provide 7 days&apos; notice and we will arrange delivery of all your items back to your address free of charge. If you have prepaid for 3, 6, or 12 months and cancel early, we will refund the unused months minus a small administrative fee. There are no cancellation penalties and no hidden exit costs. We believe customers should stay because they love the service, not because they are contractually trapped.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">10. Are there student storage plans in Dubai?</h3>
              <p className="text-gray-700">Yes. SafeStorage Dubai offers student-specific storage plans designed for university students who need affordable short-term storage between semesters or during summer holidays. Student plans start from 12.65 AED / sqft (VAT-inclusive) with a minimum booking of one month. We partner with several Dubai universities to offer preferential rates to students. If you are a student, mention your university affiliation when getting a quote and we will apply the applicable discount automatically.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">11. Do you offer storage for expats leaving Dubai temporarily?</h3>
              <p className="text-gray-700">Absolutely. Expat storage is one of our most popular services. Many Dubai residents relocate temporarily for work assignments, family obligations, or extended travel and need a secure place to keep their belongings while they are away. SafeStorage provides flexible month-to-month storage with complete peace of mind — your items are climate-controlled, fully insured, and monitored 24/7. When you return to Dubai, we deliver everything back to your new address within 48 hours. We can also manage your storage account remotely via phone and email while you are abroad.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">12. Can I use SafeStorage for e-commerce fulfilment storage?</h3>
              <p className="text-gray-700">Yes. SafeStorage Dubai supports e-commerce businesses needing product storage, pick-and-pack, and last-mile delivery coordination in Dubai. Our e-commerce storage solution includes catalogued inventory storage with barcode labelling, flexible access for order fulfilment, and integration with major e-commerce logistics providers. This is ideal for businesses selling on Amazon, Noon, Instagram, or their own website who need cost-effective UAE warehousing without committing to a full warehouse lease. Contact us to discuss your e-commerce storage and fulfilment requirements.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">13. How do I pay for storage — is online payment available?</h3>
              <p className="text-gray-700">Yes. SafeStorage accepts online card payments via a secure payment portal. You can pay using Visa or Mastercard online, set up automatic recurring monthly payments, or pay via bank transfer, cash, or cheque. Our billing is transparent — you receive a detailed invoice each month showing exactly what you are paying for. If you have any billing queries, our accounts team is available Monday to Saturday during business hours to assist you.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">14. Is there a referral discount at SafeStorage Dubai?</h3>
              <p className="text-gray-700">Yes. Our referral programme rewards existing customers who recommend SafeStorage to friends, family, or colleagues. When someone you refer signs up and starts their storage plan, you receive a discount on your next month&apos;s bill. There is no limit to how many referrals you can make, and the discounts accumulate. Ask your storage consultant for the current referral discount amount when you sign up — it is a great way to reduce your storage costs.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">15. What is the process if I want to retrieve some — but not all — of my stored items?</h3>
              <p className="text-gray-700">Partial retrieval is completely supported. Simply contact your dedicated storage consultant and specify which items you want returned. For customers on item-based plans, each item is catalogued and photographed when it enters storage, making it easy to identify and retrieve specific pieces. For customers with dedicated units, you can either request selected items to be delivered or visit the facility yourself and take what you need. Partial delivery is handled at no extra charge within Dubai.</p>
            </div>

          </div>

          <div className="text-center bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-3">Get Your Personalised Quote Today</h3>
            <p className="text-gray-700 mb-5">Fill in the form above or contact us directly. We respond within 15 minutes during business hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+971505773388"
                className="inline-block bg-[#0A2463] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0a1f52] transition-colors"
              >
                Call: +971505773388
              </a>
              <a
                href="https://wa.me/971505773388"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
