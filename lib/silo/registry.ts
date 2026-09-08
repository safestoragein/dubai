import type { Metadata } from "next"
import type { SiloKey, SiloPageContent } from "./types"
import { SILOS } from "./silos"
import { SILO1_PAGES } from "./silo1"
import { SILO2_PAGES } from "./silo2"
import { SILO3_PAGES } from "./silo3"
import { SILO5_PAGES } from "./silo5"
import { GUIDE_PAGES } from "./guides"
import { linksIn } from "@/components/silo/rich-text"

/**
 * Every data-driven silo page on the site, in one list.
 *
 * The registry is what makes the linking rules enforceable rather than
 * aspirational: sibling blocks, hub grids and the sitemap all read from here,
 * so a page cannot exist without being linked, and a link cannot point at a
 * page that does not exist. `assertSiloIntegrity()` below runs at import time
 * in development and fails the build on either.
 */
export const SILO_PAGES: SiloPageContent[] = [
  ...SILO1_PAGES,
  ...SILO2_PAGES,
  ...SILO3_PAGES,
  ...SILO5_PAGES,
  ...GUIDE_PAGES,
]

export const PAGE_BY_PATH: Record<string, SiloPageContent> = Object.fromEntries(
  SILO_PAGES.map((p) => [p.path, p]),
)

/** The data-driven children of one silo, in registry order. */
export function pagesInSilo(silo: SiloKey): SiloPageContent[] {
  return SILO_PAGES.filter((p) => p.silo === silo)
}

/**
 * Pages that ALREADY have a hand-written route file and so must not be
 * prerendered by a dynamic [page] segment as well.
 *
 * Next gives a static segment precedence over a dynamic sibling, so these would
 * still render their own file — but returning them from generateStaticParams
 * makes the build prerender the same URL twice, which is a real conflict rather
 * than a warning. Keep this list in step with the app/ directory.
 */
export const HAND_WRITTEN: Record<string, { silo: SiloKey; label: string; blurb: string }> = {
  // ---- Silo 1 ------------------------------------------------------------
  "/self-storage-dubai/local-self-storage": {
    silo: "s1",
    label: "Local self storage",
    blurb: "Collection and storage for your specific Dubai community.",
  },
  "/self-storage-dubai/prices": {
    silo: "s1",
    label: "Storage prices",
    blurb: "What a studio, 1BHK, 2BHK and villa actually cost per month.",
  },
  "/self-storage-dubai/short-term": {
    silo: "s1",
    label: "Short term storage",
    blurb: "Two weeks to three months, for the gap between Ejari leases.",
  },
  "/self-storage-dubai/storage-units": {
    silo: "s1",
    label: "Storage units",
    blurb: "How our units work and what they hold.",
  },
  "/self-storage-dubai/unit-sizes": {
    silo: "s1",
    label: "Unit sizes",
    blurb: "Square footage by home size, with what fits in each.",
  },
  "/self-storage-dubai/how-it-works": {
    silo: "s1",
    label: "How it works",
    blurb: "The four steps from first call to delivered back.",
  },
  "/self-storage-dubai/prohibited-items": {
    silo: "s1",
    label: "What you can and cannot store",
    blurb: "The short list of what cannot go into storage, and why.",
  },

  // ---- Silo 2 (moved from flat root URLs) ---------------------------------
  "/personal-storage-dubai/furniture-storage": {
    silo: "s2",
    label: "Furniture storage",
    blurb: "Sofas, beds and wardrobes wrapped at your door.",
  },
  "/personal-storage-dubai/car-storage": {
    silo: "s2",
    label: "Car storage",
    blurb: "Indoor vehicle storage while you are out of the country.",
  },
  "/personal-storage-dubai/student-storage": {
    silo: "s2",
    label: "Student storage",
    blurb: "Summer storage collected from university residences.",
  },
  "/personal-storage-dubai/expat-storage": {
    silo: "s2",
    label: "Expat storage",
    blurb: "Leaving the UAE without selling everything in a fortnight.",
  },
  "/personal-storage-dubai/art-storage": {
    silo: "s2",
    label: "Art & antiques storage",
    blurb: "Paintings, sculpture and antiques, declared and handled.",
  },
  "/personal-storage-dubai/electronics-storage": {
    silo: "s2",
    label: "Electronics storage",
    blurb: "TVs, computers and appliances prepared for this climate.",
  },

  // ---- Silo 3 (moved from flat root URLs) ---------------------------------
  "/business-storage-dubai/warehouse-storage": {
    silo: "s3",
    label: "Warehouse storage",
    blurb: "Warehouse space without the lease or the fit-out.",
  },
  "/business-storage-dubai/document-storage": {
    silo: "s3",
    label: "Document storage",
    blurb: "Business records held offsite and retrieved on notice.",
  },
  "/business-storage-dubai/ecommerce-fulfilment": {
    silo: "s3",
    label: "E-commerce storage",
    blurb: "Stock received, held and released for online sellers.",
  },

  // ---- Silo 5 (moved from a flat root URL) --------------------------------
  "/moving-storage-dubai/international-relocation": {
    silo: "s5",
    label: "International relocation",
    blurb: "Storage around a container date, before or instead of shipping.",
  },

  // ---- Guides (moved, with the dated slugs dropped) ------------------------
  "/guides/best-storage-companies-dubai": {
    silo: "guides",
    label: "Best storage companies in Dubai",
    blurb: "How the Dubai operators compare, and what to compare them on.",
  },
  "/guides/best-storage-companies-uae": {
    silo: "guides",
    label: "Best storage companies in the UAE",
    blurb: "The same comparison, across all seven emirates.",
  },
  "/guides/dubai-cost-of-living": {
    silo: "guides",
    label: "Dubai cost of living",
    blurb: "What living here actually costs, line by line.",
  },
  "/guides/moving-to-dubai": {
    silo: "guides",
    label: "Moving to Dubai",
    blurb: "The arrival sequence, from visa to Ejari to furniture.",
  },
  "/guides/starting-a-business-in-dubai": {
    silo: "guides",
    label: "Starting a business in Dubai",
    blurb: "Licences, free zones and premises, explained.",
  },
  "/guides/best-places-to-live-dubai": {
    silo: "guides",
    label: "Best places to live in Dubai",
    blurb: "Communities compared on rent, commute and character.",
  },
  "/guides/dubai-shopping-guide": {
    silo: "guides",
    label: "Dubai shopping guide",
    blurb: "Where to buy furniture and household goods here.",
  },
}

