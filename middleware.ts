import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Permanently deleted blog slugs — return 410 Gone to tell Google they're permanently removed
const DELETED_BLOG_SLUGS = new Set([
  'musical-instrument-storage-dubai',
  'business-storage-units-dubai-save-costs',
  'antique-storage-dubai-preserve-valuables',
  'climate-controlled-storage-dubai',
  'electronics-storage-dubai-gadget-device',
  'seasonal-storage-dubai-summer-winter',
  'vehicle-storage-dubai-cars-bikes-boats',
  'textile-storage-dubai-fabric-material',
  'storage-small-businesses-dubai-startups',
  'document-storage-solutions-dubai-businesses',
  'event-storage-dubai-equipment-decorations',
  'photography-equipment-storage-dubai',
  'library-storage-dubai-book-archive',
  'climate-controlled-storage-benefits',
  'baby-items-storage-dubai-nursery',
  'emergency-storage-dubai-last-minute',
])

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Return 410 Gone for permanently deleted blog posts
  // This signals to Google that the content is gone and stops re-crawling
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '').replace(/\/$/, '')
    if (DELETED_BLOG_SLUGS.has(slug)) {
      return new NextResponse(null, { status: 410 })
    }
  }

  // Check if the request is for an admin route (excluding login page and API routes)
  if (pathname.startsWith('/admin') &&
      !pathname.startsWith('/admin/login') &&
      !pathname.startsWith('/api/admin')) {

    const token = request.cookies.get('admin-token')

    if (!token || !token.value) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // For Edge Runtime, we can't verify JWT here
    // The verification will be done in the dashboard layout
    // This is a basic check for token existence only
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/blog/:path*']
}