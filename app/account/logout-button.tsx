"use client"

import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import c from "./account.module.css"

export default function LogoutButton() {
  const router = useRouter()
  return (
    <button type="button" className={c.navItem} onClick={async () => {
      await fetch("/api/customer/logout", { method: "POST" })
      router.push("/back/customer_login")
      router.refresh()
    }}>
      <LogOut aria-hidden="true" />
      Sign out
    </button>
  )
}
