import { NextResponse } from "next/server"
import { CUSTOMER_COOKIE } from "@/lib/customer-session"

export async function POST() {
  const res = NextResponse.json({ success: true })
  res.cookies.set({ name: CUSTOMER_COOKIE, value: "", httpOnly: true, maxAge: 0, path: "/" })
  return res
}
