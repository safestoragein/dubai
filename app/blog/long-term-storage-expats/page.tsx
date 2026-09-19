import type { CSSProperties } from "react"
import type { Metadata } from "next"
import { Receipt, SlidersHorizontal, RotateCcw, Package, Stamp, X, Check, Info, Lightbulb } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import RelatedGuides from "@/components/blog/related-guides"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { SplitHero } from "@/components/landing/landing-top"
import { UspRail } from "@/components/landing/usp-rail"
import s from "@/components/landing/landing.module.css"
import h from "./hero.module.css"
import c from "./compare.module.css"
import Reveal from "./Reveal"
import CompareToggle from "./CompareToggle"

/* 2026-09-19 redesign (owner's request): the live copy is kept word for word,
   only laid out in the landing design system — two-column hero with the
   owner's photo, emoji cards, versus cards instead of the table, animations. */

export const metadata: Metadata = {
  // <title> deliberately differs from the <h1> below. They were byte-identical,
  // which spends the one line Google shows in the results on the same words the
  // reader already sees at the top of the page. The h1 and every claim on the
  // page are untouched; only the search-facing line changed.
  title: { absolute: "Expat Storage Dubai | Leaving the UAE With Things to Keep" },
  description: "Long-term storage in Dubai for expats. Keep your furniture safely stored while you are abroad, from one month to several years, with no lock-in.",
  keywords: "long term storage dubai expats, expat storage dubai long term, 6 month storage dubai, 12 month storage dubai, year long storage dubai expat, remote storage management dubai",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/blog/long-term-storage-expats",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/long-term-storage-expats" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Long-Term Storage Dubai for Expats — Complete Guide & Pricing",
    description: "Complete guide to long-term storage in Dubai for expats. Pricing, remote management, and decision frameworks for 3-month to 2-year storage.",
    url: "https://safestorage.ae/blog/long-term-storage-expats",
    datePublished: "2025-02-15",
    dateModified: "2025-04-01",
    author: { "@type": "Organization", name: "SafeStorage Dubai", url: "https://safestorage.ae" },
    publisher: { "@id": "https://safestorage.ae/#organization" },
    isPartOf: { "@id": "https://safestorage.ae/blog#webpage" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://safestorage.ae/blog" },
      { "@type": "ListItem", position: 3, name: "Long-Term Storage Expats", item: "https://safestorage.ae/blog/long-term-storage-expats" },
    ],
  },
]

const scenarios = [
  { e: "🤔", scenario: "You're not sure you're coming back", desc: "88% of expats who leave Dubai say they'd consider returning. If there's a 30%+ chance you'll be back within 2 years, storage often beats shipping. Because you pay only for the space your items use, storing long-term costs far less than one-way shipping — and a fraction of shipping both ways." },
  { e: "🏠", scenario: "Your new country housing is uncertain", desc: "You don't know if you'll have space for Dubai furniture abroad. Store here, ship only what you need once you've seen the new accommodation — rather than shipping everything and discovering it doesn't fit." },
  { e: "📄", scenario: "Job contract has a fixed term", desc: "On a 12-month secondment or project contract? Storing in Dubai costs less than shipping and returning items. Keep your Dubai belongings safe while you complete the contract, then decide." },
  { e: "🎒", scenario: "Children's school year timing", desc: "Many expat families time moves around school years. Summer departure with September re-entry is a 3-month storage window. Academic year timing means 9-12 month storage for families that take the full school year abroad." },
]

const remote = [
  { e: "🔑", service: "Remote authorisation", desc: "Authorise a trusted person in Dubai (friend, family, colleague) to access your storage on your behalf. They sign our access form, you approve — they can collect, add, or organise items while you're abroad." },
  { e: "📦", service: "Item retrieval coordination", desc: "Need a specific item shipped to you? Contact us to locate the item, we prepare it for collection by your courier. You arrange the international shipping; we provide the Dubai-side access and handover." },
  { e: "🛒", service: "Selling items in storage", desc: "Many expats sell furniture and items in storage from abroad via Dubizzle or Facebook Marketplace. We can coordinate access visits for buyers (with your authorisation). You close the deal remotely; we facilitate the collection." },
  { e: "🎁", service: "End-of-storage clearance", desc: "At the end of your contract, your items can be collected by an authorised person, donated to UAE charities, or auctioned through trusted partners — all without you returning to Dubai." },
]

// Storage vs shipping — the live table as two versus cards. `tone` = [icon colour, tile tint]
const comparison = [
  { Icon: Receipt, factor: "Total cost", storage: "Only the space you use — free, itemised quote", shipping: "AED 35,000–60,000 (both ways)", tone: ["#e11d48", "#ffe4e9"] },
  { Icon: SlidersHorizontal, factor: "Decision flexibility", storage: "Full — change mind any time", shipping: "None — committed once shipped", tone: ["#d97706", "#fef3c7"] },
  { Icon: RotateCcw, factor: "If you return early", storage: "Just collect early", shipping: "Re-shipping costs again", tone: ["#4f46e5", "#e0e7ff"] },
  { Icon: Package, factor: "Items you didn't need abroad", storage: "Stored in Dubai", shipping: "Had to be shipped and stored abroad", tone: ["#7c3aed", "#ede9fe"] },
  { Icon: Stamp, factor: "Customs and duty", storage: "None", shipping: "Potential duty on re-entry", tone: ["#0891b2", "#cffafe"] },
] as const

