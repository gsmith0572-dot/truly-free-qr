import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free QR Code for Restaurants — Dynamic Menu QR, Never Expires | Truly Free QR',
  description: 'Create a dynamic QR code for your restaurant menu — free forever. Update your menu anytime without reprinting. No subscription, no 14-day trial, no account required.',
  keywords: ['qr code for restaurants', 'restaurant menu qr code', 'contactless menu qr', 'dynamic qr code restaurant free', 'qr code menu no expiration'],
  alternates: { canonical: 'https://trulyfreeqr.com/qr-code-for-restaurants' },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon-512.png?v=3",
  },
  openGraph: {
    title: 'Free QR Code for Restaurants — Dynamic Menu QR, Never Expires',
    description: 'The only QR generator built for restaurants that guarantees your codes never expire. Update menus, track scans, download SVG — all free.',
    url: 'https://trulyfreeqr.com/qr-code-for-restaurants',
    siteName: 'Truly Free QR',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Truly Free QR — Restaurant Menu QR Code Generator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://trulyfreeqr.com/qr-code-for-restaurants',
      offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      featureList: ['Dynamic QR codes that never expire', 'Real-time menu updates without reprinting', 'Scan analytics by country and device', 'SVG vector export for print', 'No account required'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do dynamic QR codes for restaurants expire?',
          acceptedAnswer: { '@type': 'Answer', text: 'On Truly Free QR, never. Most competitors deactivate dynamic QR codes after a 14-day free trial and demand annual subscriptions exceeding $100. We guarantee permanent activation at zero cost — your printed menus will never become obsolete due to an expired subscription.' },
        },
        {
          '@type': 'Question',
          name: 'How do I create a free dynamic QR code for my restaurant menu?',
          acceptedAnswer: { '@type': 'Answer', text: 'Paste your menu URL into Truly Free QR, click Make Dynamic, and download your code in PNG or SVG format. The QR code points to a short redirect URL hosted on our high-performance VPS infrastructure with sub-5ms response time. When your menu changes, update the destination URL in your dashboard — no reprinting required. The process takes under 60 seconds and requires no account or email.' },
        },
        {
          '@type': 'Question',
          name: 'Why did my restaurant QR code stop working?',
          acceptedAnswer: { '@type': 'Answer', text: 'If your QR code stopped working, your previous provider likely deactivated it after a free trial period ended. This is a common practice among paid QR generators that use dynamic codes as bait to force subscriptions. On Truly Free QR, codes are permanently active. Our infrastructure runs on a dedicated VPS with Redis caching, meaning your codes resolve in under 5 milliseconds — and they never expire.' },
        },
        {
          '@type': 'Question',
          name: 'Is it safe for restaurant customers to scan QR codes?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, when generated through Truly Free QR. Every dynamic code includes Safe-Scan protection: the destination URL is verified before redirection to prevent QR phishing (quishing) attacks, which grew 400% between 2023 and 2025. Customers can preview the destination before being redirected.' },
        },
        {
          '@type': 'Question',
          name: 'Can I track how many customers scan my restaurant QR code?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every dynamic QR code on Truly Free QR includes real-time analytics: total scan count, country of origin, device type (mobile vs desktop), and hourly scan activity. These analytics are free and accessible from your dashboard without creating an account.' },
        },
      ],
    },
  ],
}

