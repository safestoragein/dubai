import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  CalendarRange, Repeat, Hammer, Plane, Home, Zap, Sun, Route, Ruler, Box, Sofa, Building2,
  ClipboardList, MapPin, CalendarClock, Luggage,
} from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import FaqAccordion from "@/components/landing/faq-accordion"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import h from "./hero.module.css"
import Reveal from "./Reveal"

/**
 * Silo 1 · /self-storage-dubai/short-term/ — owns `short term storage dubai`
 * (1,900/mo), the highest-volume keyword in the silo.
 *
 * MOVE from /short-term-storage-dubai, which 301s here in the same commit.
 *
 * Intent is urgent-transactional: the searcher almost always has a date problem
 * — a lease ending, a handover slipping, a flight booked. Minimum term,
 * collection speed and lock-in are the three things that convert here, so they
 * are all above the fold. General storage marketing does not work on this query.
 *
 * ⚠ The source copy carried a [VERIFY] on part-month and two-week billing
 * policy. This page states the minimum booking and monthly billing, which are
 * confirmed, and does NOT claim pro-rating. Add that only once confirmed.
 *
 * 2026-09-19 redesign (owner's request): the live copy is kept word for word,
 * only laid out in the landing design system — two-column hero with the
 * owner's photo, cards and animations instead of plain paragraphs and a table.
 */

export const metadata: Metadata = {
  title: { absolute: "Short Term Storage Dubai | 2 Weeks to 3 Months" },
  description:
    "Short term storage in Dubai for the gap between Ejari leases. Two weeks to three months, no lock-in, pay only for the space you use. Same-day pickup.",
  keywords:
    "short term storage dubai, short term storage, temporary storage dubai, monthly storage dubai, storage for 1 month dubai, storage between leases dubai, 2 week storage dubai, interim storage dubai",
  openGraph: {
    title: "Short Term Storage in Dubai — From Two Weeks, No Lock-In",
    description:
      "Storage for the gap between leases. Two weeks to three months, no lock-in, same-day collection across most of Dubai.",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/short-term",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/self-storage-dubai/short-term" },
}

const faqData = [
  {
    question: "What's the minimum term for short term storage in Dubai?",
    answer:
      "Two weeks. There's no lock-in and no six-month minimum, which is the point — most bookings exist because an Ejari ended before the next lease started, and that gap is usually 17 to 30 days.",
  },
  {
    question: "Can you collect my things the same day?",
    answer:
      "Across most of Dubai, yes, for a 2BHK or smaller if you call before midday. Villa loads above three bedrooms need one to two days. In late June and August, book about a week ahead — those are the busiest weeks of the Dubai moving year.",
  },
  {
    question: "How much does one month of storage cost in Dubai?",
    answer:
      "It depends on the space your goods use: a one-bedroom flat needs 60–90 sq ft, a studio around 30 sq ft, and you pay only for the space your items use. Collection, packing materials, transport and return delivery are included in a free, itemised quote.",
  },
  {
    question: "Can I extend a short term booking?",
    answer:
      "Yes, month by month with no penalty. Past three months the booking usually shifts onto long-term pricing, which works out better per month than repeatedly extending a short one.",
  },
  {
    question: "Can I get something out mid-booking?",
    answer:
      "Yes, with one to two working days' notice. Tell the crew at pickup which cartons you might want early and they'll be stored where they're reachable — short bookings are packed densely, so unplanned retrievals are slower.",
  },
  {
    question: "Do you deliver to the new address when the lease starts?",
    answer:
      "Yes. Return delivery to any address in Dubai is part of the quote. Give us the new address and a date and we'll schedule it; deliveries into towers usually need the building's move-in slot booked in advance.",
  },
  {
    question: "What if my new place is delayed again?",
    answer:
      "You keep the storage running month to month and tell us the new date when you have it. There's no re-booking fee and nothing to renegotiate. Delayed handovers are one of the main reasons this service exists.",
  },
  {
    question: "Is short term storage climate controlled?",
    answer:
      "Yes, the same facilities as long-term bookings. Three weeks in an unmanaged shed during a Dubai August is long enough to lift veneer and bloom mould in upholstery, so this isn't something to skip on a short booking.",
  },
]
const faqs = faqData.map((f) => ({ q: f.question, a: f.answer }))

