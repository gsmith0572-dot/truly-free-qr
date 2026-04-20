import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free QR Code for Real Estate — Property Listings, Never Expires | Truly Free QR',
  description: 'Create dynamic QR codes for real estate listings, virtual tours, and open house signs. Update listings without reprinting. Free forever, no subscription, no account required.',
  keywords: ['qr code for real estate', 'property listing qr code', 'real estate qr code generator', 'virtual tour qr code', 'open house qr code free'],
  alternates: { canonical: 'https://trulyfreeqr.com/qr-code-for-real-estate' },
  openGraph: {
    title: 'Free QR Code for Real Estate — Property Listings, Never Expires',
    description: 'Stop reprinting signs when listings change. Truly Free QR dynamic codes let you update property URLs anytime — free forever.',
    url: 'https://trulyfreeqr.com/qr-code-for-real-estate',
    siteName: 'Truly Free QR',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Truly Free QR — Real Estate QR Code Generator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://trulyfreeqr.com/qr-code-for-real-estate',
      offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock', priceValidUntil: '2099-12-31' },
      featureList: ['Dynamic QR codes for property listings', 'Update listing URL without reprinting', 'Virtual tour QR codes', 'Scan analytics by country and device', 'SVG vector export for professional signs', 'No subscription or expiration'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do real estate agents use QR codes on property signs?',
          acceptedAnswer: { '@type': 'Answer', text: 'Real estate agents place QR codes on "For Sale" signs, open house flyers, and property brochures. When prospects scan the code, they are taken directly to the property listing, virtual tour, or lead inquiry form. Dynamic QR codes allow agents to update the destination URL — for example, changing from "active listing" to "under contract" or "sold" — without reprinting the sign.' },
        },
        {
          '@type': 'Question',
          name: 'Do real estate QR codes expire after 14 days?',
          acceptedAnswer: { '@type': 'Answer', text: 'On most QR generators, yes — dynamic codes expire after a 14-day free trial unless a subscription is purchased. This is a serious problem for real estate signs that stay in the ground for months. Truly Free QR guarantees permanent activation at zero cost. Your "For Sale" sign QR code will work from listing day to closing day and beyond.' },
        },
        {
          '@type': 'Question',
          name: 'Can I track how many people scan my property QR code?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every dynamic QR code on Truly Free QR includes real-time analytics: total scan count, unique visitors, country of origin, device type (mobile vs desktop), and hourly activity for the last 24 hours. This data helps agents understand prospect engagement with specific properties — all free, no account required.' },
        },
        {
          '@type': 'Question',
          name: 'What happens when a property sells — can I reuse the QR code?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. With a dynamic QR code, you can update the destination URL anytime from your dashboard. When a property sells, update the code to point to a "Sold — View Similar Properties" page or your next listing. The physical QR code on printed materials remains identical — only the destination changes.' },
        },
      ],
    },
  ],
}

