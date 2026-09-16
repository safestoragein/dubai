"use client"

import { useEffect } from "react"
import s from "./about.module.css"

/**
 * The comp's two behaviours, as a client component attached to the
 * server-rendered markup:
 *   - "View all 9 reasons" expands the why-grid
 *   - the testimonial arrows scroll the track by one card
 *
 * It looks the nodes up by id rather than owning the markup, so the whole page
 * stays a server component. The collapsed class comes from the CSS module, so
 * the hashed name is used rather than the literal "is-collapsed".
 */
export default function WhyToggle() {
  useEffect(() => {
    const grid = document.getElementById("whyGrid")
    const toggle = document.getElementById("whyToggle")
    const collapsed = s["is-collapsed"]

    const onToggle = () => {
      if (!grid || !toggle) return
      const open = !grid.classList.toggle(collapsed)
      toggle.setAttribute("aria-expanded", String(open))
      const label = toggle.querySelector("span")
      if (label) label.textContent = open ? "Show fewer" : "View all 9 reasons"
    }
    toggle?.addEventListener("click", onToggle)

    const track = document.getElementById("tsTrack")
    const navs = Array.from(document.querySelectorAll<HTMLElement>("[data-dir]"))
    const onNav = (e: Event) => {
      const btn = e.currentTarget as HTMLElement
      const card = track?.firstElementChild
      if (!track || !card) return
      const step = card.getBoundingClientRect().width + 20
      track.scrollBy({ left: step * Number(btn.dataset.dir), behavior: "smooth" })
    }
    navs.forEach((b) => b.addEventListener("click", onNav))

    return () => {
      toggle?.removeEventListener("click", onToggle)
      navs.forEach((b) => b.removeEventListener("click", onNav))
    }
  }, [])

  return null
}
