"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

const notifications = [
  { name: "Ahmed K.", area: "Dubai Marina", action: "just booked storage" },
  { name: "Sarah M.", area: "Business Bay", action: "just got a free quote" },
  { name: "Priya R.", area: "JLT", action: "just booked storage" },
  { name: "James T.", area: "Downtown Dubai", action: "just requested pickup" },
  { name: "Fatima A.", area: "Jumeirah", action: "just booked storage" },
  { name: "Rahul S.", area: "Silicon Oasis", action: "just got a free quote" },
  { name: "Maria L.", area: "Deira", action: "just booked storage" },
  { name: "Omar H.", area: "Al Barsha", action: "just requested pickup" },
  { name: "Neha P.", area: "Sports City", action: "just booked storage" },
  { name: "David W.", area: "Motor City", action: "just got a free quote" },
  { name: "Layla F.", area: "Palm Jumeirah", action: "just booked storage" },
  { name: "Ravi N.", area: "Mirdif", action: "just requested pickup" },
]

const todayCount = Math.floor(Math.random() * 21) + 10 // 10–30

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Show only once per session
    if (typeof window !== "undefined" && sessionStorage.getItem("sp_shown")) return

    // Pick a random starting notification
    setCurrent(Math.floor(Math.random() * notifications.length))

    // Delay initial appearance
    const showTimer = setTimeout(() => {
      setVisible(true)
      if (typeof window !== "undefined") sessionStorage.setItem("sp_shown", "1")
    }, 4000)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!visible || dismissed) return

    // Cycle to next notification every 5 seconds
    const cycleTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % notifications.length)
    }, 5000)

    // Auto-hide after 30 seconds
    const hideTimer = setTimeout(() => setVisible(false), 30000)

    return () => {
      clearInterval(cycleTimer)
      clearTimeout(hideTimer)
    }
  }, [visible, dismissed])

  if (!visible || dismissed) return null

  const n = notifications[current]

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "20px",
        zIndex: 9999,
        maxWidth: "300px",
        animation: "slideInLeft 0.4s ease",
      }}
    >
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-110%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `}</style>

      <div
        style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
          border: "1px solid #e5e7eb",
          padding: "12px 14px",
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
          position: "relative",
        }}
      >
        {/* Avatar circle */}
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0A2463, #1a4a8a)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "14px",
            flexShrink: 0,
          }}
        >
          {n.name.charAt(0)}
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ margin: 0, fontSize: "13px", color: "#111827", fontWeight: 600, lineHeight: 1.3 }}>
            {n.name} from {n.area}
          </p>
          <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#6b7280", lineHeight: 1.3 }}>
            {n.action} · just now
          </p>
          <p style={{ margin: "5px 0 0", fontSize: "11px", color: "#0A2463", fontWeight: 600 }}>
            🔥 {todayCount} people booked storage today
          </p>
        </div>

        {/* Close */}
        <button
          onClick={() => { setVisible(false); setDismissed(true) }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "2px",
            color: "#9ca3af",
            flexShrink: 0,
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