export default function RealEstateQRPage() {
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 2, padding: '4px 10px', fontSize: 11, fontWeight: 700, color: '#0058c3', letterSpacing: '0.06em', marginBottom: 16 }}>✦ FREE FOREVER — UPDATE ANYTIME — NEVER EXPIRES</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 16px' }}>Free QR Codes for Real Estate — Property Listings That Never Go Dark</h1>
          <p style={{ fontSize: 16, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>Tired of QR codes on your "For Sale" signs expiring after 14 days? Truly Free QR gives real estate agents permanent dynamic codes — update your listing URL anytime without reprinting a single sign. Virtual tours, lead forms, property details — all accessible by scan, all free forever.</p>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 28px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Create Your Property QR Code Free →</Link>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 16px' }}>The Real Estate Problem — Signs That Go Dark</h2>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>A property listing can stay active for months. A QR code on most generators stays active for 14 days — then it dies unless you pay $100–$180 per year. Agents who use these generators face a brutal choice: pay the subscription or explain to clients why scanning their sign returns an error page.</p>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: 0 }}>Truly Free QR eliminates this problem entirely. Your property QR codes are permanently active on our dedicated VPS infrastructure — from listing day through closing, and beyond. When a property sells, update the destination to your next listing in seconds.</p>
        </div>

        <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 32, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 20px' }}>Real Estate Use Cases</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              ['For Sale Signs', 'Link directly to MLS listing, virtual tour, or lead capture form. Update instantly when listing status changes.'],
              ['Virtual Tours', 'Dynamic QR on print materials links to Matterport, YouTube walkthrough, or 3D tour. Update the tour URL without reprinting.'],
              ['Open House Flyers', 'Track exactly how many prospects scanned your open house flyer — by day, device, and location.'],
              ['Property Brochures', 'High-resolution SVG QR codes print perfectly on professional brochures at any size — no pixelation.'],
              ['Office Window Displays', 'One QR code per property card. Update listings as properties sell — the physical display stays unchanged.'],
              ['Email Signatures', 'Dynamic QR in email signatures links to your current featured listing — update weekly without changing the image.'],
            ].map(([title, desc]) => (
              <div key={title} style={{ background: '#fff', borderRadius: 8, padding: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0058c3', marginBottom: 6 }}>✓ {title}</div>
                <div style={{ fontSize: 12, color: '#4a5568', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 20px' }}>Truly Free QR vs. Paid Competitors</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(74,85,104,0.1)', borderRadius: 6, overflow: 'hidden' }}>
            {[
              ['Feature', 'Truly Free QR', 'Paid Competitors'],
              ['Dynamic QR Codes', '✓ Free Forever', '14-day trial only'],
              ['Expiration', 'Never', 'Expires without payment'],
              ['Annual Cost', '$0.00', '$111–$180/year'],
              ['Update Listing URL', 'Unlimited, Free', 'Subscription required'],
              ['Scan Analytics', '✓ Included Free', 'Paid plans only'],
              ['SVG for Print Signs', '✓ Free', 'Premium tier'],
              ['Account Required', 'No', 'Mandatory'],
            ].map(([feat, ours, theirs], i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div style={{ background: i === 0 ? '#181c1e' : '#fff', padding: '10px 14px', fontSize: i === 0 ? 11 : 13, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? '#fff' : '#181c1e', letterSpacing: i === 0 ? '0.06em' : 0 }}>{feat}</div>
                <div style={{ background: i === 0 ? '#0058c3' : 'rgba(0,88,195,0.04)', padding: '10px 14px', fontSize: i === 0 ? 11 : 13, fontWeight: i === 0 ? 700 : 600, color: i === 0 ? '#fff' : '#0058c3', letterSpacing: i === 0 ? '0.06em' : 0 }}>{ours}</div>
                <div style={{ background: i === 0 ? '#4a5568' : '#fff', padding: '10px 14px', fontSize: i === 0 ? 11 : 13, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? '#fff' : '#718096', letterSpacing: i === 0 ? '0.06em' : 0 }}>{theirs}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 24px' }}>Frequently Asked Questions</h2>
          {[
            ['How do real estate agents use QR codes on property signs?', 'Agents place QR codes on For Sale signs, open house flyers, and property brochures. When prospects scan, they go directly to the listing, virtual tour, or lead form. Dynamic codes let agents update the destination without reprinting.'],
            ['Do real estate QR codes expire after 14 days?', 'On most generators, yes. This is a serious problem for signs that stay up for months. Truly Free QR guarantees permanent activation at zero cost — your sign QR code works from listing day to closing day and beyond.'],
            ['Can I track how many people scan my property QR code?', 'Yes. Every dynamic code includes real-time analytics: scan count, unique visitors, country, device type, and hourly activity. Understand prospect engagement per property — all free, no account required.'],
            ['What happens when a property sells — can I reuse the QR code?', 'Yes. Update the destination URL from your dashboard anytime. When a property sells, point the code to a new listing or a sold confirmation page. The physical QR code stays identical — only the destination changes.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(74,85,104,0.1)', paddingTop: i === 0 ? 0 : 20, marginTop: i === 0 ? 0 : 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 8, letterSpacing: '-0.01em' }}>{q}</div>
              <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Create Your Free Real Estate QR Code Now →</Link>
          <p style={{ fontSize: 12, color: '#718096', marginTop: 12 }}>No account · No credit card · No expiration · Forever free</p>
        </div>
      </div>

      <footer style={{ background: '#fff', borderTop: '1px solid rgba(74,85,104,0.15)', padding: '20px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 8, flexWrap: 'wrap' }}>
          <Link href="/privacy-policy" style={{ fontSize: 12, color: '#718096', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms-of-service" style={{ fontSize: 12, color: '#718096', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
        <div style={{ fontSize: 11, color: '#718096' }}>
          © 2026 Truly Free QR · Built by <a href="https://klickifyagency.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0058c3', fontWeight: 600, textDecoration: 'none' }}>Klickify Agency</a>
        </div>
      </footer>
    </div>
  )
}
