import Link from "next/link"
import Image from "next/image"
import {
  BadgeCheck,
  Banknote,
  Boxes,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  Hammer,
  Home,
  IdCard,
  Lightbulb,
  MapPinned,
  Moon,
  Package,
  Plane,
  Sofa,
  Sun,
  Truck,
  Users,
  Warehouse,
} from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust, SplitHero } from "@/components/landing/landing-top"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { LandingConnect } from "@/components/landing/landing-connect"
import { UspRail } from "@/components/landing/usp-rail"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { MilestonesPlayer } from "@/components/landing/milestones-player"
import s from "@/components/landing/landing.module.css"
import g from "./guide-cards.module.css"
import p from "@/components/locations/location-landing.module.css"
import { env } from "@/lib/env"
import { renderRich } from "./rich-text"
import { pageSchemas } from "./silo-page"
import { HAND_WRITTEN, navFor, pagesInSilo } from "@/lib/silo/registry"
import { HUB_ORDER, MONEY_PAGE, SILOS, moneyAnchor } from "@/lib/silo/silos"
import type { CSSProperties, ReactNode } from "react"
import type { Section, SiloPageContent } from "@/lib/silo/types"

/**
 * The homepage-design renderer for data-driven silo pages.
 *
 * WHY THIS EXISTS. CLAUDE.md ("Design system — every page must look like the
 * homepage") requires every redesigned page to be built from components/landing.
 * The original <SiloPage> renderer predates that system (navy hero, centred
 * headings, Tailwind cards), so the movers pages written in lib/silo looked like
 * a different site. This renders the SAME `SiloPageContent` — same H1, same
 * paragraphs, same FAQs, same links — in the landing design, so the copy and the
 * build-time linking rules in lib/silo/registry.ts are untouched.
 *
 * Section mapping (page skeleton from CLAUDE.md):
 *   SiloBreadcrumb → SchemaScript → SplitHero → LandingTrust → intro →
 *   body sections → LandingReviews → FaqAccordion → Explore miniGrid →
 *   CtaBand → LandingConnect
 *     prose      → .prose paragraphs
 *     table      → .colList of .proseBox cards (one card per row)
 *     steps      → MilestonesPlayer timeline
 *     cards      → UspRail
 *     checklist  → .proseBox + .checkList
 */

/**
 * Hero image per page. Area pages use the owner's own photo of that area (the
 * same files the /locations pages use); every other moving page gets the Dubai
 * movers illustration. Defaults matter: a stock luggage photo on a furniture
 * page reads as the wrong service.
 */
