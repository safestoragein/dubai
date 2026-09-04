"use client"

import { useEffect } from "react"

/**
 * Sets <html lang="ar"> on the Arabic subtree and restores it on the way out.
 *
 * It deliberately does NOT set dir="rtl" on <html>. The site is only partly
 * translated — the header and footer are still English — and flipping the whole
 * document mirrored that English chrome, which collapsed the nav spacing
 * ("Self StorageHome") and threw its punctuation to the wrong side. Direction
 * therefore stays scoped to the Arabic content wrapper in app/ar/layout.tsx,
 * where every element inside it is Arabic. Revisit if the chrome is translated.
 *
 * WHY NOT DO IT SERVER-SIDE: App Router allows exactly one root layout, and it
 * is shared with every English page. Reading headers() there to branch on the
 * pathname would opt the ENTIRE app out of static rendering — 300+ prerendered
 * pages become on-demand renders, which is the same class of regression that
 * once took the UK site down. So the SSR'd markup keeps lang="en" on <html>,
 * and correctness for SEO comes from three things that ARE server-rendered:
 * dir="rtl" + lang="ar" on the page wrapper, hreflang alternates, and
 * og:locale=ar_AE. This component fixes the <html> element for browsers,
 * screen readers and text selection after hydration.
 */
export default function HtmlLangSync() {
  useEffect(() => {
    const el = document.documentElement
    const prevLang = el.lang
    el.lang = "ar"
    return () => {
      el.lang = prevLang || "en"
    }
  }, [])
  return null
}
