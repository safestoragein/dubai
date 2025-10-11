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
      const response = await fetch('/api/blogs')
      const data = await response.json()
      
      if (data.status === 'success' && data.data) {
        // Process the data to match our format
        const processedBlogs = data.data.map((blog: any) => {
          const extraData = blog.extra_data ? JSON.parse(blog.extra_data) : {}
          return {
            id: blog.blog_id,
            slug: blog.slug,
            title: blog.meta_title,
            excerpt: blog.meta_description,
            content: blog.content,
            author: { name: extraData.author || 'SafeStorage Team' },
            category: extraData.category || 'General',
            categories: [extraData.category || 'General'],
            date: extraData.created_at || new Date().toISOString(),
            featured_image: extraData.featured_image,
            views: extraData.views || 0,
            likes: extraData.likes || 0,
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

  const handleDelete = async (blogId: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await fetch(`/api/blogs/${blogId}`, {
          method: 'DELETE',
        })
        const data = await response.json()
        
        if (data.status === 'success') {
          setBlogs(blogs.filter(b => b.id !== blogId))
        } else {
          alert('Failed to delete blog post')
        }
      } catch (error) {
        console.error('Error deleting blog:', error)
        alert('Failed to delete blog post')
      }
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Title</th>
                  <th className="text-left py-3 px-4">Author</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium">{blog.title}</div>
                      <div className="text-sm text-gray-500">{blog.excerpt}</div>
                    </td>
                    <td className="py-3 px-4">{blog.author.name}</td>
                    <td className="py-3 px-4">{blog.date}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {blog.categories?.[0] || "General"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Link href={`/admin/dashboard/blogs/edit/${blog.id}`}>
                          <Button size="sm" variant="outline">Edit</Button>
                        </Link>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-red-600 hover:text-red-700"
                          onClick={() => handleDelete(blog.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}