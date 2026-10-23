import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  DoorOpen,
  Warehouse,
  Package,
  Bed,
  Sofa,
  Home,
  Building2,
  Boxes,
  ScanLine,
  Camera,
  Thermometer,
  CalendarClock,
  Ban,
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
 * Silo 1 · /self-storage-dubai/storage-units/ — owns `storage units dubai` (720/mo, KD 46).
 *
 * MOVE from /storage-units-dubai, which 301s here in the same commit. Both pages
 * live at once is the cannibalisation the register exists to prevent.
 *
 * Redesigned in the homepage style (owner, 2026-10-23) with their own picture.
 * Same facts, said shorter; no figure added and none removed. No SafeStorage
 * rate is published here either — sizes are in sq ft and marked as estimates,
 * and the cost question points at the prices page.
 */

export const metadata: Metadata = {
  title: { absolute: "Storage Units Dubai | Sizes, Security & Prices" },
  description:
    "Storage units in Dubai from 30 to 270+ sq ft, billed on the space you use. Palletised, barcoded, CCTV-monitored. Same-day quote: 050 577 3388.",
  keywords:
    "storage units dubai, storage units, storage unit dubai, self storage units dubai, storage unit rental dubai, personal storage units, storage facilities",
  openGraph: {
    title: "Storage Units Dubai — Sizes, Security and What Actually Fits",
    description:
      "Storage units in Dubai from 30 to 270+ sq ft, billed on the space you use. Palletised, barcoded and CCTV-monitored.",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/storage-units",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/self-storage-dubai/storage-units" },
}

const faqData = [
  {
    q: "How much do storage units cost in Dubai?",
    a: "It depends on the space you use — you pay only for the space your items occupy. 30 sq ft suits a studio, 60–90 sq ft a one-bedroom flat, 240–270 sq ft a three-bedroom villa. Collection, packing materials and transport are in the free, itemised quote.",
  },
  {
    q: "What size do I need for a one-bedroom apartment?",
    a: "Between 60 and 90 sq ft packed and stacked properly. Loose and unpacked, the same flat can need 120 sq ft — which is why a packing crew usually lowers the monthly cost rather than adding to it.",
  },
  {
    q: "Is my space kept separate from everyone else's?",
    a: "Yes. Your goods are stored together in allocated, barcoded space rather than behind a personal padlock, and nothing moves in or out without being scanned against your account. You get a photographed digital inventory.",
  },
  {
    q: "Are storage units in Dubai air conditioned?",
    a: "Ours are climate-managed, which matters when Dubai passes 45°C in August. Ask any operator to confirm the storage area itself is managed, not just the reception.",
  },
  {
    q: "Can I visit, and how long can I store for?",
    a: "Retrieval is by scheduled delivery, normally with one to two working days' notice, and facility visits can be arranged on request. Bookings run from two weeks upwards with no lock-in.",
  },
]

/* sq ft, as the owner asks, and marked as estimates — every load is
   re-measured once it is racked */
const unitSizes = [
  { Icon: Bed, size: "30 sq ft", home: "1 RK", equiv: "A small bathroom", fits: "Bed, one wardrobe, 10–15 boxes, a small fridge." },
  { Icon: Sofa, size: "60–90 sq ft", home: "1 BHK", equiv: "A walk-in wardrobe", fits: "A whole one-bed flat and 20–30 boxes." },
  { Icon: Home, size: "120–150 sq ft", home: "2 BHK", equiv: "A single-car garage", fits: "Two bedrooms, living and dining, 40–50 boxes." },
  { Icon: Building2, size: "240–270 sq ft", home: "3 BHK", equiv: "A double garage", fits: "A villa: three bedrooms, majlis, garden furniture." },
  { Icon: Warehouse, size: "270+ sq ft", home: "Custom", equiv: "A warehouse bay", fits: "Large villas, fit-outs, stock. Quoted after a survey." },
]

const unitTypes = [
  { Icon: DoorOpen, title: "Drive-up units", body: "A shutter and a corridor you drive to. Best for weekly access, dearest per sq ft." },
  { Icon: Boxes, title: "Racked and palletised", body: "Pallets and shelving in a managed warehouse, tagged to your account. What most household storage here really is." },
  { Icon: Package, title: "Containerised", body: "Sealed into a timber or steel container, then stacked. Good long-term, poor for access." },
]

const security = [
  { Icon: Boxes, h: "Allocated space", p: "Your goods stay together on their own pallets or in their own bay, tagged to your account — not loose-mixed with another household's furniture." },
  { Icon: ScanLine, h: "Barcode-level inventory", p: "Every carton and loose item gets a label, and you get a photographed list before the truck leaves your address." },
  { Icon: Camera, h: "CCTV around the clock", p: "Plus access logging on the storage areas, and handling by our own trained crews rather than day labour hired at the gate." },
  { Icon: Thermometer, h: "Climate and pest management", p: "August heat is the real threat to stored goods, more than theft: veneer separates, leather cracks, adhesives fail, electronics die." },
]

