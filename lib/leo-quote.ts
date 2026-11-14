// Server side of the Leo chat widget (leo-widget/ -> public/safestorage-chat-widget.iife.js).
//
// The chat does NOT have a pricing engine of its own. It reproduces the
// /get-quote form's save sequence (components/quote/quote-page-alternative2.tsx,
// "Moving from Step 2 to Step 3") call for call:
//
//   dubai_items_list            -> item points
//   insert_customer_dubai       -> ss_customer   (country_code='AE', is_customer=0)
//   insert_quotation_dubai      -> ss_customer_quotation
//   insert_quotation_items_dubai-> ss_customer_quotation_item
//   /api/emails/quotation       -> the quotation email + resumable capture row
//
// and the same arithmetic, so a basket priced in the chat costs exactly what
// the same basket costs on the website:
//
//   points  = SUM(storage_item_point * qty)       (parseInt'd per item, as the form does)
//   pallets = ceil(points / 16 - 1e-9)
//   sqft    = pallets * 16
//   shared  = round(sqft * 12 * 1.05)             (AED / month, VAT included)
//   closed  = ceil(sqft / 30) * 700
//   transport = calculateTransportPrice(pallets)  (lib/transport-pricing.ts)
//
// Prices never come from the browser: it sends item NAMES and quantities, and
// points are looked up here, so a tampered client cannot change a figure.
//
// LEO_DRY_RUN=1 skips every write (PHP and email) and returns the computed
// figures — used for local testing so no real lead/quotation is created.

import {
  POINTS_PER_PALLET,
  SERVICE_RADIUS_KM,
  calculateTransportPrice,
  distanceFromServiceOriginKm,
  transportEstimateRange,
} from "@/lib/transport-pricing"

export const BACKEND = "https://safestorage.in/back/app"

export const isDryRun = () => process.env.LEO_DRY_RUN === "1"

/** Shared-storage rate per sq ft before VAT, and UAE VAT — same constants as the quote form. */
const SHARED_RATE_PER_SQFT_AED = 12
const VAT_RATE = 0.05
/** Closed-space container: 30 sq ft for AED 700. */
const CONTAINER_SQFT = 30
const CONTAINER_PRICE_AED = 700

// ── tiny TTL memo (a 600-row list; avoids Next's data cache entirely) ─────────
const TTL_MS = 10 * 60 * 1000
const memo = new Map<string, { at: number; value: unknown }>()
async function memoised<T>(key: string, load: () => Promise<T>): Promise<T> {
  const hit = memo.get(key)
  if (hit && Date.now() - hit.at < TTL_MS) return hit.value as T
  const value = await load()
  memo.set(key, { at: Date.now(), value })
  return value
}

