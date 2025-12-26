"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EditorWrapper from "@/components/admin/editor-wrapper"
import ImageUpload from "@/components/admin/image-upload"

export default function NewBlogPost() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [formData, setFormData] = useState({
    title: "",
    metaTitle: "",
    metaDescription: "",
    excerpt: "",
    content: "",
    author: "SafeStorage Team",
    category: "Storage Tips",
    image: "",
    readTime: "5 min read",
    tags: "",
  })

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
      // Create FormData to handle file uploads
      const submitData = new FormData()
      submitData.append('title', formData.title)
      submitData.append('content', formData.content)
      submitData.append('meta_title', formData.metaTitle || formData.title)
      submitData.append('meta_description', formData.metaDescription)
      submitData.append('tags', formData.tags)
      submitData.append('author', formData.author)
      submitData.append('category', formData.category)
      submitData.append('featured_image', formData.image)
      submitData.append('excerpt', formData.excerpt)
      
      // Add multiple images to FormData
      selectedImages.forEach((image, index) => {
        submitData.append('images', image)
      })
      
      // Call the API to save to backend
      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: submitData, // Send as FormData, not JSON
      })

      const data = await response.json()
      
      if (data.status === 'success') {
        setSuccess(true)
        setTimeout(() => {
          router.push("/admin/dashboard/blogs")
        }, 2000)
      } else {
        alert(data.message || 'Failed to create blog post')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to create blog post')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Create New Blog Post</h2>
        <p className="mt-2 text-gray-600">Add a new blog post to your website</p>
      </div>

      {success && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Blog post created successfully! Redirecting...
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
                      placeholder="e.g., 5 min read"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <ImageUpload
                      value={formData.image}
                      onChange={(value) => handleChange("image", value)}
                      label="Featured Image URL"
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="imageFiles">Upload Blog Images</Label>
                    <Input
                      id="imageFiles"
                      type="file"
                      multiple
                      accept="image/jpg,image/jpeg,image/png,image/gif"
                      onChange={handleImageUpload}
                      className="cursor-pointer"
                    />
                    <p className="text-xs text-gray-600">You can select multiple images (JPG, JPEG, PNG, GIF)</p>
                    
                    {selectedImages.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium">Selected Images ({selectedImages.length}):</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {selectedImages.map((image, index) => (
                            <div key={index} className="relative">
                              <img
                                src={URL.createObjectURL(image)}
                                alt={`Preview ${index + 1}`}
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
                            dangerouslySetInnerHTML={{ __html: formData.content || '<p class="text-gray-400">Start writing to see preview...</p>' }}
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
                {isLoading ? "Creating..." : "Create Blog Post"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}