const HERO_IMAGE: Record<string, string> = {
  "/moving-storage-dubai/dubai-marina-movers": "/landing/dubai-marina-hero-side.webp",
  "/moving-storage-dubai/jvc-movers": "/landing/jvc-photo.webp",
  "/moving-storage-dubai/business-bay-movers": "/landing/business-bay-newone.webp",
  "/moving-storage-dubai/palm-jumeirah-movers": "/landing/place-palm.webp",
  "/moving-storage-dubai/silicon-oasis-movers": "/landing/dso-photo.webp",
  "/guides/best-storage-companies-dubai": "/landing/storage-companies-photo.webp",
  "/guides/how-much-does-storage-cost-in-dubai": "/landing/storage-cost-photo-v2.webp",
  "/guides/storage-packing-checklist": "/landing/packing-checklist-photo-v2.webp",
  "/guides/dubai-tenancy-and-moving-calendar": "/landing/moving-calendar-photo-v2.webp",
  "/guides/best-storage-companies-uae": "/landing/companies-uae-photo.webp",
  "/moving-storage-abu-dhabi": "/landing/abu-dhabi-hero.webp",
  "/self-storage-dubai/near-me": "/landing/near-me-hero.webp",
  "/self-storage-dubai/long-term": "/landing/long-term-hero.webp",
  "/self-storage-dubai/storage-space-for-rent": "/landing/space-for-rent-hero.webp",
  "/self-storage-dubai/monthly-storage": "/landing/monthly-storage-hero.webp",
  "/self-storage-dubai/storage-room": "/landing/storage-room-hero.webp",
  "/self-storage-dubai/climate-controlled": "/landing/climate-hero.webp",
  "/self-storage-dubai/secure-storage": "/landing/secure-storage-hero-v2.webp",
  "/self-storage-dubai/24-hour-access": "/landing/access-24h-hero.webp",
  "/self-storage-dubai/insurance": "/landing/insurance-hero.webp",
  "/self-storage-dubai/vs-warehouse-rental": "/landing/vs-warehouse-hero.webp",
  "/self-storage-dubai/storage-calculator": "/landing/calculator-hero.webp",
  "/personal-storage-dubai/household-storage": "/landing/household-hero-v2.webp",
  "/personal-storage-dubai/apartment-storage": "/landing/apartment-storage-hero.webp",
  "/personal-storage-dubai/villa-storage": "/landing/villa-storage-hero.webp",
  "/personal-storage-dubai/motorbike-storage": "/landing/motorbike-storage-hero.webp",
  "/personal-storage-dubai/luggage-storage": "/landing/luggage-storage-hero.webp",
  "/personal-storage-dubai/seasonal-storage": "/landing/seasonal-storage-hero.webp",
  "/personal-storage-dubai/renovation-storage": "/landing/renovation-storage-hero.webp",
  "/personal-storage-dubai/sports-equipment-storage": "/landing/sports-equipment-hero.webp",
  "/personal-storage-dubai/wardrobe-storage": "/landing/wardrobe-storage-hero.webp",
  "/business-storage-dubai/archive-storage": "/landing/archive-storage-hero.webp",
  "/business-storage-dubai/3pl-services": "/landing/3pl-services-hero.webp",
  "/business-storage-dubai/inventory-storage": "/landing/inventory-storage-hero.webp",
  "/business-storage-dubai/pallet-storage": "/landing/pallet-storage-hero-v3.webp",
  "/business-storage-dubai/retail-stock-storage": "/landing/retail-stock-hero.webp",
  "/business-storage-dubai/office-relocation-storage": "/landing/office-relocation-hero.webp",
  "/business-storage-dubai/equipment-storage": "/landing/equipment-storage-hero.webp",
  "/business-storage-dubai/exhibition-storage": "/landing/exhibition-storage-hero.webp",
  "/business-storage-dubai/free-zone-storage": "/landing/free-zone-storage-hero.webp",
  "/moving-storage-dubai/villa-movers": "/landing/villa-movers-hero.webp",
  "/moving-storage-dubai/packing-services": "/landing/packing-services-hero.webp",
  "/moving-storage-dubai/apartment-movers": "/landing/apartment-movers-hero.webp",
  "/moving-storage-dubai/inter-emirate-moving": "/landing/inter-emirate-hero.webp",
  "/moving-storage-dubai/leaving-uae-checklist": "/landing/leaving-uae-hero.webp",
}
const DEFAULT_HERO_IMAGE = "/landing/movers-illustration.jpg"

/**
 * Pages whose hero shows the picture BESIDE the copy, in its own rounded card,
 * the way the hand-written guides do it — rather than as a full-bleed wash
 * behind the words. Use it when the picture carries the logo or a subject that
 * should not sit under text.
 */
const SIDE_HERO = new Set([
  "/moving-storage-abu-dhabi",
  "/self-storage-dubai/near-me",
  "/self-storage-dubai/long-term",
  "/self-storage-dubai/storage-space-for-rent",
  "/self-storage-dubai/monthly-storage",
  "/self-storage-dubai/storage-room",
  "/self-storage-dubai/climate-controlled",
  "/self-storage-dubai/secure-storage",
  "/self-storage-dubai/24-hour-access",
  "/self-storage-dubai/insurance",
  "/self-storage-dubai/vs-warehouse-rental",
  "/self-storage-dubai/storage-calculator",
  "/personal-storage-dubai/household-storage",
  "/personal-storage-dubai/apartment-storage",
  "/personal-storage-dubai/villa-storage",
  "/personal-storage-dubai/motorbike-storage",
  "/personal-storage-dubai/luggage-storage",
  "/personal-storage-dubai/seasonal-storage",
  "/personal-storage-dubai/renovation-storage",
  "/personal-storage-dubai/sports-equipment-storage",
  "/personal-storage-dubai/wardrobe-storage",
  "/business-storage-dubai/archive-storage",
  "/business-storage-dubai/3pl-services",
  "/business-storage-dubai/inventory-storage",
  "/business-storage-dubai/pallet-storage",
  "/business-storage-dubai/retail-stock-storage",
  "/business-storage-dubai/office-relocation-storage",
  "/business-storage-dubai/equipment-storage",
  "/business-storage-dubai/exhibition-storage",
  "/business-storage-dubai/free-zone-storage",
  "/moving-storage-dubai/villa-movers",
  "/moving-storage-dubai/packing-services",
  "/moving-storage-dubai/apartment-movers",
  "/moving-storage-dubai/inter-emirate-moving",
  "/moving-storage-dubai/leaving-uae-checklist",
  "/guides/best-storage-companies-dubai",
  "/guides/best-storage-companies-uae",
  "/guides/how-much-does-storage-cost-in-dubai",
  "/guides/storage-packing-checklist",
  "/guides/dubai-tenancy-and-moving-calendar",
])

