import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BedDouble,
  Boxes,
  ClipboardList,
  FileText,
  GraduationCap,
  Home,
  MapPin,
  PackageOpen,
  Printer,
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
 * /locations/dubai/al-qusais — the district page, in the homepage design.
 *
 * Written by hand rather than drawn from lib/areas. Al Qusais is one of the
 * most densely lived-in districts in Dubai, with five industrial sub-districts
 * behind the apartment blocks and the Sharjah border close enough that
 * thousands cross it daily — and that border is what defines the storage need
 * here. None of that survives a one-line registry blurb.
 *
 * The copy is the copy that was already here, cut down. The title, the meta
 * description and the body sold "units", which is the private-unit wording the
 * business rules do not allow: storage is shared space, billed on what you
 * occupy.
 */

const URL = "https://safestorage.ae/locations/dubai/al-qusais"

export const metadata: Metadata = {
  title: { absolute: "Storage Al Qusais | Industrial & Home Storage | SafeStorage" },
  description:
    "Secure storage in Al Qusais, Dubai. Home and business storage with door-to-door collection for Al Nahda flats, printing firms and Sharjah-border movers.",
  keywords:
    "Storage Al Qusais, Al Qusais storage, Al Qusais Industrial storage, Al Nahda storage, storage near Sharjah border, Dubai Sharjah moving storage, printing press storage Dubai, packaging storage Al Qusais, school storage Dubai, staff accommodation storage, Muhaisnah storage, Al Twar storage, Abu Hail storage, SafeStorage Al Qusais",
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
    // sat at /locations/al-qusais while Arabic sat at
    // /ar/locations/dubai/al-qusais, so the two never resolved as alternates.
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/al-qusais",
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
    q: "Do you collect from Al Qusais Industrial?",
    a: "Yes — Industrial 1 through 5, the residential districts, Al Nahda, Al Twar, Abu Hail and Hor Al Anz. Vans come in off Damascus Street and Amman Street, so a tower flat and a back-row industrial unit are equally reachable. A firm moving stock on a cycle can set a standing collection instead of booking each time.",
  },
  {
    q: "I'm moving to Sharjah and the dates don't line up. Can you help?",
    a: "Yes, and it is the most common reason this district calls. We collect before you hand the keys back, hold everything for as long as the gap runs, and deliver to the new address on the day you name — whichever side of the border it is on. There is no minimum term, so a fortnight is fine.",
  },
  {
    q: "Can print houses store paper stock and finished runs?",
    a: "Yes. Paper reels, print stock, packaging inventory, signage and display material between installations. Everything is held indoors and wrapped before loading, which matters more for paper than for most goods, and called forward in part loads as a job needs it.",
  },
  {
    q: "Do you work with schools over the summer?",
    a: "Yes. Furniture, equipment and teaching material come out at the end of term and go back before the new one starts, so a building can be cleaned, painted or refitted in between. Book the collection and the return together and the dates are held.",
  },
  {
    q: "How small a job will you take from an Al Nahda flat?",
    a: `As small as you like — a few boxes and a mattress is a normal booking here. You are billed on the floor space your things occupy rather than a size you have to fill, and you can have part of it back without closing the account, normally within ${RETRIEVAL_WINDOW}.`,
  },
]

/** The areas the old page listed in two columns of bullets. */
const AREAS = [
  "Al Qusais 1, 2 & 3",
  "Al Qusais Industrial 1–5",
  "Al Nahda 1 & 2",
  "Al Twar 1, 2 & 3",
  "Abu Hail",
  "Hor Al Anz",
  "Muhaisnah",
  "Al Mamzar",
  "Damascus Street",
  "Dubai–Sharjah border corridor",
]

/** Neighbouring district pages this one links across to. */
const NEARBY = [
  { slug: "deira", name: "Deira" },
  { slug: "mirdif", name: "Mirdif" },
  { slug: "ras-al-khor", name: "Ras Al Khor" },
  { slug: "dubai-silicon-oasis", name: "Dubai Silicon Oasis" },
  { slug: "business-bay", name: "Business Bay" },
  { slug: "al-quoz", name: "Al Quoz" },
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
    Icon: Truck,
    title: "Moving across the border",
    desc: "Rents move at different speeds either side of the line and the dates rarely meet. We hold everything across the gap.",
  },
  {
    Icon: Home,
    title: "Flats on Damascus Street",
    desc: "A housemate changing over, relatives arriving, a cot and a pram outgrown. Small jobs are normal here.",
  },
  {
    Icon: Printer,
    title: "Printing and packaging",
    desc: "Paper reels, print stock, packaging inventory and signage between installations, held indoors and called forward.",
  },
  {
    Icon: GraduationCap,
    title: "Schools over the summer",
    desc: "Furniture and teaching equipment out at the end of term so a building can be cleaned or refitted, back before September.",
  },
  {
    Icon: BedDouble,
    title: "Staff accommodation",
    desc: "Belongings held while rooms turn over, or while someone is away on long leave.",
  },
  {
    Icon: FileText,
    title: "Records and archives",
    desc: "Every file box numbered, labelled and indexed before it goes in, returned within two days, destroyed under certificate after.",
  },
]

