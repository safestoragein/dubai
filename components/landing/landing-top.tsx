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
    <section className={`${s.hero} ${s.wrap}`}>
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
            Door-to-door pickup and delivery across Dubai. Secure, clean units from 12 AED (VAT excluded),
            with no lock-in.
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
 * INTRO CARDS — comp section 3
 * ------------------------------------------------------------------ */
export function LandingIntro() {
  return (
    <section className={`${s.wrap} ${s.introGrid}`}>
      <Link href="/about" className={`${s.introCard} ${s.introWhite}`}>
        <div>
          <span className={s.eyebrow}>Who we are</span>
          <h3>Dubai&apos;s valet storage specialists for homes and businesses</h3>
          <p>
            We come to your door, pack and catalogue everything, and store it in secure, clean,
            pest-controlled facilities — managed end to end by one accountable team.
          </p>
        </div>
        <div className={s.introFoot}>
          <small>Since 2015</small>
          <span className={s.circleBtn}>↗</span>
        </div>
      </Link>

      <Link href="/testimonials" className={`${s.introCard} ${s.introAccent}`}>
        <div>
          <span className={s.eyebrow} style={{ color: "rgba(255,255,255,.85)" }}>
            Milestone
          </span>
          <h3>100,000+ customers have trusted SafeStorage with their belongings</h3>
          <p>Across India and the UAE — households, expats, startups, and enterprises alike.</p>
        </div>
        <div className={s.introFoot}>
          <small style={{ color: "rgba(255,255,255,.85)" }}>4.9/5 · 6,700+ reviews</small>
          <span className={`${s.circleBtn} ${s.circleNavy}`}>↗</span>
        </div>
      </Link>

      <Link href="/self-storage-dubai/unit-sizes" className={`${s.introCard} ${s.introNavy}`}>
        <div>
          <span className={s.eyebrow} style={{ color: "rgba(255,255,255,.6)" }}>
            Pricing
          </span>
          <h3>Flexible monthly plans from 12 AED / sqft, VAT excluded</h3>
          <p>
            Units from 25 sq ft to 300+ sq ft. No setup fees, no deposits, no lock-in — and a
            price-match guarantee.
          </p>
        </div>
        <div className={s.introFoot}>
          <small>25 – 300+ sq ft</small>
          <span className={s.circleBtn}>↗</span>
        </div>
      </Link>
    </section>
  )
}
