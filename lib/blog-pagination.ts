// How the /blog listing is sliced into pages.
//
// Its own module, and free of "server-only", for one reason: the listing view
// (components/blog/blog-page.tsx) is a client component and needs these three,
// so the server slice and the hydrated slice can never drift apart. Leaving
// them in lib/blog-listing.ts pinned that whole file to the client boundary,
// which is why fetchBlogPosts() there could not use the server-only feed memo
// and re-downloaded ~12 MB on every listing render instead.
//
// Nothing here touches the feed, the database or the filesystem, so it is safe
// on both sides of the boundary. Keep it that way — anything added here that
// needs the server belongs in blog-listing.ts.

export const POSTS_PER_PAGE = 50

export function getTotalPages(postCount: number): number {
  return Math.max(1, Math.ceil(postCount / POSTS_PER_PAGE))
}

// Page 1 stays on the bare /blog URL so the canonical listing URL never changes.
export function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`
}
