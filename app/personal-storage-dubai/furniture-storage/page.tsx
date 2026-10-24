import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Package, Shield, Sofa, Sparkles, Layers, Hammer, Home, Plane, Sun, Building2, BedDouble, Ruler } from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloLinks } from "@/components/silo/silo-links"
import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"

/*
 * Silo 2 · /personal-storage-dubai/furniture-storage
 *
 * Redesigned in the homepage style (owner, 2026-10-24) with their own picture.
 * The copy is the page's own, shortened. Three things were corrected while
 * rewriting, all of them site rules:
 *   - the three "customer" quotes were not from the published set, so the
 *     shared LandingReviews band replaces them;
 *   - a unit size was given as "100 sq ft / 9.3 m²" — sizes are sq ft only;
 *   - "all storage includes basic damage coverage" stated a cover level, which
 *     the insurance page explicitly does not do. It now says what is true:
 *     condition photographs at intake, declare high-value items, and get the
 *     cover position in writing.
 * The second, duplicate FAQ block is gone; one accordion of five remains.
 */

export const metadata: Metadata = {
  title: "Furniture Storage Dubai — Door-to-door Pickup",
  description:
    "Furniture storage in Dubai with door-to-door pickup and professional wrapping. Sofas, beds, wardrobes and appliances stored safely. Get a free, itemised quote.",
  keywords:
    "furniture storage dubai, sofa storage dubai, bed storage dubai, wardrobe storage dubai, dining table storage dubai, moving furniture storage dubai, apartment furniture storage dubai, villa furniture storage",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/personal-storage-dubai/furniture-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/personal-storage-dubai/furniture-storage" },
}

const faqs = [
  {
    q: "Do you disassemble furniture before storage?",
    a: "The crew handles basic disassembly — bed frames, dining tables that separate, flat-pack furniture. Hardware is bagged, labelled and taped to the piece it belongs to. For built-in furniture or large sectionals, taking it apart before we arrive speeds the day up considerably.",
  },
  {
    q: "How do you protect upholstered furniture like sofas?",
    a: "In breathable furniture covers, not plastic film — film traps condensation against fabric. Sofas sit on padded risers so the base is not compressed, and armrests are foam-wrapped.",
  },
  {
    q: "What happens if something is damaged?",
    a: "Every piece is photographed at intake and the condition report is signed by both sides. Declare high-value items — antiques, designer or custom pieces — so they are handled and recorded properly, and ask us for the current cover position in writing before you book. [Storage insurance](/self-storage-dubai/insurance) sets out what we can and cannot state.",
  },
  {
    q: "Can I store a fridge or washing machine too?",
    a: "Yes, and regularly. Defrost and clean a fridge at least 24 hours before pickup and drain the drum and seal on a washing machine. Appliances are stored upright — a fridge on its side can damage the compressor permanently.",
  },
  {
    q: "How much space does a 2-bedroom apartment need?",
    a: "Around 120–150 sq ft once racked, including appliances and boxes. A three-bedroom villa is usually 240–270 sq ft. Send a video walk-through and we will confirm before collection.",
  },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Furniture Storage Dubai",
    description:
      "Safe, secure furniture storage in Dubai with door-to-door pickup and professional wrapping. Store sofas, beds, wardrobes and full apartment or villa contents.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/personal-storage-dubai/furniture-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Furniture Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/personal-storage-dubai/furniture-storage#webpage",
    name: "Furniture Storage Dubai — Safe Secure Storage",
    url: "https://safestorage.ae/personal-storage-dubai/furniture-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
    })),
  },
]

const furnitureTypes = [
  { icon: "🛋️", name: "Sofas & seating", desc: "L-shapes, corner sofas, armchairs. Covered and stored on padded risers." },
  { icon: "🛏️", name: "Beds & mattresses", desc: "Single to super-king. Mattresses wrapped and stored flat in a cover." },
  { icon: "🚪", name: "Wardrobes & closets", desc: "Dismantled where needed, hardware bagged and labelled for reassembly." },
  { icon: "🍽️", name: "Dining sets", desc: "Legs wrapped individually, glass tops foam-padded and corner-protected." },
  { icon: "🍳", name: "Kitchen appliances", desc: "Drained, cleaned and stored upright so seals and compressors are not damaged." },
  { icon: "🖥️", name: "Office furniture", desc: "Desks, chairs, filing cabinets, boardroom tables — all on the inventory." },
  { icon: "☀️", name: "Outdoor furniture", desc: "Cleaned and brought indoors, out of the sun that fades and cracks it." },
  { icon: "🏛️", name: "Antique & designer", desc: "Acid-free wrapping, padded storage and condition photographs at intake." },
]

