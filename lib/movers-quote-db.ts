// Packers & movers quote requests — own tables in the site's `safestorage_dubai` database
// (movers_quotes + movers_quote_items), separate from the storage quote. DDL: database/movers_quote_tables.sql.
//
// Tables are created on demand (same approach as seo-index-db.ts): importing a production dump
// over a local database is routine here and would silently revert a migration.
//
// Server-only — never import this from a client component.
import "server-only"
import mysql from "mysql2/promise"
import type { CatalogueItem, MoversQuote } from "@/lib/movers-quote"

let pool: mysql.Pool | null = null

function getPool(): mysql.Pool {
  if (!pool) {
    // No default for DB_NAME on purpose (see payment-attempt-db.ts).
    if (!process.env.DB_NAME) throw new Error("DB_NAME is not set")
    pool = mysql.createPool({
      host: process.env.DB_HOST || "127.0.0.1",
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 3,
      dateStrings: true,
    })
  }
  return pool
}

let ensured = false

async function ensureTables(): Promise<void> {
  if (ensured) return
  const p = getPool()
  await p.query(
    `CREATE TABLE IF NOT EXISTS movers_quotes (
       id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
       reference     VARCHAR(24)  NOT NULL,
       status        VARCHAR(20)  NOT NULL DEFAULT 'new',
       name          VARCHAR(100) NOT NULL,
       phone         VARCHAR(30)  NOT NULL,
       email         VARCHAR(120) NOT NULL,
       move_type     VARCHAR(20)  NOT NULL,
       home_size     VARCHAR(30)  NOT NULL,
       move_date     DATE         NOT NULL,
       flexible_date TINYINT(1)   NOT NULL DEFAULT 0,
       from_address  VARCHAR(300) NOT NULL,
       from_emirate  VARCHAR(30)  NOT NULL,
       from_floor    VARCHAR(10)  DEFAULT NULL,
       from_lift     VARCHAR(3)   NOT NULL,
       to_address    VARCHAR(300) NOT NULL,
       to_emirate    VARCHAR(30)  NOT NULL,
       to_floor      VARCHAR(10)  DEFAULT NULL,
       to_lift       VARCHAR(3)   NOT NULL,
       packing_level VARCHAR(20)  NOT NULL,
       extras        TEXT         DEFAULT NULL,
       items_unsure  TINYINT(1)   NOT NULL DEFAULT 0,
       notes         TEXT         DEFAULT NULL,
       email_sent    TINYINT(1)   NOT NULL DEFAULT 0,
       source_page   VARCHAR(200) DEFAULT NULL,
       ip_address    VARCHAR(45)  DEFAULT NULL,
       user_agent    VARCHAR(300) DEFAULT NULL,
       created_at    DATETIME     NOT NULL,
       updated_at    DATETIME     NOT NULL,
       PRIMARY KEY (id),
       UNIQUE KEY uq_reference (reference),
       KEY idx_status_created (status, created_at),
       KEY idx_move_date (move_date),
       KEY idx_phone (phone),
       KEY idx_email (email)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`
  )
  await p.query(
    `CREATE TABLE IF NOT EXISTS movers_quote_items (
       id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
       quote_id   INT UNSIGNED NOT NULL,
       item_group VARCHAR(40)  NOT NULL,
       item_code  VARCHAR(30)  NOT NULL,
       item_label VARCHAR(80)  NOT NULL,
       quantity   SMALLINT UNSIGNED NOT NULL,
       PRIMARY KEY (id),
       KEY idx_quote (quote_id),
       CONSTRAINT fk_movers_item_quote FOREIGN KEY (quote_id) REFERENCES movers_quotes (id) ON DELETE CASCADE
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`
  )
  await p.query(
    `CREATE TABLE IF NOT EXISTS movers_partial_leads (
       id              INT UNSIGNED NOT NULL AUTO_INCREMENT,
       lead_key        VARCHAR(64)  NOT NULL,
       name            VARCHAR(100) DEFAULT NULL,
       phone           VARCHAR(30)  DEFAULT NULL,
       email           VARCHAR(120) DEFAULT NULL,
       step_reached    TINYINT UNSIGNED NOT NULL DEFAULT 0,
       quote_reference VARCHAR(24)  DEFAULT NULL,
       ip_address      VARCHAR(45)  DEFAULT NULL,
       user_agent      VARCHAR(300) DEFAULT NULL,
       created_at      DATETIME     NOT NULL,
       updated_at      DATETIME     NOT NULL,
       PRIMARY KEY (id),
       UNIQUE KEY uq_lead_key (lead_key),
       KEY idx_phone (phone),
       KEY idx_email (email)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`
  )
  // Pricing / payment columns, added if missing (portable: MySQL has no ADD COLUMN IF NOT EXISTS).
  const add: [string, string, string][] = [
    ["movers_quotes", "pickup_lat", "DECIMAL(10,7) DEFAULT NULL"],
    ["movers_quotes", "pickup_lng", "DECIMAL(10,7) DEFAULT NULL"],
    ["movers_quotes", "distance_km", "DECIMAL(7,2) DEFAULT NULL"],
    ["movers_quotes", "total_points", "DECIMAL(8,2) DEFAULT NULL"],
    ["movers_quotes", "pallets", "SMALLINT UNSIGNED DEFAULT NULL"],
    ["movers_quotes", "transport_base_aed", "DECIMAL(10,2) DEFAULT NULL"],
    ["movers_quotes", "transport_surcharge_aed", "DECIMAL(10,2) DEFAULT NULL"],
    ["movers_quotes", "transport_total_aed", "DECIMAL(10,2) DEFAULT NULL"],
    ["movers_quotes", "amount_due_aed", "DECIMAL(10,2) DEFAULT NULL"],
    ["movers_quotes", "payment_status", "VARCHAR(20) NOT NULL DEFAULT 'none'"], // none | pending | paid | expired | custom_quote
    ["movers_quotes", "stripe_session_id", "VARCHAR(255) DEFAULT NULL"],
    ["movers_quotes", "stripe_payment_ref", "VARCHAR(255) DEFAULT NULL"],
    ["movers_quotes", "paid_at", "DATETIME DEFAULT NULL"],
    ["movers_quote_items", "points", "DECIMAL(6,2) DEFAULT NULL"],
  ]
  const [cols] = await p.query<mysql.RowDataPacket[]>(
    `SELECT TABLE_NAME AS t, COLUMN_NAME AS c FROM information_schema.COLUMNS
      WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME IN ('movers_quotes','movers_quote_items')`
  )
  const have = new Set(cols.map((r) => `${r.t}.${r.c}`))
  for (const [t, c, def] of add) {
    if (!have.has(`${t}.${c}`)) await p.query(`ALTER TABLE ${t} ADD COLUMN ${c} ${def}`)
  }
  ensured = true
}

