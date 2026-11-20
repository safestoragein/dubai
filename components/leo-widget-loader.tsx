"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"

// Pages where the Leo/Storo chat launcher must not appear (lead-form landing pages
// already put the form in the hero). Everything else loads it as before.
const NO_WIDGET = ["/storage-quote", "/thank-you"]

export default function LeoWidgetLoader() {
  const path = (usePathname() || "").replace(/\/$/, "")
  if (NO_WIDGET.includes(path)) return null
  return <Script src="/safestorage-chat-widget.iife.js" strategy="lazyOnload" />
}
