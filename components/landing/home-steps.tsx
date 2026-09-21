import type { CSSProperties } from "react"
import Link from "next/link"
import s from "./landing.module.css"
import f from "./home-fx.module.css"
import HomeReveal from "./home-reveal"

/* ------------------------------------------------------------------ *
 * HOW IT WORKS — homepage only (owner, 2026-09-21: "change this design").
 * The same four steps and the same words as before, now as four numbered
 * cards with a real-colour emoji each, joined by a line and popping up in
 * turn. The animated van journey stays on the service pages, which still
 * use LandingSteps.
 * ------------------------------------------------------------------ */
const steps = [
  { emoji: "📱", title: "Book Online", body: "Tell us what you are storing and pick a pickup date. It takes under two minutes." },
  { emoji: "🚚", title: "Doorstep Pickup", body: "Our team arrives anywhere in Dubai, wraps what needs wrapping and loads everything for you." },
  { emoji: "🏬", title: "Secure Storage", body: "Kept in a clean, climate-controlled, CCTV-monitored facility, catalogued item by item." },
  { emoji: "📦", title: "Return on Demand", body: "Ask for one box or everything back, delivered to your door whenever you are ready." },
]

export function HomeSteps() {
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

      <HomeReveal className={`${f.stepGrid} ${f.in}`}>
        {steps.map((step, i) => (
          <article className={f.stepCard} key={step.title} style={{ ["--i" as string]: i } as CSSProperties}>
            <span className={f.stepEmoji} aria-hidden="true">
              {step.emoji}
            </span>
            <span className={f.stepNum} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </HomeReveal>

      <div className={s.howCta}>
        <span>Ready to get started?</span>
        <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
          Get a Free Quote →
        </Link>
        <Link className={s.howMore} href="/how-it-works">
          See the full process
        </Link>
      </div>
    </section>
  )
}
