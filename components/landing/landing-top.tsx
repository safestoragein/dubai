import type { CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { env } from "@/lib/env"
import s from "./landing.module.css"

/* ------------------------------------------------------------------ *
 * HERO — comp section 1
 * Copy is the site's own: headline and paragraph carried over from the
 * previous hero-section-quote, phone number from lib/env.
 * ------------------------------------------------------------------ */
export function LandingHero() {
  return (
    <section className={`${s.hero} ${s.heroBleed}`}>
      <div className={s.heroInner}>
        <div className={s.heroContent}>
          <span className={s.heroTag}>Serving Globally Since 2015</span>
          <h1>
            Dubai&apos;s Most Trusted <em>Storage Partner</em>
          </h1>
          <div className={s.heroSlogan}>For anything you care..!</div>
          {/* Kept to two lines on desktop: the detail this used to carry (no truck
              rental, no heavy lifting, carton-to-villa) is covered by the steps
              and the Why band further down. */}
          <p>
            Door-to-door pickup and delivery across Dubai. Secure, clean storage with
            no lock-in.
          </p>
          <div className={s.heroCta}>
            <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
              Get Your Free Quote in 2 Minutes →
            </Link>
            <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
              <span className={s.phIco}>📞</span> Call: 050-577-3388
            </a>
          </div>
        </div>
        <div className={s.heroRating}>
          <strong>4.9★</strong>
          <span>6,700+ Google reviews</span>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * TRUST STRIP — comp section 2
 * Same five badges as the old trust-badges component, unchanged values.
 * ------------------------------------------------------------------ */
const badges = [
  { icon: "⭐", tone: s.tGold, value: s.vGold, v: "4.9/5", label: "Google Rating", sub: "6,700+ reviews worldwide" },
  { icon: "🎖️", tone: s.tOrange, value: s.vOrange, v: "10+", label: "Years Global Experience", sub: "Since 2015" },
  { icon: "🛡️", tone: s.tBlue, value: s.vBlue, v: "100,000+", label: "Happy Customers", sub: "Homes & businesses" },
  { icon: "🚚", tone: s.tPurple, value: s.vPurple, v: "Door-to-Door", label: "Pickup & Delivery", sub: "Within Dubai" },
  { icon: "🕑", tone: s.tOrange, value: s.vOrange, v: "15 Min", label: "Average Response", sub: "Quick support guarantee" },
  { icon: "🌡️", tone: s.tGreen, value: s.vGreen, v: "Climate Controlled", label: "Indoor Units", sub: "Standard on every booking" },
]

export function LandingTrust() {
  return (
    <section className={s.wrap}>
      <div className={s.trust}>
        {badges.map((b) => (
          <div className={s.trustItem} key={b.label}>
            <div className={`${s.trustIcon} ${b.tone}`} aria-hidden="true">
              {b.icon}
            </div>
            <strong className={b.value}>{b.v}</strong>
            <b>{b.label}</b>
            <small>{b.sub}</small>
          </div>
        ))}
      </div>
      <p className={s.scrollHint}>Swipe for more →</p>
      <hr className={s.trustRule} />
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * SPLIT HERO — the home hero's look (light wash from the left, copy
 * left-aligned, rating card top right) with a page's own photo and copy.
 * ------------------------------------------------------------------ */
export function SplitHero({
  eyebrow,
  title,
  titleAccent,
  blurb,
  image,
  imagePosition = "center",
  stats,
  ctaLabel = "Get Your Free Quote",
  ctaHref = "/get-quote",
  phoneLabel = "Call: 050-577-3388",
}: {
  eyebrow?: string
  title: string
  titleAccent?: string
  blurb: string
  image: string
  imagePosition?: string
  stats?: { Icon: LucideIcon; label: string }[]
  ctaLabel?: string
  ctaHref?: string
  phoneLabel?: string
}) {
  const style = {
    "--hero-img": `url("${image}")`,
    backgroundPosition: imagePosition,
  } as CSSProperties
  return (
    <section className={`${s.hero} ${s.heroBleed} ${s.heroSplit}`}>
      <div className={s.heroInner} style={style}>
        <div className={s.heroContent}>
          {eyebrow ? <span className={s.heroTag}>{eyebrow}</span> : null}
          <h1>
            {title}
            {titleAccent ? (
              <>
                {" "}
                <br className={s.mBreakDesk} />
                <em>{titleAccent}</em>
              </>
            ) : null}
          </h1>
          <p>{blurb}</p>
          <div className={s.heroCta}>
            <Link className={`${s.btn} ${s.btnAccent}`} href={ctaHref}>
              {ctaLabel} →
            </Link>
            <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
              <span className={s.phIco}>📞</span> {phoneLabel}
            </a>
          </div>
          {stats?.length ? (
            <div className={s.heroSplitStats}>
              {stats.map(({ Icon, label }) => (
                <span key={label}>
                  <Icon strokeWidth={2} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className={s.heroRating}>
          <strong>4.9★</strong>
          <span>6,700+ Google reviews</span>
        </div>
      </div>
    </section>
  )
}
