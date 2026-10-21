import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  AlertTriangle, Banknote, BadgeCheck, Briefcase, Building2, ClipboardList, Clock,
  CreditCard, FileCheck2, FileText, IdCard, Landmark, Map, MapPin, Package,
  ShieldCheck, Tag, TrendingUp, Users,
} from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloLinks } from "@/components/silo/silo-links"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { FeatScroller } from "@/components/landing/feat-scroller"
import { UspRail } from "@/components/landing/usp-rail"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import g from "@/components/guides/business.module.css"

/**
 * /guides/starting-a-business-in-dubai — redesigned on the shared landing
 * system (owner, 2026-10-19) with their own picture.
 *
 * Every reason, licence type, step, cost line, mistake and answer is the copy
 * that was already here. All figures are third-party (government fees, rents,
 * visas), never SafeStorage's own prices.
 */

export const metadata: Metadata = {
  title: "Start a Business in Dubai 2026: Guide",
  description:
    "How to start a business in Dubai in 2026: free zone or mainland, the eight steps, what each stage costs, and the mistakes that send people back to the beginning.",
  keywords:
    "starting a business in dubai, dubai business setup, free zone vs mainland dubai, dubai trade license, business license dubai cost, company formation dubai",
  openGraph: {
    url: "https://safestorage.ae/guides/starting-a-business-in-dubai",
    siteName: "SafeStorage Dubai",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "Starting a Business in Dubai 2026" }],
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/guides/starting-a-business-in-dubai" },
}

const whyDubai = [
  {
    title: "0% Tax on Income",
    description: "No personal income tax. Corporate tax only 9% on profits above AED 375,000",
  },
  {
    title: "Strategic Location",
    description: "Gateway between East and West. Access to 2 billion consumers within 4-hour flight",
  },
  {
    title: "Growing Economy",
    description: "Diversified economy beyond oil. Strong in tourism, trade, finance, and tech",
  },
  {
    title: "100% Foreign Ownership",
    description: "Own 100% of your business in free zones and most mainland activities",
  },
]

const businessTypes = [
  {
    type: "Free Zone Company",
    ownership: "100% foreign ownership",
    activities: "Limited to specific activities allowed by free zone",
    office: "Must have office/flexi-desk in the free zone",
    trading: "Can trade worldwide, limited UAE mainland trading",
    cost: "AED 15,000 - 50,000/year",
    visa: "Visa quota based on office size",
    bestFor: "E-commerce, consulting, tech startups, import/export",
  },
  {
    type: "Mainland Company",
    ownership: "100% foreign ownership (most activities)",
    activities: "Any business activity allowed",
    office: "Must have physical office or tenancy contract",
    trading: "Full access to UAE market and worldwide",
    cost: "AED 25,000 - 60,000/year",
    visa: "Unlimited visas (based on office size)",
    bestFor: "Retail, restaurants, construction, local services",
  },
  {
    type: "Freelance Permit",
    ownership: "100% ownership",
    activities: "Professional services only",
    office: "No physical office required",
    trading: "Provide services only, no trading",
    cost: "AED 7,500 - 15,000/year",
    visa: "1 visa (yourself only)",
    bestFor: "Consultants, designers, photographers, writers",
  },
]

