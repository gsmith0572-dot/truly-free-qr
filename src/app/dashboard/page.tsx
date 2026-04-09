'use client'
import { useState, useEffect } from 'react'
import QRCode from 'qrcode'

interface QRItem {
  short_id: string
  redirect_url: string
  destination_url: string
  project_name: string
  category: string
  created_at: string
  total_scans?: number
}

export default function Dashboard() {
  const [qrs, setQrs] = useState<QRItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<QRItem | null>(null)
  const [editUrl, setEditUrl] = useState('')
  const [copying, setCopying] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('tfqr_codes')
    if (saved) {
      try { setQrs(JSON.parse(saved)) } catch {}
    }
    setLoading(false)
  }, [])

  async function copyToClipboard(text: string, id: string) {
    await navigator.clipboard.writeText(text)
    setCopying(id)
    setTimeout(() => setCopying(''), 2000)
  }

  async function downloadQR(redirectUrl: string, shortId: string) {
    const canvas = document.createElement('canvas')
    await QRCode.toCanvas(canvas, redirectUrl, { width: 400, margin: 2, color: { dark: '#0058c3', light: '#ffffff' } })
    const link = document.createElement('a')
    link.download = `qr-${shortId}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  function deleteQR(shortId: string) {
    const updated = qrs.filter(q => q.short_id !== shortId)
    setQrs(updated)
    localStorage.setItem('tfqr_codes', JSON.stringify(updated))
  }

  if (loading) return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#718096', fontSize: 13 }}>Loading your QR codes...</div>
    </div>
  )

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
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
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', color: '#0058c3', borderRadius: 2, padding: '4px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em' }}>✦ NO ACCOUNT NEEDED</div>
          <a href="/" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', textDecoration: 'none' }}>+ New QR</a>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: 0, marginBottom: 6 }}>My QR Codes</h1>
          <p style={{ fontSize: 13, color: '#718096', margin: 0 }}>Your codes are saved privately in this browser. No account, no email, no expiration.</p>
        </div>

        {qrs.length === 0 ? (
          <div style={{ background: '#fff', borderRadius: 8, padding: 48, textAlign: 'center', boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>◻</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#181c1e', marginBottom: 6 }}>No QR codes yet</div>
            <div style={{ fontSize: 13, color: '#718096', marginBottom: 20 }}>Go to the generator and create your first dynamic QR code — free forever.</div>
            <a href="/" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '10px 20px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Create QR Code →</a>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {qrs.map(qr => (
              <div key={qr.short_id} style={{ background: '#fff', borderRadius: 8, padding: '16px 20px', boxShadow: '0px 8px 24px rgba(24,28,30,0.06)', display: 'grid', gridTemplateColumns: '48px 1fr auto', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 48, height: 48, background: '#f1f4f6', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => downloadQR(qr.redirect_url, qr.short_id)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="9" height="9" rx="1.5" stroke="#0058c3" strokeWidth="1.5" fill="none"/>
                    <rect x="13" y="2" width="9" height="9" rx="1.5" stroke="#0058c3" strokeWidth="1.5" fill="none"/>
                    <rect x="2" y="13" width="9" height="9" rx="1.5" stroke="#0058c3" strokeWidth="1.5" fill="none"/>
                    <rect x="4.5" y="4.5" width="4" height="4" rx="0.5" fill="#0058c3"/>
                    <rect x="15.5" y="4.5" width="4" height="4" rx="0.5" fill="#0058c3"/>
                    <rect x="4.5" y="15.5" width="4" height="4" rx="0.5" fill="#0058c3"/>
                    <rect x="13" y="13" width="3" height="3" rx="0.5" fill="#0058c3"/>
                    <rect x="18" y="13" width="3" height="3" rx="0.5" fill="#0058c3"/>
                    <rect x="13" y="18" width="3" height="3" rx="0.5" fill="#0058c3"/>
                    <rect x="18" y="18" width="3" height="3" rx="0.5" fill="#0058c3"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#181c1e', marginBottom: 3 }}>{qr.project_name || qr.destination_url}</div>
                  <div style={{ fontSize: 11, color: '#718096', fontFamily: 'monospace', marginBottom: 4 }}>{qr.redirect_url}</div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#718096' }}>{qr.category}</span>
                    <span style={{ fontSize: 10, color: '#e5e9eb' }}>·</span>
                    <span style={{ fontSize: 10, color: '#718096' }}>{new Date(qr.created_at).toLocaleDateString()}</span>
                    <span style={{ background: 'rgba(0,88,195,0.07)', color: '#0058c3', padding: '1px 6px', borderRadius: 2, fontSize: 10, fontWeight: 700 }}>DYNAMIC</span>
                    <span style={{ background: 'rgba(34,197,94,0.1)', color: '#16a34a', padding: '1px 6px', borderRadius: 2, fontSize: 10, fontWeight: 700 }}>✓ SAFE-SCAN</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button onClick={() => copyToClipboard(qr.redirect_url, qr.short_id)} style={{ background: copying === qr.short_id ? 'rgba(34,197,94,0.1)' : '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '6px 12px', fontSize: 11, fontWeight: 600, color: copying === qr.short_id ? '#16a34a' : '#4a5568', cursor: 'pointer' }}>
                    {copying === qr.short_id ? '✓ Copied' : 'Copy Link'}
                  </button>
                  <button onClick={() => downloadQR(qr.redirect_url, qr.short_id)} style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '6px 12px', fontSize: 11, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>Download</button>
                  <button onClick={() => deleteQR(qr.short_id)} style={{ background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '6px 10px', fontSize: 11, fontWeight: 600, color: '#718096', cursor: 'pointer' }}>✕</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer style={{ background: '#fff', borderTop: '1px solid rgba(74,85,104,0.15)', padding: '20px 24px', textAlign: 'center', marginTop: 40 }}>
        <div style={{ fontSize: 11, color: '#718096' }}>
          © 2026 Truly Free QR · Built by <a href="https://klickifyagency.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0058c3', fontWeight: 600, textDecoration: 'none' }}>Klickify Agency</a>
        </div>
      </footer>
    </div>
  )
}
