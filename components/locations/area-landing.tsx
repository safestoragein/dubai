import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import {
  Armchair,
  BedDouble,
  Boxes,
  Building2,
  CalendarDays,
  ClipboardList,
  Frame,
  Globe,
  GraduationCap,
  HardHat,
  Home,
  Luggage,
  MapPin,
  MoveVertical,
  Package,
  PackageOpen,
  Plane,
  RotateCcw,
  Ruler,
  ShieldCheck,
  Sofa,
  Truck,
  Waves,
} from "lucide-react"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { emirateFaqs } from "@/lib/emirate-faqs"
import { storageLocationSentence } from "@/lib/facilities"
import { SILOS, MONEY_PAGE, HUB_ORDER, moneyAnchor } from "@/lib/silo/silos"
import type { Area, EmirateDef } from "@/lib/areas/types"
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

/**
 * The homepage-design renderer for ONE district page — /locations/{emirate}/{area}.
 *
 * WHY IT IS GATED ON A PHOTO. AreaPage draws 67 district pages. Only the
 * districts the owner has supplied a photo for are drawn here; every other
 * district keeps the older emirate-theme renderer untouched, so converting one
 * district never silently restyles sixty-six others. Add a district to
 * AREA_HERO below and that district — and only that district — moves over.
 *
 * WHAT THIS PAGE HAS TO GET RIGHT. The facility claim. Abu Dhabi has no
 * warehouse of its own; that sentence is read from lib/facilities.ts rather
 * than written into copy here, and must not be softened. The copy is the
 * district's existing copy from lib/areas — nothing invented, no prices.
 *
 * FIVE QUESTIONS, NOT TWELVE. The older renderer printed the district's own
 * questions followed by the canonical ten. visibleAreaFaqs() is the single
 * source of truth for what is shown, and the route builds the FAQPage schema
 * from the same function so the markup can never list questions the page does
 * not display.
 */

/**
 * Districts the owner has supplied a photo for, keyed `emirate/area`.
 * A photo with a district's own street sign in it would be plainly wrong on
 * any other district, so it is never reused.
 */
export const AREA_HERO: Record<string, { src: string; alt: string }> = {
  "abu-dhabi/al-raha": {
    src: "/landing/al-raha-hero.webp",
    alt: "A SafeStorage crew loading wrapped furniture into the van outside a waterfront building in Al Raha, Abu Dhabi",
  },
  "abu-dhabi/saadiyat-island": {
    src: "/landing/saadiyat-island-hero.webp",
    alt: "A SafeStorage crew carrying a wrapped framed artwork to the van outside a villa on Saadiyat Island, Abu Dhabi",
  },
  "abu-dhabi/al-reem-island": {
    src: "/landing/al-reem-island-hero.webp",
    alt: "A SafeStorage crew loading wrapped furniture into the van outside a tower on Al Reem Island, Abu Dhabi",
  },
  "abu-dhabi/al-mushrif": {
    src: "/landing/al-mushrif-hero.webp",
    alt: "A SafeStorage crew wheeling a wrapped armchair to the van outside a villa in Al Mushrif, Abu Dhabi",
  },
  "abu-dhabi/al-khalidiyah": {
    src: "/landing/al-khalidiyah-hero.webp",
    alt: "A SafeStorage crew wrapping a sofa and loading the van outside an apartment building in Al Khalidiyah, Abu Dhabi",
  },
  "abu-dhabi/al-bateen": {
    src: "/landing/al-bateen-hero.webp",
    alt: "A SafeStorage crew wrapping furniture and loading the van outside a villa in Al Bateen, Abu Dhabi",
  },
}

/** Whether this district is drawn in the homepage design. */
export function hasAreaLanding(area: Area, emirate: EmirateDef) {
  return Boolean(AREA_HERO[`${emirate.slug}/${area.slug}`])
}

/** What a district page actually displays: its own questions, then the
 *  canonical ones, capped at five. Districts still on the older renderer show
 *  the full list, so this returns it unchanged for them. */
export function visibleAreaFaqs(area: Area, emirate: EmirateDef) {
  const all = [
    ...area.faqs,
    ...emirateFaqs({
      emirate: emirate.name,
      facilityKey: emirate.facilityKey,
      sampleDistricts: emirate.sampleDistricts,
      university: emirate.university,
      district: area.name,
    }),
  ]
  return AREA_HERO[`${emirate.slug}/${area.slug}`] ? all.slice(0, 5) : all
}

/**
 * The district paragraphs were written for a page with no cards, icons or FAQ
 * accordion on it, and the second one runs to thirteen lines on a phone. This
 * keeps whole sentences up to a readable length and drops the tail, which on
 * this layout is already answered by the questions further down the page. It
 * never cuts mid-sentence: if no boundary is found, the paragraph is left as
 * it is rather than truncated.
 */
function toReadableLength(text: string, maxChars = 520) {
  if (text.length <= maxChars) return text
  // a full stop followed by a space and a capital — never a decimal point
  const ends = [...text.matchAll(/\.(?=\s+[A-Z])/g)].map((m) => (m.index ?? 0) + 1)
  const cut = ends.filter((i) => i <= maxChars).pop()
  return cut ? text.slice(0, cut) : text
}

