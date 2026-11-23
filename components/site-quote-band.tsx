"use client"

import { usePathname } from "next/navigation"
import PricesQuoteCard from "@/components/landing/prices-quote-card"

// Pages that already carry their own form, or are transactional / app screens.
const SKIP_EXACT = new Set([
  "/get-quote", "/contact", "/storage-quote", "/self-storage-dubai/prices",
  "/thank-you", "/packers-and-movers/get-quote", "/test-icons", "/feed-state",
])
const SKIP_PREFIX = ["/admin", "/account", "/back"]

/** Site-wide "Get a free quote" band above the footer, so every page has a lead form. */
export default function SiteQuoteBand() {
  const path = (usePathname() || "").replace(/\/$/, "") || "/"
  if (SKIP_EXACT.has(path) || SKIP_PREFIX.some((p) => path === p || path.startsWith(p + "/"))) return null
  return (
    <section id="site-quote" aria-label="Get a free quote" className="bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Get a free, itemised quote</h2>
        <p className="mt-2 mb-6 text-slate-600">Leave your details and our team will call you shortly.</p>
        <div className="text-left"><PricesQuoteCard placement="site" /></div>
      </div>
    </section>
  )
}