/** Pages whose hero title needs a notch smaller type: the phrase itself is
 *  wider than the column at the standard size and would wrap to three lines. */
const TIGHT_TITLE = new Set([
  "/self-storage-dubai/climate-controlled",
  "/moving-storage-dubai/leaving-uae-checklist",
  "/personal-storage-dubai/sports-equipment-storage",
])

/** Pages whose card icons sit in a smaller square than the homepage default. */
const SMALL_CARD_ICONS = new Set([
  "/moving-storage-abu-dhabi",
  "/self-storage-dubai/near-me",
  "/self-storage-dubai/long-term",
  "/self-storage-dubai/storage-space-for-rent",
  "/self-storage-dubai/monthly-storage",
  "/self-storage-dubai/storage-room",
  "/self-storage-dubai/climate-controlled",
  "/self-storage-dubai/secure-storage",
  "/self-storage-dubai/24-hour-access",
  "/self-storage-dubai/insurance",
  "/self-storage-dubai/vs-warehouse-rental",
  "/self-storage-dubai/storage-calculator",
  "/personal-storage-dubai/household-storage",
  "/personal-storage-dubai/apartment-storage",
  "/personal-storage-dubai/villa-storage",
  "/personal-storage-dubai/motorbike-storage",
  "/personal-storage-dubai/luggage-storage",
  "/personal-storage-dubai/seasonal-storage",
  "/personal-storage-dubai/renovation-storage",
  "/personal-storage-dubai/sports-equipment-storage",
  "/personal-storage-dubai/wardrobe-storage",
  "/business-storage-dubai/archive-storage",
  "/business-storage-dubai/3pl-services",
  "/business-storage-dubai/inventory-storage",
  "/business-storage-dubai/pallet-storage",
  "/business-storage-dubai/retail-stock-storage",
  "/business-storage-dubai/office-relocation-storage",
  "/business-storage-dubai/equipment-storage",
  "/business-storage-dubai/exhibition-storage",
  "/business-storage-dubai/free-zone-storage",
  "/moving-storage-dubai/villa-movers",
  "/moving-storage-dubai/packing-services",
  "/moving-storage-dubai/apartment-movers",
  "/moving-storage-dubai/inter-emirate-moving",
  "/moving-storage-dubai/leaving-uae-checklist",
  "/guides/best-storage-companies-dubai",
  "/guides/best-storage-companies-uae",
  "/guides/how-much-does-storage-cost-in-dubai",
  "/guides/storage-packing-checklist",
])

/** Pages whose table cards carry a small coloured icon. */
const TABLE_ICONS = new Set([
  "/moving-storage-abu-dhabi",
  "/self-storage-dubai/near-me",
  "/self-storage-dubai/long-term",
  "/self-storage-dubai/storage-space-for-rent",
  "/self-storage-dubai/monthly-storage",
  "/self-storage-dubai/storage-room",
  "/self-storage-dubai/climate-controlled",
  "/self-storage-dubai/secure-storage",
  "/self-storage-dubai/24-hour-access",
  "/self-storage-dubai/insurance",
  "/self-storage-dubai/vs-warehouse-rental",
  "/self-storage-dubai/storage-calculator",
  "/personal-storage-dubai/household-storage",
  "/personal-storage-dubai/apartment-storage",
  "/personal-storage-dubai/villa-storage",
  "/personal-storage-dubai/motorbike-storage",
  "/personal-storage-dubai/luggage-storage",
  "/personal-storage-dubai/seasonal-storage",
  "/personal-storage-dubai/renovation-storage",
  "/personal-storage-dubai/sports-equipment-storage",
  "/personal-storage-dubai/wardrobe-storage",
  "/business-storage-dubai/archive-storage",
  "/business-storage-dubai/3pl-services",
  "/business-storage-dubai/inventory-storage",
  "/business-storage-dubai/pallet-storage",
  "/business-storage-dubai/retail-stock-storage",
  "/business-storage-dubai/office-relocation-storage",
  "/business-storage-dubai/equipment-storage",
  "/business-storage-dubai/exhibition-storage",
  "/business-storage-dubai/free-zone-storage",
  "/moving-storage-dubai/villa-movers",
  "/moving-storage-dubai/packing-services",
  "/moving-storage-dubai/apartment-movers",
  "/moving-storage-dubai/inter-emirate-moving",
  "/moving-storage-dubai/leaving-uae-checklist",
  "/guides/how-much-does-storage-cost-in-dubai",
  "/guides/dubai-tenancy-and-moving-calendar",
  "/guides/best-storage-companies-uae",
])

