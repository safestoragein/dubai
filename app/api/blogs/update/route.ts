import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { updateBlog } from '@/lib/blog-db'
import { saveBlogImage } from '@/lib/blog-upload'

// Multipart update from the admin editor. Writes to the local EC2 MariaDB and,
// if a new image is uploaded, saves it to the blog-images dir.
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const postId = parseInt((formData.get('id') as string) || '')
    if (!postId) {
      return NextResponse.json({ status: 'error', message: 'Missing blog id' }, { status: 400 })
    }

    const fields: Record<string, string | undefined> = {
      title: (formData.get('title') as string) || undefined,
      description: (formData.get('content') as string) ?? undefined,
      seo_title: (formData.get('meta_title') as string) ?? undefined,
      seo_desc: (formData.get('meta_description') as string) ?? undefined,
      tags: (formData.get('tags') as string) ?? undefined,
      post_category: (formData.get('category') as string) ?? undefined,
      status: (formData.get('status') as string) ?? undefined,
    }

    // Only replace the image if a new one was uploaded.
    const newImage = formData
      .getAll('image[0]')
      .concat(formData.getAll('images'))
      .find((v): v is File => v instanceof File && v.size > 0)
    if (newImage) {
      fields.post_images = await saveBlogImage(newImage)
    }

    const ok = await updateBlog(postId, fields)

    // Without this the edit sits in the DB while /blog and /blog/[slug] keep
    // serving their cached HTML until the 600s ISR window lapses.
    if (ok) {
      revalidatePath('/blog')
      revalidatePath('/blog/[slug]', 'page')
      revalidatePath('/sitemap.xml')
    }

    return NextResponse.json({
      status: ok ? 'success' : 'error',
      message: ok ? 'Blog post updated' : 'No changes applied',
      revalidated: ok,
    })
  } catch (error) {
    console.error('Error updating blog:', error)
    return NextResponse.json({ status: 'error', message: 'Failed to update blog post' }, { status: 500 })
  }
}
