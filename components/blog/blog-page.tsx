"use client"

import { useState, useEffect } from "react"
import { m } from "framer-motion"
import { Search, ChevronLeft, ChevronRight, User, ArrowRight, MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import LikeButtonMini from "./like-button-mini"
// If there are any Clock imports from icons.tsx, update them
import { Clock } from "@/components/icons"
import { getCategoryColor } from "@/lib/blog-images"
import { blogImageUrl } from "@/lib/blog-image"
import { POSTS_PER_PAGE, pageHref } from "@/lib/blog-listing"
import { BLOG_CATEGORIES, readTimeFromContent, resolveCategory, toIsoDate } from "@/lib/blog-meta"
import { formatDate } from "@/lib/utils"

// Helper function to construct image URL from endpoint data
function constructImageUrl(postImages: string | null | undefined): string {
  return blogImageUrl(postImages) || "/blog-placeholder.jpg"
}

// Generate consistent likes/views based on post ID (deterministic)
function getConsistentLikes(postId: number): number {
  // Use a simple hash to generate consistent number
  const hash = ((postId * 2654435761) % 100) + 50
  return hash
}

function getConsistentViews(postId: number): number {
  // Use a different multiplier for views
  const hash = ((postId * 1597334677) % 400) + 100
  return hash
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  // NOTE: no `content` here on purpose. This is a client component, so every field
  // is serialised into the RSC payload embedded in the HTML. Carrying the article
  // bodies put ~8.8 MB of unrendered markup into <script> tags. The cards only show
  // `excerpt`; /blog/[slug] loads the body itself. See lib/blog-listing.ts.
  slug: string
  author: { name: string }
  categories: string[]
  image?: string
  readTime?: string
  likes: number
  views: number
  comments?: any[]
  date: string
}

export default function BlogPage({
  initialBlogs = [],
  currentPage = 1,
  totalPages = 1,
}: {
  initialBlogs?: BlogPost[]
  currentPage?: number
  totalPages?: number
}) {
  const [searchQuery, setSearchQuery] = useState("")
  // Initialise from SSR data so crawlers see articles immediately
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs)
  const [loading, setLoading] = useState(initialBlogs.length === 0)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Must be the same set resolveCategory() assigns, or the filter offers categories
  // no post has ("Organization", "News") while hiding ones that are in use.
  const allCategories = [...BLOG_CATEGORIES]

  useEffect(() => {
    // Only re-fetch if SSR didn't provide any posts
    if (initialBlogs.length === 0) {
      fetchBlogs()
    }
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs/fetch", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      const data = await response.json()

      if (data.status === "success" && data.data && data.data.length > 0) {
        const generateSlug = (title: string) =>
          title
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-+|-+$/g, "")

        const processedBlogs = data.data
          .map((blog: any) => {
            const title = blog.title || blog.seo_title || "Untitled"
            const postId = parseInt(blog.post_id) || 1
            return {
              id: postId,
              slug: generateSlug(title),
              title,
              excerpt: blog.seo_desc || "",
              author: { name: "SafeStorage Dubai Editorial Team" },
              categories: [resolveCategory(blog.post_category, title)],
              date: blog.created_at || new Date().toISOString(),
              image: constructImageUrl(blog.post_images),
              readTime: readTimeFromContent(blog.description),
              likes: getConsistentLikes(postId),
              views: getConsistentViews(postId),
              comments: [],
            }
          })
          // Highest post_id first — must match sortNewestFirst() in lib/blog-listing.ts.
          .sort((a: any, b: any) => b.id - a.id)
        setBlogs(processedBlogs)
      }
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setLoading(false)
    }
  }
  
  const isFiltering = searchQuery !== "" || selectedCategory !== "all"

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === "all" || blog.categories[0] === selectedCategory
    const matchesSearch = searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const popularPosts = [...blogs].sort((a, b) => b.views - a.views).slice(0, 5)
  const recommendedPosts = [...blogs].sort((a, b) => b.likes - a.likes).slice(0, 5)

  // Search and category filtering run across every post, so they show all matches on
  // one screen rather than paginating a filtered set (the URL doesn't carry the
  // filter, so a /blog/page/N link couldn't reproduce it). With no filter active we
  // render exactly the slice the server rendered for this URL — same start index, so
  // hydration matches and the HTML stays small.
  const pageStart = (currentPage - 1) * POSTS_PER_PAGE
  const featuredPosts = isFiltering
    ? filteredBlogs
    : filteredBlogs.slice(pageStart, pageStart + POSTS_PER_PAGE)

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4 text-dubai-navy">Storage Insights & Tips</h1>
            <p className="text-lg text-dubai-navy/70">
              Expert advice, guides, and tips to help you make the most of your storage experience
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-10">
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 pr-10 py-6 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dubai-navy/50" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dubai-navy/50 hover:text-dubai-navy transition-colors"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Featured Posts */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-dubai-navy">
                {isFiltering ? "Search Results" : "Featured Articles"}
              </h2>
              <span className="text-dubai-gold flex items-center">
                {isFiltering
                  ? `${filteredBlogs.length} of ${blogs.length} Articles`
                  : totalPages > 1
                    ? `Page ${currentPage} of ${totalPages} · ${blogs.length} Articles`
                    : `${blogs.length} Articles`}
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {loading ? (
                <div className="col-span-2 text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-dubai-gold"></div>
                </div>
              ) : featuredPosts.length > 0 ? (
                featuredPosts.map((post, index) => (
                  <BlogPostCard key={post.id} post={post} index={index} />
                ))
              ) : (
                <div className="col-span-2 text-center py-8">
                  <p className="text-gray-600">
                    {searchQuery || selectedCategory !== "all"
                      ? "No articles match your search. Try a different keyword or category."
                      : "Loading articles..."}
                  </p>
                  {(searchQuery || selectedCategory !== "all") && (
                    <button
                      onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                      className="mt-3 text-dubai-gold hover:underline text-sm"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Real <a href> pagination — Googlebot follows these, so every post stays
                reachable. Hidden while filtering: the filter isn't in the URL, so a
                page link couldn't reproduce the filtered set. */}
            {!isFiltering && totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} />
            )}
          </div>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Popular Posts Section */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-dubai-navy">Popular Posts</h3>
            <div className="space-y-4">
              {popularPosts.length > 0 ? (
                popularPosts.slice(0, 4).map((post, index) => (
                  <SidebarPostCard key={post.id} post={post} index={index} />
                ))
              ) : (
                <p className="text-gray-600 text-sm">Loading popular posts...</p>
              )}
            </div>
          </div>

          {/* Recommended Posts Section */}
          <div className="bg-dubai-gold/5 rounded-xl p-6 mb-8 border border-dubai-gold/20">
            <h3 className="text-xl font-bold mb-4 text-dubai-navy">Recommended For You</h3>
            <div className="space-y-4">
              {recommendedPosts.length > 0 ? (
                recommendedPosts.slice(0, 3).map((post, index) => (
                  <SidebarPostCard key={post.id} post={post} index={index + 10} />
                ))
              ) : (
                <p className="text-gray-600 text-sm">Loading recommendations...</p>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-dubai-navy">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className={`cursor-pointer transition-colors ${selectedCategory === "all" ? "bg-dubai-gold text-white border-dubai-gold" : "hover:bg-dubai-gold/10 hover:text-dubai-gold"}`}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </Badge>
              {allCategories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className={`cursor-pointer transition-colors ${selectedCategory === category ? "bg-dubai-gold text-white border-dubai-gold" : "hover:bg-dubai-gold/10 hover:text-dubai-gold"}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-dubai-navy text-white rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-white/80 mb-4">Get the latest storage tips and exclusive offers</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Numbers to show: always first and last, plus a window around the current page.
// Gaps become "…" so a 22-page listing doesn't render 22 links.
function pageItems(current: number, total: number): (number | "gap")[] {
  const wanted = new Set<number>([1, total, current, current - 1, current + 1])
  const pages = [...wanted].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b)

  const items: (number | "gap")[] = []
  pages.forEach((p, i) => {
    if (i > 0 && p - pages[i - 1] > 1) items.push("gap")
    items.push(p)
  })
  return items
}

// Pagination Component — plain links, no client-side state, so it works for
// crawlers and with JS disabled.
function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  const linkClass =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-md border px-3 text-sm transition-colors"
  const idle = "border-gray-200 text-dubai-navy hover:border-dubai-gold hover:text-dubai-gold"
  const active = "border-dubai-gold bg-dubai-gold text-white pointer-events-none"

  return (
    <nav aria-label="Blog pagination" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {currentPage > 1 ? (
        <Link href={pageHref(currentPage - 1)} rel="prev" className={`${linkClass} ${idle}`}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Link>
      ) : (
        <span className={`${linkClass} border-gray-100 text-gray-300`} aria-hidden="true">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </span>
      )}

      {pageItems(currentPage, totalPages).map((item, i) =>
        item === "gap" ? (
          <span key={`gap-${i}`} className="px-1 text-dubai-navy/40" aria-hidden="true">
            …
          </span>
        ) : item === currentPage ? (
          <span key={item} aria-current="page" className={`${linkClass} ${active}`}>
            {item}
          </span>
        ) : (
          <Link
            key={item}
            href={pageHref(item)}
            className={`${linkClass} ${idle}`}
            aria-label={`Go to page ${item}`}
          >
            {item}
          </Link>
        )
      )}

      {currentPage < totalPages ? (
        <Link href={pageHref(currentPage + 1)} rel="next" className={`${linkClass} ${idle}`}>
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      ) : (
        <span className={`${linkClass} border-gray-100 text-gray-300`} aria-hidden="true">
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </span>
      )}
    </nav>
  )
}

// Blog Post Card Component
function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={post.image || "/blog-placeholder.jpg"}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {post.categories.length > 0 && (
            <Badge className="absolute top-3 left-3 bg-dubai-gold/90 text-white border-0">
              {post.categories[0]}
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-dubai-gold transition-colors">{post.title}</h3>
      </Link>
      <p className="text-dubai-navy/70 mb-3 line-clamp-2">{post.excerpt}</p>
      <div className="flex flex-wrap items-center text-sm text-dubai-navy/60 mb-3 gap-y-1">
        {/* Publication date — no post on the listing showed one, which removes the
            freshness signal Google uses for "2026 price" style queries and stops
            AI answer engines citing the article at all. */}
        <time dateTime={toIsoDate(post.date)}>{formatDate(post.date)}</time>
        <span className="mx-2">•</span>
        <Clock className="h-4 w-4 mr-1" />
        <span>{post.readTime}</span>
        <span className="mx-2">•</span>
        <User className="h-4 w-4 mr-1" />
        <span>{post.author.name}</span>
      </div>
      <div className="flex items-center justify-between">
        <Link href={`/blog/${post.slug}`} className="text-dubai-gold flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
          Read more <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
        <div className="flex items-center gap-3 text-dubai-navy/60 text-sm">
          <LikeButtonMini postId={post.id} initialLikes={post.likes} />
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{post.comments?.length || 0}</span>
          </div>
        </div>
      </div>
    </m.div>
  )
}

// Blog Post Row Component
function BlogPostRow({ post, index }: { post: BlogPost; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group grid md:grid-cols-3 gap-6 items-center"
    >
      <Link href={`/blog/${post.slug}`} className="md:col-span-1" target="_blank" rel="noopener noreferrer">
        <div className="relative h-40 overflow-hidden rounded-lg">
          <Image
            src={post.image || "/blog-placeholder.jpg"}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="md:col-span-2">
        <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-bold mb-2 group-hover:text-dubai-gold transition-colors">{post.title}</h3>
        </Link>
        <p className="text-dubai-navy/70 mb-3 line-clamp-2">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.slice(0, 1).map((category) => (
            <Badge key={category} variant="secondary" className="bg-gray-100 text-gray-600 border-0 text-xs">
              {category}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap items-center text-sm text-dubai-navy/60 mb-3 gap-y-1">
          {/* Publication date — see the grid card above. Both layouts need it, or
              the freshness signal disappears depending on the view mode. */}
          <time dateTime={toIsoDate(post.date)}>{formatDate(post.date)}</time>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <User className="h-4 w-4 mr-1" />
          <span>{post.author.name}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center gap-1">
            <LikeButtonMini postId={post.id} initialLikes={post.likes} showCount={false} />
            <span>{post.likes} likes</span>
          </div>
          <span className="mx-2">•</span>
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>{post.comments?.length || 0} comments</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="text-dubai-gold flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
          Read more <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </m.div>
  )
}

// Sidebar Post Card Component
function SidebarPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <div className="group flex gap-3 items-start">
      <Link href={`/blog/${post.slug}`} className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded" target="_blank" rel="noopener noreferrer">
        <Image
          src={post.image || "/blog-placeholder.jpg"}
          alt={post.title}
          fill
          sizes="64px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="flex-1">
        <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
          <h4 className="font-medium line-clamp-2 group-hover:text-dubai-gold transition-colors">{post.title}</h4>
        </Link>
        <div className="flex items-center justify-between text-xs text-dubai-navy/60 mt-1">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{post.readTime}</span>
          </div>
          <LikeButtonMini postId={post.id} initialLikes={post.likes} size="sm" className="ml-auto" />
        </div>
      </div>
    </div>
  )
}