export const HAND_WRITTEN_PATHS = new Set(Object.keys(HAND_WRITTEN))

/** Slugs a dynamic [page] segment under `hub` should prerender. */
export function dynamicSlugsFor(silo: SiloKey): { page: string }[] {
  const hub = SILOS[silo].hub
  return pagesInSilo(silo)
    .filter((p) => !HAND_WRITTEN_PATHS.has(p.path))
    .map((p) => ({ page: p.path.slice(hub.length + 1) }))
}

/**
 * Label + blurb for a sibling or hub link. Resolves data-driven pages first,
 * then the hand-written route files — a Silo 1 page must be able to link to
 * /self-storage-dubai/prices, which has its own .tsx and is not in SILO_PAGES.
 */
export function navFor(path: string): { href: string; label: string; blurb: string } | null {
  const p = PAGE_BY_PATH[path]
  if (p) return { href: p.path, label: p.navLabel, blurb: p.navBlurb }
  const h = HAND_WRITTEN[path]
  if (h) return { href: path, label: h.label, blurb: h.blurb }
  return null
}

/** The silo a path belongs to, whether it is data-driven or hand-written. */
export function siloOf(path: string): SiloKey | null {
  return PAGE_BY_PATH[path]?.silo ?? HAND_WRITTEN[path]?.silo ?? null
}

const SITE = "https://safestorage.ae"

/** Next metadata for a silo page. Canonical is always the silo path. */
export function metadataFor(content: SiloPageContent): Metadata {
  const url = `${SITE}${content.path}`
  return {
    title: { absolute: content.title },
    description: content.description,
    keywords: content.keywords,
    openGraph: {
      title: content.ogTitle ?? content.title,
      description: content.ogDescription ?? content.description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
      url,
      siteName: "SafeStorage Dubai",
      locale: "en_AE",
      type: "website",
    },
    alternates: { canonical: url },
  }
}

/* -------------------------------------------------------------------------- */

/**
 * Build-time enforcement of §8 of the silo plan. Throwing here is deliberate:
 * a warning in a build log is a warning nobody reads.
 *
 *   Rule 1 — every child links UP to its own hub, in the first paragraph.
 *   Rule 2 — three to five sibling links, and they must resolve.
 *   Rule 3 — no body link into another silo's CHILD. Hubs are the connectors.
 */
export function assertSiloIntegrity(): string[] {
  const errors: string[] = []
  const hubs = new Set(Object.values(SILOS).map((s) => s.hub))

  for (const page of SILO_PAGES) {
    const silo = SILOS[page.silo]

    // Rule 1 — up-link in the first hero paragraph.
    if (!linksIn(page.hero[0] ?? "").includes(silo.hub)) {
      errors.push(`${page.path}: first hero paragraph does not link up to ${silo.hub}`)
    }

    // Rule 2 — sibling count and resolution.
    if (page.siblings.length < 3 || page.siblings.length > 5) {
      errors.push(`${page.path}: ${page.siblings.length} siblings, must be 3–5`)
    }
    for (const s of page.siblings) {
      const sSilo = siloOf(s)
      if (!sSilo) errors.push(`${page.path}: sibling ${s} does not exist`)
      else if (sSilo !== page.silo) errors.push(`${page.path}: sibling ${s} is in another silo`)
      if (s === page.path) errors.push(`${page.path}: lists itself as a sibling`)
    }

    // Rule 3 — body links may not reach into another silo's children.
    const body = [
      ...page.hero,
      ...page.sections.flatMap((s) => {
        switch (s.kind) {
          case "prose":
            return s.paras
          case "table":
            return [s.intro ?? "", s.note ?? "", ...s.rows.flat()]
          case "steps":
          case "cards":
            return [s.intro ?? "", ...s.items.map((i) => i.p)]
          case "checklist":
            return [s.intro ?? "", s.note ?? "", ...s.items]
        }
      }),
    ]
    for (const href of body.flatMap(linksIn)) {
      if (hubs.has(href) || href === "/get-quote" || href === "/contact" || href === "/faq") continue
      if (href.startsWith("/locations")) continue // Exception B — coverage links
      if (href === "/self-storage-dubai/local-self-storage") continue // Exception A
      const target = siloOf(href)
      if (!target) continue // a trust page, the quote form, or the blog
      if (target !== page.silo) {
        errors.push(`${page.path}: body links across silos to ${href}`)
      }
    }
  }

  return errors
}

if (process.env.NODE_ENV !== "production") {
  const errors = assertSiloIntegrity()
  if (errors.length) {
    throw new Error(`Silo integrity failed:\n  ${errors.join("\n  ")}`)
  }
}
