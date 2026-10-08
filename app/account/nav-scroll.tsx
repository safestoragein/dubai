"use client"

import { useEffect } from "react"

// On phones the menu is a scrolling bottom bar: bring the current page's tab into view when the page opens.
export default function NavScroll() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>('nav[aria-label="Account"]')
    const cur = nav?.querySelector<HTMLElement>('[aria-current="page"]')
    if (nav && cur && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = cur.offsetLeft - (nav.clientWidth - cur.offsetWidth) / 2
  }, [])
  return null
}
