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
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [existingImages, setExistingImages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    title: "", // Page title (H1)
    metaTitle: "", // SEO meta title
    metaDescription: "", // SEO meta description
    excerpt: "",
    content: "",
    author: "",
    category: "",
    image: "",
    readTime: "",
    slug: "",
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
      console.log('Fetching blog data for ID:', blogId)
      
      // Fetch all blogs and find the specific one by ID
      const response = await fetch('https://safestorage.in/back/app/get_blog_content')
      const data = await response.json()
      
      console.log('All blogs response:', data)
      
      let blog = null
      
      // Handle direct array response
      if (Array.isArray(data)) {
        blog = data.find((item: any) => item.blog_id === blogId || item.id === blogId)
      } else if (data.status === 'success' && data.data) {
        // Handle wrapped response
        const allBlogs = data.data.all_content || data.data.posts || data.data
        if (Array.isArray(allBlogs)) {
          blog = allBlogs.find((item: any) => item.blog_id === blogId || item.id === blogId)
        }
      }
      
      console.log('Found blog:', blog)
      
      if (blog) {
        // Parse extra_data if it's a JSON string
        let extraData = {}
        if (blog.extra_data) {
          try {
            extraData = typeof blog.extra_data === 'string' ? JSON.parse(blog.extra_data) : blog.extra_data
          } catch (e) {
            console.warn('Could not parse extra_data:', e)
          }
        }
        
        console.log('Extra data:', extraData)
        
        // Check if blog has uploaded images
        if (blog.image) {
          const imageList = blog.image.split(',').filter((img: string) => img.trim())
          setExistingImages(imageList)
        }
        
        setFormData({
          title: (extraData as any).page_title || blog.meta_title || blog.title || "",
          metaTitle: blog.meta_title || "",
          metaDescription: blog.meta_description || "",
          excerpt: (extraData as any).excerpt || blog.meta_description || "",
          content: blog.content || "",
          author: (extraData as any).author || "SafeStorage Team",
          category: (extraData as any).category || "Storage Tips",
          image: (extraData as any).featured_image || "",
          readTime: (extraData as any).read_time ? `${(extraData as any).read_time}`.replace(' min read', '') : "5",
          slug: blog.slug || "",
          tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : (blog.tags || ""),
          status: blog.status || "active",
          is_published: (extraData as any).is_published !== false,
          is_featured: (extraData as any).is_featured || false,
          views: (extraData as any).views || 0,
          likes: (extraData as any).likes || 0,
        })
      } else {
        console.log('Blog not found with ID:', blogId)
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
    
    // Validation
    if (!formData.title || !formData.metaTitle || !formData.metaDescription || !formData.content) {
      alert('Please fill in all required fields: Page Title, Meta Title, Meta Description, and Content')
      return
    }
    
    if (formData.metaTitle.length > 60) {
      alert('Meta Title must be 60 characters or less')
      return
    }
    
    if (formData.metaDescription.length > 160) {
      alert('Meta Description must be 160 characters or less')
      return
    }
    
    setIsLoading(true)
    
    try {
      const updateData = new FormData()
      updateData.append('id', blogId)
      updateData.append('content', formData.content)
      updateData.append('meta_title', formData.metaTitle || formData.title)
      updateData.append('meta_description', formData.metaDescription)
      updateData.append('slug', formData.slug)
      updateData.append('tags', formData.tags)
      updateData.append('status', formData.status)
      
      // Create extra_data object
      const extraData = {
        author: formData.author,
        category: formData.category,
        featured_image: formData.image,
        excerpt: formData.excerpt,
        page_title: formData.title, // H1 title for the page
        read_time: formData.readTime + ' min read',
        is_published: formData.is_published,
        is_featured: formData.is_featured,
        views: formData.views,
        likes: formData.likes,
        updated_at: new Date().toISOString(),
        updated_by: 'admin'
      }
      
      updateData.append('extra_data', JSON.stringify(extraData))
      
      // Add new images to FormData if any
      if (selectedImages.length > 0) {
        selectedImages.forEach((image) => {
          updateData.append('image[]', image, image.name)
        })
      }
      
      // Add existing images to preserve them
      if (existingImages.length > 0) {
        updateData.append('existing_images', existingImages.join(','))
      }

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
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const fileArray = Array.from(files)
      setSelectedImages(prev => [...prev, ...fileArray])
    }
  }
  
  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index))
  }
  
  const removeExistingImage = (index: number) => {
    setExistingImages(prev => prev.filter((_, i) => i !== index))
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
            {/* SEO Section */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">SEO Settings</CardTitle>
                <CardDescription>These fields control how your blog appears in Google search results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-blue-800">Page Title (H1) *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    required
                    placeholder="Best Storage Tips for Dubai Homes"
                  />
                  <p className="text-xs text-blue-600">This appears as the main heading on your blog page</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="metaTitle" className="text-blue-800">SEO Meta Title *</Label>
                  <Input
                    id="metaTitle"
                    value={formData.metaTitle}
                    onChange={(e) => handleChange("metaTitle", e.target.value)}
                    required
                    placeholder="Best Storage Tips for Dubai Homes | SafeStorage Dubai"
                    maxLength={60}
                  />
                  <p className="text-xs text-blue-600">This appears in Google search results and browser tabs (max 60 chars)</p>
                  <div className="text-xs text-blue-600">
                    Characters: {formData.metaTitle.length}/60
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="metaDescription" className="text-blue-800">SEO Meta Description *</Label>
                  <Textarea
                    id="metaDescription"
                    value={formData.metaDescription}
                    onChange={(e) => handleChange("metaDescription", e.target.value)}
                    required
                    placeholder="Discover expert storage tips for Dubai homes. Learn how to maximize space, organize efficiently, and choose the right storage solutions."
                    rows={3}
                    maxLength={160}
                  />
                  <p className="text-xs text-blue-600">This appears under your title in Google search results (max 160 chars)</p>
                  <div className="text-xs text-blue-600">
                    Characters: {formData.metaDescription.length}/160
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-blue-800">Keywords/Tags</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => handleChange("tags", e.target.value)}
                    placeholder="storage tips, dubai, home organization"
                  />
                  <p className="text-xs text-blue-600">Separate keywords with commas</p>
                </div>
              </CardContent>
            </Card>

            {/* Content Section */}
            <Card>
              <CardHeader>
                <CardTitle>Blog Content</CardTitle>
                <CardDescription>Main content and blog details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => handleChange("author", e.target.value)}
                      placeholder="SafeStorage Team"
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
                    <Label htmlFor="readTime">Read Time</Label>
                    <Input
                      id="readTime"
                      value={formData.readTime}
                      onChange={(e) => handleChange("readTime", e.target.value)}
                      placeholder="e.g., 5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slug">URL Slug</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => handleChange("slug", e.target.value)}
                      placeholder="best-storage-tips-dubai"
                    />
                    <p className="text-xs text-gray-600">The URL path for this blog post</p>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <ImageUpload
                      value={formData.image}
                      onChange={(value) => handleChange("image", value)}
                      label="Featured Image URL"
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label>Blog Images</Label>
                    
                    {/* Show existing images */}
                    {existingImages.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Current Images:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {existingImages.map((image, index) => (
                            <div key={`existing-${index}`} className="relative">
                              <img
                                src={`https://safestorage.in/upload/blog_images/${image}`}
                                alt={`Existing ${index + 1}`}
                                className="w-full h-24 object-cover rounded border"
                              />
                              <button
                                type="button"
                                onClick={() => removeExistingImage(index)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Upload new images */}
                    <Label htmlFor="imageFiles">Upload New Images</Label>
                    <Input
                      id="imageFiles"
                      type="file"
                      multiple
                      accept="image/jpg,image/jpeg,image/png,image/gif"
                      onChange={handleImageUpload}
                      className="cursor-pointer"
                    />
                    <p className="text-xs text-gray-600">You can select multiple images (JPG, JPEG, PNG, GIF)</p>
                    
                    {/* Show newly selected images */}
                    {selectedImages.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">New Images ({selectedImages.length}):</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {selectedImages.map((image, index) => (
                            <div key={`new-${index}`} className="relative">
                              <img
                                src={URL.createObjectURL(image)}
                                alt={`New ${index + 1}`}
                                className="w-full h-24 object-cover rounded border"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                              >
                                ×
                              </button>
                              <p className="text-xs text-gray-600 mt-1 truncate">{image.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="excerpt">Blog Excerpt/Summary *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => handleChange("excerpt", e.target.value)}
                      required
                      placeholder="Write a brief summary of your blog post that will appear on the blog listing page..."
                      rows={3}
                    />
                    <p className="text-xs text-gray-600">This summary appears on blog listing pages and social media previews</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Settings Section */}
            <Card>
              <CardHeader>
                <CardTitle>Blog Settings</CardTitle>
                <CardDescription>Publication and advanced settings</CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Content Editor Section */}
            <Card>
              <CardHeader>
                <CardTitle>Blog Content Editor</CardTitle>
                <CardDescription>Write your blog post content here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label>Blog Content *</Label>
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
              </CardContent>
            </Card>

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