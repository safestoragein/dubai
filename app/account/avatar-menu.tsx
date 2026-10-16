"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import c from "./account.module.css"

export default function AvatarMenu({ name, customerId, initial }: { name: string; customerId?: string; initial: string }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const click = (e: MouseEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false) }
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("mousedown", click)
    document.addEventListener("keydown", key)
    return () => { document.removeEventListener("mousedown", click); document.removeEventListener("keydown", key) }
  }, [open])
  return (
    <div className={c.avatarWrap} ref={box}>
      <button type="button" className={c.avatar} title={name} aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>{initial}</button>
      {open && (
        <div className={c.avatarMenu} role="menu">
          <div className={c.avatarMenuHead}>
            <b>{name}</b>
            {customerId && <span>ID {customerId}</span>}
          </div>
          <button type="button" role="menuitem" className={c.avatarMenuItem} onClick={async () => {
            await fetch("/api/customer/logout", { method: "POST" })
            router.push("/back/customer_login")
            router.refresh()
          }}><LogOut aria-hidden="true" /> Log out</button>
        </div>
      )}
    </div>
  )
}
