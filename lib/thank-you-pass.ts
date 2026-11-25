// Signed, short-lived "pass" that lets a visitor open /thank-you.
//
// /thank-you must only be reachable by someone whose quotation was really created, so the
// quote form's API mints a pass AFTER createQuote succeeds and the page verifies it. Anyone
// typing the URL (or reusing an old/forged link) is sent back to the quote form.
//
// Stateless: "<expiry>.<quotationId>.<hmac>" under JWT_SECRET (the same server-only secret
// the quote resume links use). No secret configured -> no passes are ever issued (fails closed).
import "server-only"
import crypto from "crypto"

const TTL_MS = 60 * 60 * 1000 // refreshing the page keeps working for an hour

const secret = () => process.env.JWT_SECRET || (process.env.NODE_ENV !== "production" ? "dev-only-thank-you-secret" : "")
const sign = (body: string, s: string) => crypto.createHmac("sha256", s).update(`thank-you:${body}`).digest("hex").slice(0, 32)

// leadId = the CRM customer_id (the "actual CRM lead ID"). It rides inside the signed body so the
// conversion claim can dedupe on it without trusting anything the browser sends.
export function mintThankYouPass(quotationId: string | number, leadId?: string | number): string {
  const s = secret()
  if (!s) return ""
  const body = leadId ? `${Date.now() + TTL_MS}.${quotationId}.${leadId}` : `${Date.now() + TTL_MS}.${quotationId}`
  return `${body}.${sign(body, s)}`
}

/** Verified contents of a pass, or null. leadId is null for passes minted without one. */
export function parseThankYouPass(pass: string | null | undefined): { quotationId: string; leadId: string | null } | null {
  if (!verifyThankYouPass(pass)) return null
  const parts = (pass as string).split(".")
  return { quotationId: parts[1], leadId: parts.length === 4 ? parts[2] : null }
}

export function verifyThankYouPass(pass: string | null | undefined): boolean {
  const s = secret()
  if (!s || !pass || pass.length > 120) return false
  const parts = pass.split(".")
  if (parts.length !== 3 && parts.length !== 4) return false
  const sig = parts[parts.length - 1]
  const [exp, qid] = parts
  if (!/^\d{10,15}$/.test(exp) || !/^\d{1,12}$/.test(qid) || Number(exp) < Date.now()) return false
  if (parts.length === 4 && !/^\d{1,12}$/.test(parts[2])) return false
  const expected = sign(parts.slice(0, -1).join("."), s)
  if (expected.length !== sig.length) return false
  try {
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(sig))
  } catch {
    return false
  }
}
