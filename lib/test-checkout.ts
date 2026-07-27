// Live-mode checkout test override.
//
// Lets a named tester run a REAL Stripe payment end to end for a token amount
// instead of the full transport price, so the whole chain — checkout, webhook,
// order creation, confirmation email — can be exercised against live keys.
//
// Deliberately env-gated and OFF by default: with TEST_CHECKOUT_EMAILS unset
// this returns null and the checkout route behaves exactly as it does today.
// Nothing here can lower the price for a customer who is not on the list.
//
// The list is matched server-side against the email the browser submits. That is
// a weaker guarantee than the pallet-based pricing it bypasses, so treat it as a
// temporary switch: clear TEST_CHECKOUT_EMAILS when the test is finished.
import "server-only"

/** Stripe rejects charges below this in AED, so an override under it would fail
 *  with amount_too_small rather than telling you anything useful. */
export const STRIPE_MIN_AED = 2

function testEmails(): string[] {
  return (process.env.TEST_CHECKOUT_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
}

export function isTestCheckoutEnabled(): boolean {
  return testEmails().length > 0
}

/**
 * The amount to charge this email, or null to charge the real price.
 * Clamped up to Stripe's AED minimum so a configured 1 does not simply fail.
 */
export function testCheckoutAmountAed(email: string | null | undefined): number | null {
  const list = testEmails()
  if (!list.length) return null

  const e = (email ?? "").trim().toLowerCase()
  if (!e || !list.includes(e)) return null

  const configured = Number(process.env.TEST_CHECKOUT_AMOUNT_AED)
  const amount = Number.isFinite(configured) && configured > 0 ? configured : STRIPE_MIN_AED
  return Math.max(amount, STRIPE_MIN_AED)
}
