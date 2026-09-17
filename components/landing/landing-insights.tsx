import Link from "next/link"
import s from "./landing.module.css"

/* ------------------------------------------------------------------ *
 * INSIGHTS — comp section 9. Two featured guides plus the areas strip
 * that replaces the comp's decorative logo row with real location links.
 * ------------------------------------------------------------------ */
const insights = [
  {
    href: "/blog/long-term-storage-expats",
    img: "/landing/insight-household.png",
    w: 380,
    h: 502,
    media: s.i1,
    pill: "Guides",
    title: "The Complete Checklist for Storing Your Home Before Leaving the UAE",
    alt: "Household items inside a SafeStorage unit",
  },
  {
    href: "/blog/small-business-storage",
    img: "/landing/insight-business.png",
    w: 380,
    h: 362,
    media: s.i2,
    pill: "Business",
    title: "Why Dubai SMEs Are Swapping Office Storerooms for Warehouse Storage",
    alt: "Business inventory and records in a storage unit",
  },
]

const areas = [
  { name: "Dubai Marina", slug: "dubai-marina" },
  { name: "Business Bay", slug: "business-bay" },
  { name: "Downtown Dubai", slug: "downtown-dubai" },
  { name: "Jumeirah", slug: "jumeirah" },
  { name: "Al Barsha", slug: "al-barsha" },
  { name: "Deira", slug: "deira" },
]

export function LandingInsights() {
  return (
    <section className={`${s.section} ${s.wrap}`} id="insights" style={{ paddingTop: 20 }}>
      <div className={s.howHead}>
        <div>
          <span className={s.howEyebrow}>Our latest insights</span>
          <h2>
            Storage advice from <em>people who store for a living.</em>
          </h2>
        </div>
      </div>

      <div className={s.insGrid}>
        {insights.map((ins) => (
          <Link className={s.insCard} href={ins.href} key={ins.href}>
            <div className={`${s.insMedia} ${ins.media}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* Not loading="lazy": the CSS sizes this to `width:auto` inside a
                  grid cell, so before it loads the box measures 0x0 and Chrome
                  never fires the lazy load — both cards stayed empty. */}
              <img src={ins.img} alt={ins.alt} width={ins.w} height={ins.h} decoding="async" />
            </div>
            <div className={s.insBody}>
              <span className={s.pill}>{ins.pill}</span>
              <h3>{ins.title}</h3>
              <span className={s.insLink}>Read article →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Areas marquee: the list is rendered twice and slid by -50% for a
          seamless loop. The second copy is hidden from screen readers and the
          tab order, so each area is announced and focusable once. Pure CSS,
          pauses on hover, static under prefers-reduced-motion. */}
      <div className={s.areas}>
        <div className={s.marquee}>
          <div className={s.marqueeTrack}>
            {[0, 1].map((copy) => (
              <ul className={s.marqueeGroup} aria-hidden={copy === 1 || undefined} key={copy}>
                {areas.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/locations/dubai/${a.slug}`} tabIndex={copy === 1 ? -1 : undefined}>
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <Link className={s.areasAll} href="/locations/dubai">
          All Dubai areas →
        </Link>
      </div>
    </section>
  )
}
