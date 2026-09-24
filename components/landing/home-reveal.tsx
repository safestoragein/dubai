"use client"

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"
import f from "./home-fx.module.css"

/* Pops the cards inside it up, one after another, the first time they scroll
   into view (homepage redesign, owner 2026-09-21). Same approach as the service
   pages. Server-rendered children, so nothing is hidden from crawlers. */
export default function HomeReveal({
  children,
  className = "",
  style,
}: {
  children: ReactNode
  className?: string
  /** passed through for one-off grid overrides; optional, so existing callers are unchanged */
  style?: CSSProperties
}) {
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = el.current
    if (!node) return
    node.classList.add(f.armed)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add(f.in)
            io.unobserve(e.target)
          }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={el} className={className} style={style}>
      {children}
    </div>
  )
}
