"use client"

import { useEffect } from "react"

// Reports the lead exactly once. The server decides (fire:true only for the first claim of this CRM
// lead id), so refreshing or re-opening the thank-you link inside the pass lifetime never fires again.
// Renders nothing.
export default function LeadTracker() {
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("t")
    if (!t) return
    fetch("/api/thank-you/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ t }),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((j: { fire?: boolean; submission_id?: string } | null) => {
        if (!j?.fire || !j.submission_id) return
        let ec: { email?: string; phone?: string } = {}
        try {
          ec = JSON.parse(sessionStorage.getItem("ssl_ec") || "{}")
          sessionStorage.removeItem("ssl_ec")
        } catch {
          /* ignore */
        }
        const w = window as unknown as { dataLayer?: unknown[] }
        ;(w.dataLayer = w.dataLayer || []).push({
          event: "generate_lead",
          submission_id: j.submission_id,
          form_type: "book_appointment",
          page_location: window.location.origin + window.location.pathname,
          // Enhanced conversions: GTM hashes these as user-provided data.
          user_email: (ec.email || "").trim().toLowerCase(),
          user_phone: ec.phone || "",
        })
      })
      .catch(() => {})
  }, [])
  return null
}
