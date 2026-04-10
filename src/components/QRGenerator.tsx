'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import QRCode from 'qrcode'
import Footer from '@/components/Footer'
import Link from 'next/link'

const TABS = ['URL', 'WiFi', 'vCard', 'PDF', 'Text', 'Email']
const CATEGORIES = ['Marketing', 'Restaurant', 'Real Estate', 'Events', 'Product', 'Personal']
const SIDEBAR_TOOLS = ['Customization', 'Frames', 'Colors', 'Logo', 'Shapes']
const QR_COLORS = ['#0058c3','#181c1e','#16a34a','#dc2626','#7c3aed','#ea580c']
const BG_COLORS = ['#ffffff','#f1f4f6','#fff7ed','#f0fdf4','#fef2f2','#181c1e']

export default function QRGenerator() {
  const [activeTab, setActiveTab] = useState('URL')
  const [activeTool, setActiveTool] = useState('Customization')
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
  const [qrColor, setQrColor] = useState('#0058c3')
  const [bgColor, setBgColor] = useState('#ffffff')
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

  const drawQR = useCallback(() => {
    if (!canvasRef.current) return
    if (url.length > 3) {
      QRCode.toCanvas(canvasRef.current, redirectUrl || url, { width: 200, margin: 2, color: { dark: qrColor, light: bgColor } })
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
  }, [url, redirectUrl, qrColor, bgColor])

  useEffect(() => { drawQR() }, [drawQR])

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
    } finally { setSaving(false) }
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
    const svg = await QRCode.toString(target, { type: 'svg', color: { dark: qrColor, light: bgColor } })
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const link = document.createElement('a')
    link.download = 'trulyfreeqr.svg'
    link.href = URL.createObjectURL(blob)
    link.click()
  }

  function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f || !canvasRef.current || url.length < 3) return
    const reader = new FileReader()
    reader.onload = ev => {
      const img = new Image()
      img.onload = () => {
        const ctx = canvasRef.current!.getContext('2d')
        if (!ctx) return
        const s = 44
        const x = (200 - s) / 2
        const y = (200 - s) / 2
        ctx.fillStyle = bgColor
        ctx.fillRect(x - 3, y - 3, s + 6, s + 6)
        ctx.drawImage(img, x, y, s, s)
      }
      img.src = ev.target?.result as string
    }
    reader.readAsDataURL(f)
  }

  const sBtn = { background: '#fff', borderRadius: 6, padding: '8px 6px', fontSize: 10, fontWeight: 500 as const, cursor: 'pointer' as const, border: '1px solid rgba(74,85,104,0.15)', textAlign: 'center' as const }
  const sBtnActive = { ...sBtn, color: '#0058c3', border: '1px solid #0058c3' }

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <style>{`.tab-scroll{overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-scroll::-webkit-scrollbar{display:none}`}</style>

      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <defs><linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0058c3"/><stop offset="100%" stopColor="#0070f3"/></linearGradient></defs>
            <rect width="36" height="36" rx="8" fill="url(#lg1)"/><rect x="5" y="5" width="26" height="26" rx="3" fill="white"/><rect x="9" y="9" width="18" height="18" rx="2" fill="url(#lg1)"/><rect x="13" y="13" width="10" height="10" rx="1" fill="white"/><ellipse cx="18" cy="18" rx="3.5" ry="5" fill="url(#lg1)"/><ellipse cx="18" cy="18" rx="5" ry="3.5" fill="url(#lg1)" opacity="0.7"/>
          </svg>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: '-0.02em', color: '#181c1e' }}>Truly Free <span style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>QR</span></span>
        </a>
        {!isMobile && (
          <div style={{ display: 'flex', gap: 4 }}>
            <Link href="/" style={{ padding: '6px 12px', fontSize: 13, fontWeight: 500, color: '#0058c3', textDecoration: 'none', borderBottom: '2px solid #0058c3' }}>Generator</Link>
            <Link href="/dashboard" style={{ padding: '6px 12px', fontSize: 13, fontWeight: 500, color: '#4a5568', textDecoration: 'none', borderBottom: '2px solid transparent' }}>Analytics</Link>
            <Link href="/qr-code-for-restaurants" style={{ padding: '6px 12px', fontSize: 13, fontWeight: 500, color: '#4a5568', textDecoration: 'none', borderBottom: '2px solid transparent' }}>Templates</Link>
            <a href="mailto:support@klickifyagency.com" style={{ padding: '6px 12px', fontSize: 13, fontWeight: 500, color: '#4a5568', textDecoration: 'none', borderBottom: '2px solid transparent' }}>API</a>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {qrCount > 0 && (
            <a href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '5px 10px', fontSize: 12, fontWeight: 600, color: '#4a5568', textDecoration: 'none' }}>
              {!isMobile && 'My QRs '}
              <span style={{ background: '#0058c3', color: '#fff', borderRadius: 10, padding: '1px 5px', fontSize: 10 }}>{qrCount}</span>
            </a>
          )}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ display: 'block', width: 20, height: 2, background: '#181c1e', borderRadius: 1 }}></span>
              <span style={{ display: 'block', width: 20, height: 2, background: '#181c1e', borderRadius: 1 }}></span>
              <span style={{ display: 'block', width: 20, height: 2, background: '#181c1e', borderRadius: 1 }}></span>
            </button>
          )}
        </div>
      </nav>

      {menuOpen && isMobile && (
        <div style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '8px 16px' }}>
          <Link href="/" style={{ display: 'block', padding: '12px 0', fontSize: 14, fontWeight: 500, color: '#0058c3', borderBottom: '1px solid rgba(74,85,104,0.06)', textDecoration: 'none' }}>Generator</Link>
          <Link href="/dashboard" style={{ display: 'block', padding: '12px 0', fontSize: 14, fontWeight: 500, color: '#4a5568', borderBottom: '1px solid rgba(74,85,104,0.06)', textDecoration: 'none' }}>Analytics</Link>
          <Link href="/qr-code-for-restaurants" style={{ display: 'block', padding: '12px 0', fontSize: 14, fontWeight: 500, color: '#4a5568', borderBottom: '1px solid rgba(74,85,104,0.06)', textDecoration: 'none' }}>Templates</Link>
          <a href="mailto:support@klickifyagency.com" style={{ display: 'block', padding: '12px 0', fontSize: 14, fontWeight: 500, color: '#4a5568', textDecoration: 'none' }}>API</a>
        </div>
      )}

      <div style={{ background: '#f1f4f6', padding: '8px 16px', textAlign: 'center', fontSize: 11, fontWeight: 500, color: '#4a5568', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <div style={{ width: 14, height: 14, background: 'linear-gradient(135deg,#0058c3,#0070f3)', borderRadius: '2px 2px 5px 5px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#fff', flexShrink: 0 }}>✓</div>
        <span style={{ background: 'rgba(0,88,195,0.08)', color: '#0058c3', padding: '1px 6px', borderRadius: 2, fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap' }}>✦ TRULY FREE</span>
        <span>Dynamic QR — No Expiration, No Account.</span>
      </div>

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ background: '#e5e9eb', borderRadius: 8, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#718096', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '12px 0' }}>Advertisement</div>
      </div>

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 16px 40px', display: isMobile ? 'block' : 'grid', gridTemplateColumns: '160px 1fr 280px', gap: 0, alignItems: 'start' }}>

        {!isMobile && (
          <aside style={{ paddingRight: 12, paddingTop: 4 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 12, paddingLeft: 4 }}>Designer</div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#181c1e', marginBottom: 6, paddingLeft: 4 }}>Premium Tools</div>
            {SIDEBAR_TOOLS.map(tool => (
              <div key={tool} onClick={() => setActiveTool(tool)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 4, cursor: 'pointer', color: activeTool === tool ? '#0058c3' : '#4a5568', background: activeTool === tool ? 'rgba(0,88,195,0.06)' : 'none', fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{tool}</div>
            ))}
            <div style={{ marginTop: 20, background: '#e5e9eb', borderRadius: 8, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#718096', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sidebar Ad</div>
          </aside>
        )}

        <main style={{ padding: isMobile ? '0' : '0 12px', minWidth: 0 }}>
          {isMobile && (
            <div style={{ marginBottom: 12, marginTop: 4 }}>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 8 }}>Designer Tools</div>
              <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
                {SIDEBAR_TOOLS.map(tool => (
                  <button key={tool} onClick={() => setActiveTool(activeTool === tool ? '' : tool)} style={{ background: activeTool === tool ? '#0058c3' : '#fff', color: activeTool === tool ? '#fff' : '#4a5568', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '6px 12px', fontSize: 12, fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>{tool}</button>
                ))}
              </div>
            </div>
          )}

          {activeTool && (
            <div style={{ background: '#f1f4f6', borderRadius: 8, padding: 14, marginBottom: 12 }}>
              {activeTool === 'Customization' && (
                <div style={{ fontSize: 11, color: '#718096', lineHeight: 1.5 }}>Select Colors, Frames, Logo, or Shapes to customize your QR code.</div>
              )}
              {activeTool === 'Colors' && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#181c1e', marginBottom: 8 }}>QR Color</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                    {QR_COLORS.map(c => (
                      <div key={c} onClick={() => setQrColor(c)} style={{ width: 28, height: 28, borderRadius: 4, background: c, cursor: 'pointer', border: qrColor === c ? '3px solid #0058c3' : '2px solid transparent', boxShadow: qrColor === c ? '0 0 0 1px #fff inset' : 'none' }} />
                    ))}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#181c1e', marginBottom: 8 }}>Background</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {BG_COLORS.map(c => (
                      <div key={c} onClick={() => setBgColor(c)} style={{ width: 28, height: 28, borderRadius: 4, background: c, cursor: 'pointer', border: bgColor === c ? '3px solid #0058c3' : '1px solid rgba(74,85,104,0.2)', boxShadow: bgColor === c ? '0 0 0 1px #fff inset' : 'none' }} />
                    ))}
                  </div>
                </div>
              )}
              {activeTool === 'Frames' && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#181c1e', marginBottom: 10 }}>Frame Style</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {['No Frame ✓','Simple Border 🔜','Rounded 🔜','Scan Me 🔜'].map(f => (
                      <div key={f} style={{ ...sBtn, color: f.includes('✓') ? '#0058c3' : '#4a5568', border: f.includes('✓') ? '1px solid #0058c3' : '1px solid rgba(74,85,104,0.15)' }}>{f}</div>
                    ))}
                  </div>
                </div>
              )}
              {activeTool === 'Logo' && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#181c1e', marginBottom: 8 }}>Upload Logo</div>
                  {url.length < 3 && <div style={{ fontSize: 11, color: '#dc2626', marginBottom: 8 }}>Enter a URL first to enable logo upload.</div>}
                  <label style={{ display: 'block', background: '#fff', borderRadius: 6, padding: 16, border: '1px dashed rgba(0,88,195,0.3)', textAlign: 'center', cursor: url.length > 3 ? 'pointer' : 'not-allowed', opacity: url.length > 3 ? 1 : 0.5 }}>
                    <input type="file" accept="image/png,image/svg+xml,image/jpeg" style={{ display: 'none' }} disabled={url.length < 3} onChange={handleLogoUpload} />
                    <div style={{ fontSize: 11, color: '#718096' }}>Click to upload PNG, SVG or JPG</div>
                    <div style={{ fontSize: 10, color: '#a0aec0', marginTop: 4 }}>Logo appears centered on QR code</div>
                  </label>
                </div>
              )}
              {activeTool === 'Shapes' && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#181c1e', marginBottom: 10 }}>Module Shape</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                    {[['Square','✓'],['Rounded','🔜'],['Dots','🔜'],['Extra Round','🔜'],['Diamond','🔜'],['Star','🔜']].map(([s, badge]) => (
                      <div key={s} style={badge === '✓' ? sBtnActive : { ...sBtn, color: '#4a5568' }}>{s} {badge}</div>
                    ))}
                  </div>
                  <div style={{ fontSize: 10, color: '#718096', marginTop: 8 }}>Custom shapes coming soon.</div>
                </div>
              )}
            </div>
          )}

          <div className="tab-scroll" style={{ display: 'flex', borderBottom: '1px solid rgba(74,85,104,0.15)', marginBottom: 14 }}>
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '10px 14px', fontSize: 13, fontWeight: 500, color: tab === activeTab ? '#0058c3' : '#718096', border: 'none', background: 'none', cursor: 'pointer', borderBottom: tab === activeTab ? '2px solid #0058c3' : '2px solid transparent', whiteSpace: 'nowrap', flexShrink: 0 }}>{tab}</button>
            ))}
          </div>

          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 6 }}>Target Destination</div>
          <input value={url} onChange={e => { setUrl(e.target.value); setShortId(''); setRedirectUrl('') }} type="url" placeholder="https://your-website.com" style={{ width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '11px 14px', fontFamily: 'inherit', fontSize: 14, color: '#181c1e', outline: 'none', boxSizing: 'border-box', marginBottom: 10 }} />

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

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10, marginBottom: 12 }}>
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

          {isMobile && (
            <div style={{ background: '#fff', borderRadius: 8, padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)', marginBottom: 12 }}>
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
          )}

          {shortId && (
            <div style={{ background: 'rgba(0,88,195,0.06)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 8, padding: '10px 14px', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#0058c3', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>✓ Dynamic QR Active — Never Expires</div>
                <div style={{ fontSize: 11, color: '#4a5568', fontFamily: 'monospace', wordBreak: 'break-all' }}>{redirectUrl}</div>
              </div>
              <a href="/dashboard" style={{ background: '#0058c3', color: '#fff', borderRadius: 4, padding: '6px 12px', fontSize: 11, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>View All →</a>
            </div>
          )}

          {isMobile && (
            <div style={{ background: '#e5e9eb', borderRadius: 8, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#718096', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '12px 0' }}>Advertisement</div>
          )}

          <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(74,85,104,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em' }}>Real-time Analytics</div>
                <div style={{ fontSize: 11, color: '#718096', marginTop: 2 }}>Sample data — create a dynamic QR to see your real analytics.</div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <a href="/dashboard" style={{ fontSize: 11, fontWeight: 600, color: '#0058c3', textDecoration: 'none', background: 'rgba(0,88,195,0.07)', padding: '3px 8px', borderRadius: 2, border: '1px solid rgba(0,88,195,0.2)' }}>My Dashboard →</a>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 2, padding: '3px 8px', fontSize: 10, fontWeight: 700, color: '#718096' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />LIVE
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: 10 }}>
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
                <div style={{ display: 'flex', gap: 10, fontSize: 11, marginTop: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
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

        {!isMobile && (
          <aside style={{ paddingLeft: 12 }}>
            <div style={{ background: '#fff', borderRadius: 8, padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
              <canvas ref={canvasRef} width={200} height={200} style={{ borderRadius: 8, maxWidth: '100%' }} />
              {url.length > 3 && !shortId && (
                <button onClick={saveQR} disabled={saving} style={{ width: '100%', background: saving ? '#718096' : 'rgba(0,88,195,0.08)', color: saving ? '#fff' : '#0058c3', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 4, padding: '12px', fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  {saving ? 'Saving...' : '✦ Make Dynamic (Free)'}
                </button>
              )}
              <button onClick={downloadPNG} style={{ width: '100%', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '12px', fontFamily: 'inherit', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>↓ Download PNG</button>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%' }}>
                <button onClick={downloadSVG} style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '9px', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>SVG Vector</button>
                <button style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '9px', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>Print PDF</button>
              </div>
              <div style={{ fontSize: 10, color: '#718096', textAlign: 'center' }}>3000×3000px · Transparent · Free</div>
            </div>
          </aside>
        )}
      </div>

      <Footer />
    </div>
  )
}
