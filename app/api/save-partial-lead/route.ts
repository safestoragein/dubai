import { NextRequest, NextResponse } from 'next/server'

// Partial / abandoned-lead capture for the get-quote form.
//
// The browser calls this same-origin route (via navigator.sendBeacon or a
// keepalive fetch) the moment a visitor who has typed any one of name / phone /
// email leaves the quote page. We proxy server-side to the PHP backend so the
// write still completes even after the page has unloaded (a cross-origin beacon
// straight to safestorage.in would be killed by CORS / the page teardown).

const BACKEND_URL = 'https://safestorage.in/back/app/save_dubai_partial_lead'

export async function POST(request: NextRequest) {
  try {
    // Accept JSON (sendBeacon blob) or form-encoded (keepalive fetch).
    let data: Record<string, string> = {}
    const contentType = request.headers.get('content-type') || ''

    if (contentType.includes('application/json')) {
      data = await request.json()
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData()
      data = {
        customer_name: String(form.get('customer_name') ?? ''),
        customer_contact1: String(form.get('customer_contact1') ?? ''),
        customer_email: String(form.get('customer_email') ?? ''),
        storage_type: String(form.get('storage_type') ?? ''),
      }
    } else {
      // sendBeacon with a Blob sometimes arrives as text/plain — try JSON.
      try {
        data = JSON.parse(await request.text())
      } catch {
        data = {}
      }
    }

    const customer_name = (data.customer_name || '').trim()
    const customer_contact1 = (data.customer_contact1 || '').trim()
    const customer_email = (data.customer_email || '').trim()
    const storage_type = (data.storage_type || '').trim()

    // Need at least one identifying detail to be worth saving.
    if (!customer_name && !customer_contact1 && !customer_email) {
      return NextResponse.json(
        { status: false, message: 'No lead details provided.' },
        { status: 400 }
      )
    }

    const body = new URLSearchParams({
      customer_name,
      customer_contact1,
      customer_email,
      storage_type,
    })

    const backendRes = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })

    const text = await backendRes.text()

    // Pass the backend's JSON through when possible.
    try {
      return NextResponse.json(JSON.parse(text), { status: backendRes.status })
    } catch {
      return new NextResponse(text, { status: backendRes.status })
    }
  } catch (error) {
    console.error('save-partial-lead error:', error)
    return NextResponse.json(
      { status: false, message: 'Failed to save partial lead.' },
      { status: 500 }
    )
  }
}
