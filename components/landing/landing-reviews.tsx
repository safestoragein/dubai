"use client"

import { useRef } from "react"
import Link from "next/link"
import s from "./landing.module.css"

/* ------------------------------------------------------------------ *
 * CLIENT REVIEWS — comp section 8.
 * The six testimonials are the site's existing ones, verbatim.
 * ------------------------------------------------------------------ */
const reviews = [
  {
    initials: "AH",
    name: "Ahmed Hassan",
    role: "Villa Owner, Dubai Marina",
    text: "Stored my entire villa furniture for 6 months during renovation. Everything came back in perfect condition thanks to their careful handling and clean units. The pickup and delivery service was a lifesaver!",
    stars: 5,
  },
  {
    initials: "SM",
    name: "Sarah Mitchell",
    role: "Managing Director, Consulting Firm",
    text: "As a business owner, I needed reliable document storage. SafeStorage provides secure, clean units with 24/7 access. Their dedicated consultant understood our compliance needs perfectly.",
    stars: 5,
    alt: true,
  },
  {
    initials: "FA",
    name: "Fatima Al-Rashid",
    role: "Apartment Resident, JLT",
    text: "Moving from JLT to Business Bay, I needed short-term storage. The team was incredibly professional, handled everything with care, and the pricing was transparent with no hidden fees!",
    stars: 5,
  },
  {
    initials: "MT",
    name: "Mark Thompson",
    role: "E-commerce Business Owner",
    text: "Best storage solution in Dubai! We store our e-commerce inventory here. The flexible terms and easy access make managing stock so much easier. Highly recommend for small businesses!",
    stars: 5,
    alt: true,
  },
  {
    initials: "KR",
    name: "Khalid Rahman",
    role: "Car Enthusiast",
    text: "Was worried about storing my classic car during summer. The secure indoor vehicle storage kept it protected from Dubai's dust and the elements. Staff are knowledgeable and trustworthy.",
    stars: 5,
  },
  {
    initials: "JL",
    name: "Jennifer Lee",
    role: "Expat, Downtown Dubai",
    text: "I left Dubai for eight months and needed somewhere safe for my whole apartment. They packed everything, sent me the inventory, and delivered it all back the week I returned — not a single item missing or damaged.",
    stars: 5,
    alt: true,
  },
]

export function LandingReviews() {
  const track = useRef<HTMLDivElement>(null)

  // 320px card + 16px gap — one card per click, matching the comp.
  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * 336, behavior: "smooth" })

  return (
    <section className={`${s.section} ${s.wrap}`} id="reviews" style={{ paddingBottom: 20 }}>
      <div className={s.reviewsHead}>
        <span className={s.eyebrow} style={{ display: "inline-flex", justifyContent: "center" }}>
          Testimonials
        </span>
        <h2>
          What <em>Clients</em> Say!
        </h2>
        <p>
          Real experiences from the 100,000+ customers SafeStorage serves worldwide — rated 4.9/5
          across 6,700+ Google reviews.
        </p>
      </div>

      <div className={s.revWrap}>
        <button className={`${s.revArrow} ${s.revPrev}`} aria-label="Previous reviews" onClick={() => scroll(-1)} type="button">
          ‹
        </button>

        <div className={s.revTrack} ref={track}>
          {reviews.map((r) => (
            <div className={s.revCard} key={r.name}>
              <div className={s.revTop}>
                <span className={`${s.revAvatar} ${r.alt ? s.revAvatarAlt : ""}`}>{r.initials}</span>
                <div>
                  <div className={s.revName}>{r.name}</div>
                  <div className={s.revRole}>{r.role}</div>
                </div>
              </div>
              <p className={s.revText}>{r.text}</p>
              <div className={s.revStars} aria-label={`${r.stars} out of 5 stars`}>
                {"★".repeat(r.stars)}
                {r.stars < 5 ? <span className={s.off}>{"★".repeat(5 - r.stars)}</span> : null}
              </div>
            </div>
          ))}
        </div>

        <button className={`${s.revArrow} ${s.revNext}`} aria-label="Next reviews" onClick={() => scroll(1)} type="button">
          ›
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: 28 }}>
        <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
          Join 100,000+ Happy Customers →
        </Link>
      </div>
    </section>
  )
}
