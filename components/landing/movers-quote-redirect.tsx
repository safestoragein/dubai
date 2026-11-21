"use client"

import { useEffect } from "react"

export const MOVERS_QUOTE_PATH = "/packers-and-movers/get-quote"

// On a movers & packers page the generic storage quote form is the wrong destination. Every
// "Get a free quote" link that the shared chrome renders (header button, sticky mobile bar,
// footer, CTA bands) points at /get-quote, so repoint them here instead of editing each one.
// The href is rewritten (so hover, middle-click and copy-link are right too) and a capture-phase
// click handler covers any link rendered after mount.
export default function MoversQuoteRedirect() {
  useEffect(() => {
    const isStorageQuote = (a: HTMLAnchorElement) => {
      try {
        const u = new URL(a.href, location.href)
        return u.origin === location.origin && u.pathname.replace(/\/$/, "") === "/get-quote"
      } catch {
        return false
      }
    }
    const rewrite = (a: HTMLAnchorElement) => {
      const u = new URL(a.href, location.href)
      a.setAttribute("href", MOVERS_QUOTE_PATH + u.search)
    }
    document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((a) => isStorageQuote(a) && rewrite(a))

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (a && isStorageQuote(a)) rewrite(a) // the navigation that follows now uses the new href
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])
  return null
}
