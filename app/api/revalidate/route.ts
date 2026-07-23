import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// On-demand revalidation of the blog pages. Called by the blog-sync job after it
// pulls new/edited posts into the local DB, so changes appear immediately instead
// of waiting for the ISR window. Protected by REVALIDATE_SECRET.
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ status: 'error', message: 'Invalid secret' }, { status: 401 })
  }

  try {
    revalidatePath('/blog')
    revalidatePath('/blog/[slug]', 'page')
    revalidatePath('/sitemap.xml')
    return NextResponse.json({ status: 'success', revalidated: true })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ status: 'error', message: 'Revalidation failed' }, { status: 500 })
  }
}
