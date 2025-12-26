import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production-2024"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    // Create a test token
    const testToken = jwt.sign(
      { 
        email: email || "kushal@safestorage.in",
        role: "admin",
        timestamp: Date.now()
      },
      JWT_SECRET,
      { expiresIn: "8h" }
    )
    
    // Immediately verify it
    try {
      const decoded = jwt.verify(testToken, JWT_SECRET) as any
      
      return NextResponse.json({
        success: true,
        tokenCreated: true,
        tokenVerified: true,
        decoded: {
          email: decoded.email,
          role: decoded.role
        },
        jwtSecretAvailable: !!process.env.JWT_SECRET,
        environment: process.env.NODE_ENV
      })
    } catch (verifyError) {
      return NextResponse.json({
        success: false,
        tokenCreated: true,
        tokenVerified: false,
        verifyError: (verifyError as Error).message,
        jwtSecretAvailable: !!process.env.JWT_SECRET
      })
    }
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 })
  }
}