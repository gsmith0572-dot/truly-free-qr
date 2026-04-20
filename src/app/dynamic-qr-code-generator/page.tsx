import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Dynamic QR Code Generator — No Expiration, No Subscription | Truly Free QR',
  description: 'Create dynamic QR codes that never expire — free forever. Edit the destination URL anytime without reprinting. Real-time analytics included. No account required.',
  keywords: ['dynamic qr code generator', 'free dynamic qr code', 'dynamic qr code no expiration', 'editable qr code free', 'trackable qr code free'],
  alternates: { canonical: 'https://trulyfreeqr.com/dynamic-qr-code-generator' },
  openGraph: {
    title: 'Free Dynamic QR Code Generator — No Expiration, No Subscription',
    description: 'The only dynamic QR generator where free means free forever. Edit destinations, track scans, download SVG — zero cost, zero subscription.',
    url: 'https://trulyfreeqr.com/dynamic-qr-code-generator',
    siteName: 'Truly Free QR',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Truly Free QR — Dynamic QR Code Generator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://trulyfreeqr.com/dynamic-qr-code-generator',
      offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock', priceValidUntil: '2099-12-31' },
      featureList: ['Dynamic QR codes that never expire', 'Edit destination URL anytime', 'Real-time scan analytics', 'Sub-5ms redirect performance', 'SVG vector export free', 'No account or subscription required'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a dynamic QR code?',
          acceptedAnswer: { '@type': 'Answer', text: 'A dynamic QR code encodes a short redirect URL instead of the final destination. When scanned, the redirect server looks up the current destination and sends the user there instantly. This allows you to change where the code points at any time without reprinting it, and enables real-time analytics including scan count, location, and device type.' },
        },
        {
          '@type': 'Question',
          name: 'Are dynamic QR codes really free forever on Truly Free QR?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Truly Free QR provides unlimited dynamic QR codes permanently free. There is no trial period, no subscription, and no credit card required. The service is funded by non-intrusive Google AdSense advertising. Your codes remain active indefinitely on our dedicated VPS infrastructure with Redis caching for sub-5ms redirect performance.' },
        },
        {
          '@type': 'Question',
          name: 'How do dynamic QR codes work technically?',
          acceptedAnswer: { '@type': 'Answer', text: 'When you create a dynamic QR code on Truly Free QR, we generate a short redirect URL (e.g., trulyfreeqr.link/r/ab3k9). This short URL is encoded in the QR pattern. When someone scans the code, our redirect server — running on a dedicated VPS with Redis caching — resolves the short ID to your destination URL in under 5 milliseconds and executes a 302 redirect. Scan events are logged asynchronously for analytics.' },
        },
        {
          '@type': 'Question',
          name: 'Can I edit a dynamic QR code after printing?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. That is the primary advantage of dynamic QR codes. After printing, you can update the destination URL from your dashboard at any time — without generating a new code or reprinting. The physical QR code remains identical; only the server-side destination changes.' },
        },
      ],
    },
  ],
}

export default function DynamicQRPage() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.png" alt="TrulyFreeQR" style={{height:44,width:'auto'}} />
        </Link>
        <Link href="/" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '8px 16px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Generate Free QR →</Link>
      </nav>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 2, padding: '4px 10px', fontSize: 11, fontWeight: 700, color: '#0058c3', letterSpacing: '0.06em', marginBottom: 16 }}>✦ DYNAMIC — FREE FOREVER — NO EXPIRATION</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 16px' }}>Free Dynamic QR Code Generator — Edit Anytime, Track Everything, Never Expires</h1>
          <p style={{ fontSize: 16, color: '#4a5568', lineHeight: 1.7, margin: '0 0 24px' }}>Create dynamic QR codes that you can edit after printing — free forever. Change the destination URL anytime from your dashboard. Real-time analytics included. No subscription, no 14-day trial, no account required.</p>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 28px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Create Free Dynamic QR Code →</Link>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 16px' }}>Static vs Dynamic — Which One Do You Need?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { title: 'Static QR Code', color: '#718096', features: ['URL encoded directly in pattern', 'Cannot be edited after creation', 'No server required to scan', 'No analytics', 'Never expires', 'Best for: fixed content, simple links'] },
              { title: 'Dynamic QR Code', color: '#0058c3', features: ['Short redirect URL encoded', 'Edit destination anytime', 'Sub-5ms redirect via Redis', 'Full real-time analytics', 'Permanently active — free', 'Best for: menus, campaigns, packaging'] },
            ].map(({ title, color, features }) => (
              <div key={title} style={{ background: '#f1f4f6', borderRadius: 8, padding: 20, borderTop: `3px solid ${color}` }}>
                <div style={{ fontSize: 14, fontWeight: 700, color, marginBottom: 12 }}>{title}</div>
                {features.map(f => (
                  <div key={f} style={{ fontSize: 13, color: '#4a5568', marginBottom: 6, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color, fontWeight: 700, flexShrink: 0 }}>→</span>{f}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 32, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 16px' }}>Technical Architecture — Why Our Dynamic Codes Are Fast</h2>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>Most free QR generators use shared cloud infrastructure with unpredictable latency. Truly Free QR runs on a dedicated VPS with 8GB RAM and Redis in-memory caching. The redirect flow:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              ['Scan', 'User scans QR code — code contains trulyfreeqr.link/r/[shortId]'],
              ['Cache Check', 'Redis checks for cached destination — typical hit in <1ms'],
              ['DB Fallback', 'Cache miss triggers PostgreSQL lookup — resolved in <10ms'],
              ['Cache Write', 'Result cached in Redis for 24 hours — subsequent scans <1ms'],
              ['Redirect', '302 redirect to destination — total time under 5ms'],
              ['Analytics', 'Scan event queued asynchronously — zero impact on redirect speed'],
            ].map(([step, desc]) => (
              <div key={step} style={{ display: 'flex', gap: 12, background: '#fff', borderRadius: 6, padding: '10px 14px', alignItems: 'flex-start' }}>
                <span style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 3, padding: '2px 8px', fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{step}</span>
                <span style={{ fontSize: 13, color: '#4a5568' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 24px' }}>Frequently Asked Questions</h2>
          {[
            ['What is a dynamic QR code?', 'A dynamic QR code encodes a short redirect URL. When scanned, the server looks up the current destination and redirects instantly. This allows you to change the destination anytime without reprinting, and enables real-time analytics.'],
            ['Are dynamic QR codes really free forever on Truly Free QR?', 'Yes. Unlimited dynamic QR codes permanently free. No trial, no subscription, no credit card. Funded by non-intrusive advertising. Active indefinitely on our dedicated VPS with Redis caching for sub-5ms redirects.'],
            ['How do dynamic QR codes work technically?', 'We generate a short redirect URL (trulyfreeqr.link/r/[id]) encoded in the QR pattern. When scanned, our Redis-cached VPS resolves the ID to your destination in under 5ms and executes a 302 redirect. Scan events are logged asynchronously for analytics.'],
            ['Can I edit a dynamic QR code after printing?', 'Yes. Update the destination URL from your dashboard anytime — without generating a new code or reprinting. The physical QR code stays identical; only the server-side destination changes.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(74,85,104,0.1)', paddingTop: i === 0 ? 0 : 20, marginTop: i === 0 ? 0 : 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 8, letterSpacing: '-0.01em' }}>{q}</div>
              <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Create Your Free Dynamic QR Code Now →</Link>
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
