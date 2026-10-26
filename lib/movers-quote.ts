// Packers & movers quote — shared by the wizard (client) and /api/movers-quote (server).
// Deliberately separate from the storage quote (/get-quote): no storage points, no pallets.
// Transport is priced exactly like /get-quote: items -> storage points -> pallets (16 points each)
// -> vehicle tier + surcharge, with the same 60 km service radius. See lib/transport-pricing.ts.

import {
  POINTS_PER_PALLET,
  SERVICE_RADIUS_KM,
  calculateTransportPrice,
  distanceFromServiceOriginKm,
  transportEstimateRange,
} from "@/lib/transport-pricing"

export const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"] as const

export const MOVE_TYPES = [
  { id: "home", label: "Home / apartment" },
  { id: "villa", label: "Villa" },
  { id: "office", label: "Office / business" },
] as const

export const HOME_SIZES = ["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "4 bedrooms", "5+ bedrooms", "Office / other"] as const

export const PACKING_LEVELS = [
  { id: "full", label: "Full packing", note: "We pack everything" },
  { id: "fragile", label: "Fragile only", note: "Glass, electronics, crockery" },
  { id: "none", label: "I will pack myself", note: "Crew loads and moves" },
] as const

export const EXTRAS = [
  { id: "cleaning", label: "Cleaning after the move" },
  { id: "insurance", label: "Goods-in-transit cover" },
  { id: "disposal", label: "Furniture disposal" },
  { id: "piano", label: "Piano / heavy item" },
  { id: "pets_plants", label: "Plants or delicate items" },
] as const

export type MoversQuote = {
  name: string
  phone: string
  email: string
  moveType: string
  homeSize: string
  moveDate: string // YYYY-MM-DD
  flexibleDate: boolean
  fromAddress: string
  fromEmirate: string
  fromFloor: string
  fromLift: "yes" | "no" | ""
  /** Pickup coordinates from the address suggestion; null when typed by hand. */
  fromLat: number | null
  fromLng: number | null
  toAddress: string
  toEmirate: string
  toFloor: string
  toLift: "yes" | "no" | ""
  services: string[]
  packing: string
  /** Backend item name -> quantity (same catalogue as /get-quote). */
  items: Record<string, number>
  itemsUnsure: boolean
  extras: string[]
  notes: string
}

export const EMPTY_QUOTE: MoversQuote = {
  name: "", phone: "", email: "", moveType: "", homeSize: "", moveDate: "", flexibleDate: false,
  fromAddress: "", fromEmirate: "Dubai", fromFloor: "", fromLift: "", fromLat: null, fromLng: null,
  toAddress: "", toEmirate: "Dubai", toFloor: "", toLift: "",
  services: [], packing: "", items: {}, itemsUnsure: false, extras: [], notes: "",
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const digits = (v: string) => v.replace(/\D/g, "")

/** Per-step validation. Returns field → message; empty object means the step is valid. */
export function validateStep(step: number, q: MoversQuote): Record<string, string> {
  const e: Record<string, string> = {}
  if (step === 0) {
    if (q.name.trim().length < 2) e.name = "Please enter your full name"
    if (digits(q.phone).length < 8 || digits(q.phone).length > 15) e.phone = "Enter a valid phone number"
    if (!EMAIL_RE.test(q.email.trim())) e.email = "Enter a valid email address"
    if (!q.moveType) e.moveType = "Choose what you are moving"
    if (!q.homeSize) e.homeSize = "Choose the size"
    if (!/^\d{4}-\d{2}-\d{2}$/.test(q.moveDate)) e.moveDate = "Pick your moving date"
  }
  if (step === 1) {
    if (q.fromAddress.trim().length < 5) e.fromAddress = "Enter the pickup address"
    if (q.toAddress.trim().length < 5) e.toAddress = "Enter the drop-off address"
    if (!q.fromLift) e.fromLift = "Is there a lift at pickup?"
    if (!q.toLift) e.toLift = "Is there a lift at drop-off?"
  }
  if (step === 2) {
    const n = Object.values(q.items).reduce((a, b) => a + b, 0)
    if (n === 0) e.items = "Add at least one item to your cart"
  }
  return e
}

export const validateAll = (q: MoversQuote) =>
  [0, 1, 2].reduce<Record<string, string>>((acc, s) => ({ ...acc, ...validateStep(s, q) }), {})

/** One row of the shared item list (https://safestorage.in/back/app/dubai_items_list). */
export type CatalogueItem = { name: string; points: number }

export const ITEMS_URL = "https://safestorage.in/back/app/dubai_items_list"

export function parseCatalogue(json: unknown): CatalogueItem[] {
  const rows = (json as { data?: unknown })?.data
  if (!Array.isArray(rows)) return []
  const out: CatalogueItem[] = []
  for (const r of rows as Record<string, unknown>[]) {
    const name = String(r.storage_item_name ?? "").trim()
    const points = parseFloat(String(r.storage_item_point ?? ""))
    if (name && Number.isFinite(points) && points > 0) out.push({ name, points })
  }
  return out
}

/** Emirate name -> the city_slug transport-pricing keys its service anchors on. */
export const emirateSlug = (name: string) => (name === "Abu Dhabi" ? "abudhabi" : name.toLowerCase().replace(/\s+/g, ""))

export type MovePricing = {
  points: number
  pallets: number
  transport: ReturnType<typeof calculateTransportPrice>
  range: ReturnType<typeof transportEstimateRange>
  distanceKm: number | null
  outOfRange: boolean
  unknownItems: string[]
}

/** The same chain /get-quote runs, shared by the wizard (display) and the server (what is actually charged). */
export function priceMove(
  items: Record<string, number>,
  catalogue: CatalogueItem[],
  fromEmirate: string,
  lat: number | null,
  lng: number | null
): MovePricing {
  const byName = new Map(catalogue.map((c) => [c.name, c.points]))
  let points = 0
  const unknownItems: string[] = []
  for (const [name, qty] of Object.entries(items)) {
    const p = byName.get(name)
    if (p === undefined) unknownItems.push(name)
    else points += p * qty
  }
  const pallets = Math.ceil(points / POINTS_PER_PALLET - 1e-9)
  const transport = calculateTransportPrice(pallets)
  const distanceKm =
    lat !== null && lng !== null && Number.isFinite(lat) && Number.isFinite(lng)
      ? distanceFromServiceOriginKm(lat, lng, emirateSlug(fromEmirate))
      : null
  return {
    points,
    pallets,
    transport,
    range: transportEstimateRange(transport.totalAed),
    distanceKm,
    outOfRange: distanceKm !== null && distanceKm > SERVICE_RADIUS_KM,
    unknownItems,
  }
}
