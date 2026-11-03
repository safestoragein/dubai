import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Camera,
  ClipboardList,
  Flower2,
  HardHat,
  Home,
  MapPin,
  PackageOpen,
  Plane,
  RotateCcw,
  Ruler,
  ShieldCheck,
  Truck,
  Waves,
} from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { locationBusinessSchema } from "@/lib/structured-data"
import { faqPageSchema } from "@/lib/emirate-faqs"
import { storageLocationSentence } from "@/lib/facilities"
import { SILOS, MONEY_PAGE, HUB_ORDER, moneyAnchor } from "@/lib/silo/silos"
import { CCTV_COVERAGE, RETRIEVAL_WINDOW } from "@/lib/company-facts"
import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { FeatScroller } from "@/components/landing/feat-scroller"
import { MilestonesPlayer } from "@/components/landing/milestones-player"
import FaqAccordion from "@/components/landing/faq-accordion"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"

/*
 * /locations/dubai/palm-jumeirah — the district page, in the homepage design.
 *
 * Written by hand rather than drawn from lib/areas, because its copy is its
 * own: the Trunk, the sixteen Fronds and the Crescent each behave differently,
 * and the jet-ski and garden-furniture seasons are real reasons people here
 * call. Routing it through AreaPage would have replaced all of that with the
 * registry's one-line blurb.
 *
 * The copy is the copy that was already on the page, cut down. Removed rather
 * than restyled: "189+ Palm Jumeirah customers · Serving all 16 Fronds since
 * 2019" (a count nothing supports, and a date that contradicts the site's own
 * "since 2015"), "we have never had a logistics issue on the Palm" (an absolute
 * nobody can stand behind), the word "units" for what we sell, and the annual
 * prepaid plans "with a wide range of discounts", which is a price claim.
 */

const URL = "https://safestorage.ae/locations/dubai/palm-jumeirah"

export const metadata: Metadata = {
  title: "Palm Jumeirah Storage — Villa & Apartment",
  description:
    "Storage for Palm Jumeirah villas and apartments. Door-to-Door pickup from all Fronds, Trunk & Crescent. Secure and 24/7 monitored. Same-day available.",
  keywords:
    "palm jumeirah storage, storage palm jumeirah dubai, villa storage palm jumeirah, furniture storage palm fronds, palm jumeirah self storage, storage near palm jumeirah",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: URL,
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/palm-jumeirah while Arabic sat at
    // /ar/locations/dubai/palm-jumeirah, so the two never resolved as alternates.
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/palm-jumeirah",
      "x-default": URL,
    },
  },
}

/*
 * Five questions, and the FAQPage schema is built from this same array — so the
 * markup can never carry a question the page does not show. The old page listed
 * ten, with answers of 120 words or more.
 */
const FAQS = [
  {
    q: "Do you cover the whole Palm, including the Crescent?",
    a: "Yes — the Trunk including Shoreline Apartments and the Golden Mile, all sixteen Fronds, and the Crescent, which covers One Palm, Atlantis The Royal Residences, Waldorf Astoria Residences and the rest. The Crescent developments each have their own access procedure, so we confirm it with your building before the day.",
  },
  {
    q: "Can you clear a whole Signature Villa?",
    a: "Yes, and it is one of the most common reasons the Palm calls. A four to six bedroom villa takes a multi-person crew and a day. Everything is wrapped at the property, photographed and listed before it moves, so you always know what is held.",
  },
  {
    q: "Can a van get in on the Fronds?",
    a: "Yes. We size the vehicle to the Frond — a smaller van for the tighter ends, a larger one where the driveway allows. The team calls before the collection to agree the approach for your villa.",
  },
  {
    q: "Can you store a jet ski or paddleboards?",
    a: `Yes. Jet skis, personal watercraft, RIBs and small boats go into covered bays rather than outdoors, collected from a private jetty, a marina or your driveway. Kayaks, paddleboards, diving gear and wetsuits are stored the same way and come back within ${RETRIEVAL_WINDOW} when the season starts.`,
  },
  {
    q: "I am leaving Dubai — can you hold a villa's contents long term?",
    a: "Yes. Shipping a whole villa home is rarely worth it, so people store while they decide what to keep, ship, sell or give away. The account is managed remotely, there is no minimum term, and you can retrieve part of it without closing it.",
  },
]

