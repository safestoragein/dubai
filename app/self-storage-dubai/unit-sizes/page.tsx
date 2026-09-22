import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Armchair, PackageOpen, Frame, Boxes } from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import sk from "@/components/silo/silo-landing.module.css"
import z from "@/components/silo/size-cards.module.css"

/**
 * Silo 1 · /self-storage-dubai/unit-sizes/ — owns `storage unit sizes`.
 *
 * MOVE from /storage-size-guide, which 301s here in the same commit.
 *
 * ⚠ Keyword ownership (§5.4): `storage size calculator` belongs to
 * /self-storage-dubai/storage-calculator/. This page may MENTION it, never
 * target it — so it is absent from the title, H1 and keywords.
 *
 * Low search volume, high commercial assist: this is a conversion page that
 * stops people booking the wrong size, not a traffic page. It earns its place
 * by being genuinely usable — hence the estimation method, which is the part a
 * table alone cannot do.
 *
 * Redesigned on the shared landing system (owner, 2026-09-22) with their own
 * photo. Every word and every internal link is the copy that was already here;
 * only the layout changed — the size table is now five cards and the four
 * estimating steps are numbered cards.
 */

export const metadata: Metadata = {
  title: { absolute: "Storage Unit Sizes Dubai | 30 to 270+ Sq Ft Guide" },
  description:
    "Storage unit sizes in Dubai: 30 sq ft for a studio, 60-90 for a 1BHK, 240-270 for a 3BHK villa. See what fits each size and how to estimate yours.",
  keywords:
    "storage unit sizes, storage size guide dubai, storage unit dimensions, 1bhk storage size, how much storage space do i need dubai, 2bhk storage size dubai",
  openGraph: {
    title: "Storage Unit Sizes — How Much Space You Actually Need",
    description:
      "Storage unit sizes in Dubai from 30 to 270+ sq ft, what fits in each, and a four-step method to estimate your own load in ten minutes.",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/unit-sizes",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/self-storage-dubai/unit-sizes" },
}

const faqData = [
  {
    q: "What size storage unit do I need for a 1BHK in Dubai?",
    a: "Between 60 and 90 sq ft if the contents are packed and beds and tables are dismantled. That covers a three-seat sofa, dining set, double bed, wardrobe, fridge, washing machine and 20–30 boxes.",
  },
  {
    q: "How big is a 30 sq ft storage unit?",
    a: "About the footprint of a small bathroom. It holds a bed and mattress, one wardrobe's contents, a small fridge, a TV and 10–15 medium boxes — a studio or single room's worth.",
  },
  {
    q: "How do I work out how much storage space I need?",
    a: "Count medium boxes room by room (a Dubai kitchen is typically 8–12 on its own), list large items separately, then convert: 10 stacked boxes is about 6 sq ft, a three-seat sofa about 12, a fridge-freezer about 6. Add 15% for stacking tolerance.",
  },
  {
    q: "What size storage do I need for a 3-bedroom villa?",
    a: "240 to 270 sq ft covers three bedroom sets, majlis and family living furniture, an eight-seat dining set, all white goods, garden furniture and 70–90 boxes. Larger villas move into custom sizing above 270 sq ft.",
  },
  {
    q: "What if I book too small a size?",
    a: "Space is re-measured after your goods are racked, so the monthly rate reflects what's actually used. The problem isn't billing, it's vehicle size on the day — which is why we do a free video walkthrough for anything above a 2BHK.",
  },
  {
    q: "Do unpacked items need more space?",
    a: "Yes, roughly 30 to 40% more than the same contents properly boxed. Paying for a packing crew often reduces the monthly storage cost by more than the packing costs.",
  },
]

const sizeTable = [
  { e: "🧳", size: "30 sq ft", named: "1 RK", like: "A small bathroom", typical: "Studio or single room" },
  { e: "🛋️", size: "60–90 sq ft", named: "1 BHK", like: "A large walk-in wardrobe", typical: "One-bedroom apartment" },
  { e: "🏠", size: "120–150 sq ft", named: "2 BHK", like: "A single-car garage", typical: "Two-bedroom apartment" },
  { e: "🏡", size: "240–270 sq ft", named: "3 BHK", like: "A double garage", typical: "Three-bedroom apartment or small villa" },
  { e: "🏢", size: "270+ sq ft", named: "Custom", like: "A warehouse bay", typical: "Larger villa, office, retail stock" },
]

