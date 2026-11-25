"use client"

import { useEffect } from "react"
import { reportLead } from "@/lib/report-lead"

// Reports the lead through GTM once per submission (retry-safe, see lib/report-lead.ts). Renders nothing.

export default function LeadTracker() {
  useEffect(() => {
    const pass = new URLSearchParams(window.location.search).get("t")
    if (!pass) return
    const w = window as unknown as { dataLayer?: unknown[] }
    w.dataLayer = w.dataLayer || []
    void reportLead({
      pass,
      fetchFn: (u, i) => fetch(u, i),
      dataLayer: w.dataLayer,
      readEc: () => {
        try {
          return JSON.parse(sessionStorage.getItem("ssl_ec") || "{}")
        } catch {
          return {}
        }
      },
      clearEc: () => {
        try {
          sessionStorage.removeItem("ssl_ec")
        } catch {
          /* ignore */
        }
      },
      location: window.location,
    })
  }, [])
  return null
}
