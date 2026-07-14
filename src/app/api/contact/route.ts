import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { subject, name, email, message } = await request.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) {
      console.error('[contact] BREVO_API_KEY not configured')
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
    }

    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Truly Free QR Contact Form', email: 'george@trulyfreeqr.com' },
        to: [{ email: 'gsmith0572@gmail.com' }],
        replyTo: { email, name },
        subject: `[TrulyFreeQR Contact] ${subject || 'New message'} — ${name}`,
        textContent: `From: ${name} <${email}>\nTopic: ${subject || 'N/A'}\n\n${message}`,
      }),
    })

    if (!brevoRes.ok) {
      console.error('[contact] Brevo send failed', brevoRes.status, await brevoRes.text())
      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
