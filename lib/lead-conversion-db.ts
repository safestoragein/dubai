// One-time "this lead's conversion has been reported" ledger.
//
// The thank-you page may be refreshed or reopened for an hour (the signed pass lives that long), so the
// browser can never be trusted to fire the ad conversion only once. The first claim for a CRM lead id
// wins (INSERT IGNORE on the primary key); every later claim for the same lead gets false.
//
// Table is created on first use, same pattern as movers-quote-db / seo-index-db. Server-only.
import "server-only"
import mysql from "mysql2/promise"

let pool: mysql.Pool | null = null
let ready: Promise<void> | null = null

function getPool(): mysql.Pool {
  if (!pool) {
    if (!process.env.DB_NAME) throw new Error("DB_NAME is not set")
    pool = mysql.createPool({
      host: process.env.DB_HOST || "127.0.0.1",
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 3,
    })
  }
  return pool
}

function ensure(): Promise<void> {
  if (!ready) {
    ready = getPool()
      .query(
        `CREATE TABLE IF NOT EXISTS lead_conversions (
           lead_id VARCHAR(20) NOT NULL PRIMARY KEY,
           quotation_id VARCHAR(20) NULL,
           form_type VARCHAR(40) NULL,
           claimed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
         ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`
      )
      .then(() => undefined)
      .catch((e) => {
        ready = null
        throw e
      })
  }
  return ready
}

/** true only for the FIRST claim of this lead. Any DB problem returns false: never fire what we cannot dedupe. */
export async function claimLeadConversion(leadId: string, quotationId: string | null, formType: string): Promise<boolean> {
  try {
    await ensure()
    const [res] = await getPool().query(
      "INSERT IGNORE INTO lead_conversions (lead_id, quotation_id, form_type) VALUES (?, ?, ?)",
      [leadId, quotationId, formType]
    )
    return (res as mysql.ResultSetHeader).affectedRows === 1
  } catch (e) {
    console.error("[lead-conversion] claim failed, not firing:", e)
    return false
  }
}