const cannotStore = [
  "Flammable liquids, gas cylinders, paint and thinners",
  "Fireworks, ammunition and firearms",
  "Perishable food, live plants and animals",
  "Chemicals and loose batteries",
  "Anything with liquid left in it",
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    // Service, not Product: a Product without offers/price is an invalid rich
    // result, and no price is published on this site.
    "@type": "Service",
    "@id": "https://safestorage.ae/self-storage-dubai/storage-units#service",
    name: "Storage Units in Dubai",
    image: "https://safestorage.ae/images/storage-facility-background.png",
    description:
      "Racked, palletised and barcoded storage units in Dubai from 30 to 270+ sq ft, with door-to-door collection, packing and a photographed digital inventory.",
    provider: { "@type": "Organization", name: "SafeStorage" },
    url: "https://safestorage.ae/self-storage-dubai/storage-units",
  },
  {
    // ItemList over the five sizes so each can surface independently. The "what
    // fits" text is descriptive, deliberately NOT marked up as an Offer.
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Storage unit sizes in Dubai",
    itemListElement: unitSizes.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${u.size} storage unit (${u.home})`,
      description: u.fits,
    })),
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

export default function StorageUnitsPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "Storage Units" },
        ]}
      />
      <SchemaScript schema={pageSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.split2Tight}`}>
              <span className={s.heroTag}>Storage units Dubai</span>
              <h1>
                Storage units in Dubai — <br className={s.mBreakDesk} />
                <em>sizes and what fits</em>
              </h1>
              <p>
                From 30 to 270+ sq ft, billed on the space your items use. Racked, barcoded and
                climate-managed, with collection from your door.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a Storage Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1733 / 907" } as CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/storage-units-hero.webp"
                alt="A SafeStorage crew member wheeling labelled boxes into storage for a customer in Dubai"
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

        {/* what a "unit" actually is here */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8, paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>What you are renting</span>
              <h2 className={p.longH2}>
                Three kinds of unit <em>you will find in Dubai.</em>
              </h2>
            </div>
            <p>They behave differently, and the difference matters more than the price.</p>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`}>
            {unitTypes.map((t, i) => (
              <div className={s.miniCard} key={t.title} style={{ ["--i"]: i } as CSSProperties}>
                <span className={s.miniIcon}>
                  <t.Icon strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <b>{t.title}</b>
                  <small>{t.body}</small>
                </span>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* sizes */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Sizes</span>
              <h2 className={p.longH2}>
                What actually fits <em>in each size.</em>
              </h2>
            </div>
            <p>Sizes are estimates — the space is re-measured once your goods are racked.</p>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`}>
            {unitSizes.map((u, i) => (
              <div className={s.miniCard} key={u.size} style={{ ["--i"]: i } as CSSProperties}>
                <span className={s.miniIcon}>
                  <u.Icon strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <b>
                    {u.size} · {u.home}
                  </b>
                  <small>
                    {u.equiv}. {u.fits}
                  </small>
                </span>
              </div>
            ))}
          </HomeReveal>
          <div className={s.movingTip}>
            <p>
              You pay only for the space your items use, with collection, packing materials, transport and
              the digital inventory in the quote. What varies, and why, is on the{" "}
              <Link href="/self-storage-dubai/prices">storage prices page</Link>.
            </p>
          </div>
        </section>

        {/* security */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>How it is kept</span>
              <h2>
                Your things, <br className={s.mBreak} />
                <em>kept apart and tracked.</em>
              </h2>
            </div>
            <FeatScroller>
              {security.map((f) => (
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

        {/* the trade-off */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The trade-off</span>
              <h2 className={p.longH2}>
                You do not hold <em>a key.</em>
              </h2>
            </div>
            <p>
              Retrieval is a scheduled delivery, usually one to two working days, and slower in the June
              and August peak.
            </p>
          </div>
          <div className={s.movingTip}>
            <p>
              <CalendarClock aria-hidden="true" /> That is the cost of not carrying anything yourself, and
              for most household storage it is a good trade. For a business rotating stock weekly it is
              not — <Link href="/business-storage-dubai">business storage</Link> covers those setups.
            </p>
          </div>
        </section>

        {/* what cannot go in */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Not allowed</span>
              <h2 className={p.longH2}>
                What cannot go <em>into storage.</em>
              </h2>
            </div>
            <p>
              UAE rules and common sense overlap. The full list is on the{" "}
              <Link href="/self-storage-dubai/prohibited-items">prohibited items page</Link>.
            </p>
          </div>
          <div className={s.miniFacts} style={{ marginTop: 10, borderTop: "none", paddingTop: 0 }}>
            {cannotStore.map((x) => (
              <span key={x}>
                <Ban aria-hidden="true" /> {x}
              </span>
            ))}
          </div>
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
          title="Booking a unit"
          blurb="Tell us your rooms and your dates and we will send a free, itemised quote — with the storage and the transport as separate lines."
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
              { href: "/self-storage-dubai", b: "Self storage in Dubai", t: "The service, end to end." },
              { href: "/self-storage-dubai/prices", b: "What it costs", t: "What changes a quote, and why." },
              { href: "/self-storage-dubai/local-self-storage", b: "Local storage", t: "Coverage across Dubai." },
              { href: "/self-storage-dubai/prohibited-items", b: "Prohibited items", t: "The full list, before pickup day." },
              { href: "/business-storage-dubai", b: "Business storage", t: "Stock, records and equipment." },
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
