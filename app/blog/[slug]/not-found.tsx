import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BlogNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4 text-dubai-navy">Blog Post Not Found</h1>
      <p className="text-lg text-dubai-navy/70 mb-8 max-w-md">
        The blog post you're looking for doesn't exist or has been moved.
      </p>
      <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
    </div>
  )
}
