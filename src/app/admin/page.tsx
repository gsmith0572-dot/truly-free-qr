'use client'
import { useState, useEffect, useRef } from 'react'
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

interface QRListItem {
  short_id: string
  redirect_url: string
  destination_url: string
  project_name: string | null
  category: string | null
  created_at: string
}

const STORAGE_KEY = 'tfqr_admin_key'

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState<string | null>(null)
  const [usernameInput, setUsernameInput] = useState('')
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

  const editCardRef = useRef<HTMLDivElement>(null)
  const [categoryInput, setCategoryInput] = useState('')
  const [items, setItems] = useState<QRListItem[] | null>(null)
  const [browseLoading, setBrowseLoading] = useState(false)
  const [browseError, setBrowseError] = useState('')

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    if (saved) setAdminKey(saved)
  }, [])

  function submitGate(e: React.FormEvent) {
    e.preventDefault()
    if (!usernameInput || !passwordInput) return
    const key = `${usernameInput}:${passwordInput}`
    sessionStorage.setItem(STORAGE_KEY, key)
    setAdminKey(key)
    setGateError('')
  }

  function logout() {
    sessionStorage.removeItem(STORAGE_KEY)
    setAdminKey(null)
    setUsernameInput('')
    setPasswordInput('')
    setRecord(null)
    setItems(null)
  }

  async function browse(e: React.FormEvent) {
    e.preventDefault()
    if (!adminKey) return
    setBrowseLoading(true)
    setBrowseError('')
    setItems(null)
    try {
      const qs = categoryInput ? `?category=${encodeURIComponent(categoryInput.trim())}` : ''
      const res = await fetch(`/api/qr${qs}`, { headers: { 'x-admin-key': adminKey } })
      const data = await res.json()
      if (res.status === 403) {
        setGateError('Incorrect admin password')
        logout()
        return
      }
      if (!res.ok) { setBrowseError(data.error || 'Failed to list QR codes'); return }
      setItems(data.qrs)
    } catch {
      setBrowseError('Failed to list QR codes')
    } finally {
      setBrowseLoading(false)
    }
  }

  function selectItem(item: QRListItem) {
    setRecord({
      short_id: item.short_id,
      redirect_url: item.redirect_url,
      safe_scan_url: `https://trulyfreeqr.link/safe/${item.short_id}`,
      qr: { destination_url: item.destination_url, project_name: item.project_name, category: item.category, created_at: item.created_at, updated_at: null },
    })
    setEditValue(item.destination_url)
    setSaveSuccess(false)
    setSaveError('')
    setTimeout(() => editCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0)
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
          <div style={{ fontSize: 12, color: '#718096', marginBottom: 16 }}>Enter your admin credentials to manage any QR code.</div>
          <input
            type="text"
            value={usernameInput}
            onChange={e => setUsernameInput(e.target.value)}
            placeholder="Username"
            autoFocus
            autoComplete="username"
            style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1px solid rgba(74,85,104,0.2)', borderRadius: 4, fontSize: 13, marginBottom: 8, fontFamily: 'inherit' }}
          />
          <input
            type="password"
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
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

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 6px' }}>Manage Any QR Code</h1>
          <p style={{ fontSize: 13, color: '#718096', margin: 0 }}>Look up by short ID and edit its destination — bypasses the per-browser ownership check.</p>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)', padding: 20, marginBottom: 20 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 8 }}>Browse by Category</div>
          <form onSubmit={browse} style={{ display: 'flex', gap: 8, marginBottom: items || browseError ? 16 : 0 }}>
            <input
              type="text"
              value={categoryInput}
              onChange={e => setCategoryInput(e.target.value)}
              placeholder="Category (e.g. standee) — blank shows most recent 200"
              style={{ flex: 1, boxSizing: 'border-box', padding: '10px 12px', border: '1px solid rgba(74,85,104,0.2)', borderRadius: 4, fontSize: 13, fontFamily: 'inherit' }}
            />
            <button type="submit" disabled={browseLoading} style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '10px 20px', fontSize: 13, fontWeight: 600, color: '#4a5568', cursor: browseLoading ? 'default' : 'pointer', opacity: browseLoading ? 0.7 : 1 }}>
              {browseLoading ? 'Loading...' : 'Browse'}
            </button>
          </form>

          {browseError && <div style={{ color: '#c53030', fontSize: 12 }}>{browseError}</div>}

          {items && (
            items.length === 0 ? (
              <div style={{ fontSize: 13, color: '#718096' }}>No QR codes found{categoryInput ? ` for category "${categoryInput}"` : ''}.</div>
            ) : (
              <div style={{ maxHeight: 400, overflowY: 'auto', border: '1px solid rgba(74,85,104,0.1)', borderRadius: 6 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                  <thead>
                    <tr style={{ background: '#f7fafc', position: 'sticky', top: 0 }}>
                      <th style={{ textAlign: 'left', padding: '8px 12px', color: '#718096', fontWeight: 600, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Name</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', color: '#718096', fontWeight: 600, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Short ID</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', color: '#718096', fontWeight: 600, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Destination</th>
                      <th style={{ padding: '8px 12px' }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                      <tr key={item.short_id} style={{ borderTop: '1px solid rgba(74,85,104,0.08)' }}>
                        <td style={{ padding: '8px 12px', color: '#181c1e', fontWeight: 500 }}>{item.project_name || '—'}</td>
                        <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: '#4a5568' }}>{item.short_id}</td>
                        <td style={{ padding: '8px 12px', color: '#718096', maxWidth: 220, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.destination_url}</td>
                        <td style={{ padding: '8px 12px' }}>
                          <button onClick={() => selectItem(item)} style={{ background: '#f1f4f6', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '4px 10px', fontSize: 11, fontWeight: 600, color: '#0058c3', cursor: 'pointer' }}>Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
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
          <div ref={editCardRef} style={{ background: '#fff', borderRadius: 8, boxShadow: '0px 8px 24px rgba(24,28,30,0.06)', padding: 20 }}>
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
