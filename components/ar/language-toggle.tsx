"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

/**
 * "EN" escape hatch, rendered ONLY on Arabic pages.
 *
 * English pages show nothing at all — no "العربية" button. Arabic visitors
 * reach /ar through search, the sitemap and hreflang; the toggle exists so they
 * are never stranded there, not as a discovery route from the English site.
 *
 * It maps back to the English counterpart where one exists and falls back to
 * the English hub rather than 404ing:
 *   /ar/locations/sharjah/al-nahda  →  /locations/sharjah/al-nahda
 *   /ar/locations/abu-dhabi         →  /locations   (no English twin)
 *   /ar anything else               →  /
 *
 * Client component because it needs the current path. It renders a link, not a
 * router.push, so it still works with JS disabled once rendered.
 */
export default function LanguageToggle({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/"
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/")

  // Arabic pages only. Rendering nothing on the English site is deliberate —
  // see the note above.
  if (!isArabic) return null

  const rest = pathname.replace(/^\/ar/, "") || "/"
  // /ar/locations/<em>/<area> → /locations/<em>/<area>. Sharjah and the Dubai
  // areas have English twins; Abu Dhabi and the Ajman areas do not, so those
  // land on the English locations hub rather than a 404.
  const href = rest.startsWith("/locations") ? rest : "/"

  return (
    <Link
      href={href}
      hrefLang="en"
      aria-label="Switch to English"
      className={`inline-flex items-center gap-1.5 rounded border border-dubai-gold/40 px-3 py-2 text-sm font-semibold text-[#0A2463] transition-colors hover:bg-dubai-gold hover:text-white ${className}`}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      EN
    </Link>
  )
}
