"use client"

import { useRef, type ReactNode } from "react"
import s from "./landing.module.css"

/**
 * Horizontal card rail for the Why band: 4 cards per view on desktop with
 * prev/next arrows, a swipeable rail on phones. Cards are passed in as
 * server-rendered children.
 */
export function FeatScroller({ children }: { children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null)
  const scroll = (dir: number) => {
    const el = track.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 14 : el.clientWidth / 2
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  return (
    <div className={s.featRailWrap}>
      <button className={`${s.revArrow} ${s.featPrev} ${s.featArrow}`} aria-label="Previous" onClick={() => scroll(-1)} type="button">
        ‹
      </button>
      <div className={s.featRail} ref={track}>
        {children}
      </div>
      <button className={`${s.revArrow} ${s.featNext} ${s.featArrow}`} aria-label="Next" onClick={() => scroll(1)} type="button">
        ›
      </button>
    </div>
  )
}
