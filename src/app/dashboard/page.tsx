'use client'
import { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import Link from 'next/link'
import Image from 'next/image'

interface ScanEvent { hour: string; count: string }
interface DeviceData { device_type: string; count: string }
interface CountryData { country: string; count: string }

interface Analytics {
  total_scans: number
  unique_scans: number
  devices: DeviceData[]
  countries: CountryData[]
  activity_24h: ScanEvent[]
}

interface QRItem {
  short_id: string
  redirect_url: string
  destination_url: string
  project_name: string
  category: string
  created_at: string
  analytics?: Analytics
  loading_analytics?: boolean
}

export default function Dashboard() {
  const [qrs, setQrs] = useState<QRItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<string | null>(null)
  const [copying, setCopying] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')
  const [editSaving, setEditSaving] = useState(false)
  const [editError, setEditError] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('tfqr_codes')
    if (saved) { try { setQrs(JSON.parse(saved)) } catch {} }
    setLoading(false)
  }, [])

  async function loadAnalytics(shortId: string) {
    setQrs(prev => prev.map(q => q.short_id === shortId ? { ...q, loading_analytics: true } : q))
    try {
      const res = await fetch(`/api/analytics/${shortId}`)
      const data = await res.json()
      setQrs(prev => prev.map(q => q.short_id === shortId ? { ...q, analytics: data, loading_analytics: false } : q))
    } catch {
      setQrs(prev => prev.map(q => q.short_id === shortId ? { ...q, loading_analytics: false } : q))
    }
  }

  function toggleSelected(shortId: string) {
    if (selected === shortId) {
      setSelected(null)
    } else {
      setSelected(shortId)
      const qr = qrs.find(q => q.short_id === shortId)
      if (qr && !qr.analytics && !qr.loading_analytics) {
        loadAnalytics(shortId)
      }
    }
  }

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
    if (selected === shortId) setSelected(null)
  }

  function startEdit(qr: QRItem) {
    setEditingId(qr.short_id)
    setEditValue(qr.destination_url)
    setEditError('')
  }

  function cancelEdit() {
    setEditingId(null)
    setEditError('')
  }

  async function saveEdit(shortId: string) {
    if (!editValue || editSaving) return
    setEditSaving(true)
    setEditError('')
    try {
      const sessionToken = localStorage.getItem('tfqr_session') || ''
      const res = await fetch(`/api/qr/${shortId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ destination_url: editValue, session_token: sessionToken }) })
      const data = await res.json()
      if (!res.ok) { setEditError(data.error || 'Failed to update destination'); return }
      const updated = qrs.map(q => q.short_id === shortId ? { ...q, destination_url: editValue } : q)
      setQrs(updated)
      localStorage.setItem('tfqr_codes', JSON.stringify(updated))
      setEditingId(null)
    } catch {
      setEditError('Failed to update destination')
    } finally {
      setEditSaving(false)
    }
  }

  function getMaxScans(activity: ScanEvent[]) {
    return Math.max(...activity.map(a => parseInt(a.count)), 1)
  }

  function getMobilePercent(devices: DeviceData[]) {
    const total = devices.reduce((s, d) => s + parseInt(d.count), 0)
    const mobile = devices.find(d => d.device_type === 'mobile')
    if (!total) return 0
    return Math.round((parseInt(mobile?.count || '0') / total) * 100)
  }

  if (loading) return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#718096', fontSize: 13 }}>Loading your QR codes...</div>
    </div>
  )

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Image src="/logo.png" alt="TrulyFreeQR" width={142} height={44} style={{height:44,width:'auto'}} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', color: '#0058c3', borderRadius: 2, padding: '4px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em' }}>✦ NO ACCOUNT NEEDED</div>
          <Link href="/" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', textDecoration: 'none' }}>+ New QR</Link>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 6px' }}>My QR Codes</h1>
          <p style={{ fontSize: 13, color: '#718096', margin: 0 }}>Your codes are saved privately in this browser. No account, no email, no expiration. Click any code to view real-time analytics.</p>
        </div>

        {qrs.length === 0 ? (
          <div style={{ background: '#fff', borderRadius: 8, padding: 48, textAlign: 'center', boxShadow: '0px 8px 24px rgba(24,28,30,0.06)' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>◻</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#181c1e', marginBottom: 6 }}>No QR codes yet</div>
            <div style={{ fontSize: 13, color: '#718096', marginBottom: 20 }}>Create your first dynamic QR code — free forever.</div>
            <Link href="/" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '10px 20px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Create QR Code →</Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {qrs.map(qr => (
              <div key={qr.short_id} style={{ background: '#fff', borderRadius: 8, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)', overflow: 'hidden' }}>
                <div style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: '48px 1fr auto', gap: 16, alignItems: 'center', cursor: 'pointer' }} onClick={() => toggleSelected(qr.short_id)}>
                  <div style={{ width: 48, height: 48, background: '#f1f4f6', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#718096' }}>{qr.category}</span>
                      <span style={{ fontSize: 10, color: '#e5e9eb' }}>·</span>
                      <span style={{ fontSize: 10, color: '#718096' }}>{new Date(qr.created_at).toLocaleDateString()}</span>
                      <span style={{ background: 'rgba(0,88,195,0.07)', color: '#0058c3', padding: '1px 6px', borderRadius: 2, fontSize: 10, fontWeight: 700 }}>DYNAMIC</span>
                      <span style={{ background: 'rgba(34,197,94,0.1)', color: '#16a34a', padding: '1px 6px', borderRadius: 2, fontSize: 10, fontWeight: 700 }}>✓ SAFE-SCAN</span>
                      {qr.analytics && <span style={{ background: 'rgba(0,88,195,0.07)', color: '#0058c3', padding: '1px 6px', borderRadius: 2, fontSize: 10, fontWeight: 700 }}>{qr.analytics.total_scans} SCANS</span>}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button onClick={e => { e.stopPropagation(); copyToClipboard(qr.redirect_url, qr.short_id) }} style={{ background: copying === qr.short_id ? 'rgba(34,197,94,0.1)' : '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '6px 12px', fontSize: 11, fontWeight: 600, color: copying === qr.short_id ? '#16a34a' : '#4a5568', cursor: 'pointer' }}>
                      {copying === qr.short_id ? '✓ Copied' : 'Copy'}
                    </button>
                    <button onClick={e => { e.stopPropagation(); downloadQR(qr.redirect_url, qr.short_id) }} style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '6px 12px', fontSize: 11, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>PNG</button>
                    <button onClick={e => { e.stopPropagation(); startEdit(qr) }} style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '6px 12px', fontSize: 11, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>Edit</button>
                    <button onClick={e => { e.stopPropagation(); deleteQR(qr.short_id) }} style={{ background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '6px 10px', fontSize: 11, fontWeight: 600, color: '#718096', cursor: 'pointer' }}>✕</button>
                  </div>
                </div>

                {editingId === qr.short_id && (
                  <div style={{ borderTop: '1px solid rgba(74,85,104,0.1)', padding: '16px 20px', background: '#f7fafc' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 8 }}>Edit Destination URL</div>
                    <input
                      type="text"
                      value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box', padding: '8px 10px', border: '1px solid rgba(74,85,104,0.2)', borderRadius: 4, fontSize: 13, marginBottom: 8, fontFamily: 'inherit' }}
                    />
                    {editError && <div style={{ color: '#c53030', fontSize: 12, marginBottom: 8 }}>{editError}</div>}
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => saveEdit(qr.short_id)} disabled={editSaving} style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', fontSize: 12, fontWeight: 600, cursor: editSaving ? 'default' : 'pointer', opacity: editSaving ? 0.7 : 1 }}>
                        {editSaving ? 'Saving...' : 'Save'}
                      </button>
                      <button onClick={cancelEdit} style={{ background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '8px 16px', fontSize: 12, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>Cancel</button>
                    </div>
                  </div>
                )}

                {selected === qr.short_id && (
                  <div style={{ borderTop: '1px solid rgba(74,85,104,0.1)', padding: '20px', background: '#f7fafc' }}>
                    {qr.loading_analytics && (
                      <div style={{ textAlign: 'center', padding: '20px', color: '#718096', fontSize: 13 }}>Loading analytics...</div>
                    )}
                    {qr.analytics && (
                      <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
                          {[
                            ['Total Scans', qr.analytics.total_scans.toString()],
                            ['Unique Scans', qr.analytics.unique_scans.toString()],
                            ['Mobile', getMobilePercent(qr.analytics.devices) + '%'],
                            ['Countries', qr.analytics.countries.length.toString()],
                          ].map(([label, value]) => (
                            <div key={label} style={{ background: '#fff', borderRadius: 6, padding: '12px 14px', textAlign: 'center', border: '1px solid rgba(74,85,104,0.1)' }}>
                              <div style={{ fontSize: 20, fontWeight: 700, color: '#0058c3', marginBottom: 2 }}>{value}</div>
                              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#718096' }}>{label}</div>
                            </div>
                          ))}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                          <div style={{ background: '#fff', borderRadius: 6, padding: 16, border: '1px solid rgba(74,85,104,0.1)' }}>
                            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 12 }}>Top Countries</div>
                            {qr.analytics.countries.length === 0 ? (
                              <div style={{ fontSize: 12, color: '#718096' }}>No scan data yet</div>
                            ) : qr.analytics.countries.map(c => {
                              const total = qr.analytics!.countries.reduce((s, x) => s + parseInt(x.count), 0)
                              const pct = Math.round((parseInt(c.count) / total) * 100)
                              return (
                                <div key={c.country}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                                    <span style={{ fontWeight: 500 }}>{c.country || 'Unknown'}</span>
                                    <span style={{ fontWeight: 600, color: '#4a5568' }}>{pct}%</span>
                                  </div>
                                  <div style={{ height: 3, background: '#e5e9eb', borderRadius: 2, marginBottom: 8 }}>
                                    <div style={{ height: '100%', width: pct + '%', background: 'linear-gradient(135deg,#0058c3,#0070f3)', borderRadius: 2 }} />
                                  </div>
                                </div>
                              )
                            })}
                          </div>

                          <div style={{ background: '#fff', borderRadius: 6, padding: 16, border: '1px solid rgba(74,85,104,0.1)' }}>
                            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 12 }}>Scan Activity (24h)</div>
                            {qr.analytics.activity_24h.length === 0 ? (
                              <div style={{ fontSize: 12, color: '#718096' }}>No activity in last 24 hours</div>
                            ) : (
                              <div>
                                <div style={{ height: 60, display: 'flex', alignItems: 'flex-end', gap: 2, marginBottom: 4 }}>
                                  {qr.analytics.activity_24h.map((a, i) => {
                                    const max = getMaxScans(qr.analytics!.activity_24h)
                                    const h = Math.max((parseInt(a.count) / max) * 100, 4)
                                    return <div key={i} style={{ flex: 1, height: h + '%', background: 'linear-gradient(135deg,#0058c3,#0070f3)', borderRadius: '2px 2px 0 0', minWidth: 4 }} />
                                  })}
                                </div>
                                <div style={{ fontSize: 10, color: '#718096', textAlign: 'center' }}>Last 24 hours — {qr.analytics.activity_24h.reduce((s, a) => s + parseInt(a.count), 0)} total scans</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    {!qr.analytics && !qr.loading_analytics && (
                      <div style={{ textAlign: 'center', padding: '20px' }}>
                        <button onClick={() => loadAnalytics(qr.short_id)} style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 20px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Load Analytics</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <footer style={{ background: '#fff', borderTop: '1px solid rgba(74,85,104,0.15)', padding: '20px 24px', textAlign: 'center', marginTop: 40 }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 8 }}>
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
