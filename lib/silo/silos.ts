import type { SiloKey } from "./types"

/**
 * The five silos and the guides bucket, from §4 of the silo plan.
 *
 * `hub` is the ONLY path a child page may link "up" to, and `anchor` is the
 * exact-match anchor text that up-link uses. Both live here so the wording is
 * identical on every child — an up-link whose anchor drifts page to page is a
 * weaker signal than one that does not.
 *
 * `cross` is the sideways hub-to-hub link set. Rule 4: hubs are the ONLY
 * cross-silo connectors. A child never links to a child in another silo.
 */
export type SiloDef = {
  key: SiloKey
  /** Display name, used in breadcrumbs and hub grids. */
  name: string
  /** Hub path. Guides have no commercial hub — they hang off /guides. */
  hub: string
  /** Exact-match anchor for the mandatory up-link. */
  anchor: string
  /** One line describing the silo, used in the hub-to-hub grid. */
  blurb: string
}

export const SILOS: Record<SiloKey, SiloDef> = {
  s1: {
    key: "s1",
    name: "Self Storage Dubai",
    hub: "/self-storage-dubai",
    anchor: "self storage in Dubai",
    blurb: "Units, sizes, prices and terms — the core storage service.",
  },
  s2: {
    key: "s2",
    name: "Personal Storage Dubai",
    hub: "/personal-storage-dubai",
    anchor: "personal storage in Dubai",
    blurb: "Household goods, furniture, cars, luggage and everything from a home.",
  },
  s3: {
    key: "s3",
    name: "Business Storage Dubai",
    hub: "/business-storage-dubai",
    anchor: "business storage in Dubai",
    blurb: "Stock, documents, pallets, fulfilment and equipment for companies.",
  },
  s4: {
    key: "s4",
    name: "Locations",
    hub: "/locations",
    anchor: "storage locations across the UAE",
    blurb: "Every emirate and district we collect from, with local detail.",
  },
  s5: {
    key: "s5",
    name: "Moving & Storage Dubai",
    hub: "/moving-storage-dubai",
    anchor: "moving and storage in Dubai",
    blurb: "Relocation, packing and the storage that sits between two leases.",
  },
  guides: {
    key: "guides",
    name: "Guides",
    hub: "/guides",
    anchor: "storage and moving guides",
    blurb: "Longer reads on cost, moving to Dubai and living here.",
  },
}

/** The five commercial hubs, in the order they appear in the footer and grids. */
export const HUB_ORDER: SiloKey[] = ["s1", "s2", "s3", "s4", "s5"]

/** THE money page. Exception A of the linking plan — linkable from anywhere. */
export const MONEY_PAGE = "/self-storage-dubai/local-self-storage"

/**
 * Anchor text for links to the money page.
 *
 * WHY THERE IS MORE THAN ONE
 * --------------------------
 * The money page receives inbound links from most of the site. Eighty-five
 * pages carrying the byte-identical anchor is not a strong exact-match signal —
 * it is the footprint of a template, and it reads as manipulation rather than
 * as editorial. The plan sets the target mix at roughly 40% exact match, 35%
 * partial and 25% branded or natural, which is what these four produce.
 *
 * Ordered exact → partial → branded, and `moneyAnchor()` distributes them by
 * the linking page's own path. That makes the choice deterministic — the same
 * page always renders the same anchor, so a crawl is stable between builds —
 * while the set as a whole stays varied.
 */
export const MONEY_ANCHORS = [
  "local self storage in Dubai", // exact
  "local self storage across Dubai", // exact
  "your local storage facility", // partial
  "local self storage services", // branded / natural
]

/** A stable, varied anchor for a link from `fromPath` to the money page. */
export function moneyAnchor(fromPath: string): string {
  // djb2 over the path. Deterministic per page and evenly spread, so the mix
  // holds without anyone maintaining a table of which page gets which anchor.
  let h = 5381
  for (let i = 0; i < fromPath.length; i++) h = ((h << 5) + h + fromPath.charCodeAt(i)) | 0
  return MONEY_ANCHORS[Math.abs(h) % MONEY_ANCHORS.length]
}
