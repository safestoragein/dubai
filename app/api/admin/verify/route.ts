import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production-2024"

export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("admin-token")

    console.log('Verify endpoint - JWT_SECRET:', JWT_SECRET ? 'SET' : 'NOT SET')
    console.log('Verify endpoint - Token exists:', !!token)
    console.log('Verify endpoint - All cookies:', cookieStore.getAll().map(c => c.name))

    if (!token) {
      console.log('No token found in cookies')
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      )
    }

    console.log('Token value length:', token.value.length)
    console.log('Token starts with:', token.value.substring(0, 20))

    // Verify JWT token
    const decoded = jwt.verify(token.value, JWT_SECRET) as any
    console.log('Token decoded successfully:', { email: decoded.email, role: decoded.role })

    return NextResponse.json(
      { 
        success: true,
        user: { 
          email: decoded.email,
          role: decoded.role 
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('JWT verification error:', error)
    console.error('JWT_SECRET used:', JWT_SECRET ? 'SET' : 'NOT SET')
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    )
  }
}