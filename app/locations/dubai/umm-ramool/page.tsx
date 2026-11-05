import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BedDouble,
  Building2,
  Car,
  ClipboardList,
  FileText,
  Home,
  MapPin,
  PackageOpen,
  Plane,
  RotateCcw,
  Ruler,
  ShieldCheck,
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
 * /locations/dubai/umm-ramool — the district page, in the homepage design.
 *
 * Written by hand rather than drawn from lib/areas. Umm Ramool is defined by
 * what sits next to it: Dubai International on one side, the free zone and the
 * cargo terminals on another. Freight consolidators, customs brokers, rental
 * fleets and aviation suppliers fill the industrial plots, and the flats behind
 * them house the people who staff all of it. A one-line registry blurb loses
 * every bit of that.
 *
 * The copy is the copy that was already here, cut down. The old title and body
 * sold "units" and space "assigned to your account" — that is the private-unit
 * wording the business rules do not allow. Storage is shared space, billed on
 * what you occupy.
 */

const URL = "https://safestorage.ae/locations/dubai/umm-ramool"

export const metadata: Metadata = {
  title: { absolute: "Storage Umm Ramool | Airport & Cargo Storage | SafeStorage" },
  description:
    "Secure storage in Umm Ramool, Dubai. Door-to-door collection for Cargo Village freight agents, DAFZA companies, airline crew and Al Garhoud homes.",
  keywords:
    "Storage Umm Ramool, Umm Ramool storage, airport storage Dubai, Al Garhoud storage, DAFZA storage, Cargo Village storage, freight forwarder storage Dubai, cabin crew storage Dubai, airline staff storage, car rental fleet storage Dubai, Al Qusais storage, Al Rashidiya storage, business storage Umm Ramool, SafeStorage Umm Ramool",
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
    // sat at /locations/umm-ramool while Arabic sat at
    // /ar/locations/dubai/umm-ramool, so the two never resolved as alternates.
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/umm-ramool",
      "x-default": URL,
    },
  },
}

/*
 * Five questions, and the FAQPage schema is built from this same array — so the
 * markup can never carry a question the page does not show. The old page listed
 * twelve.
 */
const FAQS = [
  {
    q: "Do you collect from the Umm Ramool industrial units?",
    a: "Yes — the industrial plots and the residential side both, along with Al Garhoud, DAFZA, Cargo Village and Al Qusais. Vans come in off Airport Road and Marrakech Street, so a unit tucked behind the front row loads no differently from one on the main strip. If your goods move on a predictable cycle, we can fix a standing slot in the diary instead of you booking each time.",
  },
  {
    q: "Can freight agents store consignments awaiting an onward booking?",
    a: "Yes, and it is the most frequent request we get here. Packaged goods held between bookings, pallets waiting on a movement, and packing and dunnage stock all come to us regularly. Everything is recorded as it arrives, so a consignment can go out in part loads once the booking firms up. Dangerous, perishable and restricted goods are not accepted — send the manifest across first if there is any doubt.",
  },
  {
    q: "I am cabin crew going on a posting. Can you hold my flat contents?",
    a: "Yes — a lot of airport-based crew use us for exactly this. We empty the flat, wrap and photograph everything, and hold it for as long as the posting runs. There is no fixed term, and when you come back we deliver to whichever Dubai address you move into. Tell us your dates when you ask for a quote so long-stay rates can be applied.",
  },
  {
    q: "Do you cover Dubai Airport Free Zone?",
    a: "Yes, DAFZA sits inside this collection area. Free zone companies use us for archived records, sample and demonstration stock, exhibition material between shows, IT equipment during an office move, and inventory that has outgrown the unit. Gate access is arranged by our team before the van arrives, and a company with a steady flow can set up a recurring collection.",
  },
  {
    q: "How do I get one archived file back?",
    a: `Call, WhatsApp or email your consultant with the box reference or a description. The team finds it against the index and delivers it to your Umm Ramool address, normally within ${RETRIEVAL_WINDOW} — ask before midday and same day is often possible. Delivery inside Dubai is part of the service, and anything chargeable beyond that is in your agreement before you commit.`,
  },
]

/** The areas the old page listed in two columns of bullets. */
const AREAS = [
  "Umm Ramool Industrial",
  "Umm Ramool Residential",
  "Al Garhoud",
  "Al Rashidiya",
  "Dubai Airport Terminals 1, 2 & 3",
  "Dubai Airport Free Zone",
  "Cargo Village",
  "Al Qusais 1, 2 & 3",
  "Airport Road corridor",
  "Marrakech Street",
]

/** Neighbouring district pages this one links across to. */
const NEARBY = [
  { slug: "deira", name: "Deira" },
  { slug: "mirdif", name: "Mirdif" },
  { slug: "al-qusais", name: "Al Qusais" },
  { slug: "ras-al-khor", name: "Ras Al Khor" },
  { slug: "dubai-silicon-oasis", name: "Dubai Silicon Oasis" },
  { slug: "business-bay", name: "Business Bay" },
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
    Icon: Plane,
    title: "Consignment overflow",
    desc: "Goods held between bookings and pallets waiting on an onward movement, manifested in and released in part loads.",
  },
  {
    Icon: FileText,
    title: "Airway bills and customs files",
    desc: "Every archive box numbered, labelled and indexed, named files back within two days, certified destruction after.",
  },
  {
    Icon: BedDouble,
    title: "Crew on a posting",
    desc: "Flat contents held while the posting runs, delivered to whichever Dubai address you come back to.",
  },
  {
    Icon: Car,
    title: "Rental fleet kit",
    desc: "Spare parts, roof boxes, child seats, signage and branded material between peaks. The cars stay with you.",
  },
  {
    Icon: Building2,
    title: "DAFZA offices",
    desc: "Archives, sample stock, exhibition material between shows and IT equipment during an office move.",
  },
  {
    Icon: Home,
    title: "Homes off Airport Road",
    desc: "A posting abroad, a gap between tenancies, family arriving for a season, a room held over the summer.",
  },
]

