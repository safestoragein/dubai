"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Tag, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { getRandomBlogImage } from "@/lib/blog-images"
import LikeButton from "./like-button"
import ShareButtons from "./share-buttons"
import CommentSection from "./comment-section"

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
  tags?: string[]
}

export default function BlogPostDetail({ slug }: { slug: string }) {
  const [mounted, setMounted] = useState(false)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    fetchBlogPost()
  }, [slug])

  const fetchBlogPost = async () => {
    try {
      const response = await fetch('/api/blogs/fetch')
      const data = await response.json()
      
      if (data.status === 'success' && data.data) {
        // Find the blog post with matching slug
        const blog = data.data.find((b: any) => b.slug === slug)
        
        if (blog) {
          const extraData = blog.extra_data ? 
            (typeof blog.extra_data === 'string' ? JSON.parse(blog.extra_data) : blog.extra_data) : {}
          
          setPost({
            id: blog.id || blog.blog_id,
            slug: blog.slug,
            title: blog.meta_title,
            excerpt: blog.meta_description,
            content: blog.content,
            author: { name: extraData.author || 'SafeStorage Team' },
            categories: [extraData.category || 'General'],
            date: blog.created_at || extraData.created_at || new Date().toISOString(),
            image: extraData.featured_image || getRandomBlogImage(extraData.category, parseInt(blog.blog_id) || parseInt(blog.id)),
            readTime: extraData.read_time ? `${extraData.read_time}` : "5 min read",
            likes: extraData.likes || Math.floor(Math.random() * 100) + 50,
            views: extraData.views || Math.floor(Math.random() * 500) + 100,
            comments: [],
            tags: blog.tags ? blog.tags.split(',').map((t: string) => t.trim()) : []
          })
        }
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-dubai-gold"></div>
        <p className="mt-4 text-gray-600">Loading article...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/blog" className="text-dubai-gold flex items-center hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dubai-navy">{post.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories?.map((category, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600 border-0">
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-dubai-navy/60 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="h-4 w-4 mr-2" />
              <span>{post.comments?.length || 0} comments</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 relative rounded-xl overflow-hidden"
        >
          <div className="aspect-video relative">
            <Image
              src={post.image || "/placeholder.svg?height=600&width=1200"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Post Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-lg max-w-none mb-12 text-dubai-navy/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-50 p-6 rounded-xl mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image
                src={post.author.avatar || "/placeholder.svg?height=64&width=64"}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-dubai-navy">{post.author.name}</h3>
              <p className="text-dubai-navy/60">{post.author.role || "Author"}</p>
            </div>
          </div>
        </motion.div>

        {/* Social Interactions */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <LikeButton postId={post.id.toString()} initialLikes={post.likes} />
          </div>
          <div className="md:w-1/2">
            <ShareButtons url={`/blog/${slug}`} title={post.title} />
          </div>
        </div>

        {/* Comments Section */}
        <CommentSection postId={post.id.toString()} />

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-dubai-navy">You Might Also Like</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* This would typically be populated with related posts */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-dubai-navy/60 text-center">Related posts will appear here</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-dubai-navy/60 text-center">Related posts will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
