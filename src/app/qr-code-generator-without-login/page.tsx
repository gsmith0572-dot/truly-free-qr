import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'QR Code Generator Without Login or Email — Instant Free Download | Truly Free QR',
  description: 'Generate and download QR codes instantly — no account, no email, no registration. Static and dynamic codes free forever. Just paste your URL and download in PNG or SVG.',
  keywords: ['qr code generator without login', 'qr code no account required', 'qr code generator no email', 'free qr code no registration', 'qr code generator no sign up'],
  alternates: { canonical: 'https://trulyfreeqr.com/qr-code-generator-without-login' },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon-512.png?v=3",
  },
  openGraph: {
    title: 'QR Code Generator Without Login or Email — Instant Free Download',
    description: 'No account, no email, no registration. Generate QR codes instantly and download in PNG or SVG. Free forever.',
    url: 'https://trulyfreeqr.com/qr-code-generator-without-login',
    siteName: 'Truly Free QR',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Truly Free QR — No Login QR Code Generator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://trulyfreeqr.com/qr-code-generator-without-login',
      offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      featureList: ['No account or login required', 'No email address needed', 'Instant QR code generation', 'PNG and SVG download free', 'Dynamic codes saved in browser', 'No subscription or expiration'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I generate a QR code without creating an account?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Truly Free QR requires zero registration. Paste your URL, generate your QR code, and download in PNG or SVG instantly — no account, no email, no password. Dynamic codes are saved to your browser using localStorage, creating a personal dashboard without server-side accounts.' },
        },
        {
          '@type': 'Question',
          name: 'Why do most QR generators require email registration?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most QR generators collect email addresses to build marketing lists and send subscription upsells. The email requirement is a lead generation mechanism, not a technical necessity. Truly Free QR stores your QR codes in your browser localStorage instead, giving you a full dashboard experience without surrendering your email address.' },
        },
        {
          '@type': 'Question',
          name: 'Are my QR codes saved without an account?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. When you create a dynamic QR code on Truly Free QR, it is saved to your browser dashboard automatically using localStorage. Your codes appear every time you return to the site on the same browser. No account, no email, no server-side profile — your data stays in your browser.' },
        },
        {
          '@type': 'Question',
          name: 'What happens to my QR codes if I clear my browser?',
          acceptedAnswer: { '@type': 'Answer', text: 'Your dashboard list is stored in browser localStorage, so clearing your browser data removes the list. However, the dynamic QR codes themselves remain active on our servers permanently — the codes still work and redirect correctly. You can bookmark your redirect URLs to keep a personal record outside the browser.' },
        },
      ],
    },
  ],
}

export default function NoLoginQRPage() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 2, padding: '4px 10px', fontSize: 11, fontWeight: 700, color: '#0058c3', letterSpacing: '0.06em', marginBottom: 16 }}>✦ NO LOGIN — NO EMAIL — NO REGISTRATION</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 16px' }}>QR Code Generator Without Login — Instant Download, No Email Required</h1>
          <p style={{ fontSize: 16, color: '#4a5568', lineHeight: 1.7, margin: '0 0 24px' }}>Generate and download QR codes in seconds — no account, no email address, no registration of any kind. Static and dynamic codes free forever. Your codes are saved privately in your browser — no server-side profile, no data collection.</p>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 28px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Generate QR Code — No Login Required →</Link>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 16px' }}>Why Most QR Generators Force You to Register</h2>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>Registration requirements in free tools are almost never about technical necessity — they are lead generation mechanisms. Your email address becomes a marketing asset used to send subscription upsells, promotional emails, and retargeting campaigns.</p>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>Truly Free QR uses a fundamentally different architecture. Your QR codes are stored in your browser localStorage — a private, client-side database that never leaves your device. Your dashboard is yours, with zero server-side profile and zero email collection.</p>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: 0 }}>The only data we process is anonymous scan event data for your analytics — country, device type, and timestamp. No personally identifiable information, no email, no tracking across sessions.</p>
        </div>

        <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 32, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 20px' }}>Zero-Friction Architecture — How It Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              ['Browser localStorage', 'Your QR codes and session data stored locally. No server-side account. No email required.'],
              ['Anonymous Session Token', 'A random token generated in your browser links your codes to your dashboard — privately.'],
              ['Permanent Dynamic Codes', 'Your dynamic codes live on our VPS infrastructure permanently — independent of your browser.'],
              ['No Cookie Tracking', 'We do not use cross-session tracking cookies. Your usage is private between visits.'],
            ].map(([title, desc]) => (
              <div key={title} style={{ background: '#fff', borderRadius: 8, padding: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0058c3', marginBottom: 6 }}>✓ {title}</div>
                <div style={{ fontSize: 12, color: '#4a5568', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 24px' }}>Frequently Asked Questions</h2>
          {[
            ['Can I generate a QR code without creating an account?', 'Yes. Truly Free QR requires zero registration. Paste your URL, generate your QR code, and download instantly — no account, no email, no password. Dynamic codes are saved to your browser using localStorage.'],
            ['Why do most QR generators require email registration?', 'Email collection is a lead generation mechanism, not a technical necessity. Truly Free QR stores your QR codes in browser localStorage instead — full dashboard experience without surrendering your email address.'],
            ['Are my QR codes saved without an account?', 'Yes. Dynamic QR codes are saved to your browser dashboard automatically using localStorage. Your codes appear every time you return on the same browser — no account, no email, no server-side profile.'],
            ['What happens to my QR codes if I clear my browser?', 'Your dashboard list is stored in localStorage, so clearing browser data removes the list. However, the dynamic codes remain active on our servers permanently — they still redirect correctly. Bookmark your redirect URLs to keep a personal record.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(74,85,104,0.1)', paddingTop: i === 0 ? 0 : 20, marginTop: i === 0 ? 0 : 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 8, letterSpacing: '-0.01em' }}>{q}</div>
              <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Generate QR Code Now — No Login Required →</Link>
          <p style={{ fontSize: 12, color: '#718096', marginTop: 12 }}>No account · No email · No registration · Forever free</p>
        </div>
      </div>

      <footer style={{ background: '#fff', borderTop: '1px solid rgba(74,85,104,0.15)', padding: '20px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: '#718096' }}>
          © 2026 Truly Free QR · Built by <a href="https://klickifyagency.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0058c3', fontWeight: 600, textDecoration: 'none' }}>Klickify Agency</a>
        </div>
      </footer>
    </div>
  )
}
