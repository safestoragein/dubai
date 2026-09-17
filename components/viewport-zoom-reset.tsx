"use client"

import { useEffect } from "react"

const TEXT_FIELD =
  'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]), select, textarea'

/**
 * Snaps a phone back to 100% zoom when the keyboard closes.
 *
 * Fields are 16px on mobile so iOS no longer zooms on focus, but some browsers
 * (and visitors who pinch while typing) can still be left zoomed in. When a
 * text field loses focus and nothing else takes it, and the visual viewport is
 * scaled up, we briefly clamp the viewport meta to maximum-scale=1 — which
 * makes iOS Safari, Chrome and Samsung Internet reset the zoom — then restore
 * the original tag so pinch-zoom keeps working for accessibility.
 */
export default function ViewportZoomReset() {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="viewport"]')
    if (!meta) return
    const original = meta.getAttribute("content") || "width=device-width, initial-scale=1"
    let restoreTimer: number | undefined

    const onFocusOut = (e: FocusEvent) => {
      const target = e.target as Element | null
      if (!target?.matches?.(TEXT_FIELD)) return

      // Wait a tick: if focus moved to the next field the keyboard stays open.
      window.setTimeout(() => {
        if (document.activeElement?.matches?.(TEXT_FIELD)) return
        const scale = window.visualViewport?.scale ?? 1
        if (scale <= 1.01) return

        meta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1")
        window.clearTimeout(restoreTimer)
        restoreTimer = window.setTimeout(() => meta.setAttribute("content", original), 400)
      }, 120)
    }

    document.addEventListener("focusout", onFocusOut)
    return () => {
      document.removeEventListener("focusout", onFocusOut)
      window.clearTimeout(restoreTimer)
      meta.setAttribute("content", original)
    }
  }, [])

  return null
}
