import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SiloPage from "@/components/silo/silo-page"
import { PAGE_BY_PATH, dynamicSlugsFor, metadataFor } from "@/lib/silo/registry"
import { SILOS } from "@/lib/silo/silos"

/*
 * Moving & Storage Dubai — one dynamic segment for every data-driven child of this silo.
 *
 * WHY A DYNAMIC SEGMENT AND NOT ONE FILE PER PAGE
 * -----------------------------------------------
 * The copy lives in lib/silo/*.ts, and the internal-link rules from §8 of the
 * silo plan are enforced against that data at build time. Route files here
 * would only be a place for those rules to be forgotten one page at a time.
 *
 * generateStaticParams prerenders each page at build time, so these are static
 * HTML exactly like the hand-written siblings. dynamicParams = false makes an
 * unknown slug a real 404 rather than a rendered page.
 *
 * The hand-written pages in this directory are STATIC sibling routes. Next
 * gives a static segment precedence over a dynamic one, so they win — and
 * dynamicSlugsFor() excludes them from the prerender list so the same URL is
 * never built twice.
 */

export const dynamicParams = false

export function generateStaticParams() {
  return dynamicSlugsFor("s5")
}

function contentFor(slug: string) {
  return PAGE_BY_PATH[`${SILOS["s5"].hub}/${slug}`]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>
}): Promise<Metadata> {
  const { page } = await params
  const content = contentFor(page)
  return content ? metadataFor(content) : {}
}

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params
  const content = contentFor(page)
  if (!content) notFound()
  return <SiloPage content={content} />
}
