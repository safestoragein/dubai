import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Package, ShieldCheck, Clock, Globe } from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloLinks } from "@/components/silo/silo-links"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { UspRail } from "@/components/landing/usp-rail"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import z from "@/components/silo/size-cards.module.css"
import rv from "@/components/testimonials/reviews.module.css"
import fx from "@/components/landing/home-fx.module.css"

/**
 * /personal-storage-dubai/expat-storage — redesigned on the shared landing
 * system (owner, 2026-09-24) with their own photo and the real SafeStorage
 * logo in place of the two drawn ones.
 *
 * The copy is the page's own; only the layout changed, the FAQ is cut to the
 * owner's five, and the notice-period and "dedicated unit" wording is gone.
 */

export const metadata: Metadata = {
  title: "Expat Leaving UAE? Storage Solutions",
  description:
    "Moving back home from Dubai? SafeStorage offers expat-friendly long-term storage — keep belongings safely stored while you decide what to ship.",
  keywords:
    "expat leaving uae storage, leaving dubai storage, storage for expats dubai, moving out dubai storage, expat storage dubai long term, leaving dubai checklist, repatriation storage dubai",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/personal-storage-dubai/expat-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/personal-storage-dubai/expat-storage" },
}

const stats = [
  { e: "✈️", value: "80,000+", label: "Expats leave UAE annually" },
  { e: "🌍", value: "88%", label: "Of Dubai residents are expats" },
  { e: "🗓️", value: "4-7 yrs", label: "Average expat stay in Dubai" },
  { e: "🚚", value: "Door-to-Door", label: "Pickup & delivery" },
]

const options = [
  {
    e: "🚢",
    title: "Ship to Europe/UK",
    cost: "AED 8,000–25,000",
    timeframe: "4–8 weeks transit",
    pros: ["Items arrive at destination", "One-time cost"],
    cons: ["Huge upfront cost", "Long wait time", "Risk of damage in transit", "No flexibility if you return"],
  },
  {
    e: "✈️",
    title: "Ship by Air",
    cost: "AED 15–35 per kg",
    timeframe: "3–7 days",
    pros: ["Fast delivery", "Good for valuables"],
    cons: ["Extremely expensive for furniture", "Not viable for large volumes"],
  },
  {
    e: "🏢",
    title: "Store in Dubai",
    cost: "Pay only for the space you use",
    timeframe: "Month-to-month flexibility",
    pros: ["Fraction of shipping cost", "Items ready if you return", "No customs hassle", "Clean, secure protection"],
    cons: ["Ongoing monthly cost"],
  },
]

const checklist = [
  {
    e: "🗓️",
    category: "90 Days Before",
    items: [
      "Decide ship vs store vs sell for each category of belongings",
      "Get shipping quotes (sea freight FCL/LCL, air freight)",
      "Compare storage costs to shipping costs",
      "Sort through clothes, books, and accumulated items",
      "List items for sale on Dubizzle or Facebook Marketplace UAE",
    ],
  },
  {
    e: "📦",
    category: "60 Days Before",
    items: [
      "Book your storage space",
      "Cancel or transfer subscriptions (Etisalat, DEWA, gym, etc.)",
      "Notify your bank of departure — keep UAE account active for storage payments",
      "Arrange power of attorney for someone in Dubai if needed",
      "Begin selling non-essential furniture",
    ],
  },
  {
    e: "🚚",
    category: "2 Weeks Before",
    items: [
      "SafeStorage collects your items — condition report signed",
      "Deep clean apartment for deposit recovery",
      "Return keys and complete tenancy checkout",
      "Transfer utilities and cancel DEWA",
      "Confirm storage access for any authorised person in Dubai",
    ],
  },
  {
    e: "🛫",
    category: "Final Week",
    items: [
      "Final walk-through of apartment",
      "Collect NOC from building if required",
      "Settle all bills and bank accounts",
      "Keep storage contract and emergency contact numbers accessible",
      "Set up auto-payment for monthly storage fees from home country bank",
    ],
  },
]

const abroad = [
  { Icon: Globe, title: "Authorised Access", text: "Add a trusted person in Dubai to access your storage on your behalf. We verify their identity before granting access." },
  { Icon: Package, title: "Delivery on Request", text: "Contact us from anywhere in the world and we'll retrieve specific items and arrange international shipping." },
  { Icon: ShieldCheck, title: "Auto-Payment Setup", text: "Set up monthly direct debit from your home country bank card — no manual transfers needed." },
  { Icon: Clock, title: "Inventory Photos on Request", text: "Request photos of your stored items anytime. We photograph and send within 48 hours." },
]

