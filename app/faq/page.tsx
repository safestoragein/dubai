import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { env } from "@/lib/env"
import TrustBadges from "@/components/trust-badges"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "FAQs - Frequently Asked Questions | SafeStorage Dubai",
  description:
    "Find answers to common questions about SafeStorage Dubai. Learn about our storage units, pricing, pickup services, security, and more.",
  keywords:
    "storage faq dubai, self storage questions, storage pricing dubai, storage unit sizes, climate controlled storage questions",
  openGraph: {
    title: "FAQs - SafeStorage Dubai",
    description: "Find answers to common questions about our storage services, pricing, security, and more.",
    url: "https://safestorage.ae/faq",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/faq",
  },
}

const faqCategories = [
  {
    title: "Storage Units & Sizes",
    faqs: [
      {
        question: "What sizes of storage units are available at SafeStorage Dubai?",
        answer: "We offer storage units ranging from 25 sq ft to over 300 sq ft. Our smallest units (25-50 sq ft) are perfect for boxes, seasonal items, and small furniture. Medium units (50-100 sq ft) can accommodate a one-bedroom apartment's contents. Large units (150-300 sq ft) are suitable for multi-bedroom homes or business inventory. We also offer specialized vehicle storage spaces."
      },
      {
        question: "How do I know what size storage unit I need?",
        answer: "Our dedicated storage consultants can help you choose the right size based on your items. As a general guide: Small (25-50 sq ft) for 10-20 boxes or a studio apartment, Medium (50-100 sq ft) for a 1-2 bedroom apartment, Large (100-200 sq ft) for a 3 bedroom home, Extra Large (200+ sq ft) for a villa or business inventory. Contact us for a free consultation!"
      },
      {
        question: "Can I change my storage unit size later?",
        answer: "Yes! We understand your needs may change. You can upgrade or downgrade your storage unit size based on availability. Simply contact your dedicated storage consultant, and we'll help you transition to a more suitable unit with minimal hassle."
      },
    ]
  },
  {
    title: "Climate Control & Security",
    faqs: [
      {
        question: "Is the storage facility climate-controlled?",
        answer: "Yes, all our storage units are fully climate-controlled with advanced HVAC systems maintaining optimal temperature (20-25°C) and humidity levels (45-55%) year-round. This is essential in Dubai's extreme heat to protect furniture, electronics, documents, artwork, and other sensitive items from heat damage, humidity, and dust."
      },
      {
        question: "What security measures are in place at SafeStorage?",
        answer: "Our facility features state-of-the-art security including: 24/7 HD CCTV surveillance covering all areas, biometric access control (only you can access your unit), individual unit alarms, fire detection and suppression systems, on-site security personnel, and secure perimeter fencing. Your belongings are protected around the clock."
      },
      {
        question: "Is insurance available for stored items?",
        answer: "Yes! Every storage unit at SafeStorage Dubai includes FREE insurance coverage up to AED 5,000. For higher-value items, we offer additional comprehensive insurance options. Our team can help you choose the right coverage based on the value of your belongings."
      },
    ]
  },
  {
    title: "Pickup & Delivery",
    faqs: [
      {
        question: "Do you offer pickup and delivery services?",
        answer: "Yes! We provide hassle-free pickup and delivery services across Dubai. Our professional team will collect your items from your location (home, office, or anywhere in Dubai), transport them safely to our climate-controlled facility, and return them whenever you need them back. This hassle-free service is what sets us apart!"
      },
      {
        question: "How quickly can you pick up my items?",
        answer: "We offer same-day pickup for requests made before 12 PM. For standard pickups, we typically schedule within 24-48 hours based on your preferred time slot. Emergency pickup services are also available for urgent requirements."
      },
      {
        question: "What areas do you cover for pickup and delivery?",
        answer: "We cover all major areas in Dubai including: Dubai Marina, JLT, Downtown Dubai, Business Bay, DIFC, Palm Jumeirah, Jumeirah, Al Quoz, Dubai Investment Park, and more. If you're unsure about your area, just ask - we likely cover it!"
      },
    ]
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "How much does storage cost at SafeStorage Dubai?",
        answer: "Our storage pricing starts from 12.65 AED / sqft (VAT-inclusive). We offer flexible storage solutions for all needs - from small boxes to full villa contents. Contact us at +971505773388 for a personalized quote based on your storage requirements. We also offer flexible payment plans and discounts for long-term storage (3+ months)."
      },
      {
        question: "Are there any hidden fees?",
        answer: "Absolutely not! We believe in transparent pricing. The price quoted includes: climate-controlled storage, 24/7 security, basic insurance (up to AED 5,000), and access during operating hours. Pickup and delivery within Dubai is FREE. The only additional costs would be for premium insurance or packing materials, both of which are optional."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept multiple payment methods for your convenience: Credit/Debit cards (Visa, Mastercard), Bank transfers, Cash payments, and Cheques. We also offer flexible payment plans - monthly, quarterly, or annual payments with discounts for longer commitments."
      },
      {
        question: "Do you offer any discounts?",
        answer: "Yes! We offer several discount programs: 10% off for 3-month prepaid plans, 15% off for 6-month prepaid plans, 20% off for annual prepaid plans, Special rates for businesses and bulk storage, Referral discounts when you recommend us to friends."
      },
    ]
  },
  {
    title: "Access & Hours",
    faqs: [
      {
        question: "Can I access my storage unit anytime?",
        answer: "You have access to your storage unit during our operating hours: Monday-Saturday 8:00 AM to 8:00 PM, and Sunday 10:00 AM to 6:00 PM. For business customers, we can arrange extended access hours or 24/7 access upon request with special arrangements."
      },
      {
        question: "What if I need something urgently outside operating hours?",
        answer: "We understand emergencies happen! Contact our support team, and we'll do our best to accommodate urgent access requests. For business customers with 24/7 access packages, round-the-clock access is available."
      },
      {
        question: "Can someone else access my storage unit?",
        answer: "Your unit is secured with biometric access linked to your profile. If you want to authorize someone else (family member, employee, etc.), you can add them as an authorized user. Just provide us with their details, and we'll set up their access credentials."
      },
    ]
  },
  {
    title: "Moving & Packing",
    faqs: [
      {
        question: "Do you provide packing materials?",
        answer: "Yes, we offer a complete range of packing materials including: sturdy cardboard boxes in various sizes, bubble wrap and packing paper, tape and markers, furniture covers and mattress bags, wardrobe boxes for clothes. We also offer pre-made packing kits for different storage needs."
      },
      {
        question: "Can you help with packing my items?",
        answer: "Absolutely! Our professional team can assist with packing and unpacking services for an additional fee. They're trained to pack items securely to maximize protection during transport and storage. This service is especially popular for delicate items, artwork, and electronics."
      },
      {
        question: "What items can I store?",
        answer: "You can store most household and business items including: furniture, appliances, electronics, clothes and personal belongings, documents and files, business inventory, vehicles (cars, motorcycles, boats), and seasonal items. Prohibited items include: hazardous materials, flammable substances, perishable food, live plants/animals, and illegal items."
      },
    ]
  },
  {
    title: "Insurance &amp; Item Protection",
    faqs: [
      {
        question: "What exactly does the free insurance cover?",
        answer: "Every SafeStorage Dubai plan includes complimentary insurance coverage up to AED 5,000 per storage agreement. This coverage protects against loss or damage caused by fire, theft, flooding, and accidental damage while your items are in our care — both during transit and while in the storage facility. The insurance activates automatically from the moment our team collects your belongings. No paperwork or applications are required. For customers with higher-value items such as artwork, antiques, jewellery, or high-end electronics, we offer enhanced insurance options at an additional monthly fee — ask your consultant for details."
      },
      {
        question: "How do I make an insurance claim if something is damaged?",
        answer: "In the unlikely event that an item is lost or damaged while in SafeStorage care, contact your dedicated storage consultant immediately or email safestoragedubai@gmail.com. Describe the item and the nature of the damage. Our team will arrange for one of our claims specialists to assess the situation within 48 hours. For insured items, the claim process is straightforward and we aim to resolve all claims within 7 to 14 working days. We photograph every item before storage, which means we have a clear record of the condition each item was in when it entered our care."
      },
      {
        question: "Can I get insurance for items worth more than AED 5,000?",
        answer: "Yes. For customers storing high-value items — such as fine art, antique furniture, luxury watches, jewellery collections, or high-end electronics — SafeStorage offers enhanced insurance coverage beyond the standard AED 5,000 included in every plan. Enhanced coverage is priced based on the declared replacement value of your items and the level of cover required. Our consultant will help you calculate the appropriate coverage amount and provide a quote for the additional insurance premium. We strongly recommend enhanced coverage for any item valued over AED 5,000."
      },
    ]
  },
  {
    title: "Item Pickup Process",
    faqs: [
      {
        question: "What happens step-by-step on the day of pickup?",
        answer: "On your scheduled pickup day, our uniformed team arrives within your chosen 2-hour time window. The team will introduce themselves, confirm the items to be collected, and begin wrapping furniture with protective covers and bubble wrap. Each item is photographed and added to your digital inventory before being carefully loaded into our vehicle. You will receive a digital receipt listing every collected item, including photos, via email or WhatsApp. The entire process is typically completed within 1 to 3 hours depending on the volume of items. Our team handles all the heavy lifting — you do not need to do anything except let us in."
      },
      {
        question: "Do I need to be present at home during pickup?",
        answer: "Yes, it is preferred that you or an authorised representative is present at pickup so you can confirm the items to be collected and verify the digital inventory list. If you cannot be present personally, you can authorise a family member, building supervisor, or trusted colleague to be present on your behalf. Simply inform your storage consultant in advance and provide the name of the authorised person. In exceptional cases, arrangements can be made via building management, but this must be agreed upon before the pickup date."
      },
      {
        question: "How far in advance do I need to book a pickup?",
        answer: "Standard pickups can be scheduled with as little as 24 hours&apos; notice in most cases. For same-day pickup, requests must be made before 12 PM on the same day and are subject to team availability. For large pickups — such as full villa clearances, commercial office removals, or multi-tonne business inventory — we recommend booking 2 to 3 days in advance to ensure we allocate the appropriate team size and vehicle capacity. For urgent same-day requests, call +971505773388 directly for the fastest response."
      },
    ]
  },
  {
    title: "Billing &amp; Cancellation",
    faqs: [
      {
        question: "How does monthly billing work at SafeStorage?",
        answer: "Billing at SafeStorage Dubai is simple and transparent. You pay your first month of storage when confirming your booking. Subsequent months are billed on the same date each month. You will receive an email invoice before each billing date showing the exact amount due. Payment can be made automatically via saved card, or manually via bank transfer, cash, or cheque. All invoices are VAT-compliant and clearly itemise the storage service, VAT amount, and total due. There are no surprise charges and no fees you were not told about upfront."
      },
      {
        question: "How do I cancel my storage plan?",
        answer: "Cancelling with SafeStorage is straightforward and penalty-free. Simply provide 7 days&apos; written or verbal notice to your dedicated storage consultant or contact us via email or WhatsApp. We will schedule the delivery of all your stored items back to your Dubai address free of charge within your notice period. If you have prepaid for a longer term and cancel early, we will refund the unused months minus a small administrative processing fee. There are no cancellation penalties, no lock-in clauses, and no obstacles to ending your storage — we want you to stay because you love the service, not because you feel trapped."
      },
      {
        question: "What happens if I miss a monthly payment?",
        answer: "If a payment fails or is missed, SafeStorage will contact you by phone, email, and WhatsApp within 24 hours to notify you and arrange payment. Your storage continues uninterrupted for a grace period of 7 days while the payment issue is resolved. If payment is not received within 14 days, access to the facility may be restricted until the outstanding balance is cleared. We always work with customers to find a solution — if you are experiencing financial difficulty, contact your consultant before the payment due date and we will discuss options including deferred payment arrangements."
      },
    ]
  },
  {
    title: "Access Hours &amp; Retrieval",
    faqs: [
      {
        question: "What are the facility operating hours for self-access?",
        answer: "SafeStorage Dubai&apos;s facility is open for customer self-access Monday to Saturday from 8:00 AM to 8:00 PM, and Sunday from 10:00 AM to 6:00 PM. During these hours, customers with dedicated private units can visit the facility, access their unit using biometric or access code credentials, and add or remove items. For customers who prefer the convenience of delivery, simply contact your consultant any time during business hours and we will arrange delivery to your door within 24 to 48 hours. Business customers with 24/7 access requirements should enquire about our extended access packages."
      },
      {
        question: "Can I retrieve a single item from storage without getting everything back?",
        answer: "Yes, absolutely. Partial retrieval is fully supported and completely free within Dubai. Simply contact your dedicated storage consultant, tell them which specific item or items you need, and we will arrange delivery of just those items to your address. For item-based storage plans, each item is individually catalogued and photographed, making it easy to identify and retrieve specific pieces from your inventory. For unit-based storage customers, you can either request specific item delivery or visit the facility yourself and take what you need while leaving everything else in storage."
      },
      {
        question: "Is there emergency access available outside normal hours?",
        answer: "SafeStorage understands that emergencies do not follow business hours. If you have an urgent need to access stored items outside our normal operating hours, contact +971505773388 and our on-call team will do their best to accommodate your request. Emergency access may incur a small out-of-hours service fee, which will be confirmed before any access is granted. For business customers with frequent after-hours access needs, we recommend discussing a 24/7 access package which provides round-the-clock facility access with no per-visit charges."
      },
    ]
  },
  {
    title: "Prohibited Items &amp; Special Requirements",
    faqs: [
      {
        question: "Can I store valuable documents and important records?",
        answer: "Yes. SafeStorage Dubai offers specialist document and archive storage with enhanced protection measures. Our document storage areas feature fireproof construction, advanced fire suppression systems, and controlled humidity levels that prevent paper deterioration. All document boxes are individually indexed and catalogued for easy retrieval. We offer same-day retrieval for specific documents when needed urgently. This service is popular with law firms, accounting practices, medical clinics, and businesses required to retain records under UAE compliance regulations. Pricing starts from 12.65 AED / sqft (VAT-inclusive)."
      },
      {
        question: "What prohibited items must I not bring to SafeStorage?",
        answer: "For the safety of all customers, staff, and stored property, the following items are strictly prohibited at SafeStorage Dubai: hazardous chemicals and toxic substances, flammable liquids and gases (including fuel, propane, and aerosols in large quantities), perishable food and beverages, live animals or plants, illegal goods of any kind, weapons and ammunition, stolen property, and items with strong or offensive odours. If you are unsure whether a specific item is permitted, contact your storage consultant before your pickup date. Attempting to store prohibited items may result in immediate contract termination."
      },
      {
        question: "Can I store temperature-sensitive items like wine or medication?",
        answer: "SafeStorage&apos;s climate-controlled units maintain 18–22°C, which is suitable for many temperature-sensitive items. However, wine and medication have specific temperature and humidity requirements that may differ from our standard climate-controlled range. For fine wine collections, we recommend consulting us about whether our temperature range is appropriate for your specific varietals. For pharmaceutical products and medication, please confirm storage requirements with your healthcare provider before using our facility. We are happy to discuss special requirements and explore whether a custom temperature arrangement is possible for specific cases."
      },
    ]
  },
  {
    title: "International Shipping &amp; Overseas Storage",
    faqs: [
      {
        question: "Can I use SafeStorage if I am moving abroad from Dubai?",
        answer: "Yes. SafeStorage Dubai is an excellent solution for residents leaving the UAE permanently or temporarily. We can store your belongings securely while you transition to your new country, and arrange delivery back to your new address when you are ready — whether that is in Dubai when you return, or internationally via our partner freight and shipping services. Many expats use SafeStorage as a long-term base for their UAE belongings, knowing their items are safe, climate-controlled, and insured while they are overseas. Your account can be managed entirely remotely by phone, email, and WhatsApp."
      },
      {
        question: "Do you offer international shipping of stored items?",
        answer: "SafeStorage Dubai partners with reputable international freight and logistics providers to offer shipping services for customers who need their stored belongings sent overseas. Whether you are moving to Europe, Asia, Australia, or the Americas, we can coordinate the packing, documentation, and shipping of your items from our facility to your international address. International shipping costs depend on destination, volume, weight, and shipping method (air freight vs. sea freight). Contact our team on +971505773388 to discuss international shipping options and receive a quotation for your specific destination."
      },
    ]
  },
  {
    title: "E-Commerce &amp; Business Storage",
    faqs: [
      {
        question: "How does SafeStorage support e-commerce businesses in Dubai?",
        answer: "SafeStorage Dubai supports e-commerce businesses with a flexible, cost-effective storage and fulfilment model. We provide catalogued inventory storage for online sellers, with individual SKU tracking, barcode labelling, and stock management reports available. Our team can assist with pick-and-pack operations for order fulfilment, and we coordinate with major last-mile delivery providers in Dubai to ship orders directly to your customers. This solution is ideal for businesses selling on Amazon UAE, Noon, Instagram, or their own website who need UAE-based warehousing without the cost of leasing a dedicated warehouse space."
      },
      {
        question: "Can SafeStorage handle seasonal inventory storage for retail businesses?",
        answer: "Yes. Many retail businesses in Dubai use SafeStorage to manage seasonal inventory — storing summer stock during winter, clearing showroom space during peak periods, or archiving discontinued product lines. Our flexible monthly contracts mean businesses only pay for storage when they need it, with no minimum lease commitment. For retail businesses with high-frequency access needs, we can arrange scheduled weekly or twice-weekly access slots to maintain smooth inventory management. Contact our business team to discuss a custom retail storage programme tailored to your seasonal cycle."
      },
    ]
  },
  {
    title: "Student &amp; Expat Storage",
    faqs: [
      {
        question: "Is SafeStorage suitable for university students in Dubai?",
        answer: "Absolutely. SafeStorage Dubai is a popular storage solution for students at universities and colleges in Dubai and the wider UAE. Our pricing starting from 12.65 AED / sqft (VAT-inclusive) makes storage genuinely affordable for students on tight budgets. You pay only for the space your belongings actually occupy, so typical student storage needs — 5 to 15 boxes plus a bicycle, sports equipment, or small appliances — remain very affordable. We can store your belongings between semesters, during study-abroad periods, or over summer breaks. Student discounts are available — ask about our current student offer when you get a quote."
      },
      {
        question: "What makes SafeStorage ideal for Dubai expats specifically?",
        answer: "Dubai&apos;s large expat population faces unique storage challenges: frequent apartment moves as lease terms change, transitional periods between tenancies, temporary relocations back to home countries, and the general transience of expat life. SafeStorage is designed to accommodate all of these scenarios seamlessly. Our flexible monthly contracts require no long-term commitment, our door-to-door service eliminates the logistical hassle of self-storage, and our facility can store your belongings safely and affordably for months or years while you navigate the next chapter of your Dubai journey. Many expats consider SafeStorage their &apos;Dubai home base&apos; for their most valued belongings."
      },
    ]
  },
]

const faqPageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://safestorage.ae/faq#faqpage',
    name: 'Frequently Asked Questions — SafeStorage Dubai',
    url: 'https://safestorage.ae/faq',
    mainEntity: faqCategories.flatMap(cat =>
      cat.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      }))
    ),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/faq#webpage',
    name: 'FAQs — Frequently Asked Questions | SafeStorage Dubai',
    description: 'Find answers to common questions about SafeStorage Dubai. Learn about our storage units, pricing, pickup services, security, and more.',
    url: 'https://safestorage.ae/faq',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://safestorage.ae/faq' },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
    <SchemaScript schema={faqPageSchemas} />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-dubai-navy to-dubai-navy/90 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-dubai-gold/20 text-dubai-gold text-sm font-medium rounded-full mb-6">
              Help Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80">
              Find answers to common questions about our storage services
            </p>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-dubai-navy mb-6 pb-2 border-b border-dubai-gold/20">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg px-6 data-[state=open]:bg-gray-50"
                    >
                      <AccordionTrigger className="text-left font-medium text-dubai-navy hover:text-dubai-gold py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dubai-navy mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our dedicated team is here to help. Reach out to us and we&apos;ll get back to you within 15 minutes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer nofollow">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-dubai-navy text-dubai-navy hover:bg-dubai-navy hover:text-white" asChild>
                <a href={env.PHONE_LINK}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 050-577-3388
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dubai-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 text-lg mb-8">
              Join 500+ happy customers who trust SafeStorage Dubai. Get your free quote in just 2 minutes.
            </p>
            <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
              <Link href="/get-quote" className="group">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Static rich-text guide section for SEO — server-rendered */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy mb-6">Complete Guide to Self Storage in Dubai</h2>
          <p className="text-lg text-gray-700 mb-8">
            Choosing a self storage solution in Dubai can be confusing — units vary in size, facilities differ
            in quality, and pricing models are not always transparent. Here is everything you need to know about
            storing with SafeStorage Dubai, from choosing the right unit size to understanding what is included
            in your monthly plan.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-dubai-navy mb-3">Choosing the Right Storage Unit Size</h3>
              <p className="text-gray-700 mb-3">
                The most common mistake people make is either overestimating or underestimating the storage space
                they need. SafeStorage offers a free volume assessment — tell us what you have and we will
                recommend the right unit size. As a guide:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>25–50 sq ft:</strong> 10–20 boxes, studio apartment contents, seasonal items</li>
                <li><strong>50–100 sq ft:</strong> 1–2 bedroom apartment, small office clearance</li>
                <li><strong>100–200 sq ft:</strong> 3–4 bedroom villa, large office move</li>
                <li><strong>200+ sq ft:</strong> Full villa, commercial inventory, warehouse overflow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dubai-navy mb-3">Why Climate Control Is Essential in Dubai</h3>
              <p className="text-gray-700 mb-3">
                Dubai summer temperatures regularly exceed 45°C outdoors and 55°C inside non-climate-controlled
                storage containers. This extreme heat causes irreversible damage to wood, leather, electronics,
                photographs, artwork, and many fabrics within weeks.
              </p>
              <p className="text-gray-700">
                All SafeStorage units maintain a consistent 20–25°C temperature and 45–55% relative humidity
                year-round using industrial HVAC systems. This is not an optional upgrade — it is included
                in every storage plan at no additional cost.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-dubai-navy mb-4">How Pickup &amp; Delivery Works</h3>
            <p className="text-gray-700 mb-4">
              SafeStorage&apos;s hassle-free model is what sets us apart from traditional self storage in Dubai.
              Instead of renting a lorry and loading everything yourself, our professional team does everything:
            </p>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Book online or call:</strong> Schedule a pickup time through our website, WhatsApp, or by calling +971 50 577 3388.</li>
              <li><strong>2. We arrive at your door:</strong> Our uniformed team arrives at your chosen time window with all necessary equipment.</li>
              <li><strong>3. We pack and load:</strong> Our team wraps furniture, boxes loose items, and loads everything carefully into our transport vehicle.</li>
              <li><strong>4. Secure storage:</strong> Your items are transported to our climate-controlled facility and stored in your dedicated unit.</li>
              <li><strong>5. Retrieve on demand:</strong> Call or WhatsApp whenever you need items back. We deliver to your address within 24–48 hours.</li>
            </ol>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-dubai-navy mb-4">What Is and Is Not Allowed in Storage</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold text-green-700 mb-2">Allowed Items</p>
                <ul className="space-y-1 text-sm">
                  <li>• Household furniture and appliances</li>
                  <li>• Personal clothing and belongings</li>
                  <li>• Electronics and gadgets</li>
                  <li>• Books, documents, and files</li>
                  <li>• Artwork, antiques, and collectibles</li>
                  <li>• Sports and outdoor equipment</li>
                  <li>• Business inventory and office furniture</li>
                  <li>• Vehicles (in designated vehicle bays)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-700 mb-2">Not Allowed Items</p>
                <ul className="space-y-1 text-sm">
                  <li>• Hazardous materials and chemicals</li>
                  <li>• Flammable liquids and gases</li>
                  <li>• Perishable food and beverages</li>
                  <li>• Live plants and animals</li>
                  <li>• Illegal or stolen goods</li>
                  <li>• Weapons and ammunition</li>
                  <li>• Unregistered cash or currency</li>
                  <li>• Items with strong or unpleasant odours</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-dubai-navy mb-4">SafeStorage Dubai — Key Facts</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p>• Storage from 12.65 AED / sqft (VAT-inclusive) — no setup fees</p>
              <p>• Hassle-free pickup and delivery anywhere in Dubai</p>
              <p>• Climate-controlled: 20–25°C maintained year-round</p>
              <p>• 24/7 HD CCTV security and biometric access</p>
              <p>• Free insurance up to AED 5,000 included</p>
              <p>• Month-to-month contracts — no long-term lock-in</p>
              <p>• Same-day pickup available before 12 PM</p>
              <p>• Dedicated storage consultant for every customer</p>
              <p>• Professional packing service available</p>
              <p>• Multiple payment methods accepted</p>
              <p>• 10+ years experience serving Dubai customers</p>
              <p>• 1 Lakh+ satisfied customers globally</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
