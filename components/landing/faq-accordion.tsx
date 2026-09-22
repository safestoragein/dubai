import Link from "next/link"
import s from "./landing.module.css"

export type FaqItem = {
  q: string
  a: string
  links?: { href: string; label: string }[]
}

/**
 * Shared FAQ accordion for pages built on the landing design system.
 *
 * Native <details> rather than a JS accordion: it stays a server component,
 * works before hydration, and is keyboard-accessible for free. Answers remain
 * in the DOM when collapsed, so Google still reads them.
 *
 * Only one answer is open at a time: every <details> in the list shares a
 * `name`, which makes the browser close the others natively (exclusive
 * accordion — Chrome 120+, Safari 17.2+, Firefox 130+; older browsers simply
 * allow several open). The name is derived from the first question so two
 * accordions on one page don't close each other.
 */
/* Owner's rule (2026-09-21): never more than five questions on a page, so the
   cap lives here rather than in forty page files. The FAQPage schema on each
   page is capped to the same five.
   `max` is only raised by /faq itself, which is the FAQ hub — its questions are
   split into named categories and each category stays within the five. */
const MAX_FAQS = 5

export default function FaqAccordion({
  items: all,
  openFirst = true,
  max = MAX_FAQS,
}: {
  items: FaqItem[]
  openFirst?: boolean
  max?: number
}) {
  const items = all.slice(0, max)
  const group = `faq-${(items[0]?.q ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}`
  return (
    <div className={s.faqList}>
      {items.map((f, i) => (
        <details className={s.faqItem} key={f.q} name={group} open={openFirst && i === 0}>
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
  )
}
