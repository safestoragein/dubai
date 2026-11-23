"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { LandingConnect } from "@/components/landing/landing-connect"
import { manrope, sora } from "@/components/landing/fonts"
import s from "@/components/landing/landing.module.css"

// Transactional / app screens, and pages that carry their own full form.
const SKIP_EXACT = new Set(["/get-quote", "/thank-you", "/storage-quote", "/packers-and-movers/get-quote", "/test-icons", "/feed-state"])
const SKIP_PREFIX = ["/admin", "/account", "/back"]

/** Site-wide "Let's connect / Get your free storage quote" form above the footer.
 *  Many pages already render <LandingConnect/> themselves; this mounts after hydration and
 *  stays out of the way when #connect is already on the page, so no page shows it twice. */
export default function SiteQuoteBand() {
  const path = (usePathname() || "").replace(/\/$/, "") || "/"
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(!document.getElementById("connect"))
  }, [path])
  if (!show || SKIP_EXACT.has(path) || SKIP_PREFIX.some((p) => path === p || path.startsWith(p + "/"))) return null
  return (
    <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
      <LandingConnect />
    </div>
  )
}
