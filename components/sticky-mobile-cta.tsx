import Link from "next/link"
import { PHONE } from "@/lib/company-facts"

/**
 * Fixed bottom CTA bar for phones.
 *
 * WHY: 83% of Sharjah clicks are mobile (140 of 169) and all six conversions
 * came from mobile; desktop delivered 29 clicks and zero conversions. Until now
 * the only CTAs were in the hero and the footer, so a visitor mid-page had
 * nothing to tap without scrolling.
 *
 * DESIGN CONSTRAINTS, all deliberate:
 *  - Server component, no JS, no state. It must be present in the first paint
 *    rather than appearing after hydration or after a scroll threshold — a bar
 *    that fades in on scroll is invisible to the visitor who bounces in 3s.
 *  - `lg:hidden` — shown below 1024px. The brief said 768px; the site's own
 *    header collapses to a hamburger at `lg` (1024px), so 768–1024px tablets
 *    would otherwise get the collapsed header AND no visible CTA. Raising the
 *    breakpoint costs nothing on desktop and closes that gap.
 *  - Padded with env(safe-area-inset-bottom) for iPhone home-indicator devices.
 *  - `body` gets matching bottom padding (globals.css) so the bar can never
 *    cover the last element of a page — footer links included.
 *
 * The `tel:` and `wa.me` targets are the real published numbers, taken from
 * company-facts so they cannot drift from the rest of the site.
 */

const WHATSAPP_NUMBER = PHONE.replace(/[^0-9]/g, "") // wa.me wants digits only

export default function StickyMobileCta() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[60] lg:hidden border-t border-black/10 bg-white/95 backdrop-blur shadow-[0_-4px_20px_rgba(0,0,0,0.12)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3">
        <Link
          href="/get-quote"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-[#0A2463] font-semibold text-[12px] active:bg-black/5"
          aria-label="Get a free storage quote"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
          </svg>
          Get Quote
        </Link>

        <a
          href={`tel:${PHONE}`}
          className="flex flex-col items-center justify-center gap-1 py-2.5 bg-[#EE5824] text-white font-semibold text-[12px] active:brightness-95"
          aria-label="Call SafeStorage"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 bg-[#25D366] text-white font-semibold text-[12px] active:brightness-95"
          aria-label="Message SafeStorage on WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  )
}
