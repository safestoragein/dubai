import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, ClipboardList, FileText, Hammer, Lightbulb, MapPinned, Package, Truck } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust, SplitHero } from "@/components/landing/landing-top"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { LandingConnect } from "@/components/landing/landing-connect"
import { UspRail } from "@/components/landing/usp-rail"
import FaqAccordion from "@/components/landing/faq-accordion"
import { MilestonesPlayer } from "@/components/landing/milestones-player"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import { env } from "@/lib/env"
import { renderRich } from "./rich-text"
import { pageSchemas } from "./silo-page"
import { HAND_WRITTEN, navFor, pagesInSilo } from "@/lib/silo/registry"
import { HUB_ORDER, MONEY_PAGE, SILOS, moneyAnchor } from "@/lib/silo/silos"
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
}
const DEFAULT_HERO_IMAGE = "/landing/movers-illustration.jpg"

/**
 * Pages whose hero shows the picture BESIDE the copy, in its own rounded card,
 * the way the hand-written guides do it — rather than as a full-bleed wash
 * behind the words. Use it when the picture carries the logo or a subject that
 * should not sit under text.
 */
const SIDE_HERO = new Set(["/guides/best-storage-companies-dubai"])

/** Pages whose card icons sit in a smaller square than the homepage default. */
const SMALL_CARD_ICONS = new Set(["/guides/best-storage-companies-dubai"])

const STEP_ICONS = [ClipboardList, FileText, Package, Truck, Hammer, CheckCircle2]

/** "Title: Accent words" → [title, accent]. The H1 text is unchanged; only its styling splits. */
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
}: {
  section: Section
  index: number
  smallIcons?: boolean
}) {
  const id = `s${index + 1}`
  switch (section.kind) {
    case "prose":
      return (
        <section className={`${s.section} ${s.wrap}`} id={id} style={index === 0 ? undefined : { paddingTop: 0 }}>
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
        <section className={`${s.section} ${s.wrap}`} id={id} style={{ paddingTop: 0 }}>
          <Head title={section.h2} eyebrow={EYEBROW.table} intro={section.intro} />
          <div className={s.colList}>
            {section.rows.map((row) => (
              <div className={s.proseBox} key={row[0] + row[1]} style={{ marginTop: 0 }}>
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
          </div>
          {section.note ? <Note>{section.note}</Note> : null}
        </section>
      )

    case "steps":
      return (
        <section className={`${s.section} ${s.wrap}`} id={id} style={{ paddingTop: 0 }}>
          <Head title={section.h2} eyebrow={EYEBROW.steps} intro={section.intro} />
          <MilestonesPlayer>
            <ol className={s.milestones}>
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
        <section className={`${s.section} ${s.wrap}`} id={id} style={{ paddingTop: 0 }}>
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
                <span className={s.uspNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className={s.uspIcon}
                  style={smallIcons ? { width: 40, height: 40, borderRadius: 13, marginBottom: 16 } : undefined}
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
        <section className={`${s.section} ${s.wrap}`} id={id} style={{ paddingTop: 0 }}>
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
  const [title, accent] = splitH1(content.h1)

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

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {SIDE_HERO.has(content.path) ? (
          <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
            <div className={p.split2Inner}>
              <div className={`${s.heroContent} ${p.split2Copy}`}>
                <span className={s.heroTag}>{silo.name}</span>
                <h1>
                  {title} <br className={s.mBreakDesk} />
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
        <section className={`${s.section} ${s.wrap}`} id="intro" style={{ paddingBottom: 24 }}>
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
            key={section.h2}
          />
        ))}

        <LandingReviews />

        {/* FAQ — same questions and answers as the FAQPage schema. */}
        {content.faqs.length > 0 && (
          <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
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
        <section className={`${s.section} ${s.wrap}`} id="explore" style={{ paddingTop: 0 }}>
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
