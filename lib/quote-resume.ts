// Signed resume codes for quotation links.
//
// The quotation email links a customer straight back to their quote so they can
// book without re-entering anything. The quotation id alone must not be enough
// to open it — ids are sequential, so anyone could walk them and read other
// customers' names, addresses and inventories.
//
// The code is an HMAC of the id under JWT_SECRET: unguessable without the
// secret, deterministic so a link stays valid for the life of the quote, and
// stateless so there is no token table to expire or clean up.
import "server-only"
import crypto from "crypto"

const CODE_LENGTH = 12

export function quoteResumeCode(quotationId: string | number): string {
  const secret = process.env.JWT_SECRET
  if (!secret) return ""
  return crypto
    .createHmac("sha256", secret)
    .update(`quote:${quotationId}`)
    .digest("hex")
    .slice(0, CODE_LENGTH)
}

/** Constant-time compare, so the code cannot be recovered by timing attempts. */
export function verifyQuoteResumeCode(
  quotationId: string | number,
  code: string | null | undefined
): boolean {
  if (!code) return false
  const expected = quoteResumeCode(quotationId)
  if (!expected || expected.length !== code.length) return false
  try {
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(code))
  } catch {
    return false
  }
}

/** The link that goes in the quotation email. */
export function quoteResumeUrl(
  origin: string,
  quotationId: string | number
): string {
  const code = quoteResumeCode(quotationId)
  const base = origin.replace(/\/$/, "")
  return code
    ? `${base}/get-quote?id=${encodeURIComponent(String(quotationId))}&code=${code}`
    : `${base}/get-quote`
}
