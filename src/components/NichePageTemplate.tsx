'use client'
import Link from 'next/link'
import { useState } from 'react'
import AdSlot from '@/components/ads/AdSlot'

export interface FAQ { q: string; a: string }
export interface Step { icon: string; title: string; desc: string }
export interface UseCase { icon: string; title: string; desc: string }
export interface ComparisonRow { feature: string; us: string; them: string }

export interface NichePageProps {
  industry: string
  headline: string
  subheadline: string
  ctaLabel: string
  ctaHref: string
  painKeyword: string
  steps: Step[]
  useCases: UseCase[]
  faqs: FAQ[]
  comparisonRows: ComparisonRow[]
  showSavingsCalc?: boolean
  slug: string
}

function SavingsCalculator() {
  const [count, setCount] = useState(3)
  const savings = count * 156
  return (
    <div style={{ background: 'linear-gradient(135deg,rgba(0,88,195,0.06),rgba(0,112,243,0.04))', border: '1px solid rgba(0,88,195,0.15)', borderRadius: 8, padding: '28px 24px', marginBottom: 48 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0058c3', marginBottom: 8 }}>SAVINGS CALCULATOR</div>
      <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 20px', color: '#181c1e' }}>How much are you saving by switching to Truly Free QR?</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
        <div>
          <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', display: 'block', marginBottom: 6 }}>Number of QR codes</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={() => setCount(Math.max(1, count - 1))} style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid rgba(74,85,104,0.2)', background: '#fff', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#181c1e' }}>−</button>
            <span style={{ fontSize: 24, fontWeight: 700, color: '#181c1e', minWidth: 32, textAlign: 'center' }}>{count}</span>
            <button onClick={() => setCount(count + 1)} style={{ width: 32, height: 32, borderRadius: 4, border: '1px solid rgba(74,85,104,0.2)', background: '#fff', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#181c1e' }}>+</button>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 6 }}>Annual cost on competitors</div>
          <div style={{ fontSize: 13, color: '#dc2626', fontWeight: 600 }}>{count} codes × $156/year = <span style={{ fontSize: 20 }}>${savings}/year</span></div>
        </div>
        <div style={{ textAlign: 'center', background: 'linear-gradient(135deg,#0058c3,#0070f3)', borderRadius: 8, padding: '16px 24px', minWidth: 160 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Your savings</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#fff' }}>${savings}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>per year with Truly Free QR</div>
        </div>
      </div>
      <div style={{ fontSize: 12, color: '#718096' }}>Based on QR Tiger Pro at $156/year. QR Code Generator Pro charges up to $180/year. Your actual savings may be higher.</div>
    </div>
  )
}

export default function NichePageTemplate({
  industry, headline, subheadline, ctaLabel, ctaHref,
  painKeyword, steps, useCases, faqs, comparisonRows, showSavingsCalc, slug,
}: NichePageProps) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh', color: '#181c1e' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.12)', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
            <defs><linearGradient id="nlg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0058c3"/><stop offset="100%" stopColor="#0070f3"/></linearGradient></defs>
            <rect width="36" height="36" rx="8" fill="url(#nlg)"/><rect x="5" y="5" width="26" height="26" rx="3" fill="white"/><rect x="9" y="9" width="18" height="18" rx="2" fill="url(#nlg)"/><rect x="13" y="13" width="10" height="10" rx="1" fill="white"/><ellipse cx="18" cy="18" rx="3.5" ry="5" fill="url(#nlg)"/><ellipse cx="18" cy="18" rx="5" ry="3.5" fill="url(#nlg)" opacity="0.7"/>
          </svg>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: '-0.02em', color: '#181c1e' }}>Truly Free <span style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>QR</span></span>
        </a>
        <Link href="/" style={{ padding: '7px 18px', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em' }}>Free QR Generator →</Link>
      </nav>

      <div style={{ background: 'linear-gradient(160deg,#08122a 0%,#0c1e45 55%,#08122a 100%)', color: '#fff', padding: '64px 20px 52px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,112,243,0.12)', border: '1px solid rgba(0,112,243,0.25)', borderRadius: 2, padding: '4px 12px', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#60a5fa', marginBottom: 22 }}>
            FREE FOREVER — NO ACCOUNT — NO EXPIRATION — SAFE-SCAN ACTIVE
          </div>
          <h1 style={{ fontSize: 'clamp(24px,4.5vw,42px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 18px' }}>{headline}</h1>
          <p style={{ fontSize: 'clamp(14px,2vw,17px)', color: 'rgba(255,255,255,0.68)', lineHeight: 1.65, maxWidth: 620, margin: '0 auto 32px' }}>{subheadline}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            <Link href={ctaHref} style={{ padding: '14px 32px', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, fontSize: 15, fontWeight: 700, textDecoration: 'none', letterSpacing: '-0.01em', boxShadow: '0 4px 20px rgba(0,88,195,0.35)' }}>{ctaLabel}</Link>
            <Link href="/" style={{ padding: '14px 22px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.85)', borderRadius: 4, fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>See All Features</Link>
          </div>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', fontSize: 12, color: 'rgba(255,255,255,0.48)' }}>
            {['$0 forever','No credit card','No account required','Codes never expire','<5ms redirect speed','Safe-Scan protection'].map(t => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ color: '#22c55e' }}>✓</span>{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 20px' }}>

        <div style={{ margin: '36px 0 48px' }}>
          <AdSlot slot="1234567890" format="leaderboard" />
        </div>

        <section style={{ marginBottom: 56 }}>
          <div style={{ background: 'linear-gradient(135deg,rgba(220,38,38,0.04),rgba(220,38,38,0.02))', border: '1px solid rgba(220,38,38,0.12)', borderRadius: 8, padding: '28px 24px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#dc2626', marginBottom: 10 }}>THE INDUSTRY PROBLEM</div>
            <h2 style={{ fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 14px', color: '#181c1e' }}>Why did my {industry} QR code stop working?</h2>
            <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: '0 0 16px' }}>
              Most QR generators offer a "free" dynamic QR code — then deactivate it after 14 days unless you pay $111–$180 per year. This practice, known as the QR bait-and-switch, has left thousands of {industry.toLowerCase()} professionals with broken codes on printed materials they cannot replace overnight. Users on Trustpilot describe feeling "blackmailed" after codes printed on menus, signage, and product packaging suddenly stopped working.
            </p>
            <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#181c1e' }}>Truly Free QR is built on a different model.</strong> Our revenue comes from advertising — not from threatening to deactivate your codes. Dynamic QR codes with no expiration, no trial limit, and no subscription are not a premium feature here. They are the baseline.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0058c3', marginBottom: 8 }}>HOW IT WORKS</div>
            <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Generate your {industry} QR code in 3 steps</h2>
            <p style={{ fontSize: 14, color: '#718096', margin: 0 }}>No account. No email. No friction. Under 30 seconds.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 16 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 8, padding: '26px 22px', border: '1px solid rgba(74,85,104,0.09)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 16, right: 16, width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,88,195,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: '#0058c3' }}>{i + 1}</div>
                <div style={{ fontSize: 26, marginBottom: 14 }}>{s.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 7, color: '#181c1e', letterSpacing: '-0.01em' }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#718096', lineHeight: 1.55 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0058c3', marginBottom: 8 }}>TECHNICAL INFRASTRUCTURE</div>
            <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Why our {industry} QR codes are technically superior</h2>
            <p style={{ fontSize: 14, color: '#718096', margin: 0, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>Built on dedicated VPS infrastructure with Redis caching — not shared cloud functions that throttle under load.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
            {[
              { icon: '⚡', title: '<5ms Redirect Speed', desc: 'Redis in-memory cache serves redirects in under 5 milliseconds. Zero perceptible delay for users scanning in real environments.' },
              { icon: '🛡️', title: 'Safe-Scan Protection', desc: 'Every code includes destination preview before redirect. Protects users from QR phishing (quishing) attacks, up 400% since 2023.' },
              { icon: '♾️', title: 'No Expiration Architecture', desc: 'Ad-supported revenue model means zero financial incentive to deactivate your codes. Infrastructure funded by ads, not subscription threats.' },
              { icon: '📐', title: 'SVG Vector Export', desc: 'Download as SVG for infinite-resolution printing. Critical for professional materials where pixelation destroys credibility.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 8, padding: '22px 20px', border: '1px solid rgba(74,85,104,0.09)' }}>
                <div style={{ fontSize: 24, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: '#181c1e' }}>{f.title}</div>
                <div style={{ fontSize: 12, color: '#718096', lineHeight: 1.55 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {showSavingsCalc && <SavingsCalculator />}

        <section style={{ marginBottom: 56 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#dc2626', marginBottom: 8 }}>COMPETITOR COMPARISON</div>
            <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Truly Free QR vs. paid generators</h2>
            <p style={{ fontSize: 14, color: '#718096', margin: 0 }}>Why {painKeyword} is the smarter choice for {industry.toLowerCase()} professionals.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 8, border: '1px solid rgba(74,85,104,0.09)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', background: '#f7fafc', padding: '14px 22px', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', borderBottom: '1px solid rgba(74,85,104,0.09)' }}>
              <span>Feature</span>
              <span style={{ color: '#0058c3' }}>✦ Truly Free QR</span>
              <span>Paid Generators</span>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', padding: '13px 22px', borderBottom: i < comparisonRows.length - 1 ? '1px solid rgba(74,85,104,0.06)' : 'none', fontSize: 13, background: i % 2 === 0 ? '#fff' : '#fafbfc', alignItems: 'center' }}>
                <span style={{ fontWeight: 500, color: '#4a5568' }}>{row.feature}</span>
                <span style={{ fontWeight: 600, color: '#16a34a', fontSize: 13 }}>✓ {row.us}</span>
                <span style={{ color: '#dc2626', fontSize: 13 }}>✗ {row.them}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0058c3', marginBottom: 8 }}>USE CASES</div>
            <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>Built for {industry} professionals</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
            {useCases.map((u, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 8, padding: '20px', border: '1px solid rgba(74,85,104,0.09)' }}>
                <div style={{ fontSize: 22, marginBottom: 10 }}>{u.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 5, color: '#181c1e' }}>{u.title}</div>
                <div style={{ fontSize: 12, color: '#718096', lineHeight: 1.55 }}>{u.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0058c3', marginBottom: 8 }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Common questions about {industry} QR codes</h2>
            <p style={{ fontSize: 14, color: '#718096', margin: 0 }}>Straight answers. No marketing fluff.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 8, padding: '22px 26px', border: '1px solid rgba(74,85,104,0.09)' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#181c1e', marginBottom: 9, letterSpacing: '-0.01em' }}>Q: {faq.q}</div>
                <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.65 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginBottom: 48 }}>
          <AdSlot slot="1122334455" format="mobile-banner" />
        </div>

        <section style={{ marginBottom: 56, background: 'linear-gradient(160deg,#08122a,#0c1e45)', borderRadius: 12, padding: '48px 32px', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60a5fa', marginBottom: 14 }}>START NOW — FREE FOREVER</div>
          <h2 style={{ fontSize: 'clamp(20px,3vw,30px)', fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 12px' }}>Generate your permanent {industry} QR code now</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: '0 0 28px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>No account. No credit card. No expiration. No free trial that deactivates your code after 14 days. Ever.</p>
          <Link href={ctaHref} style={{ padding: '14px 36px', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,88,195,0.4)' }}>{ctaLabel}</Link>
        </section>
      </div>

      <footer style={{ background: '#fff', borderTop: '1px solid rgba(74,85,104,0.09)', padding: '24px 20px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, alignItems: 'center', fontSize: 12, color: '#718096' }}>
          <span>© 2026 Truly Free QR — Precision Instruments</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/" style={{ color: '#718096', textDecoration: 'none' }}>Generator</Link>
            <Link href="/about" style={{ color: '#718096', textDecoration: 'none' }}>About</Link>
            <Link href="/privacy-policy" style={{ color: '#718096', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/contact" style={{ color: '#718096', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
