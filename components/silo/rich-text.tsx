import Link from "next/link"
import type { ReactNode } from "react"

/**
 * The tiny inline markup the silo content files are written in.
 *
 *   [anchor text](/path)   → an internal <Link>
 *   **bold**               → <strong>
 *
 * WHY NOT JUST WRITE JSX IN THE DATA FILES
 * ----------------------------------------
 * Because the linking rules in §8 of the silo plan are checkable only if links
 * are data. `scripts/silo-audit.mjs` parses these same brackets to verify that
 * every child links up to its hub in the first paragraph, sideways to three to
 * five siblings, and to nothing in another silo. JSX inside a data file would
 * put those links beyond the reach of any check, which is exactly how the
 * previous set of internal-linking rules stopped being followed after the first
 * ten pages.
 *
 * Deliberately NOT supported: external links, images, headings, nested markup.
 * A page that needs one of those needs its own route file, not a bigger
 * mini-language.
 */

const TOKEN = /(\[[^\]\n]+\]\([^)\s]+\)|\*\*[^*\n]+\*\*)/g

const LIGHT = {
  link: "text-dubai-navy underline decoration-dubai-gold/60 underline-offset-2 hover:decoration-dubai-gold",
  bold: "font-semibold text-dubai-navy",
}
const DARK = {
  link: "font-medium text-dubai-gold underline decoration-dubai-gold/60 underline-offset-4 hover:decoration-dubai-gold",
  bold: "font-semibold text-dubai-gold",
}

export function renderRich(text: string, dark = false): ReactNode[] {
  const c = dark ? DARK : LIGHT

  return text.split(TOKEN).map((chunk, i) => {
    if (!chunk) return null

    const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(chunk)
    if (link) {
      return (
        <Link key={i} href={link[2]} className={c.link}>
          {link[1]}
        </Link>
      )
    }

    const bold = /^\*\*([^*]+)\*\*$/.exec(chunk)
    if (bold) {
      return (
        <strong key={i} className={c.bold}>
          {bold[1]}
        </strong>
      )
    }

    return <span key={i}>{chunk}</span>
  })
}

/** Strips the markup. Meta descriptions and JSON-LD take plain text, not this. */
export function plain(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1")
}

/** Every internal path referenced by a body string. Used by the link audit. */
export function linksIn(text: string): string[] {
  return [...text.matchAll(/\[[^\]\n]+\]\(([^)\s]+)\)/g)].map((m) => m[1])
}
