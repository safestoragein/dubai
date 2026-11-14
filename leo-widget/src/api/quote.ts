import type { LeadData } from "../types";
import { BASE } from "./base";
import { getAdAttribution } from "../utils/adAttribution";

export interface QuoteResult {
  ok: boolean;
  /** the size/type is priced by the team (business, or nothing the list can price) */
  unsupported?: boolean;
  error?: string;
  customerId?: number;
  quotationId?: number;
  pallets?: number;
  sqft?: number;
  /** Shared-storage monthly price, AED, 5% VAT included — the quote form's headline figure. */
  monthlyStorageAed?: number;
  /** One-time door-to-door transport, AED (0 when out of area). */
  transportAed?: number;
  /** The range the quote card shows instead of a firm transport number. */
  transportLowAed?: number;
  transportHighAed?: number;
  /** Pickup is outside the emirate's service radius — the team prices transport by hand. */
  outOfRange?: boolean;
  /** Straight-line km from the emirate's service point; null when the address had no coordinates. */
  distanceKm?: number | null;
  /** The site accepted the quotation email for sending. */
  emailQueued?: boolean;
}

/**
 * Ask the server to turn this lead into a real quotation — the same
 * customer → quotation → items → email sequence the /get-quote form runs, on
 * the same PHP endpoints (country AE). Callers should show a waiting state: it
 * is four sequential calls.
 */
export async function requestQuote(
  lead: LeadData & {
    pickupLat?: number;
    pickupLon?: number;
    pickedItems?: { id: string; slug: string; name: string; qty: number }[];
  }
): Promise<QuoteResult> {
  try {
    const res = await fetch(`${BASE}/api/leo/quote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, attribution: getAdAttribution() }),
    });
    return (await res.json()) as QuoteResult;
  } catch {
    return { ok: false, error: "Couldn't reach the pricing service." };
  }
}
