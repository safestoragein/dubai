"use client"

import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import c from "./account.module.css"

export default function LogoutButton() {
  const router = useRouter()
  return (
    <button type="button" className={c.signout} onClick={async () => {
      await fetch("/api/customer/logout", { method: "POST" })
      router.push("/back/customer_login")
      router.refresh()
    }}>
      <LogOut size={15} aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: 6 }} />
      Sign out
    </button>
  )
}
