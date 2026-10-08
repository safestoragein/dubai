"use client"

import { useRouter } from "next/navigation"
import s from "@/components/landing/landing.module.css"

export default function LogoutButton() {
  const router = useRouter()
  return (
    <button type="button" className={`${s.btn} ${s.btnGhost}`} onClick={async () => {
      await fetch("/api/customer/logout", { method: "POST" })
      router.push("/back/customer_login")
      router.refresh()
    }}>
      Sign out
    </button>
  )
}