/** Pages whose table sits on ONE scrolling line instead of wrapping to a
  * second row. Only for tables with more than five rows, and only where the
  * rows are independent facts rather than a comparison you read down. */
/** Pages whose side hero is capped at the 1180px section width, so the
 *  title lines up with every heading beneath it instead of starting
 *  110px to their left. */
const HERO_FLUSH = new Set(["/moving-storage-dubai/leaving-uae-checklist"])

const TABLE_RAIL = new Set(["/business-storage-dubai/pallet-storage"])

/** Pages whose rail cards carry a colour icon rather than the navy square. */
const COLOUR_CARD_ICONS = new Set([
  "/guides/best-storage-companies-uae",
  "/self-storage-dubai/insurance",
  "/self-storage-dubai/storage-calculator",
  "/personal-storage-dubai/household-storage",
  "/personal-storage-dubai/apartment-storage",
  "/personal-storage-dubai/villa-storage",
  "/personal-storage-dubai/motorbike-storage",
  "/personal-storage-dubai/luggage-storage",
  "/personal-storage-dubai/seasonal-storage",
  "/personal-storage-dubai/renovation-storage",
  "/personal-storage-dubai/sports-equipment-storage",
  "/personal-storage-dubai/wardrobe-storage",
  "/business-storage-dubai/archive-storage",
  "/business-storage-dubai/3pl-services",
  "/business-storage-dubai/inventory-storage",
  "/business-storage-dubai/pallet-storage",
  "/business-storage-dubai/retail-stock-storage",
  "/business-storage-dubai/office-relocation-storage",
  "/business-storage-dubai/equipment-storage",
  "/business-storage-dubai/exhibition-storage",
  "/business-storage-dubai/free-zone-storage",
  "/moving-storage-dubai/villa-movers",
  "/moving-storage-dubai/packing-services",
  "/moving-storage-dubai/apartment-movers",
  "/moving-storage-dubai/inter-emirate-moving",
  "/moving-storage-dubai/leaving-uae-checklist",
  "/self-storage-dubai/vs-warehouse-rental",
])

/** Pages that read lighter with smaller headings and card text. */
const SMALL_TYPE = new Set(["/guides/best-storage-companies-uae"])

/** Pages whose rail cards drop the big faint 01, 02, 03. */
const NO_CARD_NUMBERS = new Set([
  "/moving-storage-abu-dhabi",
  "/self-storage-dubai/near-me",
  "/self-storage-dubai/long-term",
  "/self-storage-dubai/storage-space-for-rent",
  "/self-storage-dubai/monthly-storage",
  "/self-storage-dubai/storage-room",
  "/self-storage-dubai/climate-controlled",
  "/self-storage-dubai/secure-storage",
  "/self-storage-dubai/24-hour-access",
  "/self-storage-dubai/insurance",
  "/self-storage-dubai/vs-warehouse-rental",
  "/self-storage-dubai/storage-calculator",
  "/personal-storage-dubai/household-storage",
  "/personal-storage-dubai/apartment-storage",
  "/personal-storage-dubai/villa-storage",
  "/personal-storage-dubai/motorbike-storage",
  "/personal-storage-dubai/luggage-storage",
  "/personal-storage-dubai/seasonal-storage",
  "/personal-storage-dubai/renovation-storage",
  "/personal-storage-dubai/sports-equipment-storage",
  "/personal-storage-dubai/wardrobe-storage",
  "/business-storage-dubai/archive-storage",
  "/business-storage-dubai/3pl-services",
  "/business-storage-dubai/inventory-storage",
  "/business-storage-dubai/pallet-storage",
  "/business-storage-dubai/retail-stock-storage",
  "/business-storage-dubai/office-relocation-storage",
  "/business-storage-dubai/equipment-storage",
  "/business-storage-dubai/exhibition-storage",
  "/business-storage-dubai/free-zone-storage",
  "/moving-storage-dubai/villa-movers",
  "/moving-storage-dubai/packing-services",
  "/moving-storage-dubai/apartment-movers",
  "/moving-storage-dubai/inter-emirate-moving",
  "/moving-storage-dubai/leaving-uae-checklist",
  "/guides/best-storage-companies-uae",
  "/guides/best-storage-companies-dubai",
  "/guides/how-much-does-storage-cost-in-dubai",
  "/guides/storage-packing-checklist",
  "/guides/dubai-tenancy-and-moving-calendar",
])

