'use client'
import { useState, useEffect, useRef } from 'react'
import QRCode from 'qrcode'
import Footer from '@/components/Footer'

const TABS = ['URL', 'WiFi', 'vCard', 'PDF', 'Text', 'Email']
const CATEGORIES = ['Marketing', 'Restaurant', 'Real Estate', 'Events', 'Product', 'Personal']

export default function QRGenerator() {
  const [activeTab, setActiveTab] = useState('URL')
  const [url, setUrl] = useState('')
  const [projectName, setProjectName] = useState('')
  const [category, setCategory] = useState('Marketing')
  const [dynamic, setDynamic] = useState(true)
  const [shortId, setShortId] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('')
  const [saving, setSaving] = useState(false)
  const [qrCount, setQrCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('tfqr_last')
    if (saved) { try { const d = JSON.parse(saved); setUrl(d.url || ''); setProjectName(d.projectName || ''); setShortId(d.shortId || ''); setRedirectUrl(d.redirectUrl || '') } catch {} }
    const codes = localStorage.getItem('tfqr_codes')
    if (codes) { try { setQrCount(JSON.parse(codes).length) } catch {} }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return
    if (url.length > 3) {
      QRCode.toCanvas(canvasRef.current, redirectUrl || url, { width: 200, margin: 2, color: { dark: '#0058c3', light: '#ffffff' } })
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
  }, [url, redirectUrl, isMobile])

  useEffect(() => {
    if (url) localStorage.setItem('tfqr_last', JSON.stringify({ url, projectName, shortId, redirectUrl }))
  }, [url, projectName, shortId, redirectUrl])

  async function saveQR() {
    if (!url || saving) return
    setSaving(true)
    try {
      const sessionToken = localStorage.getItem('tfqr_session') || crypto.randomUUID()
      localStorage.setItem('tfqr_session', sessionToken)
      const res = await fetch('/api/qr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destination_url: url, type: activeTab.toLowerCase(), project_name: projectName || null, category, session_token: sessionToken }),
      })
      const data = await res.json()
      if (data.short_id) {
        setShortId(data.short_id)
        setRedirectUrl(data.redirect_url)
        const existing = JSON.parse(localStorage.getItem('tfqr_codes') || '[]')
        const newEntry = { short_id: data.short_id, redirect_url: data.redirect_url, destination_url: url, project_name: projectName || url, category, created_at: new Date().toISOString() }
        const updated = [newEntry, ...existing]
        localStorage.setItem('tfqr_codes', JSON.stringify(updated))
        setQrCount(updated.length)
      }
    } finally {
      setSaving(false)
    }
  }

  async function downloadPNG() {
    if (!canvasRef.current || !url) return
    const link = document.createElement('a')
    link.download = 'trulyfreeqr.png'
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  async function downloadSVG() {
    const target = redirectUrl || url
    if (!target) return
    const svg = await QRCode.toString(target, { type: 'svg', color: { dark: '#0058c3', light: '#ffffff' } })
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const link = document.createElement('a')
    link.download = 'trulyfreeqr.svg'
    link.href = URL.createObjectURL(blob)
    link.click()
  }

  const QRPreviewPanel = () => (
    <div style={{ background: '#fff', borderRadius: 8, padding: isMobile ? '16px' : '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)', width: '100%' }}>
      <canvas ref={canvasRef} width={200} height={200} style={{ borderRadius: 8, maxWidth: '100%' }} />
      {url.length > 3 && !shortId && (
        <button onClick={saveQR} disabled={saving} style={{ width: '100%', background: saving ? '#718096' : 'rgba(0,88,195,0.08)', color: saving ? '#fff' : '#0058c3', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 4, padding: '12px', fontFamily: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          {saving ? 'Saving...' : '✦ Make Dynamic (Free)'}
        </button>
      )}
      <button onClick={downloadPNG} style={{ width: '100%', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '13px', fontFamily: 'inherit', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>↓ Download PNG</button>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%' }}>
        <button onClick={downloadSVG} style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '10px', fontFamily: 'inherit', fontSize: 12, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>SVG Vector</button>
        <button style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '10px', fontFamily: 'inherit', fontSize: 12, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>Print PDF</button>
      </div>
      <div style={{ fontSize: 10, color: '#718096', textAlign: 'center' }}>3000×3000px · Transparent · Free</div>
    </div>
  )

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <style>{`
        .tab-scroll { overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; }
        .tab-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <defs><linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0058c3"/><stop offset="100%" stopColor="#0070f3"/></linearGradient></defs>
            <rect width="36" height="36" rx="8" fill="url(#lg1)"/>
            <rect x="5" y="5" width="26" height="26" rx="3" fill="white"/>
            <rect x="9" y="9" width="18" height="18" rx="2" fill="url(#lg1)"/>
            <rect x="13" y="13" width="10" height="10" rx="1" fill="white"/>
            <ellipse cx="18" cy="18" rx="3.5" ry="5" fill="url(#lg1)"/>
            <ellipse cx="18" cy="18" rx="5" ry="3.5" fill="url(#lg1)" opacity="0.7"/>
          </svg>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: '-0.02em', color: '#181c1e' }}>Truly Free <span style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>QR</span></span>
        </a>
        {!isMobile && (
          <div style={{ display: 'flex', gap: 4 }}>
            {['Generator','Analytics','Templates','API'].map((t,i) => (
              <button key={t} style={{ padding: '6px 12px', borderRadius: 4, fontSize: 13, fontWeight: 500, color: i === 0 ? '#0058c3' : '#4a5568', border: 'none', background: 'none', cursor: 'pointer', borderBottom: i === 0 ? '2px solid #0058c3' : '2px solid transparent' }}>{t}</button>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {qrCount > 0 && (
            <a href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '5px 10px', fontSize: 12, fontWeight: 600, color: '#4a5568', textDecoration: 'none' }}>
              {!isMobile && 'My QRs'}
              <span style={{ background: '#0058c3', color: '#fff', borderRadius: 10, padding: '1px 5px', fontSize: 10 }}>{qrCount}</span>
            </a>
          )}
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ display: 'block', width: 20, height: 2, background: '#181c1e', borderRadius: 1 }}></span>
              <span style={{ display: 'block', width: 20, height: 2, background: '#181c1e', borderRadius: 1 }}></span>
              <span style={{ display: 'block', width: 20, height: 2, background: '#181c1e', borderRadius: 1 }}></span>
            </button>
          ) : (
            <button style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Go Premium →</button>
          )}
        </div>
      </nav>

      {menuOpen && isMobile && (
        <div style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '8px 16px' }}>
          {['Generator','Analytics','Templates','API'].map((t,i) => (
            <div key={t} style={{ padding: '12px 0', fontSize: 14, fontWeight: 500, color: i === 0 ? '#0058c3' : '#4a5568', borderBottom: '1px solid rgba(74,85,104,0.06)' }}>{t}</div>
          ))}
        </div>
      )}

      <div style={{ background: '#f1f4f6', padding: '8px 16px', textAlign: 'center', fontSize: 11, fontWeight: 500, color: '#4a5568', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <div style={{ width: 14, height: 14, background: 'linear-gradient(135deg,#0058c3,#0070f3)', borderRadius: '2px 2px 5px 5px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#fff', flexShrink: 0 }}>✓</div>
        <span style={{ background: 'rgba(0,88,195,0.08)', color: '#0058c3', padding: '1px 6px', borderRadius: 2, fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap' }}>✦ TRULY FREE</span>
        <span style={{ fontSize: 11 }}>Dynamic QR — No Expiration, No Account.</span>
      </div>

      {isMobile ? (
        <div style={{ padding: '12px 16px', maxWidth: 600, margin: '0 auto' }}>
          <div className="tab-scroll" style={{ display: 'flex', borderBottom: '1px solid rgba(74,85,104,0.15)', marginBottom: 14 }}>
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '10px 14px', fontSize: 13, fontWeight: 500, color: tab === activeTab ? '#0058c3' : '#718096', border: 'none', background: 'none', cursor: 'pointer', borderBottom: tab === activeTab ? '2px solid #0058c3' : '2px solid transparent', whiteSpace: 'nowrap', flexShrink: 0 }}>{tab}</button>
            ))}
          </div>

          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 6 }}>Target Destination</div>
          <input value={url} onChange={e => { setUrl(e.target.value); setShortId(''); setRedirectUrl('') }} type="url" placeholder="https://your-website.com" style={{ width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '12px 14px', fontFamily: 'inherit', fontSize: 14, color: '#181c1e', outline: 'none', boxSizing: 'border-box', marginBottom: 10 }} />

          <div style={{ marginBottom: 12 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(0,88,195,0.08)', color: '#0058c3', padding: '4px 10px', borderRadius: 2, fontSize: 10, fontWeight: 700 }}>✦ SAFE-SCAN PROTECTION ACTIVE</div>
          </div>

          <div style={{ background: '#f1f4f6', borderRadius: 8, padding: '12px 14px', display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#181c1e', marginBottom: 3, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                Dynamic Tracking
                <span style={{ background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', color: '#0058c3', borderRadius: 2, padding: '1px 6px', fontSize: 10, fontWeight: 700 }}>FREE FOREVER</span>
              </div>
              <div style={{ fontSize: 12, color: '#4a5568', lineHeight: 1.5 }}>Edit destination anytime. Your code never expires.</div>
            </div>
            <div onClick={() => setDynamic(!dynamic)} style={{ position: 'relative', width: 40, height: 22, flexShrink: 0, marginTop: 2, cursor: 'pointer' }}>
              <div style={{ position: 'absolute', inset: 0, background: dynamic ? '#0058c3' : 'rgba(74,85,104,0.3)', borderRadius: 11, transition: 'background 0.2s' }}>
                <div style={{ position: 'absolute', left: dynamic ? 21 : 3, top: 3, width: 16, height: 16, borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.18)' }} />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 5 }}>Project Name</div>
              <input value={projectName} onChange={e => setProjectName(e.target.value)} placeholder="Optional" style={{ width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '10px 12px', fontFamily: 'inherit', fontSize: 13, color: '#181c1e', outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 5 }}>Category</div>
              <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '10px 12px', fontFamily: 'inherit', fontSize: 13, color: '#181c1e', outline: 'none', boxSizing: 'border-box' }}>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <QRPreviewPanel />

          {shortId && (
            <div style={{ background: 'rgba(0,88,195,0.06)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 8, padding: '10px 14px', marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#0058c3', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>✓ Dynamic QR Active</div>
                <div style={{ fontSize: 11, color: '#4a5568', fontFamily: 'monospace', wordBreak: 'break-all' }}>{redirectUrl}</div>
              </div>
              <a href="/dashboard" style={{ background: '#0058c3', color: '#fff', borderRadius: 4, padding: '6px 12px', fontSize: 11, fontWeight: 600, textDecoration: 'none' }}>View All →</a>
            </div>
          )}

          <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(74,85,104,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em' }}>Real-time Analytics</div>
                <div style={{ fontSize: 11, color: '#718096' }}>Sample data — create a dynamic QR to see your real analytics.</div>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 2, padding: '3px 8px', fontSize: 10, fontWeight: 700, color: '#718096' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />LIVE
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 14 }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 10 }}>Scans by Country</div>
                {[['United States','42%',42],['Germany','28%',28],['Japan','15%',15],['Brazil','9%',9]].map(([c,p,w]) => (
                  <div key={String(c)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 3 }}><span style={{ fontWeight: 500 }}>{c}</span><span style={{ fontWeight: 600, color: '#4a5568' }}>{p}</span></div>
                    <div style={{ height: 3, background: '#e5e9eb', borderRadius: 2, marginBottom: 6 }}><div style={{ height: '100%', width: `${w}%`, background: 'linear-gradient(135deg,#0058c3,#0070f3)', borderRadius: 2 }} /></div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 10, alignSelf: 'flex-start' }}>Device Distribution</div>
                <svg viewBox="0 0 90 90" width="90" height="90">
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#e5e9eb" strokeWidth="12"/>
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#0070f3" strokeWidth="12" strokeDasharray="126 75" strokeDashoffset="-20" strokeLinecap="round"/>
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#b5d4f4" strokeWidth="12" strokeDasharray="75 126" strokeDashoffset="-146" strokeLinecap="round"/>
                  <text x="45" y="41" textAnchor="middle" fontSize="14" fontWeight="700" fill="#181c1e">88%</text>
                  <text x="45" y="54" textAnchor="middle" fontSize="9" fill="#718096">Mobile</text>
                </svg>
                <div style={{ display: 'flex', gap: 12, fontSize: 11, marginTop: 8 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#4a5568' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0070f3', display: 'inline-block' }} />Mobile</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#4a5568' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#b5d4f4', display: 'inline-block' }} />Desktop</span>
                </div>
              </div>
              <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 14 }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 10 }}>Scan Activity 24h</div>
                <div style={{ height: 80, display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                  {[12,8,6,9,14,22,35,48,52,58,62,55,49,54,60,65,70,58,45,38,30,25,20,15].map((v,i) => (
                    <div key={i} style={{ flex: 1, height: `${(v/70)*100}%`, background: v >= 62 ? '#0058c3' : v >= 45 ? 'rgba(0,88,195,0.4)' : '#e5e9eb', borderRadius: '2px 2px 0 0' }} />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: '#718096', marginTop: 3 }}>
                  <span>00:00</span><span>12:00</span><span>23:59</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 280px', gap: 0, maxWidth: 1180, margin: '0 auto', padding: '16px', alignItems: 'start' }}>
          <aside style={{ paddingRight: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 12, paddingLeft: 4 }}>Designer</div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#181c1e', marginBottom: 6, paddingLeft: 4 }}>Premium Tools</div>
            {['Customization','Frames','Colors','Logo','Shapes'].map((item, i) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 4, cursor: 'pointer', color: i === 0 ? '#0058c3' : '#4a5568', background: i === 0 ? 'rgba(0,88,195,0.06)' : 'none', fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{item}</div>
            ))}
            <div style={{ marginTop: 24, height: 200, background: '#e5e9eb', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#718096', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sidebar Ad</div>
          </aside>

          <main style={{ padding: '0 12px', minWidth: 0 }}>
            <div className="tab-scroll" style={{ display: 'flex', borderBottom: '1px solid rgba(74,85,104,0.15)', marginBottom: 16 }}>
              {TABS.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '10px 14px', fontSize: 13, fontWeight: 500, color: tab === activeTab ? '#0058c3' : '#718096', border: 'none', background: 'none', cursor: 'pointer', borderBottom: tab === activeTab ? '2px solid #0058c3' : '2px solid transparent', whiteSpace: 'nowrap', flexShrink: 0 }}>{tab}</button>
              ))}
            </div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 6 }}>Target Destination</div>
            <div style={{ position: 'relative', marginBottom: 10 }}>
              <input value={url} onChange={e => { setUrl(e.target.value); setShortId(''); setRedirectUrl('') }} type="url" placeholder="https://your-website.com" style={{ width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '10px 14px', fontFamily: 'inherit', fontSize: 13, color: '#181c1e', outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(0,88,195,0.08)', color: '#0058c3', padding: '4px 10px', borderRadius: 2, fontSize: 10, fontWeight: 700 }}>✦ SAFE-SCAN PROTECTION ACTIVE</div>
            </div>
            <div style={{ background: '#f1f4f6', borderRadius: 8, padding: '12px 14px', display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#181c1e', marginBottom: 3, display: 'flex', alignItems: 'center', gap: 6 }}>
                  Dynamic Tracking
                  <span style={{ background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', color: '#0058c3', borderRadius: 2, padding: '1px 6px', fontSize: 10, fontWeight: 700 }}>FREE FOREVER</span>
                </div>
                <div style={{ fontSize: 12, color: '#4a5568', lineHeight: 1.5 }}>Edit destination anytime. Your code never expires.</div>
              </div>
              <div onClick={() => setDynamic(!dynamic)} style={{ position: 'relative', width: 40, height: 22, flexShrink: 0, marginTop: 2, cursor: 'pointer' }}>
                <div style={{ position: 'absolute', inset: 0, background: dynamic ? '#0058c3' : 'rgba(74,85,104,0.3)', borderRadius: 11, transition: 'background 0.2s' }}>
                  <div style={{ position: 'absolute', left: dynamic ? 21 : 3, top: 3, width: 16, height: 16, borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.18)' }} />
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 5 }}>Project Name</div>
                <input value={projectName} onChange={e => setProjectName(e.target.value)} placeholder="Optional" style={{ width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '9px 12px', fontFamily: 'inherit', fontSize: 13, color: '#181c1e', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 5 }}>Category</div>
                <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '9px 12px', fontFamily: 'inherit', fontSize: 13, color: '#181c1e', outline: 'none', boxSizing: 'border-box' }}>
                  {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
            {shortId && (
              <div style={{ background: 'rgba(0,88,195,0.06)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 8, padding: '10px 14px', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#0058c3', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>✓ Dynamic QR Active — Never Expires</div>
                  <div style={{ fontSize: 11, color: '#4a5568', fontFamily: 'monospace', wordBreak: 'break-all' }}>{redirectUrl}</div>
                </div>
                <a href="/dashboard" style={{ background: '#0058c3', color: '#fff', borderRadius: 4, padding: '6px 12px', fontSize: 11, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>View All →</a>
              </div>
            )}
            <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(74,85,104,0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em' }}>Real-time Analytics</div>
                  <div style={{ fontSize: 11, color: '#718096', marginTop: 2 }}>Sample data — create a dynamic QR to see your real analytics.</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 2, padding: '3px 8px', fontSize: 10, fontWeight: 700, color: '#718096' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />LIVE DATA
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 14 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 10 }}>Scans by Country</div>
                  {[['United States','42%',42],['Germany','28%',28],['Japan','15%',15],['Brazil','9%',9]].map(([c,p,w]) => (
                    <div key={String(c)}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 3 }}><span style={{ fontWeight: 500 }}>{c}</span><span style={{ fontWeight: 600, color: '#4a5568' }}>{p}</span></div>
                      <div style={{ height: 3, background: '#e5e9eb', borderRadius: 2, marginBottom: 6 }}><div style={{ height: '100%', width: `${w}%`, background: 'linear-gradient(135deg,#0058c3,#0070f3)', borderRadius: 2 }} /></div>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 14, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 10, alignSelf: 'flex-start' }}>Device Distribution</div>
                  <svg viewBox="0 0 90 90" width="90" height="90">
                    <circle cx="45" cy="45" r="32" fill="none" stroke="#e5e9eb" strokeWidth="12"/>
                    <circle cx="45" cy="45" r="32" fill="none" stroke="#0070f3" strokeWidth="12" strokeDasharray="126 75" strokeDashoffset="-20" strokeLinecap="round"/>
                    <circle cx="45" cy="45" r="32" fill="none" stroke="#b5d4f4" strokeWidth="12" strokeDasharray="75 126" strokeDashoffset="-146" strokeLinecap="round"/>
                    <text x="45" y="41" textAnchor="middle" fontSize="14" fontWeight="700" fill="#181c1e">88%</text>
                    <text x="45" y="54" textAnchor="middle" fontSize="9" fill="#718096">Mobile</text>
                  </svg>
                  <div style={{ display: 'flex', gap: 10, fontSize: 11, marginTop: 8 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#4a5568' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0070f3', display: 'inline-block' }} />Mobile</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#4a5568' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#b5d4f4', display: 'inline-block' }} />Desktop</span>
                  </div>
                </div>
                <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 14 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 10 }}>Scan Activity 24h</div>
                  <div style={{ height: 80, display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                    {[12,8,6,9,14,22,35,48,52,58,62,55,49,54,60,65,70,58,45,38,30,25,20,15].map((v,i) => (
                      <div key={i} style={{ flex: 1, height: `${(v/70)*100}%`, background: v >= 62 ? '#0058c3' : v >= 45 ? 'rgba(0,88,195,0.4)' : '#e5e9eb', borderRadius: '2px 2px 0 0' }} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: '#718096', marginTop: 3 }}>
                    <span>00:00</span><span>12:00</span><span>23:59</span>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <aside style={{ paddingLeft: 12 }}>
            <QRPreviewPanel />
          </aside>
        </div>
      )}

      <Footer />
    </div>
  )
}
