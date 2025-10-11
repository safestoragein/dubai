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
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "SafeStorage Team",
    category: "Storage Tips",
    image: "",
    readTime: "5 min read",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate saving (in production, this would be an API call)
    setTimeout(() => {
      setSuccess(true)
      setIsLoading(false)
      setTimeout(() => {
        router.push("/admin/dashboard/blogs")
      }, 2000)
    }, 1000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
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

              <div className="space-y-2 md:col-span-2">
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
                          dangerouslySetInnerHTML={{ __html: formData.content || '<p class="text-gray-400">Start writing to see preview...</p>' }}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
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
                {isLoading ? "Creating..." : "Create Blog Post"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}