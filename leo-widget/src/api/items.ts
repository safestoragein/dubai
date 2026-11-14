import { BASE } from "./base";

export interface CatalogueItem {
  /** The catalogue row's name — the UAE catalogue has no separate id or slug. */
  id: string;
  slug: string;
  name: string;
  /** Unused in the UAE catalogue; kept so the shared picker types still fit. */
  category?: string;
}

export interface PickedItem extends CatalogueItem {
  qty: number;
}

/**
 * The whole item list in one call (dubai_items_list, ~600 rows).
 *
 * Only names come to the browser. Points and prices stay on the server: the
 * quote is priced there from the names, so a tampered client cannot change a
 * figure — the same reason the quotation email recalculates from pallets.
 */
export async function fetchCatalogue(): Promise<CatalogueItem[]> {
  try {
    const res = await fetch(`${BASE}/api/leo/catalogue`);
    const data = await res.json();
    return Array.isArray(data?.items) ? data.items : [];
  } catch {
    return [];
  }
}
