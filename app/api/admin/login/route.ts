import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// Use a consistent JWT secret - ensuring both login and verify use the same secret
const FALLBACK_SECRET = "safestorage-jwt-production-secret-2024-v2"
const JWT_SECRET = process.env.JWT_SECRET || FALLBACK_SECRET

console.log("Login - JWT_SECRET source:", process.env.JWT_SECRET ? "ENV_VAR" : "FALLBACK")
console.log("Login - Secret length:", JWT_SECRET.length)

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
    const token = jwt.sign(
      { 
        email: ADMIN_EMAIL,
        role: "admin",
        timestamp: Date.now()
      },
      JWT_SECRET,
      { expiresIn: "8h" }
    )
    
    console.log('Login successful - Token created for:', ADMIN_EMAIL)

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

    console.log('Login completed - Cookie set')

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}