/** Pages that skip the reviews carousel, to keep a long guide shorter. */
const NO_REVIEWS = new Set([
  "/guides/best-storage-companies-uae",
  "/guides/how-much-does-storage-cost-in-dubai",
  "/guides/storage-packing-checklist",
  "/guides/dubai-tenancy-and-moving-calendar",
])

/* Sections sat on 72px of padding top and bottom, so two of them put 144px of
   nothing between a paragraph and the next heading. One value, used by every
   section this renderer draws. */
const SEC: CSSProperties = { paddingTop: 0, paddingBottom: 26 }
const SEC_FIRST: CSSProperties = { paddingTop: 26, paddingBottom: 26 }

const STEP_ICONS = [ClipboardList, FileText, Package, Truck, Hammer, CheckCircle2]

/** A colour per card, in order, for the small icons on the redesigned guides. */
const ICON_TINTS = [
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
]

/** The icon that fits what the row is about, by its own words. */
function rowIcon(label: string) {
  const t = label.toLowerCase()
  if (/ramadan|eid/.test(t)) return Moon
  if (/jun|jul|aug|sep/.test(t)) return Sun
  if (/jan|feb|mar|apr|may|oct|nov|dec|week|month/.test(t)) return CalendarDays
  if (/carton|box|packing/.test(t)) return Package
  if (/villa|house/.test(t)) return Building2
  if (/studio|flat|apartment|bedroom|bhk/.test(t)) return Home
  if (/room/.test(t)) return Sofa
  if (/office|shop|business|stock|pallet/.test(t)) return Warehouse
  if (/where|stored|facility|warehouse/.test(t)) return Warehouse
  if (/collect|collection|pickup|pick up/.test(t)) return Truck
  if (/charge|fee|cost|price|trip/.test(t)) return Banknote
  if (/visit|see|site/.test(t)) return MapPinned
  if (/who|team|contractor|staff/.test(t)) return Users
  if (/loan|credit|card|bank|deposit|refund/.test(t)) return Banknote
  if (/attest|certificate|document|paperwork|passport/.test(t)) return FileText
  if (/letter|clearance|notice|confirm/.test(t)) return BadgeCheck
  if (/ship|shipping|container|freight|fly|flight/.test(t)) return Plane
  if (/visa|residency|cancel/.test(t)) return IdCard
  return Boxes
}

