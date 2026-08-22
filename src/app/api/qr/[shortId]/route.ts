import { NextRequest, NextResponse } from 'next/server'

const VPS_URL = process.env.NEXT_PUBLIC_VPS_API_URL
const API_KEY = process.env.VPS_API_KEY

export async function PUT(request: NextRequest, { params }: { params: Promise<{ shortId: string }> }) {
  try {
    const { shortId } = await params
    const body = await request.json()
    const adminKey = request.headers.get('x-admin-key')
    const response = await fetch(`${VPS_URL}/api/qr/${shortId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY || '',
        ...(adminKey ? { 'x-admin-key': adminKey } : {}),
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch {
    return NextResponse.json({ error: 'Failed to update QR' }, { status: 500 })
  }
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ shortId: string }> }) {
  try {
    const { shortId } = await params
    const adminKey = request.headers.get('x-admin-key')
    const response = await fetch(`${VPS_URL}/api/qr/${shortId}`, {
      headers: {
        'x-api-key': API_KEY || '',
        ...(adminKey ? { 'x-admin-key': adminKey } : {}),
      },
    })
    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch QR' }, { status: 500 })
  }
}
