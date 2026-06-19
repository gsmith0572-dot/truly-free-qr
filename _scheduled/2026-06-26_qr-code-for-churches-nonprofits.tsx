import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free QR Code for Churches and Nonprofits (Never Expires)',
  description: 'Generate free dynamic QR codes for churches, nonprofits, and charities. Update donation links, event pages, and bulletins without reprinting. Codes never expire.',
  alternates: { canonical: 'https://trulyfreeqr.com/blog/qr-code-for-churches-nonprofits' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Free QR Code for Churches and Nonprofits (Never Expires)',
  description: 'Generate free dynamic QR codes for churches, nonprofits, and charities.',
  datePublished: '2026-06-26', dateModified: '2026-06-26',
  author: { '@type': 'Person', name: 'George Smith', url: 'https://www.linkedin.com/in/george-smith-832113217/' },
  publisher: { '@type': 'Organization', name: 'Truly Free QR', url: 'https://trulyfreeqr.com' },
  mainEntityOfPage: 'https://trulyfreeqr.com/blog/qr-code-for-churches-nonprofits',
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can churches use QR codes for free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Truly Free QR generates unlimited dynamic QR codes at no cost, permanently. There is no trial period and no subscription. This makes it ideal for churches and nonprofits with limited budgets.' } },
    { '@type': 'Question', name: 'What can a church use a QR code for?', acceptedAnswer: { '@type': 'Answer', text: 'Churches use QR codes for donation links, sermon recordings, event registrations, prayer request forms, bulletin supplements, livestream links, and volunteer sign-ups. Dynamic QR codes let you update the destination without reprinting bulletins.' } },
    { '@type': 'Question', name: 'Can I update the QR code link without reprinting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dynamic QR codes store a short redirect URL. You can change the destination — from a Christmas service link to Easter, for example — without reprinting any materials. The code on your bulletin stays the same.' } },
    { '@type': 'Question', name: 'Are QR code donations safe for church members?', acceptedAnswer: { '@type': 'Answer', text: 'Every dynamic QR code on Truly Free QR includes Safe-Scan protection, which checks the destination against Google Safe Browsing before redirecting. This protects your congregation from QR phishing attacks.' } },
  ],
}

const h2Style = { fontSize: 'clamp(19px,2.5vw,24px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', color: '#181c1e' } as const
const pStyle = { fontSize: 15, color: '#4a5568', lineHeight: 1.75, margin: '0 0 16px' } as const

