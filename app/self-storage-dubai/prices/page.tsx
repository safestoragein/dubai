import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  Ruler,
  CalendarDays,
  Building2,
  Package,
  MapPinned,
  Sofa,
  Truck,
  Lock,
  Thermometer,
  ClipboardList,
  Users,
  Banknote,
  CheckCircle2,
} from "lucide-react"

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

/**
 * Silo 1 · /self-storage-dubai/prices/ — owns `storage in dubai prices` (390/mo),
 * `cheap storage dubai` (390/mo, KD 46) and `storage cost per month`.
 *
 * THIS PAGE IS A MERGE, and the merge is the point. /pricing and
 * /cheap-storage-dubai both 301 here in the same commit. Seven of this site's
 * own URLs currently compete for `storage cost per month` — the worst
 * cannibalisation cluster on the domain — and serving both the "what does it
 * cost" and the "what's cheapest" intent on one page is what ends it.
 *
 * Redesigned in the homepage style (owner, 2026-10-23) with their own picture.
 * The words are the ones this page already published, said shorter; no figure
 * was added and none was taken away.
 *
 * ⚠ Two [VERIFY] markers in the source copy are handled, not ignored:
 *   - Volume discounts above 270 sq ft are NOT stated. Unconfirmed.
 *   - Long-term discount TIERS are NOT stated. The FAQ says duration affects the
 *     quote, which is true, without inventing numbers.
 * No SafeStorage rate or price figure is published on this page (owner
 * decision): it explains what affects the cost and sends people to a free quote.
 * That rule covers the banner too — the owner's picture carried a sample
 * monthly figure on its quote card, so the figure was painted out and the card
 * now reads "Free itemised quote".
 */

export const metadata: Metadata = {
  title: { absolute: "Storage Prices in Dubai | What Affects the Cost" },
  description:
    "What affects the cost of storage in Dubai: space used, duration, floor and lift access, packing, transport distance and extras. Get a free, itemised quote.",
  keywords:
    "storage in dubai prices, cheap storage dubai, storage cost per month, storage prices dubai, storage cost dubai, affordable storage dubai, low cost storage dubai, how much does storage cost in dubai",
  openGraph: {
    title: "Storage Prices in Dubai — What Affects the Cost",
    description:
      "What changes a storage quote in Dubai, and why the cheapest storage quote is often the most expensive outcome. Get a free, itemised quote.",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/prices",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/self-storage-dubai/prices" },
}

const faqData = [
  {
    q: "How much does storage cost per month in Dubai?",
    a: "It depends mainly on how much space your goods use and how long you store them, then on access, packing, transport distance and awkward items. You pay only for the space your items use, and collection, packing materials, transport and the digital inventory are in the quote.",
  },
  {
    q: "What is the cheapest storage in Dubai?",
    a: "The cheapest headline rates come from unserviced units in Al Quoz, Ras Al Khor and DIP where you supply your own transport and labour. Add two van hires and two half-days of manpower and those bookings usually cost more in total — and most are not climate-controlled.",
  },
  {
    q: "Is there a minimum storage period or deposit?",
    a: "Minimum booking is two weeks and there is no lock-in contract. Storage runs month to month after that.",
  },
  {
    q: "Am I billed on estimated space or actual space?",
    a: "Actual. Space is re-measured once your goods are racked, so if the load turns out smaller than the phone estimate, the monthly figure comes down.",
  },
  {
    q: "Does the quote include collection from my home?",
    a: "Inside Dubai, yes. Sharjah, Ajman and Abu Dhabi collections carry a transport charge that is quoted upfront before dispatch, never added afterwards.",
  },
]

/* how much space a home usually needs — sq ft, as the owner asks, and marked
   as an estimate because every load is re-measured once it is racked */
const spaceRows = [
  { Icon: Package, home: "Studio / 1 RK", space: "~30 sq ft" },
  { Icon: Building2, home: "1 bedroom", space: "60–90 sq ft" },
  { Icon: Sofa, home: "2 bedrooms", space: "120–150 sq ft" },
  { Icon: Users, home: "3 bedrooms", space: "240–270 sq ft" },
  { Icon: Truck, home: "Villa / commercial", space: "270+ sq ft" },
]

