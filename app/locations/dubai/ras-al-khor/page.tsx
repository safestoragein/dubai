import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Armchair,
  Boxes,
  ClipboardList,
  FileText,
  HardHat,
  Home,
  MapPin,
  PackageOpen,
  RotateCcw,
  Ruler,
  ShieldCheck,
  Store,
  Truck,
  Wrench,
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
 * /locations/dubai/ras-al-khor — the district page, in the homepage design.
 *
 * Written by hand rather than drawn from lib/areas, because this district is
 * not like the others. It is the emirate's furniture and fit-out heartland, its
 * used-car trading centre and a protected wetland, with long-standing villa
 * communities around the edge — so the page is mostly a business page, and the
 * registry's one-line blurb would have thrown all of it away.
 *
 * The copy is the copy that was already here, cut down. Two things changed
 * rather than moved: the page sold "units" throughout and promised goods held
 * "in a unit assigned to your account", which is the private-unit wording the
 * business rules do not allow - storage is shared space, billed on what you
 * occupy. The honest limits stay exactly as they were: no vehicles, no produce.
 */

const URL = "https://safestorage.ae/locations/dubai/ras-al-khor"

export const metadata: Metadata = {
  title: { absolute: "Storage Ras Al Khor | Industrial & Self Storage | SafeStorage" },
  description:
    "Secure storage in Ras Al Khor, Dubai. Business overflow and household storage with door-to-door collection for furniture traders, workshops and residents.",
  keywords:
    "Storage Ras Al Khor, Ras Al Khor storage, Ras Al Khor Industrial storage, furniture storage Ras Al Khor, warehouse storage Ras Al Khor, Nad Al Sheba storage, Al Aweer storage, International City storage, Dragon Mart trader storage, Nad Al Hamar storage, Al Warqa storage, business storage Ras Al Khor, showroom stock storage Dubai, SafeStorage Ras Al Khor",
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
    // sat at /locations/ras-al-khor while Arabic sat at
    // /ar/locations/dubai/ras-al-khor, so the two never resolved as alternates.
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/ras-al-khor",
      "x-default": URL,
    },
  },
}

/*
 * Five questions, and the FAQPage schema is built from this same array — so the
 * markup can never carry a question the page does not show. The old page listed
 * twelve, several of them 120 words long.
 */
const FAQS = [
  {
    q: "Do you collect from all three Ras Al Khor industrial areas?",
    a: "Yes — Industrial 1, 2 and 3, plus Nad Al Hamar, Al Aweer and the residential districts around them. Crews work off the Ras Al Khor Road and Al Khail Road access points, so units deep inside the blocks are still straightforward. A business moving stock on a cycle can set a standing weekly or monthly collection instead of booking each time.",
  },
  {
    q: "Can furniture makers store finished stock?",
    a: "Yes, and it is the most frequent request from this area — finished pieces awaiting delivery, ex-display stock pulled off the floor, seasonal ranges before a launch, contract orders staged ahead of a handover. Everything is wrapped before loading and held indoors rather than in an open yard, which matters for upholstery and veneer. Part loads can be called forward, so you draw down only what a delivery needs.",
  },
  {
    q: "Do you cover International City and Dragon Mart?",
    a: "Yes. International City borders Ras Al Khor and sits inside this zone, all clusters, along with the trading community around Dragon Mart. Shops use us for bulk inventory between restocks, packaging and container overflow. Stock is catalogued on intake and returned in part loads, so you can call forward a single product line.",
  },
  {
    q: "Can you store anything from the Al Aweer market?",
    a: (
      "No produce, food or perishables — that applies across every SafeStorage site without exception. What we do take is everything around the produce: crates, pallets, packaging stock, weighing and handling equipment, display stands, promotional material and archived trade paperwork. The full list is on our prohibited items page."
    ),
  },
  {
    q: "Can you empty a whole showroom or workshop?",
    a: `Yes. Crew and vehicles are assigned in proportion to the volume, and a showroom or workshop can usually be emptied in a day, or split across visits so you keep trading. Everything is photographed and catalogued on the way out and comes back as your operation calls for it, normally within ${RETRIEVAL_WINDOW}.`,
  },
]

