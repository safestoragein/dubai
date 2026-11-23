"use client"

import { usePathname } from "next/navigation"
import StorageQuoteForm from "@/components/landing/storage-quote-form"
import { manrope, sora } from "@/components/landing/fonts"
import s from "@/components/landing/landing.module.css"
import q from "@/components/landing/storage-quote.module.css"

// Pages that are the form itself / transactional screens.
const SKIP_EXACT = new Set(["/get-quote", "/thank-you", "/storage-quote", "/packers-and-movers/get-quote", "/test-icons", "/feed-state"])

/** The /storage-quote form (creates a customer + quotation, saves page + source) shown in the footer of every page. */
export default function FooterQuote() {
  const path = (usePathname() || "").replace(/\/$/, "") || "/"
  if (SKIP_EXACT.has(path)) return null
  return (
    <div className={`${s.page} ${q.root} ${sora.variable} ${manrope.variable}`} style={{ background: "transparent" }}>
      {/* the orange backdrop + floating pill are hero-column decoration; they overlap the card at this width */}
      <style>{"#footer-quote::before{display:none!important}#footer-quote>span:first-child{position:static!important;margin:0 auto 12px;display:flex;width:max-content}"}</style>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "36px 16px 40px" }}>
        <h3 className="text-xl font-semibold text-dubai-gold text-center mb-4">Get a free storage quote</h3>
        <StorageQuoteForm anchorId="footer-quote" />
      </div>
    </div>
  )
}