export default function RestaurantQRPage() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 2, padding: '4px 10px', fontSize: 11, fontWeight: 700, color: '#0058c3', letterSpacing: '0.06em', marginBottom: 16 }}>✦ FREE FOREVER — NO SUBSCRIPTION</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 16px' }}>Dynamic QR Codes for Restaurants — Free, Permanent, Never Expires</h1>
          <p style={{ fontSize: 16, color: '#4a5568', lineHeight: 1.7, margin: '0 0 24px' }}>Create a contactless menu QR code in under 60 seconds. Update your menu URL anytime without reprinting a single item. No subscription, no 14-day trial, no account required — ever.</p>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 28px', fontSize: 15, fontWeight: 700, textDecoration: 'none', letterSpacing: '-0.01em' }}>Create Your Restaurant QR Code Free →</Link>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 16px' }}>The Industry Problem — And Why We Built This</h2>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>The restaurant industry lost millions in wasted print materials because of a predatory industry practice: QR code generators offer "free" dynamic codes, wait until restaurants print them on menus, table cards, and signage — then deactivate the codes unless a subscription of $100–$180 per year is paid.</p>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: 0 }}>Truly Free QR was built to end this. Our infrastructure runs on a dedicated high-performance server with Redis caching — your QR code resolves in under 5 milliseconds and remains active permanently. No trial. No expiration. No hostage codes.</p>
        </div>

        <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 32, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 20px' }}>Truly Free QR vs. The Competition</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(74,85,104,0.1)', borderRadius: 6, overflow: 'hidden' }}>
            {[
              ['Feature', 'Truly Free QR', 'Paid Competitors'],
              ['Dynamic QR Codes', '✓ Free Forever', '14-day trial only'],
              ['Expiration', 'Never', 'Expires without payment'],
              ['Annual Cost', '$0.00', '$111 – $180/year'],
              ['Account Required', 'No', 'Mandatory'],
              ['Scan Analytics', '✓ Included Free', 'Paid plans only'],
              ['SVG Export', '✓ Free', 'Premium tier'],
              ['Safe-Scan Protection', '✓ Built-in', 'Not available'],
              ['Menu Updates', 'Unlimited, Free', 'Subscription required'],
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
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 16px' }}>How It Works — 3 Steps</h2>
          {[
            ['1. Paste Your Menu URL', 'Enter the URL of your online menu — Google Drive PDF, website, or any link. The generator creates a QR code instantly, no account needed.'],
            ['2. Click Make Dynamic (Free)', 'Your code is saved to our high-performance infrastructure. The redirect resolves in under 5ms via Redis caching on a dedicated server.'],
            ['3. Download and Print', 'Download in PNG (3000×3000px) or SVG vector for unlimited print scaling. When your menu changes, update the destination from your dashboard — no reprinting.'],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, background: 'linear-gradient(135deg,#0058c3,#0070f3)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700 }}>{String(title)[0]}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#181c1e', marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 24px' }}>Frequently Asked Questions</h2>
          {[
            ['Do dynamic QR codes for restaurants expire?', 'On Truly Free QR, never. Most competitors deactivate dynamic QR codes after a 14-day free trial and demand annual subscriptions of $100–$180. We guarantee permanent activation at zero cost. Your printed menus will never become obsolete due to an expired subscription.'],
            ['How do I create a free dynamic QR code for my restaurant menu?', 'Paste your menu URL into Truly Free QR, click Make Dynamic, and download in PNG or SVG. The code points to a short redirect URL on our VPS infrastructure with sub-5ms response time. When your menu changes, update the destination from your dashboard — no reprinting required. The entire process takes under 60 seconds with no account or email needed.'],
            ['Why did my restaurant QR code stop working?', 'Your previous provider deactivated it after a free trial ended. This is standard practice: dynamic codes are used as bait to force subscriptions. On Truly Free QR, codes are permanently active. Our dedicated server with Redis caching ensures your codes resolve in under 5 milliseconds — and they never expire.'],
            ['Is it safe for customers to scan QR codes at my restaurant?', 'Yes, when generated through Truly Free QR. Every dynamic code includes Safe-Scan protection: the destination URL is verified before redirection to prevent QR phishing (quishing) attacks, which grew 400% between 2023 and 2025.'],
            ['Can I track how many customers scan my restaurant QR code?', 'Yes. Every dynamic QR code includes real-time analytics: total scan count, country of origin, device type, and hourly activity — all free, no account required.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(74,85,104,0.1)', paddingTop: i === 0 ? 0 : 20, marginTop: i === 0 ? 0 : 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 8, letterSpacing: '-0.01em' }}>{q}</div>
              <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Create Your Free Restaurant QR Code Now →</Link>
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
