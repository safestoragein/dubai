"use client"

import { Clock, User, ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { getFeaturedPosts } from "@/data/blog-data"
import LikeButtonMini from "./blog/like-button-mini"
import LazyMotion from "./lazy-motion"

// Update the BlogPostCard component to include interactive like button
function BlogPostCard({ post }: { post: any }) {
  return (
    <LazyMotion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {post.categories.length > 0 && (
            <div className="absolute top-3 left-3 bg-dubai-gold/90 text-white text-xs font-medium px-2 py-1 rounded">
              {post.categories[0]}
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-dubai-gold transition-colors">{post.title}</h3>
      </Link>
      <p className="text-dubai-navy/70 mb-3 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center text-sm text-dubai-navy/60 mb-3">
        <Clock className="h-4 w-4 mr-1" />
        <span>{post.readTime}</span>
        <span className="mx-2">•</span>
        <User className="h-4 w-4 mr-1" />
        <span>{post.author.name}</span>
      </div>
      <div className="flex items-center justify-between">
        <Link href={`/blog/${post.slug}`} className="text-dubai-gold flex items-center hover:underline">
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
    </LazyMotion>
  )
}

export default function BlogSection() {
  // Only load 3 posts to reduce DOM size
  const featuredPosts = getFeaturedPosts().slice(0, 3)

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <LazyMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-dubai-navy"
          >
            Storage Insights & Tips
          </LazyMotion>
          <LazyMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dubai-navy/70 max-w-[800px]"
          >
            Expert advice and guides to help you make the most of your storage experience
          </LazyMotion>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
          {featuredPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
