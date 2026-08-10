import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

// Use the exact same secret as login - CRITICAL FOR JWT TO WORK
const FALLBACK_SECRET = "safestorage-jwt-production-secret-2024-v2"
const JWT_SECRET = process.env.JWT_SECRET || FALLBACK_SECRET

console.log("Verify - JWT_SECRET source:", process.env.JWT_SECRET ? "ENV_VAR" : "FALLBACK")
console.log("Verify - Secret length:", JWT_SECRET.length)

export async function GET() {
  try {
    // Next.js 16 makes cookies() async. Unawaited it returns a Promise, so
    // .get() threw and every verify landed in the catch as "Invalid or
    // expired token" -- including requests that simply had no cookie yet.
    const cookieStore = await cookies()
    const token = cookieStore.get("admin-token")

    if (!token) {
      console.log('Verify failed - No token found')
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      )
    }

    // Verify JWT token
    const decoded = jwt.verify(token.value, JWT_SECRET) as any
    console.log('Verify successful for:', decoded.email)

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
    console.error('JWT verification failed:', (error as Error).message)
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    )
  }
}