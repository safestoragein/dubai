"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import s from "./landing.module.css"

/* ------------------------------------------------------------------ *
 * INTRO — tabbed card rail: Who we are / Milestones / Pricing.
 * All three panels are rendered on the server (inactive ones carry the
 * `hidden` attribute), so every card's copy is in the HTML for crawlers.
 * Each panel is a horizontal rail with prev/next arrows.
 * ------------------------------------------------------------------ */
type Card = { href: string; title: string; body: string; foot: string }
type Tab = { id: string; label: string; tone: string; eyebrow: string; cards: Card[] }

const tabs: Tab[] = [
  {
    id: "who",
    label: "Who we are",
    tone: s.introWhite,
    eyebrow: "Who we are",
    cards: [
      {
        href: "/about",
        title: "Dubai's valet storage specialists for homes and businesses",
        body: "We come to your door, pack and catalogue everything, and store it in secure, clean, pest-controlled facilities.",
        foot: "Since 2015",
      },
      {
        href: "/how-it-works",
        title: "One accountable team, from pickup to delivery",
        body: "Our own trained team wraps, collects and delivers back — nothing is handed to third-party movers.",
        foot: "In-house team",
      },
      {
        href: "/locations",
        title: "Pickup across Dubai and the wider UAE",
        body: "We collect from every Dubai community, with Sharjah, Ajman and Abu Dhabi covered too.",
        foot: "UAE-wide pickup",
      },
      {
        href: "/about",
        title: "Part of a storage brand trusted worldwide",
        body: "SafeStorage serves households, expats, startups and enterprises across India and the UAE.",
        foot: "10+ years",
      },
    ],
  },
  {
    id: "milestones",
    label: "Milestones",
    tone: s.introAccent,
    eyebrow: "Milestone",
    cards: [
      {
        href: "/testimonials",
        title: "100,000+ customers have trusted SafeStorage with their belongings",
        body: "Across India and the UAE — households, expats, startups, and enterprises alike.",
        foot: "100,000+ customers",
      },
      {
        href: "/testimonials",
        title: "Rated 4.9 out of 5 on Google",
        body: "More than 6,700 verified reviews worldwide from homes and businesses.",
        foot: "4.9/5 · 6,700+ reviews",
      },
      {
        href: "/about",
        title: "10+ years of global storage experience",
        body: "Looking after belongings for families and businesses since 2015.",
        foot: "Since 2015",
      },
      {
        href: "/contact",
        title: "15-minute average response time",
        body: "Ask a question or request a callback and our team gets back to you fast.",
        foot: "Quick support",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    tone: s.introNavy,
    eyebrow: "Pricing",
    cards: [
      {
        href: "/self-storage-dubai/unit-sizes",
        title: "Flexible monthly plans, no lock-in",
        body: "Units from 25 sq ft to 300+ sq ft, with no lock-in.",
        foot: "25 – 300+ sq ft",
      },
      {
        href: "/get-quote",
        title: "No setup fees, no deposits",
        body: "What we quote is what you pay — backed by a price-match guarantee.",
        foot: "Price-match guarantee",
      },
      {
        href: "/get-quote",
        title: "Save more when you prepay",
        body: "Special rates for prepaid, long-term and monthly storage plans.",
        foot: "Discount programs",
      },
      {
        href: "/self-storage-dubai/unit-sizes",
        title: "Pay only for the space you use",
        body: "Billed on the space your items occupy — from a few boxes to a full villa.",
        foot: "Pay per sq ft",
      },
    ],
  },
]

export function LandingIntro() {
  const [active, setActive] = useState(tabs[0].id)
  const rails = useRef<Record<string, HTMLDivElement | null>>({})

  const scroll = (dir: number) => {
    const el = rails.current[active]
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 16 : el.clientWidth * 0.8), behavior: "smooth" })
  }

  return (
    <section className={`${s.wrap} ${s.introTabs}`} aria-label="About SafeStorage">
      <div className={s.introBar}>
        <div className={s.introTabList} role="tablist" aria-label="About SafeStorage">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`intro-tab-${t.id}`}
              aria-selected={active === t.id}
              aria-controls={`intro-panel-${t.id}`}
              className={`${s.introTab} ${active === t.id ? s.introTabOn : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className={s.uspNav}>
          <button type="button" className={s.uspBtn} aria-label="Previous cards" onClick={() => scroll(-1)}>
            ←
          </button>
          <button type="button" className={s.uspBtn} aria-label="Next cards" onClick={() => scroll(1)}>
            →
          </button>
        </div>
      </div>

      {tabs.map((t) => (
        <div
          key={t.id}
          id={`intro-panel-${t.id}`}
          role="tabpanel"
          aria-labelledby={`intro-tab-${t.id}`}
          hidden={active !== t.id}
          className={s.introRail}
          ref={(el) => {
            rails.current[t.id] = el
          }}
        >
          {t.cards.map((c) => (
            <Link href={c.href} className={`${s.introCard} ${t.tone}`} key={c.title}>
              <div>
                <span className={s.eyebrow}>{t.eyebrow}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
              <div className={s.introFoot}>
                <small>{c.foot}</small>
                <span className={`${s.circleBtn} ${t.id === "milestones" ? s.circleNavy : ""}`}>↗</span>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </section>
  )
}
