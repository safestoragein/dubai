import FaqAccordion from "./faq-accordion"
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

      <FaqAccordion items={homeFaqs} />
    </section>
  )
}
