// Every payment attempt, whatever the outcome.
//
// A booking that never completes is the one you most want to chase, so this
// records the attempt itself — who, what they were booking, where they tried
// from, and exactly why it failed — independently of whether an order exists.
//
// Server-only — never import this from a client component.
import "server-only"
import mysql from "mysql2/promise"

let pool: mysql.Pool | null = null

function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || "127.0.0.1",
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || "safestorage_dubai",
      waitForConnections: true,
      connectionLimit: 5,
      dateStrings: true,
    })
  }
  return pool
}

export type AttemptStatus =
  | "initiated"
  | "cancelled"
  | "failed"
  | "expired"
  | "succeeded"

export interface PaymentAttempt {
  status?: AttemptStatus | string
  event_type?: string | null

  failure_message?: string | null
  failure_code?: string | null
  decline_code?: string | null
  card_brand?: string | null
  card_last4?: string | null

  stripe_session_id?: string | null
  stripe_payment_intent?: string | null

  amount_aed?: number | string | null
  currency?: string | null

  customer_name?: string | null
  customer_email?: string | null
  customer_phone?: string | null
  php_customer_id?: string | number | null
  php_quotation_id?: string | number | null

  delivery_mode?: string | null
  total_pallets?: number | string | null
  storage_price?: number | string | null
  transport_price?: number | string | null
  pickup_date?: string | null
  pickup_address?: string | null
  emirate?: string | null
  pickup_distance_km?: number | string | null
  pickup_lat?: number | string | null
  pickup_lng?: number | string | null

  source_page?: string | null
  referrer?: string | null
  user_agent?: string | null
  device_type?: string | null
  ip_address?: string | null
}

function str(v: unknown, max = 0): string | null {
  if (v === undefined || v === null) return null
  const s = String(v).trim()
  if (s === "") return null
  return max > 0 ? s.slice(0, max) : s
}

function num(v: unknown): number | null {
  if (v === undefined || v === null || v === "") return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

/** Coarse device class from the UA — enough to spot "mobile checkout is broken". */
export function deviceFromUserAgent(ua: string | null | undefined): string | null {
  if (!ua) return null
  const s = ua.toLowerCase()
  if (/ipad|tablet/.test(s)) return "tablet"
  if (/mobi|android|iphone/.test(s)) return "mobile"
  return "desktop"
}

const COLUMNS = [
  "status",
  "event_type",
  "failure_message",
  "failure_code",
  "decline_code",
  "card_brand",
  "card_last4",
  "stripe_session_id",
  "stripe_payment_intent",
  "amount_aed",
  "currency",
  "customer_name",
  "customer_email",
  "customer_phone",
  "php_customer_id",
  "php_quotation_id",
  "delivery_mode",
  "total_pallets",
  "storage_price",
  "transport_price",
  "pickup_date",
  "pickup_address",
  "emirate",
  "pickup_distance_km",
  "pickup_lat",
  "pickup_lng",
  "source_page",
  "referrer",
  "user_agent",
  "device_type",
  "ip_address",
  "raw_payload",
] as const

/** Never throws — recording an attempt must not break checkout. */
export async function savePaymentAttempt(
  data: PaymentAttempt
): Promise<number | null> {
  try {
    const values = [
      str(data.status, 32) ?? "initiated",
      str(data.event_type, 64),
      str(data.failure_message),
      str(data.failure_code, 64),
      str(data.decline_code, 64),
      str(data.card_brand, 32),
      str(data.card_last4, 8),
      str(data.stripe_session_id, 255),
      str(data.stripe_payment_intent, 255),
      num(data.amount_aed),
      str(data.currency, 8),
      str(data.customer_name, 255),
      str(data.customer_email, 255),
      str(data.customer_phone, 64),
      str(data.php_customer_id, 64),
      str(data.php_quotation_id, 64),
      str(data.delivery_mode, 32),
      num(data.total_pallets),
      num(data.storage_price),
      num(data.transport_price),
      str(data.pickup_date, 32),
      str(data.pickup_address),
      str(data.emirate, 128),
      num(data.pickup_distance_km),
      num(data.pickup_lat),
      num(data.pickup_lng),
      str(data.source_page, 512),
      str(data.referrer),
      str(data.user_agent),
      str(data.device_type, 32) ?? deviceFromUserAgent(data.user_agent),
      str(data.ip_address, 64),
      JSON.stringify(data),
    ]

    const placeholders = COLUMNS.map(() => "?").join(", ")
    const [result] = await getPool().execute(
      `INSERT INTO payment_attempt_dubai (${COLUMNS.join(", ")}) VALUES (${placeholders})`,
      values
    )
    return (result as mysql.ResultSetHeader).insertId ?? null
  } catch (error) {
    console.error("[payment-attempt] failed to save:", error)
    return null
  }
}

/**
 * Promote an existing attempt to a final status, matched on the session.
 * Falls back to inserting a fresh row if the attempt was never recorded.
 */
export async function updateAttemptStatus(
  sessionId: string,
  status: AttemptStatus | string,
  extra: PaymentAttempt = {}
): Promise<void> {
  try {
    const [res] = await getPool().execute(
      `UPDATE payment_attempt_dubai
         SET status = ?, event_type = ?, failure_message = ?, failure_code = ?,
             decline_code = ?, card_brand = ?, card_last4 = ?,
             stripe_payment_intent = COALESCE(?, stripe_payment_intent)
       WHERE stripe_session_id = ? AND status = 'initiated'`,
      [
        String(status).slice(0, 32),
        str(extra.event_type, 64),
        str(extra.failure_message),
        str(extra.failure_code, 64),
        str(extra.decline_code, 64),
        str(extra.card_brand, 32),
        str(extra.card_last4, 8),
        str(extra.stripe_payment_intent, 255),
        sessionId,
      ]
    )
    if ((res as mysql.ResultSetHeader).affectedRows === 0) {
      await savePaymentAttempt({ ...extra, status, stripe_session_id: sessionId })
    }
  } catch (error) {
    console.error("[payment-attempt] failed to update:", error)
  }
}
