"use client"

import { m } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/data/blog-posts"
import { useState } from "react"

interface BlogSidebarProps {
  popularPosts: BlogPost[]
  recommendedPosts: BlogPost[]
}

export default function BlogSidebar({ popularPosts, recommendedPosts }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <aside className="space-y-8">
      {/* Search */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      >
        <h3 className="text-lg font-bold mb-4 text-dubai-navy">Search Articles</h3>
        <div className="flex gap-2">
          <Input
            placeholder="Search blog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-dubai-navy/20 focus:border-dubai-gold focus:ring-dubai-gold/20"
          />
          <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </m.div>

      {/* Categories */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      >
        <h3 className="text-lg font-bold mb-4 text-dubai-navy">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {["Storage Tips", "Guide", "How-To", "Organization", "Business", "Moving Tips"].map((category) => (
            <Link
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className="text-sm bg-dubai-gold/10 text-dubai-gold py-1 px-3 rounded-full hover:bg-dubai-gold hover:text-white transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </m.div>

      {/* Popular Posts */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      >
        <h3 className="text-lg font-bold mb-4 text-dubai-navy">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="flex gap-3 group">
              <div className="w-16 h-16 relative flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium line-clamp-2 group-hover:text-dubai-gold transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </m.div>

      {/* Recommended Posts */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      >
        <h3 className="text-lg font-bold mb-4 text-dubai-navy">Recommended For You</h3>
        <div className="space-y-4">
          {recommendedPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="flex gap-3 group">
              <div className="w-16 h-16 relative flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium line-clamp-2 group-hover:text-dubai-gold transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </m.div>

      {/* Newsletter Signup */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-dubai-navy p-6 rounded-xl text-white"
      >
        <h3 className="text-lg font-bold mb-2">Join Our Newsletter</h3>
        <p className="text-white/80 text-sm mb-4">
          Get the latest storage tips and exclusive offers directly to your inbox.
        </p>
        <form className="space-y-3">
          <Input
            placeholder="Your email address"
            type="email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-dubai-gold focus:ring-dubai-gold/20"
          />
          <Button className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-white">Subscribe</Button>
        </form>
      </m.div>
    </aside>
  )
}
