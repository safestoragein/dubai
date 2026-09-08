import Link from "next/link"
import { ChevronRight } from "lucide-react"

/**
 * Visible breadcrumb trail + its BreadcrumbList schema, from one array.
 *
 * The silo plan requires both on every page, and the two must agree — a visible
 * trail that says something different from the JSON-LD is worse than neither,
 * because it is the mismatch Google reports as a structured-data error. Taking
 * them from a single source removes the chance of drift entirely.
 *
 * The trail mirrors the URL path, which is the whole point of a silo: a reader
 * and a crawler should both be able to see where the page sits in the tree.
 *
 *   Home › Self Storage Dubai › Local Self Storage
 *
 * Pass every level INCLUDING the current page. The last item renders as plain
 * text rather than a link (you don't link to the page you're on) but still
 * carries its position in the schema, which Google expects.
 */

export interface Crumb {
  name: string
  /** Site-relative path. Omitted on the final crumb — it is the current page. */
  href?: string
}

const SITE = "https://safestorage.ae"

export default function SiloBreadcrumb({ trail }: { trail: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      // The final crumb carries no `item`: Google's own guidance is that the
      // current page should not link to itself in the trail.
      ...(c.href ? { item: `${SITE}${c.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-gray-50/60">
        <div className="container mx-auto px-4">
          <ol className="flex flex-wrap items-center gap-1 py-3 text-sm text-gray-600">
            {trail.map((c, i) => (
              <li key={c.name} className="flex items-center gap-1">
                {i > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
                )}
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-dubai-navy hover:underline underline-offset-2"
                  >
                    {c.name}
                  </Link>
                ) : (
                  <span className="font-medium text-dubai-navy" aria-current="page">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
