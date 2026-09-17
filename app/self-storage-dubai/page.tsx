import type { Metadata } from "next"
import Link from "next/link"
import {
  Shield, Truck, Clock, CheckCircle2, Package, MapPin, Camera, Flame, Bug, Lightbulb, ShieldCheck,
  Ruler, Layers, CalendarDays, Sparkles, Star, Users, Lock, Boxes,
} from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust, SplitHero } from "@/components/landing/landing-top"
import { LandingConnect } from "@/components/landing/landing-connect"
import { LandingSteps } from "@/components/landing/landing-services"
import { UspRail } from "@/components/landing/usp-rail"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import s from "@/components/landing/landing.module.css"

export const metadata: Metadata = {
  title: { absolute: "Self Storage Dubai: Flexible Plans & No Lorry | SafeStorage" },
  // Spec wording, minus its "free door-to-door pickup" — transport is charged,
  // and the site stopped advertising it as free in df0df39 / 166d65a.
  description: "Dubai self storage with door-to-door pickup. No need to rent a truck. Flexible monthly plans, secure units, and 24/7 CCTV monitoring.",
  keywords: "self storage dubai flexible plans, storage with door-to-door pickup dubai, no lorry storage dubai, month to month storage dubai, book storage online dubai, storage unit near me pickup dubai",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai",
  },
}

const faqData = [
  {
    question: "What documents are required?",
    answer: "Emirates ID or passport copy; proof of address may be requested."
  },
  {
    question: "Can I access my unit?",
    answer: "Yes, during facility access hours; ask about extended access."
  },
  {
    question: "Do you supply boxes and packing?",
    answer: "Yes—choose DIY kits or full packing service."
  },
  {
    question: "What can't I store?",
    answer: "Perishables, hazardous goods, illegal items; see our policy."
  },
  {
    question: "Is there a minimum term?",
    answer: "Month-to-month; ask about promotional offers for longer stays."
  },
  {
    question: "Is self storage in Dubai expensive?",
    answer: "Self storage in Dubai starts from 12 AED per sqft per month at SafeStorage. Because you pay only for the space your items actually occupy, a typical one-bedroom apartment's contents cost far less than renting a larger home to keep them in. There is no truck rental, no deposit for equipment and no hidden handling fee — door-to-door pickup and delivery are part of the service. Longer prepaid plans reduce the effective monthly rate further."
  },
  {
    question: "Can I get same-day storage in Dubai?",
    answer: "Yes. SafeStorage offers same-day pickup for bookings made before 12 PM. Our team can collect your items and have them stored in our secure facility on the same day you contact us."
  },
  {
    question: "What is the minimum storage period?",
    answer: "There is no minimum storage period at SafeStorage. We offer month-to-month plans and short-term arrangements starting from one week for renovation and moving scenarios. You can cancel at any time with 7 days' notice."
  }
]

