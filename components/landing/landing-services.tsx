import Link from "next/link"
import s from "./landing.module.css"
import j from "./journey.module.css"
import { JourneyPlayer } from "./journey-player"
import { FeatScroller } from "./feat-scroller"

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
      <div className={s.howHead}>
        <div>
          <span className={s.howEyebrow}>Our services</span>
          <h2>
            Storage solutions for <em>every need in Dubai.</em>
          </h2>
        </div>
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
 * HOW IT WORKS — animated journey (same animation as the UK site).
 * A van drives between four scenes while an orange rail fills and each
 * stop lights up. Pure CSS in journey.module.css; JourneyPlayer only starts
 * it on scroll. Text is server-rendered and never hidden.
 * ------------------------------------------------------------------ */
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
}
const IcoPhone = () => (
  <svg {...iconProps}>
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <path d="M11 17.5h2" />
  </svg>
)
const IcoDoor = () => (
  <svg {...iconProps}>
    <path d="M6 21V4a1 1 0 011-1h10a1 1 0 011 1v17" />
    <path d="M3 21h18" />
    <circle cx="14.5" cy="12.5" r="1" />
  </svg>
)
const IcoStore = () => (
  <svg {...iconProps}>
    <path d="M3 20V9l9-5 9 5v11" />
    <path d="M7 20v-7h10v7M7 16.5h10M3 20h18" />
  </svg>
)

const steps = [
  {
    icon: <IcoPhone />,
    title: "Book Online",
    body: "Tell us what you are storing and pick a pickup date. It takes under two minutes.",
    short: "Tell us what to store and pick a date.",
  },
  {
    icon: <IcoDoor />,
    title: "Doorstep Pickup",
    body: "Our team arrives anywhere in Dubai, wraps what needs wrapping and loads everything for you.",
    short: "We pack and collect from your door.",
  },
  {
    icon: <IcoStore />,
    title: "Secure Storage",
    body: "Kept in a clean, climate-controlled, CCTV-monitored facility, catalogued item by item.",
    short: "Kept safe, climate-controlled, on CCTV.",
  },
  {
    icon: <IcoDoor />,
    title: "Return on Demand",
    body: "Ask for one box or everything back, delivered to your door whenever you are ready.",
    short: "Get one box or everything back, anytime.",
  },
]
const stepClass = [j.jstep1, j.jstep2, j.jstep3, j.jstep4]

const VAN_SHELL = "M-42 -4v-30c0-3 2-5 5-5h40l12 10 12 4c3 1 4 3 4 6v15c0 3-2 5-5 5h-63c-3 0-5-2-5-5z"