const schemas = [
  locationBusinessSchema({
    name: "Al Qusais",
    url: URL,
    serves: ["Al Nahda", "Al Twar", "Abu Hail", "Hor Al Anz", "Muhaisnah", "Al Mamzar"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Document Archival & Storage in Al Qusais",
    description:
      "Fireproof, indexed records storage for Al Qusais trading houses, contractors and workshops, with requested files returned within two days and certified destruction on expiry.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: URL,
    areaServed: [
      { "@type": "Place", name: "Al Qusais" },
      { "@type": "Place", name: "Al Nahda" },
      { "@type": "Place", name: "Al Twar" },
      { "@type": "Place", name: "Abu Hail" },
      { "@type": "Place", name: "Hor Al Anz" },
    ],
    serviceType: "Document Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    // Must match the page <title> above — link-preview / interlinking tools read
    // this WebPage name and showed it in place of the title when they disagreed.
    name: "Storage Al Qusais | Industrial & Home Storage | SafeStorage",
    description:
      "Secure storage in Al Qusais, Dubai. Home and business storage with door-to-door collection for Al Nahda flats, printing firms and Sharjah-border movers.",
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
      { "@type": "ListItem", position: 4, name: "Al Qusais", item: URL },
    ],
  },
  faqPageSchema(FAQS),
]

export default function AlQusaisPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Al Qusais" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${p.split2Wrap} ${p.areaHero}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Area}`}>
              <span className={s.heroTag}>Dubai · Al Qusais</span>
              <h1>
                Storage for Al Qusais — <em>we collect, store and bring it back.</em>
              </h1>
              <p>Flats, workshops and the Sharjah border, collected from your door.</p>
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
                src="/landing/al-qusais-hero.webp"
                alt="A SafeStorage crew loading boxes into the van, with racked cartons in the warehouse behind them"
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
                We come to Al Qusais <br className={s.mBreak} />
                <em>and take it from there.</em>
              </h2>
            </div>
            <FeatScroller>
              {[
                {
                  Icon: Home,
                  h: "Stairs or lift, we load",
                  pp: "The crew comes to your flat or your unit, wraps what is going and carries it down.",
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
                  pp: "Billed on the floor space your things occupy, not on a size you have to fill. No minimum term.",
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
              <span className={s.howEyebrow}>What Al Qusais stores</span>
              <h2>
                Why people here <em>call us.</em>
              </h2>
            </div>
            <p>Dense flats, five industrial sub-districts, and a border a few minutes away.</p>
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
                Storage in Al Qusais, <em>specifically.</em>
              </h2>
            </div>
          </div>
          <div className={`${s.prose} ${p.proseFlush}`}>
            <p>
              Al Qusais is one of the most populous districts in Dubai. Apartment blocks line Damascus
              Street, five industrial sub-districts sit behind them, and the Sharjah border is close
              enough that thousands of residents cross it every day. Schools, workshops, print houses
              and trading offices are folded into the same few square kilometres.
            </p>
            <p>
              The storage follows from that. Flats are small and often shared. Industrial rent here is
              low enough that floors end up buried under stock that has not moved in a year. And
              families move across the emirate line constantly as rents shift on either side, which
              means somebody is always waiting on a date that has not landed yet.
            </p>
          </div>
          <div className={s.movingTip}>
            <span aria-hidden="true">📍</span>
            <p>
              <strong>Where your things actually go.</strong> {storageLocationSentence("dubai")} We
              collect from your address in Al Qusais, so you do not need to drive anything anywhere.
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
                  b: "A room count, a stock list or a few photographs is enough for a free, itemised quote.",
                },
                {
                  Icon: Truck,
                  t: "We come to Al Qusais",
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
                  b: `All of it or part of it, either side of the border, normally within ${RETRIEVAL_WINDOW}.`,
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
                The flats, the units <em>and the border run.</em>
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
                Questions from <em>Al Qusais.</em>
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
              <Link href={MONEY_PAGE}>{moneyAnchor("/locations/dubai/al-qusais")}</Link>
            </li>
          </div>
        </section>

        <CtaBand
          title="Storing something from Al Qusais?"
          blurb="Free quote, no survey fee, and nothing booked until you agree both numbers — the storage and the transport."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