const now = () => new Date().toISOString().slice(0, 19).replace("T", " ")

export type Pricing = {
  points: number
  pallets: number
  baseAed: number
  surchargeAed: number
  totalAed: number
  distanceKm: number | null
  amountDueAed: number | null
  paymentStatus: "none" | "pending" | "custom_quote"
}

/**
 * Insert the quotation, or update it when `existingRef` names an unpaid row for the SAME email
 * (the customer went back and changed something, or is now booking). References are guessable
 * base36 timestamps, so the email match is what stops one visitor overwriting another's quote.
 * Returns the reference actually used and whether a new row was created.
 */
export async function saveMoversQuote(
  reference: string,
  q: MoversQuote,
  pricing: Pricing,
  catalogue: CatalogueItem[],
  meta: { ip?: string; userAgent?: string; sourcePage?: string },
  existingRef?: string
): Promise<{ reference: string; created: boolean }> {
  await ensureTables()
  const conn = await getPool().getConnection()
  try {
    await conn.beginTransaction()
    const t = now()

    let quoteId = 0
    let created = true
    if (existingRef) {
      const [found] = await conn.query<mysql.RowDataPacket[]>(
        `SELECT id, email, payment_status FROM movers_quotes WHERE reference = ? FOR UPDATE`,
        [existingRef]
      )
      const row = found[0]
      if (row && row.payment_status !== "paid" && String(row.email).toLowerCase() === q.email.toLowerCase()) {
        quoteId = row.id
        created = false
        reference = existingRef
      }
    }

    if (created) {
      const [res] = await conn.query<mysql.ResultSetHeader>(
        `INSERT INTO movers_quotes
          (reference, name, phone, email, move_type, home_size, move_date, flexible_date,
           from_address, from_emirate, from_floor, from_lift, to_address, to_emirate, to_floor, to_lift,
           packing_level, extras, items_unsure, notes, source_page, ip_address, user_agent, created_at, updated_at,
           pickup_lat, pickup_lng, distance_km, total_points, pallets, transport_base_aed, transport_surcharge_aed,
           transport_total_aed, amount_due_aed, payment_status)
         VALUES (?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,?,?)`,
        [
          reference, q.name, q.phone, q.email, q.moveType, q.homeSize, q.moveDate, q.flexibleDate ? 1 : 0,
          q.fromAddress, q.fromEmirate, q.fromFloor || null, q.fromLift, q.toAddress, q.toEmirate, q.toFloor || null, q.toLift,
          q.packing, q.extras.join(",") || null, q.itemsUnsure ? 1 : 0, q.notes || null,
          meta.sourcePage?.slice(0, 200) || null, meta.ip?.slice(0, 45) || null, meta.userAgent?.slice(0, 300) || null, t, t,
          q.fromLat, q.fromLng, pricing.distanceKm, pricing.points, pricing.pallets, pricing.baseAed, pricing.surchargeAed,
          pricing.totalAed, pricing.amountDueAed, pricing.paymentStatus,
        ]
      )
      quoteId = res.insertId
    } else {
      await conn.query(
        `UPDATE movers_quotes SET name=?, phone=?, move_type=?, home_size=?, move_date=?,
                from_address=?, from_emirate=?, from_floor=?, from_lift=?, to_address=?, to_emirate=?, to_floor=?, to_lift=?,
                pickup_lat=?, pickup_lng=?, distance_km=?, total_points=?, pallets=?, transport_base_aed=?,
                transport_surcharge_aed=?, transport_total_aed=?, amount_due_aed=?, payment_status=?, updated_at=?
          WHERE id = ?`,
        [
          q.name, q.phone, q.moveType, q.homeSize, q.moveDate,
          q.fromAddress, q.fromEmirate, q.fromFloor || null, q.fromLift, q.toAddress, q.toEmirate, q.toFloor || null, q.toLift,
          q.fromLat, q.fromLng, pricing.distanceKm, pricing.points, pricing.pallets, pricing.baseAed,
          pricing.surchargeAed, pricing.totalAed, pricing.amountDueAed, pricing.paymentStatus, t, quoteId,
        ]
      )
      await conn.query(`DELETE FROM movers_quote_items WHERE quote_id = ?`, [quoteId])
    }

    const points = new Map(catalogue.map((c) => [c.name, c.points]))
    const rows = Object.entries(q.items)
      .filter(([name]) => points.has(name))
      .map(([name, n]) => [quoteId, "Items", name.slice(0, 30), name.slice(0, 80), n, points.get(name)])
    if (rows.length) {
      await conn.query(`INSERT INTO movers_quote_items (quote_id, item_group, item_code, item_label, quantity, points) VALUES ?`, [rows])
    }
    await conn.commit()
    return { reference, created }
  } catch (e) {
    await conn.rollback().catch(() => {})
    throw e
  } finally {
    conn.release()
  }
}

