import { NextResponse } from 'next/server'

export async function GET() {
  const response = NextResponse.json({ message: 'Hello, world!' })
  return response
}
