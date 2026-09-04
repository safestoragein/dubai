import { quotesFor } from "@/lib/local-proof"
import s from "./emirate-theme.module.css"

/**
 * Emirate-specific customer quotes. Renders NOTHING when there are none, so the
 * page never shows an empty proof block or a placeholder. See lib/local-proof.ts
 * for why it is currently empty and what may go in it.
 */
export default function LocalProof({ emirateSlug, emirate }: { emirateSlug: string; emirate: string }) {
  const quotes = quotesFor(emirateSlug)
  if (quotes.length === 0) return null

  return (
    <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
      <div className={s.sectionHead}>
        <span className={s.eyebrow}>From {emirate}</span>
        <h2>
          What <em>{emirate} Customers</em> Say
        </h2>
      </div>
      <div className={s.useGrid}>
        {quotes.map((q) => (
          <article key={`${q.name}-${q.district}`} className={s.useCard}>
            <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#48506e" }}>&ldquo;{q.quote}&rdquo;</p>
            <p style={{ marginTop: 14, fontWeight: 700, color: "var(--navy)", fontSize: 14 }}>
              {q.name}, {q.district}
            </p>
            {q.context && <p style={{ fontSize: 12.5, marginTop: 2 }}>{q.context}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}
