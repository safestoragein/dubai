import { NextRequest, NextResponse } from 'next/server'
import mysql from 'mysql2/promise'

// Database configuration - use environment variables for production
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'safestor_india',
  port: parseInt(process.env.DB_PORT || '3306')
}

// Fallback function to log data when database is not available
async function logFormSubmission(formData: any) {
  try {
    const logData = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'safestorage.ae'
    }
    
    // Log to console (visible in Vercel logs)
    console.log('FORM_SUBMISSION:', JSON.stringify(logData, null, 2))
    
    // In production, you could also send to a webhook, email service, or external API
    // Example: await fetch('YOUR_WEBHOOK_URL', { method: 'POST', body: JSON.stringify(logData) })
    
    return { success: true, id: `temp_${Date.now()}` }
  } catch (error) {
    console.error('Fallback logging error:', error)
    throw error
  }
}

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

    // Basic validation - match PHP logic
    if (!customer_contact1 || !customer_email) {
      return NextResponse.json(
        { error: 'Failed to submit data: Missing required fields.' },
        { status: 400 }
      )
    }

    // Prepare data for insertion
    const insertData = {
      customer_name: customer_name || '',
      company_name: company_name || '',
      customer_contact1,
      customer_email,
      storage_type: storage_type || '',
      storage_size: storage_size || '',
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }

    // Try database connection first, fall back if it fails
    let result
    try {
      // Only attempt database connection if we have valid database config
      if (dbConfig.host && dbConfig.host !== 'localhost' || process.env.NODE_ENV === 'development') {
        const connection = await mysql.createConnection(dbConfig)
        
        try {
          // Set timezone to Asia/Kolkata (matching PHP code)
          await connection.execute("SET time_zone = '+05:30'")

          // Insert into database - lead_id is auto-increment
          const [dbResult] = await connection.execute(
            'INSERT INTO safestorage_dubai_form (customer_name, company_name, customer_contact1, customer_email, storage_type, storage_size, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
              insertData.customer_name,
              insertData.company_name,
              insertData.customer_contact1,
              insertData.customer_email,
              insertData.storage_type,
              insertData.storage_size,
              insertData.created_at
            ]
          )

          console.log('Data inserted successfully to database:', dbResult)
          result = dbResult

        } finally {
          await connection.end()
        }
      } else {
        throw new Error('Database not configured for production')
      }
    } catch (dbError) {
      console.warn('Database connection failed, using fallback logging:', dbError)
      
      // Use fallback logging
      result = await logFormSubmission(insertData)
    }

    // Return success response - match PHP response
    return new NextResponse('success', { status: 200 })

  } catch (error) {
    console.error('Form submission error:', error)
    
    // Try fallback even if main process fails
    try {
      const fallbackData = {
        customer_name: request.url.includes('customer_name') ? 'Parse Error' : '',
        customer_email: request.url.includes('customer_email') ? 'Parse Error' : '',
        customer_contact1: 'Parse Error',
        storage_type: 'unknown',
        storage_size: 'unknown',
        error: error.message
      }
      await logFormSubmission(fallbackData)
    } catch (fallbackError) {
      console.error('Fallback also failed:', fallbackError)
    }
    
    return NextResponse.json(
      { error: 'Failed to submit data: Please try again or contact support.' },
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