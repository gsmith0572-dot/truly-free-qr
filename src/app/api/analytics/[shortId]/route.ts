import { NextRequest, NextResponse } from 'next/server'

const VPS_URL = process.env.NEXT_PUBLIC_VPS_API_URL
const API_KEY = process.env.VPS_API_KEY

export async function GET(request: NextRequest, { params }: { params: Promise<{ shortId: string }> }) {
  try {
    const { shortId } = await params
    const response = await fetch(`${VPS_URL}/api/analytics/${shortId}`, {
      headers: { 'x-api-key': API_KEY || '' },
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}
