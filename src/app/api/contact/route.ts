import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { subject, name, email, message } = await request.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: connect a real email service (e.g. Resend/Brevo) — no email API key is
    // configured in this repo, so submissions are logged server-side for now.
    console.log('[contact]', { subject, name, email, message, receivedAt: new Date().toISOString() })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