/** The card grid: animated into view on the pages that ask for it. */
function Cards({
  className,
  animate,
  style,
  children,
}: {
  className: string
  animate: boolean
  /** one-off grid overrides, e.g. how many columns a row of cards takes */
  style?: CSSProperties
  children: ReactNode
}) {
  return animate ? (
    <HomeReveal className={className} style={style}>
      {children}
    </HomeReveal>
  ) : (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

/** The small coloured square itself: it drifts on its own and tilts on hover. */
function RowIcon({ label, i }: { label: string; i: number }) {
  const Icon = rowIcon(label)
  const tint = ICON_TINTS[i % ICON_TINTS.length]
  return (
    <span
      className={g.icon}
      aria-hidden="true"
      style={{ background: tint.bg, color: tint.fg, ["--i"]: i } as CSSProperties}
    >
      <Icon size={17} strokeWidth={1.9} />
    </span>
  )
}

/** "Title: Accent words" → [title, accent]. The H1 text is unchanged; only its styling splits. */
/** Pages whose h1 needs a different break than splitH1 would choose, to keep
 *  the hero title inside two lines. The value is the first line; whatever
 *  follows it in the h1 becomes the orange accent. */
const H1_SPLIT: Record<string, string> = {
  "/personal-storage-dubai/motorbike-storage": "Motorbike and Bicycle",
  "/personal-storage-dubai/renovation-storage": "Storage During a",
  "/personal-storage-dubai/wardrobe-storage": "Clothes and Wardrobe",
  "/business-storage-dubai/3pl-services": "3PL in Dubai —",
  "/business-storage-dubai/exhibition-storage": "Exhibition and Event",
  "/business-storage-dubai/free-zone-storage": "Storage for Free Zone",
}

function splitH1(h1: string): [string, string] {
  const m = h1.match(/^(.*?[:,])\s+(.+)$/)
  if (m) return [m[1], m[2]]
  const w = h1.split(" ")
  const k = Math.ceil(w.length * 0.55)
  return [w.slice(0, k).join(" "), w.slice(k).join(" ")]
}

/** Orange ending for section titles: the last two or three words. */
function accentSplit(text: string): [string, string] {
  const w = text.split(" ")
  const n = w.length > 6 ? 3 : w.length > 2 ? 2 : 1
  return [w.slice(0, w.length - n).join(" "), w.slice(w.length - n).join(" ")]
}

const EYEBROW: Record<Section["kind"], string> = {
  prose: "Overview",
  table: "At a glance",
  steps: "How it works",
  cards: "What is covered",
  checklist: "Checklist",
}

function Head({ title, eyebrow, intro }: { title: string; eyebrow: string; intro?: string }) {
  const [main, accent] = accentSplit(title)
  return (
    <div className={s.howHead}>
      <div>
        <span className={s.howEyebrow}>{eyebrow}</span>
        <h2>
          {main} <em>{accent}</em>
        </h2>
      </div>
      {intro ? <p>{renderRich(intro)}</p> : null}
    </div>
  )
}

function Note({ children }: { children: string }) {
  return (
    <div className={s.movingTip}>
      <Lightbulb aria-hidden="true" />
      <p>{renderRich(children)}</p>
    </div>
  )
}

function SectionView({
  section,
  index,
  smallIcons = false,
  tableIcons = false,
  tableRail = false,
  colourIcons = false,
  hideNumbers = false,
}: {
  section: Section
  index: number
  smallIcons?: boolean
  tableIcons?: boolean
  tableRail?: boolean
  colourIcons?: boolean
  hideNumbers?: boolean
}) {
  const id = `s${index + 1}`
  switch (section.kind) {
    case "prose":
      return (
        <section className={`${s.section} ${s.wrap}`} id={id} style={index === 0 ? SEC_FIRST : SEC}>
          <Head title={section.h2} eyebrow={EYEBROW.prose} />
          <div className={s.prose} style={{ margin: 0, maxWidth: 860 }}>
            {section.paras.map((p, i) => (
              <p key={i}>{renderRich(p)}</p>
            ))}
          </div>
        </section>
      )

    case "table":
      return (
        <section className={`${s.section} ${s.wrap}`} id={id} style={SEC}>
          <Head title={section.h2} eyebrow={EYEBROW.table} intro={section.intro} />
          <Cards
            className={tableRail ? p.siloRail : tableIcons ? `${s.colList} ${g.grid}` : s.colList}
            animate={tableIcons}
            style={!tableRail && tableIcons ? ({ ["--cols"]: section.rows.length <= 5 ? section.rows.length : 4 } as CSSProperties) : undefined}
          >
            {section.rows.map((row, ri) => (
              <div
                className={tableIcons ? `${s.proseBox} ${g.card}` : s.proseBox}
                key={row[0] + row[1]}
                style={{ marginTop: 0, ...(tableIcons ? ({ ["--i"]: ri } as CSSProperties) : null) }}
              >
                {tableIcons ? <RowIcon label={row[0] || section.columns[1]} i={ri} /> : null}
                <h3>{renderRich(row[0] || section.columns[1])}</h3>
                {row.slice(1).map((cell, ci) => (
                  <p key={ci}>
                    {section.columns[ci + 1] && row[0] ? (
                      <strong style={{ color: "var(--ink)" }}>{section.columns[ci + 1]}: </strong>
                    ) : null}
                    {renderRich(cell)}
                  </p>
                ))}
              </div>
            ))}
          </Cards>
          {section.note ? <Note>{section.note}</Note> : null}
        </section>
      )

    case "steps":
      return (
        <section className={`${s.section} ${s.wrap}`} id={id} style={SEC}>
          <Head title={section.h2} eyebrow={EYEBROW.steps} intro={section.intro} />
          <MilestonesPlayer>
            <ol
              className={s.milestones}
              style={{ ["--steps"]: section.items.length <= 5 ? section.items.length : 4 } as CSSProperties}
            >
              {section.items.map((it, i) => {
                const Icon = STEP_ICONS[i % STEP_ICONS.length]
                return (
                  <li className={s.milestone} key={it.h} style={{ ["--i" as string]: i }}>
                    <span className={s.milestoneDot} aria-hidden="true">
                      <Icon />
                    </span>
                    <span className={s.milestoneYear}>Step {i + 1}</span>
                    <b>{it.h}</b>
                    <small>{renderRich(it.p)}</small>
                  </li>
                )
              })}
            </ol>
          </MilestonesPlayer>
        </section>
      )

    case "cards": {
      const [main, accent] = accentSplit(section.h2)
      return (
        <section className={`${s.section} ${s.wrap}`} id={id} style={SEC}>
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>{EYEBROW.cards}</span>
                <h2>
                  {main} <em>{accent}</em>
                </h2>
              </div>
            }
          >
            {section.items.map((it, i) => (
              <article className={s.usp} key={it.h}>
                {hideNumbers ? null : (
                  <span className={s.uspNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <div
                  className={colourIcons ? `${s.uspIcon} ${g.anim}` : s.uspIcon}
                  style={{
                    ...(smallIcons ? { width: 40, height: 40, borderRadius: 13, marginBottom: 16 } : null),
                    ...(colourIcons
                      ? {
                          background: ICON_TINTS[i % ICON_TINTS.length].bg,
                          color: ICON_TINTS[i % ICON_TINTS.length].fg,
                          boxShadow: "none",
                          ["--i"]: i,
                        }
                      : null),
                  } as CSSProperties}
                  aria-hidden="true"
                >
                  <span style={{ fontSize: smallIcons ? 17 : 20, lineHeight: 1 }}>{it.icon}</span>
                </div>
                <h3>{it.h}</h3>
                <p>{renderRich(it.p)}</p>
              </article>
            ))}
          </UspRail>
          <p className={s.scrollHint}>Swipe for more →</p>
        </section>
      )
    }

    case "checklist":
      return (
        <section className={`${s.section} ${s.wrap}`} id={id} style={SEC}>
          <Head title={section.h2} eyebrow={EYEBROW.checklist} intro={section.intro} />
          <div className={s.proseBox} style={{ marginTop: 0 }}>
            <ul className={s.checkList} style={{ marginTop: 0 }}>
              {section.items.map((it, i) => (
                <li key={i}>{renderRich(it)}</li>
              ))}
            </ul>
          </div>
          {section.note ? <Note>{section.note}</Note> : null}
        </section>
      )
  }
}

function ExploreCard({ href, label, blurb }: { href: string; label: string; blurb: string }) {
  return (
    <Link className={`${s.miniCard} ${s.miniLink}`} href={href}>
      <span className={s.miniIcon} aria-hidden="true">
        <Truck />
      </span>
      <div>
        <b>{label}</b>
        <small>{blurb}</small>
      </div>
      <span className={s.miniArrow} aria-hidden="true">
        →
      </span>
    </Link>
  )
}

export default function LandingSiloPage({ content, hub = false }: { content: SiloPageContent; hub?: boolean }) {
  const silo = SILOS[content.silo]
  const h1Lead = H1_SPLIT[content.path]
  const [title, accent] = h1Lead
    ? [h1Lead, content.h1.slice(h1Lead.length).trim()]
    : splitH1(content.h1)

  // Explore row. A child links to its 3–5 siblings (rule 2); a hub links down to
  // every child and across to the other hubs (rule 4).
  const cards = hub
    ? [
        ...pagesInSilo(content.silo).map((p) => p.path),
        ...Object.keys(HAND_WRITTEN).filter((p) => HAND_WRITTEN[p].silo === content.silo),
      ].filter((p) => p !== content.path)
        .map(navFor)
        .filter((c): c is NonNullable<ReturnType<typeof navFor>> => Boolean(c))
        .sort((a, b) => a.label.localeCompare(b.label))
    : content.siblings
        .filter((p) => p !== silo.hub)
        .map(navFor)
        .filter((c): c is NonNullable<ReturnType<typeof navFor>> => Boolean(c))
  // The moving silos form a mesh: each regional hub links to every other one, so
  // the UAE hub, Dubai, Abu Dhabi, Sharjah, Ajman, RAK and Al Ain are all one hop apart.
  const REGIONAL = ["s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12"] as const
  const isRegional = (REGIONAL as readonly string[]).includes(content.silo)
  const otherHubs = isRegional
    ? REGIONAL.filter((k) => k !== content.silo).map((k) => SILOS[k])
    : HUB_ORDER.filter((k) => k !== content.silo).map((k) => SILOS[k])

  return (
    <>
      <SchemaScript schema={pageSchemas(content)} />
      <SiloBreadcrumb
        trail={
          hub
            ? [{ name: "Home", href: "/" }, { name: silo.name }]
            : [{ name: "Home", href: "/" }, { name: silo.name, href: silo.hub }, { name: content.crumb }]
        }
      />

      <div
        className={`${s.page} ${sora.variable} ${manrope.variable}${SMALL_TYPE.has(content.path) ? ` ${g.smallType}` : ""}`}
      >
        {SIDE_HERO.has(content.path) ? (
          <section
            className={`${s.hero} ${s.wrap} ${p.split2}${HERO_FLUSH.has(content.path) ? ` ${p.split2Wrap}` : ""}`}
          >
            <div className={p.split2Inner}>
              <div
                className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Tight}${TIGHT_TITLE.has(content.path) ? ` ${p.split2Tight}` : ""}`}
              >
                <span className={s.heroTag}>{silo.name}</span>
                <h1>
                  {title} <br />
                  <em>{accent}</em>
                </h1>
                <p>{content.description}</p>
                <div className={s.heroCta}>
                  <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                    Get a Free Quote →
                  </Link>
                  <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                    <span className={s.phIco}>📞</span> Call: 050-577-3388
                  </a>
                </div>
              </div>
              <div className={p.split2Photo} style={{ aspectRatio: "1730 / 909" }}>
                <Image
                  src={HERO_IMAGE[content.path] ?? DEFAULT_HERO_IMAGE}
                  alt={content.crumb}
                  width={1730}
                  height={909}
                  sizes="(max-width: 900px) 94vw, 50vw"
                  priority
                />
                <div className={s.heroRating}>
                  <strong>4.9★</strong>
                  <span>6,700+ Google reviews</span>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <SplitHero
            eyebrow={silo.name}
            title={title}
            titleAccent={accent}
            blurb={content.description}
            image={HERO_IMAGE[content.path] ?? DEFAULT_HERO_IMAGE}
            imagePosition="center 50%"
            ctaLabel="Get a Free Quote"
          />
        )}

        <LandingTrust />

        {/* INTRO — the page's opening paragraphs, unchanged. The first carries the
            mandatory up-link to the silo hub. */}
        <section className={`${s.section} ${s.wrap}`} id="intro" style={SEC_FIRST}>
          <Head title={content.introH2 ?? "The short version"} eyebrow="In brief" />
          <div className={s.prose} style={{ margin: 0, maxWidth: 860 }}>
            {content.hero.map((p, i) => (
              <p key={i} className={i === 0 ? s.proseLead : undefined}>
                {renderRich(p)}
              </p>
            ))}
          </div>
        </section>

        {content.sections.map((section, i) => (
          <SectionView
            section={section}
            index={i}
            smallIcons={SMALL_CARD_ICONS.has(content.path)}
            tableIcons={TABLE_ICONS.has(content.path)}
            tableRail={TABLE_RAIL.has(content.path)}
            colourIcons={COLOUR_CARD_ICONS.has(content.path)}
            hideNumbers={NO_CARD_NUMBERS.has(content.path)}
            key={section.h2}
          />
        ))}

        {NO_REVIEWS.has(content.path) ? null : <LandingReviews padTop={0} />}

        {/* FAQ — same questions and answers as the FAQPage schema. */}
        {content.faqs.length > 0 && (
          <section className={`${s.section} ${s.wrap}`} id="faq" style={SEC}>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>Good to know</span>
                <h2>
                  Common <em>questions.</em>
                </h2>
              </div>
              <p>
                More answers?{" "}
                <Link href="/faq" style={{ color: "var(--accent)", fontWeight: 600 }}>
                  View all FAQs →
                </Link>
              </p>
            </div>
            <FaqAccordion items={content.faqs.map((f) => ({ q: f.q, a: f.a }))} />
          </section>
        )}

        {/* EXPLORE — siblings (child) or every child (hub), the hub up-link, coverage. */}
        <section className={`${s.section} ${s.wrap}`} id="explore" style={SEC}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Explore</span>
              <h2>
                More in <em>{hub ? "this section." : silo.name.toLowerCase() + "."}</em>
              </h2>
            </div>
          </div>
          <div className={s.miniGrid}>
            {cards.map((c) => (
              <ExploreCard key={c.href} href={c.href} label={c.label} blurb={c.blurb} />
            ))}
            {!hub && <ExploreCard href={silo.hub} label={`All of ${silo.name}`} blurb={silo.blurb} />}
            {hub &&
              otherHubs.map((h) => <ExploreCard key={h.hub} href={h.hub} label={h.name} blurb={h.blurb} />)}
            <Link className={`${s.miniCard} ${s.miniLink}`} href="/locations">
              <span className={s.miniIcon} aria-hidden="true">
                <MapPinned />
              </span>
              <div>
                <b>Areas we collect from</b>
                <small>Every emirate and district, with local detail.</small>
              </div>
              <span className={s.miniArrow} aria-hidden="true">
                →
              </span>
            </Link>
            {!hub && (
              <Link className={`${s.miniCard} ${s.miniLink}`} href={MONEY_PAGE}>
                <span className={s.miniIcon} aria-hidden="true">
                  <Truck />
                </span>
                <div>
                  <b>{moneyAnchor(content.path)}</b>
                  <small>Collection and storage for your community.</small>
                </div>
                <span className={s.miniArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            )}
          </div>
          <p className={s.scrollHint}>Swipe for more →</p>
        </section>

        <CtaBand
          title={content.cta.h2}
          blurb={content.cta.p}
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        <LandingConnect />
      </div>
    </>
  )
}