const quoteFactors = [
  { Icon: Ruler, h: "The space your goods use", p: "Billed on the floor space they occupy once racked, not a fixed unit size. The biggest single driver." },
  { Icon: CalendarDays, h: "How long you store", p: "Short bookings carry more setup cost per month than long ones." },
  { Icon: Building2, h: "Stairs and lifts", p: "Four flights in August is a different job to a booked service lift. The most common reason a quote moves." },
  { Icon: Package, h: "Who packs", p: "Packed well, a load is denser and takes less space — so paying for packing often lowers the monthly bill." },
  { Icon: MapPinned, h: "Distance and emirate", p: "Inside Dubai, collection is in the quote. Sharjah, Ajman and Abu Dhabi carry a transport charge, quoted before we dispatch." },
  { Icon: Sofa, h: "Awkward items", p: "A piano, a treadmill, a marble top, a five-metre sofa. Extra crew, and floor space out of proportion to their volume." },
]

const cheapTraps = [
  { Icon: Truck, h: "The rate excludes transport", p: "A very low rate per sq ft usually means a shelf, not a service. Two pickups with two men often cost more than three months of the storage." },
  { Icon: Lock, h: "There is a minimum term", p: "A low monthly tied to a six-month lock-in is not cheap if your Ejari gap is nineteen days. We take bookings from two weeks, no lock-in." },
  { Icon: Ruler, h: "The space is measured generously", p: "If nobody re-measures after racking, you pay for the estimate rather than the reality." },
  { Icon: Thermometer, h: "No climate management", p: "The expensive one, and invisible until you unpack: a non-climate shed through July lifts veneer, cracks leather and blooms mould." },
  { Icon: ClipboardList, h: "No itemised inventory", p: "With labelled boxes only, retrieving one item means opening a lot of them. Barcoded inventory is what keeps storage useful." },
  { Icon: Users, h: "Undeclared handling", p: "Subcontracted labour hired for the day is cheaper for the operator — and is how a wardrobe door arrives with a corner missing." },
]

const compareQuestions = [
  "Does this include collection and delivery, or is transport extra?",
  "Is there a minimum term or a lock-in?",
  "Is the storage area climate-controlled, or just the office?",
  "Will I get an itemised inventory with photographs?",
  "Is the final bill based on estimated space or space actually used?",
]