/** The areas the old page listed in two columns of bullets. */
const AREAS = [
  "Ras Al Khor Industrial 1",
  "Ras Al Khor Industrial 2",
  "Ras Al Khor Industrial 3",
  "Ras Al Khor residential",
  "Nad Al Hamar",
  "Al Aweer",
  "Al Khail Gate",
  "Nad Al Sheba 1–4",
  "Al Warqa 1–5",
  "International City",
  "Dubai Festival City",
  "Al Rashidiya",
]

/** Neighbouring district pages this one links across to. */
const NEARBY = [
  { slug: "mirdif", name: "Mirdif" },
  { slug: "dubai-silicon-oasis", name: "Dubai Silicon Oasis" },
  { slug: "business-bay", name: "Business Bay" },
  { slug: "al-quoz", name: "Al Quoz" },
  { slug: "deira", name: "Deira" },
  { slug: "dubai-investment-park", name: "Dubai Investment Park" },
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
    Icon: Armchair,
    title: "Furniture and fit-out stock",
    desc: "Finished pieces between production and delivery, ex-display stock, and joinery staged before a site is ready.",
  },
  {
    Icon: Boxes,
    title: "Marble, stone and fittings",
    desc: "Boxed tiles, fixtures, sample stock and discontinued ranges off ground you need for working material.",
  },
  {
    Icon: Wrench,
    title: "Workshop and parts trade",
    desc: "Parts inventory, tools, diagnostic kit and out-of-season tyres. The parts side only — vehicles we cannot take.",
  },
  {
    Icon: Store,
    title: "Al Aweer and Dragon Mart traders",
    desc: "Crates, pallets, packaging, display stands and handling equipment through the quiet months. No produce.",
  },
  {
    Icon: FileText,
    title: "Records and archives",
    desc: "Cartons numbered, labelled and logged against a barcode, named-carton retrieval, and certified destruction after.",
  },
  {
    Icon: HardHat,
    title: "Villa renovation",
    desc: "Nad Al Sheba and Nad Al Hamar homes cleared for a rebuild, catalogued, and put back when the site is handed over.",
  },
]

