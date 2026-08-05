/**
 * Dubai transport (door-to-door pickup) pricing.
 *
 * Transport is a ONE-TIME charge, separate from the recurring monthly storage
 * rate. It is priced off the same pallet figure the storage quote already uses
 * (16 storage points = 1 pallet — see `calculatePallets`).
 *
 * The tiers are vehicle capacities: a load pays the flat rate of the smallest
 * vehicle it fits in. Past the largest vehicle (6 pallets) it goes per-pallet.
 */

/** Warehouse origin — X5Q3+XM9 Dubai (24°59'23.7"N 55°09'15.3"E). */
export const WAREHOUSE = {
  lat: 24.989924,
  lng: 55.154235,
  label: "SafeStorage Dubai warehouse",
  plusCode: "X5Q3+XM9 Dubai - United Arab Emirates",
} as const

/**
 * Per-emirate service anchors, keyed by the `city_slug` the emirate dropdown
 * submits. The radius is measured from the anchor of the emirate the CUSTOMER
 * SELECTED — pick Dubai and you are measured from Dubai, pick Abu Dhabi and you
 * are measured from Abu Dhabi. We serve both, so neither is ruled out by its
 * distance from the other (~102 km apart).
 *
 * Only Dubai has a warehouse — the Abu Dhabi entry is a service-area centre
 * (Abu Dhabi city), not a second depot. Transport from it is priced on the same
 * tiers as Dubai; the collection is simply driven further.
 */
export const SERVICE_ORIGINS: Record<string, Coordinates & { label: string }> = {
  dubai: { lat: WAREHOUSE.lat, lng: WAREHOUSE.lng, label: "Dubai" },
  abudhabi: { lat: 24.453884, lng: 54.377344, label: "Abu Dhabi" },
}

/** Used when no emirate has been chosen yet, or one we have no anchor for. */
export const DEFAULT_SERVICE_ORIGIN_SLUG = "dubai"

/** Pickups beyond this straight-line distance from their emirate's anchor are out of area. */
export const SERVICE_RADIUS_KM = 60

/** Storage points in one pallet — the conversion every quote is built on. */
export const POINTS_PER_PALLET = 16

/** Flat amount added to every non-zero transport quote. */
export const TRANSPORT_SURCHARGE_AED = 60

/** Per-pallet rate once the load exceeds the largest vehicle. */
export const OVERSIZE_RATE_PER_PALLET_AED = 218

/**
 * Self drop takes a booking token up front, set against the storage bill —
 * it is not an extra charge. Door-to-door transport takes no token: the full
 * transport charge is collected at checkout instead.
 */
export const SELF_DROP_TOKEN_AED = 20

/** How the goods reach the warehouse: we collect, or the customer drops off. */
export type DeliveryMode = "transport" | "self_drop"

/**
 * Pricing bands, smallest first. `maxPallets` is inclusive.
 *
 * Most bands are a flat vehicle rate — the load pays for the vehicle it fits
 * in. The 3.6–5.4 band is charged per pallet instead, so mid-size loads are
 * not billed the full six-pallet vehicle.
 */
export const TRANSPORT_TIERS = [
  { maxPallets: 1, flatAed: 500, label: "Up to 1 pallet" },
  { maxPallets: 3.5, flatAed: 900, label: "Up to 3.5 pallets" },
  { maxPallets: 5.4, perPalletAed: 235, label: "3.6 to 5.4 pallets" },
  { maxPallets: 6, flatAed: 1308, label: "Up to 6 pallets" },
] as const

/** Guards against 3.5 failing a `<= 3.5` test through float drift. */
const EPSILON = 1e-9

/**
 * Fraction of the tier price used as the LOW end of the estimated range shown
 * on the quote card, before rounding to `ESTIMATE_ROUNDING_AED`.
 */
export const ESTIMATE_LOW_FACTOR = 0.6
/** The low end is rounded to this, so the card never shows AED 336. */
export const ESTIMATE_ROUNDING_AED = 100

export interface Coordinates {
  lat: number
  lng: number
}

export interface TransportEstimateRange {
  lowAed: number
  highAed: number
}

/**
 * The transport figure the website shows is only ever an estimate: the price is
 * re-derived from the pallet count of the items ACTUALLY received when the
 * goods are checked in (see Dubai::save_inventory), and a customer's own item
 * list rarely matches the load to the pallet. So the card shows a range and
 * says the team will confirm, rather than a firm number that then changes.
 *
 * Low end = 60% of the tier price rounded to the nearest 100; high end is the
 * tier price itself, which is still what checkout collects.
 *
 *   560  ->  300 - 560       1000  ->   600 - 1000
 *   960  ->  600 - 960       1368  ->   800 - 1368
 */
