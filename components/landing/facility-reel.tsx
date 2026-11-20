"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

// Facility reel tile. Performance-first: nothing but the small poster is fetched until the tile is
// actually near the viewport; then the 1.3MB MP4 is attached and plays muted+looped, and it pauses
// again when scrolled away. Honours prefers-reduced-motion (poster only, tap to play).
export default function FacilityReel({ src, poster, label, className }: { src: string; poster: string; label: string; className?: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const vid = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = wrap.current
    const v = vid.current
    if (!el || !v) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!loaded) {
            v.src = src
            setLoaded(true)
          }
          if (!reduce) v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { rootMargin: "200px 0px", threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [src, loaded])

  const toggleSound = () => {
    const v = vid.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    if (!v.muted) v.play().catch(() => {})
  }

  return (
    <div className={className} ref={wrap}>
      <video ref={vid} poster={poster} muted loop playsInline preload="none" aria-label={label} />
      <button type="button" onClick={toggleSound} aria-label={muted ? "Turn sound on" : "Turn sound off"} data-reel-sound>
        {muted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
      </button>
    </div>
  )
}