async function backendJson<T>(path: string): Promise<T> {
  const res = await fetch(`${BACKEND}/${path}`, { cache: "no-store" })
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`)
  return (await res.json()) as T
}

export interface CatalogueRow {
  name: string
  /** aed_item_points, parseInt'd exactly as the quote form does. */
  price: number
  /** storage_item_point, parseInt'd exactly as the quote form does. */
  storagePoints: number
}

const toInt = (v: unknown) => {
  const n = parseInt(String(v ?? "0"), 10)
  return Number.isFinite(n) ? n : 0
}

export function getCatalogue(): Promise<CatalogueRow[]> {
  return memoised("catalogue", async () => {
    const r = await backendJson<{
      status: boolean
      data: { storage_item_name: string; aed_item_points: string; storage_item_point: string }[]
    }>("dubai_items_list")
    if (!r.status || !Array.isArray(r.data)) throw new Error("dubai_items_list returned no data")
    return r.data
      .filter((i) => i.storage_item_name)
      .map((i) => ({
        name: i.storage_item_name,
        price: toInt(i.aed_item_points),
        storagePoints: toInt(i.storage_item_point),
      }))
  })
}

export interface Emirate {
  slug: string
  name: string
}

export function getEmirates(): Promise<Emirate[]> {
  return memoised("emirates", async () => {
    const r = await backendJson<{ status: boolean; data: { city_slug: string; city_name: string }[] }>(
      "get_dubai_emirates?country=AE"
    )
    if (!r.status || !Array.isArray(r.data)) throw new Error("get_dubai_emirates returned no data")
    return r.data.map((e) => ({ slug: e.city_slug, name: e.city_name }))
  })
}

/** "Abu Dhabi" / "abudhabi" / "ABU DHABI" -> "abudhabi". "" when unknown. */
export async function emirateSlug(input: string): Promise<string> {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z]/g, "")
  const want = norm(input || "")
  if (!want) return ""
  const list = await getEmirates()
  return list.find((e) => norm(e.slug) === want || norm(e.name) === want)?.slug ?? ""
}

// ── pricing ──────────────────────────────────────────────────────────────────
export interface PricedItem {
  name: string
  quantity: number
  price: number
  storagePoints: number
}

export interface Pricing {
  items: PricedItem[]
  totalPoints: number
  pallets: number
  sqft: number
  sharedPrice: number
  closedPrice: number
  transport: ReturnType<typeof calculateTransportPrice>
}

/** Resolve names -> catalogue rows and price the basket. Unknown names are dropped. */
export async function priceBasket(picked: { name: string; qty: number }[]): Promise<Pricing> {
  const catalogue = await getCatalogue()
  const byName = new Map(catalogue.map((c) => [c.name.toLowerCase(), c]))

  const merged = new Map<string, PricedItem>()
  for (const p of picked) {
    const row = byName.get(String(p.name).trim().toLowerCase())
    const qty = Math.floor(Number(p.qty))
    if (!row || !Number.isFinite(qty) || qty < 1) continue
    // Same cap idea as a person tapping "+": no one stores 500 sofas.
    const quantity = Math.min(qty, 200)
    const cur = merged.get(row.name)
    if (cur) cur.quantity = Math.min(cur.quantity + quantity, 200)
    else merged.set(row.name, { name: row.name, quantity, price: row.price, storagePoints: row.storagePoints })
  }
  const items = [...merged.values()]

  const totalPoints = items.reduce((t, i) => t + i.storagePoints * i.quantity, 0)
  // The epsilon keeps a whole pallet whole (see calculatePallets on the form).
  const pallets = Math.ceil(totalPoints / POINTS_PER_PALLET - 1e-9)
  const sqft = pallets * 16
  const sharedSubtotal = sqft * SHARED_RATE_PER_SQFT_AED
  const sharedPrice = Math.round(sharedSubtotal + sharedSubtotal * VAT_RATE)
  const closedPrice = Math.ceil(sqft / CONTAINER_SQFT) * CONTAINER_PRICE_AED
  return { items, totalPoints, pallets, sqft, sharedPrice, closedPrice, transport: calculateTransportPrice(pallets) }
}

/**
 * Parse the JSON object out of a PHP response that may carry junk around it.
 * Prod runs CodeIgniter with display_errors on and some endpoints end with a
 * stray `1` (e.g. `{"status":true,...}1`), so a strict JSON.parse throws on
 * perfectly good, already-saved responses.
 */
export function parseLooseJson<T>(text: string): T {
  const start = text.indexOf("{")
  const end = text.lastIndexOf("}")
  if (start === -1 || end <= start) throw new Error("no JSON object in response")
  return JSON.parse(text.slice(start, end + 1)) as T
}

// ── PHP calls ────────────────────────────────────────────────────────────────
async function postForm<T>(path: string, fields: Record<string, string>): Promise<T> {
  const res = await fetch(`${BACKEND}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(fields).toString(),
    cache: "no-store",
  })
  const text = await res.text()
  try {
    return parseLooseJson<T>(text)
  } catch {
    throw new Error(`${path}: non-JSON response (HTTP ${res.status}): ${text.slice(0, 160)}`)
  }
}