const protection = [
  { Icon: Sparkles, h: "Scratches, dents and scuffs", p: "Furniture moved without protection gets marked. Every piece is wrapped in covers, foam padding and corner protectors before it leaves the flat." },
  { Icon: Sun, h: "Dust and sun", p: "Upholstery and timber collect dust and fade in direct sun. Storage is indoors and covered, so neither reaches them." },
  { Icon: Layers, h: "Crushing and bad stacking", p: "Sofas sag and mattresses deform under weight. Sofas go on padded risers, mattresses flat in covers, and nothing is piled on top." },
  { Icon: Package, h: "Wrapping is included", p: "Covers, stretch wrap, corner protectors and foam padding come with the collection, not as an extra line." },
  { Icon: Shield, h: "Covered indoor storage", p: "Never a yard, a container or a shaded compound — rain, sun and heat are what damage furniture in this region." },
  { Icon: Sofa, h: "Positioned correctly", p: "Sofas raised, tables padded, nothing overloaded. How a piece sits for six months decides what it looks like after." },
]

const scenarios = [
  { Icon: Hammer, h: "Apartment renovation", p: "Four to twelve weeks in Dubai. Storing the contents keeps them safe and gives contractors the run of the place." },
  { Icon: Home, h: "Between leases", p: "A gap of two to four weeks between tenancies, without paying overlap rent or rushing the move." },
  { Icon: Ruler, h: "Downsizing", p: "Three bedrooms into one. Store what you are unsure about rather than selling it under time pressure." },
  { Icon: Plane, h: "Moving abroad", p: "Shipping is expensive and hard to undo. Store first, decide once you know what the new place needs." },
  { Icon: BedDouble, h: "Summer away", p: "Two or three months out of the country, rather than leaving a flat full of furniture with the AC off." },
  { Icon: Building2, h: "Villa clearance", p: "Estate or inherited contents, with time to decide and access arranged for buyers or charity collection." },
]

/* a colour per card, cycled */
const TINTS = [
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
]

export default function FurnitureStoragePage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Personal Storage Dubai", href: "/personal-storage-dubai" },
          { name: "Furniture Storage" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Tight}`}>
              <span className={s.heroTag}>Furniture storage Dubai</span>
              <h1>
                Furniture Storage — <br className={s.mBreakDesk} />
                <em>Wrapped at Your Door</em>
              </h1>
              <p>
                Moving, renovating or between leases? We collect from your address, wrap every piece
                properly and store it indoors — from a single sofa to a villa's contents.
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
            <div className={p.split2Photo} style={{ aspectRatio: "1672 / 941" } as CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/furniture-storage-hero.webp"
                alt="A SafeStorage crew wrapping a sofa at a customer's door in Dubai"
                loading="eager"
                decoding="async"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* what we store */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>What we store</span>
              <h2 className={p.longH2}>
                Every kind of furniture <em>in a Dubai home.</em>
              </h2>
            </div>
            <p>Each piece is wrapped at your address, not at the warehouse.</p>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`}>
            {furnitureTypes.map((f, i) => (
              <div className={s.miniCard} key={f.name} style={{ ["--i"]: i } as CSSProperties}>
                <span className={s.miniIcon} aria-hidden="true" style={{ fontSize: 18, background: TINTS[i % TINTS.length].bg }}>
                  {f.icon}
                </span>
                <span>
                  <b>{f.name}</b>
                  <small>{f.desc}</small>
                </span>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* why wrapping matters — dark band */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Why it matters</span>
              <h2>
                What damages furniture, <br className={s.mBreak} />
                <em>and what stops it.</em>
              </h2>
            </div>
            <FeatScroller>
              {protection.map((f) => (
                <article className={s.feat} key={f.h}>
                  <div className={s.featIcon}>
                    <f.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{f.h}</h3>
                  <p>{f.p}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        {/* why people store */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 26, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Why people store</span>
              <h2 className={p.longH2}>
                Six reasons <em>we are called.</em>
              </h2>
            </div>
            <p>From our own collection patterns across Dubai.</p>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`}>
            {scenarios.map((x, i) => (
              <div className={s.miniCard} key={x.h} style={{ ["--i"]: i } as CSSProperties}>
                <span className={s.miniIcon} style={{ background: TINTS[i % TINTS.length].bg, color: TINTS[i % TINTS.length].fg }}>
                  <x.Icon strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <b>{x.h}</b>
                  <small>{x.p}</small>
                </span>
              </div>
            ))}
          </HomeReveal>
          <div className={s.movingTip}>
            <p>
              Not sure how much space it all needs? The{" "}
              <Link href="/self-storage-dubai/storage-calculator">size calculator</Link> gets you a
              figure in five minutes, and{" "}
              <Link href="/self-storage-dubai/prices">what storage costs</Link> covers the rest of a
              quote.
            </p>
          </div>
        </section>

        <LandingReviews padTop={0} />

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
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Store your furniture safely"
          blurb="Door-to-door pickup across Dubai, wrapping included, and a free itemised quote before anything is booked."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/personal-storage-dubai/furniture-storage" />
    </>
  )
}
