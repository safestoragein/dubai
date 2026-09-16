import Link from "next/link"
import { homeFaqs } from "./home-faqs"
import s from "./landing.module.css"

/* ------------------------------------------------------------------ *
 * FAQ accordion. Not part of the visual comp, but it answers the
 * questions that stop people booking, so it is styled to match.
 * ------------------------------------------------------------------ */
export function LandingFaq() {
  return (
    <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 20 }}>
      <div className={s.sectionHead}>
        <span className={s.eyebrow}>Good to know</span>
        <h2>Frequently Asked Questions</h2>
        <p>Everything customers ask before their first pickup — pricing, notice periods, and access.</p>
      </div>

      {/* Native <details> rather than a JS accordion: this stays a server
          component, works without hydration, and is keyboard-accessible for
          free. The answers stay in the DOM when collapsed, so Google still
          reads them. */}
      <div className={s.faqList}>
        {homeFaqs.map((f, i) => (
          <details className={s.faqItem} key={f.q} open={i === 0}>
            <summary>
              <h3>{f.q}</h3>
              <span className={s.faqIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </summary>
            <div className={s.faqAnswer}>
              <p>{f.a}</p>
              {f.links?.length ? (
                <p className={s.faqLinks}>
                  {f.links.map((l) => (
                    <Link href={l.href} key={l.href}>
                      {l.label} →
                    </Link>
                  ))}
                </p>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
