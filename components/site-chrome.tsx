"use client"

import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

// Pages that are full-screen apps (customer login / account) show none of the
// marketing chrome: no header, footer, floating call/WhatsApp buttons, booking
// toast or sticky CTA bar. Everything else is untouched.
const BARE_PREFIXES = ["/back/", "/account"]

export default function SiteChrome({ children }: { children: ReactNode }) {
  const path = usePathname() || ""
  if (BARE_PREFIXES.some((p) => path === p.replace(/\/$/, "") || path.startsWith(p))) return null
  return <>{children}</>
}