const schemas = [
  locationBusinessSchema({
    name: "Ras Al Khor",
    url: URL,
    serves: ["Nad Al Hamar", "Al Aweer", "Nad Al Sheba", "Al Warqa", "International City", "Al Rashidiya"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Document Archival & Storage in Ras Al Khor",
    description:
      "Fireproof, barcode-indexed records storage for Ras Al Khor traders, manufacturers and workshops, with named-carton retrieval inside two working days and certified destruction.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: URL,
    areaServed: [
      { "@type": "Place", name: "Ras Al Khor" },
      { "@type": "Place", name: "Nad Al Hamar" },
      { "@type": "Place", name: "Al Aweer" },
      { "@type": "Place", name: "Nad Al Sheba" },
      { "@type": "Place", name: "International City" },
    ],
    serviceType: "Document Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    // Must match the page <title> above — link-preview / interlinking tools read
    // this WebPage name and showed it in place of the title when they disagreed.
    name: "Storage Ras Al Khor | Industrial & Self Storage | SafeStorage",
    description:
      "Secure storage in Ras Al Khor, Dubai. Business overflow and household storage with door-to-door collection for furniture traders, workshops and residents.",
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
      { "@type": "ListItem", position: 4, name: "Ras Al Khor", item: URL },
    ],
  },
  faqPageSchema(FAQS),
]

export default function RasAlKhorPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Ras Al Khor" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${p.split2Wrap} ${p.areaHero}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Area}`}>
              <span className={s.heroTag}>Dubai · Ras Al Khor</span>
              <h1>
                Storage for Ras Al Khor — <em>we collect, store and bring it back.</em>
              </h1>
              <p>Trade stock, records and household goods, collected from your door.</p>
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
                src="/landing/ras-al-khor-hero.webp"
                alt="A SafeStorage crew loading the van outside a Ras Al Khor property, with the wildlife sanctuary sign, flamingos on the creek and the Dubai skyline behind"
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
                We come to Ras Al Khor <br className={s.mBreak} />
                <em>and take it from there.</em>
              </h2>
            </div>
            <FeatScroller>
              {[
                {
                  Icon: Truck,
                  h: "Loaded from your bay",
                  pp: "The crew comes to your yard, loading bay or front door, wraps what is going and loads it.",
                },
                {
                  Icon: PackageOpen,
                  h: "Wrapped where it stands",
                  pp: "Stock is wrapped at your premises before it moves, not later at the warehouse.",
                },
                { Icon: ShieldCheck, h: "Indoors and covered", pp: CCTV_COVERAGE },
                {
                  Icon: Ruler,
                  h: "Only the space you use",
                  pp: "Billed on the floor space your goods occupy, not on a size you have to fill. No minimum term.",
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
              <span className={s.howEyebrow}>What Ras Al Khor stores</span>
              <h2>
                Why businesses here <em>call us.</em>
              </h2>
            </div>
            <p>Showrooms, stone yards, workshops and the villa districts across the creek.</p>
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
                Storage in Ras Al Khor, <em>specifically.</em>
              </h2>
            </div>
          </div>
          <div className={`${s.prose} ${p.proseFlush}`}>
            <p>
              Ras Al Khor holds an unusual position in Dubai. It is the city&apos;s furniture and
              fit-out heartland, its used-car trading centre, and a protected wetland where flamingos
              feed on the creek — all inside one postcode, with long-settled villa communities in Nad
              Al Sheba, Al Warqa and Nad Al Hamar around the edge.
            </p>
            <p>
              Floor space here is priced for production and dispatch, not for holding stock that turns
              over once or twice a year. We take that slow volume on monthly terms so the ground you
              rent goes back to working material. Goods are wrapped at your premises, catalogued on
              collection and called forward in part loads, so a trader can release one product line
              rather than a whole consignment.
            </p>
          </div>
          <div className={s.movingTip}>
            <span aria-hidden="true">📍</span>
            <p>
              <strong>What we cannot take.</strong> No produce, food or perishables, and no vehicles,
              whatever their condition. Everything around the produce — crates, pallets, packaging,
              handling equipment, display stands and trade paperwork — is fine, and so is the parts and
              tools side of the motor trade. The full list is on the{" "}
              <Link href="/self-storage-dubai/prohibited-items">prohibited items page</Link>.
            </p>
          </div>
          <div className={s.movingTip}>
            <span aria-hidden="true">📍</span>
            <p>
              <strong>Where your things actually go.</strong> {storageLocationSentence("dubai")} We
              collect from your address in Ras Al Khor, so you do not need to drive anything anywhere.
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
                  b: "Dimensions, a stock list or a few photographs are enough for a free, itemised quote.",
                },
                {
                  Icon: Truck,
                  t: "We come to Ras Al Khor",
                  b: "The crew arrives on the agreed date, wraps everything and loads from your bay.",
                },
                {
                  Icon: ShieldCheck,
                  t: "Logged and stored",
                  b: "Everything is listed on the inventory you sign, then held indoors under camera.",
                },
                {
                  Icon: RotateCcw,
                  t: "Called forward",
                  b: `All of it or one product line, to the address you choose, normally within ${RETRIEVAL_WINDOW}.`,
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

        {/* the areas, as one moving line rather than two columns of bullets */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Covered</span>
              <h2 className={p.longH2}>
                The industrial blocks <em>and the creek side.</em>
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
                    {AREAS.map((a, i) => (
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
                Questions from <em>Ras Al Khor.</em>
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
              <Link href={MONEY_PAGE}>{moneyAnchor("/locations/dubai/ras-al-khor")}</Link>
            </li>
          </div>
        </section>

        <CtaBand
          title="Storing something from Ras Al Khor?"
          blurb="Free quote, no survey fee, and nothing booked until you agree both numbers — the storage and the transport."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
