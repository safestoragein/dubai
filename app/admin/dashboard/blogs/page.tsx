"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"


// /api/blogs proxies safestorage.in/get_blog_content -- the same feed the blog
// pages, the sitemap and the indexer read.
//
// This page used to read https://safestorage.in/back/app/get_blog_content
// directly, which is a different system altogether: 17 rows, last written
// 2025-12-31, and a schema of blog_id/content/meta_title/slug rather than
// post_id/title/description. None of the Dubai posts have ever been in it, which
// is why the list stopped at December and newly edited posts never appeared.
//
// It cannot be swapped for a direct browser fetch of the correct feed: that URL
// sends no Access-Control-Allow-Origin, so the request is blocked ("Failed to
// fetch"), whereas /back/app/* sends `*` -- which is very likely how this page
// came to be pointed at the wrong system in the first place. Going through our
// own route also means the 8.5 MB of article bodies stays on the server.
const FEED = "/api/blogs"

export default function BlogsManagement() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(FEED, { cache: "no-store" })
      if (!res.ok) throw new Error(`feed returned HTTP ${res.status}`)

      const body = await res.json()
      if (body.status !== "success" || !Array.isArray(body.data)) {
        throw new Error(body.error || "unexpected response shape")
      }

      // The route already filtered to published rows, sorted newest first and
      // mapped through toBlogPost, so the slug here is the address the post
      // really lives at. Only the display shape is assembled below.
      setBlogs(
        body.data.map((p: any) => ({
          id: p.id,
          slug: p.slug,
          title: p.title,
          excerpt: p.excerpt,
          author: { name: p.author },
          category: p.category,
          categories: [p.category],
          date: p.date,
          featured_image: p.image,
          views: p.views,
          likes: p.likes,
          status: "active",
          is_published: true,
          is_featured: false,
        }))
      )
    } catch (e) {
      setError((e as Error).message)
      setBlogs([])
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="space-y-6">
      {/* No create/edit/delete here. Posts are authored in the safestorage.in
          dashboard and reach the site through get_blog_content; this page is the
          read-only view of what that feed is serving. The buttons that used to
          sit here wrote to a different content store, so a post "created" from
          this screen was saved somewhere the site never reads. */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Blog Posts</h2>
        <p className="mt-2 text-gray-600">
          Read-only view of the posts served from safestorage.in/get_blog_content.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Blog Posts</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              <b>Could not load posts.</b> {error}
            </div>
          )}
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-2 text-gray-600">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No posts returned by the feed. That points at safestorage.in, not at
                this dashboard.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Title</th>
                    <th className="text-left py-3 px-4">Author</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Category</th>
                    <th className="text-left py-3 px-4">Views</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="font-medium">{blog.title || 'Untitled'}</div>
                        <div className="text-sm text-gray-500 line-clamp-2">
                          {blog.excerpt || 'No excerpt available'}
                        </div>
                        {blog.is_featured && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                            Featured
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">{blog.author.name}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          blog.is_published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {blog.is_published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {blog.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{blog.views || 0}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {new Date(blog.date).toLocaleDateString()}
                      </td>
                      {/* "View" rather than "Edit": the edit screen reads and
                          writes /back/app/*, the 17-row system these posts have
                          never been in, so it cannot load any of them. Posts are
                          authored in the safestorage.in dashboard; this page is
                          the read-only view of what the feed is actually
                          serving. */}
                      <td className="py-3 px-4">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline">View</Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}