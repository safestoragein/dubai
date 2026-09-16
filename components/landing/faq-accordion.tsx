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
 */
export default function FaqAccordion({ items, openFirst = true }: { items: FaqItem[]; openFirst?: boolean }) {
  return (
    <div className={s.faqList}>
      {items.map((f, i) => (
        <details className={s.faqItem} key={f.q} open={openFirst && i === 0}>
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