export function transportEstimateRange(totalAed: number): TransportEstimateRange {
  if (!Number.isFinite(totalAed) || totalAed <= 0) {
    return { lowAed: 0, highAed: 0 }
  }

  const low =
    Math.round((totalAed * ESTIMATE_LOW_FACTOR) / ESTIMATE_ROUNDING_AED) *
    ESTIMATE_ROUNDING_AED

  // A load small enough to round to zero, or one where rounding overshoots the
  // tier price, would print a nonsense range — collapse those to a single figure.
  return low > 0 && low < totalAed
    ? { lowAed: low, highAed: totalAed }
    : { lowAed: totalAed, highAed: totalAed }
}

export interface TransportPrice {
  pallets: number
  /** Human-readable tier, e.g. "Up to 3.5 pallets". */
  tierLabel: string
  /** Tier flat rate, or pallets x 218 when oversize. */
  baseAed: number
  surchargeAed: number
  /** What the customer pays: base + surcharge. */
  totalAed: number
  /** True when the load is bigger than the largest vehicle. */
  isOversize: boolean
}

/**
 * Great-circle distance in kilometres. Straight-line, not driving distance —
 * this matches the "60 km radius" service area definition.
 */
export function haversineKm(from: Coordinates, to: Coordinates): number {
  const EARTH_RADIUS_KM = 6371
  const toRad = (deg: number) => (deg * Math.PI) / 180

  const dLat = toRad(to.lat - from.lat)
  const dLng = toRad(to.lng - from.lng)
  const lat1 = toRad(from.lat)
  const lat2 = toRad(to.lat)

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2

  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h))
}

/** The anchor a given emirate is measured from, falling back to Dubai. */
export function serviceOriginFor(emirateSlug?: string | null) {
  return (
    (emirateSlug ? SERVICE_ORIGINS[emirateSlug] : undefined) ??
    SERVICE_ORIGINS[DEFAULT_SERVICE_ORIGIN_SLUG]
  )
}

/** Straight-line distance from the warehouse to a pickup point, in km. */
export function distanceFromWarehouseKm(lat: number, lng: number): number {
  return haversineKm(WAREHOUSE, { lat, lng })
}

/**
 * Straight-line distance from a pickup point to the anchor of the emirate the
 * customer selected. This — not the Dubai warehouse — is what the in/out-of-area
 * check runs on, so an Abu Dhabi pickup is judged against Abu Dhabi.
 */
export function distanceFromServiceOriginKm(
  lat: number,
  lng: number,
  emirateSlug?: string | null
): number {
  return haversineKm(serviceOriginFor(emirateSlug), { lat, lng })
}

/** Whether a pickup point falls inside its emirate's serviceable radius. */
export function isWithinServiceRadius(
  lat: number,
  lng: number,
  emirateSlug?: string | null
): boolean {
  return (
    distanceFromServiceOriginKm(lat, lng, emirateSlug) <=
    SERVICE_RADIUS_KM + EPSILON
  )
}

/**
 * Transport cost for a pallet count.
 *
 * A zero/negative pallet count returns a zero quote with no surcharge, so an
 * empty item list never shows a bare AED 60 transport line.
 */
export function calculateTransportPrice(pallets: number): TransportPrice {
  if (!Number.isFinite(pallets) || pallets <= 0) {
    return {
      pallets: 0,
      tierLabel: "No items selected",
      baseAed: 0,
      surchargeAed: 0,
      totalAed: 0,
      isOversize: false,
    }
  }

  const tier = TRANSPORT_TIERS.find((t) => pallets <= t.maxPallets + EPSILON)
  const isOversize = !tier

  const baseAed = tier
    ? "flatAed" in tier
      ? tier.flatAed
      : Math.round(pallets * tier.perPalletAed)
    : Math.round(pallets * OVERSIZE_RATE_PER_PALLET_AED)

  const tierLabel = tier
    ? "flatAed" in tier
      ? tier.label
      : `${pallets} pallets x AED ${tier.perPalletAed}`
    : `${pallets} pallets x AED ${OVERSIZE_RATE_PER_PALLET_AED}`

  return {
    pallets,
    tierLabel,
    baseAed,
    surchargeAed: TRANSPORT_SURCHARGE_AED,
    totalAed: baseAed + TRANSPORT_SURCHARGE_AED,
    isOversize,
  }
}
