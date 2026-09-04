"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

/**
 * EN ⇄ العربية toggle.
 *
 * Maps between the two trees where a counterpart exists, and falls back to the
 * other tree's hub rather than 404ing:
 *   /locations/sharjah/al-nahda  ⇄  /ar/locations/sharjah/al-nahda
 *   /locations/ajman             ⇄  /ar/locations/ajman
 *   anything else in English     →  /ar/locations
 *   anything else in Arabic      →  /locations
 *
 * Client component because it needs the current path. It is a link, not a
 * router.push, so it still works with JS disabled once rendered.
 */
export default function LanguageToggle({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/"
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/")

  let href: string
  let label: string

  if (isArabic) {
    const rest = pathname.replace(/^\/ar/, "") || "/"
    // /ar/locations/<em>/<area> → /locations/<em>/<area>; Sharjah and Dubai
    // areas have English twins, the rest fall back to the English hub.
    href = rest.startsWith("/locations") ? rest : "/"
    label = "EN"
  } else {
    href = pathname.startsWith("/locations") ? `/ar${pathname}` : "/ar/locations"
    label = "العربية"
  }

  return (
    <Link
      href={href}
      hrefLang={isArabic ? "en" : "ar"}
      aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
      className={`inline-flex items-center gap-1.5 rounded border border-dubai-gold/40 px-3 py-2 text-sm font-semibold text-[#0A2463] transition-colors hover:bg-dubai-gold hover:text-white ${className}`}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {label}
    </Link>
  )
}
