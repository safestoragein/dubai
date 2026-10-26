"use client"

import { useEffect, useRef } from "react"
import { loadGoogleMapsScript } from "@/lib/google-maps-loader"

// Address field with Google Places suggestions (UAE only). Reuses the site's Maps loader.
// If Maps fails to load (blocked, offline) it stays a plain text input, so the form still works.
export default function AddressInput({ id, value, onChange, className, placeholder }: {
  id: string
  value: string
  onChange: (v: string) => void
  className?: string
  placeholder?: string
}) {
  const ref = useRef<HTMLInputElement>(null)
  const cb = useRef(onChange)
  cb.current = onChange

  useEffect(() => {
    let ac: google.maps.places.Autocomplete | null = null
    let dead = false
    loadGoogleMapsScript()
      .then(() => {
        if (dead || !ref.current || !window.google?.maps?.places) return
        ac = new window.google.maps.places.Autocomplete(ref.current, {
          componentRestrictions: { country: "AE" },
          fields: ["formatted_address", "name"],
        })
        ac.addListener("place_changed", () => {
          const p = ac!.getPlace()
          const text = [p.name, p.formatted_address].filter(Boolean)
          // "Marina Plaza, Dubai Marina - Dubai" — keep the building/place name when Google gives one.
          const v = p.formatted_address && p.name && !p.formatted_address.startsWith(p.name) ? text.join(", ") : p.formatted_address || p.name
          if (v) cb.current(v)
        })
      })
      .catch(() => {})
    return () => {
      dead = true
      if (ac) window.google?.maps?.event?.clearInstanceListeners?.(ac)
    }
  }, [])

  return (
    <input
      ref={ref}
      id={id}
      autoComplete="off"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
