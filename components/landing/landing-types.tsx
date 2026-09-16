import Link from "next/link"
import s from "./landing.module.css"

/* ------------------------------------------------------------------ *
 * STORAGE TYPES — comp section 6 (split + skyline card).
 * Every row points at a real specialised-storage page, which also keeps
 * those pages off the orphan list the old homepage link block covered.
 * ------------------------------------------------------------------ */
const types = [
  { href: "/personal-storage-dubai/furniture-storage", title: "Furniture Storage", sub: "Sofas, beds, wardrobes & dining sets" },
  { href: "/personal-storage-dubai/electronics-storage", title: "Electronics & Appliance Storage", sub: "Fridges, washers, TVs & devices" },
  { href: "/self-storage-dubai/short-term", title: "Short-Term Storage", sub: "Renovations, travel & lease gaps" },
  { href: "/personal-storage-dubai/expat-storage", title: "Long-Term & Expat Storage", sub: "Leaving the UAE for months or years" },
  { href: "/business-storage-dubai/ecommerce-fulfilment", title: "Office & Inventory Storage", sub: "Stock, records & office assets" },
  { href: "/personal-storage-dubai/car-storage", title: "Vehicle Storage", sub: "Cars, bikes, boats & jet skis" },
]

export function LandingTypes() {
  return (
    <section className={`${s.section} ${s.wrap}`} id="types">
      <div className={s.split}>
        <div>
          <span className={s.eyebrow}>Storage types</span>
          <h2>Our Storage Spans Every Need and Season of Life</h2>
          <p className={s.splitBlurb}>
            Renovating a villa, relocating between emirates, downsizing, or scaling a business —
            there is a storage plan shaped to it, and our team confirms the size before you book.
          </p>
          <div className={s.skylineCard} role="img" aria-label="SafeStorage warehouse and delivery fleet in Dubai" />
        </div>
        <div className={s.typeList}>
          {types.map((t) => (
            <Link className={s.typeRow} href={t.href} key={t.href}>
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
