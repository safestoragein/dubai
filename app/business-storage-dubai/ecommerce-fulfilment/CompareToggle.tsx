"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import c from "./compare.module.css"

/**
 * Phone toggle + scroll reveal for the "Storage vs Warehouse Lease" cards.
 * Both cards arrive as server-rendered children and always stay in the DOM;
 * on phones CSS hides whichever one is not selected.
 */
export default function CompareToggle({ children }: { children: ReactNode }) {
  const [show, setShow] = useState<"us" | "them">("us")
  const [armed, setArmed] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return
    setArmed(true)
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className={c.toggle} role="tablist" aria-label="Compare SafeStorage with a warehouse lease">
        <button type="button" role="tab" aria-selected={show === "us"} onClick={() => setShow("us")}>
          SafeStorage
        </button>
        <button
          type="button"
          role="tab"
          className={c.tabThem}
          aria-selected={show === "them"}
          onClick={() => setShow("them")}
        >
          Warehouse lease
        </button>
      </div>
      <div
        ref={ref}
        className={`${c.vs} ${armed ? c.armed : ""} ${inView ? c.in : ""}`}
        data-show={show}
      >
        {children}
      </div>
    </>
  )
}
