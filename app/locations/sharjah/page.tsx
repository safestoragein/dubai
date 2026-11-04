import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Armchair,
  Boxes,
  Building2,
  ClipboardList,
  GraduationCap,
  Home,
  MapPin,
  PackageOpen,
  RotateCcw,
  Ruler,
  ShieldCheck,
  Store,
  Sun,
  Truck,
} from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocalProof from "@/components/locations/local-proof"
import { locationBusinessSchema } from "@/lib/structured-data"
import { SHARJAH_AREAS } from "@/lib/sharjah-areas"
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
 * ONE Sharjah page, not ten.
 *
 * The district terms (Al Nahda, Al Majaz, Muwaileh, Al Qasimia, Rolla,
 * Al Taawun, Al Khan, University City) return no measurable volume when paired
 * with storage terms, so they are covered as served-area copy INSIDE this page
 * — where they still catch the long tail — instead of ten pages nobody searches
 * for. The demand that exists is the city head terms (~620/mo combined):
 * self storage sharjah · storage in sharjah · storage space in sharjah ·
 * storage units sharjah · cheap storage sharjah · furniture storage sharjah.
 *
 * FACILITY CLAIMS: SafeStorage operates a warehouse in Sharjah. Its address is
 * not published yet, so this page states the facility exists without naming a
 * street — lib/facilities.ts owns that, and filling the address in there updates
 * this page automatically. Never invent or approximate an address (GBP
 * suspension risk). Every figure below is imported; nothing is retyped.
 *
 * REDESIGN NOTE. This hub is written by hand rather than drawn by EmirateHub,
 * and it keeps its own copy: the space guide, the honest comparison against a
 * storage yard (including where a yard wins), and the paragraph saying plainly
 * that this is a managed service and not a door you can open at midnight. The
 * only wording that changed is "unit" where it described what WE sell — storage
 * here is shared space billed on what you occupy. Where it describes a rented
 * yard elsewhere, it is left alone, because there it is simply true.
 */

const URL = "https://safestorage.ae/locations/sharjah"

/*
 * Five questions, and the FAQPage schema is built from this same slice — so the
 * markup cannot claim a question the page does not show. It used to render
 * every question emirateFaqs returns while the schema carried only five.
 */
const FAQS = emirateFaqs({
  emirate: "Sharjah",
  facilityKey: "sharjah",
  sampleDistricts: ["Al Nahda", "Al Majaz"],
  university: "University of Sharjah",
}).slice(0, 5)

export const metadata: Metadata = {
  title: { absolute: "Self Storage in Sharjah | Door-to-Door Collection | SafeStorage" },
  // Brief's wording, with pricing removed: the site does not publish our rates.
  description: `Storage for Sharjah homes and businesses. We collect from your door, store securely, deliver back. Free quote in 2 minutes.`,
  keywords:
    "self storage sharjah, storage in sharjah, storage space in sharjah, storage units sharjah, cheap storage sharjah, furniture storage sharjah, household storage sharjah, storage sharjah al nahda, storage al majaz, storage al taawun, storage muwaileh, storage near me sharjah, SafeStorage Sharjah",
  openGraph: {
    title: "Self Storage Sharjah | Door-to-Door Pickup",
    description: `Storage for Sharjah homes and businesses, with collection from your door.`,
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage — self storage for Sharjah" }],
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: URL,
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations/sharjah",
      "x-default": URL,
    },
  },
}

