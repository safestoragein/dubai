import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production-2024"

export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("admin-token")

    if (!token) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      )
    }

    // Verify JWT token
    const decoded = jwt.verify(token.value, JWT_SECRET) as any

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
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    )
  }
}