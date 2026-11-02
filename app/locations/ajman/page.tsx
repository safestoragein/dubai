import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Building2,
  ClipboardList,
  Home,
  KeyRound,
  MapPin,
  MoveVertical,
  PackageOpen,
  RotateCcw,
  Ruler,
  ShieldCheck,
  Sofa,
  Truck,
} from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocalProof from "@/components/locations/local-proof"
import { locationBusinessSchema } from "@/lib/structured-data"
import { storageLocationSentence } from "@/lib/facilities"
import { emirateFaqs } from "@/lib/emirate-faqs"
import { SILOS, MONEY_PAGE, HUB_ORDER, moneyAnchor } from "@/lib/silo/silos"
import { EMIRATES } from "@/lib/areas/registry"
import { CCTV_COVERAGE, FACILITY_ACCESS_NOTE, RETRIEVAL_WINDOW } from "@/lib/company-facts"
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
 * Ajman — the emirate hub, in the homepage design.
 *
 * Ajman and Sharjah are the two hubs written by hand rather than drawn by
 * EmirateHub, and this one keeps its own copy: the commuter pattern, the Free
 * Zone stock, and the "what we do not offer" paragraph that says plainly this
 * is a managed service and not a yard with keys. That paragraph earns its place
 * and stays.
 *
 * SafeStorage operates a warehouse in Ajman, so goods collected here stay in
 * the emirate. That address is NOT published yet — lib/facilities.ts owns which
 * facilities exist and which addresses may be shown, and every claim on this
 * page reads from it. Fill in the Ajman address there and this page updates
 * itself. Never invent or approximate one.
 */

const URL = "https://safestorage.ae/locations/ajman"

const AJMAN_AREAS = [
  "Al Nuaimiya",
  "Al Rashidiya",
  "Al Jurf",
  "Ajman Corniche",
  "Al Rumailah",
  "Al Mowaihat",
  "Al Hamidiya",
  "Emirates City",
  "Ajman Free Zone",
  "Al Bustan",
  "Garden City",
  "Al Zahra",
]

/*
 * Five questions, and the FAQPage schema below is built from this same array.
 * It used to render every question emirateFaqs returns while the schema carried
 * only the first five, so the markup and the page disagreed about what the page
 * contained. One slice, used twice.
 */
const FAQS = emirateFaqs({
  emirate: "Ajman",
  facilityKey: "ajman",
  sampleDistricts: ["Al Nuaimiya", "Al Rashidiya"],
  university: "Ajman University",
}).slice(0, 5)

export const metadata: Metadata = {
  title: { absolute: "Self Storage Ajman | Storage Space With Door-to-Door Pickup" },
  description: `Self storage in Ajman. We collect from Al Nuaimiya, Al Rashidiya, Al Jurf and the Corniche — we wrap, load and store. No minimum term.`,
  keywords:
    "self storage ajman, storage in ajman, storage space in ajman, storage units ajman, cheap storage ajman, furniture storage ajman, household storage ajman, storage near me ajman, SafeStorage Ajman",
  openGraph: {
    title: "Self Storage Ajman | Storage Space With Door-to-Door Pickup",
    description: `Storage for Ajman homes and businesses, collected from your door. Get a free, itemised quote.`,
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage — self storage for Ajman" }],
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: URL,
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations/ajman",
      "x-default": URL,
    },
  },
}

