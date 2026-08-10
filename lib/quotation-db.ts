// Local capture of every quotation into the EC2 MariaDB `quotation_dubai` table.
//
// The safestorage.in PHP backend is the system of record, but it builds its
// INSERT from a fixed column list and silently drops POST fields it does not
// know about — so newer fields (transport, delivery mode, tokens, pickup
// coordinates) may never be stored there. This table captures everything
// regardless, including the complete raw payload, so nothing is lost.
//
// Server-only — never import this from a client component.
import "server-only"
import mysql from "mysql2/promise"
import { POINTS_PER_PALLET } from "@/lib/transport-pricing"

let pool: mysql.Pool | null = null

function getPool(): mysql.Pool {
  if (!pool) {
    // DB_NAME has no default on purpose: a fallback would let the app connect to
    // whatever database happens to share that name on the host it runs on.
    if (!process.env.DB_NAME) throw new Error("DB_NAME is not set")
    pool = mysql.createPool({
      host: process.env.DB_HOST || "127.0.0.1",
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 5,
      dateStrings: true,
    })
  }
  return pool
}

/** Everything the quote form knows. All fields optional — a partial capture
 *  beats no capture, so nothing here is required. */
export interface QuotationCapture {
  stage?: string
  php_customer_id?: string | number | null
  php_quotation_id?: string | number | null

  customer_name?: string | null
  customer_email?: string | null
  customer_phone?: string | null

  pickup_address?: string | null
  emirate?: string | null
  floor?: string | null
  lift_available?: string | null
  bedrooms?: string | null

  storage_type?: string | null
  selected_storage_type?: string | null

  total_points?: number | string | null
  total_pallets?: number | string | null
  total_sqft?: number | string | null

  shared_storage_price?: number | string | null
  closed_storage_price?: number | string | null
  storage_price?: number | string | null

  delivery_mode?: string | null
  transport_price?: number | string | null
  transport_base_price?: number | string | null
  transport_surcharge?: number | string | null
  token_amount?: number | string | null
  transport_custom_quote?: number | string | boolean | null

  pickup_distance_km?: number | string | null
  pickup_lat?: number | string | null
  pickup_lng?: number | string | null

  selected_items?: unknown
  stripe_session_id?: string | null
  /** The exact params to POST to insert_quotation_dubai once payment lands. */
  finalize_params?: unknown
  order_created?: number | boolean | null
}

/** Empty string -> null, so blank form fields do not become "" in the DB. */
function str(v: unknown): string | null {
  if (v === undefined || v === null) return null
  const s = String(v).trim()
  return s === "" ? null : s
}