/** Stagger index for an animated card. */
const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function LongTermStorageExpatsPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* HERO — full-width photo like the business page; the photo's own cream
            fade sits behind the text, so no one is under the letters */}
        <div className={h.heroVivid}>
          <SplitHero
            eyebrow="Expat Guide"
            title="Long-Term Storage Dubai for Expats —"
            titleAccent="Complete Guide & Pricing"
            blurb="Updated April 2025 · 9 min read · By SafeStorage Dubai"
            image="/landing/expat-storage-hero-wide.webp"
            imagePosition="right 40%"
            ctaLabel="Get a Long-Term Quote"
          />
        </div>

        {/* INTRO */}
        <section className={s.wrap} style={{ paddingBlock: "8px 0" }}>
          <div className={s.movingTip} style={{ marginTop: 0 }}>
            <Info aria-hidden="true" />
            <p>
              Long-term storage — typically 3 months to 2 years — is one of the most common storage needs for Dubai&apos;s
              expat community. Whether you&apos;re leaving on a work secondment, returning home to decide if Dubai is
              permanent, or managing an international relocation with uncertain timelines, long-term storage provides
              flexibility that international shipping cannot.
            </p>
          </div>
        </section>

        {/* WHEN IT MAKES SENSE */}
        <section className={`${s.section} ${s.wrap}`} id="when">
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>When it makes sense</span>
                  <h2 className={h.longH2}>
                    When Long-Term Storage Makes Sense <em>for Dubai Expats</em>
                  </h2>
                </div>
              }
            >
              {scenarios.map(({ e, scenario, desc }, i) => (
                <article className={`${s.usp} ${h.plan}`} style={idx(i)} key={scenario}>
                  <span className={h.bigEmoji} aria-hidden="true">
                    {e}
                  </span>
                  <h3>{scenario}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* COST */}
        <section className={`${s.section} ${s.wrap}`} id="cost" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Cost</span>
              <h2>
                Long-Term Storage Cost: <em>Full Breakdown</em>
              </h2>
            </div>
          </div>
          <div className={`${s.panel} ${s.panelAccent}`}>
            <p className={h.panelText} style={{ color: "var(--navy)", fontWeight: 500, fontSize: 16 }}>
              <b>Get a free, itemised quote for long-term storage.</b> Whether you store for 3 months over summer or 2
              years on secondment, you pay the same straightforward per-square-foot rate for the space you reserve.
            </p>
          </div>
          <p className={h.footnote}>* Long-term discounts may apply for 6-month and 12-month commitments — ask at time of booking.</p>
        </section>

        {/* REMOTE MANAGEMENT */}
        <section className={`${s.section} ${s.wrap}`} id="remote" style={{ paddingTop: 0 }}>
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>From abroad</span>
                  <h2>
                    Managing Your Dubai Storage <em>Remotely</em>
                  </h2>
                  <p className={s.splitBlurb} style={{ marginBottom: 0 }}>
                    Many of our long-term customers manage their storage entirely from abroad. Here&apos;s how:
                  </p>
                </div>
              }
            >
              {remote.map(({ e, service, desc }, i) => (
                <article className={`${s.usp} ${h.plan}`} style={idx(i)} key={service}>
                  <span className={h.bigEmoji} aria-hidden="true">
                    {e}
                  </span>
                  <h3>{service}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* STORAGE VS SHIPPING */}
        <section className={`${s.section} ${s.wrap}`} id="compare" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Compare</span>
              <h2 className={h.longH2}>
                Long-Term Storage vs Shipping: <em>The Real Comparison</em>
              </h2>
            </div>
          </div>
          <CompareToggle>
            {/* SHIPPING */}
            <div className={`${c.card} ${c.them}`}>
              <div className={c.cardHead}>
                <div>
                  <b>Sea Freight</b>
                  <small>to UK + Back</small>
                </div>
              </div>
              <ul className={c.list}>
                {comparison.map(({ Icon, factor, shipping, tone }) => (
                  <li className={c.row} key={factor}>
                    <div className={c.ic} style={{ color: tone[0], background: tone[1] }} aria-hidden="true">
                      <Icon strokeWidth={2} />
                    </div>
                    <div>
                      <b>{factor}</b>
                      <span>{shipping}</span>
                    </div>
                    <div className={c.cross} aria-label="Worse">
                      <X strokeWidth={3} aria-hidden="true" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* STORAGE */}
            <div className={`${c.card} ${c.us}`}>
              <span className={c.badge}>RECOMMENDED</span>
              <div className={c.cardHead}>
                <div>
                  <b>2-Year Storage</b>
                  <small>Medium Unit</small>
                </div>
              </div>
              <ul className={c.list}>
                {comparison.map(({ factor, storage }) => (
                  <li className={c.row} key={factor}>
                    <div>
                      <b>{factor}</b>
                      <span>{storage}</span>
                    </div>
                    <div className={c.tick} aria-label="Better">
                      <Check strokeWidth={3} aria-hidden="true" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CompareToggle>
          <div className={s.movingTip}>
            <Lightbulb aria-hidden="true" />
            <p>
              <b>Bottom line:</b> For expats with any likelihood of returning to Dubai within 2 years, or who are
              uncertain about their final destination, long-term storage is almost always the financially and
              logistically superior choice compared to international shipping.
            </p>
          </div>
        </section>

        <CtaBand
          title="Start Your Long-Term Storage Plan"
          blurb="Discuss your timeline with our expat storage specialists. We'll recommend the right unit, contract length, and remote management setup."
          ctaLabel="Get a Long-Term Quote"
          callLabel="+971505773388"
        />

        <RelatedGuides currentSlug="long-term-storage-expats" />
      </div>
    </>
  )
}
