'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface QRRecord {
  short_id: string
  redirect_url: string
  safe_scan_url: string
  qr: {
    destination_url: string
    project_name: string | null
    category: string | null
    created_at: string
    updated_at: string | null
  }
}

const STORAGE_KEY = 'tfqr_admin_key'

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState<string | null>(null)
  const [passwordInput, setPasswordInput] = useState('')
  const [gateError, setGateError] = useState('')

  const [shortIdInput, setShortIdInput] = useState('')
  const [record, setRecord] = useState<QRRecord | null>(null)
  const [lookupLoading, setLookupLoading] = useState(false)
  const [lookupError, setLookupError] = useState('')

  const [editValue, setEditValue] = useState('')
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState('')
  const [saveSuccess, setSaveSuccess] = useState(false)

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    if (saved) setAdminKey(saved)
  }, [])

  function submitGate(e: React.FormEvent) {
    e.preventDefault()
    if (!passwordInput) return
    sessionStorage.setItem(STORAGE_KEY, passwordInput)
    setAdminKey(passwordInput)
    setGateError('')
  }

  function logout() {
    sessionStorage.removeItem(STORAGE_KEY)
    setAdminKey(null)
    setPasswordInput('')
    setRecord(null)
  }

  async function lookup(e: React.FormEvent) {
    e.preventDefault()
    if (!shortIdInput || !adminKey) return
    setLookupLoading(true)
    setLookupError('')
    setRecord(null)
    setSaveSuccess(false)
    try {
      const res = await fetch(`/api/qr/${shortIdInput.trim()}`, { headers: { 'x-admin-key': adminKey } })
      const data = await res.json()
      if (res.status === 403) {
        setGateError('Incorrect admin password')
        logout()
        return
      }
      if (!res.ok) { setLookupError(data.error || 'QR code not found'); return }
      setRecord(data)
      setEditValue(data.qr.destination_url)
    } catch {
      setLookupError('Failed to look up QR code')
    } finally {
      setLookupLoading(false)
    }
  }

  async function save() {
    if (!record || !editValue || !adminKey) return
    setSaving(true)
    setSaveError('')
    setSaveSuccess(false)
    try {
      const res = await fetch(`/api/qr/${record.short_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
        body: JSON.stringify({ destination_url: editValue }),
      })
      const data = await res.json()
      if (res.status === 403) {
        setGateError('Incorrect admin password')
        logout()
        return
      }
      if (!res.ok) { setSaveError(data.error || 'Failed to update destination'); return }
      setRecord({ ...record, qr: { ...record.qr, destination_url: editValue } })
      setSaveSuccess(true)
    } catch {
      setSaveError('Failed to update destination')
    } finally {
      setSaving(false)
    }
  }

  if (!adminKey) {
    return (
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <form onSubmit={submitGate} style={{ background: '#fff', borderRadius: 8, padding: 32, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)', width: '100%', maxWidth: 340 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#181c1e', marginBottom: 4 }}>Admin Access</div>
          <div style={{ fontSize: 12, color: '#718096', marginBottom: 16 }}>Enter the admin password to manage any QR code.</div>
          <input
            type="password"
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
            placeholder="Password"
            autoFocus
            style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1px solid rgba(74,85,104,0.2)', borderRadius: 4, fontSize: 13, marginBottom: 12, fontFamily: 'inherit' }}
          />
          {gateError && <div style={{ color: '#c53030', fontSize: 12, marginBottom: 12 }}>{gateError}</div>}
          <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Enter</button>
        </form>
      </div>
    )
  }

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Image src="/logo.png" alt="TrulyFreeQR" width={142} height={44} style={{ height: 44, width: 'auto' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ background: 'rgba(0,88,195,0.07)', border: '1px solid rgba(0,88,195,0.2)', color: '#0058c3', borderRadius: 2, padding: '4px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em' }}>ADMIN</div>
          <button onClick={logout} style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '8px 16px', fontSize: 13, fontWeight: 600, color: '#4a5568', cursor: 'pointer' }}>Log out</button>
        </div>
      </nav>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 6px' }}>Manage Any QR Code</h1>
          <p style={{ fontSize: 13, color: '#718096', margin: 0 }}>Look up by short ID and edit its destination — bypasses the per-browser ownership check.</p>
        </div>

        <form onSubmit={lookup} style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <input
            type="text"
            value={shortIdInput}
            onChange={e => setShortIdInput(e.target.value)}
            placeholder="Short ID (e.g. aB3xY9kQ)"
            style={{ flex: 1, boxSizing: 'border-box', padding: '10px 12px', border: '1px solid rgba(74,85,104,0.2)', borderRadius: 4, fontSize: 13, fontFamily: 'monospace' }}
          />
          <button type="submit" disabled={lookupLoading} style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 20px', fontSize: 13, fontWeight: 600, cursor: lookupLoading ? 'default' : 'pointer', opacity: lookupLoading ? 0.7 : 1 }}>
            {lookupLoading ? 'Looking up...' : 'Look up'}
          </button>
        </form>

        {lookupError && (
          <div style={{ background: '#fff', border: '1px solid rgba(197,48,48,0.2)', borderRadius: 8, padding: 16, marginBottom: 20, color: '#c53030', fontSize: 13 }}>{lookupError}</div>
        )}

        {record && (
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)', padding: 20 }}>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#181c1e', marginBottom: 3 }}>{record.qr.project_name || record.short_id}</div>
              <div style={{ fontSize: 11, color: '#718096', fontFamily: 'monospace', marginBottom: 4 }}>{record.redirect_url}</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                {record.qr.category && <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#718096' }}>{record.qr.category}</span>}
                <span style={{ fontSize: 10, color: '#718096' }}>Created {new Date(record.qr.created_at).toLocaleDateString()}</span>
              </div>
            </div>

            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 8 }}>Destination URL</div>
            <input
              type="text"
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              style={{ width: '100%', boxSizing: 'border-box', padding: '8px 10px', border: '1px solid rgba(74,85,104,0.2)', borderRadius: 4, fontSize: 13, marginBottom: 8, fontFamily: 'inherit' }}
            />
            {saveError && <div style={{ color: '#c53030', fontSize: 12, marginBottom: 8 }}>{saveError}</div>}
            {saveSuccess && <div style={{ color: '#16a34a', fontSize: 12, marginBottom: 8 }}>Destination updated.</div>}
            <button onClick={save} disabled={saving} style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', fontSize: 12, fontWeight: 600, cursor: saving ? 'default' : 'pointer', opacity: saving ? 0.7 : 1 }}>
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
