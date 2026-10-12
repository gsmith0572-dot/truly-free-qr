import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Safe QR Code Generator — Built-in Phishing Protection | Truly Free QR',
  description: 'Free QR generator with Safe-Scan link checks: https-only destinations, no URL shorteners, Google Safe Browsing lookup. No account required.',
  keywords: ['safe qr code generator', 'secure qr code maker', 'anti phishing qr code', 'safe scan qr', 'qr code phishing protection'],
  alternates: { canonical: 'https://trulyfreeqr.com/safe-qr-code-generator' },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon-512.png?v=3",
  },
  openGraph: {
    title: 'Safe QR Code Generator — Built-in Phishing Protection',
    description: 'Generate QR codes with Safe-Scan link checks. Free forever, no account required.',
    url: 'https://trulyfreeqr.com/safe-qr-code-generator',
    siteName: 'Truly Free QR',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Truly Free QR — Safe QR Code Generator',
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Web',
      url: 'https://trulyfreeqr.com/safe-qr-code-generator',
      offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      featureList: ['Safe-Scan link checks at creation and edit time', 'https-only destinations', 'Google Safe Browsing lookup', 'Safe-Scan page that shows each destination', 'Free forever, no account required'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is QR code phishing (quishing)?',
          acceptedAnswer: { '@type': 'Answer', text: 'Quishing is a cyberattack where malicious QR codes redirect users to phishing websites designed to steal credentials, financial data, or install malware. The Anti-Phishing Working Group counted 716,306 malicious QR codes in the third quarter of 2025 alone, 13% more than in the second quarter. Unlike email phishing, QR codes can slip past email security filters because the malicious URL is hidden inside the image.' },
        },
        {
          '@type': 'Question',
          name: 'How does Safe-Scan protect users from QR phishing?',
          acceptedAnswer: { '@type': 'Answer', text: 'Safe-Scan checks the destination when you create or edit a dynamic code on Truly Free QR. It only accepts https links, rejects URL shorteners and high-risk address patterns, and asks Google Safe Browsing about the link. Every code also gets a Safe-Scan page that shows the full destination and the results of the checks. The check runs at creation and edit time, not on every scan.' },
        },
        {
          '@type': 'Question',
          name: 'How can I tell if a QR code is safe to scan?',
          acceptedAnswer: { '@type': 'Answer', text: 'Look at the code in person: stickers placed over a legitimate code are the most common trick. Before opening an unknown code, use a scanner app that shows the destination URL first. Never scan QR codes from unsolicited emails or texts, or from unfamiliar locations. If you made the code yourself, open its Safe-Scan page to see the destination and the results of the checks.' },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to use QR codes for business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, when the code is made with care. Safe-Scan checks the destination when you create or edit a dynamic code, and redirects run over HTTPS. Check printed codes in public places from time to time, because nothing can stop someone from sticking another code over yours.' },
        },
      ],
    },
  ],
}

export default function SafeQRPage() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 2, padding: '4px 10px', fontSize: 11, fontWeight: 700, color: '#16a34a', letterSpacing: '0.06em', marginBottom: 16 }}>SAFE-SCAN LINK CHECKS</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 16px' }}>Safe QR Code Generator — Built-in Phishing Protection for Every Code</h1>
          <p style={{ fontSize: 16, color: '#4a5568', lineHeight: 1.7, margin: '0 0 24px' }}>Safe-Scan checks every destination when you create or edit a dynamic code: https only, no URL shorteners, a Google Safe Browsing lookup. Free forever, no account required.</p>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 28px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Generate a Safe QR Code Free →</Link>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 16px' }}>The QR Phishing Threat — By The Numbers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 20 }}>
            {[
              ['716,306', 'Malicious QR codes found by Mimecast in Q3 2025 (APWG)'],
              ['+13%', 'Growth over the previous quarter (635,672 in Q2 2025)'],
              ['3M+', 'Unique malicious QR codes found from Q2 2024 through Q3 2025'],
            ].map(([stat, desc]) => (
              <div key={stat} style={{ background: '#f1f4f6', borderRadius: 8, padding: 16, textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#0058c3', letterSpacing: '-0.02em', marginBottom: 4 }}>{stat}</div>
                <div style={{ fontSize: 12, color: '#718096', lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: 0 }}>QR phishing bypasses email security filters because the malicious URL is hidden inside an image. Attackers place stickers over legitimate QR codes in restaurants, parking meters, and public spaces. Truly Free QR addresses the part it can control with Safe-Scan — a destination check when a code is created or edited.</p>
        </div>

        <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 32, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 20px' }}>How Safe-Scan Works</h2>
          {[
            ['Destination check', 'When you create or edit a dynamic code, the destination is checked: https only, URL shorteners rejected, high-risk address patterns rejected, and a Google Safe Browsing lookup for known malware and phishing.'],
            ['Safe-Scan page', 'Every dynamic code has a Safe-Scan page that shows the full destination URL and the results of the checks, so you can review where a code leads before you print or share it.'],
            ['HTTPS redirects', 'Redirects are served over HTTPS. No plain HTTP redirects, no mixed content.'],
            ['What it does not do', 'Safe-Scan does not re-check a destination on every scan, and it cannot stop someone from placing another sticker over your printed code. Inspect codes in public places from time to time.'],
          ].map(([title, desc]) => (
            <div key={title} style={{ display: 'flex', gap: 16, marginBottom: 20, background: '#fff', borderRadius: 8, padding: 16 }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', fontSize: 14, fontWeight: 700 }}>✓</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#181c1e', marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 24px' }}>Frequently Asked Questions</h2>
          {[
            ['What is QR code phishing (quishing)?', 'Quishing is a cyberattack where malicious QR codes redirect users to phishing websites. The Anti-Phishing Working Group counted 716,306 malicious QR codes in the third quarter of 2025 alone. Unlike email phishing, QR codes can slip past security filters because the URL is hidden inside an image.'],
            ['How does Safe-Scan protect users from QR phishing?', 'Safe-Scan checks the destination when you create or edit a dynamic code: https only, no URL shorteners or high-risk address patterns, and a Google Safe Browsing lookup. Each code also has a Safe-Scan page that shows the destination and the results.'],
            ['How can I tell if a QR code is safe to scan?', 'Look at the code in person for stickers placed over it. Before scanning unknown codes, use a QR scanner that previews the destination URL. Never scan QR codes from unsolicited emails or texts.'],
            ['Is it safe to use QR codes for business?', 'Yes, when the code is made with care. Safe-Scan checks the destination when you create or edit a dynamic code, and redirects run over HTTPS.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(74,85,104,0.1)', paddingTop: i === 0 ? 0 : 20, marginTop: i === 0 ? 0 : 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 8, letterSpacing: '-0.01em' }}>{q}</div>
              <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Generate Your Safe QR Code Free →</Link>
          <p style={{ fontSize: 12, color: '#718096', marginTop: 12 }}>Safe-Scan link checks · No account · No subscription · Forever free</p>
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
