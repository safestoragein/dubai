import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getRelatedStaticPosts } from "@/lib/static-blog-posts"

// Lateral links between the hand-written blog posts. Each static post links to three
// topically-close siblings and back to /blog, so no article is a dead end for a crawler
// and link equity flows between them instead of stopping at the first page.
export default function RelatedGuides({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedStaticPosts(currentSlug)
  if (related.length === 0) return null

  return (
    <section className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="container px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-dubai-navy mb-6">Related Storage Guides</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-dubai-gold hover:shadow-md transition-all"
            >
              <div className="text-xs font-medium text-dubai-gold mb-2">{post.category}</div>
              <h3 className="font-semibold text-dubai-navy leading-snug mb-2 group-hover:text-dubai-blue">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm text-dubai-blue mt-3">
                Read guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/blog" className="text-dubai-blue hover:underline">
            All storage guides &amp; articles
          </Link>
          <Link href="/prohibited-items" className="text-dubai-blue hover:underline">
            What you cannot store
          </Link>
          <Link href="/pricing" className="text-dubai-blue hover:underline">
            Storage pricing
          </Link>
          <Link href="/get-quote" className="text-dubai-blue hover:underline">
            Get a free quote
          </Link>
        </div>
      </div>
    </section>
  )
}
