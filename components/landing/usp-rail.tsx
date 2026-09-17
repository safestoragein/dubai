"use client"

import { useRef, type ReactNode } from "react"
import s from "./landing.module.css"

/**
 * Horizontal rail for the USP cards, with prev/next arrows placed in the
 * section head. Cards are server-rendered children; this only scrolls them.
 */
export function UspRail({ head, children }: { head: ReactNode; children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null)
  const scroll = (dir: number) => {
    const el = track.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 18 : el.clientWidth * 0.8), behavior: "smooth" })
  }

  return (
    <>
      <div className={s.uspTop}>
        {head}
        <div className={s.uspNav}>
          <button type="button" className={s.uspBtn} aria-label="Previous" onClick={() => scroll(-1)}>
            ←
          </button>
          <button type="button" className={s.uspBtn} aria-label="Next" onClick={() => scroll(1)}>
            →
          </button>
        </div>
      </div>
      <div className={s.uspRail} ref={track}>
        {children}
      </div>
    </>
  )
}