// `anim` = how the icon acts out the card (see hero.module.css)
const bookingShapes = [
  { Icon: CalendarRange, len: "2–3 weeks", reason: "Ejari gap", pack: "Dense, sealed, nothing needs reaching", anim: "flip" },
  { Icon: Repeat, len: "1 month", reason: "Lease overlap or short trip", pack: "Dense, with day-one boxes accessible", anim: "loop" },
  { Icon: Hammer, len: "6–10 weeks", reason: "Renovation", pack: "Grouped by room for a clean move-back", anim: "tap" },
  { Icon: Plane, len: "2–3 months", reason: "Summer away, job probation", pack: "Standard racked, seasonal items at the front", anim: "fly" },
  { Icon: Home, len: "3 months+", reason: "Rolls into long-term pricing", pack: "Racked with access lanes", anim: "grow" },
] as const

const bookingNeeds = [
// colour emoji per item (owner's choice)
  { e: "🏠", h: "Rough size", p: "Number of bedrooms is enough for a first quote." },
  { e: "🏢", h: "Pickup address and floor", p: "Plus whether there's a service lift, because that changes the crew." },
  { e: "📅", h: "Collection date and target return date", p: "Even approximate." },
  { e: "📦", h: "Whether you're packing or we are", p: "It changes both the crew size and the space you'll need." },
]

// Sizes from the live copy, marked (Estimated) per the site rules.
const sizes = [
  { Icon: Box, space: "30 sq ft", home: "Studio", anim: "squeeze" },
  { Icon: Sofa, space: "60–90 sq ft", home: "1BHK", anim: "bounce" },
  { Icon: Home, space: "120–150 sq ft", home: "2BHK", anim: "hop" },
  { Icon: Building2, space: "240–270 sq ft", home: "3BHK", anim: "grow" },
] as const

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://safestorage.ae/self-storage-dubai/short-term#service",
    serviceType: "Short term storage",
    name: "Short Term Storage in Dubai",
    description:
      "Short term storage in Dubai from two weeks with no lock-in. Door-to-door collection, packing, itemised inventory and return delivery to the new address, billed on the space used.",
    areaServed: { "@type": "City", name: "Dubai" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.slice(0, 5).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
]

