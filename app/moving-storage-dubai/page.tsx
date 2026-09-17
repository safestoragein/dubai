import type { Metadata } from "next"
import Link from "next/link"
import {
  Building2, Home, Briefcase, MapPinned, Package, Plane, ClipboardList, Boxes, Layers, Wrench, Route, CalendarClock,
  Warehouse, Video, FileText, Truck, Hammer, ListChecks, ShieldCheck, PhoneCall, CheckCircle2, AlertTriangle,
} from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust, SplitHero } from "@/components/landing/landing-top"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { LandingConnect } from "@/components/landing/landing-connect"
import { UspRail } from "@/components/landing/usp-rail"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import { MilestonesPlayer } from "@/components/landing/milestones-player"
import s from "@/components/landing/landing.module.css"

/**
 * SILO 5 HUB · /moving-storage-dubai — owns `moving and storage dubai`.
 * Rebuilt on the shared landing design. The wedge is unchanged: one provider
 * for both halves of the job, and honest about what drives the price.
 * The six planned Silo 5 children are still not built, so move types are
 * described without links to them (only live pages are linked).
 */

export const metadata: Metadata = {
  title: { absolute: "Moving and Storage Dubai | One Crew, One Job Number" },
  description:
    "Moving and storage in Dubai from one provider. Packing, moving and storage from AED 12/sq ft when your dates don't line up. Same-day quotes.",
  keywords:
    "moving and storage dubai, best movers dubai, movers and packers dubai, moving company dubai, movers dubai, moving and storage services uae, house shifting dubai",
  openGraph: {
    title: "Moving and Storage in Dubai — One Crew, One Job Number",
    description:
      "Pack, move and store with one provider and one barcoded inventory. Storage from AED 12 per sq ft per month when your dates don't line up.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/moving-storage-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/moving-storage-dubai" },
}

const faqData = [
  {
    question: "How much does moving and storage cost in Dubai?",
    answer:
      "Moving is quoted per job on volume, access, packing scope and dismantling, and storage runs from AED 12 per sq ft per month — around 60–90 sq ft for a one-bedroom, 240–270 for a three-bedroom villa. Get any quote in writing with crew size, truck count and packing scope stated, or the number will move on the day.",
  },
  {
    question: "Can you store my things between two lease dates?",
    answer:
      "Yes, and it's the most common job we do. The typical gap is one to four weeks between an Ejari ending and a new handover. Storage is month to month, so if the new place slips by ten days you extend by ten days rather than renegotiating anything.",
  },
  {
    question: "Do I need a permit to move out of my building?",
    answer:
      "In most Dubai towers, yes. Buildings in Dubai Marina, JLT, Business Bay and Downtown normally require a move permit and a booked service lift slot, typically 24–48 hours in advance, and many restrict moves to evenings or weekends. We arrange it with building management at both ends.",
  },
  {
    question: "How far in advance should I book a move in Dubai?",
    answer:
      "Two to three weeks for a normal move, and longer if your date falls at the end of a month, during the June-to-August exodus, or on a weekend — those are the tightest slots in the calendar. For a handover emergency we can often move within 48 hours in Dubai.",
  },
  {
    question: "Do you pack, or do I?",
    answer:
      "Either. Full pack, fragile-only, or self-pack with us supplying materials. Packing scope is the single biggest variable in a moving quote, so decide it before you compare prices between companies — otherwise you're comparing two different jobs.",
  },
  {
    question: "Will you dismantle wardrobes and take down curtains?",
    answer:
      "Yes, including wall units, bunk beds, TV brackets and curtain rails, and we reassemble at the other end. Split AC units need a technician rather than a moving crew, so tell us at survey stage if any are being taken with you.",
  },
]

const moveTypes = [
  { Icon: Building2, t: "Apartment moves", b: "Marina, JLT, Downtown, JVC — service lift and move permit sorted." },
  { Icon: Home, t: "Villa moves", b: "Multiple trucks, garden furniture, curtains and AC units." },
  { Icon: Briefcase, t: "Office moves", b: "Desks, IT and files, with permits at both buildings." },
  { Icon: MapPinned, t: "To another emirate", b: "Abu Dhabi, Sharjah, Ajman or Al Ain." },
  { Icon: Package, t: "Packing only", b: "You move, we wrap what matters." },
  { Icon: Plane, t: "Leaving the UAE", b: "Ship, fly, or store while you decide.", href: "/moving-storage-dubai/international-relocation" },
]

