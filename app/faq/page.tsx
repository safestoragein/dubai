import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import fx from "@/components/landing/home-fx.module.css"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import z from "@/components/silo/size-cards.module.css"
import fq from "@/components/landing/faq-hub.module.css"

/**
 * /faq — the FAQ hub, redesigned on the shared landing system
 * (owner, 2026-09-22) with their own photo.
 *
 * This is the one page the five-question rule does not apply to as a whole:
 * it IS the question list. Instead the questions stay in their named
 * categories and no category shows more than six, so nothing is ever a wall.
 * Every question, answer and schema node is the copy that was already here.
 */

export const metadata: Metadata = {
  title: { absolute: "Storage FAQs | Your Questions Answered | SafeStorage Dubai" },
  description:
    "Find answers about storage sizes, security, pricing, and pickup services at SafeStorage Dubai.",
  keywords:
    "Storage FAQs Dubai, Self storage questions, Storage unit sizes, SafeStorage help, Storage security Dubai, Pickup and delivery storage, Storage pricing FAQ, Packing services Dubai, 24/7 storage access, Storage facility rules, Household storage tips, Business storage help, Dubai safe storage guide",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
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
        q: "What sizes of storage units are available at SafeStorage Dubai?",
        a: "We offer storage units ranging from 25 sq ft to over 300 sq ft. Our smallest units (25-50 sq ft) are perfect for boxes, seasonal items, and small furniture. Medium units (50-100 sq ft) can accommodate a one-bedroom apartment's contents. We also offer specialized vehicle storage spaces."
      },
      {
        q: "How do I know what size storage unit I need?",
        a: "Our dedicated storage consultants can help you choose the right size based on your items. As a general guide: Small (25-50 sq ft) for 10-20 boxes or a studio apartment, Medium (50-100 sq ft) for a 1-2 bedroom apartment, Large (100-200 sq ft) for a 3 bedroom home, Extra Large (200+ sq ft) for a villa or business inventory."
      },
      {
        q: "Can I change my storage unit size later?",
        a: "Yes! We understand your needs may change. You can upgrade or downgrade your storage unit size based on availability. Simply contact your dedicated storage consultant, and we'll help you transition to a more suitable unit with minimal hassle."
      },
    ]
  },
  {
    title: "Pickup & Delivery",
    faqs: [
      {
        q: "Do you offer pickup and delivery services?",
        a: "Yes! We provide door-to-door services across Dubai. Our professional team will collect your items from your location (home, office, or anywhere in Dubai), transport them safely to our secure facility, and return them whenever you need them back. This door-to-door service is what sets us apart!"
      },
      {
        q: "How quickly can you pick up my items?",
        a: "We offer same-day pickup for requests made before 12 PM. For standard pickups, we typically schedule within 24-48 hours based on your preferred time slot. Emergency pickup services are also available for urgent requirements."
      },
      {
        q: "What areas do you cover for pickup and delivery?",
        a: "We cover all major areas in Dubai including: Dubai Marina, JLT, Downtown Dubai, Business Bay, DIFC, Palm Jumeirah, Jumeirah, Al Quoz, Dubai Investment Park, and more. If you're unsure about your area, just ask - we likely cover it!"
      },
    ]
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        q: "How much does storage cost at SafeStorage Dubai?",
        a: "You pay only for the space your items use, with transparent pricing and no hidden fees. We offer flexible storage solutions for all needs - from small boxes to full villa contents. Contact us at +971505773388 for a personalized quote based on your storage requirements."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept multiple payment methods for your convenience: Credit/Debit cards (Visa, Mastercard), Bank transfers, Cash payments, and Cheques. We also offer flexible payment plans - monthly, quarterly, or annual payments with discounts for longer commitments."
      },
      {
        q: "Do you offer any discounts?",
        a: "Yes! We offer a wide range of discounts: savings on prepaid plans that grow the longer you store, special rates for businesses and bulk storage, and referral discounts when you recommend us to friends. Contact us for the best available rate for your storage duration."
      },
      {
        q: "What is the cheapest storage option in Dubai?",
        a: "The cheapest storage in Dubai is the space you actually use. We bill only for the volume your items occupy, so storing a few boxes costs a fraction of a full unit. Longer prepaid terms reduce the rate further, and door-to-door pickup means you do not pay separately for a van or a driver."
      },
      {
        q: "Are there any hidden fees for storage in Dubai?",
        a: "No. We quote one price in writing, excluding VAT, before you book, and that is what you pay. There is no admin fee, no security deposit, no lock deposit and no charge for access to your own items during operating hours. Billing is month-to-month and you can cancel with no early-termination penalty."
      },
      {
        q: "How much does it cost to store a car in Dubai?",
        a: "Vehicle storage is charged on the same basis as everything else — for the floor space the vehicle occupies, so the cost depends on whether you are storing a motorcycle, a saloon car or a 4x4. Vehicles are kept indoors and away from Dubai's summer heat, under CCTV, with logged access."
      },
    ]
  },
  {
    title: "Access & Hours",
    faqs: [
      {
        q: "Can I access my storage unit anytime?",
        a: "You have access to your storage unit during our operating hours: Monday–Sunday 8:00 AM to 8:00 PM. For business customers, we can arrange extended access hours or 24/7 access upon request with special arrangements."
      },
      {
        q: "What if I need something urgently outside operating hours?",
        a: "We understand emergencies happen! Contact our support team, and we'll do our best to accommodate urgent access requests. For business customers with 24/7 access packages, round-the-clock access is available."
      },
    ]
  },
  {
    title: "Moving & Packing",
    faqs: [
      {
        q: "Do you provide packing materials?",
        a: "Yes, we offer a complete range of packing materials including: sturdy cardboard boxes in various sizes, bubble wrap and packing paper, tape and markers, furniture covers and mattress bags, wardrobe boxes for clothes. We also offer pre-made packing kits for different storage needs."
      },
      {
        q: "Can you help with packing my items?",
        a: "Absolutely! Our professional team can assist with packing and unpacking services for an additional fee. They're trained to pack items securely to maximize protection during transport and storage. This service is especially popular for delicate items, artwork, and electronics."
      },
      {
        q: "What items can I store?",
        a: "You can store most household and business items including: furniture, appliances, electronics, clothes and personal belongings, documents and files, business inventory, vehicles (cars, motorcycles, boats), and seasonal items. Please note we do not store the following items: food or grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items."
      },
    ]
  },
  {
    title: "Item Pickup Process",
    faqs: [
      {
        q: "What happens step-by-step on the day of pickup?",
        a: "On your scheduled pickup day, our uniformed team arrives within your chosen 2-hour time window. The team will introduce themselves, confirm the items to be collected, and begin wrapping furniture with protective covers and bubble wrap."
      },
      {
        q: "Do I need to be present at home during pickup?",
        a: "Yes, it is preferred that you or an authorised representative is present at pickup so you can confirm the items to be collected and verify the digital inventory list. If you cannot be present personally, you can authorise a family member, building supervisor, or trusted colleague to be present on your behalf."
      },
      {
        q: "How far in advance do I need to book a pickup?",
        a: "Standard pickups can be scheduled with as little as 24 hours' notice in most cases. For same-day pickup, requests must be made before 12 PM on the same day and are subject to team availability. For urgent same-day requests, call +971505773388 directly for the fastest response."
      },
    ]
  },
  {
    title: "Billing & Cancellation",
    faqs: [
      {
        q: "How does monthly billing work at SafeStorage?",
        a: "Billing at SafeStorage Dubai is simple and transparent. You pay your first month of storage when confirming your booking. Subsequent months are billed on the same date each month. You will receive an email invoice before each billing date showing the exact amount due."
      },
      {
        q: "How do I cancel my storage plan?",
        a: "Cancelling with SafeStorage is straightforward and penalty-free. Simply tell your dedicated storage consultant, or contact us via email or WhatsApp. We will schedule door-to-door delivery of all your stored items back to your Dubai address."
      },
      {
        q: "What happens if I miss a monthly payment?",
        a: "If a payment fails or is missed, SafeStorage will contact you by phone, email, and WhatsApp within 24 hours to notify you and arrange payment. Your storage continues uninterrupted for a grace period of 7 days while the payment issue is resolved."
      },
    ]
  },
  {
    title: "Access Hours & Retrieval",
    faqs: [
      {
        q: "Can I retrieve a single item from storage without getting everything back?",
        a: "Yes, absolutely. Partial retrieval is fully supported within Dubai. Simply contact your dedicated storage consultant, tell them which specific item or items you need, and we will arrange delivery of just those items to your address."
      },
      {
        q: "Is there emergency access available outside normal hours?",
        a: "SafeStorage understands that emergencies do not follow business hours. If you have an urgent need to access stored items outside our normal operating hours, contact +971505773388 and our on-call team will do their best to accommodate your request."
      },
    ]
  },
  {
    title: "Prohibited Items & Special Requirements",
    faqs: [
      {
        q: "Can I store valuable documents and important records?",
        a: "Yes. SafeStorage Dubai offers specialist document and archive storage with enhanced protection measures. Our document storage areas feature fireproof construction, advanced fire suppression systems, and clean, dust-protected shelving that keeps records in good condition."
      },
      {
        q: "What prohibited items must I not bring to SafeStorage?",
        a: "For the safety of all customers, staff, and stored property, the following items are strictly prohibited at SafeStorage Dubai: food and grocery items, liquids, detergents, cosmetics, ornaments and jewellery, medicines, and masala or spice items, as well as hazardous chemicals and toxic substances, flammable liquids and gases (including fuel, propane, and aerosols in large quantities), perishable food and beverages, live animals or plants, illegal goods of any kind, weapons and ammunition, stolen property, and items with strong or offensive odours."
      },
    ]
  },
  {
    title: "International Shipping & Overseas Storage",
    faqs: [
      {
        q: "Do you offer international shipping of stored items?",
        a: "SafeStorage Dubai partners with reputable international freight and logistics providers to offer shipping services for customers who need their stored belongings sent overseas. Whether you are moving to Europe, Asia, Australia, or the Americas, we can coordinate the packing, documentation, and shipping of your items from our facility to your international address."
      },
    ]
  },
  {
    title: "E-Commerce & Business Storage",
    faqs: [
      {
        q: "How does SafeStorage support e-commerce businesses in Dubai?",
        a: "SafeStorage Dubai supports e-commerce businesses with a flexible, cost-effective storage and fulfilment model. We provide catalogued inventory storage for online sellers, with individual SKU tracking, barcode labelling, and stock management reports available."
      },
      {
        q: "Can SafeStorage handle seasonal inventory storage for retail businesses?",
        a: "Yes. Many retail businesses in Dubai use SafeStorage to manage seasonal inventory — storing summer stock during winter, clearing showroom space during peak periods, or archiving discontinued product lines."
      },
    ]
  },
  {
    title: "Student & Expat Storage",
    faqs: [
      {
        q: "Is SafeStorage suitable for university students in Dubai?",
        a: "Absolutely. SafeStorage Dubai is a popular storage solution for students at universities and colleges in Dubai and the wider UAE. Our pricing makes storage genuinely affordable for students on tight budgets. Student discounts are available — ask about our current student offer when you get a quote."
      },
      {
        q: "What makes SafeStorage ideal for Dubai expats specifically?",
        a: "Dubai's large expat population faces unique storage challenges: frequent apartment moves as lease terms change, transitional periods between tenancies, temporary relocations back to home countries, and the general transience of expat life. SafeStorage is designed to accommodate all of these scenarios seamlessly."
      },
    ]
  },
  {
    title: "Choosing a Storage Company",
    faqs: [
      {
        q: "Why should I choose SafeStorage Dubai over other storage companies?",
        a: "SafeStorage Dubai brings the storage to you. Our own trained team collects from your door, inventories and signs for every item, and delivers it back when you ask — nothing is subcontracted to third-party movers, so one company holds the chain of custody throughout."
      },
      {
        q: "What should I compare when choosing a storage company in Dubai?",
        a: "Compare four things. First, whether VAT is stated and the price quoted in writing before booking — many quotes exclude VAT, access fees or a deposit. Second, whether collection and delivery are included or billed separately as a moving job. Third, whether you receive a documented inventory signed at collection, which is your only record of what was handed over. Fourth, the contract terms — look for month-to-month billing with no minimum period and no early-termination penalty. SafeStorage Dubai meets all four, and holds a 4.9/5 rating across 6,700+ verified Google reviews."
      },
      {
        q: "Where can I store my furniture during renovation in Dubai?",
        a: "SafeStorage Dubai stores furniture during home and villa renovations, with collection from anywhere in Dubai and delivery back once the work is finished. Our team wraps and loads the furniture at your door, inventories every piece, and stores it in a clean, dust-protected indoor unit at our Dubai Investment Park facility."
      },
    ]
  },
]

const faqPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://safestorage.ae/faq#faqpage",
    name: "Frequently Asked Questions — SafeStorage Dubai",
    url: "https://safestorage.ae/faq",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    ),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/faq#webpage",
    name: "FAQs — Frequently Asked Questions | SafeStorage Dubai",
    description:
      "Find answers to common questions about SafeStorage Dubai. Learn about our storage units, pricing, pickup services, security, and more.",
    url: "https://safestorage.ae/faq",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://safestorage.ae/faq" },
    ],
  },
]

/* the category emoji, in the same order as the list above */
const CAT_EMOJI = ["📐", "🚚", "💳", "🕑", "📦", "📋", "🧾", "🔑", "🚫", "✈️", "🛒", "🎓", "⭐"]

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

const pickupSteps = [
  { e: "📱", h: "Book online or call", p: "Schedule a pickup time through our website, WhatsApp, or by calling +971 50 577 3388." },
  { e: "🚚", h: "We arrive at your door", p: "Our uniformed team arrives at your chosen time window with all necessary equipment." },
  { e: "📦", h: "We pack and load", p: "Our team wraps furniture, boxes loose items, and loads everything carefully into our transport vehicle." },
  { e: "🏬", h: "Secure storage", p: "Your items are transported to our secure facility and stored in your dedicated unit." },
  { e: "🔔", h: "Retrieve on demand", p: "Call or WhatsApp whenever you need items back. We deliver to your address within 24–48 hours." },
]

