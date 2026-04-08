import { NextRequest, NextResponse } from 'next/server'

const VPS_URL = process.env.NEXT_PUBLIC_VPS_API_URL
const API_KEY = process.env.VPS_API_KEY

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const response = await fetch(`${VPS_URL}/api/qr`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY || '',
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to create QR' }, { status: 500 })
  }
}