const TINTS = [
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
]

/** The district data carries an emoji per use case. Windows renders several of
 *  them flat grey, so each one is drawn as the matching lucide glyph instead. */
const USE_ICON: Record<string, typeof Boxes> = {
  "🌍": Globe,
  "📦": Package,
  "🏡": Home,
  "🏗️": HardHat,
  "🏢": Building2,
  "🛋️": Sofa,
  "🧳": Luggage,
  "🚚": Truck,
  "🪜": MoveVertical,
  "🛏️": BedDouble,
  "🪑": Armchair,
  "📅": CalendarDays,
  "✈️": Plane,
  "🖼️": Frame,
  "🏖️": Waves,
  "🎓": GraduationCap,
}

export default function AreaLanding({
  area,
  emirate,
  heroImage,
  heroAlt,
}: {
  area: Area
  emirate: EmirateDef
  heroImage: string
  heroAlt: string
}) {
  // `nearby` may point at a data-driven area OR at one of the hand-written
  // pages in staticAreas — a neighbour must not drop out of the row just
  // because its page happens to be a .tsx file.
  const bySlug: Record<string, { slug: string; name: string }> = {
    ...Object.fromEntries(emirate.areas.map((a) => [a.slug, a])),
    ...Object.fromEntries((emirate.staticAreas ?? []).map((a) => [a.slug, a])),
  }
  const nearby = area.nearby.map((slug) => bySlug[slug]).filter(Boolean)
  const areaCount = emirate.areas.length + (emirate.staticAreas?.length ?? 0)
  const base = `/locations/${emirate.slug}`
  const faqs = visibleAreaFaqs(area, emirate)

  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: emirate.name, href: base },
          { name: area.name },
        ]}
      />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${p.split2Wrap} ${p.areaHero}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Area}`}>
              <span className={s.heroTag}>
                {emirate.name} · {area.name}
              </span>
              <h1>
                Storage for {area.name} — <em>we collect, store and bring it back.</em>
              </h1>
              <p>{area.blurb}</p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a Free Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1733 / 907" } as CSSProperties}>
              <Image
                src={heroImage}
                alt={heroAlt}
                width={1733}
                height={907}
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
                We come to {area.name} <br className={s.mBreak} />
                <em>and take it from there.</em>
              </h2>
            </div>
            <FeatScroller>
              {[
                {
                  Icon: Home,
                  h: "Collected from your door",
                  pp: `The crew comes to your ${area.name} address, wraps what is going and loads it.`,
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

        {/* why people in this district call — the district's own three uses */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 26, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>What {area.name} stores</span>
              <h2>
                Why people here <em>call us.</em>
              </h2>
            </div>
            <p>{area.headline}</p>
          </div>
          <div className={s.miniGrid}>
            {area.uses.map((u, i) => {
              const Icon = USE_ICON[u.icon] ?? Boxes
              return (
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
                    <Icon />
                  </span>
                  <div>
                    <b>{u.title}</b>
                    <small>{u.desc}</small>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* the district in detail, and the facility claim that must stay exact */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>In brief</span>
              <h2 className={p.longH2}>
                Storage in {area.name}, <em>specifically.</em>
              </h2>
            </div>
          </div>
          <div className={`${s.prose} ${p.proseFlush}`}>
            {area.character.map((t, i) => (
              <p key={i}>{toReadableLength(t)}</p>
            ))}
          </div>
          <div className={s.movingTip}>
            <span aria-hidden="true">📍</span>
            <p>
              <strong>Where your things actually go.</strong> {storageLocationSentence(emirate.facilityKey)}{" "}
              We collect from your address in {area.name}, so you do not need to drive anything anywhere.
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
                  t: `We come to ${area.name}`,
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

        <LandingReviews padTop={0} />

        {/* five questions — the same five the FAQPage schema carries */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={p.longH2}>
                Questions from <em>{area.name}.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        {/* Exception B of the linking plan: a district page links to its
            emirate hub, its neighbours, the money page and the silo hubs —
            and nothing else. Chips rather than a wall of cards. */}
        {nearby.length > 0 && (
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
              {nearby.map((n, i) => (
                <Link
                  href={`${base}/${n.slug}`}
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
                <Link href={base}>
                  All {areaCount} {emirate.name} areas
                </Link>
              </li>
              {HUB_ORDER.filter((k) => k !== "s4").map((k) => (
                <li key={SILOS[k].hub} style={{ listStyle: "none" }}>
                  <Link href={SILOS[k].hub}>{SILOS[k].name}</Link>
                </li>
              ))}
              <li style={{ listStyle: "none" }}>
                <Link href={MONEY_PAGE}>{moneyAnchor(`${base}/${area.slug}`)}</Link>
              </li>
            </div>
          </section>
        )}

        <CtaBand
          title={`Storing something from ${area.name}?`}
          blurb="Free quote, no survey fee, and nothing booked until you agree both numbers — the storage and the transport."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
