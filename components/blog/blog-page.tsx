"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, ChevronRight, User, ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import LikeButtonMini from "./like-button-mini"
// If there are any Clock imports from icons.tsx, update them
import { Clock } from "@/components/icons"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
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

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const allCategories = ["Storage Tips", "Moving Guide", "Business Storage", "Organization", "News"]
  
  useEffect(() => {
    fetchBlogs()
  }, [])
  
  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs')
      const data = await response.json()
      
      if (data.status === 'success' && data.data) {
        const processedBlogs = data.data.map((blog: any) => {
          const extraData = blog.extra_data ? 
            (typeof blog.extra_data === 'string' ? JSON.parse(blog.extra_data) : blog.extra_data) : {}
          return {
            id: blog.blog_id,
            slug: blog.slug,
            title: blog.meta_title,
            excerpt: blog.meta_description,
            content: blog.content,
            author: { name: extraData.author || 'SafeStorage Team' },
            categories: [extraData.category || 'General'],
            date: extraData.created_at || new Date().toISOString(),
            image: extraData.featured_image,
            readTime: extraData.read_time ? `${extraData.read_time} min read` : "5 min read",
            likes: extraData.likes || 0,
            views: extraData.views || 0,
            comments: []
          }
        })
        setBlogs(processedBlogs)
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }
  
  const filteredBlogs = selectedCategory === "all" 
    ? blogs
    : blogs.filter(blog => blog.categories[0] === selectedCategory)
    
  const popularPosts = [...blogs].sort((a, b) => b.views - a.views).slice(0, 5)
  const recommendedPosts = [...blogs].sort((a, b) => b.likes - a.likes).slice(0, 5)
  const featuredPosts = blogs

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
              className="pl-10 py-6 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dubai-navy/50" />
          </div>

          {/* Featured Posts */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-dubai-navy">Featured Articles</h2>
              <Link href="/blog/category/all" className="text-dubai-gold flex items-center hover:underline">
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.slice(0, 4).map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Tabs for Different Categories */}
          <div className="mb-12">
            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                {allCategories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                {loading ? (
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-dubai-gold"></div>
                  </div>
                ) : (
                  blogs.map((post) => (
                    <BlogPostRow key={post.id} post={post} />
                  ))
                )}
              </TabsContent>

              {allCategories.map((category) => (
                <TabsContent key={category} value={category} className="space-y-8">
                  {loading ? (
                    <div className="text-center py-12">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-dubai-gold"></div>
                    </div>
                  ) : (
                    blogs
                      .filter((post) => post.categories.includes(category))
                      .map((post) => (
                        <BlogPostRow key={post.id} post={post} />
                      ))
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="border-dubai-gold text-dubai-gold hover:bg-dubai-gold/10">
              Load More Articles
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Popular Posts Section */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-dubai-navy">Popular Posts</h3>
            <div className="space-y-4">
              {popularPosts.slice(0, 4).map((post) => (
                <SidebarPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Recommended Posts Section */}
          <div className="bg-dubai-gold/5 rounded-xl p-6 mb-8 border border-dubai-gold/20">
            <h3 className="text-xl font-bold mb-4 text-dubai-navy">Recommended For You</h3>
            <div className="space-y-4">
              {recommendedPosts.slice(0, 3).map((post) => (
                <SidebarPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-dubai-navy">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <Link key={category} href={`/blog/category/${category.toLowerCase()}`}>
                  <Badge variant="outline" className="hover:bg-dubai-gold/10 hover:text-dubai-gold cursor-pointer">
                    {category}
                  </Badge>
                </Link>
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

// Blog Post Card Component
function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
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
    </motion.div>
  )
}

// Blog Post Row Component
function BlogPostRow({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group grid md:grid-cols-3 gap-6 items-center"
    >
      <Link href={`/blog/${post.slug}`} className="md:col-span-1">
        <div className="relative h-40 overflow-hidden rounded-lg">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="md:col-span-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {post.categories.map((category) => (
            <Badge key={category} variant="outline" className="bg-dubai-gold/10 text-dubai-gold border-dubai-gold/20">
              {category}
            </Badge>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 group-hover:text-dubai-gold transition-colors">{post.title}</h3>
        </Link>
        <p className="text-dubai-navy/70 mb-3 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center text-sm text-dubai-navy/60 mb-3">
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
        <Link href={`/blog/${post.slug}`} className="text-dubai-gold flex items-center hover:underline">
          Read more <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </motion.div>
  )
}

// Sidebar Post Card Component
function SidebarPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="group flex gap-3 items-start">
      <Link href={`/blog/${post.slug}`} className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex-1">
        <Link href={`/blog/${post.slug}`}>
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
