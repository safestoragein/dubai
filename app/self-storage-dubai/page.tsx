import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { Award, Bug, CalendarClock, FireExtinguisher, Layers, Lightbulb, PackagePlus, Ruler, ShieldCheck, Star, Users, Video } from "lucide-react"

import { manrope, sora } from "@/components/landing/fonts"
import PageHero, { CtaBand } from "@/components/landing/page-hero"
import FaqAccordion from "@/components/landing/faq-accordion"
import { LandingConnect } from "@/components/landing/landing-connect"
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
  { q: "What documents are required?", a: "Emirates ID or passport copy; proof of address may be requested." },
  { q: "Can I access my unit?", a: "Yes, during facility access hours; ask about extended access." },
  { q: "Do you supply boxes and packing?", a: "Yes—choose DIY kits or full packing service." },
  { q: "What can't I store?", a: "Perishables, hazardous goods, illegal items; see our policy." },
  { q: "Is there a minimum term?", a: "Month-to-month; ask about promotional offers for longer stays." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
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
      description: 'Starts from 12 AED / sqft (VAT excluded)',
    },
    serviceType: 'Self Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Self Storage Dubai', item: 'https://safestorage.ae/self-storage-dubai' },
    ],
  },
]

// Titles are kept to one line and bodies to two: a two-line title on card one
// pushed its body a line below the other four.
const features = [
  { icon: "🔐", title: "Visible security", body: "24/7 CCTV, controlled entry, unit locks." },
  { icon: "🚚", title: "Door-to-door help", body: "Packing, pickup and re-delivery across Dubai." },
  { icon: "🕑", title: "Flexible plans", body: "Short or long stays, monthly billing." },
  { icon: "💬", title: "Transparent quotes", body: "No hidden fees, right-sized units." },
  { icon: "🤝", title: "Customer care", body: "WhatsApp support and weekend slots." },
]

// The short-vs-long cards repeated the same shape twice, which made them hard
// to compare. Same copy, restructured so each attribute sits on one row.
const tenure = [
  {
    label: "Best for",
    short: "Renovations, travel, waiting on a handover",
    long: "Businesses, extended travel, downsizing",
  },
  {
    label: "Typical stay",
    short: "A few weeks to a few months",
    long: "Six months to several years",
  },
  {
    label: "Billing",
    short: "Week-to-week or monthly options",
    long: "Better rates for longer commitments",
  },
  {
    label: "Commitment",
    short: "No long-term commitment",
    long: "Switch plans anytime as needs change",
  },
  {
    label: "Support",
    short: "Easy extension or termination",
    long: "Priority access and scheduled access",
  },
]

const security = [
  { Icon: Video, label: "24/7 CCTV surveillance" },
  { Icon: FireExtinguisher, label: "Fire protection systems" },
  { Icon: Bug, label: "Pest management protocols" },
  { Icon: Lightbulb, label: "Well-lit corridors" },
  { Icon: ShieldCheck, label: "Regular security patrols" },
]

const pricingFactors = [
  { Icon: Ruler, label: "Unit size and capacity" },
  { Icon: Layers, label: "Floor level and accessibility" },
  { Icon: CalendarClock, label: "Storage duration and contract terms" },
  { Icon: PackagePlus, label: "Additional services (packing, pickup)" },
]

const quoteSteps = [
  "Share your inventory list or photos",
  "Tell us your neighborhood and timeline",
  "Select any additional services",
  "Receive a clear, itemized quote",
  "No hidden fees or surprises",
]

const doorToDoor = [
  { icon: "📦", title: "Pack & Move", body: "Trained crews bring branded materials, pack items securely, and transport to the facility." },
  { icon: "🗂️", title: "Photo Inventory", body: "Request a photo inventory in your customer portal for easy tracking and retrieval." },
  { icon: "🚚", title: "Easy Retrieval", body: "Schedule partial or full retrieval—we deliver back to your address when you're ready." },
]

// Areas with a real location page link to it; the rest stay as plain coverage
// labels. They used to be `/self-storage-dubai/near/<area>` cards, every one of
// which 308'd straight back to this page.
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

/**
 * Self Storage Dubai — the S1 hub, rebuilt on the homepage design system.
 *
 * Rebuilt on the comp's hero card, dark band, cards and accordion in place of
 * the old gradient/Tailwind blocks. Metadata, all three schema blocks, the FAQ
 * schema and the breadcrumb are untouched.
 *
 * Trimmed on request: the unit-size grid, both long-form prose blocks (with
 * their 3 + 15 FAQs), and the SiloHubLinks footer. Dropping SiloHubLinks means
 * this hub no longer links its 18 children — they keep their inbound links from
 * each other and from the nav, and silo-audit still passes, but the hub's own
 * distribution to them is gone.
 */
