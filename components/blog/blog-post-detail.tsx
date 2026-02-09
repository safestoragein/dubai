"use client"

import { useState, useEffect } from "react"
import { m } from "framer-motion"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import LikeButton from "./like-button"
import ShareButtons from "./share-buttons"

// Helper function to construct image URL from endpoint data
function constructImageUrl(postImages: string | null | undefined): string {
  if (!postImages) return "/blog-placeholder.jpg"

  // If it's already a full URL, return as is
  if (postImages.startsWith('http://') || postImages.startsWith('https://')) {
    return postImages
  }

  // If it starts with "post_images/", construct full URL
  if (postImages.startsWith('post_images/')) {
    return `https://safestorage.in/${postImages}`
  }

  // Otherwise assume it's just the filename
  return `https://safestorage.in/post_images/${postImages}`
}

// Generate consistent likes/views based on post ID (deterministic)
function getConsistentLikes(postId: number): number {
  const hash = ((postId * 2654435761) % 100) + 50
  return hash
}

function getConsistentViews(postId: number): number {
  const hash = ((postId * 1597334677) % 400) + 100
  return hash
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  slug: string
  author: { name: string; avatar?: string; role?: string }
  categories: string[]
  image?: string
  readTime?: string
  likes: number
  views: number
  comments?: any[]
  date: string
  tags?: string[]
}

