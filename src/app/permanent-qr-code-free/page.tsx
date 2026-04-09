import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Permanent Free QR Code — Never Expires, No Credit Card | Truly Free QR',
  description: 'The only permanent free QR code generator. No 14-day trial. No bait-and-switch. Static and dynamic codes that stay active forever — no subscription, no account required.',
  keywords: ['permanent qr code free', 'qr code that never expires', 'free qr code no expiration', 'dynamic qr code permanent free', 'qr code no subscription'],
  alternates: { canonical: 'https://trulyfreeqr.com/permanent-qr-code-free' },
  openGraph: {
    title: 'Permanent Free QR Code — Never Expires, No Credit Card',
    description: 'Stop losing money to QR codes that expire. Truly Free QR guarantees permanent codes at zero cost — forever.',
    url: 'https://trulyfreeqr.com/permanent-qr-code-free',
    siteName: 'Truly Free QR',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Truly Free QR — Permanent QR Code Generator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://trulyfreeqr.com/permanent-qr-code-free',
      offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock', priceValidUntil: '2099-12-31' },
      featureList: ['Permanent QR codes — never expire', 'Dynamic codes with real-time URL editing', 'No subscription, no trial period', 'No account or email required', 'SVG vector export for professional print'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are there truly free QR codes that never expire?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Truly Free QR provides both static and dynamic QR codes that are permanently active at no cost. Static codes encode data directly and never expire by design. Dynamic codes use a redirect URL hosted on our dedicated infrastructure — they remain active indefinitely without any subscription or payment.' },
        },
        {
          '@type': 'Question',
          name: 'Why do most free QR codes expire after 14 days?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most QR code generators use a "bait-and-switch" model: they offer free dynamic codes to attract users, wait until those codes are printed on physical materials, then deactivate them after a 14-day trial to force subscription payments of $100–$180 per year. This practice has generated thousands of negative reviews on Trustpilot from businesses whose printed materials became worthless overnight. Truly Free QR was built specifically to end this practice.' },
        },
        {
          '@type': 'Question',
          name: 'How do I create a permanent dynamic QR code for free?',
          acceptedAnswer: { '@type': 'Answer', text: 'Paste your URL into Truly Free QR, enable Dynamic Tracking, and click Make Dynamic. Your code is stored on our high-performance VPS with Redis caching for sub-5ms redirect resolution. The code is saved to your browser dashboard — no account needed. It remains active permanently with no recurring cost.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a permanent static and a permanent dynamic QR code?',
          acceptedAnswer: { '@type': 'Answer', text: 'A static QR code encodes the destination URL directly into the pattern — it never expires and requires no server. A dynamic QR code encodes a short redirect URL that points to your destination. Dynamic codes allow you to change the destination URL after printing and provide scan analytics. Both types are permanently free on Truly Free QR.' },
        },
      ],
    },
  ],
}

export default function PermanentQRPage() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <defs><linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0058c3"/><stop offset="100%" stopColor="#0070f3"/></linearGradient></defs>
            <rect width="36" height="36" rx="8" fill="url(#lg1)"/>
            <rect x="5" y="5" width="26" height="26" rx="3" fill="white"/>
            <rect x="9" y="9" width="18" height="18" rx="2" fill="url(#lg1)"/>
            <rect x="13" y="13" width="10" height="10" rx="1" fill="white"/>
            <ellipse cx="18" cy="18" rx="3.5" ry="5" fill="url(#lg1)"/>
            <ellipse cx="18" cy="18" rx="5" ry="3.5" fill="url(#lg1)" opacity="0.7"/>
          </svg>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em', color: '#181c1e' }}>Truly Free <span style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>QR</span></span>
        </Link>
        <Link href="/" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '8px 16px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Generate Free QR →</Link>
      </nav>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 2, padding: '4px 10px', fontSize: 11, fontWeight: 700, color: '#0058c3', letterSpacing: '0.06em', marginBottom: 16 }}>✦ PERMANENT — ZERO COST — FOREVER</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 16px' }}>Permanent Free QR Codes — Static and Dynamic, Never Expire</h1>
          <p style={{ fontSize: 16, color: '#4a5568', lineHeight: 1.7, margin: '0 0 24px' }}>The only QR code generator that guarantees permanent activation at zero cost. No 14-day trial. No bait-and-switch. No credit card. Your codes stay active forever — print them with confidence.</p>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 28px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Create Your Permanent QR Code Free →</Link>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 16px' }}>Why Most Free QR Codes Are Not Actually Free</h2>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>The QR code generator industry runs on a well-documented deception: offer free dynamic codes, allow users to print them on business cards, menus, and packaging, then deactivate the codes after 14 days unless an annual subscription of $100–$180 is paid.</p>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>User reviews on Trustpilot describe this as "blackmail" — businesses trapped paying recurring fees because their printed materials are already deployed in the field. Thousands of small businesses have lost money to this model.</p>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: 0 }}>Truly Free QR eliminates this entirely. Our infrastructure is funded by non-intrusive advertising — you never pay, and your codes never expire.</p>
        </div>

        <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 32, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 20px' }}>Static vs Dynamic — Both Permanent, Both Free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { title: 'Static QR Code', features: ['Encodes URL directly in pattern', 'No server required to scan', 'Cannot be edited after creation', 'Zero tracking capabilities', 'Never expires — by design', 'Best for: business cards, simple links'] },
              { title: 'Dynamic QR Code', features: ['Encodes short redirect URL', 'Sub-5ms redirect via Redis cache', 'Edit destination URL anytime', 'Full scan analytics included', 'Permanently active — guaranteed', 'Best for: menus, packaging, signage'] },
            ].map(({ title, features }) => (
              <div key={title} style={{ background: '#fff', borderRadius: 8, padding: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#181c1e', marginBottom: 12 }}>{title}</div>
                {features.map(f => (
                  <div key={f} style={{ fontSize: 13, color: '#4a5568', marginBottom: 6, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#0058c3', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 24px' }}>Frequently Asked Questions</h2>
          {[
            ['Are there truly free QR codes that never expire?', 'Yes. Truly Free QR provides both static and dynamic QR codes permanently active at no cost. Static codes never expire by design. Dynamic codes use a redirect URL on our dedicated infrastructure — active indefinitely, no payment required.'],
            ['Why do most free QR codes expire after 14 days?', 'Most generators use a bait-and-switch model: free dynamic codes to attract users, deactivated after 14 days to force subscriptions of $100–$180 per year. Truly Free QR was built to end this practice.'],
            ['How do I create a permanent dynamic QR code for free?', 'Paste your URL into Truly Free QR, enable Dynamic Tracking, click Make Dynamic. Your code is stored on our VPS with Redis caching for sub-5ms resolution. Saved to your browser dashboard — no account needed. Active permanently.'],
            ['What is the difference between static and dynamic permanent QR codes?', 'Static codes encode the URL directly — no server needed, never expire. Dynamic codes encode a short redirect — editable destination, scan analytics included. Both are permanently free on Truly Free QR.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(74,85,104,0.1)', paddingTop: i === 0 ? 0 : 20, marginTop: i === 0 ? 0 : 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 8, letterSpacing: '-0.01em' }}>{q}</div>
              <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Create Your Permanent Free QR Code Now →</Link>
          <p style={{ fontSize: 12, color: '#718096', marginTop: 12 }}>No account · No credit card · No expiration · Forever free</p>
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