/** The parts of the Palm the old page listed, as chips rather than prose. */
const PALM_AREAS = [
  "Palm Trunk",
  "All 16 Fronds",
  "Signature Villas",
  "Garden Homes",
  "Shoreline Apartments",
  "Golden Mile",
  "Palm Crescent",
  "One Palm",
  "Atlantis The Royal Residences",
  "Waldorf Astoria Residences",
  "Royal Atlantis Residences",
  "Fairmont Residences",
]

/** Neighbouring district pages this one links across to. */
const NEARBY = [
  { slug: "dubai-marina", name: "Dubai Marina" },
  { slug: "jumeirah", name: "Jumeirah" },
  { slug: "al-barsha", name: "Al Barsha" },
  { slug: "business-bay", name: "Business Bay" },
  { slug: "downtown-dubai", name: "Downtown Dubai" },
  { slug: "dubai-hills", name: "Dubai Hills" },
]

const TINTS = [
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
]

const USES = [
  {
    Icon: HardHat,
    title: "Villa renovation",
    desc: "A Signature Villa or Garden Home cleared in a day, wrapped and catalogued, and put back room by room afterwards.",
  },
  {
    Icon: Camera,
    title: "Staging a sale",
    desc: "A decluttered villa photographs better. Personal items and surplus furniture go out before the viewings and come back after.",
  },
  {
    Icon: Waves,
    title: "Water sports kit",
    desc: "Jet skis, paddleboards, kayaks, diving gear and wetsuits held in covered bays through the hot months.",
  },
  {
    Icon: Flower2,
    title: "Garden furniture",
    desc: "Outdoor seating, planters, cushions and the barbecue indoors from May, back out when the season returns.",
  },
  {
    Icon: Plane,
    title: "Leaving Dubai",
    desc: "The villa's contents held while you decide what to ship, sell or give away. Managed remotely from wherever you land.",
  },
  {
    Icon: Home,
    title: "Between tenancies",
    desc: "Everything held across the gap between one lease ending and the next starting.",
  },
]

