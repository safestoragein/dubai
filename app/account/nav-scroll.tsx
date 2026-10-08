"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import c from "./account.module.css"

// On phones the menu is a scrolling bottom bar: bring the current page's tab into view when the page opens, and show
// a fading arrow on whichever side still has more tabs (tap it to scroll that way).
export default function NavScroll() {
  const [more, setMore] = useState({ left: false, right: false })

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>('nav[aria-label="Account"]')
    if (!nav) return
    const cur = nav.querySelector<HTMLElement>('[aria-current="page"]')
    if (cur && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = cur.offsetLeft - (nav.clientWidth - cur.offsetWidth) / 2
    const update = () => setMore({ left: nav.scrollLeft > 4, right: nav.scrollLeft + nav.clientWidth < nav.scrollWidth - 4 })
    update()
    nav.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => { nav.removeEventListener("scroll", update); window.removeEventListener("resize", update) }
  }, [])

  const go = (dir: 1 | -1) => document.querySelector<HTMLElement>('nav[aria-label="Account"]')?.scrollBy({ left: dir * 220, behavior: "smooth" })
  return (
    <>
      {more.left && <button type="button" className={`${c.navHint} ${c.navHintL}`} aria-label="Scroll menu left" onClick={() => go(-1)}><ChevronLeft aria-hidden="true" /></button>}
      {more.right && <button type="button" className={`${c.navHint} ${c.navHintR}`} aria-label="Scroll menu right, more pages" onClick={() => go(1)}><ChevronRight aria-hidden="true" /></button>}
    </>
  )
}
