import BlogPostDetail from "@/components/blog/blog-post-detail"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getPostBySlug, blogPosts } from "@/data/blog-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | SafeStorage Dubai",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | SafeStorage Dubai Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(", ") || "",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

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