const schemas = [
  locationBusinessSchema({
    name: "Palm Jumeirah",
    url: URL,
    serves: ["Palm Fronds", "Palm Trunk", "Palm Crescent", "Shoreline Apartments"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage Services for Palm Jumeirah",
    description:
      "Premium villa and apartment storage for Palm Jumeirah residents. Door-to-Door pickup from all Fronds, Trunk, and Crescent. Secure, flexible monthly plans.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: URL,
    areaServed: [
      { "@type": "Place", name: "Palm Jumeirah" },
      { "@type": "Place", name: "Palm Fronds" },
      { "@type": "Place", name: "Palm Trunk" },
      { "@type": "Place", name: "Palm Crescent" },
      { "@type": "Place", name: "Shoreline Apartments" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    // Must equal the rendered <title>: the `title` above is a plain string, so the
    // root layout template appends " | SafeStorage Dubai" to it.
    name: "Palm Jumeirah Storage — Villa & Apartment | SafeStorage Dubai",
    description:
      "Storage for Palm Jumeirah villas and apartments. Door-to-Door pickup from all Fronds, Trunk & Crescent. Secure and 24/7 monitored. Same-day available.",
    url: URL,
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
    dateModified: "2026-11-03",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://safestorage.ae/locations" },
      { "@type": "ListItem", position: 3, name: "Dubai", item: "https://safestorage.ae/locations/dubai" },
      { "@type": "ListItem", position: 4, name: "Palm Jumeirah", item: URL },
    ],
  },
  faqPageSchema(FAQS),
]

export default function PalmJumeirahPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Palm Jumeirah" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${p.split2Wrap} ${p.areaHero}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Area}`}>
              <span className={s.heroTag}>Dubai · Palm Jumeirah</span>
              <h1>
                Storage for the Palm — <em>we collect, store and bring it back.</em>
              </h1>
              <p>Villa and apartment storage across the Trunk, Fronds and Crescent.</p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a Free Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1400 / 788" } as CSSProperties}>
              <Image
                src="/landing/palm-jumeirah-hero.webp"
                alt="A SafeStorage crew carrying a wrapped sofa out of a Palm Jumeirah villa to the van, with Atlantis across the water behind them"
                width={1400}
                height={788}
                sizes="(max-width: 900px) 94vw, 50vw"
                quality={85}
                loading="eager"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* dark band: breaks the page up and states the service plainly */}
        <section className={`${s.darkBand} ${s.whyBand}`} style={{ marginTop: 18 }}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>What is included</span>
              <h2>
                We come to the Palm <br className={s.mBreak} />
                <em>and take it from there.</em>
              </h2>
            </div>
            <FeatScroller>
              {[
                {
                  Icon: Home,
                  h: "Collected from your door",
                  pp: "The crew comes to your Palm address, wraps what is going and loads it.",
                },
                {
                  Icon: PackageOpen,
                  h: "Wrapped where it stands",
                  pp: "Furniture is wrapped at your property before it moves, not later at the warehouse.",
                },
                { Icon: ShieldCheck, h: "Indoors and covered", pp: CCTV_COVERAGE },
                {
                  Icon: Ruler,
                  h: "Only the space you use",
                  pp: "Billed on the floor space your items occupy, not on a size you have to fill. No minimum term.",
                },
              ].map((c) => (
                <article className={s.feat} key={c.h}>
                  <div className={s.featIcon}>
                    <c.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{c.h}</h3>
                  <p>{c.pp}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        {/* why people here call — the district's own reasons, as cards */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 26, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>What the Palm stores</span>
              <h2>
                Why people here <em>call us.</em>
              </h2>
            </div>
            <p>Villas on the Fronds, apartments on the Trunk, and a season that decides half of it.</p>
          </div>
          <div className={s.miniGrid}>
            {USES.map((u, i) => (
              <div className={s.miniCard} key={u.title}>
                <span
                  className={s.miniIcon}
                  aria-hidden="true"
                  style={
                    {
                      background: TINTS[i % TINTS.length].bg,
                      color: TINTS[i % TINTS.length].fg,
                      boxShadow: "none",
                    } as CSSProperties
                  }
                >
                  <u.Icon />
                </span>
                <div>
                  <b>{u.title}</b>
                  <small>{u.desc}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* the district in detail, and where things actually go */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>In brief</span>
              <h2 className={p.longH2}>
                Storage on Palm Jumeirah, <em>specifically.</em>
              </h2>
            </div>
          </div>
          <div className={`${s.prose} ${p.proseFlush}`}>
            <p>
              The Palm is three different jobs wearing one name. The Signature Villas and Garden Homes
              on the Fronds are among the largest homes in the country, so a renovation or a sale
              produces a great deal at once. The Shoreline Apartments and the Golden Mile on the Trunk
              are the opposite — overflow, seasonal things and kit that has nowhere to live in a flat.
            </p>
            <p>
              The Crescent sits somewhere between the two and has the tightest access. Each
              development runs its own security procedure, so we agree the approach with your building
              before the day rather than turning up and finding out. Vehicles are sized to the Frond,
              and everything is wrapped, photographed and listed at your property before it moves.
            </p>
          </div>
          <div className={s.movingTip}>
            <span aria-hidden="true">📍</span>
            <p>
              <strong>Where your things actually go.</strong> {storageLocationSentence("dubai")} We
              collect from your address on the Palm, so you do not need to drive anything anywhere.
              Transport is quoted separately and confirmed before anything is booked.
            </p>
          </div>
        </section>

        {/* the collection, as the four steps it actually is */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>How it works</span>
              <h2 className={p.longH2}>
                Four steps, <em>door to door.</em>
              </h2>
            </div>
          </div>
          <MilestonesPlayer>
            <ol className={s.milestones} style={{ ["--steps"]: 4 } as CSSProperties}>
              {[
                {
                  Icon: ClipboardList,
                  t: "Tell us what you have",
                  b: "A room count or a rough list is enough for a free, itemised quote.",
                },
                {
                  Icon: Truck,
                  t: "We come to the Palm",
                  b: "The crew arrives on the agreed date, wraps everything and loads the van.",
                },
                {
                  Icon: ShieldCheck,
                  t: "Logged and stored",
                  b: "Everything is listed on the inventory you sign, then held indoors under camera.",
                },
                {
                  Icon: RotateCcw,
                  t: "Delivered back",
                  b: `All of it or part of it, to the address you choose, normally within ${RETRIEVAL_WINDOW}.`,
                },
              ].map((st, i) => (
                <li className={s.milestone} key={st.t} style={{ ["--i"]: i } as CSSProperties}>
                  <span className={s.milestoneDot} aria-hidden="true">
                    <st.Icon />
                  </span>
                  <span className={s.milestoneYear}>Step {i + 1}</span>
                  <b>{st.t}</b>
                  <small>{st.b}</small>
                </li>
              ))}
            </ol>
          </MilestonesPlayer>
        </section>

        {/* the parts of the Palm, as one moving line rather than wrapped rows */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Covered</span>
              <h2 className={p.longH2}>
                Trunk, Fronds <em>and Crescent.</em>
              </h2>
            </div>
            <p>Door-to-door collection from all of these addresses.</p>
          </div>
          {/*
            The track holds two identical halves and slides exactly one half, so
            the loop has no visible seam; the second half is aria-hidden so a
            screen reader hears the list once. Hovering pauses it.
          */}
          <div className={s.areaMarquees}>
            <div className={s.marquee}>
              <div className={s.marqueeTrack}>
                {[0, 1].map((half) => (
                  <div
                    className={`${s.marqueeGroup} ${s.chipGroup}`}
                    key={half}
                    aria-hidden={half === 1}
                    style={{ gap: 12 }}
                  >
                    {PALM_AREAS.map((a, i) => (
                      <span
                        className={s.chip}
                        key={`${half}-${a}`}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 20,
                            height: 20,
                            borderRadius: 6,
                            flex: "none",
                            background: TINTS[i % TINTS.length].bg,
                            color: TINTS[i % TINTS.length].fg,
                          }}
                        >
                          <MapPin size={12} strokeWidth={2.2} />
                        </span>
                        {a}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LandingReviews padTop={0} />

        {/* five questions — the same five the FAQPage schema carries */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={p.longH2}>
                Questions from <em>the Palm.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={FAQS} />
        </section>

        {/* Exception B of the linking plan: a district page links to its emirate
            hub, its neighbours, the money page and the silo hubs — nothing else. */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Nearby</span>
              <h2 className={p.longH2}>
                We also collect from <em>these areas.</em>
              </h2>
            </div>
            <p>Same crews, same service. Each page carries what matters locally.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {NEARBY.map((n, i) => (
              <Link
                href={`/locations/dubai/${n.slug}`}
                className={s.chip}
                key={n.slug}
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: 6,
                    flex: "none",
                    background: TINTS[i % TINTS.length].bg,
                    color: TINTS[i % TINTS.length].fg,
                  }}
                >
                  <MapPin size={12} strokeWidth={2.2} />
                </span>
                {n.name}
              </Link>
            ))}
          </div>
          <div className={s.miniFacts} style={{ marginTop: 20 }}>
            <li style={{ listStyle: "none" }}>
              <Link href="/locations/dubai">All Dubai areas</Link>
            </li>
            {HUB_ORDER.filter((k) => k !== "s4").map((k) => (
              <li key={SILOS[k].hub} style={{ listStyle: "none" }}>
                <Link href={SILOS[k].hub}>{SILOS[k].name}</Link>
              </li>
            ))}
            <li style={{ listStyle: "none" }}>
              <Link href={MONEY_PAGE}>{moneyAnchor("/locations/dubai/palm-jumeirah")}</Link>
            </li>
          </div>
        </section>

        <CtaBand
          title="Storing something from the Palm?"
          blurb="Free quote, no survey fee, and nothing booked until you agree both numbers — the storage and the transport."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
