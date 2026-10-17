import Link from "next/link"
import { CheckCircle2, ClipboardList, FileText, Hammer, Lightbulb, MapPinned, Package, Truck } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { cairo, manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import FaqAccordion from "@/components/landing/faq-accordion"
import { MilestonesPlayer } from "@/components/landing/milestones-player"
import s from "@/components/landing/landing.module.css"
import a from "./ar-movers.module.css"
import { renderRich, plain } from "@/components/silo/rich-text"
import { env } from "@/lib/env"
import { AR_MOVERS_PAGES, type ArMoversPage } from "@/lib/ar/movers-pages"
import type { Section } from "@/lib/silo/types"

/**
 * Arabic movers page, in the landing design (same blocks as LandingSiloPage),
 * right-to-left. The English-only LandingTrust / LandingReviews / LandingConnect
 * are deliberately left out: they carry an English rating strip, and the AE rules
 * forbid ratings and review counts in copy anyway.
 */
const SITE = "https://safestorage.ae"
const STEP_ICONS = [ClipboardList, FileText, Package, Truck, Hammer, CheckCircle2]
const HERO_IMAGE = "/landing/movers-illustration.jpg"

/** Title → [first part, accent run]. The text is unchanged; only its styling splits. */
function splitH1(h1: string): [string, string] {
  const m = h1.match(/^(.*?:)\s+(.+)$/)
  if (m) return [m[1], m[2]]
  const w = h1.split(" ")
  const k = Math.ceil(w.length * 0.55)
  return [w.slice(0, k).join(" "), w.slice(k).join(" ")]
}
function accentSplit(text: string): [string, string] {
  const w = text.split(" ")
  const n = w.length > 6 ? 3 : w.length > 2 ? 2 : 1
  return [w.slice(0, w.length - n).join(" "), w.slice(w.length - n).join(" ")]
}

const EYEBROW: Record<Section["kind"], string> = {
  prose: "نظرة عامة",
  table: "في لمحة",
  steps: "كيف نعمل",
  cards: "ما يشمله",
  checklist: "قائمة مراجعة",
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

function SectionView({ section, index }: { section: Section; index: number }) {
  const id = `s${index + 1}`
  const pad = index === 0 ? undefined : { paddingTop: 0 }
  switch (section.kind) {
    case "prose":
      return (
        <section className={`${s.section} ${s.wrap}`} id={id} style={pad}>
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
                    <span className={s.milestoneYear}>الخطوة {i + 1}</span>
                    <b>{it.h}</b>
                    <small>{renderRich(it.p)}</small>
                  </li>
                )
              })}
            </ol>
          </MilestonesPlayer>
        </section>
      )
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
    default:
      return null
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
        ←
      </span>
    </Link>
  )
}

export function arSchemas(p: ArMoversPage) {
  const url = `${SITE}${p.path}`
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: p.title,
      description: p.description,
      url,
      isPartOf: { "@id": `${SITE}/#website` },
      inLanguage: "ar-AE",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      serviceType: "نقل الأثاث",
      name: p.h1,
      description: p.description,
      provider: { "@id": `${SITE}/#organization` },
      areaServed: { "@type": p.slug === "uae" ? "Country" : "AdministrativeArea", name: p.nameEn },
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
      })),
    },
  ]
}

export default function ArMoversPageView({ page }: { page: ArMoversPage }) {
  const [title, accent] = splitH1(page.h1)
  const others = AR_MOVERS_PAGES.filter((x) => x.slug !== page.slug)
  const isHub = page.slug === "uae"
  return (
    <>
      <SchemaScript schema={arSchemas(page)} />
      <SiloBreadcrumb
        trail={
          isHub
            ? [{ name: "الرئيسية", href: "/ar" }, { name: "نقل الأثاث في الإمارات" }]
            : [
                { name: "الرئيسية", href: "/ar" },
                { name: "نقل الأثاث في الإمارات", href: "/ar/moving-storage" },
                { name: page.nameAr },
              ]
        }
      />

      <div className={`${s.page} ${a.ar} ${sora.variable} ${manrope.variable} ${cairo.variable}`}>
        <section className={`${s.hero} ${s.heroBleed} ${s.heroSplit}`}>
          <div className={s.heroInner} style={{ ["--hero-img" as string]: `url("${HERO_IMAGE}")`, backgroundPosition: "center 50%" }}>
            <div className={s.heroContent}>
              <span className={s.heroTag}>{page.nameAr}</span>
              <h1 className={a.heroTitle}>
                {title} <em>{accent}</em>
              </h1>
              <p>{plain(page.description)}</p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  احصل على عرض سعر مجاني ←
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> <span dir="ltr">050-577-3388</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.wrap}`} id="intro" style={{ paddingBottom: 24 }}>
          <Head title={page.introH2} eyebrow="باختصار" />
          <div className={s.prose} style={{ margin: 0, maxWidth: 860 }}>
            {page.hero.map((p, i) => (
              <p key={i} className={i === 0 ? s.proseLead : undefined}>
                {renderRich(p)}
              </p>
            ))}
          </div>
        </section>

        {page.sections.map((section, i) => (
          <SectionView section={section} index={i} key={section.h2} />
        ))}

        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>جيد أن تعرف</span>
              <h2>
                أسئلة <em>شائعة.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={page.faqs.map((f) => ({ q: f.q, a: f.a }))} />
        </section>

        <section className={`${s.section} ${s.wrap}`} id="explore" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>استكشف</span>
              <h2>
                المزيد في <em>نقل الأثاث.</em>
              </h2>
            </div>
          </div>
          <div className={s.miniGrid}>
            {others.map((o) => (
              <ExploreCard key={o.path} href={o.path} label={`نقل اثاث ${o.nameAr}`} blurb={o.description.split(":")[0]} />
            ))}
            {page.enPath && (
              <ExploreCard href={page.enPath} label="English version" blurb={`Movers in ${page.nameEn}`} />
            )}
            <Link className={`${s.miniCard} ${s.miniLink}`} href="/ar/locations">
              <span className={s.miniIcon} aria-hidden="true">
                <MapPinned />
              </span>
              <div>
                <b>المناطق التي نستلم منها</b>
                <small>كل إمارة وحي، مع تفاصيل محلية.</small>
              </div>
              <span className={s.miniArrow} aria-hidden="true">
                ←
              </span>
            </Link>
          </div>
        </section>

        <CtaBand
          title={page.cta.h2}
          blurb={page.cta.p}
          ctaLabel="احصل على عرض سعر مجاني"
          whatsAppLabel="واتساب"
          callLabel="اتصل الآن"
        />
      </div>
    </>
  )
}
