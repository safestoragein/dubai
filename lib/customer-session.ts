// Customer session for safestorage.ae (separate from the admin-token cookie).
//
// A signed JWT in an httpOnly cookie, written by /api/customer/login after the PHP
// side (back/modules/dubai_customer) confirmed the email + password. The secret
// is CUSTOMER_JWT_SECRET (server env only). There is deliberately NO hard-coded
// fallback: without a real secret nobody can log in, which is safer than a
// guessable default.
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export const CUSTOMER_COOKIE = "customer-token"
export const CUSTOMER_TTL_SECONDS = 60 * 60 * 8 // 8 hours (default)
export const CUSTOMER_TTL_REMEMBER_SECONDS = 60 * 60 * 24 * 7 // 7 days when "Remember me" is ticked

export type CustomerSession = { customerId: number; name: string; email: string }

function secret(): string | null {
  const s = process.env.CUSTOMER_JWT_SECRET || ""
  return s.length >= 32 ? s : null
}

export function signCustomerToken(c: CustomerSession, ttlSeconds = CUSTOMER_TTL_SECONDS): string | null {
  const s = secret()
  if (!s) return null
  return jwt.sign({ sub: String(c.customerId), name: c.name, email: c.email, kind: "customer" }, s, {
    expiresIn: ttlSeconds,
  })
}

/** The signed-in customer, or null. Safe to call from any server component / route. */
export async function getCustomerSession(): Promise<CustomerSession | null> {
  const s = secret()
  if (!s) return null
  try {
    const store = await cookies()
    const token = store.get(CUSTOMER_COOKIE)?.value
    if (!token) return null
    const d = jwt.verify(token, s) as { sub?: string; name?: string; email?: string; kind?: string }
    if (d.kind !== "customer" || !d.sub) return null
    return { customerId: Number(d.sub), name: d.name || "", email: d.email || "" }
  } catch {
    return null
  }
}