/** Raw POST that returns the body text — for the two endpoints that answer "success". */
export async function postFormText(path: string, fields: Record<string, string>): Promise<{ ok: boolean; text: string }> {
  const res = await fetch(`${BACKEND}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(fields).toString(),
    cache: "no-store",
  })
  return { ok: res.ok, text: await res.text() }
}

/** The ad-attribution keys the PHP endpoint understands (lib/ad-attribution.ts getAdAttribution()). */
const ATTRIBUTION_KEYS = [
  "gclid_field", "campaign_id_field", "utm_source", "utm_medium", "utm_campaign", "utm_term_field",
  "utm_content", "ads_account_id", "ads_adgroup_id", "ads_keyword", "ads_matchtype",
  "ads_creative_id", "ads_network", "ads_device", "ads_landing_page",
] as const

export function cleanAttribution(raw: unknown): Record<string, string> {
  const out: Record<string, string> = {}
  if (!raw || typeof raw !== "object") return out
  for (const k of ATTRIBUTION_KEYS) {
    const v = (raw as Record<string, unknown>)[k]
    if (typeof v === "string" && v.trim()) out[k] = v.trim().slice(0, 255)
  }
  return out
}

export interface QuoteInput {
  name: string
  phone: string
  email: string
  emirate: string
  floor: string
  lift: string
  bedrooms: string
  address: string
  lat?: number | null
  lng?: number | null
  items: { name: string; qty: number }[]
  attribution?: unknown
}

export interface QuoteOutput {
  ok: boolean
  error?: string
  unsupported?: boolean
  dryRun?: boolean
  customerId?: number
  quotationId?: number
  pallets?: number
  sqft?: number
  monthlyStorageAed?: number
  transportAed?: number
  transportLowAed?: number
  transportHighAed?: number
  outOfRange?: boolean
  distanceKm?: number | null
  emailQueued?: boolean
}

const finite = (n: unknown): n is number => typeof n === "number" && Number.isFinite(n)

export async function createQuote(input: QuoteInput): Promise<QuoteOutput> {
  const priced = await priceBasket(input.items)
  // Nothing priceable (no known item, or items worth 0 points after parseInt):
  // the lead is already saved; the team prices it by hand.
  if (priced.pallets <= 0 || priced.items.length === 0) return { ok: false, unsupported: true }

  const slug = await emirateSlug(input.emirate)
  const hasGeo = finite(input.lat) && finite(input.lng)
  const distanceKm = hasGeo ? distanceFromServiceOriginKm(input.lat as number, input.lng as number, slug || null) : null
  const outOfRange = distanceKm !== null && distanceKm > SERVICE_RADIUS_KM
  const t = priced.transport
  const range = transportEstimateRange(t.totalAed)

  const result: QuoteOutput = {
    ok: true,
    pallets: priced.pallets,
    sqft: priced.sqft,
    monthlyStorageAed: priced.sharedPrice,
    transportAed: outOfRange ? 0 : t.totalAed,
    transportLowAed: outOfRange ? 0 : range.lowAed,
    transportHighAed: outOfRange ? 0 : range.highAed,
    outOfRange,
    distanceKm: distanceKm === null ? null : Math.round(distanceKm * 10) / 10,
  }
  if (isDryRun()) return { ...result, dryRun: true }

  // 1 — customer (dedupes on phone, then email, inside the PHP).
  const customer = await postForm<{ status: boolean; message?: string; data?: { customer_id?: number | string } }>(
    "insert_customer_dubai",
    {
      customer_name: input.name,
      customer_email: input.email,
      customer_contact1: input.phone,
      pickup_address: input.address,
      customer_local_city: slug,
      ...cleanAttribution(input.attribution),
    }
  )
  if (!customer.status || !customer.data?.customer_id) {
    throw new Error(customer.message || "insert_customer_dubai failed")
  }
  const customerId = Number(customer.data.customer_id)

  // 2 — quotation (both storage prices, selection left open, as the form does).
  const quotation = await postForm<{ status: boolean; message?: string; data?: { quotation_id?: number | string } }>(
    "insert_quotation_dubai",
    {
      customer_id: String(customerId),
      closed_storage_price: String(priced.closedPrice),
      shared_storage_price: String(priced.sharedPrice),
      selected_storage_type: "",
      lift: input.lift,
      floor: input.floor,
      bedrooms: input.bedrooms,
      total_sqft: String(priced.sqft),
      total_points: String(priced.totalPoints),
      total_pallets: String(priced.pallets),
      transport_price: outOfRange ? "0" : String(t.totalAed),
      transport_custom_quote: outOfRange ? "1" : "0",
      transport_base_price: String(t.baseAed),
      transport_surcharge: String(t.surchargeAed),
      pickup_distance_km: distanceKm !== null ? distanceKm.toFixed(1) : "",
      pickup_lat: hasGeo ? String(input.lat) : "",
      pickup_lng: hasGeo ? String(input.lng) : "",
    }
  )
  if (!quotation.status || !quotation.data?.quotation_id) {
    throw new Error(quotation.message || "insert_quotation_dubai failed")
  }
  const quotationId = Number(quotation.data.quotation_id)

  // 3 — items.
  const itemsRes = await postForm<{ status: boolean; message?: string }>("insert_quotation_items_dubai", {
    quotation_id: String(quotationId),
    customer_id: String(customerId),
    selected_items: JSON.stringify(
      priced.items.map((i) => ({ name: i.name, quantity: i.quantity, price: i.price, storagePoints: i.storagePoints }))
    ),
  })
  if (!itemsRes.status) throw new Error(itemsRes.message || "insert_quotation_items_dubai failed")

  // 4 — email + resumable capture row. Fire-and-wait but never fatal: the
  // quote is saved; a mail-provider outage must not turn it into an error.
  let emailQueued = false
  try {
    const { POST: sendQuotationEmail } = await import("@/app/api/emails/quotation/route")
    const resp = await sendQuotationEmail(
      new Request("http://internal/api/emails/quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Not "website" (which skips the capture because the form captures its
          // own) and not "crm": the route captures the quote itself, so the
          // resume link in the email works.
          source: "chatbot",
          email: input.email,
          fullName: input.name,
          quotationId,
          customerId,
          phone: input.phone,
          emirate: slug,
          floor: input.floor,
          liftAvailable: input.lift,
          bedrooms: input.bedrooms,
          items: priced.items,
          totalSqft: priced.sqft,
          totalPallets: priced.pallets,
          monthlyStorageAed: priced.sharedPrice,
          pickupAddress: input.address,
          distanceKm,
        }),
      })
    )
    const j = (await resp.json()) as { status?: boolean }
    emailQueued = Boolean(j.status)
  } catch (e) {
    console.error("[leo] quotation email failed:", e)
  }

  return { ...result, customerId, quotationId, emailQueued }
}

// ── light per-IP throttle (public write endpoints) ───────────────────────────
const hits = new Map<string, number[]>()
export function tooMany(ip: string | undefined, bucket: string, max: number, windowMs: number): boolean {
  const key = `${bucket}:${ip || "?"}`
  const now = Date.now()
  const recent = (hits.get(key) || []).filter((t) => now - t < windowMs)
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 5000) for (const k of hits.keys()) { if (!(hits.get(k) || []).some((t) => now - t < windowMs)) hits.delete(k) }
  return recent.length > max
}
