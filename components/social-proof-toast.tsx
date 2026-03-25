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

const TWO_HOURS = 2 * 60 * 60 * 1000

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [todayCount, setTodayCount] = useState(10)

  useEffect(() => {
    // Check localStorage — only show once every 2 hours
    try {
      const last = localStorage.getItem("sp_last_shown")
      if (last && Date.now() - Number(last) < TWO_HOURS) return
    } catch (_) {
      // ignore if localStorage blocked
    }

    // Randomise values client-side only (avoids SSR mismatch)
    setCurrent(Math.floor(Math.random() * notifications.length))
    setTodayCount(Math.floor(Math.random() * 21) + 10) // 10–30

    const showTimer = setTimeout(() => {
      setVisible(true)
      try { localStorage.setItem("sp_last_shown", String(Date.now())) } catch (_) {}
    }, 3000)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!visible) return

    const cycleTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % notifications.length)
    }, 5000)

    const hideTimer = setTimeout(() => setVisible(false), 35000)

    return () => {
      clearInterval(cycleTimer)
      clearTimeout(hideTimer)
    }
  }, [visible])

  if (!visible) return null

  const n = notifications[current]

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "20px",
        zIndex: 9999,
        maxWidth: "300px",
        animation: "spSlideIn 0.45s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <style>{`
        @keyframes spSlideIn {
          from { transform: translateX(-120%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>

      <div
        style={{
          background: "white",
          borderRadius: "14px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.14)",
          border: "1px solid #e5e7eb",
          padding: "12px 14px",
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0A2463, #1a4a8a)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "15px",
            flexShrink: 0,
          }}
        >
          {n.name.charAt(0)}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ margin: 0, fontSize: "13px", color: "#111827", fontWeight: 700, lineHeight: 1.4 }}>
            {n.name} <span style={{ fontWeight: 400, color: "#374151" }}>from {n.area}</span>
          </p>
          <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#6b7280", lineHeight: 1.3 }}>
            {n.action} · just now
          </p>
          <p style={{ margin: "6px 0 0", fontSize: "11px", color: "#0A2463", fontWeight: 700, background: "#f0f4ff", borderRadius: "6px", padding: "3px 7px", display: "inline-block" }}>
            🔥 {todayCount} people booked storage today
          </p>
        </div>

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "2px",
            color: "#9ca3af",
            flexShrink: 0,
            lineHeight: 1,
            marginTop: "1px",
          }}
          aria-label="Close"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