const setupSteps = [
  {
    step: 1,
    title: "Choose Your Business Activity",
    description: "Decide what business you'll do. This determines your license type (trading, professional, industrial).",
    timeline: "1-2 days",
    tips: [
      "E-commerce needs trading license",
      "Consulting needs professional license",
      "Manufacturing needs industrial license",
      "You can have multiple activities on one license",
    ],
  },
  {
    step: 2,
    title: "Select Free Zone or Mainland",
    description: "Free zones are faster and easier. Mainland gives you full UAE market access.",
    timeline: "1-3 days",
    tips: [
      "Free zones available across Dubai with different specializations",
      "Mainland: Need local service agent (no ownership share required)",
      "Free zones great for online businesses and e-commerce",
      "Mainland better for retail shops or local customer services",
    ],
  },
  {
    step: 3,
    title: "Reserve Your Trade Name",
    description: "Choose and register your company name. Must be unique and follow UAE naming rules.",
    timeline: "2-3 days",
    tips: [
      "No offensive or religious words",
      "Can't use 'Dubai' or 'UAE' without approval",
      "Check name availability online first",
      "Have 2-3 backup names ready",
    ],
  },
  {
    step: 4,
    title: "Get Initial Approval",
    description: "Submit documents and get initial approval from Dubai government or free zone authority.",
    timeline: "3-7 days",
    tips: [
      "Passport copies of all shareholders",
      "Proof of address (utility bill)",
      "Business plan (for some activities)",
      "Use a registered PRO service to speed this up",
    ],
  },
  {
    step: 5,
    title: "Find Office Space or Use Flexi-Desk",
    description: "You need a registered business address. Can be physical office, flexi-desk, or virtual office.",
    timeline: "1-7 days",
    tips: [
      "Flexi-desk: AED 5,000 - 15,000/year (cheapest)",
      "Virtual office: AED 8,000 - 20,000/year",
      "Physical office: AED 30,000+ /year",
      "Official tenancy contract required for mainland companies",
    ],
    storageConnection: true,
  },
  {
    step: 6,
    title: "Apply for Business License",
    description: "Submit all documents, pay fees, and get your trade license issued.",
    timeline: "5-10 days",
    tips: [
      "License valid for 1 year, renewable",
      "Fees: AED 10,000 - 40,000 depending on activity",
      "Free zone licenses faster (2-5 days)",
      "Mainland takes 7-14 days",
    ],
    storageConnection: true,
  },
  {
    step: 7,
    title: "Get Visas for Yourself and Staff",
    description: "Apply for investor/employee visas. Each license has visa quota based on office size.",
    timeline: "7-14 days",
    tips: [
      "Investor visa: AED 5,000 - 8,000 per person",
      "Employee visa: AED 4,000 - 6,000 per person",
      "Medical test and Emirates ID required",
      "Golden visa available for investors (AED 600k+)",
    ],
  },
  {
    step: 8,
    title: "Open Business Bank Account",
    description: "Open corporate bank account with UAE bank. Required for doing business.",
    timeline: "7-21 days",
    tips: [
      "Need: Trade license, passport, proof of address, business plan",
      "Initial deposit: AED 10,000 - 50,000 minimum",
      "Multiple UAE banks available with business banking services",
      "Some banks require in-person visit, others offer online setup",
    ],
  },
]

const costs = [
  {
    category: "License & Registration",
    items: [
      { item: "Free Zone License (basic package)", amount: "15,000 - 30,000/year" },
      { item: "Mainland License", amount: "25,000 - 50,000/year" },
      { item: "Freelance Permit", amount: "7,500 - 15,000/year" },
      { item: "Trade name reservation", amount: "600 - 1,200" },
    ],
  },
  {
    category: "Office & Address",
    items: [
      { item: "Flexi-desk (shared workspace)", amount: "5,000 - 15,000/year" },
      { item: "Virtual office", amount: "8,000 - 20,000/year" },
      { item: "Small physical office (200 sqft)", amount: "30,000 - 60,000/year" },
      { item: "Tenancy registration fee", amount: "220" },
    ],
  },
  {
    category: "Visas",
    items: [
      { item: "Investor visa (owner)", amount: "5,000 - 8,000" },
      { item: "Employee visa", amount: "4,000 - 6,000 per person" },
      { item: "Medical test", amount: "300 - 500 per person" },
      { item: "Emirates ID", amount: "370 per person" },
    ],
  },
  {
    category: "Banking & PRO",
    items: [
      { item: "Bank account opening (PRO fee)", amount: "2,000 - 5,000" },
      { item: "PRO services (annual)", amount: "6,000 - 15,000" },
      { item: "Initial bank deposit", amount: "10,000 - 50,000" },
    ],
  },
]

