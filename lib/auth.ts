import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

// Must match the fallback in app/api/admin/login/route.ts exactly. A token
// signed with one secret and verified with another fails with no useful
// message. Only reached when JWT_SECRET is unset -- set it and neither is used.
const JWT_SECRET = process.env.JWT_SECRET || "safestorage-jwt-production-secret-2024-v2"

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