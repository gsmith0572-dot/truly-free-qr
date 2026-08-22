import { NextRequest, NextResponse } from 'next/server'

const VPS_URL = process.env.NEXT_PUBLIC_VPS_API_URL
const API_KEY = process.env.VPS_API_KEY

export async function PUT(request: NextRequest, { params }: { params: Promise<{ shortId: string }> }) {
  try {
    const { shortId } = await params
    const body = await request.json()
    const response = await fetch(`${VPS_URL}/api/qr/${shortId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY || '',
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch {
    return NextResponse.json({ error: 'Failed to update QR' }, { status: 500 })
  }
}