const savings = [
  { Icon: Package, h: "Pack it yourself, properly", p: "Uniform boxes stack; bin bags do not. Dense packing can cut the space you need by 20–30%." },
  { Icon: Banknote, h: "Sell before you store", p: "If replacing an item costs less than two years of the space it occupies, sell it." },
  { Icon: Sofa, h: "Dismantle beds and tables", p: "A flat-packed bed frame takes a fraction of the space of an assembled one." },
  { Icon: CalendarDays, h: "Be honest about the timeline", p: "Long bookings price better than a rolling series of short ones." },
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    // Service, not Product: a Product without offers/price is an invalid rich
    // result, and no price is published on this page.
    "@type": "Service",
    "@id": "https://safestorage.ae/self-storage-dubai/prices#service",
    name: "Storage in Dubai — What Affects the Cost",
    image: "https://safestorage.ae/images/storage-facility-background.png",
    description:
      "Door-to-door storage in Dubai, priced on the space your goods use, with collection, packing materials, transport and a photographed digital inventory included in a free, itemised quote.",
    provider: { "@type": "Organization", name: "SafeStorage" },
    url: "https://safestorage.ae/self-storage-dubai/prices",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

export default function StoragePricesPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "Prices" },
        ]}
      />
      <SchemaScript schema={pageSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.split2Tight}`}>
              <span className={s.heroTag}>Storage prices Dubai</span>
              <h1>
                Storage prices in Dubai — <br className={s.mBreakDesk} />
                <em>what changes a quote</em>
              </h1>
              <p>
                Storage here is priced on the space your goods use and how long you store them. You pay
                only for the space your items use — no hidden fees.
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
            <div className={p.split2Photo} style={{ aspectRatio: "1733 / 907" } as CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/prices-hero.webp"
                alt="A customer getting a free SafeStorage quote at home in Dubai, with boxes packed and ready"
                loading="eager"
                decoding="async"
              />
              {/* top LEFT here: the picture's own quote card lives in the top right */}
              <div className={s.heroRating} style={{ right: "auto", left: 18 }}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* space: the biggest factor */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8, paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Space used</span>
              <h2 className={p.longH2}>
                How much space <em>a home usually needs.</em>
              </h2>
            </div>
            <p>Every load is re-measured once it is racked, so you pay for what it really takes.</p>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`}>
            {spaceRows.map((r, i) => (
              <div className={s.miniCard} key={r.home} style={{ ["--i"]: i } as CSSProperties}>
                <span className={s.miniIcon}>
                  <r.Icon strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <b>{r.home}</b>
                  <small>{r.space} (Estimated)</small>
                </span>
              </div>
            ))}
          </HomeReveal>
          <div className={s.movingTip}>
            <p>
              Space is only part of it: a fourth-floor walk-up in Deira and a Marina tower with a booked
              lift are not the same job. The{" "}
              <Link href="/self-storage-dubai/unit-sizes">storage size guide</Link> helps you sanity-check
              the square footage before you call.
            </p>
          </div>
        </section>

        {/* the six things that change a quote */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>What moves the number</span>
              <h2 className={p.longH2}>
                Six things that change <em>a storage quote.</em>
              </h2>
            </div>
            <p>Any company that gives a firm price without asking about these is guessing.</p>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`}>
            {quoteFactors.map((f, i) => (
              <div className={s.miniCard} key={f.h} style={{ ["--i"]: i } as CSSProperties}>
                <span className={s.miniIcon}>
                  <f.Icon strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <b>{f.h}</b>
                  <small>{f.p}</small>
                </span>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* why cheap is often expensive */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>The cheap quote</span>
              {/* the phone rule for this band is nowrap, so the break is explicit */}
              <h2>
                Why the cheapest quote <br className={s.mBreak} />
                <em>often costs the most.</em>
              </h2>
            </div>
            <FeatScroller>
              {cheapTraps.map((t) => (
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

        {/* how to compare, and how to pay less */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Compare properly</span>
              <h2 className={p.longH2}>
                Ask every company <em>these five questions.</em>
              </h2>
            </div>
            <p>Including us. The answers separate operators faster than any price list.</p>
          </div>
          <div className={s.miniFacts} style={{ marginTop: 10, borderTop: "none", paddingTop: 0 }}>
            {compareQuestions.map((q) => (
              <span key={q}>
                <CheckCircle2 aria-hidden="true" /> {q}
              </span>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Pay less</span>
              <h2 className={p.longH2}>
                Ways to genuinely <em>reduce the bill.</em>
              </h2>
            </div>
            <p>Real ones, not padding.</p>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`}>
            {savings.map((v, i) => (
              <div className={s.miniCard} key={v.h} style={{ ["--i"]: i } as CSSProperties}>
                <span className={s.miniIcon}>
                  <v.Icon strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <b>{v.h}</b>
                  <small>{v.p}</small>
                </span>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* five questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0, paddingBottom: 28 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={p.longH2}>
                Common <em>questions.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqData} />
        </section>

        <CtaBand
          title="Get a free, itemised quote"
          blurb="Tell us your rooms and your dates. You will get the storage and the transport as separate lines, before anything is booked."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        {/* where to go next */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 20, paddingBottom: 28 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Explore</span>
              <h2 className={p.longH2}>
                More on <em>storage in Dubai.</em>
              </h2>
            </div>
          </div>
          <div className={`${s.miniGrid} ${s.miniTight}`}>
            {[
              { href: "/self-storage-dubai", b: "Self storage in Dubai", t: "The service a quote covers, end to end." },
              { href: "/self-storage-dubai/local-self-storage", b: "Local self storage", t: "How the door-to-door model works." },
              { href: "/self-storage-dubai/unit-sizes", b: "Storage size guide", t: "Sanity-check the square footage first." },
              { href: "/self-storage-dubai/short-term", b: "Short-term storage", t: "Two weeks and up, no lock-in." },
              { href: "/guides/how-much-does-storage-cost-in-dubai", b: "What storage costs", t: "The guide version, with the market context." },
            ].map((l) => (
              <Link className={`${s.miniCard} ${s.miniLink}`} href={l.href} key={l.href}>
                <span>
                  <b>{l.b}</b>
                  <small>{l.t}</small>
                </span>
                <span className={s.miniArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
