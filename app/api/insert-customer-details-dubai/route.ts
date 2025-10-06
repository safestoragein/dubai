import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Parse request body - handle both JSON and form data
    let data: any = {}
    
    const contentType = request.headers.get('content-type')
    
    if (contentType?.includes('application/json')) {
      data = await request.json()
    } else if (contentType?.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData()
      data = {
        customer_name: formData.get('customer_name'),
        company_name: formData.get('company_name'),
        customer_contact1: formData.get('customer_contact1'),
        customer_email: formData.get('customer_email'),
        storage_type: formData.get('storage_type'),
        storage_size: formData.get('storage_size'),
      }
    }

    const { customer_name, company_name, customer_contact1, customer_email, storage_type, storage_size } = data

    // Basic validation
    if (!customer_contact1 || !customer_email) {
      return NextResponse.json(
        { error: 'Failed to submit data: Missing required fields.' },
        { status: 400 }
      )
    }

    console.log('Form submission received:', { customer_name, storage_type, customer_email })

    // Determine which API endpoint to use based on storage_type
    let apiUrl: string
    let formBody: URLSearchParams

    if (storage_type === 'business') {
      // Use business API endpoint
      apiUrl = 'https://safestorage.in/back/app/insert_business_customer_details_dubai'
      formBody = new URLSearchParams({
        customer_name: customer_name || '',
        company_name: company_name || '',
        customer_contact1: customer_contact1,
        customer_email: customer_email,
        storage_size: storage_size || ''
      })
    } else {
      // Use household API endpoint (default)
      apiUrl = 'https://safestorage.in/back/app/insert_customer_details_dubai'
      formBody = new URLSearchParams({
        customer_name: customer_name || '',
        customer_contact1: customer_contact1,
        customer_email: customer_email,
        storage_size: storage_size || ''
      })
    }

    console.log('Submitting to API:', apiUrl)
    console.log('Form data:', formBody.toString())

    // Submit to the appropriate backend API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString()
    })

    const responseText = await response.text()
    console.log('Backend API response:', response.status, responseText)

    if (response.ok && responseText.includes('success')) {
      // Return success response to match expected format
      return new NextResponse('success', { status: 200 })
    } else {
      // Handle error response
      console.error('Backend API error:', response.status, responseText)
      return NextResponse.json(
        { error: responseText || 'Failed to submit data: Backend error.' },
        { status: response.status || 500 }
      )
    }

  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit data: Network error.' },
      { status: 500 }
    )
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}