const commonMistakes = [
  {
    mistake: "Choosing Wrong License Type",
    fix: "Research your activity carefully. E-commerce needs trading license, not professional license. Getting it wrong means starting over.",
  },
  {
    mistake: "Not Planning for Visa Delays",
    fix: "Bank account opening can take 2-4 weeks. Budget extra time and money for unexpected delays.",
  },
  {
    mistake: "Underestimating Costs",
    fix: "First year costs AED 50,000 - 100,000 minimum. Include license, visa, office, PRO, bank, storage, and living expenses.",
  },
  {
    mistake: "No Business Plan",
    fix: "Banks and authorities may ask for business plan. Have a simple 2-3 page plan ready with revenue projections.",
  },
  {
    mistake: "Ignoring Document Storage",
    fix: "Trade licenses, contracts, invoices, customs documents must be kept for 5 years. Use secure storage from day 1.",
  },
]

/* an icon and a colour for each block, in the order above */
const WHY_ICON = [Banknote, MapPin, TrendingUp, Users]
const TYPE_ICON = [Building2, Briefcase, FileText]
const STEP_ICON = [ClipboardList, Map, Tag, FileCheck2, Building2, BadgeCheck, IdCard, Landmark]
const COST_ICON = [FileText, Building2, IdCard, CreditCard]
const TINTS = [
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
]

/* two tips a step, three lines a cost table: enough to be useful, short
   enough to read */
const TIPS = 2
const COST_LINES = 3

/* the first sentence of a step says what it is; the rest is detail */
const brief = (text: string) => text.split(/(?<=[.!?])s+/)[0]

const storage = [
  { Icon: ShieldCheck, title: "Documents and licences", text: "UAE law asks you to keep business records for five years. Store them clean and secure." },
  { Icon: Package, title: "Stock and samples", text: "Hold inventory without renting a whole warehouse — pay only for the space it uses." },
  { Icon: Clock, title: "Back when you need it", text: "Ask for a delivery and we bring the boxes you name, to your office or your door." },
]

const faqs = [
  {
    q: "How long does it take to set up a business in Dubai?",
    a: "Free zone businesses: 2-4 weeks. Mainland businesses: 4-8 weeks. Freelance permit: 1-2 weeks. Banking can add 2-4 weeks to any option.",
  },
  {
    q: "Do I need to live in Dubai to own a business?",
    a: "No. You can own and operate a Dubai business while living anywhere in the world. However, you'll need to visit Dubai to complete initial setup (visa medical test, Emirates ID, bank account opening).",
  },
  {
    q: "What's the minimum investment required?",
    a: "Free zone: AED 50,000-80,000 all-in (first year). Mainland: AED 60,000-120,000. Freelance: AED 25,000-40,000. This includes license, visa, office, banking, and PRO services.",
  },
  {
    q: "Do I need an office or can I work from home?",
    a: "You need a registered business address (flexi-desk, virtual office, or physical office). You cannot use your home address. Flexi-desks start from AED 5,000/year and you can work from anywhere.",
  },
  {
    q: "How do I store my business documents and inventory?",
    a: "UAE law requires keeping business records for 5 years. Store licences, contracts and invoices in clean, secure storage, and keep stock there too — you pay only for the space you use, and ask for a delivery when you need something back.",
  },
]

const startingBusinessSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://safestorage.ae/guides/starting-a-business-in-dubai#article',
    headline: 'Starting a Business in Dubai 2026 — Complete Guide',
    description: 'How to start a business in Dubai in 2026. Mainland vs Freezone, costs, visas, and step-by-step setup guide.',
    url: 'https://safestorage.ae/guides/starting-a-business-in-dubai',
    image: 'https://safestorage.ae/og-cover-2026.jpg',
    datePublished: '2026-01-01',
    dateModified: '2026-03-01',
    author: { '@type': 'Organization', name: 'SafeStorage Dubai', url: 'https://safestorage.ae' },
    publisher: { '@id': 'https://safestorage.ae/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://safestorage.ae/guides/starting-a-business-in-dubai' },
    inLanguage: 'en-AE',
    about: { '@type': 'City', name: 'Dubai' },
  },  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function StartingBusinessDubai2026() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Starting a Business in Dubai" },
        ]}
      />
      <SchemaScript schema={startingBusinessSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's picture right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Business setup · Updated January 2026</span>
              <h1>
                Starting a business <br className={s.mBreakDesk} />
                <em>in Dubai 2026</em>
              </h1>
              <p>
                Free zone or mainland, the eight steps in order, what each stage costs, and the mistakes that
                send people back to the beginning.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a free quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1730 / 909" }}>
              <Image
                src="/landing/business-guide-photo-v2.webp"
                alt="A business team planning a Dubai company setup, with records boxed on the shelves behind"
                width={1400}
                height={736}
                sizes="(max-width: 900px) 94vw, 50vw"
                priority
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* why here */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Why Dubai</span>
              <h2 className={p.longH2}>
                Four reasons people <em>set up here.</em>
              </h2>
            </div>
          </div>
          <div className={s.miniGrid}>
            {whyDubai.map((w, i) => {
              const Icon = WHY_ICON[i % WHY_ICON.length]
              const tint = TINTS[i % TINTS.length]
              return (
                <div className={`${s.miniCard} ${g.animHost}`} key={w.title}>
                  <span
                    className={`${s.miniIcon} ${g.anim}`}
                    style={{ background: tint.bg, color: tint.fg, ["--i" as string]: i } as CSSProperties}
                    aria-hidden="true"
                  >
                    <Icon strokeWidth={1.8} />
                  </span>
                  <div>
                    <b>{w.title}</b>
                    <small>{w.description}</small>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* the three licences */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Pick the licence first</span>
              <h2 className={p.longH2}>
                Free zone, mainland <em>or freelance.</em>
              </h2>
            </div>
            <p>The licence decides what you may sell, where you may sell it, and most of the first-year bill.</p>
          </div>
          <HomeReveal className={g.types}>
            {businessTypes.map((t, i) => {
              const Icon = TYPE_ICON[i % TYPE_ICON.length]
              const tint = TINTS[i % TINTS.length]
              return (
                <article className={g.card} style={idx(i)} key={t.type}>
                  <span
                    className={`${g.icon} ${g.anim}`}
                    style={{ background: tint.bg, color: tint.fg, ["--i" as string]: i } as CSSProperties}
                    aria-hidden="true"
                  >
                    <Icon strokeWidth={1.9} />
                  </span>
                  <h3>{t.type}</h3>
                  <ul className={g.rows}>
                    <li>
                      <span>Ownership</span>
                      <b>{t.ownership}</b>
                    </li>
                    <li>
                      <span>Office</span>
                      <b>{t.office}</b>
                    </li>
                    <li>
                      <span>Trading</span>
                      <b>{t.trading}</b>
                    </li>
                    <li>
                      <span>Cost</span>
                      <b>{t.cost}</b>
                    </li>
                  </ul>
                  <p className={g.best}>
                    <b>Best for</b> {t.bestFor}
                  </p>
                </article>
              )
            })}
          </HomeReveal>
        </section>

        {/* the eight steps */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>The setup</span>
                <h2 className={p.longH2}>
                  Eight steps, <em>in order.</em>
                </h2>
              </div>
            }
          >
            {setupSteps.map((st, i) => {
              const Icon = STEP_ICON[i % STEP_ICON.length]
              const tint = TINTS[i % TINTS.length]
              return (
              <article className={g.step} style={idx(i)} key={st.step}>
                <div className={g.stepTop}>
                  <span
                    className={`${g.stepIcon} ${g.anim}`}
                    style={{ background: tint.bg, color: tint.fg, ["--i" as string]: i } as CSSProperties}
                    aria-hidden="true"
                  >
                    <Icon strokeWidth={1.9} />
                  </span>
                  <span className={g.stepNum} aria-hidden="true">
                    {String(st.step).padStart(2, "0")}
                  </span>
                  <span className={g.when}>{st.timeline}</span>
                </div>
                <h3>{st.title}</h3>
                <p>{brief(st.description)}</p>
                <ul className={g.tips}>
                  {st.tips.slice(0, TIPS).map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </article>
              )
            })}
          </UspRail>
          <p className={s.scrollHint}>Swipe for more →</p>
        </section>

        {/* what it costs */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>First-year costs</span>
              <h2 className={p.longH2}>
                What you will actually <em>pay for.</em>
              </h2>
            </div>
            <p>Government and market figures in AED, not ours — ask each provider for their own quote.</p>
          </div>
          <HomeReveal className={g.costs}>
            {costs.map((c, i) => {
              const Icon = COST_ICON[i % COST_ICON.length]
              const tint = TINTS[i % TINTS.length]
              return (
              <article className={g.card} style={idx(i)} key={c.category}>
                <span
                  className={`${g.icon} ${g.anim}`}
                  style={{ background: tint.bg, color: tint.fg, ["--i" as string]: i } as CSSProperties}
                  aria-hidden="true"
                >
                  <Icon strokeWidth={1.9} />
                </span>
                <h3>{c.category}</h3>
                <ul className={`${g.rows} ${g.money}`}>
                  {c.items.slice(0, COST_LINES).map((it) => (
                    <li key={it.item}>
                      <span>{it.item}</span>
                      <b>{it.amount}</b>
                    </li>
                  ))}
                </ul>
              </article>
              )
            })}
          </HomeReveal>
        </section>

        {/* the mistakes */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Avoid these</span>
              <h2 className={p.longH2}>
                Five mistakes that <em>cost time.</em>
              </h2>
            </div>
          </div>
          <HomeReveal className={g.mistakes}>
            {commonMistakes.map((mk, i) => (
              <article className={g.miss} style={idx(i)} key={mk.mistake}>
                <div className={g.missTop}>
                  <span
                    className={`${g.missIcon} ${g.anim}`}
                    style={{ background: "rgba(225, 29, 72, 0.12)", color: "#e11d48", ["--i" as string]: i } as CSSProperties}
                    aria-hidden="true"
                  >
                    <AlertTriangle strokeWidth={1.9} />
                  </span>
                  <h3>{mk.mistake}</h3>
                </div>
                <p>{mk.fix}</p>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* storage for the business */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Business storage</span>
              <h2>
                Records and stock, <br className={s.mBreak} />
                <em>off the office floor.</em>
              </h2>
              <p>
                Every business here keeps five years of paperwork and, sooner or later, stock it has nowhere to
                put. Both are cheaper with us than with a bigger office.
              </p>
            </div>
            <FeatScroller>
              {storage.map((f) => (
                <article className={s.feat} key={f.title}>
                  <div className={s.featIcon}>
                    <f.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </FeatScroller>
            <div className={s.bandCta} style={{ flexWrap: "wrap", gap: 14 }}>
              <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                Get a free quote →
              </Link>
              <Link className={`${s.btn} ${s.btnGhost}`} href="/business-storage-dubai">
                Business storage in Dubai
              </Link>
            </div>
          </div>
        </section>

        {/* the questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2 className={p.longH2}>
                Setting up <em>in Dubai.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Opening in Dubai? Keep the paperwork safe."
          blurb="Tell us what the business needs to store — records, stock or office furniture between addresses — and we will send a free, itemised quote."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/guides/starting-a-business-in-dubai" />
    </>
  )
}
