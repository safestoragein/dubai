// This file contains utilities to improve performance

// Function to defer non-critical JavaScript
export function deferNonCritical(callback: () => void, timeout = 1000) {
  if (typeof window === "undefined") return

  // Use requestIdleCallback if available, otherwise setTimeout
  if ("requestIdleCallback" in window) {
    ;(window as any).requestIdleCallback(callback, { timeout })
  } else {
    setTimeout(callback, timeout)
  }
}

// Function to optimize event listeners
export function optimizedEventListener(
  element: HTMLElement | Window | Document,
  eventType: string,
  callback: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
) {
  // Debounce resize and scroll events
  if (eventType === "resize" || eventType === "scroll") {
    let timer: ReturnType<typeof setTimeout>

    const debouncedCallback = (event: Event) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (typeof callback === "function") {
          callback(event)
        } else {
          callback.handleEvent(event)
        }
      }, 100) // 100ms debounce
    }

    element.addEventListener(eventType, debouncedCallback, options)
    return () => element.removeEventListener(eventType, debouncedCallback)
  }

  // Regular event listener for other events
  element.addEventListener(eventType, callback, options)
  return () => element.removeEventListener(eventType, callback)
}

// Function to optimize DOM updates
export function batchDOMUpdates(updates: (() => void)[]) {
  if (typeof window === "undefined") return

  // Use requestAnimationFrame to batch DOM updates
  requestAnimationFrame(() => {
    updates.forEach((update) => update())
  })
}
