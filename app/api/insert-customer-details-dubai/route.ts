import { NextRequest, NextResponse } from 'next/server'
import mysql from 'mysql2/promise'

// Database configuration - update with your localhost MySQL credentials
const dbConfig = {
  host: 'localhost',
  user: 'root', // Update with your MySQL username
  password: '', // Update with your MySQL password
  database: 'safestor_india', // Your database name
  port: 3306
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

    // Create database connection
    const connection = await mysql.createConnection(dbConfig)

    try {
      // Set timezone to Asia/Kolkata (matching PHP code)
      await connection.execute("SET time_zone = '+05:30'")

      // Prepare data for insertion - match PHP structure
      const insertData = {
        customer_name: customer_name || '',
        company_name: company_name || '',
        customer_contact1,
        customer_email,
        storage_type: storage_type || '',
        storage_size: storage_size || '',
        created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }

      // Insert into database - lead_id is auto-increment
      const [result] = await connection.execute(
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

      console.log('Data inserted successfully:', result)

      // Return success response - match PHP response
      return new NextResponse('success', { status: 200 })

    } finally {
      await connection.end()
    }

  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Failed to submit data: Database error.' },
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