/** Non-numeric or blank -> null, so a bad value never aborts the whole insert. */
function num(v: unknown): number | null {
  if (v === undefined || v === null || v === "") return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

function bool(v: unknown): number {
  return v === true || v === 1 || v === "1" || v === "true" ? 1 : 0
}

const COLUMNS = [
  "stage",
  "php_customer_id",
  "php_quotation_id",
  "customer_name",
  "customer_email",
  "customer_phone",
  "pickup_address",
  "emirate",
  "floor",
  "lift_available",
  "bedrooms",
  "storage_type",
  "selected_storage_type",
  "total_points",
  "total_pallets",
  "total_sqft",
  "shared_storage_price",
  "closed_storage_price",
  "storage_price",
  "delivery_mode",
  "transport_price",
  "transport_base_price",
  "transport_surcharge",
  "token_amount",
  "transport_custom_quote",
  "pickup_distance_km",
  "pickup_lat",
  "pickup_lng",
  "selected_items",
  "stripe_session_id",
  "finalize_params",
  "order_created",
  "raw_payload",
] as const

/**
 * Write one capture row. Returns the inserted id, or null if the write failed.
 *
 * Never throws: capture must not be able to break the customer's quote flow.
 * A failure is logged loudly so it shows up in `journalctl -u safestorage`.
 */
export async function saveQuotationCapture(
  data: QuotationCapture
): Promise<number | null> {
  try {
    const items =
      data.selected_items === undefined || data.selected_items === null
        ? null
        : typeof data.selected_items === "string"
          ? data.selected_items
          : JSON.stringify(data.selected_items)

    const values = [
      str(data.stage) ?? "step2",
      str(data.php_customer_id),
      str(data.php_quotation_id),
      str(data.customer_name),
      str(data.customer_email),
      str(data.customer_phone),
      str(data.pickup_address),
      str(data.emirate),
      str(data.floor),
      str(data.lift_available),
      str(data.bedrooms),
      str(data.storage_type),
      str(data.selected_storage_type),
      num(data.total_points),
      num(data.total_pallets),
      num(data.total_sqft),
      num(data.shared_storage_price),
      num(data.closed_storage_price),
      num(data.storage_price),
      str(data.delivery_mode),
      num(data.transport_price),
      num(data.transport_base_price),
      num(data.transport_surcharge),
      num(data.token_amount),
      bool(data.transport_custom_quote),
      num(data.pickup_distance_km),
      num(data.pickup_lat),
      num(data.pickup_lng),
      items,
      str(data.stripe_session_id),
      data.finalize_params === undefined || data.finalize_params === null
        ? null
        : typeof data.finalize_params === "string"
          ? data.finalize_params
          : JSON.stringify(data.finalize_params),
      bool(data.order_created),
      // Whole payload verbatim — the recovery path if a column is ever missed.
      JSON.stringify(data),
    ]

    const placeholders = COLUMNS.map(() => "?").join(", ")
    const [result] = await getPool().execute(
      `INSERT INTO quotation_dubai (${COLUMNS.join(", ")}) VALUES (${placeholders})`,
      values
    )
    return (result as mysql.ResultSetHeader).insertId ?? null
  } catch (error) {
    console.error("[quotation-capture] FAILED to save quotation:", error)
    console.error("[quotation-capture] payload was:", JSON.stringify(data))
    return null
  }
}

/**
 * The finalize params stashed when the Checkout Session was created.
 *
 * The webhook uses these to place the order only after Stripe confirms
 * payment — the browser is never trusted to say a payment succeeded.
 * Returns null if the session is unknown or already turned into an order,
 * which also makes the webhook idempotent against Stripe's retries.
 */
export async function claimFinalizeParams(
  sessionId: string
): Promise<Record<string, string> | null> {
  try {
    const [rows] = await getPool().execute(
      `SELECT id, finalize_params FROM quotation_dubai
       WHERE stripe_session_id = ? AND order_created = 0 AND finalize_params IS NOT NULL
       ORDER BY id DESC LIMIT 1`,
      [sessionId]
    )
    const list = rows as Array<{ id: number; finalize_params: string }>
    if (!list.length) return null

    // Claim it first: a duplicate webhook delivery then finds nothing to do.
    const [res] = await getPool().execute(
      `UPDATE quotation_dubai SET order_created = 1 WHERE id = ? AND order_created = 0`,
      [list[0].id]
    )
    if ((res as mysql.ResultSetHeader).affectedRows !== 1) return null

    return JSON.parse(list[0].finalize_params) as Record<string, string>
  } catch (error) {
    console.error("[quotation-capture] claimFinalizeParams failed:", error)
    return null
  }
}

export interface ResumableQuote {
  quotationId: string | null
  customerId: string | null
  fullName: string | null
  email: string | null
  phone: string | null
  address: string | null
  emirate: string | null
  floor: string | null
  liftAvailable: string | null
  bedrooms: string | null
  storageType: string | null
  totalPoints: number | null
  totalPallets: number | null
  totalSqft: number | null
  sharedPrice: number | null
  closedPrice: number | null
  transportPrice: number | null
  distanceKm: number | null
  pickupLat: number | null
  pickupLng: number | null
  items: Array<{ name: string; quantity: number; price: number; storagePoints: number }>
  /** True once paid, so the page can say so instead of asking for payment again. */
  alreadyBooked: boolean
}

/** Items out of one `selected_items` cell. Both shapes it has been written in
 *  are accepted: a bare array, and an object wrapping the array alongside the
 *  pickup date. Returns [] for anything unparseable. */
function parseCapturedItems(raw: unknown): ResumableQuote["items"] {
  try {
    const parsed = JSON.parse(String(raw ?? "[]"))
    const arr = Array.isArray(parsed) ? parsed : parsed?.items
    if (!Array.isArray(arr)) return []
    return arr
      .filter((i) => i && i.name)
      .map((i) => ({
        name: String(i.name),
        quantity: Number(i.quantity) || 1,
        price: Number(i.price) || 0,
        storagePoints: Number(i.storagePoints) || 0,
      }))
  } catch {
    return []
  }
}

const itemPoints = (items: ResumableQuote["items"]) =>
  items.reduce((total, i) => total + i.storagePoints * i.quantity, 0)

/**
 * The saved quote behind a resume link.
 *
 * A single quotation has several capture rows — one per stage, plus the
 * quotation email's own fallback capture, which races the step-2 save and can
 * land first with a thinner payload. So this reads EVERY row for the quotation
 * and takes the newest non-empty value per field rather than trusting one row:
 * picking a single row meant a stripped one could shadow the complete one, and
 * the resumed quote then priced itself off items with no storage points —
 * zero points, zero pallets, zero transport.
 */
export async function getResumableQuote(
  quotationId: string
): Promise<ResumableQuote | null> {
  try {
    const [rows] = await getPool().execute(
      `SELECT * FROM quotation_dubai WHERE php_quotation_id = ? ORDER BY id DESC`,
      [quotationId]
    )
    const list = rows as Array<Record<string, unknown>>
    if (!list.length) return null

    // Newest row that actually has a value for this column. 0 counts as a value
    // (an out-of-area transport price is a real 0); "" and NULL do not.
    const pick = (column: string): unknown => {
      for (const row of list) {
        const v = row[column]
        if (v !== null && v !== undefined && v !== "") return v
      }
      return null
    }

    // Prefer the newest item list that carries storage points — the quote is
    // repriced from these, so a list without points is worse than useless.
    const allItems = list.map((r) => parseCapturedItems(r.selected_items))
    let items =
      allItems.find((i) => i.length && itemPoints(i) > 0) ??
      allItems.find((i) => i.length) ??
      []
    if (!items.length) return null

    const n = (v: unknown) => (v === null || v === undefined ? null : Number(v))
    const t = (v: unknown) => (v === null || v === undefined ? null : String(v))

    const totalPoints = n(pick("total_points"))
    const totalPallets = n(pick("total_pallets"))

    // Every row's items were stripped of their points (the CRM sends name and
    // quantity only). Spread the quote's own point total back over them, so
    // repricing on resume lands on the pallet count the customer was quoted
    // instead of zero.
    if (itemPoints(items) === 0) {
      const target =
        totalPoints && totalPoints > 0
          ? totalPoints
          : totalPallets && totalPallets > 0
            ? totalPallets * POINTS_PER_PALLET
            : 0
      const units = items.reduce((total, i) => total + i.quantity, 0)
      if (target > 0 && units > 0) {
        items = items.map((i) => ({ ...i, storagePoints: target / units }))
      }
    }

    return {
      quotationId: t(pick("php_quotation_id")),
      customerId: t(pick("php_customer_id")),
      fullName: t(pick("customer_name")),
      email: t(pick("customer_email")),
      phone: t(pick("customer_phone")),
      address: t(pick("pickup_address")),
      emirate: t(pick("emirate")),
      floor: t(pick("floor")),
      liftAvailable: t(pick("lift_available")),
      bedrooms: t(pick("bedrooms")),
      storageType: t(pick("storage_type")),
      totalPoints,
      totalPallets,
      totalSqft: n(pick("total_sqft")),
      sharedPrice: n(pick("shared_storage_price")),
      closedPrice: n(pick("closed_storage_price")),
      transportPrice: n(pick("transport_price")),
      distanceKm: n(pick("pickup_distance_km")),
      pickupLat: n(pick("pickup_lat")),
      pickupLng: n(pick("pickup_lng")),
      items,
      alreadyBooked: list.some((r) => String(r.stage ?? "") === "paid"),
    }
  } catch (error) {
    console.error("[quotation-capture] getResumableQuote failed:", error)
    return null
  }
}
