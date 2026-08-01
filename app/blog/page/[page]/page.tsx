import BlogListing from "@/components/blog/blog-listing"
import { getListingPosts, getTotalPages, pageHref } from "@/lib/blog-listing"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

// ISR: regenerate at most once every 10 minutes (matches /blog)
export const revalidate = 600

// Pre-render the pages that exist at build time; anything beyond (posts added since)
// renders on demand and is then cached by ISR.
export async function generateStaticParams() {
  const posts = await getListingPosts()
  const total = getTotalPages(posts.length)
  // Page 1 is served by /blog, so this route starts at 2.
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({ page: String(i + 2) }))
}

function parsePage(raw: string): number | null {
  // Reject "01", "2.0", "-1" and friends so each page has exactly one URL.
  if (!/^[1-9][0-9]*$/.test(raw)) return null
  return Number(raw)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>
}): Promise<Metadata> {
  const { page: rawPage } = await params
  const page = parsePage(rawPage)
  if (page === null) return {}

  const url = `https://safestorage.ae${pageHref(page)}`
  const title = `Storage Tips & Guides | SafeStorage Dubai Blog — Page ${page}`
  const description = `Page ${page} of expert storage tips, guides, and insights from SafeStorage Dubai.`

  return {
    title,
    description,
    // Self-referencing canonical. Pointing these back at /blog would tell Google the
    // deeper pages are duplicates and drop them — and with them the only listing
    // links to most posts.
    alternates: {
      canonical: url,
      languages: { en: url, "x-default": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "SafeStorage Dubai",
      locale: "en_AE",
      type: "website",
    },
  }
}

export default async function BlogPaginated({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page: rawPage } = await params
  const page = parsePage(rawPage)
  if (page === null) notFound()
  // Page 1 is canonically /blog — don't let /blog/page/1 exist as a duplicate.
  if (page === 1) notFound()

  return <BlogListing page={page} />
}
