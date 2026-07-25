// Stripe client, server-side only.
//
// Deliberately returns null when STRIPE_SECRET_KEY is unset, so the quote flow
// keeps working exactly as it did before payments existed. That makes the key a
// feature switch: add it to /home/ubuntu/dubai/.env.local and rebuild to turn
// payment collection on, remove it to turn it off.
import "server-only"
import Stripe from "stripe"

let client: Stripe | null = null

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return null
  if (!client) {
    client = new Stripe(key)
  }
  return client
}

export function isStripeEnabled(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY)
}

/** Stripe works in the smallest currency unit; AED has 2 decimal places. */
export function toFils(aed: number): number {
  return Math.round(aed * 100)
}

export const CURRENCY = "aed"
