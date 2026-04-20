import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'QR Code Generator No Subscription — Truly Free, Always | Truly Free QR',
  description: 'Generate dynamic QR codes without any subscription. No 14-day trial, no credit card, no hidden fees. Permanent dynamic codes free forever — no account required.',
  keywords: ['qr code no subscription', 'qr code generator without subscription', 'free dynamic qr code no subscription', 'qr code no monthly fee', 'dynamic qr code without paying'],
  alternates: { canonical: 'https://trulyfreeqr.com/qr-code-no-subscription' },
  openGraph: {
    title: 'QR Code Generator No Subscription — Truly Free, Always',
    description: 'The only QR generator with zero subscription model. Dynamic codes, real-time analytics, SVG export — permanently free.',
    url: 'https://trulyfreeqr.com/qr-code-no-subscription',
    siteName: 'Truly Free QR',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Truly Free QR — No Subscription QR Code Generator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://trulyfreeqr.com/qr-code-no-subscription',
      offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock', priceValidUntil: '2099-12-31' },
      featureList: ['Dynamic QR codes with zero subscription', 'No credit card required', 'No 14-day trial period', 'Permanent activation guaranteed', 'Real-time analytics free', 'SVG vector export free'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is there a QR code generator with no subscription?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Truly Free QR is the only generator that provides dynamic QR codes with zero subscription model. There is no trial period, no credit card requirement, and no hidden fees. The service is funded by non-intrusive Google AdSense advertising, which means you get premium features permanently free.' },
        },
        {
          '@type': 'Question',
          name: 'Why do QR code generators charge subscriptions?',
          acceptedAnswer: { '@type': 'Answer', text: 'Dynamic QR codes require server infrastructure to handle redirects. Most generators monetize this by charging $100–$180 per year after a free trial. They deliberately wait until users print codes on physical materials before deactivating them, creating dependency. Truly Free QR uses an ad-supported model instead, eliminating the subscription requirement entirely.' },
        },
        {
          '@type': 'Question',
          name: 'Do free dynamic QR codes without subscription actually work long-term?',
          acceptedAnswer: { '@type': 'Answer', text: 'On Truly Free QR, yes. Our dynamic codes use a redirect infrastructure built on a dedicated VPS with Redis caching, delivering sub-5ms redirect speeds. The service is sustainable through advertising revenue, not subscriptions. Your codes will remain active indefinitely without any payment.' },
        },
        {
          '@type': 'Question',
          name: 'What is the catch with a free QR code generator with no subscription?',
          acceptedAnswer: { '@type': 'Answer', text: 'There is no catch. Truly Free QR displays non-intrusive advertisements on the generator page — the same model used by Google, YouTube, and most major web services. You see ads, your QR codes stay active forever. No data selling, no hidden fees, no subscription traps.' },
        },
      ],
    },
  ],
}

export default function NoSubscriptionPage() {
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 2, padding: '4px 10px', fontSize: 11, fontWeight: 700, color: '#0058c3', letterSpacing: '0.06em', marginBottom: 16 }}>✦ ZERO SUBSCRIPTION — ZERO HIDDEN FEES</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 16px' }}>QR Code Generator With No Subscription — Dynamic Codes Free Forever</h1>
          <p style={{ fontSize: 16, color: '#4a5568', lineHeight: 1.7, margin: '0 0 24px' }}>The only QR generator with a genuine zero-subscription model. Dynamic codes, real-time analytics, SVG export — all permanently free. No credit card, no trial period, no catch.</p>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 28px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Create QR Code — No Subscription →</Link>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 16px' }}>The Subscription Trap — How It Works and How We Ended It</h2>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>Every major QR code generator uses the same playbook: offer dynamic codes free for 14 days, wait until businesses print them on menus, business cards, product packaging, and trade show materials — then send a payment demand. Pay $111–$180 per year or watch your codes go dark.</p>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>Trustpilot reviews of the market leader use words like "blackmail" and "hostage." Small businesses report losing hundreds of dollars in wasted print materials because of this model.</p>
          <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: 0 }}>Truly Free QR runs on Google AdSense advertising. You see a non-intrusive ad. Your codes stay active forever. That is the entire business model — transparent, ethical, permanent.</p>
        </div>

        <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 32, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 20px' }}>What You Get — No Subscription Required</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              ['Dynamic QR Codes', 'Edit destination URL anytime without reprinting. Active forever.'],
              ['Real-time Analytics', 'Scan count, country, device type, hourly activity. All free.'],
              ['SVG Vector Export', 'Infinitely scalable for professional print. No watermark.'],
              ['Safe-Scan Protection', 'Destination URL verified before every redirect. Anti-phishing built-in.'],
              ['Anonymous Dashboard', 'All your QR codes saved in your browser. No account needed.'],
              ['Sub-5ms Redirects', 'Redis-cached infrastructure on dedicated VPS. Zero latency.'],
            ].map(([title, desc]) => (
              <div key={title} style={{ background: '#fff', borderRadius: 8, padding: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0058c3', marginBottom: 4 }}>✓ {title}</div>
                <div style={{ fontSize: 12, color: '#4a5568', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, padding: 32, marginBottom: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 24px' }}>Frequently Asked Questions</h2>
          {[
            ['Is there a QR code generator with no subscription?', 'Yes. Truly Free QR provides dynamic QR codes with zero subscription model. No trial period, no credit card, no hidden fees. Funded by non-intrusive Google AdSense advertising.'],
            ['Why do QR code generators charge subscriptions?', 'Dynamic QR codes require server infrastructure. Most generators charge $100–$180 per year after a free trial, deliberately waiting until users print codes before deactivating them. Truly Free QR uses an ad-supported model instead.'],
            ['Do free dynamic QR codes without subscription work long-term?', 'On Truly Free QR, yes. Our infrastructure runs on a dedicated VPS with Redis caching for sub-5ms redirects. Sustainable through advertising revenue, not subscriptions. Your codes remain active indefinitely.'],
            ['What is the catch with a free QR code generator with no subscription?', 'No catch. Truly Free QR displays non-intrusive ads on the generator page — the same model used by Google and YouTube. You see ads, your codes stay active forever. No data selling, no hidden fees, no subscription traps.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(74,85,104,0.1)', paddingTop: i === 0 ? 0 : 20, marginTop: i === 0 ? 0 : 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 8, letterSpacing: '-0.01em' }}>{q}</div>
              <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '14px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>Generate Your Free QR Code Now — No Subscription →</Link>
          <p style={{ fontSize: 12, color: '#718096', marginTop: 12 }}>No account · No credit card · No subscription · Forever free</p>
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
