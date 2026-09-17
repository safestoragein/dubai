import Link from "next/link"
import s from "./landing.module.css"

/* ------------------------------------------------------------------ *
 * WHO WE HELP — the old "Who Uses SafeStorage in Dubai?" use cases and
 * links, in the split + skyline-card design, one short line per row.
 * ------------------------------------------------------------------ */
const types = [
  { href: "/self-storage-dubai/short-term", title: "Villa & Apartment Renovations", sub: "Stored safely for 2 weeks to 6 months" },
  { href: "/personal-storage-dubai", title: "Expats Relocating or Travelling", sub: "Monthly storage between moves or leases" },
  { href: "/business-storage-dubai/ecommerce-fulfilment", title: "E-commerce & Small Businesses", sub: "Stock and office items, no warehouse lease" },
  { href: "/personal-storage-dubai", title: "Downsizing & Decluttering", sub: "Keep what you love, from just 25 sq ft" },
  { href: "/personal-storage-dubai/student-storage", title: "Students Between Semesters", sub: "Stored over the break, delivered back" },
  { href: "/personal-storage-dubai/car-storage", title: "Seasonal Vehicle Storage", sub: "Covered, CCTV-watched bays for vehicles" },
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
          <div className={s.skylineCard} role="img" aria-label="SafeStorage warehouse and delivery fleet in Dubai" />
        </div>
        <div className={s.typeList}>
          {types.map((t) => (
            <Link className={s.typeRow} href={t.href} key={t.title}>
              <h3>
                {t.title}
                <small>{t.sub}</small>
              </h3>
              <span className={s.circleBtn}>↗</span>
            </Link>
          ))}
        </div>
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
