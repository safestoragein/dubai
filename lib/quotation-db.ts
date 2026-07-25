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
