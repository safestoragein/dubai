import type { CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import { Info } from "lucide-react"
import Link from "next/link"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { env } from "@/lib/env"
import { UspRail } from "@/components/landing/usp-rail"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import AreaLinks from "@/components/locations/area-links"
import s from "@/components/landing/landing.module.css"
import p from "./location-landing.module.css"

/* ------------------------------------------------------------------ *
 * LOCATION LANDING — the landing design system for an area page
 * (owner, 2026-09-21). Every word comes from the page that uses it, so
 * the live copy is carried over unchanged; this file only lays it out:
 * photo hero, trust strip, area chips, emoji rails, a dark feature band,
 * panels, five questions and the quote band. Pages that still use the
 * older LocationPage are untouched.
 * ------------------------------------------------------------------ */
export type LocationLandingProps = {
  name: string
  heroImage: string
  heroPosition?: string
  heroAspect?: string
  eyebrow: string
  title: string
  titleAccent: string
  blurb: string
  areas: string[]
  distance: string
  benefits: { e: string; text: string }[]
  features: { Icon: LucideIcon; title: string; text: string }[]
  lead: { eyebrow: string; title: string; accent: string; paras: string[] }
  panels: { e: string; title: string; paras: string[] }[]
  zones: { title: string; items: string[] }[]
  uses: { e: string; title: string; text: string }[]
  tips?: string[]
  ctaLine: string
  faqs: { q: string; a: string }[]
  ctaTitle: string
  ctaBlurb: string
  emirate: string
  area: string
}

const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

/** The owner wants these pages short: the opening paragraph is kept to its first
 *  two sentences, which reads as four or five lines. */
const shorten = (t: string, sentences = 2) => {
  const parts = t.match(/[^.!?]+[.!?]+/g)
  return parts && parts.length > sentences ? parts.slice(0, sentences).join("").trim() : t
}

export default function LocationLanding({
  name,
  heroImage,
  heroPosition = "right 45%",
  heroAspect,
  eyebrow,
  title,
  titleAccent,
  blurb,
  areas,
  distance,
  benefits,
  features,
  lead,
  panels,
  zones,
  uses,
  tips = [],
  ctaLine,
  faqs,
  ctaTitle,
  ctaBlurb,
  emirate,
  area,
}: LocationLandingProps) {
  return (
    <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
      {/* hero: copy on the left, the area's own photo big on the right */}
      <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
        <div className={p.split2Inner}>
          <div className={`${s.heroContent} ${p.split2Copy}`}>
            <span className={s.heroTag}>{eyebrow}</span>
            <h1>
              {title} <br className={s.mBreakDesk} />
              <em>{titleAccent}</em>
            </h1>
            <p>{blurb}</p>
            <div className={s.heroCta}>
              <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                Get Instant Quote →
              </Link>
              <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                <span className={s.phIco}>📞</span> Call +971505773388
              </a>
            </div>
          </div>
          <div className={p.split2Photo} style={heroAspect ? ({ aspectRatio: heroAspect } as CSSProperties) : undefined}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroImage} alt={`SafeStorage team collecting boxes in ${name}`} style={{ objectPosition: heroPosition }} fetchPriority="high" />
            <div className={s.heroRating}>
              <strong>4.9★</strong>
              <span>6,700+ Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      <LandingTrust />

      {/* areas covered */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
        <div className={s.howHead}>
          <div>
            <span className={s.howEyebrow}>Areas we cover</span>
            <h2>
              Pickup across <em>{name} and nearby.</em>
            </h2>
          </div>
        </div>
        <div className={p.areaPills}>
          {areas.map((a) => (
            <span className={p.areaPill} key={a}>
              <span aria-hidden="true">📍</span> {a}
            </span>
          ))}
        </div>
        <div className={s.movingTip}>
          <Info aria-hidden="true" />
          <p>
            Distance from {name}: {distance}
          </p>
        </div>
      </section>

      {/* why us here */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <HomeReveal>
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>Why us here</span>
                <h2>
                  Why choose SafeStorage for <em>{name}?</em>
                </h2>
              </div>
            }
          >
            {benefits.map((b, i) => (
              <article className={`${s.usp} ${p.plan}`} style={idx(i)} key={b.text}>
                <span className={p.bigEmoji} aria-hidden="true">
                  {b.e}
                </span>
                <h3>{b.text}</h3>
              </article>
            ))}
          </UspRail>
          <p className={s.scrollHint}>Swipe for more →</p>
        </HomeReveal>
      </section>

      {/* dark band: what every plan includes */}
      <section className={`${s.darkBand} ${s.whyBand}`}>
        <div className={s.wrap}>
          <div className={s.bandHead}>
            <span className={s.howEyebrow}>Our storage features</span>
            <h2>
              Everything included <em>in every plan.</em>
            </h2>
          </div>
          <FeatScroller>
            {features.map((f) => (
              <article className={s.feat} key={f.title}>
                <div className={s.featIcon}>
                  <f.Icon strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </FeatScroller>
        </div>
      </section>

      {/* the page's own writing */}
      <section className={`${s.section} ${s.wrap}`}>
        <div className={s.howHead}>
          <div>
            <span className={s.howEyebrow}>{lead.eyebrow}</span>
            <h2 className={p.longH2}>
              {lead.title} <em>{lead.accent}</em>
            </h2>
          </div>
        </div>
        {/* owner, 2026-09-21: the page opens with one short paragraph, not three */}
        {lead.paras.slice(0, 1).map((t) => (
          <p className={p.panelText} key={t.slice(0, 40)}>
            {shorten(t)}
          </p>
        ))}

        <HomeReveal className={p.pair}>
          {/* two panels is enough — the owner asked for less text on these pages */}
          {panels.slice(0, 2).map((panel, i) => (
            <div className={`${p.panel} ${p.plan}`} style={idx(i)} key={panel.title}>
              <h3 className={p.panelTitle}>
                <span aria-hidden="true">{panel.e}</span> {panel.title}
              </h3>
              {panel.paras.slice(0, 1).map((t) => (
                <p className={p.panelText} key={t.slice(0, 40)}>
                  {t}
                </p>
              ))}
            </div>
          ))}
        </HomeReveal>
      </section>

      {/* what people store here */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <HomeReveal>
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>Popular uses</span>
                <h2>
                  What {name} customers <em>store with us.</em>
                </h2>
              </div>
            }
          >
            {uses.map((u, i) => (
              <article className={`${s.usp} ${p.plan}`} style={idx(i)} key={u.title}>
                <span className={p.bigEmoji} aria-hidden="true">
                  {u.e}
                </span>
                <h3>{u.title}</h3>
                {u.text ? <p>{u.text}</p> : null}
              </article>
            ))}
          </UspRail>
          <p className={s.scrollHint}>Swipe for more →</p>
        </HomeReveal>
      </section>

      {/* areas served, in columns */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.howHead}>
          <div>
            <span className={s.howEyebrow}>Service zone</span>
            <h2 className={p.longH2}>
              Areas served — <em>{name} storage zone.</em>
            </h2>
          </div>
        </div>
        <HomeReveal className={s.miniGrid}>
          {zones.map((z, i) => (
            <div className={`${s.miniCard} ${p.plan}`} style={idx(i)} key={z.title}>
              <h3>{z.title}</h3>
              <ul className={s.checkList}>
                {z.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </HomeReveal>
        {tips.map((t) => (
          <div className={s.movingTip} key={t.slice(0, 30)}>
            <Info aria-hidden="true" />
            <p>{t}</p>
          </div>
        ))}
        <div className={s.howCta}>
          <span>{ctaLine}</span>
          <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* five questions */}
      <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
        <div className={s.howHead}>
          <div>
            <span className={s.howEyebrow}>FAQ</span>
            <h2 className={p.longH2}>
              Frequently asked questions — <em>{name} storage.</em>
            </h2>
          </div>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBand title={ctaTitle} blurb={ctaBlurb} whatsAppLabel="WhatsApp Us" callLabel="Call Now" />

      <AreaLinks emirate={emirate} area={area} />
    </div>
  )
}