const schemas = [
  locationBusinessSchema({
    name: "Umm Ramool",
    url: URL,
    serves: ["Al Garhoud", "Dubai Airport Free Zone", "Cargo Village", "Al Qusais", "Al Rashidiya"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Document Archival & Storage in Umm Ramool",
    description:
      "Fireproof, indexed archive storage for Umm Ramool freight agents, DAFZA companies and airport-side businesses, with named-file return within two days and certified destruction on expiry.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: URL,
    areaServed: [
      { "@type": "Place", name: "Umm Ramool" },
      { "@type": "Place", name: "Al Garhoud" },
      { "@type": "Place", name: "Dubai Airport Free Zone" },
      { "@type": "Place", name: "Cargo Village" },
      { "@type": "Place", name: "Al Qusais" },
    ],
    serviceType: "Document Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    // Must match the page <title> above — link-preview / interlinking tools read
    // this WebPage name and showed it in place of the title when they disagreed.
    name: "Storage Umm Ramool | Airport & Cargo Storage | SafeStorage",
    description:
      "Secure storage in Umm Ramool, Dubai. Door-to-door collection for Cargo Village freight agents, DAFZA companies, airline crew and Al Garhoud homes.",
    url: URL,
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
    dateModified: "2026-11-05",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://safestorage.ae/locations" },
      { "@type": "ListItem", position: 3, name: "Dubai", item: "https://safestorage.ae/locations/dubai" },
      { "@type": "ListItem", position: 4, name: "Umm Ramool", item: URL },
    ],
  },
  faqPageSchema(FAQS),
]

export default function UmmRamoolPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Umm Ramool" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${p.split2Wrap} ${p.areaHero}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Area}`}>
              <span className={s.heroTag}>Dubai · Umm Ramool</span>
              <h1>
                Storage for Umm Ramool — <em>we collect, store and bring it back.</em>
              </h1>
              <p>Cargo agents, DAFZA offices, crew flats and homes off Airport Road.</p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a Free Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1400 / 789" } as CSSProperties}>
              <Image
                src="/landing/umm-ramool.webp"
                alt="A SafeStorage crew loading a wrapped appliance into the van beside Dubai International Airport"
                width={1400}
                height={789}
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
                We come to Umm Ramool <br className={s.mBreak} />
                <em>and take it from there.</em>
              </h2>
            </div>
            <FeatScroller>
              {[
                {
                  Icon: Truck,
                  h: "Unit, bay or tower flat",
                  pp: "The crew comes to your address off Airport Road or Marrakech Street and loads from the door.",
                },
                {
                  Icon: PackageOpen,
                  h: "Wrapped where it stands",
                  pp: "Things are wrapped at your address before they move, not later at the warehouse.",
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
              <span className={s.howEyebrow}>What Umm Ramool stores</span>
              <h2>
                Why people here <em>call us.</em>
              </h2>
            </div>
            <p>Freight that is waiting, crew who are away, and flats in between.</p>
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
                Storage in Umm Ramool, <em>specifically.</em>
              </h2>
            </div>
          </div>
          <div className={`${s.prose} ${p.proseFlush}`}>
            <p>
              Umm Ramool is defined by what sits next to it. Dubai International lies on one side, the
              free zone and the cargo terminals on another, and the district has grown around
              servicing the traffic that passes through them. Freight consolidators, customs brokers,
              rental fleets, aviation suppliers and workshops fill the industrial plots, and the
              apartment blocks behind them house a large share of the people who staff them.
            </p>
            <p>
              Storage demand follows that rhythm. Someone is always arriving, departing, expanding for
              a peak or contracting after one. Ground beside the terminals is priced for speed, not
              for keeping things still — so the pallet that has not moved since March is the one
              paying for it.
            </p>
          </div>
          <div className={s.movingTip}>
            <span aria-hidden="true">📍</span>
            <p>
              <strong>Where your things actually go.</strong> {storageLocationSentence("dubai")} We
              collect from your address in Umm Ramool, so you do not need to drive anything anywhere.
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
                  b: "A room count, a stock list, a manifest or a few photographs is enough for a free, itemised quote.",
                },
                {
                  Icon: Truck,
                  t: "We come to Umm Ramool",
                  b: "The crew arrives on the agreed date, wraps everything and loads from your door.",
                },
                {
                  Icon: ShieldCheck,
                  t: "Logged and stored",
                  b: "Everything is listed on the inventory you sign, then held indoors under camera.",
                },
                {
                  Icon: RotateCcw,
                  t: "Delivered back",
                  b: `All of it or one box of it, to the address you name, normally within ${RETRIEVAL_WINDOW}.`,
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
                The plots, the free zone <em>and the flats behind them.</em>
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
                Questions from <em>Umm Ramool.</em>
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
              <Link href={MONEY_PAGE}>{moneyAnchor("/locations/dubai/umm-ramool")}</Link>
            </li>
          </div>
        </section>

        <CtaBand
          title="Storing something from Umm Ramool?"
          blurb="Free quote, no survey fee, and nothing booked until you agree both numbers — the storage and the transport."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