const schemas = [
  locationBusinessSchema({ name: "Ajman", url: URL, serves: AJMAN_AREAS }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Self Storage in Ajman with Door-to-Door Collection",
    description:
      "Household and business storage for Ajman residents. Items are collected from your Ajman address and stored at the SafeStorage facility in Ajman.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: URL,
    serviceType: "Self Storage",
    areaServed: ["Ajman", ...AJMAN_AREAS].map((name) => ({ "@type": "Place", name })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    name: "Self Storage Ajman | Storage Space With Door-to-Door Pickup",
    url: URL,
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://safestorage.ae/locations" },
      { "@type": "ListItem", position: 3, name: "Ajman", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

const TINTS = [
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
]

/** The reasons Ajman actually calls — the page's own three, plus its coverage rows. */
const USES = [
  {
    Icon: KeyRound,
    title: "Moving to Dubai or Sharjah",
    desc: "Many Ajman residents work further down the coast. We hold everything between the tenancy that ends and the one that starts.",
  },
  {
    Icon: Sofa,
    title: "Furniture from a family flat",
    desc: "Ajman flats are larger and cheaper than Dubai's, and they fill up accordingly. What you are keeping but cannot live around comes to us.",
  },
  {
    Icon: Building2,
    title: "Business and Free Zone stock",
    desc: "Inventory, files and equipment off floor space you are paying commercial rates for, brought back when you need it.",
  },
  {
    Icon: MoveVertical,
    title: "Flats and villas",
    desc: "Lift bookings and building permissions handled by the crew, not left to you.",
  },
  {
    Icon: Truck,
    title: "Cross-emirate moves",
    desc: "Delivery to Dubai or Sharjah rather than back to Ajman, if that is where you are going.",
  },
  {
    Icon: Home,
    title: "Between tenancies",
    desc: "Collected before you hand the keys back, delivered when the next place is ready.",
  },
]

export default function AjmanPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Ajman" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${p.split2Wrap} ${p.areaHero}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Area}`}>
              <span className={s.heroTag}>Serving Ajman</span>
              <h1>
                Storage for Ajman — <em>we collect, store and bring it back.</em>
              </h1>
              <p>We pick up from your door and store it in our own Ajman facility.</p>
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
                src="/landing/ajman-hero.webp"
                alt="A family on their balcony above the water reading a storage quote, with packed SafeStorage boxes beside them"
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

        {/* dark band: the old "a unit is only cheap if you do the moving" argument */}
        <section className={`${s.darkBand} ${s.whyBand}`} style={{ marginTop: 18 }}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Why not a storage yard</span>
              <h2>
                A yard is only cheap <br className={s.mBreak} />
                <em>if you do the moving.</em>
              </h2>
            </div>
            <FeatScroller>
              {[
                {
                  Icon: Truck,
                  h: "We do the lifting",
                  pp: "A quoted yard rate never includes the van, the driver or the two men. Our collection does.",
                },
                {
                  Icon: Ruler,
                  h: "Measured, not guessed",
                  pp: "Billed on the floor space your items occupy, so half-empty space is not your problem.",
                },
                { Icon: ShieldCheck, h: "Indoors and covered", pp: CCTV_COVERAGE },
                {
                  Icon: RotateCcw,
                  h: "Partial retrieval",
                  pp: `One box or all of it, normally within ${RETRIEVAL_WINDOW}.`,
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

        {/* why people here call — the hub's own reasons, as cards */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 26, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>What Ajman stores</span>
              <h2>
                Why people here <em>call us.</em>
              </h2>
            </div>
            <p>Commuter flats, Free Zone units, and moves that cross an emirate line.</p>
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

        {/* the emirate in brief, the facility claim, and what we do NOT offer */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>In brief</span>
              <h2 className={p.longH2}>
                Storage in Ajman, <em>specifically.</em>
              </h2>
            </div>
          </div>
          <div className={`${s.prose} ${p.proseFlush}`}>
            <p>
              Ajman is the most affordable place to rent on this stretch of coast, which is exactly
              why so many of its residents work somewhere else. Al Nuaimiya, Al Rashidiya and the
              Corniche towers are full of people commuting into Sharjah and Dubai, and that produces
              the same pattern as the rest of the northern emirates: frequent moves, handovers that
              never align, and flats with more furniture than cupboard space.
            </p>
            <p>
              <strong>What we do not offer.</strong> This is a managed service, not a yard with keys.
              We collect, we store and we deliver back on request — normally within {RETRIEVAL_WINDOW}.
              What you do not get is a unit you can drive to and open at any hour. If that is what you
              want, an Ajman self-storage yard will serve you better than we will, and we would rather
              say so here than after you have booked. {FACILITY_ACCESS_NOTE}.
            </p>
          </div>
          <div className={s.movingTip}>
            <span aria-hidden="true">📍</span>
            <p>
              <strong>Where your things actually go.</strong> {storageLocationSentence("ajman")} We
              collect from your address in Ajman, so you do not need to drive anything anywhere.
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
                  t: "We come to Ajman",
                  b: "The crew arrives on the agreed date, wraps everything and loads the van.",
                },
                {
                  Icon: PackageOpen,
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

        {/* the districts the van comes to */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Collection coverage</span>
              <h2 className={p.longH2}>
                We come to <em>your address.</em>
              </h2>
            </div>
            <p>Not a list of facilities — a list of places our van comes to.</p>
          </div>
          {/*
            One line that keeps moving, rather than wrapped rows. The track holds
            two identical halves and slides exactly one half, so the loop has no
            visible seam; the second half is aria-hidden so a screen reader hears
            the list once. Hovering pauses it.
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
                    {AJMAN_AREAS.map((a, i) => (
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

        {/* Renders nothing until real Ajman quotes exist — see lib/local-proof.ts. */}
        <LocalProof emirateSlug="ajman" emirate="Ajman" />

        <LandingReviews padTop={0} />

        {/* five questions — the same five the FAQPage schema carries */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={p.longH2}>
                Questions from <em>Ajman.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={FAQS} />
        </section>

        {/* the ring of emirate hubs, plus the silo hubs and the money page */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Also serving</span>
              <h2 className={p.longH2}>
                Storage in <em>the other emirates.</em>
              </h2>
            </div>
            <p>Same crews, same service. Each page carries what matters locally.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {EMIRATES.filter((e) => e.slug !== "ajman").map((e, i) => (
              <Link
                href={`/locations/${e.slug}`}
                className={s.chip}
                key={e.slug}
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
                {e.name}
              </Link>
            ))}
          </div>
          <div className={s.miniFacts} style={{ marginTop: 20 }}>
            <li style={{ listStyle: "none" }}>
              <Link href="/locations">All locations</Link>
            </li>
            {HUB_ORDER.filter((k) => k !== "s4").map((k) => (
              <li key={SILOS[k].hub} style={{ listStyle: "none" }}>
                <Link href={SILOS[k].hub}>{SILOS[k].name}</Link>
              </li>
            ))}
            <li style={{ listStyle: "none" }}>
              <Link href={MONEY_PAGE}>{moneyAnchor("/locations/ajman")}</Link>
            </li>
          </div>
        </section>

        <CtaBand
          title="Tell us what is in the way."
          blurb="Free quote, no survey fee, and nothing booked until you agree both numbers — the storage and the transport."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