const schemas = [
  locationBusinessSchema({ name: "Sharjah", url: URL, serves: SHARJAH_AREAS.map((a) => a.name) }),
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    name: "Self Storage in Sharjah | Door-to-Door Collection | SafeStorage",
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
      { "@type": "ListItem", position: 3, name: "Sharjah", item: URL },
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

const USES = [
  {
    Icon: Home,
    title: "Flats and villas",
    desc: "Towers with no cupboard space, and villas being opened up. Lift bookings and building permission handled by the crew.",
  },
  {
    Icon: Truck,
    title: "Moving between tenancies",
    desc: "The Sharjah lease ends before the next one starts. We hold everything across the gap, either side of the Dubai border.",
  },
  {
    Icon: GraduationCap,
    title: "Student accommodation",
    desc: "University City rooms emptied over the summer and put back before term, rather than carting it home.",
  },
  {
    Icon: Store,
    title: "Offices and shops",
    desc: "Stock, files and fittings off floor space you pay commercial rates for — Rolla, Al Qasimia and the Industrial Areas.",
  },
  {
    Icon: Sun,
    title: "Furniture over the summer",
    desc: "Rather than pay rent on an empty flat while you are away for months, empty it and store the contents.",
  },
  {
    Icon: Armchair,
    title: "Things that simply accumulated",
    desc: "In the older Al Majaz and Al Qulayaah flats the problem is rarely a move. It is years of accumulation.",
  },
]

/* Indicative space, in sq ft, as the old table had it. Measured from what we
   actually collect, never estimated from the size of a home. */
const SPACE = [
  { what: "A few boxes and a bicycle", who: "Student room, seasonal kit", size: "~15–25 sq ft" },
  { what: "Studio or 1-bed flat", who: "Al Nahda, Al Taawun, Abu Shagara towers", size: "~40–60 sq ft" },
  { what: "2-bed flat", who: "Al Majaz, Buhaira Corniche, Al Khan", size: "~70–90 sq ft" },
  { what: "3-bed flat or small villa", who: "Al Qasimia, Al Qulayaah, Maysaloon", size: "~100–130 sq ft" },
  { what: "Villa or townhouse", who: "Muwaileh, Al Zahia, Al Mowaihat", size: "~150–220 sq ft" },
  { what: "Business stock or archive", who: "Rolla, Al Qasimia, Industrial Areas", size: "from ~20 sq ft" },
]

export default function SharjahPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Sharjah" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${p.split2Wrap} ${p.areaHero}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Area}`}>
              <span className={s.heroTag}>Serving Sharjah</span>
              <h1>
                Self Storage in Sharjah — <em>we collect, store and bring it back.</em>
              </h1>
              <p>No driving to a yard, no van hire, no lifting. We come to your door.</p>
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
                src="/landing/sharjah-hub-hero.webp"
                alt="A SafeStorage crew loading boxes into the van on the Sharjah corniche, with Al Noor Mosque and the lagoon behind"
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
                We come to Sharjah <br className={s.mBreak} />
                <em>and take it from there.</em>
              </h2>
            </div>
            <FeatScroller>
              {[
                {
                  Icon: Home,
                  h: "Collected from your door",
                  pp: "The crew comes to your Sharjah address, wraps what is going and carries it down.",
                },
                {
                  Icon: PackageOpen,
                  h: "Wrapped where it stands",
                  pp: "Furniture is wrapped at your property before it moves, not later at the warehouse.",
                },
                { Icon: ShieldCheck, h: "Indoors and covered", pp: CCTV_COVERAGE },
                {
                  Icon: Ruler,
                  h: "No size to grow into",
                  pp: "Billed on the floor space your things occupy, not on a size you have to fill. Store a fortnight or for years.",
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
              <span className={s.howEyebrow}>What Sharjah stores</span>
              <h2>
                Why people here <em>call us.</em>
              </h2>
            </div>
            <p>Towers on the Dubai line, family flats by the lagoon, and the trade in Rolla and the industrial areas.</p>
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

        {/* the emirate in brief, and what we do NOT offer */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>In brief</span>
              <h2 className={p.longH2}>
                Storage in Sharjah, <em>specifically.</em>
              </h2>
            </div>
          </div>
          <div className={`${s.prose} ${p.proseFlush}`}>
            <p>
              The Sharjah move rarely lines up. A very large share of residents work in Dubai and
              chose Sharjah for the rent, so the lease that ends and the lease that begins sit either
              side of a border and almost never on the same day. Most of the towers here are one and
              two-bedroom flats with no storage room at all, which is why the gap becomes a problem
              rather than an inconvenience.
            </p>
            <p>
              <strong>What we do not offer.</strong> A door you hold the key to and visit at will.
              This is a managed service: we collect, we store, and we deliver back on request,
              normally within {RETRIEVAL_WINDOW}. If what you actually want is somewhere you can open
              at midnight, a Sharjah storage yard will suit you better, and we would rather say that
              now than after you have booked. {FACILITY_ACCESS_NOTE}.
            </p>
          </div>
          <div className={s.movingTip}>
            <span aria-hidden="true">📍</span>
            <p>
              <strong>Where your things actually go.</strong> {storageLocationSentence("sharjah")} We
              collect from your address in Sharjah, so you do not need to drive anything anywhere.
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
                Four steps, <em>and you lift nothing.</em>
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
                  t: "We come to Sharjah",
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

        {/* the space guide — the old sqft table, as cards */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Storage space</span>
              <h2 className={p.longH2}>
                How much space <em>do you actually need?</em>
              </h2>
            </div>
            <p>
              A yard sells you a size and you pay for all of it. We measure what your things occupy
              and bill that. Roughly, homes come out like this.
            </p>
          </div>
          <div className={s.miniGrid}>
            {SPACE.map((row, i) => (
              <div className={s.miniCard} key={row.what}>
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
                  <Boxes />
                </span>
                <div>
                  <b>
                    {row.what} — {row.size} (Estimated)
                  </b>
                  <small>{row.who}</small>
                </div>
              </div>
            ))}
          </div>
          <div className={s.movingTip} style={{ marginTop: 18 }}>
            <span aria-hidden="true">📏</span>
            <p>
              <strong>Estimates only.</strong> Your actual space is measured from what we collect, not
              from the size of your home — two identical flats can differ by half if one owns more
              furniture. Transport from your Sharjah address is quoted separately, and nothing is
              booked until you have agreed your free, itemised quote.
            </p>
          </div>
        </section>

        {/* the honest comparison, including where a yard wins */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Compared honestly</span>
              <h2 className={p.longH2}>
                A storage yard, <em>or this.</em>
              </h2>
            </div>
            <p>
              Sharjah has good self-storage companies. They are the right answer for some people and
              the wrong one for others — including where they win.
            </p>
          </div>
          <div className={s.duo}>
            <div className={s.panel}>
              <h3>Renting a yard in Sharjah</h3>
              <div className={s.factorList}>
                {[
                  "You get it there — van hire, loading, two trips",
                  "You do the packing and the wrapping",
                  "You arrange the lift, the bay and the permission",
                  "You pay for the whole space, filled or not",
                  "You can turn up at midnight — this is where a yard wins",
                  "Often a one to three month minimum",
                ].map((line) => (
                  <div className={s.factorRow} key={line}>
                    <span className={s.factorIcon} aria-hidden="true">
                      <Building2 />
                    </span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={s.panel}>
              <h3>SafeStorage</h3>
              <div className={s.factorList}>
                {[
                  "We collect from your door",
                  "Our crew wraps and loads",
                  "We arrange the lift, the bay and the permission",
                  "You pay only for the space your items occupy",
                  `One item back, delivered to your door within ${RETRIEVAL_WINDOW}`,
                  "No minimum term. A fortnight is a fortnight",
                ].map((line) => (
                  <div className={s.factorRow} key={line}>
                    <span className={s.factorIcon} aria-hidden="true">
                      <Truck />
                    </span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* the districts, as one moving line */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Collection coverage</span>
              <h2 className={p.longH2}>
                Districts we <em>collect from.</em>
              </h2>
            </div>
            <p>Not a list of facilities — a list of places our van comes to.</p>
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
                    {SHARJAH_AREAS.map((a, i) =>
                      half === 0 ? (
                        <Link
                          className={s.chip}
                          href={`/locations/sharjah/${a.slug}`}
                          key={`${half}-${a.slug}`}
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
                          {a.name}
                        </Link>
                      ) : (
                        <span
                          className={s.chip}
                          key={`${half}-${a.slug}`}
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
                          {a.name}
                        </span>
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Renders nothing until real Sharjah quotes exist — see lib/local-proof.ts. */}
        <LocalProof emirateSlug="sharjah" emirate="Sharjah" />

        <LandingReviews padTop={0} />

        {/* five questions — the same five the FAQPage schema carries */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={p.longH2}>
                Questions from <em>Sharjah.</em>
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
            {EMIRATES.filter((e) => e.slug !== "sharjah").map((e, i) => (
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
              <Link href={MONEY_PAGE}>{moneyAnchor("/locations/sharjah")}</Link>
            </li>
          </div>
        </section>

        <CtaBand
          title="Storing something from Sharjah?"
          blurb="Free quote, no survey fee, and nothing booked until you agree both numbers — the storage and the transport."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
