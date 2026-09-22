"use client"

import { useEffect } from "react"
import { captureAdAttribution } from "@/lib/ad-attribution"

// Mounted once in the root layout: records ad-click params from the landing URL
// so the quote form can send them with the lead. Renders nothing.
export default function AdAttributionCapture() {
  useEffect(() => {
    captureAdAttribution()
  }, [])
  return null
}
