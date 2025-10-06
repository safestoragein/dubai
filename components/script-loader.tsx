"use client"

import { useEffect } from "react"

interface ScriptLoaderProps {
  src: string
  id?: string
  async?: boolean
  defer?: boolean
  onLoad?: () => void
  strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload"
}

export default function ScriptLoader({
  src,
  id,
  async = true,
  defer = true,
  onLoad,
  strategy = "lazyOnload",
}: ScriptLoaderProps) {
  useEffect(() => {
    // Skip if the script is already loaded
    if (id && document.getElementById(id)) {
      if (onLoad) onLoad()
      return
    }

    const loadScript = () => {
      const script = document.createElement("script")
      script.src = src
      script.async = async
      script.defer = defer
      if (id) script.id = id

      script.onload = () => {
        if (onLoad) onLoad()
      }

      document.body.appendChild(script)
    }

    if (strategy === "beforeInteractive") {
      loadScript()
    } else if (strategy === "afterInteractive") {
      loadScript()
    } else if (strategy === "lazyOnload") {
      // Load script when browser is idle
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => loadScript())
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        window.setTimeout(loadScript, 1500)
      }
    }

    return () => {
      // Clean up script if component unmounts
      if (id) {
        const script = document.getElementById(id)
        if (script) document.body.removeChild(script)
      }
    }
  }, [src, id, async, defer, onLoad, strategy])

  return null
}
