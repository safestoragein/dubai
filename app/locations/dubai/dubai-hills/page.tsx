import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Building2,
  ClipboardList,
  Flag,
  HardHat,
  Home,
  KeyRound,
  MapPin,
  PackageOpen,
  RotateCcw,
  Ruler,
  ShieldCheck,
  Sofa,
  Truck,
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
 * /locations/dubai/dubai-hills — the district page, in the homepage design.
 *
 * This district is written by hand rather than drawn from lib/areas, because
 * its copy is its own: the golf-course communities, the off-plan handover gap,
 * the Al Quoz business strip. Routing it through AreaPage would have replaced
 * all of that with the registry's one-line blurb, so the page keeps its own
 * facts and only the presentation changes.
 *
 * The copy here is the copy that was already on the page, cut down. Nothing is
 * invented and no price appears: the old page's "167+ Dubai Hills customers ·
 * Premium service since 2020" line is gone rather than restyled, and so is the
 * FAQ that stated a cancellation-notice period.
 */

const URL = "https://safestorage.ae/locations/dubai/dubai-hills"

export const metadata: Metadata = {
  title: "Dubai Hills Estate Storage — Door-to-door Pickup",
  description:
    "Storage for Dubai Hills Estate villas and apartments. Door-to-Door pickup service, secure units, flexible plans. Al Quoz also covered.",
  keywords:
    "dubai hills estate storage, storage dubai hills, storage near dubai hills mall, al quoz storage, dubai hills villa storage, storage emaar dubai hills",
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
    // sat at /locations/dubai-hills while Arabic sat at
    // /ar/locations/dubai/dubai-hills, so the two never resolved as alternates.
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/dubai-hills",
      "x-default": URL,
    },
  },
}

/*
 * Five questions, and the FAQPage schema is built from this same array — so the
 * markup can never carry a question the page does not show. The old page listed
 * ten; these are the five that get asked, with the answers cut to the two or
 * three sentences that actually answer them.
 */
const FAQS = [
  {
    q: "Does SafeStorage cover all Dubai Hills Estate sub-communities?",
    a: "Yes — Golf Place I and II, Fairway Vistas, Maple 1/2/3, Park Heights I and II, Park Ridge, Acacia, Golfville, Sidra I/II/III, Elysian Mansions and the apartment towers, including the Address Dubai Hills residences and the buildings around Dubai Hills Mall. If you cannot see your community, call +971505773388 — every Dubai Hills address qualifies for door-to-door collection.",
  },
  {
    q: "Can you store my things while I wait for a Dubai Hills handover?",
    a: "Yes, and it is one of the most common reasons people call. You start when you have to leave your current property and finish when the new one is ready. If the handover slips you simply carry on month to month, then we deliver to your Dubai Hills address when you confirm the date.",
  },
  {
    q: "How is premium furniture packed?",
    a: "Everything is wrapped at your property before it moves. Polished and painted surfaces get stretch film and soft padding, glass gets a custom cover, marble tops get foam-padded edge protection, and large artwork is sandwiched between foam boards. Items are photographed before and after wrapping.",
  },
  {
    q: "How long does collection from Dubai Hills take?",
    a: `The crew normally reaches a Dubai Hills address within 20–25 minutes, depending on Al Khail Road. A full villa takes a multi-person team three to six hours. For a large clearance, book two to three days ahead so the right crew size is free.`,
  },
  {
    q: "Is Al Quoz covered for business storage?",
    a: "Yes — Al Quoz 1, 2, 3 and 4, residential and industrial. We hold excess stock, archived documents, equipment and office furniture for Al Quoz businesses, and send a vehicle sized to the volume.",
  },
]

/** The communities the old page listed, as chips rather than three columns of bullets. */
const COMMUNITIES = [
  "Golf Place I & II",
  "Fairway Vistas",
  "Maple 1, 2, 3",
  "Park Heights I & II",
  "Park Ridge",
  "Acacia & Golfville",
  "Sidra I, II, III",
  "Elysian Mansions",
  "Dubai Hills Mall area",
  "Address Dubai Hills",
  "Al Quoz 1–4",
  "Umm Suqeim 2 & 3",
  "Nad Al Sheba 1–4",
  "Al Barsha South",
  "Mohammed Bin Rashid City",
]

/** Neighbouring district pages this one links across to. */
const NEARBY = [
  { slug: "al-quoz", name: "Al Quoz" },
  { slug: "al-barsha", name: "Al Barsha" },
  { slug: "business-bay", name: "Business Bay" },
  { slug: "downtown-dubai", name: "Downtown Dubai" },
  { slug: "jumeirah", name: "Jumeirah" },
  { slug: "dubai-marina", name: "Dubai Marina" },
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
    Icon: Sofa,
    title: "Villa clearances",
    desc: "Golf Place, Fairway Vistas and Maple generate real volume. Full-villa clearance, wrapped and catalogued.",
  },
  {
    Icon: KeyRound,
    title: "Waiting on a handover",
    desc: "Bought off-plan and have to leave your current home first? Store month to month until the keys arrive.",
  },
  {
    Icon: HardHat,
    title: "Extensions and landscaping",
    desc: "Rooms cleared while the work runs, and put back where you want them when it finishes.",
  },
  {
    Icon: Flag,
    title: "Golf kit over the summer",
    desc: "Clubs, bags and trolleys held indoors from May to September instead of cooking in a car boot.",
  },
  {
    Icon: Building2,
    title: "Al Quoz business storage",
    desc: "Stock, archives, equipment and office furniture for the workshops and showrooms along the strip.",
  },
  {
    Icon: Home,
    title: "Between tenancies",
    desc: "Everything held while you move, then delivered to the next address — all of it or part of it.",
  },
]

