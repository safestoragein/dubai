"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"

// Pages where the Leo/Storo chat launcher must not appear (lead-form landing pages
// already put the form in the hero). Everything else loads it as before.
const NO_WIDGET = ["/storage-quote", "/thank-you"]

// On desktop the round "customer support" button owns the bottom-right corner, so the Storo launcher
// is lifted to sit directly above it (56px button + 16px gap, from the 20px corner inset). The widget
// lives in a shadow root and sets its own position, so the rule has to be injected inside that root.
// Phones are untouched: there the sticky mobile bar is used instead of the support button.
const LIFT_CSS = "@media (min-width:1024px){.ss-dock{bottom:calc(5.75rem + var(--ss-inset,0px))!important}}"

function liftStoro() {
  let tries = 0
  const timer = window.setInterval(() => {
    const root = document.getElementById("safestorage-leo-root")?.shadowRoot
    if (root) {
      if (!root.getElementById("ss-lift")) {
        const style = document.createElement("style")
        style.id = "ss-lift"
        style.textContent = LIFT_CSS
        root.appendChild(style)
      }
      window.clearInterval(timer)
    } else if (++tries > 40) {
      window.clearInterval(timer) // widget never mounted; give up quietly
    }
  }, 250)
}

export default function LeoWidgetLoader() {
  const path = (usePathname() || "").replace(/\/$/, "")
  if (NO_WIDGET.includes(path)) return null
  return <Script src="/safestorage-chat-widget.iife.js" strategy="lazyOnload" onReady={liftStoro} />
}