const guideFaqs = [
  { q: "What is self storage and how does it work in Dubai?", a: "Self storage is a service where individuals or businesses rent a secure, dedicated storage unit to keep their belongings. In Dubai, the most convenient model is door-to-door storage, offered by SafeStorage Dubai, where a team collects your items from your location, stores them in a secure facility, and delivers them back when needed. You pay a monthly fee based on the unit size you use. There are no long-term contracts, no lorry hire, and no heavy lifting required." },
  { q: "Do I need to transport my items to the storage facility myself?", a: "No. SafeStorage Dubai provides a complete door-to-door service. Our team comes to your home, office, or any Dubai location, loads your items, transports them to our secure facility, and delivers them back when you need them. We offer this door-to-door service across Dubai. You do not need to hire a lorry, arrange your own movers, or make multiple trips to the facility." },
  { q: "How long can I store my items at SafeStorage Dubai?", a: "There is no maximum storage period. Customers store for as little as one week (for renovation or moving scenarios) or for several years. Many of our long-term customers are expats who left Dubai temporarily or businesses with ongoing archival needs. Month-to-month billing continues indefinitely with no lock-in, and you can cancel at any time with 30 days' notice and no early termination penalty." },
  { q: "What types of items can I store at SafeStorage Dubai?", a: "SafeStorage accepts all furniture, household appliances, electronics, clothing and textiles, sports equipment (bicycles, golf clubs, surfboards), business inventory, documents and archive files, seasonal decorations, and vehicles in dedicated bays. Please note we do not store the following items: food or grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items, as well as flammable liquids, hazardous chemicals, live animals, perishable food, and illegal goods. Call +971505773388 to check any specific item." },
  { q: "Can businesses use SafeStorage Dubai for commercial storage?", a: "Yes, and we serve a significant number of business customers including e-commerce sellers, trading companies, law firms, marketing agencies, and retail businesses. Business benefits include flexible unit sizes that scale with inventory, UAE-compliant document storage for the mandatory 5-year retention period, and no long-term warehouse lease commitment. Commercial plans include dedicated consultant support for logistics coordination." },
  { q: "How do I get my items back from SafeStorage Dubai?", a: "Contact your dedicated storage consultant by phone, WhatsApp, or email and specify what you need — your entire unit, specific boxes, or individual items. Our team schedules delivery within 24–48 hours to your Dubai address. Partial retrievals (taking some items while leaving the rest in storage) are fully supported. There is no penalty for early retrieval and no restriction on how many retrievals you can request." },
  { q: "Does SafeStorage Dubai offer short-term storage?", a: "Yes. SafeStorage Dubai offers short-term storage starting from one week. This is particularly popular for renovation periods, bridge periods between apartment moves, and temporary storage during property handovers. Short-term plans are priced weekly or monthly with the same security standards as long-term plans. There is no minimum commitment beyond the initial week." },
  { q: "What neighbourhoods in Dubai does SafeStorage serve?", a: "SafeStorage Dubai collects from and delivers to all Dubai neighbourhoods including Business Bay, Downtown, Dubai Marina, JBR, Jumeirah, Palm Jumeirah, JLT, JVC, Al Barsha, Motor City, Sports City, Dubai Hills, Arabian Ranches, Mirdif, Deira, Bur Dubai, Al Quoz, Dubai Investment Park, Silicon Oasis, and all other residential and commercial areas across the emirate. If you are unsure about your area, call +971505773388 to confirm." },
  { q: "Is there a discount for long-term self storage?", a: "Yes. SafeStorage Dubai offers a wide range of discounts for longer prepaid commitments — the longer you prepay, the more you save compared to month-by-month billing. For large units, the saving can be several thousand dirhams. Long-term plans are popular with expats who know they will be away for at least a year and businesses with stable, ongoing inventory storage requirements. Contact us for the best available rate for your storage duration." },
  { q: "Can I authorise someone else to access my storage unit?", a: "Yes. You can authorise additional persons — family members, employees, or any trusted individual — to access your storage unit. Simply provide their full name, Emirates ID or passport copy, and contact number to your SafeStorage consultant. They will be issued access credentials. You can add or remove authorised users at any time. There is no limit to the number of authorised users per unit." },
  { q: "Can I upgrade my storage unit size?", a: "Yes. Upgrading to a larger unit is straightforward — contact your consultant, request the upgrade, and we arrange to move your items to the larger unit within 2–3 business days. There is no penalty for upgrading and no admin fee. Pricing adjusts from the date of the move. Many customers upgrade as their circumstances change, for example as e-commerce inventory grows or as additional family items need to be stored during renovation." },
  { q: "How do I book self storage at SafeStorage Dubai?", a: "Booking takes under five minutes. Get a quote online at safestorage.ae, call +971505773388, or WhatsApp with details about what you need to store. Our consultant recommends the right size, provides a clear price, and schedules a pickup at a time that suits you. Slots are typically available within 24–48 hours. Same-day pickup is available for bookings placed before 12 PM. You sign the storage agreement on pickup day — no paperwork needed in advance." },
  { q: "Does SafeStorage Dubai store vehicles?", a: "Yes. SafeStorage Dubai offers dedicated indoor vehicle storage bays for cars, SUVs, motorcycles, and classic vehicles. Car storage starts from 12 AED / sqft. This is ideal for expats leaving Dubai for extended periods, classic car owners wanting their vehicles stored properly over summer, and individuals with a second vehicle they do not use regularly. All vehicle bays include 24/7 CCTV monitoring and a complimentary wash before return." },
  { q: "Does SafeStorage Dubai offer packing services?", a: "Yes. SafeStorage offers both a DIY packing option and a full professional packing service. For DIY, we provide double-walled boxes, bubble wrap, packing paper, stretch film, furniture covers, and mattress bags for purchase. For the full service, our trained team wraps and boxes every item professionally, creates an inventory list, and loads everything. Professional packing is popular for fragile or high-value items and customers who prefer to leave the heavy lifting to someone else." },
  { q: "What payment methods does SafeStorage Dubai accept?", a: "SafeStorage Dubai accepts credit and debit cards (Visa, Mastercard, American Express), bank transfers, cash at the facility, post-dated cheques for advance payment plans, Apple Pay, and Google Pay. Monthly, quarterly, and annual payment options are available. Longer prepaid cycles unlock a wide range of discounts, with annual plans offering the best per-month rate compared to month-by-month billing. All invoices are provided digitally and can be used for business expense reporting." },
]

