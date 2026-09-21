import type { CSSProperties } from "react"
import Link from "next/link"
import s from "./landing.module.css"
import f from "./home-fx.module.css"
import HomeReveal from "./home-reveal"

/* ------------------------------------------------------------------ *
 * WHO WE HELP — the old "Who Uses SafeStorage in Dubai?" use cases and
 * links, in the split + skyline-card design, one short line per row.
 * ------------------------------------------------------------------ */
const types = [
  { emoji: "🏗️", href: "/self-storage-dubai/short-term", title: "Villa & Apartment Renovations", sub: "Stored safely for 2 weeks to 6 months" },
  { emoji: "✈️", href: "/personal-storage-dubai", title: "Expats Relocating or Travelling", sub: "Monthly storage between moves or leases" },
  { emoji: "🛒", href: "/business-storage-dubai/ecommerce-fulfilment", title: "E-commerce & Small Businesses", sub: "Stock and office items, no warehouse lease" },
  { emoji: "📦", href: "/personal-storage-dubai", title: "Downsizing & Decluttering", sub: "Keep what you love, from just 25 sq ft" },
  { emoji: "🎓", href: "/personal-storage-dubai/student-storage", title: "Students Between Semesters", sub: "Stored over the break, delivered back" },
  { emoji: "🚗", href: "/personal-storage-dubai/car-storage", title: "Seasonal Vehicle Storage", sub: "Covered, CCTV-watched bays for vehicles" },
]

export function LandingTypes() {
  return (
    <section className={`${s.section} ${s.wrap}`} id="types">
      <div className={s.split}>
        <div>
          <span className={s.howEyebrow}>Who we help</span>
          <h2>
            Who uses <em>SafeStorage in Dubai?</em>
          </h2>
          <p className={s.splitBlurb}>
            From families renovating villas to e-commerce sellers outgrowing their apartments —
            SafeStorage serves every kind of storage need across Dubai.
          </p>
          {/* the owner's picture, exactly as they saved it (2026-09-21): no crop, no edit */}
          <div
            className={s.skylineCard}
            style={{ backgroundImage: 'url("/landing/who-uses-cut.webp")', backgroundPosition: "center", aspectRatio: "1434 / 907" }}
            role="img"
            aria-label="Residents, business owners, expat families, students, vehicle owners and travellers who use SafeStorage in Dubai"
          />
        </div>
        <HomeReveal className={`${s.typeList} ${f.in}`}>
          {types.map((t, i) => (
            <Link className={s.typeRow} href={t.href} key={t.title} style={{ ["--i" as string]: i } as CSSProperties}>
              <span className={f.rowEmoji} aria-hidden="true">
                {t.emoji}
              </span>
              <h3>
                {t.title}
                <small>{t.sub}</small>
              </h3>
              <span className={s.circleBtn}>↗</span>
            </Link>
          ))}
        </HomeReveal>
      </div>

      {/* PROOF — comp section 7: featured testimonial + customer story */}
      <div className={s.proofGrid}>
        <div className={s.quoteCard}>
          <blockquote>
            I left Dubai for eight months and needed somewhere safe for my whole apartment. They
            packed everything, sent me the inventory, and delivered it all back the week I returned —
            not a single item missing or damaged.
          </blockquote>
          <div className={s.quoteWho}>
            <span className={s.avatar}>JL</span>
            <div>
              <b>Jennifer Lee</b>
              <small>Expat, Downtown Dubai</small>
            </div>
          </div>
        </div>

        <Link href="/business-storage-dubai/ecommerce-fulfilment" className={s.caseCard}>
          <span className={s.caseTag}>Customer story</span>
          <h3>How a Dubai e-commerce seller freed its office by moving stock to SafeStorage</h3>
          <div className={s.caseMetric}>
            <strong>24/7</strong>
            <small>access to seasonal inventory, with space scaled up or down every month</small>
            <span className={`${s.circleBtn} ${s.circleNavy}`}>↗</span>
          </div>
        </Link>
      </div>
    </section>
  )
}
