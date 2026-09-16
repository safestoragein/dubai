import Link from "next/link"
import s from "./landing.module.css"

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="9 7 17 7 17 15" />
  </svg>
)

/* ------------------------------------------------------------------ *
 * SERVICES — comp section 4
 * The four cards map to the real service silos on the site, so every
 * card is a live internal link rather than the comp's "#connect".
 * ------------------------------------------------------------------ */
const services = [
  {
    href: "/personal-storage-dubai",
    img: "/landing/svc-household.jpg",
    pos: "center 32%",
    title: "Household Storage",
    sub: "Furniture, appliances & full homes",
  },
  {
    href: "/business-storage-dubai",
    img: "/landing/svc-business.jpg",
    pos: "center 55%",
    title: "Business Storage",
    sub: "Inventory, files & office assets",
  },
  {
    href: "/moving-storage-dubai",
    img: "/landing/svc-relocation.jpg",
    pos: "center 62%",
    title: "Relocation Storage",
    sub: "Moving, travel & short stays",
  },
  {
    href: "/business-storage-dubai/document-storage",
    img: "/landing/svc-document.jpg",
    pos: "center 40%",
    title: "Document Storage",
    sub: "Archives, records & retrieval",
  },
]

export function LandingServices() {
  return (
    <section className={`${s.section} ${s.wrap}`} id="services">
      <div className={s.sectionHead}>
        <span className={s.eyebrow}>Our services</span>
        <h2>Storage Solutions for Every Need in Dubai</h2>
        <p>
          Whether you&apos;re a family, a freelancer, or a fast-growing business — every plan includes
          packing, door-to-door transport, and organised, catalogued warehousing.
        </p>
      </div>

      <div className={s.svcGrid}>
        {services.map((svc) => (
          <Link className={s.card} href={svc.href} key={svc.href}>
            <div
              className={s.svcMedia}
              style={{ backgroundImage: `url(${svc.img})`, backgroundPosition: svc.pos }}
              role="img"
              aria-label={svc.title}
            />
            <div className={s.svcBody}>
              <h3>
                {svc.title}
                <span>{svc.sub}</span>
              </h3>
              <span className={s.circleBtn}>
                <ArrowUpRight />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className={s.svcCta}>
        <Link className={`${s.btn} ${s.btnNavy}`} href="/self-storage-dubai">
          View All Services →
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * HOW IT WORKS — the site's four-step flow, restyled into the comp's
 * card language. Kept because it is the page's highest-value explainer.
 * ------------------------------------------------------------------ */
const steps = [
  { icon: "📝", title: "Tell us what you need" },
  { icon: "📱", title: "Book online or call us" },
  { icon: "🚚", title: "We pick up from your door" },
  { icon: "🔁", title: "Access anytime, return when ready" },
]

export function LandingSteps() {
  return (
    <section className={`${s.section} ${s.wrap}`} id="how-it-works" style={{ paddingTop: 0 }}>
      <div className={s.sectionHead}>
        <span className={s.eyebrow}>How it works</span>
        <h2>
          Four Steps From Your Door to <em>Our Warehouse</em>
        </h2>
        <p>Storage without the truck rental, the lifting, or the paperwork.</p>
      </div>

      <div className={s.stepGrid}>
        {steps.map((step, i) => (
          <div className={s.step} key={step.title}>
            <span className={s.stepNum} aria-hidden="true">
              {i + 1}
            </span>
            <div className={s.stepIcon} aria-hidden="true">
              {step.icon}
            </div>
            <h3>{step.title}</h3>
          </div>
        ))}
      </div>

      <div className={s.svcCta}>
        <Link className={`${s.btn} ${s.btnAccent}`} href="/self-storage-dubai/how-it-works">
          Learn More About Our Process →
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * WHY SAFESTORAGE — comp's dark band. Four differentiators drawn from
 * the old why-choose-us grid.
 * ------------------------------------------------------------------ */
const feats = [
  { icon: "🚚", title: "Door-to-door service", body: "We come to you anywhere in Dubai — bring the packing materials, load, and deliver back to your door." },
  { icon: "📋", title: "Digital inventory", body: "Every item is photographed and catalogued at pickup, so you always know what is stored and where." },
  { icon: "💬", title: "Dedicated consultant", body: "One named point of contact from booking to retrieval. No call centres, no ticket queues." },
  { icon: "🕑", title: "Flexible tenure", body: "Store for a month or two years. Upgrade, downsize, or cancel with 48 hours' notice — no lock-in." },
]

const stats = [
  { v: "100,000+", label: "Customers worldwide" },
  { v: "4.9", suffix: "★", label: "Average Google rating" },
  { v: "10+", label: "Years serving Dubai" },
  { v: "12.65", suffix: " AED", label: "Per sqft, VAT included" },
]

export function LandingWhy() {
  return (
    <section className={s.wrap} id="why">
      <div className={s.darkBand}>
        <span className={s.eyebrow}>Why SafeStorage</span>
        <h2>
          Storage That Works Around <em>Your Life</em>, Not the Other Way Round
        </h2>
        <div className={s.featGrid}>
          {feats.map((f) => (
            <div className={s.feat} key={f.title}>
              <div className={s.featIcon} aria-hidden="true">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={s.stats}>
        {stats.map((st) => (
          <div className={s.stat} key={st.label}>
            <strong>
              {st.v}
              {st.suffix ? <i>{st.suffix}</i> : null}
            </strong>
            <span>{st.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
