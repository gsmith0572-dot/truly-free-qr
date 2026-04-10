import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    if (file.size > 20 * 1024 * 1024) return NextResponse.json({ error: 'File too large' }, { status: 400 })

    const vpsFormData = new FormData()
    vpsFormData.append('file', file)

    const res = await fetch(`${process.env.NEXT_PUBLIC_VPS_API_URL}/api/upload-pdf`, {
      method: 'POST',
      headers: { 'x-api-key': process.env.VPS_API_KEY || '' },
      body: vpsFormData,
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