// One FAQ list for the page: the short questions first, then the long-form ones.
const allFaqs = [...faqData.map((f) => ({ q: f.question, a: f.answer })), ...guideFaqs]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map(item => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a
    }
  }))
}

const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/self-storage-dubai#webpage',
    name: 'Self Storage Dubai — Flexible Plans, No Lorry Needed',
    description: 'Self storage in Dubai with door-to-door pickup — no need to rent a truck. Flexible monthly plans, secure units, 24/7 CCTV. Book online in minutes from 12 AED / sqft.',
    url: 'https://safestorage.ae/self-storage-dubai',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    about: { '@id': 'https://safestorage.ae/#business' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Self Storage Dubai',
    description: 'Flexible self storage in Dubai with door-to-door service. Secure units from 12 AED / sqft with 24/7 security.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    areaServed: { '@type': 'City', name: 'Dubai' },
    url: 'https://safestorage.ae/self-storage-dubai',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      price: '12',
      description: 'Starts from 12 AED / sqft',
    },
    serviceType: 'Self Storage',
  },
]

const why = [
  { Icon: Shield, title: "Security that's visible", body: "24/7 CCTV, controlled entry, logged access, regular patrols." },
  { Icon: Truck, title: "Door-to-door help", body: "Optional packing, pickup, and re-delivery anywhere in Dubai." },
  { Icon: Clock, title: "Flexible plans", body: "Short or long stays, monthly billing, easy upgrades." },
  { Icon: CheckCircle2, title: "Transparent quotes", body: "No hidden fees; our advisors right-size your unit to avoid overpaying." },
  { Icon: Package, title: "Customer care", body: "WhatsApp support, weekend slots, and photo inventory on request." },
]

const sizes = [
  { size: "10–20 sq ft", label: "Small", fits: ["8–12 medium boxes", "Hand luggage", "Small appliances", "Documents"] },
  { size: "30–45 sq ft", label: "Studio", fits: ["20–30 boxes", "A bicycle", "TV and electronics", "Side tables"] },
  { size: "55–75 sq ft", label: "1-bed", fits: ["Mattress and bed frame", "Sofa", "TV unit", "30–40 boxes", "Small wardrobes"] },
  { size: "85–110 sq ft", label: "2-bed", fits: ["Large sofa set", "Multiple beds", "Dining table", "White goods", "50–70 boxes"] },
  { size: "130–160 sq ft", label: "3-bed", fits: ["Full apartment contents", "Seasonal items", "Sports gear", "Large furniture pieces"] },
]

const security = [
  { Icon: Camera, label: "24/7 CCTV surveillance" },
  { Icon: Flame, label: "Fire protection systems" },
  { Icon: Bug, label: "Pest management protocols" },
  { Icon: Lightbulb, label: "Well-lit corridors" },
  { Icon: ShieldCheck, label: "Regular security patrols" },
]