const stories = [
  {
    name: "Emma T.",
    location: "Dubai Marina → London",
    initials: "ET",
    rating: 5,
    text: "Moved back to London after 6 years in Dubai. Rather than shipping everything and paying AED 20,000, I stored my furniture with SafeStorage. When my assignment fell through 8 months later and I came back to Dubai, everything was there. Best decision I made.",
  },
  {
    name: "Rajesh M.",
    location: "JLT → Bangalore",
    initials: "RM",
    rating: 5,
    text: "Left Dubai temporarily for a family matter — wasn't sure if I'd be back. SafeStorage gave me the flexibility I needed. The auto-payment meant I didn't have to worry about losing my belongings. Returned after 5 months and everything was exactly as I'd left it.",
  },
  {
    name: "Steph & Mark B.",
    location: "Jumeirah → Brisbane",
    initials: "SB",
    rating: 5,
    text: "As a couple with 8 years of Dubai life accumulated, we had too much to ship but too much to lose. We stored everything valuable and sold the rest. The inventory photos SafeStorage sent every quarter were incredibly reassuring.",
  },
]

const faqs = [
  {
    q: "How long can I store my belongings?",
    a: "As long as you need — month-to-month with no upper limit. Many of our expat customers have stored for 2-4 years. The longer you commit upfront (3, 6, or 12-month prepaid), the more you save.",
  },
  {
    q: "Can someone in Dubai access my storage?",
    a: "Yes — you can authorise anyone you trust. Bring them to the facility with your written authorisation letter and their Emirates ID or passport. We update their access credentials and notify you.",
  },
  {
    q: "Can I have specific items retrieved and shipped to me?",
    a: "Yes. Contact us via WhatsApp or email, specify which items you need, and we'll locate them, package them securely, and coordinate with a courier for international shipping. You pay the shipping cost; we handle the logistics.",
  },
  {
    q: "How do I manage my storage account from abroad?",
    a: "Monthly payments can be automated via credit or debit card from any country, and you can reach our team on WhatsApp, email or phone at any time. Adding authorised access, requesting inventory photos and arranging retrievals are all handled remotely.",
  },
  {
    q: "How do I compare storage costs versus international shipping?",
    a: "International sea freight from Dubai to the UK or Europe for a 2–3 bedroom apartment typically costs AED 12,000–25,000 for a full container, with transit times of 4–8 weeks. Storing the same volume means paying only for the space your items use, and you keep the option to return, sell locally, or ship later.",
  },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Expat Leaving UAE — Long-Term Storage Dubai",
    description:
      "Long-term storage solutions for expats leaving the UAE. Flexible month-to-month terms, door-to-door pickup, and remote management while you're abroad.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/personal-storage-dubai/expat-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Long-Term Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/personal-storage-dubai/expat-storage#webpage",
    name: "Expat Leaving UAE? Storage Checklist & Solutions Dubai",
    url: "https://safestorage.ae/personal-storage-dubai/expat-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 5).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function ExpatLeavingUAEPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Personal Storage Dubai", href: "/personal-storage-dubai" },
          { name: "Expat Storage" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's photo right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${z.tightHead}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>✈️ Trusted by 500+ Departing Expats</span>
              <h1>
                Leaving Dubai? <br className={s.mBreakDesk} />
                <em>Your storage &amp; exit checklist</em>
              </h1>
              <p>
                Don&apos;t rush to sell or ship everything. Storage in Dubai costs a fraction of
                international shipping — and gives you the flexibility to return.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a Free Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1670 / 941" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/expat-photo.webp"
                alt="A SafeStorage Dubai crew collecting an expat's belongings from a Dubai apartment"
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

        {/* the page's own numbers */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <HomeReveal className={`${z.steps} ${z.moves}`}>
            {stats.map((st, i) => (
              <div className={`${z.step} ${fx.floatBox}`} style={idx(i)} key={st.label}>
                <span className={z.stepEmoji} aria-hidden="true">
                  {st.e}
                </span>
                <h3>{st.value}</h3>
                <p>{st.label}</p>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* ship vs store vs sell */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The real numbers</span>
              <h2 className={p.longH2}>
                Ship, store or <em>sell?</em>
              </h2>
            </div>
          </div>
          <HomeReveal className={`${p.siloGrid} ${p.trio}`}>
            {options.map((o, i) => (
              <div className={`${p.siloCard} ${p.plan}`} style={idx(i)} key={o.title}>
                <span className={p.siloEmoji} aria-hidden="true">
                  {o.e}
                </span>
                <h3>{o.title}</h3>
                <p>
                  <strong>{o.cost}</strong>
                  <br />
                  {o.timeframe}
                </p>
                <ul className={s.checkList}>
                  {o.pros.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <ul className={`${s.checkList} ${rv.consList}`}>
                  {o.cons.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </HomeReveal>
          <div className={s.movingTip}>
            <p>
              <strong>Real example:</strong> A 2-bedroom apartment&apos;s furniture shipped to the UK costs
              AED 18,000–22,000 in sea freight. Store the same items at SafeStorage Dubai and you pay only
              for the space they use — and you have the flexibility to return or sell locally.
            </p>
          </div>
        </section>

        {/* the 90-day checklist */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Step by step</span>
              <h2 className={p.longH2}>
                Your 90-day <em>departure checklist.</em>
              </h2>
            </div>
          </div>
          <HomeReveal className={`${z.steps} ${z.moves}`}>
            {checklist.map((phase, i) => (
              <div className={`${z.step} ${fx.floatBox}`} style={idx(i)} key={phase.category}>
                <span className={z.stepEmoji} aria-hidden="true">
                  {phase.e}
                </span>
                <h3>{phase.category}</h3>
                <ul className={s.checkList}>
                  {phase.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* managing storage from abroad */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>From anywhere in the world</span>
              <h2>
                {/* phones size this heading to two short lines, so the break is explicit */}
                Manage it all <br className={s.mBreak} />
                <em>from abroad.</em>
              </h2>
              <p>
                One of the biggest concerns expats have is how to manage storage once they are no longer in
                Dubai. SafeStorage is designed for exactly this situation.
              </p>
            </div>
            <FeatScroller>
              {abroad.map((f) => (
                <article className={s.feat} key={f.title}>
                  <div className={s.featIcon}>
                    <f.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        {/* expat stories */}
        <section className={`${s.section} ${s.wrap}`}>
          <HomeReveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>Expat stories</span>
                  <h2 className={p.longH2}>
                    They left Dubai — <em>and came back to everything.</em>
                  </h2>
                </div>
              }
            >
              {stories.map((t, i) => (
                <article className={`${rv.card} ${rv.railCard}`} style={idx(i)} key={t.name}>
                  <span className={rv.mark} aria-hidden="true">
                    &ldquo;
                  </span>
                  <div className={rv.stars} aria-label={`${t.rating} out of 5 stars`}>
                    {"★".repeat(t.rating)}
                  </div>
                  <p className={rv.text}>{t.text}</p>
                  <div className={rv.who}>
                    <span className={rv.avatar} aria-hidden="true">
                      {t.initials}
                    </span>
                    <div>
                      <b className={rv.name}>{t.name}</b>
                      <span className={rv.place}>{t.location}</span>
                    </div>
                  </div>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </HomeReveal>
        </section>

        {/* why store first */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Store first, decide later</span>
              <h2 className={p.longH2}>
                About expat storage <em>at SafeStorage Dubai.</em>
              </h2>
            </div>
          </div>
          <HomeReveal className={p.pair}>
            <div className={`${p.panel} ${p.plan}`} style={idx(0)}>
              <h3 className={p.panelTitle}>
                <span aria-hidden="true">🌍</span> Built for a city that moves
              </h3>
              <p className={p.panelText}>
                Dubai is home to one of the world&apos;s most internationally mobile populations, with over
                88% of residents being expatriates from more than 200 countries. Shipping a full apartment
                to Europe, India, the USA or Australia runs into tens of thousands of dirhams, while selling
                furniture at short notice rarely returns fair value.
              </p>
            </div>
            <div className={`${p.panel} ${p.plan}`} style={idx(1)}>
              <h3 className={p.panelTitle}>
                <span aria-hidden="true">🧭</span> Better decisions, less pressure
              </h3>
              <p className={p.panelText}>
                Expats who choose storage rather than rushed shipping almost universally report making
                better decisions once they have settled in their new country. You can ship what you
                genuinely need, sell what you no longer want, and return for belongings if your Dubai life
                resumes.
              </p>
            </div>
          </HomeReveal>
        </section>

        {/* five questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2 className={p.longH2}>
                Questions expats <em>ask us most.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Don't stress about your belongings"
          blurb="Get a free quote today. Most expats are surprised by how affordable long-term storage is compared to shipping costs."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/personal-storage-dubai/expat-storage" />
    </>
  )
}