const schemas = [
  locationBusinessSchema({
    name: "Dubai Hills Estate",
    url: URL,
    serves: ["Al Quoz", "Umm Suqeim", "Nad Al Sheba"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Dubai Hills Estate",
    description:
      "Premium secure storage for Dubai Hills Estate villas and apartments. Door-to-Door pickup from all Dubai Hills communities. Al Quoz and Umm Suqeim also covered.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: URL,
    areaServed: [
      { "@type": "Place", name: "Dubai Hills Estate" },
      { "@type": "Place", name: "Al Quoz" },
      { "@type": "Place", name: "Umm Suqeim" },
      { "@type": "Place", name: "Nad Al Sheba" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    // Must equal the rendered <title>: the `title` above is a plain string, so the
    // root layout template appends " | SafeStorage Dubai" to it.
    name: "Dubai Hills Estate Storage — Door-to-door Pickup | SafeStorage Dubai",
    description:
      "Storage for Dubai Hills Estate villas and apartments. Door-to-Door pickup service, secure units, flexible plans. Al Quoz also covered.",
    url: URL,
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
    dateModified: "2026-11-02",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://safestorage.ae/locations" },
      { "@type": "ListItem", position: 3, name: "Dubai", item: "https://safestorage.ae/locations/dubai" },
      { "@type": "ListItem", position: 4, name: "Dubai Hills Estate", item: URL },
    ],
  },
  faqPageSchema(FAQS),
]

export default function DubaiHillsPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Dubai Hills Estate" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${p.split2Wrap} ${p.areaHero}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Area}`}>
              <span className={s.heroTag}>Dubai · Dubai Hills Estate</span>
              <h1>
                Storage for Dubai Hills — <em>we collect, store and bring it back.</em>
              </h1>
              <p>Villa and apartment storage across Dubai Hills Estate, and Al Quoz next door.</p>
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
                src="/landing/dubai-hills-hero.webp"
                alt="A SafeStorage crew loading wrapped furniture into the van while a family packs boxes outside their Dubai Hills Estate villa, with the golf course and the Dubai skyline behind"
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
                We come to Dubai Hills <br className={s.mBreak} />
                <em>and take it from there.</em>
              </h2>
            </div>
            <FeatScroller>
              {[
                {
                  Icon: Home,
                  h: "Collected from your door",
                  pp: "The crew comes to your Dubai Hills address, wraps what is going and loads it.",
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
              <span className={s.howEyebrow}>What Dubai Hills stores</span>
              <h2>
                Why people here <em>call us.</em>
              </h2>
            </div>
            <p>Golf-course villas, towers around the mall, and the Al Quoz strip next door.</p>
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
                Storage in Dubai Hills, <em>specifically.</em>
              </h2>
            </div>
          </div>
          <div className={`${s.prose} ${p.proseFlush}`}>
            <p>
              Dubai Hills Estate is one of Emaar&apos;s master-planned communities — golf-course-facing
              villas, townhouses and apartment towers set around the 18-hole Dubai Hills Golf Club.
              Much of it is still being handed over, which is why so many calls here are about the gap
              between leaving one home and getting into the next.
            </p>
            <p>
              The villas in Golf Place, Fairway Vistas and Maple are large-format properties, so a
              renovation or a change of tenancy produces a lot at once. We wrap it at the property,
              photograph and list it, and bring back all of it or part of it when you ask.
            </p>
          </div>
          <div className={s.movingTip}>
            <span aria-hidden="true">📍</span>
            <p>
              <strong>Where your things actually go.</strong> {storageLocationSentence("dubai")} We
              collect from your address in Dubai Hills, so you do not need to drive anything anywhere.
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
                  t: "We come to Dubai Hills",
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

        {/* the communities the old page listed in three columns of bullets */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Covered</span>
              <h2 className={p.longH2}>
                Every community, <em>and the ones next door.</em>
              </h2>
            </div>
            <p>Door-to-door collection from all of these addresses.</p>
          </div>
          {/*
            One line that keeps moving, rather than three wrapped rows. The track
            holds two identical halves and slides exactly one half, so the loop
            has no visible seam; the second half is aria-hidden so a screen
            reader hears the list once. Hovering pauses it.
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
                    {COMMUNITIES.map((c, i) => (
                      <span
                        className={s.chip}
                        key={`${half}-${c}`}
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
                        {c}
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
                Questions from <em>Dubai Hills.</em>
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
              <Link href={MONEY_PAGE}>{moneyAnchor("/locations/dubai/dubai-hills")}</Link>
            </li>
          </div>
        </section>

        <CtaBand
          title="Storing something from Dubai Hills?"
          blurb="Free quote, no survey fee, and nothing booked until you agree both numbers — the storage and the transport."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