const estimateSteps = [
  {
    n: 1,
    e: "📦",
    h: "Count boxes, not rooms",
    p: "Walk each room and count how many medium boxes the loose contents would fill. Kitchens are always more than people expect — a normal Dubai kitchen is 8 to 12 boxes on its own. A wardrobe is 4 to 6. Books are heavy and small; use small boxes.",
  },
  {
    n: 2,
    e: "🛏️",
    h: "List the big items separately",
    p: "Sofas by seat count, beds by size, wardrobes by door count, appliances individually. Note anything that won't dismantle.",
  },
  {
    n: 3,
    e: "📐",
    h: "Apply the rough conversion",
    p: "Ten medium boxes stacked take about 6 sq ft of floor. A three-seat sofa is about 12 sq ft. A double bed frame flat-packed with mattress upright is about 8. A large wardrobe is 10 to 15. A fridge-freezer is 6.",
  },
  {
    n: 4,
    e: "➕",
    h: "Add 15%, not 50%",
    p: "You need aisle and stacking tolerance, not a spare room. If your total lands between two sizes, tell us both numbers and we'll rack it and bill on what it actually occupies.",
  },
]

const throwsOff = [
  {
    Icon: Armchair,
    h: "Awkward-shaped items",
    p: "A piano, a treadmill, a corner sofa that won't separate, a marble table top, a full-height mirrored wardrobe. Each of these eats floor space well beyond its volume because nothing stacks on top of it.",
  },
  {
    Icon: PackageOpen,
    h: "Unpacked goods",
    p: "The biggest single variable. Loose contents can need 40% more space than the same contents boxed. This is why paying for packing frequently lowers the total bill instead of raising it.",
  },
  {
    Icon: Frame,
    h: "Fragile items that can't be stacked",
    p: "Glass table tops, framed art, mirrors, TVs. They get crated and stood, not layered.",
  },
  {
    Icon: Boxes,
    h: "The “while we're at it” pile",
    p: "Nearly every household adds 10 to 20% on the day — the balcony stuff, the maid's room, the boxes in the wardrobe that nobody counted. Assume it.",
  },
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Storage unit sizes in Dubai",
    itemListElement: sizeTable.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${t.size} (${t.named})`,
      description: `${t.like}. Typically suits: ${t.typical}.`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.slice(0, 5).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function UnitSizesPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} />
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "Unit Sizes" },
        ]}
      />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's photo right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${z.tightHead}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Unit sizes</span>
              <h1>
                Storage Unit Sizes — <br className={s.mBreakDesk} />
                <em>How Much Space You Actually Need</em>
              </h1>
              <p>
                Most people booking storage in Dubai for the first time guess high. It makes sense:
                you&rsquo;re standing in a flat that feels full.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get your size confirmed →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971 50 577 3388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1774 / 887" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/unit-sizes-photo.webp"
                alt="SafeStorage Dubai storage bays labelled 30, 60–90, 120–150 and 240–270 sq ft"
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

        {/* the page's own opening, links kept word for word */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <p className={p.panelText}>
            Packed properly, it usually does. A complete one-bedroom apartment — sofa, dining set, bed,
            wardrobe, fridge, washing machine, thirty boxes — fits into 60 to 90 square feet of racked
            storage. That&rsquo;s a large walk-in wardrobe.
          </p>
          <p className={p.panelText}>
            This guide is part of our{" "}
            <Link href="/self-storage-dubai" className={sk.inlineLink}>
              self storage in Dubai
            </Link>{" "}
            resources. If you already know your size and want to book,{" "}
            <Link href="/self-storage-dubai/local-self-storage" className={sk.inlineLink}>
              local storage with door-to-door collection
            </Link>{" "}
            is the page you want. Sizes run from 30 sq ft upwards, and{" "}
            <strong>you pay only for the space your items use</strong>.
          </p>
        </section>

        {/* the five sizes, as cards */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Sizes</span>
              <h2 className={p.longH2}>
                The five standard <em>storage sizes in Dubai.</em>
              </h2>
            </div>
            <p>
              UAE storage is sold in square feet of floor space at standard warehouse height. Sizes here
              are matched to Dubai apartment types, because that&rsquo;s how people actually think about it.
            </p>
          </div>
          <HomeReveal className={`${z.sizeGrid} ${z.moves}`}>
            {sizeTable.map((t, i) => (
              <div className={z.sizeCard} style={idx(i)} key={t.size}>
                <span className={z.sizeEmoji} aria-hidden="true">
                  {t.e}
                </span>
                <h3>{t.size}</h3>
                <span className={z.sizeNamed}>{t.named}</span>
                <div className={z.sizeFacts}>
                  <div>
                    <b>Roughly like</b>
                    {t.like}
                  </div>
                  <div>
                    <b>Typical home</b>
                    {t.typical}
                  </div>
                </div>
              </div>
            ))}
          </HomeReveal>
          <div className={s.movingTip}>
            <p>
              Contents assume goods are packed, dismantled where possible, and stacked — not dumped loose.
              A full breakdown of what fits each size is on the{" "}
              <Link href="/self-storage-dubai/storage-units" className={sk.inlineLink}>
                storage units page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* the four-step method */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Work it out yourself</span>
              <h2 className={p.longH2}>
                How to estimate your own size <em>without a survey.</em>
              </h2>
            </div>
            <p>Four steps. Takes about ten minutes and gets you within roughly 15% most of the time.</p>
          </div>
          <HomeReveal className={`${z.steps} ${z.moves}`}>
            {estimateSteps.map((step, i) => (
              <div className={z.step} style={idx(i)} key={step.n}>
                <span className={z.stepNum} aria-hidden="true">
                  {step.n}
                </span>
                <span className={z.stepEmoji} aria-hidden="true">
                  {step.e}
                </span>
                <h3>{step.h}</h3>
                <p>{step.p}</p>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* what throws the estimate off */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Be honest with yourself</span>
              <h2>
                What throws <em>the estimate off.</em>
              </h2>
              <p>Being straight about this saves an awkward conversation on pickup day.</p>
            </div>
            <FeatScroller>
              {throwsOff.map((t) => (
                <article className={s.feat} key={t.h}>
                  <div className={s.featIcon}>
                    <t.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{t.h}</h3>
                  <p>{t.p}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        <section className={`${s.section} ${s.wrap}`}>
          <p className={p.panelText}>
            And the honest downside: if you underbook badly, the crew can&rsquo;t magic space out of a full
            truck on the day. We&rsquo;d rather do a two-minute video walkthrough beforehand than turn up
            with the wrong vehicle. It costs nothing and it&rsquo;s the difference between a three-hour job
            and a rescheduled one.
          </p>
          <p className={p.panelText}>
            Loose goods needing 40% more space is also why packing usually lowers the bill — the{" "}
            <Link href="/self-storage-dubai/prices" className={sk.inlineLink}>
              pricing page
            </Link>{" "}
            explains that maths.
          </p>
        </section>

        {/* size vs duration */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>How long you&rsquo;ll store</span>
              <h2 className={p.longH2}>
                Choosing a size for <em>how long you&rsquo;ll store.</em>
              </h2>
            </div>
          </div>
          <p className={p.panelText}>
            Space and duration interact. A three-week booking between leases can be packed tight and dense
            because nobody needs to reach anything — see{" "}
            <Link href="/self-storage-dubai/short-term" className={sk.inlineLink}>
              short term storage
            </Link>
            . A booking running two years is better racked with access lanes so single items can be pulled
            without unstacking, which uses slightly more space and is worth it.
          </p>
          <p className={p.panelText}>
            If you want a fixed area rather than a service-based booking, that is priced by the square foot
            from 30 sq ft up, and the number you land on here is the number you&rsquo;d be renting.
          </p>
        </section>

        {/* five questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2 className={p.longH2}>
                Common <em>questions.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqData} />
        </section>

        <CtaBand
          title="Get your size confirmed"
          blurb="Send a WhatsApp voice note with your rooms, or a two-minute video walkthrough. We'll give you a size and a price the same day."
          ctaLabel="Get a storage quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
