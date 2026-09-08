/**
 * Content model for every Silo 1/2/3/5 child page and every guide.
 *
 * WHY THE PAGES ARE DATA AND NOT 59 HAND-WRITTEN ROUTE FILES
 * ---------------------------------------------------------
 * The silo plan calls for ~76 commercial pages plus 67 area pages. Written as
 * bespoke .tsx files they drift: the price appears with two values, the FAQ
 * accordion renders questions the FAQPage schema does not contain, and the
 * internal-linking rules in §8 of the plan get followed on the first ten pages
 * and forgotten on the rest.
 *
 * So the DESIGN is shared (components/silo/silo-page.tsx) and the COPY is not.
 * Everything a reader sees that is specific to the page — the H1, the hero, the
 * body sections, the FAQs — is written per page in lib/silo/*.ts. The renderer
 * supplies only what is genuinely identical everywhere: the layout, the price
 * (from lib/company-facts.ts), the breadcrumb, the schema, and the internal
 * links the silo rules mandate.
 *
 * This is the same split lib/sharjah-areas.ts + components/locations/area-page.tsx
 * already uses for the district pages, applied to the service pages.
 *
 * DOORWAY-PAGE RULE
 * -----------------
 * Shared layout is fine. Shared PROSE is not. If two pages in here would carry
 * the same paragraph, one of them does not deserve to exist — merge them and
 * add a redirect instead. Google's spam policy names the find-and-replace
 * pattern explicitly.
 */

/** Inline links are written as [anchor](/path) inside any body string. */
export type RichText = string

export type Section =
  | { kind: "prose"; h2: string; paras: RichText[] }
  | {
      kind: "table"
      h2: string
      intro?: RichText
      columns: string[]
      rows: string[][]
      note?: RichText
    }
  | { kind: "steps"; h2: string; intro?: RichText; items: { h: string; p: RichText }[] }
  | { kind: "cards"; h2: string; intro?: RichText; items: { icon: string; h: string; p: RichText }[] }
  | { kind: "checklist"; h2: string; intro?: RichText; items: RichText[]; note?: RichText }

export type Faq = { q: string; a: string }

/** A sibling link rendered in the "more in this silo" block. */
export type SiblingRef = { href: string; label: string; blurb: string }

export type SiloKey = "s1" | "s2" | "s3" | "s4" | "s5" | "guides"

export type SiloPageContent = {
  /** Silo this page belongs to. Drives the breadcrumb and the up-link. */
  silo: SiloKey
  /** Full site-relative path, no trailing slash. */
  path: string
  /** Final breadcrumb label. */
  crumb: string
  /** Short label used in hub grids and sibling link blocks. */
  navLabel: string
  /** One line under the label in those grids. Not a duplicate of `description`. */
  navBlurb: string

  // ---- metadata -----------------------------------------------------------
  title: string
  description: string
  keywords: string
  ogTitle?: string
  ogDescription?: string

  // ---- above the fold -----------------------------------------------------
  h1: string
  /**
   * Hero paragraphs. Rule 1 of the linking plan: the FIRST of these must carry
   * the up-link to the silo hub, inside the first 150 words, with a natural
   * exact-match anchor. `assertSiloContent` enforces it at build time.
   */
  hero: RichText[]

  // ---- body ---------------------------------------------------------------
  sections: Section[]
  faqs: Faq[]

  // ---- schema -------------------------------------------------------------
  /** schema.org Service.serviceType. Omit on guides, which get an Article. */
  serviceType?: string
  /** Overrides the Service description. Defaults to `description`. */
  schemaDescription?: string
  /** Guides only — published/updated date for the Article node. */
  datePublished?: string

  // ---- closing ------------------------------------------------------------
  cta: { h2: string; p: string }

  /**
   * 3–5 sibling slugs, SAME SILO ONLY (linking rule 2). Paths, not labels —
   * labels are resolved from the registry so a renamed page cannot leave a
   * stale anchor behind.
   */
  siblings: string[]
}
