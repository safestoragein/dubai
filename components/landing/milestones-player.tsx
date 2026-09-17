"use client"

import { useEffect, useRef, type ReactNode } from "react"
import s from "./landing.module.css"

/**
 * Plays the milestone timeline when it is on screen: the line draws, each stop
 * pops in turn and the customer counts tick up. Resets when it leaves the
 * screen so it replays on the way back.
 *
 * The final text is server-rendered; JS only "arms" the hidden start state, so
 * without JS (or with reduced motion) the timeline simply shows complete.
 */
const STEP_MS = 800

export function MilestonesPlayer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const counters = Array.from(el.querySelectorAll<HTMLElement>("[data-count]"))
    const finals = counters.map((c) => c.textContent || "")
    let frames: number[] = []

    const countUp = () => {
      counters.forEach((c, i) => {
        const target = Number(c.dataset.count)
        const suffix = finals[i].replace(/^[\d,]+/, "")
        const start = performance.now() + Number(c.dataset.delay || 0)
        const dur = 900
        const tick = (now: number) => {
          const t = Math.min(1, Math.max(0, (now - start) / dur))
          const eased = 1 - Math.pow(1 - t, 3)
          c.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix
          if (t < 1) frames[i] = requestAnimationFrame(tick)
        }
        c.textContent = "0" + suffix
        frames[i] = requestAnimationFrame(tick)
      })
    }
    const reset = () => {
      frames.forEach((f) => cancelAnimationFrame(f))
      frames = []
      counters.forEach((c, i) => (c.textContent = finals[i]))
      el.classList.remove(s.msPlaying)
    }

    el.classList.add(s.msArmed)
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && e.intersectionRatio >= 0.5) {
          if (!el.classList.contains(s.msPlaying)) {
            el.classList.add(s.msPlaying)
            countUp()
          }
        } else if (!e.isIntersecting) {
          reset()
        }
      },
      { threshold: [0, 0.5] },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      reset()
      el.classList.remove(s.msArmed)
    }
  }, [])

  return (
    <div ref={ref} style={{ ["--ms-step" as string]: `${STEP_MS}ms` }}>
      {children}
    </div>
  )
}
