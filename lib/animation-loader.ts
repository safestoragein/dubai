// This file helps with lazy loading animations
let animationsLoaded = false

export function loadAnimations() {
  if (typeof window === "undefined" || animationsLoaded) return

  // Set flag to prevent multiple loads
  animationsLoaded = true

  // Use requestIdleCallback to load animations when browser is idle
  const loadInIdle = (callback: () => void) => {
    if ("requestIdleCallback" in window) {
      ;(window as any).requestIdleCallback(callback, { timeout: 2000 })
    } else {
      setTimeout(callback, 200)
    }
  }

  loadInIdle(() => {
    // Any heavy animation initialization can go here
    console.log("Animations loaded during idle time")
  })
}

// Function to determine if animations should run based on user preference
export function shouldRunAnimations() {
  if (typeof window === "undefined") return false

  // Check for reduced motion preference
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