/** Stagger index for an animated card. */
const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function ShortTermStoragePage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} />
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "Short Term Storage" },
        ]}
      />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* HERO — copy left, owner's photo right (never behind the letters) */}
        <section className={`${s.hero} ${s.wrap} ${h.split2}`}>
          <div className={h.split2Inner}>
            <div className={`${s.heroContent} ${h.split2Copy}`}>
              <span className={s.heroTag}>Short term storage</span>
              <h1>
                Short Term Storage in Dubai — <br className={s.mBreakDesk} />
                <em>From Two Weeks, No Lock-In</em>
              </h1>
              <p>
                Almost every short term storage enquiry we get in Dubai starts the same way: a date that doesn&rsquo;t
                line up with another date.
              </p>
              <div className={s.heroCta}>
                <a className={`${s.btn} ${s.btnAccent}`} href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  WhatsApp — send your dates →
                </a>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971 50 577 3388
                </a>
              </div>
            </div>
            <div className={h.split2Photo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/short-term-hero-v2.webp"
                alt="SafeStorage team packing a flat between leases in Dubai"
                width={1133}
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

        {/* THE DATE GAP — rest of the live hero copy */}
        <section className={`${s.section} ${s.wrap}`} id="dates" style={{ paddingTop: 20 }}>
          <Reveal>
            <div className={s.duo}>
              <div className={`${s.panel} ${s.panelHover} ${h.plan}`} style={idx(0)}>
                <div className={`${s.panelIcon} ${h.planIcon} ${h.flip}`} aria-hidden="true">
                  <CalendarClock size={20} color="var(--accent)" />
                </div>
                <p className={h.panelText}>
                  Your Ejari ends on the 3rd. The new place is ready on the 20th. That&rsquo;s seventeen days of owning a
                  flat&rsquo;s worth of furniture and having nowhere to put it. Hotels don&rsquo;t take sofas.
                </p>
              </div>
              <div className={`${s.panel} ${s.panelHover} ${s.panelAccent} ${h.plan}`} style={idx(1)}>
                <div className={`${s.panelIcon} ${h.planIcon} ${h.drive}`} aria-hidden="true" style={{ background: "#fff" }}>
                  <ClipboardList size={20} color="var(--accent)" />
                </div>
                <p className={h.panelText}>
                  We take bookings from <b>two weeks</b>, with no lock-in and no six-month minimum. Our team collects from
                  your building, packs, itemises everything, stores it, and brings it to the new address when you&rsquo;re
                  ready. You pay only for <b>the space your items use</b>, as part of the wider{" "}
                  <Link href="/self-storage-dubai">self storage in Dubai</Link> service.
                </p>
              </div>
            </div>
            <div className={s.movingTip}>
              <Zap aria-hidden="true" />
              <p>
                Across most of Dubai we can collect the same day if you call before midday. If your dates are already
                tight, that matters more than anything else on this page.
              </p>
            </div>
          </Reveal>
        </section>

        {/* WHAT A SHORT BOOKING LOOKS LIKE */}
        <section className={`${s.section} ${s.wrap}`} id="bookings" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Booking length</span>
              <h2>
                What a short booking <em>actually looks like</em>
              </h2>
            </div>
          </div>
          <Reveal>
            <div className={s.miniGrid}>
              {bookingShapes.map(({ Icon, len, reason, pack, anim }, i) => (
                <div className={`${s.miniCard} ${h.plan} ${h.lift}`} style={idx(i)} key={len}>
                  <span className={`${s.miniIcon} ${h.planIcon} ${h[anim]}`} aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <b>
                      <span style={{ color: "var(--accent)" }}>{len}</span> · {reason}
                    </b>
                    <small>{pack}</small>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className={s.movingTip}>
            <Box aria-hidden="true" />
            <p>
              Short bookings get packed differently. If nothing needs to come out for three weeks, we can stack tighter
              and you pay for less space. Tell us the return date and we&rsquo;ll use it.
            </p>
          </div>
        </section>

        {/* HOW FAST WE CAN COLLECT — dark band */}
        <section className={s.wrap} id="speed">
          <div className={`${s.darkBand} ${s.whyBand}`}>
            <div className={`${s.howHead} ${s.bandHead}`}>
              <div>
                <span className={s.howEyebrow}>Collection speed</span>
                <h2>
                  How fast we can <br className={s.mBreak} />
                  <em>actually collect</em>
                </h2>
              </div>
            </div>
            <Reveal>
              <div className={s.trio}>
                <div className={`${s.feat} ${h.plan}`} style={idx(0)}>
                  <div className={s.featIcon} aria-hidden="true">
                    <Zap size={18} strokeWidth={2} />
                  </div>
                  <p>
                    Call before noon with a 2BHK or smaller and you&rsquo;ll normally get a truck the same day. Next-day
                    is close to certain. Anything larger than a three-bedroom villa wants a day or two of lead time so we
                    can put the right crew and the right vehicle on it.
                  </p>
                </div>
                <div className={`${s.feat} ${h.plan}`} style={idx(1)}>
                  <div className={s.featIcon} aria-hidden="true">
                    <Sun size={18} strokeWidth={2} />
                  </div>
                  <p>
                    The exceptions are worth naming. Late June and most of August are the peak of the Dubai moving
                    season — school year ending, expat exits, lease cycles all landing at once. In those weeks, same-day
                    is not guaranteed and we&rsquo;ll tell you so on the call rather than at 9am on moving day. If your
                    dates are fixed and they fall in that window, book a week ahead.
                  </p>
                </div>
                <div className={`${s.feat} ${h.plan}`} style={idx(2)}>
                  <div className={s.featIcon} aria-hidden="true">
                    <Route size={18} strokeWidth={2} />
                  </div>
                  <p>
                    Sharjah, Ajman and Abu Dhabi collections are usually next-day, with transport quoted before
                    dispatch.{" "}
                    <Link href="/locations" style={{ color: "var(--accent-tint)", fontWeight: 600 }}>
                      All areas we serve
                    </Link>{" "}
                    are listed by emirate.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHAT IT COSTS */}
        <section className={`${s.section} ${s.wrap}`} id="cost">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Cost</span>
              <h2>
                What it costs for <em>a short period</em>
              </h2>
            </div>
            <p>Billed monthly on the space your goods use, with a two-week minimum booking and no hidden fees.</p>
          </div>
          <div className={s.panel} style={{ marginBottom: 22 }}>
            <p className={h.panelText}>
              A one-bedroom flat at 75 sq ft for a three-week Ejari gap is a genuinely modest bill compared with the
              alternatives, and the quote includes collection, packing materials, loading, transport, storage and the
              return delivery. That last point matters: a cheap unit rate that excludes two van trips is not cheaper for
              a three-week booking, it&rsquo;s considerably more expensive. The{" "}
              <Link href="/self-storage-dubai/prices">storage price breakdown</Link> sets out the comparison properly.
            </p>
          </div>
          <h3 className={s.miniHead}>Sizes</h3>
          <Reveal>
            <div className={s.miniGrid}>
              {sizes.map(({ Icon, space, home, anim }, i) => (
                <div className={`${s.miniCard} ${h.plan} ${h.lift}`} style={idx(i)} key={home}>
                  <span className={`${s.miniIcon} ${h.planIcon} ${h[anim]}`} aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <b>
                      <span style={{ color: "var(--accent)" }}>{space}</span> · {home}
                    </b>
                    <small>(Estimated)</small>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <p className={h.lead} style={{ marginTop: 16 }}>
            Detail on the <Link href="/self-storage-dubai/unit-sizes">unit size guide</Link>.
          </p>
        </section>

        {/* THE HONEST LIMITATION */}
        <section className={`${s.section} ${s.wrap}`} id="limitation" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2>
                The honest limitation of <em>short-term storage</em>
              </h2>
            </div>
            <p>Short bookings are the ones where retrieval requests hurt most, and we&rsquo;d rather say it plainly.</p>
          </div>
          <Reveal>
            <div className={h.pair}>
              <div className={`${h.pairCard} ${h.pairCatch} ${h.plan}`} style={idx(0)}>
                <div className={h.pairTag}>
                  <span className={h.pairEmoji} style={idx(0)} aria-hidden="true">📦</span> The catch
                </div>
                <p className={h.panelText}>
                  If you store a 1BHK densely for three weeks and then decide on day four that you need the winter coats,
                  the blender and one specific box of paperwork, that&rsquo;s a retrieval — one to two working
                  days&rsquo; notice, and possibly a charge depending on what&rsquo;s involved. Dense packing is what
                  makes a short booking cheap. It&rsquo;s also what makes mid-booking access awkward.
                </p>
              </div>
              <div className={`${h.pairCard} ${h.pairFix} ${h.plan}`} style={idx(1)}>
                <div className={h.pairTag}>
                  <span className={h.pairEmoji} style={idx(1)} aria-hidden="true">💡</span> The fix
                </div>
                <p className={h.panelText}>
                  The fix is thirty seconds of thought at pickup. Tell the crew which cartons you might want, and they go
                  on the outside where we can reach them. Almost nobody does this and almost everybody wishes they had.
                </p>
              </div>
            </div>
          </Reveal>
          <div className={s.movingTip}>
            <Luggage aria-hidden="true" />
            <p>
              Also: don&rsquo;t store your passport, your Emirates ID, medication, laptop chargers or the documents you
              need for the new tenancy contract. Keep a single suitcase of live essentials with you. Every month somebody
              stores their car registration papers.
            </p>
          </div>
        </section>

        {/* WHAT WE NEED TO BOOK */}
        <section className={`${s.section} ${s.wrap}`} id="book" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Booking</span>
              <h2>
                What we need from you <em>to book</em>
              </h2>
            </div>
            <p>Four things, and a WhatsApp message covers all of them.</p>
          </div>
          <Reveal>
            <div className={s.miniGrid}>
              {bookingNeeds.map(({ e, h: title, p }, i) => (
                <div className={`${s.miniCard} ${h.plan} ${h.lift}`} style={idx(i)} key={title}>
                  <span className={`${s.miniIcon} ${h.planIcon}`} aria-hidden="true">
                    <span className={`${h.emoji} ${h.needEmoji}`}>{e}</span>
                  </span>
                  <div>
                    <b>
                      <span style={{ color: "var(--accent)" }}>{i + 1}.</span> {title}
                    </b>
                    <small>{p}</small>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className={s.movingTip}>
            <Ruler aria-hidden="true" />
            <p>
              Plan to be around for the first twenty minutes and the last ten. The start is where you point at what goes.
              The end is where you sign off the list. Everything between those two is ours to run. A studio takes two to
              three hours, a 1BHK three to five, a 3BHK villa most of a day.
            </p>
          </div>
          <p className={h.lead} style={{ marginTop: 16, display: "flex", gap: 8, alignItems: "center" }}>
            <MapPin size={16} color="var(--accent)" aria-hidden="true" />
            <span>
              If you want a specific facility close to your community,{" "}
              <Link href="/self-storage-dubai/local-self-storage">local self storage in Dubai</Link> covers coverage by
              area.
            </span>
          </p>
        </section>

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2>
                Common <em>questions</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Send us your dates"
          blurb="Two dates and a bedroom count. That’s enough for a price today."
          ctaLabel="Get a storage quote"
          whatsAppLabel="WhatsApp us"
          callLabel="+971 50 577 3388"
        />
      </div>
    </>
  )
}
