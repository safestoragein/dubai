"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Country switcher for the header, matching the one safestorage.in carries.
 *
 * The India site publishes a "🌐 Locations" dropdown listing India / Dubai / UK
 * with flagcdn images. safestorage.ae had no equivalent, so a visitor who landed
 * on the UAE site had no way to reach the other two.
 *
 * ⚠ THE UK DOMAIN IS safestorageuk.co.uk — NOT safestorage.co.uk.
 * safestorage.co.uk is not ours; it 301s to mgtr.co.uk. Checked 2026-09-04
 * against the live India header, which uses safestorageuk.co.uk.
 *
 * Labelled with the CURRENT country rather than the word "Locations": this site
 * already uses /locations for its own district pages, so reusing that word in
 * the header would read as a link to those. Showing "UAE" also tells the visitor
 * which site they are on, which is the actual job of a country switcher.
 *
 * Plain <img> rather than next/image: flagcdn is not in next.config's
 * remotePatterns and these are 1KB SVGs where the loader would add no value.
 * Width/height are set so they reserve space and cannot shift layout.
 */

type Site = { code: string; flag: string; label: string; href: string; current?: boolean }

const SITES: Site[] = [
  { code: "in", flag: "https://flagcdn.com/in.svg", label: "India", href: "https://safestorage.in/" },
  { code: "ae", flag: "https://flagcdn.com/ae.svg", label: "UAE", href: "https://safestorage.ae/", current: true },
  { code: "gb", flag: "https://flagcdn.com/gb.svg", label: "UK", href: "https://safestorageuk.co.uk/" },
]

const CURRENT = SITES.find((s) => s.current)!

export default function CountrySwitcher({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click and on Escape — a dropdown that can only be closed by
  // clicking the trigger again is the usual complaint about hand-rolled ones.
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change country site"
        className="inline-flex w-full items-center justify-center gap-2 rounded border border-dubai-gold/40 px-3 py-2 text-sm font-semibold text-[#0A2463] transition-colors hover:bg-dubai-gold hover:text-white"
      >
        <img src={CURRENT.flag} alt="" width={18} height={13} className="rounded-[2px]" loading="lazy" />
        {CURRENT.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Always in the DOM, hidden with CSS rather than conditionally mounted, so
          the three cross-site links are present in the server-rendered HTML the
          way safestorage.in publishes them. A dropdown that only mounts on click
          is invisible to crawlers. */}
      <ul
          role="menu"
          hidden={!open}
          className="absolute right-0 z-50 mt-1 w-44 overflow-hidden rounded-md border border-gray-200 bg-white py-1 shadow-lg"
        >
          {SITES.map((s) => (
            <li key={s.code} role="none">
              <a
                role="menuitem"
                href={s.href}
                // Same-site entry is not a new tab; the other two are, matching
                // how safestorage.in links out.
                {...(s.current ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                aria-current={s.current ? "true" : undefined}
                className={`flex items-center gap-2.5 px-3.5 py-2 text-sm transition-colors hover:bg-gray-50 ${
                  s.current ? "font-semibold text-[#0A2463]" : "text-gray-700"
                }`}
                onClick={() => setOpen(false)}
              >
                <img src={s.flag} alt="" width={18} height={13} className="rounded-[2px]" loading="lazy" />
                <span className="flex-1">{s.label}</span>
                {s.current && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
    </div>
  )
}
