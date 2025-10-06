"use client"

import { useEffect } from "react"

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Mark the page as interactive as soon as possible
    if (document.readyState === "interactive" || document.readyState === "complete") {
      optimizePage()
    } else {
      document.addEventListener("DOMContentLoaded", optimizePage)
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", optimizePage)
    }
  }, [])

  const optimizePage = () => {
    // Add rel="preconnect" for external domains
    addPreconnect("https://fonts.googleapis.com")
    addPreconnect("https://fonts.gstatic.com", true)

    // Defer non-critical operations
    deferNonCritical(() => {
      // Preload important images that might be needed soon
      preloadImportantImages()
    })
  }

  const deferNonCritical = (callback: () => void, timeout = 1000) => {
    // Use requestIdleCallback if available, otherwise setTimeout
    if ("requestIdleCallback" in window) {
      ;(window as any).requestIdleCallback(callback, { timeout })
    } else {
      setTimeout(callback, timeout)
    }
  }

  const addPreconnect = (url: string, crossOrigin = false) => {
    const link = document.createElement("link")
    link.rel = "preconnect"
    link.href = url
    if (crossOrigin) link.crossOrigin = "anonymous"
    document.head.appendChild(link)
  }

  const preloadImportantImages = () => {
    // Add preload links for critical images
    const criticalImages = ["/cluttered-storage.png"]

    criticalImages.forEach((imageSrc) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = imageSrc
      document.head.appendChild(link)
    })
  }

  return null
}
