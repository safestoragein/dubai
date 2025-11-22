"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import EditorWrapper from "@/components/admin/editor-wrapper"
import ImageUpload from "@/components/admin/image-upload"

export default function EditBlogPost() {
  const router = useRouter()
  const params = useParams()
  const blogId = params.id as string
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [success, setSuccess] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    image: "",
    readTime: "",
    slug: "",
    meta_title: "",
    meta_description: "",
    tags: "",
    status: "active",
    is_published: true,
    is_featured: false,
    views: 0,
    likes: 0,
  })

  useEffect(() => {
    fetchBlogData()
  }, [blogId])

  const fetchBlogData = async () => {
    try {
      setIsFetching(true)
      // Fetch blog by ID using the get_blog_content endpoint
      const response = await fetch(`https://safestorage.in/back/app/get_blog_content_by_id/${blogId}`)
      const data = await response.json()
      
      if (data.status === 'success' && data.data) {
        const blog = data.data
        const extraData = blog.extra_data || {}
        
        setFormData({
          title: blog.title || blog.meta_title || "",
          excerpt: blog.meta_description || "",
          content: blog.content || "",
          author: blog.author || extraData.author || "SafeStorage Team",
          category: blog.category || extraData.category || "Storage Tips",
          image: blog.featured_image || extraData.featured_image || "",
          readTime: blog.read_time ? `${blog.read_time}` : extraData.read_time || "5",
          slug: blog.slug || "",
          meta_title: blog.meta_title || "",
          meta_description: blog.meta_description || "",
          tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : (blog.tags || ""),
          status: blog.status || "active",
          is_published: blog.is_published !== false,
          is_featured: blog.is_featured || false,
          views: blog.views || extraData.views || 0,
          likes: blog.likes || extraData.likes || 0,
        })
      } else {
        setNotFound(true)
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
      setNotFound(true)
    } finally {
      setIsFetching(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const updateData = new FormData()
      updateData.append('id', blogId)
      updateData.append('title', formData.title)
      updateData.append('content', formData.content)
      updateData.append('meta_title', formData.meta_title || formData.title)
      updateData.append('meta_description', formData.meta_description || formData.excerpt)
      updateData.append('slug', formData.slug)
      updateData.append('tags', formData.tags)
      updateData.append('status', formData.status)
      updateData.append('author', formData.author)
      updateData.append('category', formData.category)
      updateData.append('featured_image', formData.image)
      updateData.append('excerpt', formData.excerpt)
      updateData.append('is_published', formData.is_published.toString())
      updateData.append('is_featured', formData.is_featured.toString())
      updateData.append('read_time', formData.readTime)
      updateData.append('views', formData.views.toString())
      updateData.append('likes', formData.likes.toString())

      const response = await fetch('https://safestorage.in/back/app/update_blog_content', {
        method: 'POST',
        body: updateData,
      })

      const data = await response.json()
      
      if (data.status === 'success') {
        setSuccess(true)
        setTimeout(() => {
          router.push("/admin/dashboard/blogs")
        }, 2000)
      } else {
        alert(data.message || 'Failed to update blog post')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to update blog post')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string, value: string | boolean | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-gray-500">Loading blog post...</div>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertDescription>
            Blog post not found. Please check the URL or go back to the blog list.
          </AlertDescription>
        </Alert>
        <Button onClick={() => router.push("/admin/dashboard/blogs")}>
          Back to Blogs
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Edit Blog Post</h2>
          <p className="mt-2 text-gray-600">Update your existing blog post</p>
        </div>
        <Button
          variant="outline"
          onClick={() => router.push("/admin/dashboard/blogs")}
        >
          Cancel
        </Button>
      </div>

      {success && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Blog post updated successfully! Redirecting...
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Blog Post Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full max-w-[600px] grid-cols-3">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="seo">SEO & Meta</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      required
                      placeholder="Enter blog title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => handleChange("author", e.target.value)}
                      placeholder="Author name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Storage Tips">Storage Tips</SelectItem>
                        <SelectItem value="Moving Guide">Moving Guide</SelectItem>
                        <SelectItem value="Business Storage">Business Storage</SelectItem>
                        <SelectItem value="Organization">Organization</SelectItem>
                        <SelectItem value="News">News</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="readTime">Read Time (minutes)</Label>
                    <Input
                      id="readTime"
                      type="number"
                      value={formData.readTime}
                      onChange={(e) => handleChange("readTime", e.target.value)}
                      placeholder="5"
                      min="1"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => handleChange("slug", e.target.value)}
                      placeholder="URL slug"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => handleChange("tags", e.target.value)}
                      placeholder="storage, tips, organization"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <ImageUpload
                      value={formData.image}
                      onChange={(value) => handleChange("image", value)}
                      label="Featured Image"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => handleChange("excerpt", e.target.value)}
                      required
                      placeholder="Brief description of the blog post"
                      rows={3}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="seo" className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="meta_title">SEO Title</Label>
                    <Input
                      id="meta_title"
                      value={formData.meta_title}
                      onChange={(e) => handleChange("meta_title", e.target.value)}
                      placeholder="SEO optimized title"
                    />
                    <p className="text-sm text-gray-500">
                      Leave empty to use the regular title. Recommended length: 50-60 characters
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meta_description">SEO Description</Label>
                    <Textarea
                      id="meta_description"
                      value={formData.meta_description}
                      onChange={(e) => handleChange("meta_description", e.target.value)}
                      placeholder="SEO meta description"
                      rows={3}
                    />
                    <p className="text-sm text-gray-500">
                      Leave empty to use the excerpt. Recommended length: 150-160 characters
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="is_published" 
                        checked={formData.is_published}
                        onCheckedChange={(checked) => handleChange("is_published", checked as boolean)}
                      />
                      <Label htmlFor="is_published">Published</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="is_featured" 
                        checked={formData.is_featured}
                        onCheckedChange={(checked) => handleChange("is_featured", checked as boolean)}
                      />
                      <Label htmlFor="is_featured">Featured Post</Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="views">Views</Label>
                    <Input
                      id="views"
                      type="number"
                      value={formData.views}
                      onChange={(e) => handleChange("views", parseInt(e.target.value) || 0)}
                      min="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="likes">Likes</Label>
                    <Input
                      id="likes"
                      type="number"
                      value={formData.likes}
                      onChange={(e) => handleChange("likes", parseInt(e.target.value) || 0)}
                      min="0"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="space-y-2">
              <Label>Content *</Label>
              <Tabs defaultValue="editor" className="w-full">
                <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                  <TabsTrigger value="editor">Editor</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="editor" className="mt-4">
                  <EditorWrapper
                    value={formData.content}
                    onChange={(value) => handleChange("content", value)}
                    placeholder="Start writing your amazing blog post..."
                    height="500px"
                  />
                </TabsContent>
                <TabsContent value="preview" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardDescription>This is how your blog post will appear</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: formData.content || '<p class="text-gray-400">No content to preview...</p>' }}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin/dashboard/blogs")}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Blog Post"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}