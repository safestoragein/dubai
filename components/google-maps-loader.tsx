"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface GoogleMapsLoaderProps {
  onLoad?: () => void
  children: React.ReactNode
}

export default function GoogleMapsLoader({ onLoad, children }: GoogleMapsLoaderProps) {
  const [mapsLoaded, setMapsLoaded] = useState(false)

  const handleScriptLoad = () => {
    setMapsLoaded(true)
    if (onLoad) onLoad()
  }

  useEffect(() => {
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      setMapsLoaded(true)
      if (onLoad) onLoad()
    }
  }, [onLoad])

  return (
    <>
      {/* Note: Google Maps API key removed for security - using static map instead */}
      {children}
    </>
  )
}
