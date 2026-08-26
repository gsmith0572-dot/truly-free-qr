import { NextRequest, NextResponse } from 'next/server'

const VPS_URL = process.env.NEXT_PUBLIC_VPS_API_URL
const API_KEY = process.env.VPS_API_KEY

export async function GET(request: NextRequest) {
  try {
    const adminKey = request.headers.get('x-admin-key')
    const category = request.nextUrl.searchParams.get('category')
    const url = new URL(`${VPS_URL}/api/qr`)
    if (category) url.searchParams.set('category', category)
    const response = await fetch(url.toString(), {
      headers: {
        'x-api-key': API_KEY || '',
        ...(adminKey ? { 'x-admin-key': adminKey } : {}),
      },
    })
    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch {
    return NextResponse.json({ error: 'Failed to list QR codes' }, { status: 500 })
  }
}

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
    return NextResponse.json(data, { status: response.status })
  } catch {
    return NextResponse.json({ error: 'Failed to create QR' }, { status: 500 })
  }
}
