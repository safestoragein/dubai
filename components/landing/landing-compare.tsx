import Link from "next/link"
import s from "./landing.module.css"

/* ------------------------------------------------------------------ *
 * COMPARISON — the old "Why Choose SafeStorage Over Others?" table,
 * redesigned as a head-to-head board: a raised navy SafeStorage column
 * against a muted "other providers" column. Server-rendered, CSS only,
 * exposed to assistive tech as a table via ARIA roles.
 * ------------------------------------------------------------------ */
type Mark = "yes" | "limited" | "no"

const rows: { feature: string; hint: string; icon: string; others: Mark }[] = [
  { feature: "24/7 Security & CCTV Monitoring", hint: "Every entry and storage zone watched", icon: "📹", others: "limited" },
  { feature: "Flexible Payment Plans", hint: "Monthly, no long lock-in", icon: "💳", others: "no" },
  { feature: "Door-to-door Service", hint: "We pack, collect and deliver back", icon: "🚚", others: "no" },
  { feature: "Online Booking & Instant Quote", hint: "Book in under two minutes", icon: "⚡", others: "no" },
  { feature: "Customer Support 24/7", hint: "A real person, whenever you need", icon: "💬", others: "no" },
  { feature: "No Hidden Fees", hint: "The price you are quoted is the price", icon: "🏷️", others: "limited" },
]

const label: Record<Mark, string> = { yes: "Included", limited: "Limited", no: "Not offered" }

function Badge({ mark }: { mark: Mark }) {
  return (
    <span className={`${s.vsMark} ${s[`vsMark_${mark}`]}`}>
      <span className={s.vsDot} aria-hidden="true">
        {mark === "yes" ? (
          <svg viewBox="0 0 24 24"><path d="m5 12.5 4.2 4.2L19 7" /></svg>
        ) : mark === "no" ? (
          <svg viewBox="0 0 24 24"><path d="M7 7l10 10M17 7 7 17" /></svg>
        ) : (
          <svg viewBox="0 0 24 24"><path d="M12 6.5v7M12 17.5v.01" /></svg>
        )}
      </span>
      <span className={s.vsWord}>{label[mark]}</span>
    </span>
  )
}

export function LandingCompare() {
  return (
    <section className={`${s.section} ${s.wrap}`} id="compare" style={{ paddingTop: 20 }}>
      <div className={s.howHead}>
        <div>
          <span className={s.howEyebrow}>Compare</span>
          <h2>
            Why choose SafeStorage <em>over others?</em>
          </h2>
        </div>
        <p>Compare our services with other storage providers — side by side, feature by feature.</p>
      </div>

      <div className={s.vs} role="table" aria-label="SafeStorage Dubai compared with other storage providers">
        {/* the raised SafeStorage column sits behind its cells */}
        <div className={s.vsHighlight} aria-hidden="true" />

        <div className={s.vsRow} role="row" style={{ ["--r" as string]: 1 }}>
          <div className={`${s.vsCell} ${s.vsHeadFeature}`} role="columnheader">
            Feature
          </div>
          <div className={`${s.vsCell} ${s.vsHeadUs}`} role="columnheader">
            <span className={s.vsRibbon}>Recommended</span>
            <b>SafeStorage</b>
            <small>Dubai</small>
          </div>
          <div className={`${s.vsCell} ${s.vsHeadThem}`} role="columnheader">
            <b>Other</b>
            <small>providers</small>
          </div>
        </div>

        {rows.map((r, i) => (
          <div className={s.vsRow} role="row" key={r.feature} style={{ ["--r" as string]: i + 2 }}>
            <div className={`${s.vsCell} ${s.vsFeature}`} role="rowheader">
              <span className={s.vsIcon} aria-hidden="true">
                {r.icon}
              </span>
              <span>
                <b>{r.feature}</b>
                <small>{r.hint}</small>
              </span>
            </div>
            <div className={`${s.vsCell} ${s.vsUs}`} role="cell">
              <Badge mark="yes" />
            </div>
            <div className={`${s.vsCell} ${s.vsThem}`} role="cell">
              <Badge mark={r.others} />
            </div>
          </div>
        ))}

        <div className={s.vsRow} role="row" style={{ ["--r" as string]: rows.length + 2 }}>
          <div className={`${s.vsCell} ${s.vsFootNote}`} role="cell">
            6 of 6 included with every SafeStorage plan.
          </div>
          <div className={`${s.vsCell} ${s.vsFootUs}`} role="cell">
            <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
              Get a free quote →
            </Link>
          </div>
          <div className={`${s.vsCell} ${s.vsThem}`} role="cell" />
        </div>
      </div>
    </section>
  )
}