const sizeGuide = [
  "25–50 sq ft: 10–20 boxes, studio apartment contents, seasonal items",
  "50–100 sq ft: 1–2 bedroom apartment, small office clearance",
  "100–200 sq ft: 3–4 bedroom villa, large office move",
  "200+ sq ft: Full villa, commercial inventory, warehouse overflow",
]

const allowed = [
  "Household furniture and appliances",
  "Personal clothing and belongings",
  "Electronics and gadgets",
  "Books, documents, and files",
  "Artwork, antiques, and collectibles",
  "Sports and outdoor equipment",
  "Business inventory and office furniture",
  "Vehicles (in designated vehicle bays)",
]

const notAllowed = [
  "Hazardous materials and chemicals",
  "Flammable liquids and gases",
  "Perishable food and beverages",
  "Live plants and animals",
  "Illegal or stolen goods",
  "Weapons and ammunition",
  "Unregistered cash or currency",
  "Items with strong or unpleasant odours",
]

const keyFacts = [
  "Pay only for the space you use — no setup fees",
  "Door-to-Door service anywhere in Dubai",
  "Secure, clean, dust-protected indoor units",
  "Month-to-month contracts — no long-term lock-in",
  "Same-day pickup available before 12 PM",
  "Dedicated storage consultant for every customer",
  "Professional packing service available",
  "Multiple payment methods accepted",
  "10+ years experience serving Dubai customers",
  "100,000+ satisfied customers globally",
]

