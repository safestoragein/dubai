import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production-2024"

// Hardcoded credentials (in production, store hashed password in database)
const ADMIN_EMAIL = "kushal@safestorage.ae"
// This is the bcrypt hash of "Kushi14@3!"
const ADMIN_PASSWORD_HASH = "$2b$10$6PvaZ6VLGcQeVKZ3hXiVQ.TWweE5uxW9PI4fTb7kLJnL6glss2eza"

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

    // Create response with token
    const response = NextResponse.json(
      { 
        success: true, 
        message: "Login successful",
        user: { email: ADMIN_EMAIL }
      },
      { status: 200 }
    )

    // Set HTTP-only cookie with token
    response.cookies.set({
      name: "admin-token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/"
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}