function JourneyScene() {
  return (
    <svg className={j.scene} viewBox="0 0 1200 150" aria-hidden="true" focusable="false">
      <g transform="translate(600 130) scale(0.86) translate(-600 -130)">
        <line className={j.jyGround} x1="40" y1="130" x2="1160" y2="130" />
        <circle className={`${j.jySpot} ${j.jySpot1}`} cx="150" cy="92" r="46" />
        <circle className={`${j.jySpot} ${j.jySpot2}`} cx="450" cy="92" r="46" />
        <circle className={`${j.jySpot} ${j.jySpot3}`} cx="750" cy="92" r="46" />
        <circle className={`${j.jySpot} ${j.jySpot4}`} cx="1050" cy="92" r="46" />

        {/* 1 — phone */}
        <g transform="translate(150 130)">
          <rect className={j.jyPhone} x="-20" y="-72" width="40" height="70" rx="7" />
          <rect className={j.jyScreen} x="-15" y="-64" width="30" height="50" rx="3" />
          <rect className={j.jyLine} x="-10" y="-56" width="20" height="3" rx="1.5" />
          <rect className={j.jyLine} x="-10" y="-48" width="14" height="3" rx="1.5" />
          <rect className={j.jyLine} x="-10" y="-40" width="18" height="3" rx="1.5" />
          <rect className={j.jyCta} x="-10" y="-28" width="20" height="8" rx="4" />
          <g transform="translate(20 -70)">
            <g className={j.jyCheck}>
              <circle r="9" />
              <path d="M-4 0l3 3 5-6" />
            </g>
          </g>
        </g>

        {/* 2 — home with boxes waiting */}
        <g transform="translate(450 130)">
          <path className={j.jyHouse} d="M-40 0v-46l40-22 40 22v46z" />
          <path className={j.jyRoof} d="M-46 -44l46-26 46 26" />
          <rect className={j.jyDoor} x="-9" y="-30" width="18" height="30" rx="2" />
          <circle className={j.jyKnob} cx="4" cy="-15" r="1.5" />
          <rect className={j.jyWindow} x="-30" y="-34" width="12" height="10" rx="1.5" />
          <rect className={j.jyWindow} x="18" y="-34" width="12" height="10" rx="1.5" />
          <g className={j.jyBoxes}>
            <rect className={j.jyBoxfill} x="-66" y="-16" width="16" height="16" rx="1.5" />
            <rect className={j.jyBoxfill} x="-62" y="-30" width="12" height="12" rx="1.5" />
            <path className={j.jyBoxtape} d="M-58 -16v16M-56 -30v12" />
          </g>
        </g>

        {/* 3 — warehouse */}
        <g transform="translate(750 130)">
          <rect className={j.jyHouse} x="-70" y="-58" width="140" height="58" rx="2" />
          <rect className={j.jyRoofband} x="-74" y="-64" width="148" height="8" rx="2" />
          <rect className={j.jyShutter} x="-24" y="-40" width="48" height="40" rx="2" />
          <path className={j.jyShutterLines} d="M-24 -32h48M-24 -24h48M-24 -16h48M-24 -8h48" />
          <rect className={j.jyWindow} x="-58" y="-46" width="20" height="10" rx="1.5" />
          <rect className={j.jyWindow} x="38" y="-46" width="20" height="10" rx="1.5" />
          <g className={j.jyCam} transform="translate(58 -58)">
            <rect x="-7" y="-4" width="10" height="6" rx="2" />
            <path d="M3 -2l5-2v6l-5-2z" />
          </g>
          <g transform="translate(0 -84)">
            <g className={j.jyShield}>
              <path d="M0 -11l10 4v7c0 7-4 12-10 14-6-2-10-7-10-14v-7z" />
              <path d="M-4 1l3 3 6-7" />
            </g>
          </g>
        </g>

        {/* 4 — home, delivered */}
        <g transform="translate(1050 130)">
          <path className={j.jyHouse} d="M-40 0v-46l40-22 40 22v46z" />
          <path className={j.jyRoof} d="M-46 -44l46-26 46 26" />
          <rect className={`${j.jyDoor} ${j.jyDoorOpen}`} x="-9" y="-30" width="18" height="30" rx="2" />
          <rect className={j.jyWindow} x="-30" y="-34" width="12" height="10" rx="1.5" />
          <rect className={j.jyWindow} x="18" y="-34" width="12" height="10" rx="1.5" />
          <g transform="translate(58 0)">
            <g className={j.jyDelivered}>
              <rect className={j.jyBoxfill} x="-9" y="-18" width="18" height="18" rx="1.5" />
              <path className={j.jyBoxtape} d="M0 -18v18" />
              <g transform="translate(9 -22)">
                <circle className={j.jyTick} r="6" />
                <path className={j.jyTickMark} d="M-2.5 0l2 2 3.5-4" />
              </g>
            </g>
          </g>
        </g>

        {/* the van */}
        <g transform="translate(150 130)">
          <g className={j.jyVan}>
            <g transform="scale(0.82)">
              <g className={j.jyVanDir}>
                <ellipse className={j.jyShadow} cx="-6" cy="1" rx="34" ry="3" />
                <g className={j.jyVanBody}>
                  <path className={j.jyVanShell} d={VAN_SHELL} />
                  <path className={j.jyVanWindow} d="M5 -36h8l10 9H5z" />
                  <rect className={j.jyVanStripe} x="-38" y="-18" width="42" height="4" rx="2" />
                  <circle className={j.jyWheel} cx="-24" cy="-1" r="6" />
                  <circle className={j.jyWheel} cx="18" cy="-1" r="6" />
                  <circle className={j.jyHub} cx="-24" cy="-1" r="2" />
                  <circle className={j.jyHub} cx="18" cy="-1" r="2" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

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

      <JourneyPlayer>
        <JourneyScene />
        <div className={j.trackWrap}>
          <span className={j.line} aria-hidden="true">
            <span className={j.fill} />
            <span className={j.light} />
            {/* phone-only: a parcel that rides down the rail */}
            <span className={j.mbox}>
              <svg viewBox="0 0 24 24" focusable="false">
                <path className={j.mboxSide} d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" />
                <path className={j.mboxTop} d="M3 7.5 12 12l9-4.5M12 12v9" />
                <path className={j.mboxTape} d="M7.5 5.25 16.5 9.75v3" />
              </svg>
            </span>
          </span>
          {/* phone-only van that laps the 2x2 grid */}
          <span className={j.van} aria-hidden="true">
            <svg className={j.vanBody} viewBox="0 0 44 28" focusable="false">
              <ellipse className={j.jyShadow} cx="22" cy="26" rx="18" ry="2" />
              <path
                className={j.jyVanShell}
                d="M2 20V6c0-1.7 1.3-3 3-3h20l7 6 7 2.4c1.2.4 2 1.5 2 2.8V20c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2z"
              />
              <path className={j.jyVanWindow} d="M26 6h4l5 5h-9z" />
              <rect className={j.jyVanStripe} x="4" y="13" width="20" height="2.4" rx="1.2" />
              <circle className={j.jyWheel} cx="11" cy="22" r="3.4" />
              <circle className={j.jyWheel} cx="33" cy="22" r="3.4" />
              <circle className={j.jyHub} cx="11" cy="22" r="1.2" />
              <circle className={j.jyHub} cx="33" cy="22" r="1.2" />
            </svg>
          </span>
          <ol className={j.track} aria-label="The four steps">
            {steps.map((step, i) => (
              <li className={`${j.jstep} ${stepClass[i]}`} key={step.title}>
                <span className={j.jstepDot} aria-hidden="true">
                  <span className={j.jstepRing} />
                  {step.icon}
                </span>
                <span className={j.jstepNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={j.jstepTitle}>{step.title}</h3>
                <p className={j.jstepText}>{step.body}</p>
                {/* phone copy — one short line (the full sentence is desktop-only) */}
                <p className={j.jstepShort}>{step.short}</p>
              </li>
            ))}
          </ol>
        </div>
      </JourneyPlayer>

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
  { icon: "🚚", tag: "Anywhere Dubai", title: "Door-to-door Service", body: "We pack, load and move your items. No van hire, no heavy lifting." },
  { icon: "👤", tag: "Personal Expert", title: "Dedicated Storage Consultant", body: "One personal contact from booking to retrieval. No call centres." },
  { icon: "🏷️", tag: "No Hidden Fees", title: "Transparent Pricing", body: "What we quote is what you pay, backed by a price-match guarantee." },
  { icon: "⚡", tag: "Book by 12 PM", title: "Same-Day Pickup Available", body: "Confirm before 12 PM and we collect the same day across Dubai." },
  { icon: "📅", tag: "No Lock-In", title: "Flexible Monthly Plans", body: "Store for a month or two years. Change plans with 48 hours' notice." },
  { icon: "📹", tag: "Round the Clock", title: "24/7 CCTV Monitoring", body: "Cameras watch every entry, corridor and storage zone, day and night." },
  { icon: "📍", tag: "All Areas", title: "Multiple Dubai Locations", body: "Facilities across the UAE, with pickup and delivery in every Dubai area." },
  { icon: "✨", tag: "Certified Clean", title: "Pest-Free, Clean Environment", body: "Regular pest control and sealed units keep out dust and moisture." },
  { icon: "📋", tag: "Full Visibility", title: "Inventory Management", body: "Every item photographed at pickup. Check your list anytime on WhatsApp." },
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
      <div className={`${s.darkBand} ${s.whyBand}`}>
        <div className={`${s.howHead} ${s.bandHead}`}>
          <div>
            <span className={s.howEyebrow}>Why choose us</span>
            <h2>
              Why 100,000+ customers trust <br className={s.mBreak} />
              <em>SafeStorage worldwide.</em>
            </h2>
          </div>
          <p>
            We&apos;re not just a storage facility — we&apos;re your trusted partner in keeping your
            belongings safe.
          </p>
        </div>
        <FeatScroller>
          {feats.map((f) => (
            <div className={s.feat} key={f.title}>
              <span className={s.featTag}>{f.tag}</span>
              <div className={s.featIcon} aria-hidden="true">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </FeatScroller>
        <p className={s.scrollHint}>Swipe for more →</p>
        <div className={s.bandCta}>
          <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
            Join 100,000+ Happy Customers →
          </Link>
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
