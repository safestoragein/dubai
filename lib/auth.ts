import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production-2024"

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export function isAuthenticated(request: NextRequest): boolean {
  const token = request.cookies.get('admin-token')
  if (!token) return false
  
  const decoded = verifyToken(token.value)
  return decoded !== null
}