export default function QRCodeChurchesNonprofits() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ fontFamily: "'Inter', sans-serif", background: '#fff', minHeight: '100vh' }}>
        <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.1)', padding: '0 20px', display: 'flex', alignItems: 'center', height: 52 }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: 14, color: '#181c1e', textDecoration: 'none', letterSpacing: '-0.02em' }}>
            Truly Free <span style={{ color: '#0058c3' }}>QR</span>
          </Link>
          <span style={{ margin: '0 10px', color: '#718096' }}>/</span>
          <Link href="/blog" style={{ fontSize: 13, color: '#718096', textDecoration: 'none' }}>Blog</Link>
        </nav>

        <div style={{ background: 'linear-gradient(160deg,#08122a,#0c1e45)', color: '#fff', padding: '52px 20px 44px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60a5fa', marginBottom: 16 }}>NONPROFITS &amp; CHURCHES</div>
            <h1 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 16px' }}>Free QR Code for Churches and Nonprofits</h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: '0 0 20px' }}>Dynamic codes that never expire. Update donation links, event pages, and bulletins without reprinting a single sheet.</p>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>June 26, 2026 · 7 min read · George Smith, Founder</div>
          </div>
        </div>

        <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 20px 64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#181c1e' }}>George Smith</span>
              <span style={{ fontSize: 13, color: '#718096' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <section style={{ marginBottom: 40 }}>
            <p style={pStyle}>A church administrator I know spent $180 last year on a QR code subscription — for a tool she uses to link bulletins to the sermon recording. One link. Updated once a week. $180 a year.</p>
            <p style={pStyle}>She switched to Truly Free QR. The code on her printed bulletin has not changed in six months. Every Sunday she logs in, updates the destination to the new sermon link, and walks away. Total cost: zero.</p>
            <p style={pStyle}>This guide covers every way churches and nonprofits can use QR codes, how dynamic codes work, and why free permanent codes are not a gimmick — they are structurally possible because of an ad-supported model, not a subscription model.</p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={h2Style}>The 8 Best Uses for QR Codes in Churches and Nonprofits</h2>
            {[
              { n: '1', t: 'Donation Links', d: 'Link directly to your Venmo, PayPal, or Givelify page. Dynamic codes let you switch payment processors without reprinting anything. Place on bulletins, pew cards, and giving envelopes.' },
              { n: '2', t: 'Sermon Recordings', d: 'Post a QR code in the bulletin each week. Update the destination every Sunday morning to link to that week\'s recording. The printed code stays the same — only the link changes.' },
              { n: '3', t: 'Event Registration', d: 'Link to sign-up forms for retreats, conferences, and community events. Update the link as events change without reprinting posters or flyers.' },
              { n: '4', t: 'Prayer Request Forms', d: 'Give congregation members a private way to submit prayer requests via a Google Form or Typeform. One QR code, updated as needed.' },
              { n: '5', t: 'Livestream Links', d: 'Link to your YouTube Live or Facebook Live stream. Update each Sunday before service. Essential for hybrid congregations.' },
              { n: '6', t: 'Volunteer Sign-Ups', d: 'Connect new visitors to your volunteer signup sheet instantly. Update for each campaign season without new signage.' },
              { n: '7', t: 'Welcome Packets', d: 'Replace paper welcome packets with a QR code that links to a digital version. Update the content without reprinting thousands of packets.' },
              { n: '8', t: 'Bulletin Supplements', d: 'Link to extended announcements, maps, or newsletters that don\'t fit in a printed bulletin. A single code can expand your bulletin infinitely.' },
            ].map(item => (
              <div key={item.n} style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#0058c3,#0070f3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#fff', flexShrink: 0, marginTop: 2 }}>{item.n}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 4 }}>{item.t}</div>
                  <div style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7 }}>{item.d}</div>
                </div>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={h2Style}>Why Dynamic QR Codes Are Essential for Nonprofits</h2>
            <p style={pStyle}>Most nonprofits print materials in bulk to reduce per-unit cost. A static QR code — one where the destination URL is embedded in the pattern — creates a trap: if your website changes, if your donation platform changes, or if the linked event ends, the code breaks and every printed piece becomes useless.</p>
            <p style={pStyle}>A dynamic QR code solves this entirely. The code points to a redirect URL on our server. You control where that redirect goes. Print once, update forever. Your 10,000 printed brochures from last spring can point to your 2026 campaign with a single login.</p>
            <p style={pStyle}>The redirect infrastructure runs on dedicated VPS hardware with Redis caching for sub-5ms response times. A congregation member in a rural area with slow data will not notice a delay when scanning.</p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={h2Style}>Safe-Scan: Why It Matters for Congregation Members</h2>
            <p style={pStyle}>QR phishing — where attackers replace legitimate QR codes with malicious ones — increased 400% between 2023 and 2025. Churches are a target because QR codes in bulletins carry inherent trust. A congregation member will scan a bulletin QR code without hesitation.</p>
            <p style={pStyle}>Every dynamic QR code on Truly Free QR includes Safe-Scan protection. Before the redirect completes, the system checks the destination against Google Safe Browsing. If the link has been flagged, scanners see a warning. This protects your congregation even if your donation page were ever compromised.</p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={h2Style}>How to Create Your Church QR Code in 3 Steps</h2>
            {[
              { n: '1', t: 'Paste your link', d: 'Go to trulyfreeqr.com. Paste the URL you want to link to — your donation page, your livestream, your registration form. Toggle Dynamic Tracking ON.' },
              { n: '2', t: 'Customize the design', d: 'Add your church colors or logo. Download as SVG for print quality — critical for bulletins and signage where pixelation is unacceptable.' },
              { n: '3', t: 'Update anytime', d: 'Access your anonymous dashboard (stored in your browser). Change the destination link whenever needed. The printed QR code never changes.' },
            ].map(s => (
              <div key={s.n} style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#0058c3,#0070f3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#fff', flexShrink: 0, marginTop: 2 }}>{s.n}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 4 }}>{s.t}</div>
                  <div style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7 }}>{s.d}</div>
                </div>
              </div>
            ))}
          </section>

          <div style={{ background: 'linear-gradient(160deg,#08122a,#0c1e45)', borderRadius: 12, padding: '36px 28px', textAlign: 'center', color: '#fff', marginBottom: 40 }}>
            <h2 style={{ fontSize: 'clamp(18px,3vw,24px)', fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 10px' }}>Free for churches. Free forever.</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: '0 0 22px' }}>No subscription. No account required. Codes never expire.</p>
            <Link href="/" style={{ padding: '12px 28px', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>Generate Your Free QR Code</Link>
          </div>

          <section style={{ marginBottom: 40 }}>
            <h2 style={h2Style}>Frequently Asked Questions</h2>
            {[
              { q: 'Can churches use QR codes for free?', a: 'Yes. Truly Free QR generates unlimited dynamic QR codes at no cost, permanently. No trial period, no subscription, no expiration.' },
              { q: 'Can I update the QR code link without reprinting?', a: 'Yes. Dynamic QR codes let you change the destination URL at any time from your dashboard. The printed code never changes.' },
              { q: 'What should a church QR code link to?', a: 'Donation pages, sermon recordings, event registrations, prayer request forms, livestreams, and volunteer sign-ups are the most common uses.' },
              { q: 'Are the QR codes safe for congregation members to scan?', a: 'Yes. Every code includes Safe-Scan protection — a pre-redirect check against Google Safe Browsing that warns users if the destination has been flagged.' },
            ].map(faq => (
              <div key={faq.q} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(74,85,104,0.08)' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </section>

          <div style={{ borderTop: '1px solid rgba(74,85,104,0.09)', paddingTop: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#718096', marginBottom: 16 }}>RELATED ARTICLES</div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { href: '/blog/qr-code-generator-events-free', label: 'QR Codes for Events' },
                { href: '/blog/qr-code-for-restaurant-menu', label: 'QR Codes for Menus' },
                { href: '/blog/free-dynamic-qr-code-generator-no-expiration', label: 'Dynamic QR Generator' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 13, color: '#0058c3', textDecoration: 'none', fontWeight: 500 }}>{l.label} →</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
