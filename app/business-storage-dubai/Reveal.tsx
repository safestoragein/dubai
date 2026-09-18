"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import r from "./hero.module.css"

/**
 * Arms the "every plan includes" cards so they pop up (and their icons start
 * animating) the first time they scroll into view — same armed/in pattern as the
 * student page. Content is server-rendered and only hidden once JS arms it.
 */
export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return
    // already on screen at load: show without animating
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return
    setArmed(true)
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${armed ? r.armed : ""} ${inView ? r.in : ""}`}>
      {children}
    </div>
  )
}
