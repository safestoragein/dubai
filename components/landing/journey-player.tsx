"use client"

import { useEffect, useRef, type ReactNode } from "react"
import s from "./journey.module.css"

/**
 * Starts the How-it-works animation the first time the section is 25% on
 * screen, then disconnects. This is the only JS the animation needs; the
 * markup inside is rendered on the server and fully readable without it.
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
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add(s.isPlaying)
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={s.journey}>
      {children}
    </div>
  )
}
