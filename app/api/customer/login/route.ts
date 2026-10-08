import { NextResponse } from "next/server"
import { callBack } from "@/lib/customer-back"
import { clientIp } from "@/lib/client-ip"
import { CUSTOMER_COOKIE, CUSTOMER_TTL_REMEMBER_SECONDS, CUSTOMER_TTL_SECONDS, signCustomerToken } from "@/lib/customer-session"

type LoginReply = { status?: string; message?: string; customer?: { customer_id: number; name: string; email: string } }

export async function POST(request: Request) {
  let email = "", password = "", remember = false
  try {
    const body = await request.json()
    email = String(body?.email ?? "").trim()
    password = String(body?.password ?? "")
    remember = body?.remember === true
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }
  if (!email || !password || email.length > 200 || password.length > 200) {
    return NextResponse.json({ error: "Please enter your email and password." }, { status: 400 })
  }

  const ip = clientIp(request)
  const r = await callBack<LoginReply>("login", { username: email, password }, ip)

  if (r.status === 503 || r.status === 502 || !r.data) {
    return NextResponse.json({ error: "Login is not available right now. Please try again later." }, { status: 503 })
  }
  if (r.status === 429) {
    return NextResponse.json({ error: "Too many attempts. Please try again in a few minutes." }, { status: 429 })
  }
  if (r.status !== 200 || r.data.status !== "success" || !r.data.customer) {
    // Same answer for "no such customer" and "wrong password".
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 })
  }

  const c = r.data.customer
  const ttl = remember ? CUSTOMER_TTL_REMEMBER_SECONDS : CUSTOMER_TTL_SECONDS
  const token = signCustomerToken({ customerId: c.customer_id, name: c.name, email: c.email }, ttl)
  if (!token) {
    return NextResponse.json({ error: "Login is not available right now. Please try again later." }, { status: 503 })
  }

  const res = NextResponse.json({ success: true })
  res.cookies.set({
    name: CUSTOMER_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: ttl,
    path: "/",
  })
  return res
}
