"use client"

import { useEffect } from "react"

// On the /storage-quote lead page every "Get a free quote" link (header button, sticky mobile bar,
// footer...) should land on the form that is already on this page rather than navigate to /get-quote.
export default function QuoteLinkIntercept({ targetId = "quote" }: { targetId?: string }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!a) return
      let path = ""
      try {
        const u = new URL(a.href, location.href)
        if (u.origin !== location.origin) return
        path = u.pathname.replace(/\/$/, "")
      } catch {
        return
      }
      if (path !== "/get-quote") return
      const el = document.getElementById(targetId)
      if (!el) return
      e.preventDefault()
      e.stopPropagation()
      el.scrollIntoView({ behavior: "smooth", block: "center" })
      window.setTimeout(() => el.querySelector<HTMLElement>("input:not([type=hidden]):not([name=website])")?.focus({ preventScroll: true }), 500)
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [targetId])
  return null
}