/** Abandoned-enquiry capture: one row per browser (lead_key), updated on every exit. Never throws. */
export async function savePartialLead(p: {
  leadKey: string; name: string; phone: string; email: string; step: number; ip?: string; userAgent?: string
}): Promise<void> {
  try {
    await ensureTables()
    const t = now()
    await getPool().query(
      `INSERT INTO movers_partial_leads (lead_key, name, phone, email, step_reached, ip_address, user_agent, created_at, updated_at)
       VALUES (?,?,?,?,?,?,?,?,?)
       ON DUPLICATE KEY UPDATE name = VALUES(name), phone = VALUES(phone), email = VALUES(email),
         step_reached = GREATEST(step_reached, VALUES(step_reached)), updated_at = VALUES(updated_at)`,
      [p.leadKey, p.name || null, p.phone || null, p.email || null, p.step, p.ip?.slice(0, 45) || null, p.userAgent?.slice(0, 300) || null, t, t]
    )
  } catch (e) {
    console.error("[movers-quote] partial lead save failed", e)
  }
}

/** The customer went on to a real quotation, so the partial row is no longer a lead to chase. */
export async function linkPartialToQuote(leadKey: string, reference: string): Promise<void> {
  try {
    await getPool().query(`UPDATE movers_partial_leads SET quote_reference = ?, updated_at = ? WHERE lead_key = ?`, [reference, now(), leadKey])
  } catch {}
}

export async function markMoversEmailSent(reference: string): Promise<void> {
  await getPool().query(`UPDATE movers_quotes SET email_sent = 1, updated_at = ? WHERE reference = ?`, [now(), reference])
}

export async function setMoversStripeSession(reference: string, sessionId: string): Promise<void> {
  await getPool().query(`UPDATE movers_quotes SET stripe_session_id = ?, updated_at = ? WHERE reference = ?`, [sessionId, now(), reference])
}

export type MoversRow = {
  reference: string; name: string; phone: string; email: string; move_date: string
  from_address: string; from_emirate: string; to_address: string; to_emirate: string
  amount_due_aed: string | null; pallets: number | null
}

/**
 * Called by the Stripe webhook. Idempotent: returns the row only the FIRST time it flips to paid,
 * so Stripe's retries never send the team a second "paid" email.
 */
export async function markMoversPaid(reference: string, sessionId: string, paymentRef: string): Promise<MoversRow | null> {
  await ensureTables()
  const t = now()
  const [res] = await getPool().query<mysql.ResultSetHeader>(
    `UPDATE movers_quotes SET payment_status = 'paid', status = IF(status = 'new', 'booked', status),
            stripe_session_id = ?, stripe_payment_ref = ?, paid_at = ?, updated_at = ?
      WHERE reference = ? AND payment_status <> 'paid'`,
    [sessionId, paymentRef, t, t, reference]
  )
  if (!res.affectedRows) return null
  const [rows] = await getPool().query<mysql.RowDataPacket[]>(
    `SELECT reference, name, phone, email, move_date, from_address, from_emirate, to_address, to_emirate, amount_due_aed, pallets
       FROM movers_quotes WHERE reference = ?`,
    [reference]
  )
  return (rows[0] as MoversRow) ?? null
}

export async function markMoversExpired(sessionId: string): Promise<void> {
  await getPool().query(
    `UPDATE movers_quotes SET payment_status = 'expired', updated_at = ? WHERE stripe_session_id = ? AND payment_status = 'pending'`,
    [now(), sessionId]
  )
}
