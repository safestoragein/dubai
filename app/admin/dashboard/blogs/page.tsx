"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function BlogsManagement() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      // Local EC2 DB (feed-shaped array): post_id, title, post_category,
      // post_images, description, seo_title, seo_desc, tags, status, created_at.
      const response = await fetch('/api/blogs')
      const data = await response.json()
      const posts = Array.isArray(data) ? data : (Array.isArray(data?.data) ? data.data : [])

      const processedBlogs = posts.map((blog: any) => ({
        id: blog.post_id,
        slug: '',
        title: blog.title || blog.seo_title || 'Untitled',
        excerpt: blog.seo_desc || '',
        content: blog.description || '',
        author: { name: 'SafeStorage Team' },
        category: blog.post_category || 'General',
        categories: [blog.post_category || 'General'],
        date: blog.created_at || new Date().toISOString(),
        featured_image: blog.post_images || '',
        views: 0,
        likes: 0,
        status: blog.status || '1',
        is_published: true,
        is_featured: false,
      }))

      setBlogs(processedBlogs)
    } catch (error) {
      console.error('Error fetching blogs:', error)
      setBlogs([])
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Blog Management</h2>
          <p className="mt-2 text-gray-600">Manage your blog posts</p>
        </div>
        <Link href="/admin/dashboard/blogs/new">
          <Button>Create New Post</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Blog Posts</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-2 text-gray-600">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No blog posts found.</p>
              <Link href="/admin/dashboard/blogs/new">
                <Button className="mt-4">Create your first blog post</Button>
              </Link>
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
                      <td className="py-3 px-4">
                        <Link href={`/admin/dashboard/blogs/edit/${blog.id}`}>
                          <Button size="sm" variant="outline">Edit</Button>
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