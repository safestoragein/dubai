// Packers & movers quote requests — own tables in the site's `safestorage_dubai` database
// (movers_quotes + movers_quote_items), separate from the storage quote. DDL: database/movers_quote_tables.sql.
//
// Tables are created on demand (same approach as seo-index-db.ts): importing a production dump
// over a local database is routine here and would silently revert a migration.
//
// Server-only — never import this from a client component.
import "server-only"
import mysql from "mysql2/promise"
import { ITEM_GROUPS, type MoversQuote } from "@/lib/movers-quote"

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
  ensured = true
}

const now = () => new Date().toISOString().slice(0, 19).replace("T", " ")

export async function saveMoversQuote(
  reference: string,
  q: MoversQuote,
  meta: { ip?: string; userAgent?: string; sourcePage?: string }
): Promise<number> {
  await ensureTables()
  const conn = await getPool().getConnection()
  try {
    await conn.beginTransaction()
    const t = now()
    const [res] = await conn.query<mysql.ResultSetHeader>(
      `INSERT INTO movers_quotes
        (reference, name, phone, email, move_type, home_size, move_date, flexible_date,
         from_address, from_emirate, from_floor, from_lift, to_address, to_emirate, to_floor, to_lift,
         packing_level, extras, items_unsure, notes, source_page, ip_address, user_agent, created_at, updated_at)
       VALUES (?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,?)`,
      [
        reference, q.name, q.phone, q.email, q.moveType, q.homeSize, q.moveDate, q.flexibleDate ? 1 : 0,
        q.fromAddress, q.fromEmirate, q.fromFloor || null, q.fromLift, q.toAddress, q.toEmirate, q.toFloor || null, q.toLift,
        q.packing, q.extras.join(",") || null, q.itemsUnsure ? 1 : 0, q.notes || null,
        meta.sourcePage?.slice(0, 200) || null, meta.ip?.slice(0, 45) || null, meta.userAgent?.slice(0, 300) || null, t, t,
      ]
    )
    const quoteId = res.insertId

    const catalogue = new Map(ITEM_GROUPS.flatMap((g) => g.items.map((i) => [i.id, { group: g.group, label: i.label }] as const)))
    const rows = Object.entries(q.items)
      .filter(([id]) => catalogue.has(id)) // unknown codes are dropped, never stored
      .map(([id, n]) => [quoteId, catalogue.get(id)!.group, id, catalogue.get(id)!.label, n])
    if (rows.length) {
      await conn.query(`INSERT INTO movers_quote_items (quote_id, item_group, item_code, item_label, quantity) VALUES ?`, [rows])
    }
    await conn.commit()
    return quoteId
  } catch (e) {
    await conn.rollback().catch(() => {})
    throw e
  } finally {
    conn.release()
  }
}

export async function markMoversEmailSent(reference: string): Promise<void> {
  await getPool().query(`UPDATE movers_quotes SET email_sent = 1, updated_at = ? WHERE reference = ?`, [now(), reference])
}