// Function to format blog content with proper spacing and structure
function formatBlogContent(content: string): string {
  // Remove excessive whitespace and clean up the content
  let formattedContent = content
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove triple line breaks
    .replace(/([.!?])\s*\n/g, '$1</p><p>') // Convert sentences to paragraphs
    .replace(/\n\n+/g, '</p><p>') // Convert double line breaks to paragraphs
    .trim()
  
  // Wrap content in paragraph tags if not already wrapped
  if (!formattedContent.startsWith('<p>')) {
    formattedContent = `<p>${formattedContent}</p>`
  }
  
  // Add styling classes for better readability
  formattedContent = formattedContent
    .replace(/<h1/g, '<h1 class="text-3xl font-bold mb-6 mt-8 text-dubai-navy"')
    .replace(/<h2/g, '<h2 class="text-2xl font-bold mb-4 mt-6 text-dubai-navy"')
    .replace(/<h3/g, '<h3 class="text-xl font-semibold mb-3 mt-5 text-dubai-navy"')
    .replace(/<h4/g, '<h4 class="text-lg font-semibold mb-2 mt-4 text-dubai-navy"')
    .replace(/<p>/g, '<p class="mb-4 text-gray-700 leading-relaxed text-base">')
    .replace(/<ul/g, '<ul class="list-disc pl-6 mb-4 space-y-2"')
    .replace(/<ol/g, '<ol class="list-decimal pl-6 mb-4 space-y-2"')
    .replace(/<li/g, '<li class="text-gray-700 leading-relaxed"')
    .replace(/<blockquote/g, '<blockquote class="border-l-4 border-dubai-gold pl-4 py-2 mb-4 italic text-gray-600"')
    .replace(/<strong/g, '<strong class="font-semibold text-dubai-navy"')
    .replace(/<em/g, '<em class="italic text-gray-600"')
  
  return formattedContent
}

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function BlogPostDetail({ slug }: { slug: string }) {
  const [mounted, setMounted] = useState(false)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const [relatedImageErrors, setRelatedImageErrors] = useState<Record<number, boolean>>({})

  useEffect(() => {
    // Protect text selection from being cleared by third-party scripts
    const protectSelection = () => {
      const blogContent = document.querySelector('.blog-content')
      if (!blogContent) return

      // Prevent any script from clearing selection
      const originalRemoveAllRanges = window.getSelection()?.removeAllRanges
      if (window.getSelection() && originalRemoveAllRanges) {
        window.getSelection()!.removeAllRanges = function() {
          const selection = window.getSelection()
          if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0)
            const container = range.commonAncestorContainer
            const isInBlogContent = blogContent.contains(container.nodeType === 3 ? container.parentNode : container)

            if (!isInBlogContent && originalRemoveAllRanges) {
              originalRemoveAllRanges.call(this)
            }
          } else if (originalRemoveAllRanges) {
            originalRemoveAllRanges.call(this)
          }
        }
      }
    }

    protectSelection()
    setMounted(true)

    const fetchBlogPost = async () => {
      try {
        // Use individual blog API endpoint
        const response = await fetch(`/api/blogs/${slug}`, {
          cache: 'no-store'
        })
        const data = await response.json()

        // API returns { status: 'success', data: {...} } for single blog
        if (data.status !== 'success' || !data.data) {
          return
        }

        const blog = data.data

        if (blog) {
          const title = blog.title || blog.seo_title || 'Untitled'

          const postId = parseInt(blog.post_id) || 0
          const currentPost = {
            id: postId,
            slug: generateSlug(title),
            title: title,
            excerpt: blog.seo_desc || '',
            content: blog.description || '',
            author: { name: 'SafeStorage Team' },
            categories: [blog.post_category || 'Storage Tips'],
            date: blog.created_at || new Date().toISOString(),
            image: constructImageUrl(blog.post_images),
            readTime: "5 min read",
            likes: getConsistentLikes(postId),
            views: getConsistentViews(postId),
            comments: [],
            tags: blog.tags ? (Array.isArray(blog.tags) ? blog.tags : blog.tags.split(',').map((t: string) => t.trim())) : []
          }
          setPost(currentPost)

          // Fetch related posts
          fetchRelatedPosts(currentPost.id, currentPost.categories[0])
        }
      } catch (error) {
        console.error('Error fetching blog:', error)
      } finally {
        setLoading(false)
      }
    }

    const fetchRelatedPosts = async (currentPostId: number, category: string) => {
      try {
        const response = await fetch('/api/blogs/fetch', {
          cache: 'no-store'
        })
        const data = await response.json()

        if (data.status === 'success' && Array.isArray(data.data)) {
          const allPosts = data.data
            .filter((blog: any) => parseInt(blog.post_id) !== currentPostId)
            .map((blog: any) => {
              const blogTitle = blog.title || blog.seo_title || 'Untitled'
              const blogPostId = parseInt(blog.post_id) || 0
              return {
                id: blogPostId,
                slug: generateSlug(blogTitle),
                title: blogTitle,
                excerpt: blog.seo_desc || '',
                content: blog.description || '',
                author: { name: 'SafeStorage Team' },
                categories: [blog.post_category || 'Storage Tips'],
                date: blog.created_at || new Date().toISOString(),
                image: constructImageUrl(blog.post_images),
                readTime: "5 min read",
                likes: getConsistentLikes(blogPostId),
                views: getConsistentViews(blogPostId),
                comments: [],
                tags: blog.tags ? (Array.isArray(blog.tags) ? blog.tags : blog.tags.split(',').map((t: string) => t.trim())) : []
              }
            })

          // Prioritize posts from the same category
          const sameCategory = allPosts.filter((p: BlogPost) => p.categories[0] === category)
          const otherPosts = allPosts.filter((p: BlogPost) => p.categories[0] !== category)

          // Take up to 2 related posts (prioritize same category)
          const related = [...sameCategory, ...otherPosts].slice(0, 2)
          setRelatedPosts(related)
        }
      } catch (error) {
        console.error('Error fetching related posts:', error)
      }
    }

    fetchBlogPost()
  }, [slug])

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
        <m.div
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
          </div>
        </m.div>

        {/* Featured Image */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 relative rounded-xl overflow-hidden bg-gray-100"
        >
          <div className="aspect-video relative">
            <Image
              src={imageError ? "/blog-placeholder.jpg" : (post.image || "/blog-placeholder.jpg")}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              className="object-cover"
              priority
              onError={() => setImageError(true)}
            />
          </div>
        </m.div>

        {/* Post Content */}
        <div className="mb-12" onMouseDown={(e) => e.stopPropagation()} onMouseUp={(e) => e.stopPropagation()}>
          <div
            className="blog-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatBlogContent(post.content) }}
            onSelectStart={(e) => e.stopPropagation()}
            style={{
              userSelect: 'text',
              WebkitUserSelect: 'text',
              MozUserSelect: 'text',
              msUserSelect: 'text'
            }}
          />
        </div>

        {/* Author Info */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-50 p-6 rounded-xl mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden bg-dubai-gold/10">
              <div className="h-16 w-16 flex items-center justify-center bg-dubai-gold/20 text-dubai-navy font-bold text-xl">
                {post.author.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-dubai-navy">{post.author.name}</h3>
              <p className="text-dubai-navy/60">Storage Expert</p>
            </div>
          </div>
        </m.div>

        {/* Social Interactions */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <LikeButton postId={post.id.toString()} initialLikes={post.likes} />
          </div>
          <div className="md:w-1/2">
            <ShareButtons url={`/blog/${slug}`} title={post.title} />
          </div>
        </div>

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-50 p-6 rounded-xl mb-12"
          >
            <h3 className="text-lg font-bold text-dubai-navy mb-4 flex items-center">
              <Tag className="h-5 w-5 mr-2 text-dubai-gold" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-dubai-gold/30 text-dubai-gold bg-dubai-gold/5 hover:bg-dubai-gold/10 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
          </m.div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-dubai-navy">You Might Also Like</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-[380px] flex flex-col">
                    <div className="relative h-48 bg-gray-200 flex-shrink-0">
                      <Image
                        src={relatedImageErrors[relatedPost.id] ? "/blog-placeholder.jpg" : (relatedPost.image || "/blog-placeholder.jpg")}
                        alt={relatedPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                        onError={() => setRelatedImageErrors(prev => ({...prev, [relatedPost.id]: true}))}
                      />
                    </div>
                    <div className="p-4 flex-1 overflow-y-auto">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-0 mb-2">
                        {relatedPost.categories[0]}
                      </Badge>
                      <h3 className="font-bold text-lg text-dubai-navy line-clamp-2 mb-2">{relatedPost.title}</h3>
                      <p className="text-dubai-navy/60 text-sm line-clamp-3">{relatedPost.excerpt}</p>
                      <div className="flex items-center mt-3 text-sm text-dubai-navy/50">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{formatDate(relatedPost.date)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
