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
      <div className={s.sectionHead}>
        <span className={s.eyebrow}>Our latest insights</span>
        <h2>Storage Advice From People Who Store for a Living</h2>
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

      <div className={s.logos}>
        {areas.map((a) => (
          <Link href={`/locations/dubai/${a.slug}`} key={a.slug}>
            {a.name}
          </Link>
        ))}
        <Link href="/locations/dubai">All Dubai areas →</Link>
      </div>
    </section>
  )
}
