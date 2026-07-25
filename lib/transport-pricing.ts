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

/** Pickups beyond this straight-line distance from the warehouse are out of area. */
export const SERVICE_RADIUS_KM = 60

/** Flat amount added to every non-zero transport quote. */
export const TRANSPORT_SURCHARGE_AED = 60

/** Per-pallet rate once the load exceeds the largest vehicle. */
export const OVERSIZE_RATE_PER_PALLET_AED = 218

/**
 * Booking tokens. Taken up front to confirm the slot and knocked off the
 * transport bill afterwards — they are not an extra charge.
 */
export const TRANSPORT_TOKEN_AED = 50
export const WAREHOUSE_ARRIVAL_TOKEN_AED = 20

/** How the goods reach the warehouse. */
export type DeliveryMode = "transport" | "warehouse"

/** Vehicle tiers, smallest first. `maxPallets` is inclusive. */
export const TRANSPORT_TIERS = [
  { maxPallets: 1, flatAed: 500, label: "Up to 1 pallet" },
  { maxPallets: 3.5, flatAed: 900, label: "Up to 3.5 pallets" },
  { maxPallets: 6, flatAed: 1308, label: "Up to 6 pallets" },
] as const

/** Guards against 3.5 failing a `<= 3.5` test through float drift. */
const EPSILON = 1e-9

export interface Coordinates {
  lat: number
  lng: number
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

/** Straight-line distance from the warehouse to a pickup point, in km. */
export function distanceFromWarehouseKm(lat: number, lng: number): number {
  return haversineKm(WAREHOUSE, { lat, lng })
}

/** Whether a pickup point falls inside the serviceable radius. */
export function isWithinServiceRadius(lat: number, lng: number): boolean {
  return distanceFromWarehouseKm(lat, lng) <= SERVICE_RADIUS_KM + EPSILON
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
    ? tier.flatAed
    : Math.round(pallets * OVERSIZE_RATE_PER_PALLET_AED)

  const tierLabel = tier
    ? tier.label
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