export default function SelfStorageDubaiPage() {
  return (
    <>
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "Self Storage Dubai" }]} />
      <SchemaScript schema={pageSchemas} />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        <PageHero
          eyebrow="Serving Globally Since 2015"
          title="Self Storage in Dubai – Secure Units, Fair Rates,"
          titleAccent="Easy Booking"
          blurb="Secure space when and where you need it — between apartments, during a renovation, or while you travel."
          image="/expansive-storage.jpg"
          imagePosition="center 55%"
          stats={[
            { Icon: Star, label: "4.9/5 Rating" },
            { Icon: Users, label: "100,000+ Happy Customers" },
            { Icon: Award, label: "10+ Years Global Experience" },
          ]}
          ctaLabel="Get Instant Quote"
          phoneLabel="Call +971 50 577 3388"
        />

        {/* WHY CHOOSE */}
        <section className={s.wrap} id="why" style={{ paddingTop: 34 }}>
          <div className={s.darkBand}>
            <span className={s.eyebrow}>Why Dubai chooses SafeStorage</span>
            <h2>
              Storage Handled End to End, From Your Door to <em>Our Warehouse</em>
            </h2>
            <div className={`${s.featGrid} ${s.featGrid5}`}>
              {features.map((f) => (
                <div className={s.feat} key={f.title}>
                  <div className={s.featIcon} aria-hidden="true">
                    {f.icon}
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SHORT-TERM OR LONG-TERM */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Tenure</span>
            <h2>Short-Term or Long-Term – Your Choice</h2>
          </div>

          <div className={s.cmpWrap}>
            <table className={s.cmp}>
              <caption className="sr-only">Short-term compared with long-term storage</caption>
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col">
                    <span className={s.cmpHeadIcon} aria-hidden="true">
                      ⚡
                    </span>
                    <span className={s.cmpHeadLabel}>Short-Term Storage</span>
                    <span className={s.cmpHeadNote}>Transitions, moves and temporary needs</span>
                  </th>
                  <th scope="col">
                    <span className={s.cmpHeadIcon} aria-hidden="true">
                      🗝️
                    </span>
                    <span className={s.cmpHeadLabel}>Long-Term Storage</span>
                    <span className={s.cmpHeadNote}>Stable storage with favorable terms</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tenure.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.short}</td>
                    <td>{row.long}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={s.scrollHint}>Swipe to compare →</p>
        </section>

        {/* SECURITY */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Security</span>
            <h2>Advanced Security Systems</h2>
            <p>Your belongings deserve the highest level of protection. Our facilities include:</p>
          </div>
          <div className={s.tileGrid}>
            {security.map(({ Icon, label }) => (
              <div className={s.tile} key={label}>
                <span className={s.tileIcon} aria-hidden="true">
                  <Icon strokeWidth={1.8} />
                </span>
                <b>{label}</b>
              </div>
            ))}
          </div>
          <p className={s.scrollHint}>Swipe for more →</p>
        </section>

        {/* DOOR-TO-DOOR */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Convenience</span>
            <h2>Door-to-Door Convenience</h2>
            <p>
              Skip the driving and lifting. Our comprehensive service takes care of everything from your
              doorstep to secure storage and back.
            </p>
          </div>

          <div className={s.trio}>
            {doorToDoor.map((d) => (
              <div className={`${s.panel} ${s.panelHover}`} key={d.title}>
                <div className={s.panelIcon} aria-hidden="true">
                  {d.icon}
                </div>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>

          <div className={s.svcCta}>
            <Link className={`${s.btn} ${s.btnAccent}`} href="/self-storage-dubai/how-it-works">
              See How It Works →
            </Link>
          </div>
        </section>

        {/* AREAS WE SERVE */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Where we collect</span>
            <h2>Areas We Serve Across Dubai</h2>
            <p>We cover popular neighborhoods across Dubai with door-to-door services.</p>
          </div>

          <div className={s.chips}>
            {areas.map(({ area, slug }) =>
              slug ? (
                <Link className={s.chip} href={`/locations/dubai/${slug}`} key={area}>
                  {area}
                </Link>
              ) : (
                <span className={`${s.chip} ${s.chipMuted}`} key={area}>
                  {area}
                </span>
              )
            )}
          </div>

          <p style={{ textAlign: "center", marginTop: 22, fontSize: 13.5, color: "var(--muted)" }}>
            Don&apos;t see your area?{" "}
            <Link href="/contact" style={{ color: "var(--accent)", fontWeight: 700 }}>
              Contact us
            </Link>{" "}
            – we likely serve your location too!
          </p>
        </section>

        {/* PRICING FACTORS */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Pricing</span>
            <h2>Pricing Factors &amp; How Quotes Work</h2>
            <p>
              Storage pricing depends on several factors. Understanding these helps you make informed
              decisions and avoid surprises.
            </p>
          </div>

          <div className={s.duo}>
            <div className={s.panel}>
              <h3>Key Pricing Factors</h3>
              <div className={s.factorList}>
                {pricingFactors.map(({ Icon, label }) => (
                  <div className={s.factorRow} key={label}>
                    <span className={s.factorIcon} aria-hidden="true">
                      <Icon strokeWidth={1.9} />
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={s.panel}>
              <h3>How to Get Your Quote</h3>
              <ol className={s.stepper}>
                {quoteSteps.map((step, i) => (
                  <li className={s.stepperItem} key={step}>
                    <span className={s.stepperDot} aria-hidden="true">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className={`${s.panel} ${s.panelAccent}`} style={{ marginTop: 16, textAlign: "center" }}>
            <p style={{ marginBottom: 18, color: "var(--ink)", fontSize: 14.5 }}>
              Get a tailored quote based on your exact needs - no guesswork, no overpaying.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link className={`${s.btn} ${s.btnAccent}`} href="/self-storage-dubai/prices">
                View Pricing Guide
              </Link>
              <Link className={`${s.btn} ${s.btnGhost}`} href="/get-quote">
                Get Your Quote
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Good to know</span>
            <h2>FAQs: Self Storage in Dubai</h2>
          </div>
          <FaqAccordion items={faqData} />
          <div className={s.svcCta}>
            <p style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 14 }}>Have more questions?</p>
            {/* /self-storage-dubai/faqs does not exist — it 308s to /faq. */}
            <Link className={`${s.btn} ${s.btnNavy}`} href="/faq">
              View All FAQs →
            </Link>
          </div>
        </section>

        <LandingConnect />

        <CtaBand
          title="Ready to Free Up Space?"
          blurb="Get your personalized storage solution today. Quick quotes, flexible terms, and professional service."
          ctaLabel="Get Quick Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

      </div>
    </>
  )
}