const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function FAQPage() {
  return (
    <>
      <SchemaScript schema={faqPageSchemas} />
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's photo right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Help Center</span>
              <h1>
                Frequently Asked <br className={s.mBreakDesk} />
                <em>Questions</em>
              </h1>
              <p>Find answers to common questions about our storage services.</p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get Your Free Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call: 050-577-3388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1774 / 887" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/faq-photo.webp"
                alt="A SafeStorage Dubai consultant answering a customer's storage questions"
                fetchPriority="high"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* every category, its own short accordion */}
        {faqCategories.map((c, i) => (
          <section className={`${s.section} ${s.wrap}`} id={slug(c.title)} key={c.title} style={{ paddingTop: 0 }}>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>
                  {c.faqs.length} question{c.faqs.length > 1 ? "s" : ""}
                </span>
                <h2 className={`${p.longH2} ${fq.catTitle}`}>
                  <span className={fq.catEmoji} aria-hidden="true">
                    {CAT_EMOJI[i % CAT_EMOJI.length]}
                  </span>
                  {c.title}
                </h2>
              </div>
            </div>
            <FaqAccordion items={c.faqs} max={6} openFirst={i === 0} />
          </section>
        ))}

        <CtaBand
          title="Still have questions?"
          blurb="Our dedicated team is here to help. Reach out to us and we'll get back to you within 15 minutes."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        {/* the guide that was already on this page, in the landing layout */}
        <section className={`${s.section} ${s.wrap}`}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Guide</span>
              <h2 className={p.longH2}>
                Complete guide to <em>self storage in Dubai.</em>
              </h2>
            </div>
            <p>
              Choosing a self storage solution in Dubai can be confusing — units vary in size, facilities
              differ in quality, and pricing models are not always transparent.
            </p>
          </div>
          <HomeReveal className={p.pair}>
            <div className={`${p.panel} ${p.plan}`} style={idx(0)}>
              <h3 className={p.panelTitle}>
                <span aria-hidden="true">📐</span> Choosing the right storage unit size
              </h3>
              <p className={p.panelText}>
                The most common mistake people make is either overestimating or underestimating the storage
                space they need. SafeStorage offers a free volume assessment — tell us what you have and we
                will recommend the right unit size. As a guide:
              </p>
              <ul className={s.checkList}>
                {sizeGuide.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div className={`${p.panel} ${p.plan}`} style={idx(1)}>
              <h3 className={p.panelTitle}>
                <span aria-hidden="true">🛡️</span> Secure, clean indoor storage
              </h3>
              <p className={p.panelText}>
                Every SafeStorage unit is a secure, clean, dust-protected indoor space. Your belongings are
                wrapped with care on collection, stored on raised platforms, and kept away from external
                walls.
              </p>
            </div>
          </HomeReveal>
        </section>

        {/* how pickup and delivery works */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Step by step</span>
              <h2 className={p.longH2}>
                How pickup &amp; <em>delivery works.</em>
              </h2>
            </div>
            <p>
              Instead of renting a lorry and loading everything yourself, our professional team does
              everything.
            </p>
          </div>
          <HomeReveal className={`${z.steps} ${z.steps5} ${z.moves}`}>
            {pickupSteps.map((step, i) => (
              <div className={`${z.step} ${fx.floatBox}`} style={idx(i)} key={step.h}>
                <span className={z.stepEmoji} aria-hidden="true">
                  {step.e}
                </span>
                <h3>{step.h}</h3>
                <p>{step.p}</p>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* allowed and not allowed */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={p.longH2}>
                What is and is not <em>allowed in storage.</em>
              </h2>
            </div>
          </div>
          <HomeReveal className={p.pair}>
            <div className={`${p.panel} ${p.plan}`} style={idx(0)}>
              <h3 className={p.panelTitle}>
                <span aria-hidden="true">✅</span> Allowed items
              </h3>
              <ul className={s.checkList}>
                {allowed.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className={`${p.panel} ${p.plan}`} style={idx(1)}>
              <h3 className={p.panelTitle}>
                <span aria-hidden="true">⛔</span> Not allowed items
              </h3>
              <ul className={`${s.checkList} ${fq.xList}`}>
                {notAllowed.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </HomeReveal>
        </section>

        {/* key facts */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>In short</span>
              <h2 className={p.longH2}>
                SafeStorage Dubai — <em>key facts.</em>
              </h2>
            </div>
          </div>
          <ul className={s.checkList}>
            {keyFacts.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </section>

        <CtaBand
          title="Ready to get started?"
          blurb="Join the 100,000+ customers who trust SafeStorage worldwide. Get your free quote in just 2 minutes."
          ctaLabel="Get Your Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
