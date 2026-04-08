'use client'
import { useState, useEffect, useRef } from 'react'
import QRCode from 'qrcode'

const TABS = ['URL', 'WiFi', 'vCard', 'PDF', 'Text', 'Email']
const CATEGORIES = ['Marketing', 'Restaurant', 'Real Estate', 'Events', 'Product', 'Personal']

export default function QRGenerator() {
  const [activeTab, setActiveTab] = useState('URL')
  const [url, setUrl] = useState('')
  const [projectName, setProjectName] = useState('')
  const [category, setCategory] = useState('Marketing')
  const [dynamic, setDynamic] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    if (url.length > 3) {
      QRCode.toCanvas(canvasRef.current, url, { width: 200, margin: 2, color: { dark: '#0058c3', light: '#ffffff' } })
    } else {
      const ctx = canvasRef.current.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0, 0, 200, 200)
      ctx.fillStyle = '#f1f4f6'
      ctx.fillRect(0, 0, 200, 200)
      ctx.fillStyle = '#718096'
      ctx.font = '13px system-ui'
      ctx.textAlign = 'center'
      ctx.fillText('Enter URL to generate', 100, 95)
      ctx.fillText('your QR code', 100, 113)
    }
  }, [url])

  useEffect(() => {
    const saved = localStorage.getItem('tfqr_last')
    if (saved) { try { const d = JSON.parse(saved); setUrl(d.url || ''); setProjectName(d.projectName || '') } catch {} }
  }, [])

  useEffect(() => {
    if (url) localStorage.setItem('tfqr_last', JSON.stringify({ url, projectName }))
  }, [url, projectName])

  async function downloadPNG() {
    if (!canvasRef.current || !url) return
    const link = document.createElement('a')
    link.download = 'trulyfreeqr.png'
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  async function downloadSVG() {
    if (!url) return
    const svg = await QRCode.toString(url, { type: 'svg', color: { dark: '#0058c3', light: '#ffffff' } })
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const link = document.createElement('a')
    link.download = 'trulyfreeqr.svg'
    link.href = URL.createObjectURL(blob)
    link.click()
  }

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>

      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0058c3"/>
                <stop offset="100%" stopColor="#0070f3"/>
              </linearGradient>
            </defs>
            <rect width="38" height="38" rx="8" fill="url(#lg1)"/>
            <rect x="6" y="6" width="26" height="26" rx="3" fill="white"/>
            <rect x="10" y="10" width="18" height="18" rx="2" fill="url(#lg1)"/>
            <rect x="14" y="14" width="10" height="10" rx="1" fill="white"/>
            <path d="M19,17 C19,14 15,12 13,15 C11,18 13,22 16,21 C18,20 19,18 21,18 C23,18 25,20 23,22 C21,24 18,22 19,19" stroke="url(#lg1)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          </svg>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Truly Free <span style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>QR</span>
            </div>
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.08em', color: '#718096', textTransform: 'uppercase', lineHeight: 1 }}>Precision Instruments</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {['Generator','Analytics','Templates','API'].map((t,i) => (
            <button key={t} style={{ padding: '6px 12px', borderRadius: 4, fontSize: 13, fontWeight: 500, color: i === 0 ? '#0058c3' : '#4a5568', border: 'none', background: 'none', cursor: 'pointer', borderBottom: i === 0 ? '2px solid #0058c3' : '2px solid transparent' }}>{t}</button>
          ))}
        </div>
        <button style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Go Premium →</button>
      </nav>

      <div style={{ background: '#f1f4f6', padding: '9px 24px', textAlign: 'center', fontSize: 12, fontWeight: 500, color: '#4a5568', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <div style={{ width: 16, height: 16, background: 'linear-gradient(135deg,#0058c3,#0070f3)', borderRadius: '3px 3px 6px 6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#fff' }}>✓</div>
        <span style={{ background: 'rgba(0,88,195,0.08)', color: '#0058c3', padding: '2px 8px', borderRadius: 2, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' }}>✦ TRULY FREE</span>
        Dynamic QR Codes — No Expiration, No Account Required, No Credit Card Ever.
      </div>

      <div style={{ maxWidth: 1180, margin: '12px auto', padding: '0 24px' }}>
        <div style={{ height: 72, borderRadius: 8, background: '#e5e9eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#718096', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Advertisement</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '168px 1fr 320px', gap: 0, maxWidth: 1180, margin: '0 auto', padding: '16px 24px 40px', alignItems: 'start' }}>
        <aside style={{ paddingRight: 16 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 12, paddingLeft: 4 }}>Designer</div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#181c1e', marginBottom: 6, paddingLeft: 4 }}>Premium Tools</div>
          {['Customization','Frames','Colors','Logo','Shapes'].map((item, i) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 4, cursor: 'pointer', color: i === 0 ? '#0058c3' : '#4a5568', background: i === 0 ? 'rgba(0,88,195,0.06)' : 'none', fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{item}</div>
          ))}
          <div style={{ marginTop: 24, height: 200, background: '#e5e9eb', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#718096', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sidebar Ad</div>
        </aside>

        <main style={{ padding: '0 16px' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(74,85,104,0.15)', marginBottom: 20 }}>
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '10px 16px', fontSize: 13, fontWeight: 500, color: tab === activeTab ? '#0058c3' : '#718096', border: 'none', background: 'none', cursor: 'pointer', borderBottom: tab === activeTab ? '2px solid #0058c3' : '2px solid transparent' }}>{tab}</button>
            ))}
          </div>

          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 6 }}>Target Destination</div>
          <div style={{ position: 'relative', marginBottom: 16 }}>
            <input value={url} onChange={e => setUrl(e.target.value)} type="url" placeholder="https://your-website.com" style={{ width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '10px 120px 10px 14px', fontFamily: 'inherit', fontSize: 13, color: '#181c1e', outline: 'none', boxSizing: 'border-box' }} />
            <div style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,88,195,0.08)', color: '#0058c3', padding: '3px 8px', borderRadius: 2, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', cursor: 'pointer' }}>✦ SAFE-SCAN</div>
          </div>

          <div style={{ background: '#f1f4f6', borderRadius: 8, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#181c1e', marginBottom: 3, display: 'flex', alignItems: 'center', gap: 6 }}>
                Dynamic Tracking
                <span style={{ background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', color: '#0058c3', borderRadius: 2, padding: '2px 8px', fontSize: 10, fontWeight: 700, letterSpacing: '0.05em' }}>FREE FOREVER</span>
              </div>
              <div style={{ fontSize: 12, color: '#4a5568', lineHeight: 1.5 }}>Enabling dynamic tracking lets you change the destination URL later without reprinting. Your code never expires.</div>
            </div>
            <label style={{ position: 'relative', width: 40, height: 22, flexShrink: 0, marginTop: 1, display: 'block' }}>
              <input type="checkbox" checked={dynamic} onChange={e => setDynamic(e.target.checked)} style={{ opacity: 0, width: 0, height: 0 }} />
              <div onClick={() => setDynamic(!dynamic)} style={{ position: 'absolute', inset: 0, background: dynamic ? '#0058c3' : 'rgba(74,85,104,0.3)', borderRadius: 11, cursor: 'pointer', transition: 'background 0.2s' }}>
                <div style={{ position: 'absolute', left: dynamic ? 21 : 3, top: 3, width: 16, height: 16, borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.18)' }} />
              </div>
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 6 }}>Project Name</div>
              <input value={projectName} onChange={e => setProjectName(e.target.value)} placeholder="Optional" style={{ width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '9px 12px', fontFamily: 'inherit', fontSize: 13, color: '#181c1e', outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 6 }}>Category</div>
              <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '9px 12px', fontFamily: 'inherit', fontSize: 13, color: '#181c1e', outline: 'none', boxSizing: 'border-box' }}>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(74,85,104,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em' }}>Real-time Analytics</div>
                <div style={{ fontSize: 12, color: '#718096', marginTop: 2 }}>See how your dynamic codes perform across the globe.</div>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 2, padding: '3px 8px', fontSize: 10, fontWeight: 700, color: '#718096', letterSpacing: '0.08em' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                LIVE DATA
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 12 }}>Scans by Country</div>
                {[['United States','42%',42],['Germany','28%',28],['Japan','15%',15],['Brazil','9%',9]].map(([c,p,w]) => (
                  <div key={String(c)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}><span style={{ fontWeight: 500 }}>{c}</span><span style={{ fontWeight: 600, color: '#4a5568' }}>{p}</span></div>
                    <div style={{ height: 3, background: '#e5e9eb', borderRadius: 2, marginBottom: 8 }}><div style={{ height: '100%', width: `${w}%`, background: 'linear-gradient(135deg,#0058c3,#0070f3)', borderRadius: 2 }} /></div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 12, alignSelf: 'flex-start' }}>Device Distribution</div>
                <svg viewBox="0 0 90 90" width="90" height="90">
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#e5e9eb" strokeWidth="12"/>
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#0070f3" strokeWidth="12" strokeDasharray="126 75" strokeDashoffset="-20" strokeLinecap="round"/>
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#b5d4f4" strokeWidth="12" strokeDasharray="75 126" strokeDashoffset="-146" strokeLinecap="round"/>
                  <text x="45" y="41" textAnchor="middle" fontSize="14" fontWeight="700" fill="#181c1e">88%</text>
                  <text x="45" y="54" textAnchor="middle" fontSize="9" fill="#718096">Mobile</text>
                </svg>
                <div style={{ display: 'flex', gap: 12, fontSize: 11, marginTop: 10 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#4a5568', fontWeight: 500 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0070f3', display: 'inline-block' }} />Mobile</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#4a5568', fontWeight: 500 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#b5d4f4', display: 'inline-block' }} />Desktop</span>
                </div>
              </div>
              <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 12 }}>Scan Activity (24h)</div>
                <div style={{ height: 80, display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                  {[12,8,6,9,14,22,35,48,52,58,62,55,49,54,60,65,70,58,45,38,30,25,20,15].map((v,i) => (
                    <div key={i} style={{ flex: 1, height: `${(v/70)*100}%`, background: v >= 62 ? '#0058c3' : v >= 45 ? 'rgba(0,88,195,0.4)' : '#e5e9eb', borderRadius: '2px 2px 0 0' }} />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#718096', marginTop: 4 }}>
                  <span>00:00</span><span>12:00</span><span>23:59</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <aside style={{ paddingLeft: 16 }}>
          <div style={{ background: '#fff', borderRadius: 8, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
            <canvas ref={canvasRef} width={200} height={200} style={{ borderRadius: 8, marginBottom: 16 }} />
            <button onClick={downloadPNG} style={{ width: '100%', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '12px 16px', fontFamily: 'inherit', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 10 }}>↓ Download PNG</button>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%', marginBottom: 10 }}>
              <button onClick={downloadSVG} style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '9px 8px', fontFamily: 'inherit', fontSize: 12, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>SVG Vector</button>
              <button style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '9px 8px', fontFamily: 'inherit', fontSize: 12, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>Print PDF</button>
            </div>
            <div style={{ fontSize: 11, color: '#718096', textAlign: 'center' }}>3000 × 3000 px · Transparent Background · Free</div>
          </div>
        </aside>
      </div>

      <footer style={{ background: '#fff', borderTop: '1px solid rgba(74,85,104,0.15)', padding: '20px 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 8, flexWrap: 'wrap' }}>
          {['Privacy Policy','Terms of Service','Help Center','Feedback','API Docs'].map(l => (
            <a key={l} href="#" style={{ fontSize: 12, color: '#718096', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
        <div style={{ fontSize: 11, color: '#718096' }}>
          © 2026 Truly Free QR · Built by <a href="https://www.klickifyagency.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0058c3', fontWeight: 600, textDecoration: 'none' }}>Klickify Agency</a>
        </div>
      </footer>
    </div>
  )
}