// Areas with a real location page link to it; the rest stay as plain labels.
const areas: { area: string; slug?: string }[] = [
  { area: "Dubai Marina", slug: "dubai-marina" },
  { area: "JLT" },
  { area: "JVC", slug: "jumeirah-village-circle" },
  { area: "Jumeirah", slug: "jumeirah" },
  { area: "Downtown", slug: "downtown-dubai" },
  { area: "Business Bay", slug: "business-bay" },
  { area: "Al Quoz" },
  { area: "Al Barsha", slug: "al-barsha" },
  { area: "Deira", slug: "deira" },
  { area: "Bur Dubai" },
  { area: "Mirdif", slug: "mirdif" },
  { area: "Silicon Oasis", slug: "dubai-silicon-oasis" },
  { area: "Motor City" },
  { area: "Dubai South" },
  { area: "DIP", slug: "dubai-investment-park" },
  { area: "Al Quasis" },
  { area: "Dubai Hills", slug: "dubai-hills" },
]


export default function SelfStorageDubaiPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai" },
        ]}
      />
      {/* FAQPage rides with the page schemas so it is in the server HTML,
          not injected after hydration by next/script. */}
      <SchemaScript schema={[...pageSchemas, faqSchema]} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        <SplitHero
          eyebrow="Self storage Dubai"
          title="Self Storage in Dubai –"
          titleAccent="Secure Units, Fair Rates, Easy Booking"
          blurb="Between apartments, renovating, travelling or decluttering? SafeStorage gives you secure space in Dubai, when and where you need it."
          image="/landing/warehouse-fleet.jpg"
          imagePosition="center 45%"
          ctaLabel="Get Instant Quote"
          phoneLabel="Call +971 50 577 3388"
        />

        <LandingTrust />

        {/* WHY */}
        <section className={s.wrap} id="why">
          <div className={`${s.darkBand} ${s.whyBand}`}>
            <div className={`${s.howHead} ${s.bandHead}`}>
              <div>
                <span className={s.howEyebrow}>Why SafeStorage</span>
                <h2>
                  Why Dubai chooses <em>SafeStorage.</em>
                </h2>
              </div>
            </div>
            <FeatScroller>
              {why.map(({ Icon, title, body }) => (
                <div className={s.feat} key={title}>
                  <div className={s.featIcon} aria-hidden="true">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </FeatScroller>
            <p className={s.scrollHint}>Swipe for more →</p>
          </div>
        </section>

        {/* SIZES */}
        <section className={`${s.section} ${s.wrap}`} id="sizes">
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>Sizes &amp; what fits</span>
                <h2>
                  The right size is the <em>easiest way to save.</em>
                </h2>
                <p className={s.splitBlurb} style={{ marginBottom: 0 }}>
                  Our team helps you select the perfect unit based on your inventory, so you never pay for
                  space you don&apos;t need.
                </p>
              </div>
            }
          >
            {sizes.map((u, i) => (
              <article className={s.usp} key={u.size}>
                <span className={s.uspNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={s.uspIcon} aria-hidden="true">
                  <Boxes />
                </div>
                <h3>
                  {u.size} <span style={{ color: "var(--accent)" }}>· {u.label}</span>
                  <small style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--muted)", marginTop: 4 }}>
                    (Estimated)
                  </small>
                </h3>
                <ul className={s.bulletList}>
                  {u.fits.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article className={`${s.usp} ${s.panelAccent}`}>
              <div className={s.uspIcon} aria-hidden="true">
                <Ruler />
              </div>
              <h3>Need help choosing?</h3>
              <p>Use our Storage Unit Size Guide to compare volume and get a precise recommendation.</p>
              <p style={{ marginTop: 18 }}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/self-storage-dubai/storage-units">
                  View Size Guide →
                </Link>
              </p>
            </article>
          </UspRail>
          <p className={s.scrollHint}>Swipe for more →</p>
        </section>

        {/* SHORT OR LONG TERM */}
        <section className={`${s.section} ${s.wrap}`} id="terms" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Your choice</span>
              <h2>
                Short-term or long-term — <em>your choice.</em>
              </h2>
            </div>
          </div>
          <div className={s.duo}>
            <div className={`${s.panel} ${s.panelHover}`}>
              <div className={s.panelIcon} aria-hidden="true">
                <CalendarDays size={20} color="var(--accent)" />
              </div>
              <h3>Short-Term Storage</h3>
              <p>
                Flying out for summer, renovating your kitchen, or waiting on a handover? Store for a few weeks with
                flexible renewals. Perfect for transitions, moves, and temporary needs.
              </p>
              <ul className={s.checkList}>
                <li>Week-to-week or monthly options</li>
                <li>No long-term commitment</li>
                <li>Easy extension or termination</li>
              </ul>
            </div>
            <div className={`${s.panel} ${s.panelHover} ${s.panelAccent}`}>
              <div className={s.panelIcon} aria-hidden="true" style={{ background: "#fff" }}>
                <Layers size={20} color="var(--accent)" />
              </div>
              <h3>Long-Term Storage</h3>
              <p>
                Need stable, long-term storage? Lock in favorable terms and optional scheduled access. Ideal for
                businesses, extended travel, or permanent downsizing.
              </p>
              <ul className={s.checkList}>
                <li>Better rates for longer commitments</li>
                <li>Priority access and support</li>
                <li>Switch plans anytime as needs change</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section className={`${s.section} ${s.wrap}`} id="security" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Security</span>
              <h2>
                Advanced <em>security systems.</em>
              </h2>
            </div>
            <p>Your belongings deserve the highest level of protection. Our facilities include:</p>
          </div>
          <div className={s.tileGrid}>
            {security.map(({ Icon, label }) => (
              <div className={s.tile} key={label}>
                <span className={s.tileIcon} aria-hidden="true">
                  <Icon />
                </span>
                <b>{label}</b>
              </div>
            ))}
          </div>
        </section>

        <LandingSteps />

        {/* AREAS */}
        <section className={`${s.section} ${s.wrap}`} id="areas" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Coverage</span>
              <h2>
                Areas we serve <em>across Dubai.</em>
              </h2>
            </div>
            <p>We cover popular neighborhoods across Dubai with door-to-door services.</p>
          </div>
          {/* Two marquee rows running in opposite directions. Each row renders
              its list twice for a seamless loop; the copy is aria-hidden and
              out of the tab order. Pauses on hover, static for reduced motion. */}
          <div className={s.areaMarquees}>
            {[areas.slice(0, 9), areas.slice(9)].map((row, r) => (
              <div className={s.marquee} key={r}>
                <div className={`${s.marqueeTrack} ${r === 1 ? s.marqueeReverse : ""}`}>
                  {[0, 1].map((copy) => (
                    <ul className={`${s.marqueeGroup} ${s.chipGroup}`} aria-hidden={copy === 1 || undefined} key={copy}>
                      {row.map(({ area, slug }) => (
                        <li key={area}>
                          {slug ? (
                            <Link className={s.chip} href={`/locations/dubai/${slug}`} tabIndex={copy === 1 ? -1 : undefined}>
                              <MapPin size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "-2px", color: "var(--accent)" }} />
                              {area}
                            </Link>
                          ) : (
                            <span className={`${s.chip} ${s.chipMuted}`}>{area}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className={s.chipsNote} style={{ textAlign: "left", marginTop: 18 }}>
            Don&apos;t see your area? <Link href="/contact" style={{ color: "var(--accent)", fontWeight: 600 }}>Contact us</Link>{" "}
            — we likely serve your location too!
          </p>
        </section>

        {/* PRICING */}
        <section className={`${s.section} ${s.wrap}`} id="pricing" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Pricing</span>
              <h2>
                Pricing factors &amp; <em>how quotes work.</em>
              </h2>
            </div>
            <p>
              Storage pricing depends on several factors. Understanding these helps you make informed decisions and
              avoid surprises.
            </p>
          </div>
          <div className={s.duo}>
            <div className={s.panel}>
              <h3>Key pricing factors</h3>
              <div className={s.factorList}>
                {[
                  { Icon: Boxes, label: "Unit size and capacity" },
                  { Icon: Layers, label: "Floor level and accessibility" },
                  { Icon: CalendarDays, label: "Storage duration and contract terms" },
                  { Icon: Package, label: "Additional services (packing, pickup)" },
                ].map(({ Icon, label }) => (
                  <div className={s.factorRow} key={label}>
                    <span className={s.factorIcon} aria-hidden="true">
                      <Icon />
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={s.panel}>
              <h3>How to get your quote</h3>
              <ol className={s.stepper}>
                {[
                  "Share your inventory list or photos",
                  "Tell us your neighborhood and timeline",
                  "Select any additional services",
                  "Receive a clear, itemized quote",
                  "No hidden fees or surprises",
                ].map((step, i) => (
                  <li className={s.stepperItem} key={step}>
                    <span className={s.stepperDot}>{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className={s.howCta}>
            <span>Get a tailored quote — no guesswork, no overpaying.</span>
            <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
              Get Your Quote →
            </Link>
            <Link className={s.howMore} href="/self-storage-dubai/prices">
              View Pricing Guide
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2>
                FAQs: self storage <em>in Dubai.</em>
              </h2>
            </div>
            <p>
              Have more questions? <Link href="/faq" style={{ color: "var(--accent)", fontWeight: 600 }}>View all FAQs →</Link>
            </p>
          </div>
          <FaqAccordion items={allFaqs} />
        </section>

        <CtaBand
          title="Ready to Free Up Space?"
          blurb="Get your personalized storage solution today. Quick quotes, flexible terms, and professional service."
          ctaLabel="Get Quick Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        {/* GUIDE — the long-form copy condensed into short icon cards */}
        <section className={`${s.section} ${s.wrap}`} id="guide">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The guide</span>
              <h2>
                Self storage Dubai — <em>no lorry needed.</em>
              </h2>
            </div>
            <p>
              A team collects from your door, stores your items securely and delivers them back whenever you need
              them.
            </p>
          </div>

          <h3 className={s.miniHead}>Why Dubai needs it</h3>
          <div className={s.miniGrid}>
            {[
              { Icon: Boxes, t: "Short on space", b: "Compact homes, no room for seasonal or spare items." },
              { Icon: Truck, t: "Always on the move", b: "Lease gaps, relocations and long trips abroad." },
              { Icon: Shield, t: "No lorry, no lifting", b: "We pack, load and move everything for you." },
              { Icon: Clock, t: "Back in 24–48 hours", b: "Call or WhatsApp and we deliver to your door." },
            ].map(({ Icon, t: title, b }) => (
              <div className={s.miniCard} key={title}>
                <span className={s.miniIcon} aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <b>{title}</b>
                  <small>{b}</small>
                </div>
              </div>
            ))}
          </div>

          <h3 className={s.miniHead}>Plans for every need</h3>
          <div className={`${s.miniGrid} ${s.miniGrid3}`}>
            {[
              { Icon: Package, t: "Personal storage", b: "Households, students and individuals.", href: "/personal-storage-dubai" },
              { Icon: Layers, t: "Furniture storage", b: "For renovations and relocations.", href: "/personal-storage-dubai/furniture-storage" },
              { Icon: Boxes, t: "Business storage", b: "Inventory, documents and equipment.", href: "/business-storage-dubai" },
              { Icon: Truck, t: "Vehicle storage", b: "Covered bays for cars and bikes.", href: "/personal-storage-dubai/car-storage" },
              { Icon: CalendarDays, t: "Student storage", b: "Short-term plans for semester breaks.", href: "/personal-storage-dubai/student-storage" },
              { Icon: MapPin, t: "Expat storage", b: "Leaving or returning to Dubai.", href: "/personal-storage-dubai/expat-storage" },
            ].map(({ Icon, t: title, b, href }) => (
              <Link className={`${s.miniCard} ${s.miniLink}`} href={href} key={title}>
                <span className={s.miniIcon} aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <b>{title}</b>
                  <small>{b}</small>
                </div>
                <span className={s.miniArrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>

          <div className={s.miniFacts}>
            <span><CheckCircle2 aria-hidden="true" /> From 12 AED / sqft</span>
            <span><CheckCircle2 aria-hidden="true" /> No deposit or admin fees</span>
            <span><CheckCircle2 aria-hidden="true" /> Bigger savings on prepaid plans</span>
            <span><CheckCircle2 aria-hidden="true" /> Card, bank, cash, Apple &amp; Google Pay</span>
          </div>
        </section>

        <LandingConnect />
      </div>
    </>
  )
}
