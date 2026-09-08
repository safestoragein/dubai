import type { EmirateDef } from "./types"
import { DUBAI } from "./dubai"
import { ABU_DHABI } from "./abu-dhabi"
import { SHARJAH } from "./sharjah"
import { AJMAN } from "./ajman"
import { RAS_AL_KHAIMAH, FUJAIRAH, UMM_AL_QUWAIN, AL_AIN } from "./northern"

/**
 * Silo 4 in one list.
 *
 * Order matters: it is the order the /locations index and the hub-to-hub links
 * render in, and it runs by how much of the emirate we actually cover rather
 * than alphabetically or by emirate size.
 */
export const EMIRATES: EmirateDef[] = [
  DUBAI,
  ABU_DHABI,
  SHARJAH,
  AJMAN,
  RAS_AL_KHAIMAH,
  FUJAIRAH,
  UMM_AL_QUWAIN,
  AL_AIN,
]

export const EMIRATE_BY_SLUG: Record<string, EmirateDef> = Object.fromEntries(
  EMIRATES.map((e) => [e.slug, e]),
)

/** Every published area page path, for the sitemap and for link auditing. */
export function allAreaPaths(): string[] {
  return EMIRATES.flatMap((e) => [
    `/locations/${e.slug}`,
    ...e.areas.map((a) => `/locations/${e.slug}/${a.slug}`),
    ...(e.staticAreas ?? []).map((a) => `/locations/${e.slug}/${a.slug}`),
  ])
}

/** Areas an emirate's [area] segment should prerender — data-driven ones only. */
export function dynamicAreaParams(slug: string): { area: string }[] {
  return (EMIRATE_BY_SLUG[slug]?.areas ?? []).map((a) => ({ area: a.slug }))
}

if (process.env.NODE_ENV !== "production") {
  // A `nearby` slug that does not resolve renders as a silently missing link,
  // which is the failure mode that quietly unpicks an internal-link structure.
  const errors: string[] = []
  for (const e of EMIRATES) {
    const known = new Set([
      ...e.areas.map((a) => a.slug),
      ...(e.staticAreas ?? []).map((a) => a.slug),
    ])
    for (const a of e.areas) {
      for (const n of a.nearby) {
        if (!known.has(n)) errors.push(`${e.slug}/${a.slug}: nearby "${n}" does not exist`)
      }
      if (a.nearby.includes(a.slug)) errors.push(`${e.slug}/${a.slug}: lists itself as nearby`)
    }
    const slugs = [...e.areas.map((a) => a.slug), ...(e.staticAreas ?? []).map((a) => a.slug)]
    const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i)
    if (dupes.length) errors.push(`${e.slug}: duplicate slugs ${dupes.join(", ")}`)
  }
  if (errors.length) throw new Error(`Area registry failed:\n  ${errors.join("\n  ")}`)
}
