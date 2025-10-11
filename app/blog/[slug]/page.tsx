import BlogPostDetail from "@/components/blog/blog-post-detail"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blogs/${params.slug}`)
    const data = await response.json()
    
    if (data.status !== 'success' || !data.data) {
      return {
        title: "Blog Post Not Found | SafeStorage Dubai",
        description: "The requested blog post could not be found.",
      }
    }
    
    const post = data.data
    const extraData = post.extra_data ? 
      (typeof post.extra_data === 'string' ? JSON.parse(post.extra_data) : post.extra_data) : {}
    
    return {
      title: `${post.meta_title} | SafeStorage Dubai Blog`,
      description: post.meta_description,
      keywords: post.tags || "",
      openGraph: {
        title: post.meta_title,
        description: post.meta_description,
        images: extraData.featured_image ? [
          {
            url: extraData.featured_image,
            width: 1200,
            height: 630,
            alt: post.meta_title,
          },
        ] : [],
      },
    }
  } catch (error) {
    return {
      title: "Blog | SafeStorage Dubai",
      description: "Expert storage tips and guides from SafeStorage Dubai",
    }
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BlogPostDetail slug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
