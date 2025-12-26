import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// Use a consistent JWT secret
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production-2024"

if (!process.env.JWT_SECRET) {
  console.warn("JWT_SECRET environment variable not set! Using fallback.")
}

// Hardcoded credentials (in production, store hashed password in database)
const ADMIN_EMAIL = "kushal@safestorage.in"
// This is the bcrypt hash of "kushal@3344"
const ADMIN_PASSWORD_HASH = "$2b$10$WKDjvx/93z.8A.4lbxJhUOvs4mMOx/3ai1Ut0B1eVy6MxcLW6ROGi"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      )
    }

    // Check credentials
    if (email !== ADMIN_EMAIL) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH)
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Create JWT token
    console.log('Login endpoint - JWT_SECRET:', JWT_SECRET ? 'SET' : 'NOT SET')
    console.log('Login endpoint - Creating token for:', ADMIN_EMAIL)
    
    const token = jwt.sign(
      { 
        email: ADMIN_EMAIL,
        role: "admin",
        timestamp: Date.now()
      },
      JWT_SECRET,
      { expiresIn: "8h" }
    )
    
    console.log('Token created successfully, length:', token.length)
    console.log('Token starts with:', token.substring(0, 20))

    // Create response with token
    const response = NextResponse.json(
      { 
        success: true, 
        message: "Login successful",
        user: { email: ADMIN_EMAIL }
      },
      { status: 200 }
    )

    // Set HTTP-only cookie with token - simplified for reliability
    response.cookies.set({
      name: "admin-token",
      value: token,
      httpOnly: true,
      secure: true, // Always secure since we're on HTTPS
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/"
    })

    console.log('Cookie set successfully')
    console.log('Token length:', token.length)
    console.log('JWT_SECRET available:', !!JWT_SECRET)

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}