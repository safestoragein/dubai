import type { CSSProperties } from "react"
import type { Metadata } from "next"
import { Info } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import RelatedGuides from "@/components/blog/related-guides"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { UspRail } from "@/components/landing/usp-rail"
import s from "@/components/landing/landing.module.css"
import h from "./hero.module.css"
import Reveal from "./Reveal"

/* 2026-09-19 redesign (owner's request): the live copy is kept word for word,
   only laid out in the landing design system — side-photo hero (bigger photo
   and title, owner's choice), emoji swipe rails, animations. The live page's
   empty "Cost Comparison: Storage vs Warehouse" heading (no content under it)
   is not repeated. */

export const metadata: Metadata = {
  title: { absolute: "Dubai Small Business Storage: Flexible Warehouse Alternative" },
  description: "Dubai small businesses use self-storage to skip long warehouse leases. Scale seamlessly as you grow with zero long-term commitments and flexible monthly plans.",
  keywords: "small business storage dubai, business storage solution dubai, warehouse alternative dubai, inventory storage small business dubai, office storage dubai, retail storage dubai",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/blog/small-business-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/small-business-storage" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Small Business Storage Dubai — Flexible Alternative to Warehouse Rental",
    description: "How Dubai small businesses use storage units as a cost-effective alternative to warehouse leases. Covers use cases, cost comparison, and practical setup.",
    url: "https://safestorage.ae/blog/small-business-storage",
    datePublished: "2025-02-10",
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
      { "@type": "ListItem", position: 3, name: "Small Business Storage", item: "https://safestorage.ae/blog/small-business-storage" },
    ],
  },
]

const problems = [
  { e: "📜", problem: "Minimum 2-3 year lease", impact: "You're committed regardless of whether the business grows, shrinks, or pivots. Breaking a commercial lease in Dubai can cost months of rent in penalties." },
  { e: "💰", problem: "High upfront costs", impact: "Security deposits, fit-out costs, and first/last month payments can total AED 50,000-150,000 before you store a single item." },
  { e: "📐", problem: "Larger than you need", impact: "Minimum warehouse sizes in Dubai typically start at 1,000 sq ft. A small business may need only 200-500 sq ft — they're forced to pay for wasted space." },
  { e: "⏳", problem: "Long lead times", impact: "Securing a warehouse in Dubai typically takes 2-4 months from search to occupancy. Storage is available in days." },
]

const businesses = [
  { e: "🛒", business: "E-commerce and online retailers", useCase: "Store inventory, pack orders on-site, scale the unit as product range grows. Many Dubai noon.com and Amazon UAE sellers start with a medium unit and graduate to large as their catalogue grows — without warehouse lease exposure." },
  { e: "🎪", business: "Event and exhibition companies", useCase: "Store display stands, promotional materials, branded equipment and event infrastructure between events. No need to lease permanent warehouse space for items only actively used 10-15 times per year." },
  { e: "🛋️", business: "Interior design and contractor firms", useCase: "Store client furnishings, fabric samples, decorative inventory, and tools between projects. Scale storage up during busy delivery periods, down in quieter months." },
  { e: "🍽️", business: "Food and hospitality businesses", useCase: "Store non-perishable supplies, packaging, branded merchandise, equipment, and catering materials in a secure, clean unit between service periods." },
  { e: "🏢", business: "Real estate and property management", useCase: "Store model apartment furniture, marketing materials, photography equipment, and maintenance inventory across a portfolio of properties without needing a central office warehouse." },
]

const storageRight = ["You need under 500 sq ft", "Your volume fluctuates seasonally", "You're a startup without 2-year revenue certainty", "You don't need 24/7 access", "Your business may pivot in the next 12 months", "You want to test a market before committing"]
const warehouseBetter = ["You consistently need 1,000+ sq ft", "You need 24/7 unrestricted access", "You have staff working on-site daily", "You have loading dock requirements", "Your business model requires it legally", "You have 3+ years of stable revenue"]

