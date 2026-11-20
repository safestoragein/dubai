"use client"

import { useEffect, useState } from "react"

// The quote form stores the visitor's name in sessionStorage just before redirecting here
// (same hand-off as safestorage.in). Shows "Thank you, Ahmed!" when present, "Thank you!" otherwise.
export default function ThankYouName() {
  const [first, setFirst] = useState("")
  useEffect(() => {
    try {
      const n = (sessionStorage.getItem("ssl_name") || "").trim().split(/\s+/)[0] || ""
      if (n && n.length <= 30 && !/[<>]/.test(n)) setFirst(n)
    } catch {
      /* no storage: generic heading */
    }
  }, [])
  return <>{first ? `Thank you, ${first}!` : "Thank you!"}</>
}
