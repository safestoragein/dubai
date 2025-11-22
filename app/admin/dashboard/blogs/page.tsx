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
      // Use the get_blog_content endpoint to get all blogs with full content
      const response = await fetch('https://safestorage.in/back/app/get_blog_content')
      const data = await response.json()
      
      if (data.status === 'success' && data.data) {
        // Get only the posts from the response
        const posts = data.data.posts || data.data.all_content?.filter((item: any) => item.content_type === 'post') || []
        
        // Process the data to match our format
        const processedBlogs = posts.map((blog: any) => {
          return {
            id: blog.id,
            slug: blog.slug,
            title: blog.meta_title || blog.title,
            excerpt: blog.meta_description,
            content: blog.content,
            author: { name: blog.author || 'SafeStorage Team' },
            category: blog.category || 'General',
            categories: [blog.category || 'General'],
            date: blog.created_at || new Date().toISOString(),
            featured_image: blog.featured_image,
            views: blog.views || 0,
            likes: blog.likes || 0,
            status: blog.status || 'active',
            is_published: blog.is_published !== false,
            is_featured: blog.is_featured || false,
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
          )}
        </CardContent>
      </Card>
    </div>
  )
}