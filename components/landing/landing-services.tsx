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
 * HOW IT WORKS — a four-stop timeline: a line illustration per step sits
 * on a grey ground line, an orange rail links the numbered stops below.
 * On phones it folds into a vertical rail (illustrations hidden).
 * ------------------------------------------------------------------ */
const NAVY = "#25315a"
const ORANGE = "#ee5824"

const IlloPhone = () => (
  <svg viewBox="0 0 140 110" aria-hidden="true">
    <circle cx="66" cy="62" r="46" fill="#fdeee6" />
    <rect x="46" y="18" width="42" height="80" rx="9" fill={NAVY} />
    <rect x="51" y="27" width="32" height="58" rx="3" fill="#fff" />
    <path d="M57 38h20M57 46h20M57 54h13" stroke="#c9cdd9" strokeWidth="3" strokeLinecap="round" />
    <rect x="57" y="66" width="20" height="7" rx="3.5" fill={ORANGE} />
    <circle cx="89" cy="20" r="10" fill={ORANGE} />
    <path d="m84.5 20 3 3 6-6" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IlloHouse = () => (
  <svg viewBox="0 0 140 110" aria-hidden="true">
    <circle cx="70" cy="62" r="46" fill="#fdeee6" />
    <path d="M28 56 70 22l42 34" fill="none" stroke={NAVY} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 50v48h64V50" fill="#fff" stroke={NAVY} strokeWidth="4" strokeLinejoin="round" />
    <rect x="46" y="60" width="13" height="9" rx="1.5" fill="none" stroke={NAVY} strokeWidth="3" />
    <rect x="81" y="60" width="13" height="9" rx="1.5" fill="none" stroke={NAVY} strokeWidth="3" />
    <rect x="63" y="70" width="14" height="28" fill={NAVY} />
    <circle cx="73" cy="85" r="1.6" fill="#fff" />
  </svg>
)

const IlloWarehouse = () => (
  <svg viewBox="0 0 170 110" aria-hidden="true">
    <circle cx="85" cy="66" r="44" fill="#fdeee6" />
    <rect x="22" y="36" width="126" height="9" rx="2.5" fill={NAVY} />
    <path d="M30 45v53h110V45" fill="#fff" stroke={NAVY} strokeWidth="4" strokeLinejoin="round" />
    <rect x="40" y="54" width="18" height="9" rx="2" fill="none" stroke={NAVY} strokeWidth="3" />
    <rect x="112" y="54" width="18" height="9" rx="2" fill="none" stroke={NAVY} strokeWidth="3" />
    <rect x="66" y="60" width="38" height="38" fill="#eef0f5" stroke={NAVY} strokeWidth="3" />
    <path d="M66 68h38M66 76h38M66 84h38M66 92h38" stroke="#b9bfce" strokeWidth="2" />
    <path d="M85 6l12 4.5v8.5c0 7-5 11.5-12 14-7-2.5-12-7-12-14v-8.5z" fill="#fff" stroke={ORANGE} strokeWidth="3" strokeLinejoin="round" />
    <path d="m79.5 18.5 4 4 7-7.5" stroke={ORANGE} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IlloReturn = () => (
  <svg viewBox="0 0 190 110" aria-hidden="true">
    <circle cx="128" cy="62" r="44" fill="#fdeee6" />
    <path d="M8 74h48l12 10v14H8z" fill="#fff" stroke={NAVY} strokeWidth="3.5" strokeLinejoin="round" />
    <path d="M16 86h30" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="22" cy="99" r="5" fill="#fff" stroke={NAVY} strokeWidth="3" />
    <circle cx="55" cy="99" r="5" fill="#fff" stroke={NAVY} strokeWidth="3" />
    <path d="M90 56 128 26l38 30" fill="none" stroke={NAVY} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M98 50v48h60V50" fill="#fff" stroke={NAVY} strokeWidth="4" strokeLinejoin="round" />
    <rect x="105" y="60" width="12" height="9" rx="1.5" fill="none" stroke={NAVY} strokeWidth="3" />
    <rect x="139" y="60" width="12" height="9" rx="1.5" fill="none" stroke={NAVY} strokeWidth="3" />
    <rect x="122" y="70" width="13" height="28" fill={NAVY} />
    <rect x="164" y="80" width="18" height="18" rx="1.5" fill="#fff" stroke={ORANGE} strokeWidth="3" />
    <path d="M173 80v18" stroke={ORANGE} strokeWidth="2.5" />
    <circle cx="180" cy="74" r="7" fill={ORANGE} />
    <path d="m176.8 74 2.2 2.2 4-4" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
}
const IcoPhone = () => (
  <svg {...iconProps}>
    <rect x="7" y="2.5" width="10" height="19" rx="2" />
    <path d="M11 18h2" />
  </svg>
)
const IcoDoor = () => (
  <svg {...iconProps}>
    <path d="M5 21h14M7 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17" />
    <path d="M14 12h.01" />
  </svg>
)
const IcoStore = () => (
  <svg {...iconProps}>
    <path d="M3 21V9l9-5 9 5v12" />
    <path d="M7 21v-8h10v8M7 17h10" />
  </svg>
)
const IcoReturn = () => (
  <svg {...iconProps}>
    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
    <path d="M3 3v5h5" />
  </svg>
)

const steps = [
  {
    illo: <IlloPhone />,
    icon: <IcoPhone />,
    title: "Book Online",
    body: "Tell us what you are storing and pick a pickup date. It takes under two minutes.",
  },
  {
    illo: <IlloHouse />,
    icon: <IcoDoor />,
    title: "Doorstep Pickup",
    body: "Our team arrives anywhere in Dubai, wraps what needs wrapping and loads everything for you.",
  },
  {
    illo: <IlloWarehouse />,
    icon: <IcoStore />,
    title: "Secure Storage",
    body: "Kept in a clean, climate-controlled, CCTV-monitored facility, catalogued item by item.",
  },
  {
    illo: <IlloReturn />,
    icon: <IcoReturn />,
    title: "Return on Demand",
    body: "Ask for one box or everything back, delivered to your door whenever you are ready.",
  },
]

export function LandingSteps() {
  return (
    <section className={`${s.section} ${s.wrap}`} id="how-it-works" style={{ paddingTop: 24 }}>
      <div className={s.howHead}>
        <div>
          <span className={s.howEyebrow}>How it works</span>
          <h2>
            Storage made <em>completely effortless.</em>
          </h2>
        </div>
        <p>
          From doorstep pickup to secure storage and return, we handle the truck, the lifting and
          the paperwork.
        </p>
      </div>

      <ol className={s.howTrack}>
        {steps.map((step, i) => (
          <li className={s.howStep} key={step.title}>
            <div className={s.howIllo}>{step.illo}</div>
            <div className={s.howDot} aria-hidden="true">
              {step.icon}
            </div>
            <div className={s.howText}>
              <span className={s.howNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className={s.howCta}>
        <span>Ready to get started?</span>
        <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
          Get a Free Quote →
        </Link>
        <Link className={s.howMore} href="/self-storage-dubai/how-it-works">
          See the full process
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
  { icon: "🚚", title: "Door-to-door", body: "We come to you anywhere in Dubai — bring the packing materials, load, and deliver back to your door." },
  { icon: "📋", title: "Digital inventory", body: "Every item is photographed and catalogued at pickup, so you always know what is stored and where." },
  { icon: "💬", title: "Named consultant", body: "One named point of contact from booking to retrieval. No call centres, no ticket queues." },
  { icon: "🕑", title: "Flexible tenure", body: "Store for a month or two years. Upgrade, downsize, or cancel with 48 hours' notice — no lock-in." },
  { icon: "🌡️", title: "Climate controlled", body: "Standard on every booking, not an upgrade tier — indoor, off the floor, out of the Dubai summer." },
]

const stats = [
  { v: "100,000+", label: "Customers worldwide" },
  { v: "4.9", suffix: "★", label: "Average Google rating" },
  { v: "10+", label: "Years global experience" },
  { v: "12", suffix: " AED", label: "Per sqft, per month" },
]

export function LandingWhy() {
  return (
    <section className={s.wrap} id="why">
      <div className={s.darkBand}>
        <span className={s.eyebrow}>Why SafeStorage</span>
        <h2>
          Storage That Works Around <em>Your Life</em>, Not the Other Way Round
        </h2>
        <div className={`${s.featGrid} ${s.featGrid5}`}>
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
