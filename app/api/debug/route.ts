import { NextResponse } from "next/server"

export async function GET() {
  try {
    return NextResponse.json({
      nodeEnv: process.env.NODE_ENV,
      jwtSecretSet: !!process.env.JWT_SECRET,
      jwtSecretLength: process.env.JWT_SECRET ? process.env.JWT_SECRET.length : 0,
      jwtSecretFirstChars: process.env.JWT_SECRET ? process.env.JWT_SECRET.substring(0, 10) : 'NOT_SET',
      vercelEnv: process.env.VERCEL_ENV,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({ error: 'Debug error' }, { status: 500 })
  }
}