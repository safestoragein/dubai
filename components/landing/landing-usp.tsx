import type { ReactNode } from "react"
import s from "./landing.module.css"
import { UspRail } from "./usp-rail"

/* ------------------------------------------------------------------ *
 * USP — the old "SafeStorage Dubai – Our Unique Selling Proposition"
 * grid, same nine points, as a horizontal card rail (desktop + mobile).
 * ------------------------------------------------------------------ */
const I = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

const usps = [
  { title: "First-Class Security", body: "24/7 surveillance, secure access control, and real-time monitoring.", icon: <I><path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6z" /><path d="m9 12 2 2 4-4" /></I> },
  { title: "Clean, Dust-Protected Units", body: "Sealed, regularly cleaned units keep your belongings protected from dust.", icon: <I><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" /><path d="M19 15l.8 1.8 1.7.7-1.7.7L19 20l-.8-1.8-1.7-.7 1.7-.7z" /></I> },
  { title: "Flexible Rental Terms", body: "Short-term and long-term options to fit your needs.", icon: <I><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></I> },
  { title: "Convenient Pickup & Delivery", body: "We make storage effortless by handling transportation.", icon: <I><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></I> },
  { title: "Premium Customer Support", body: "Dedicated team to assist with all your storage needs.", icon: <I><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /></I> },
  { title: "Affordable Pricing", body: "Competitive rates with no hidden fees.", icon: <I><path d="M20.5 13.5l-7 7a2 2 0 0 1-2.8 0L3 12.8V4h8.8l8.7 8.7a.6.6 0 0 1 0 .8z" /><circle cx="7.5" cy="8.5" r="1.2" /></I> },
  { title: "Complete Packaging Solutions", body: "Convenient packaging materials available as complete kits for different storage needs.", icon: <I><path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z" /><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" /></I> },
  { title: "Flexible Storage Options", body: "Choose between shared warehouse space or private storage rooms based on your requirements.", icon: <I><rect x="3" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" /></I> },
  { title: "Discount Programs", body: "Enjoy special rates for prepaid, long-term, and monthly storage plans.", icon: <I><path d="M19 5 5 19" /><circle cx="7" cy="7" r="2.5" /><circle cx="17" cy="17" r="2.5" /></I> },
]

export function LandingUsp() {
  return (
    <section className={`${s.section} ${s.wrap}`} id="usp" style={{ paddingTop: 12 }}>
      <UspRail
        head={
          <div className={s.uspHead}>
            <span className={s.howEyebrow}>Our unique selling proposition</span>
            <h2>
              What makes SafeStorage Dubai <em>different.</em>
            </h2>
          </div>
        }
      >
        {usps.map((u, i) => (
          <article className={s.usp} key={u.title}>
            <span className={s.uspNum} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className={s.uspIcon}>{u.icon}</div>
            <h3>{u.title}</h3>
            <p>{u.body}</p>
          </article>
        ))}
      </UspRail>
      <p className={s.scrollHint}>Swipe for more →</p>
    </section>
  )
}