/** Stagger index for an animated card. */
const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function SmallBusinessStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* HERO — copy left, owner's photo right (bigger, owner's choice) */}
        <section className={`${s.hero} ${s.wrap} ${h.split2}`}>
          <div className={h.split2Inner}>
            <div className={`${s.heroContent} ${h.split2Copy}`}>
              <span className={s.heroTag}>Business Guide</span>
              <h1>
                Small Business Storage Dubai — <em>The Smart Alternative to Warehouse Rental</em>
              </h1>
              <p className={h.metaLine}>Updated April 2025 · 9 min read · By SafeStorage Dubai</p>
            </div>
            <div className={h.split2Photo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/small-business-hero-v2.webp"
                alt="SafeStorage team helping a Dubai small business pack and store stock"
                width={1263}
                height={907}
                fetchPriority="high"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className={s.wrap} style={{ paddingBlock: "8px 0" }}>
          <div className={s.movingTip} style={{ marginTop: 0 }}>
            <Info aria-hidden="true" />
            <p>
              Dubai&apos;s traditional warehouse market requires minimum 2-3 year leases, large capital commitments, and
              long setup times — completely misaligned with the needs of growing small businesses. Thousands of Dubai
              SMEs and entrepreneurs now use self storage as a flexible, cost-effective alternative that scales with
              their business without the risk of a long-term lease.
            </p>
          </div>
        </section>

        {/* THE WAREHOUSE PROBLEM */}
        <section className={`${s.section} ${s.wrap}`} id="problem">
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>The problem</span>
                  <h2>
                    The Warehouse Problem for <em>Dubai Small Businesses</em>
                  </h2>
                </div>
              }
            >
              {problems.map(({ e, problem, impact }, i) => (
                <article className={`${s.usp} ${h.plan}`} style={idx(i)} key={problem}>
                  <span className={h.bigEmoji} aria-hidden="true">
                    {e}
                  </span>
                  <h3>{problem}</h3>
                  <p>{impact}</p>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* HOW SMEs USE STORAGE */}
        <section className={`${s.section} ${s.wrap}`} id="smes" style={{ paddingTop: 0 }}>
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>Use cases</span>
                  <h2>
                    How Dubai SMEs Are Using <em>Storage Instead</em>
                  </h2>
                </div>
              }
            >
              {businesses.map(({ e, business, useCase }, i) => (
                <article className={`${s.usp} ${h.plan}`} style={idx(i)} key={business}>
                  <span className={h.bigEmoji} aria-hidden="true">
                    {e}
                  </span>
                  <h3>{business}</h3>
                  <p>{useCase}</p>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* STORAGE OR WAREHOUSE */}
        <section className={`${s.section} ${s.wrap}`} id="decide" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Decide</span>
              <h2>
                When Storage Makes Sense vs <em>When to Get a Warehouse</em>
              </h2>
            </div>
          </div>
          <Reveal>
            <div className={h.pair}>
              <div className={`${h.pairCard} ${h.pairFix} ${h.plan}`} style={idx(0)}>
                <h3 className={h.panelTitle}>
                  <span aria-hidden="true">📦</span> Storage is right for you if:
                </h3>
                <ul className={s.checkList}>
                  {storageRight.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={`${h.pairCard} ${h.pairCatch} ${h.plan}`} style={idx(1)}>
                <h3 className={h.panelTitle}>
                  <span aria-hidden="true">🏭</span> Warehouse is better when:
                </h3>
                <ul className={s.checkList}>
                  {warehouseBetter.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        <CtaBand
          title="Start Your Business Storage Plan"
          blurb="Get a free business storage quote. No warehouse commitment — flexible, scalable, available in days."
          ctaLabel="Get a Business Quote"
          callLabel="+971505773388"
        />

        <RelatedGuides currentSlug="small-business-storage" />
      </div>
    </>
  )
}