const savings = [
  { Icon: ListChecks, title: "One inventory, not two", body: "One barcoded list from your old home to your new one — nothing lost between two companies." },
  { Icon: Boxes, title: "No double handling", body: "Loaded once, stored, delivered once. Fewer chances for a scratch." },
  { Icon: CalendarClock, title: "Dates can move", body: "Handover slips? Extend storage by a week instead of re-booking a truck." },
  { Icon: PhoneCall, title: "One number to call", body: "No two companies blaming each other when something goes wrong." },
]

const priceDrivers = [
  { Icon: Boxes, t: "Volume", b: "Rooms and furniture count, not floor area." },
  { Icon: Layers, t: "Floors & lift access", b: "Service lift vs four flights of stairs." },
  { Icon: Package, t: "Packing scope", b: "Full, fragile-only or self-packed — the biggest variable." },
  { Icon: Wrench, t: "Dismantling", b: "Wardrobes, bunk beds, wall units, TV brackets." },
  { Icon: Route, t: "Distance", b: "Within Dubai, Sharjah, Ajman or Abu Dhabi." },
  { Icon: CalendarClock, t: "Timing", b: "Weekends and month-ends are the busiest slots." },
  { Icon: Warehouse, t: "Storage", b: "Whether anything needs storing, and for how long." },
]

const steps = [
  { Icon: Video, title: "Survey", body: "A video walkthrough or site visit to size the truck and crew — and spot the wall unit that won't come apart." },
  { Icon: FileText, title: "Written quote", body: "Crew size, vehicles, packing, dismantling, storage and date — on one page." },
  { Icon: Package, title: "Pack", body: "Cartons, wrap and wardrobe boxes, every box labelled by room, fragile items wrapped one by one." },
  { Icon: Truck, title: "Move or store", body: "To the new address, into storage with a photographed inventory, or split between the two." },
  { Icon: Hammer, title: "Reassemble", body: "What we dismantled, we rebuild — beds first, because the first night matters." },
]

const areas = [
  "Dubai Marina", "JBR", "Palm Jumeirah", "JLT", "Downtown", "Business Bay", "DIFC", "Jumeirah", "Umm Suqeim",
  "Al Barsha", "Barsha Heights", "JVC", "JVT", "Dubai Hills", "Arabian Ranches", "DAMAC Hills", "Town Square",
  "Motor City", "Sports City", "Al Furjan", "Discovery Gardens", "Mirdif", "Al Warqa", "Deira", "Bur Dubai",
  "Karama", "Al Qusais", "Silicon Oasis", "International City", "DIP", "Dubai South", "Sharjah", "Ajman", "Abu Dhabi",
]

const explore = [
  { Icon: Warehouse, t: "Self storage Dubai", b: "Space, access and security.", href: "/self-storage-dubai" },
  { Icon: Home, t: "Personal storage", b: "Household and long-stay storage.", href: "/personal-storage-dubai" },
  { Icon: Briefcase, t: "Business storage", b: "Stock, equipment and records.", href: "/business-storage-dubai" },
  { Icon: CalendarClock, t: "Short-term storage", b: "For a gap you already know about.", href: "/self-storage-dubai/short-term" },
  { Icon: Layers, t: "Space size guide", b: "Sq ft by home size.", href: "/self-storage-dubai/unit-sizes" },
  { Icon: ClipboardList, t: "Storage prices", b: "What storage really costs per month.", href: "/self-storage-dubai/prices" },
  { Icon: Plane, t: "International relocation", b: "Leaving Dubai: options and timelines.", href: "/moving-storage-dubai/international-relocation" },
  { Icon: MapPinned, t: "Moving to Dubai guide", b: "Visa, housing and shipping in order.", href: "/guides/moving-to-dubai" },
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://safestorage.ae/moving-storage-dubai#service",
    serviceType: "Moving and storage",
    name: "Moving and Storage in Dubai",
    description:
      "Packing, moving and storage in Dubai from one provider, on one barcoded inventory and one job number. Storage from AED 12 per sq ft per month with no lock-in.",
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Abu Dhabi" },
    ],
    provider: {
      "@type": "Organization",
      name: "SafeStorage",
      telephone: "+971505773388",
      email: "support@safestorage.ae",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
]

