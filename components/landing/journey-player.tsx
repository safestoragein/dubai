"use client"

import { useEffect, useRef, type ReactNode } from "react"
import s from "./journey.module.css"

/** Pause on the finished frame before the journey replays. */
const HOLD_MS = 2500

/**
 * Plays the How-it-works animation whenever the section is actually on
 * screen: it starts when ~35% is visible, replays after a short hold while
 * the visitor stays there, and resets when they scroll away (so it starts
 * fresh on the way back). The markup inside is server-rendered and fully
 * readable without JS.
 */
export function JourneyPlayer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add(s.isPlaying)
      return
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add(s.isPlaying) // CSS shows the end state, no motion
      return
    }

    let timer: number | undefined

    const runMs = () => {
      const v = getComputedStyle(el).getPropertyValue("--jy").trim() // e.g. "10s"
      const n = parseFloat(v)
      return (Number.isFinite(n) ? (v.endsWith("ms") ? n : n * 1000) : 10000) + HOLD_MS
    }

    const play = () => {
      el.classList.remove(s.isPlaying)
      void el.offsetWidth // restart the CSS animations
      el.classList.add(s.isPlaying)
      window.clearTimeout(timer)
      timer = window.setTimeout(play, runMs())
    }

    const stop = () => {
      window.clearTimeout(timer)
      timer = undefined
      el.classList.remove(s.isPlaying)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          if (timer === undefined) play()
        } else if (!entry.isIntersecting) {
          stop()
        }
      },
      { threshold: [0, 0.35] },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div ref={ref} className={s.journey}>
      {children}
    </div>
  )
}