export default function MovingStorageDubaiPage() {
  const faqs = faqData.map((f) => ({ q: f.question, a: f.answer }))
  return (
    <>
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "Moving and Storage Dubai" }]} />
      <SchemaScript schema={pageSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        <SplitHero
          eyebrow="Moving & storage Dubai"
          title="Moving and Storage in Dubai –"
          titleAccent="One Crew, One Job Number"
          blurb="We pack, move and store — from AED 12 per sq ft per month when your dates don't line up. No lock-in."
          image="/landing/svc-relocation.jpg"
          imagePosition="center 50%"
          ctaLabel="Get a Moving Quote"
        />

        <LandingTrust />

        {/* MOVE TYPES */}
        <section className={`${s.section} ${s.wrap}`} id="move-types">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Your move</span>
              <h2>
                The kind of move <em>you&apos;re making.</em>
              </h2>
            </div>
            <p>
              Arriving rather than leaving? Start with our{" "}
              <Link href="/guides/moving-to-dubai" style={{ color: "var(--accent)", fontWeight: 600 }}>
                moving to Dubai guide →
              </Link>
            </p>
          </div>
          <div className={s.miniGrid}>
            {moveTypes.map(({ Icon, t: title, b, href }) => {
              const inner = (
                <>
                  <span className={s.miniIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <b>{title}</b>
                    <small>{b}</small>
                  </div>
                </>
              )
              return href ? (
                <Link className={`${s.miniCard} ${s.miniLink}`} href={href} key={title}>
                  {inner}
                  <span className={s.miniArrow} aria-hidden="true">→</span>
                </Link>
              ) : (
                <div className={s.miniCard} key={title}>
                  {inner}
                </div>
              )
            })}
          </div>
        </section>

        {/* WHY ONE PROVIDER */}
        <section className={s.wrap} id="why">
          <div className={`${s.darkBand} ${s.whyBand}`}>
            <div className={`${s.howHead} ${s.bandHead}`}>
              <div>
                <span className={s.howEyebrow}>Why one provider</span>
                <h2>
                  What moving + storage <br className={s.mBreak} />
                  <em>together saves you.</em>
                </h2>
              </div>
            </div>
            <FeatScroller>
              {savings.map(({ Icon, title, body }) => (
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

        {/* HOW MOVES RUN */}
        <section className={`${s.section} ${s.wrap}`} id="process">
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>How it works</span>
                <h2>
                  How our <em>moves run.</em>
                </h2>
                <p className={s.splitBlurb} style={{ marginBottom: 0 }}>
                  Five steps from first call to the last shelf back on the wall.
                </p>
              </div>
            }
          >
            {steps.map(({ Icon, title, body }, i) => (
              <article className={s.usp} key={title}>
                <span className={s.uspNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={s.uspIcon} aria-hidden="true">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </UspRail>
          <p className={s.scrollHint}>Swipe for more →</p>
        </section>

        {/* WHEN DATES DON'T LINE UP */}
        <section className={`${s.section} ${s.wrap}`} id="dates" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Between two leases</span>
              <h2>
                When your dates <em>don&apos;t line up.</em>
              </h2>
            </div>
            <p>
              Ejari ends on the 8th, the new place is ready on the 25th. Storage is billed monthly, so if the
              handover slips you simply extend.
            </p>
          </div>
          <MilestonesPlayer>
          <ol className={s.milestones}>
            {[
              { Icon: Package, day: "7th", t: "We pack & clear", b: "The old home, on one barcoded inventory." },
              { Icon: Warehouse, day: "8th–24th", t: "Safely stored", b: "Live out of a suitcase, not around 30 boxes." },
              { Icon: Truck, day: "25th", t: "Delivered", b: "Into the new home, on the day it's ready." },
              { Icon: Hammer, day: "25th", t: "Rebuilt", b: "Furniture reassembled, beds first." },
            ].map(({ Icon, day, t: title, b }, i) => (
              <li className={s.milestone} key={title} style={{ ["--i" as string]: i }}>
                <span className={s.milestoneDot} aria-hidden="true">
                  <Icon />
                </span>
                <span className={s.milestoneYear}>{day}</span>
                <b>{title}</b>
                <small>{b}</small>
              </li>
            ))}
          </ol>
          </MilestonesPlayer>
          <div className={s.miniFacts}>
            <span><CheckCircle2 aria-hidden="true" /> Partial store while you sell surplus furniture</span>
            <span><CheckCircle2 aria-hidden="true" /> Open-ended hold before shipping abroad</span>
            <span>
              <CheckCircle2 aria-hidden="true" /> Storage only?{" "}
              <Link href="/self-storage-dubai/short-term" style={{ color: "var(--accent)" }}>Short-term storage →</Link>
            </span>
          </div>
        </section>

        {/* PRICE DRIVERS */}
        <section className={`${s.section} ${s.wrap}`} id="pricing" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Pricing</span>
              <h2>
                What a Dubai move costs — <em>and what changes it.</em>
              </h2>
            </div>
            <p>
              Storage from AED 12 per sq ft per month: about 30 sq ft for a studio, 60–90 for a 1-bed, 120–150 for a
              2-bed and 240–270 for a 3-bed villa (estimated).
            </p>
          </div>
          <div className={s.miniGrid}>
            {priceDrivers.map(({ Icon, t: title, b }) => (
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
          <div className={s.movingTip}>
            <AlertTriangle aria-hidden="true" />
            <p>
              <b>Two tips with any mover:</b> get the quote in writing with crew size, truck count and packing scope —
              &ldquo;AED X for a 2BHK&rdquo; is not a quote. And be wary of a price far below everyone else&apos;s; that gap
              usually comes back on the day.
            </p>
          </div>
        </section>

        {/* COVERAGE */}
        <section className={`${s.section} ${s.wrap}`} id="areas" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Coverage</span>
              <h2>
                Where <em>we move.</em>
              </h2>
            </div>
            <p>
              Across Dubai, plus Sharjah, Ajman and Abu Dhabi with transport quoted upfront. See every area in our{" "}
              <Link href="/locations" style={{ color: "var(--accent)", fontWeight: 600 }}>locations directory →</Link>
            </p>
          </div>
          <div className={s.areaMarquees}>
            {[areas.slice(0, 17), areas.slice(17)].map((row, r) => (
              <div className={s.marquee} key={r}>
                <div className={`${s.marqueeTrack} ${r === 1 ? s.marqueeReverse : ""}`}>
                  {[0, 1].map((copy) => (
                    <ul className={`${s.marqueeGroup} ${s.chipGroup}`} aria-hidden={copy === 1 || undefined} key={copy}>
                      {row.map((a) => (
                        <li key={a}>
                          <span className={s.chip}>{a}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={s.movingTip} style={{ marginTop: 22 }}>
            <ShieldCheck aria-hidden="true" />
            <p>
              <b>The honest limitation:</b> we&apos;re a storage company that moves. That&apos;s a real advantage whenever
              there&apos;s a storage leg or an uncertain date. For a simple same-day move with no storage, a good local
              mover will serve you just as well — we&apos;ll still quote it.
            </p>
          </div>
        </section>

        <LandingReviews />

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2>
                Moving &amp; storage <em>questions.</em>
              </h2>
            </div>
            <p>
              More answers? <Link href="/faq" style={{ color: "var(--accent)", fontWeight: 600 }}>View all FAQs →</Link>
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        {/* EXPLORE */}
        <section className={`${s.section} ${s.wrap}`} id="explore" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Explore</span>
              <h2>
                Storage for <em>every step of the move.</em>
              </h2>
            </div>
          </div>
          <div className={s.miniGrid}>
            {explore.map(({ Icon, t: title, b, href }) => (
              <Link className={`${s.miniCard} ${s.miniLink}`} href={href} key={href}>
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
        </section>

        <CtaBand
          title="Get a moving and storage quote"
          blurb="Tell us the two addresses, the date, and whether anything needs storing. Same-day written quote."
          ctaLabel="Get a Moving Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        <LandingConnect />
      </div>
    </>
  )
}
