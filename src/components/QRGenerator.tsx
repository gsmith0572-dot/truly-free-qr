'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import QRCode from 'qrcode'
import Footer from '@/components/Footer'
import AdSlot from '@/components/ads/AdSlot'
import Link from 'next/link'

const TABS = ['URL', 'WiFi', 'vCard', 'Email', 'Text', 'PDF']
const CATEGORIES = ['Marketing', 'Restaurant', 'Real Estate', 'Events', 'Product', 'Personal']
const SIDEBAR_TOOLS = ['Colors', 'Frames', 'Logo', 'Shapes']
const QR_COLORS = ['#0058c3','#181c1e','#16a34a','#dc2626','#7c3aed','#ea580c']
const BG_COLORS = ['#ffffff','#f1f4f6','#fff7ed','#f0fdf4','#fef2f2','#181c1e']

const inp = { width: '100%', background: '#fff', border: '1px solid rgba(74,85,104,0.15)', borderRadius: 4, padding: '10px 12px', fontFamily: 'Inter, system-ui, sans-serif', fontSize: 13, color: '#181c1e', outline: 'none', boxSizing: 'border-box' as const }
const lbl = { fontSize: 10, fontWeight: 600 as const, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#718096', marginBottom: 5, display: 'block' as const }

function buildQRContent(tab: string, fields: Record<string, string>): string {
  if (tab === 'URL') return fields.url || ''
  if (tab === 'WiFi') {
    if (!fields.ssid) return ''
    return 'WIFI:T:' + (fields.security || 'WPA') + ';S:' + fields.ssid + ';P:' + (fields.password || '') + ';;'
  }
  if (tab === 'vCard') {
    if (!fields.firstName) return ''
    return 'BEGIN:VCARD\nVERSION:3.0\nN:' + (fields.lastName||'') + ';' + fields.firstName + '\nFN:' + fields.firstName + ' ' + (fields.lastName||'') + '\nORG:' + (fields.company||'') + '\nTEL:' + (fields.phone||'') + '\nEMAIL:' + (fields.email||'') + '\nURL:' + (fields.website||'') + '\nADR:;;' + (fields.address||'') + ';;;;\nEND:VCARD'
  }
  if (tab === 'Email') {
    if (!fields.emailTo) return ''
    return 'mailto:' + fields.emailTo + '?subject=' + encodeURIComponent(fields.subject||'') + '&body=' + encodeURIComponent(fields.body||'')
  }
  if (tab === 'Text') return fields.text || ''
  if (tab === 'PDF') return fields.pdfUrl || ''
  return ''
}

interface TabFormProps {
  activeTab: string
  fields: Record<string, string>
  setField: (key: string, value: string) => void
  pdfUploading: boolean
  onPDFUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function URLForm({ fields, setField }: { fields: Record<string, string>, setField: (k:string,v:string)=>void }) {
  return <div><label style={lbl}>Website URL</label><input value={fields.url} onChange={e=>setField('url',e.target.value)} type="url" placeholder="https://your-website.com" style={inp} /></div>
}

function WiFiForm({ fields, setField }: { fields: Record<string, string>, setField: (k:string,v:string)=>void }) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      <div><label style={lbl}>Network Name (SSID)</label><input value={fields.ssid} onChange={e=>setField('ssid',e.target.value)} placeholder="My WiFi Network" style={inp} /></div>
      <div><label style={lbl}>Password</label><input value={fields.password} onChange={e=>setField('password',e.target.value)} type="text" placeholder="Network password" style={inp} /></div>
      <div><label style={lbl}>Security Type</label>
        <select value={fields.security} onChange={e=>setField('security',e.target.value)} style={inp}>
          <option value="WPA">WPA/WPA2 (Most common)</option>
          <option value="WEP">WEP</option>
          <option value="nopass">None (Open network)</option>
        </select>
      </div>
    </div>
  )
}

function VCardForm({ fields, setField }: { fields: Record<string, string>, setField: (k:string,v:string)=>void }) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
        <div><label style={lbl}>First Name</label><input value={fields.firstName} onChange={e=>setField('firstName',e.target.value)} placeholder="John" style={inp} /></div>
        <div><label style={lbl}>Last Name</label><input value={fields.lastName} onChange={e=>setField('lastName',e.target.value)} placeholder="Smith" style={inp} /></div>
      </div>
      <div><label style={lbl}>Company</label><input value={fields.company} onChange={e=>setField('company',e.target.value)} placeholder="Acme Corp" style={inp} /></div>
      <div><label style={lbl}>Phone</label><input value={fields.phone} onChange={e=>setField('phone',e.target.value)} type="tel" placeholder="+1 555 000 0000" style={inp} /></div>
      <div><label style={lbl}>Email</label><input value={fields.email} onChange={e=>setField('email',e.target.value)} type="email" placeholder="john@company.com" style={inp} /></div>
      <div><label style={lbl}>Website</label><input value={fields.website} onChange={e=>setField('website',e.target.value)} type="url" placeholder="https://company.com" style={inp} /></div>
      <div><label style={lbl}>Address</label><input value={fields.address} onChange={e=>setField('address',e.target.value)} placeholder="123 Main St, City, Country" style={inp} /></div>
    </div>
  )
}

function EmailForm({ fields, setField }: { fields: Record<string, string>, setField: (k:string,v:string)=>void }) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      <div><label style={lbl}>Email Address</label><input value={fields.emailTo} onChange={e=>setField('emailTo',e.target.value)} type="email" placeholder="recipient@email.com" style={inp} /></div>
      <div><label style={lbl}>Subject</label><input value={fields.subject} onChange={e=>setField('subject',e.target.value)} placeholder="Email subject" style={inp} /></div>
      <div><label style={lbl}>Message</label><textarea value={fields.body} onChange={e=>setField('body',e.target.value)} placeholder="Your message here..." rows={3} style={{...inp,resize:'vertical' as const}} /></div>
    </div>
  )
}

function TextForm({ fields, setField }: { fields: Record<string, string>, setField: (k:string,v:string)=>void }) {
  return (
    <div>
      <label style={lbl}>Plain Text (max 300 characters)</label>
      <textarea value={fields.text} onChange={e=>setField('text',e.target.value.slice(0,300))} placeholder="Enter any text to encode in your QR code..." rows={4} style={{...inp,resize:'vertical' as const}} />
      <div style={{fontSize:10,color:'#718096',marginTop:4,textAlign:'right'}}>{fields.text.length}/300</div>
    </div>
  )
}

function PDFForm({ fields, setField, pdfUploading, onPDFUpload }: { fields: Record<string, string>, setField: (k:string,v:string)=>void, pdfUploading:boolean, onPDFUpload:(e:React.ChangeEvent<HTMLInputElement>)=>void }) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      <div>
        <label style={lbl}>Upload PDF or Image (max 20MB)</label>
        <label style={{display:'block',background:'#fff',borderRadius:6,padding:20,border:'2px dashed rgba(0,88,195,0.3)',textAlign:'center',cursor:'pointer'}}>
          <input type="file" accept="application/pdf,image/*" style={{display:'none'}} onChange={onPDFUpload} />
          {pdfUploading ? <div style={{fontSize:13,color:'#0058c3'}}>Uploading...</div>
            : fields.pdfUrl ? <div style={{fontSize:13,color:'#16a34a',fontWeight:600}}>File uploaded — QR ready</div>
            : <><div style={{fontSize:24,marginBottom:6}}>📄</div><div style={{fontSize:13,color:'#4a5568',fontWeight:500}}>Click to upload PDF or image</div><div style={{fontSize:11,color:'#718096',marginTop:4}}>PDF, JPG, PNG up to 20MB</div></>}
        </label>
      </div>
      <div><label style={lbl}>Or paste a direct URL</label><input value={fields.pdfUrl} onChange={e=>setField('pdfUrl',e.target.value)} type="url" placeholder="https://example.com/document.pdf" style={inp} /></div>
    </div>
  )
}

function TabForm({ activeTab, fields, setField, pdfUploading, onPDFUpload }: TabFormProps) {
  if (activeTab === 'URL') return <URLForm fields={fields} setField={setField} />
  if (activeTab === 'WiFi') return <WiFiForm fields={fields} setField={setField} />
  if (activeTab === 'vCard') return <VCardForm fields={fields} setField={setField} />
  if (activeTab === 'Email') return <EmailForm fields={fields} setField={setField} />
  if (activeTab === 'Text') return <TextForm fields={fields} setField={setField} />
  if (activeTab === 'PDF') return <PDFForm fields={fields} setField={setField} pdfUploading={pdfUploading} onPDFUpload={onPDFUpload} />
  return null
}

export default function QRGenerator() {
  const [activeTab, setActiveTab] = useState('URL')
  const [activeTool, setActiveTool] = useState('')
  const [fields, setFields] = useState<Record<string,string>>({ url:'', ssid:'', password:'', security:'WPA', firstName:'', lastName:'', company:'', phone:'', email:'', website:'', address:'', emailTo:'', subject:'', body:'', text:'', pdfUrl:'' })
  const [projectName, setProjectName] = useState('')
  const [category, setCategory] = useState('Marketing')
  const [dynamic, setDynamic] = useState(true)
  const [shortId, setShortId] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('')
  const [safeScanUrl, setSafeScanUrl] = useState('')
  const [saving, setSaving] = useState(false)
  const [qrCount, setQrCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [qrColor, setQrColor] = useState('#0058c3')
  const [bgColor, setBgColor] = useState('#ffffff')
  const [pdfUploading, setPdfUploading] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const qrContent = buildQRContent(activeTab, fields)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const codes = localStorage.getItem('tfqr_codes')
    if (codes) { try { setQrCount(JSON.parse(codes).length) } catch {} }
  }, [])

  const drawQR = useCallback(() => {
    if (!canvasRef.current) return
    if (qrContent.length > 2) {
      QRCode.toCanvas(canvasRef.current, qrContent, { width:200, margin:2, color:{ dark:qrColor, light:bgColor } }).catch(()=>{})
    } else {
      const ctx = canvasRef.current.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0,0,200,200)
      ctx.fillStyle = '#f1f4f6'
      ctx.fillRect(0,0,200,200)
      ctx.fillStyle = '#a0aec0'
      ctx.font = '12px system-ui'
      ctx.textAlign = 'center'
      ctx.fillText('Fill in the fields to', 100, 90)
      ctx.fillText('generate your QR code', 100, 108)
    }
  }, [qrContent, qrColor, bgColor])

  useEffect(() => { drawQR() }, [drawQR])

  const setField = useCallback((key: string, value: string) => {
    setFields(prev => ({ ...prev, [key]: value }))
    setShortId('')
    setRedirectUrl('')
  }, [])

  async function saveQR() {
    if (!qrContent || saving) return
    setSaving(true)
    try {
      const sessionToken = localStorage.getItem('tfqr_session') || crypto.randomUUID()
      localStorage.setItem('tfqr_session', sessionToken)
      const destination = activeTab === 'URL' ? fields.url : activeTab === 'PDF' ? fields.pdfUrl : 'data:text/plain,' + encodeURIComponent(qrContent)
      const res = await fetch('/api/qr', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ destination_url:destination, type:activeTab.toLowerCase(), project_name:projectName||null, category, session_token:sessionToken }) })
      const data = await res.json()
      if (data.short_id) {
        setShortId(data.short_id)
        setRedirectUrl(data.redirect_url)
        setSafeScanUrl(data.safe_scan_url || '')
        const existing = JSON.parse(localStorage.getItem('tfqr_codes')||'[]')
        const updated = [{ short_id:data.short_id, redirect_url:data.redirect_url, destination_url:destination, project_name:projectName||qrContent.slice(0,40), category, created_at:new Date().toISOString() }, ...existing]
        localStorage.setItem('tfqr_codes', JSON.stringify(updated))
        setQrCount(updated.length)
      }
    } finally { setSaving(false) }
  }

  async function downloadPNG() {
    if (!canvasRef.current || !qrContent) return
    const link = document.createElement('a')
    link.download = 'trulyfreeqr.png'
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  async function downloadSVG() {
    if (!qrContent) return
    const svg = await QRCode.toString(qrContent, { type:'svg', color:{ dark:qrColor, light:bgColor } })
    const blob = new Blob([svg], { type:'image/svg+xml' })
    const link = document.createElement('a')
    link.download = 'trulyfreeqr.svg'
    link.href = URL.createObjectURL(blob)
    link.click()
  }

  function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f || !canvasRef.current || qrContent.length < 3) return
    const reader = new FileReader()
    reader.onload = ev => {
      const img = new Image()
      img.onload = () => {
        const ctx = canvasRef.current!.getContext('2d')
        if (!ctx) return
        const s=44, x=(200-s)/2, y=(200-s)/2
        ctx.fillStyle = bgColor
        ctx.fillRect(x-3,y-3,s+6,s+6)
        ctx.drawImage(img,x,y,s,s)
      }
      img.src = ev.target?.result as string
    }
    reader.readAsDataURL(f)
  }

  async function handlePDFUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return
    if (f.size > 20*1024*1024) { alert('File must be under 20MB'); return }
    setPdfUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', f)
      const res = await fetch('/api/upload-pdf', { method:'POST', body:formData })
      const data = await res.json()
      if (data.url) setField('pdfUrl', data.url)
    } catch { alert('Upload failed. Try again.') }
    finally { setPdfUploading(false) }
  }

  const PreviewPanel = () => (
    <div style={{background:'#fff',borderRadius:8,padding:16,display:'flex',flexDirection:'column',alignItems:'center',gap:12,boxShadow:'0px 8px 24px rgba(24,28,30,0.06)'}}>
      <canvas ref={canvasRef} width={200} height={200} style={{borderRadius:8,maxWidth:'100%'}} />
      {qrContent.length > 2 && !shortId && (
        <button onClick={saveQR} disabled={saving} style={{width:'100%',background:saving?'#718096':'rgba(0,88,195,0.08)',color:saving?'#fff':'#0058c3',border:'1px solid rgba(0,88,195,0.2)',borderRadius:4,padding:'11px',fontFamily:'inherit',fontSize:13,fontWeight:600,cursor:'pointer'}}>
          {saving ? 'Saving...' : 'Make Dynamic (Free)'}
        </button>
      )}
      <button onClick={downloadPNG} disabled={qrContent.length < 3} style={{width:'100%',background:qrContent.length>2?'linear-gradient(135deg,#0058c3,#0070f3)':'#e5e9eb',color:qrContent.length>2?'#fff':'#a0aec0',border:'none',borderRadius:4,padding:'12px',fontFamily:'inherit',fontSize:14,fontWeight:700,cursor:qrContent.length>2?'pointer':'not-allowed',display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>Download PNG</button>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,width:'100%'}}>
        <button onClick={downloadSVG} style={{background:'#f1f4f6',border:'1px solid rgba(74,85,104,0.15)',borderRadius:4,padding:'9px',fontFamily:'inherit',fontSize:11,fontWeight:600,color:'#4a5568',cursor:'pointer'}}>SVG Vector</button>
        <button style={{background:'#f1f4f6',border:'1px solid rgba(74,85,104,0.15)',borderRadius:4,padding:'9px',fontFamily:'inherit',fontSize:11,fontWeight:600,color:'#4a5568',cursor:'pointer'}}>Print PDF</button>
      </div>
      <div style={{fontSize:10,color:'#718096',textAlign:'center'}}>3000x3000px Transparent Free</div>
    </div>
  )

  return (
    <div style={{fontFamily:'Inter, system-ui, sans-serif',background:'#f7fafc',minHeight:'100vh'}}>
      <style>{`.tab-scroll{overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-scroll::-webkit-scrollbar{display:none}`}</style>
      <nav style={{background:'#fff',borderBottom:'1px solid rgba(74,85,104,0.15)',padding:'0 16px',display:'flex',alignItems:'center',justifyContent:'space-between',height:56,position:'sticky',top:0,zIndex:100}}>
        <a href="/" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none'}}>
          <img src="/logo.png" alt="TrulyFreeQR" style={{height:36,width:"auto"}} />
        </a>
        {!isMobile && (
          <div style={{display:'flex',gap:4}}>
            <Link href="/" style={{padding:'6px 12px',fontSize:13,fontWeight:500,color:'#0058c3',textDecoration:'none',borderBottom:'2px solid #0058c3'}}>Generator</Link>
            <Link href="/dashboard" style={{padding:'6px 12px',fontSize:13,fontWeight:500,color:'#4a5568',textDecoration:'none',borderBottom:'2px solid transparent'}}>Analytics</Link>
            <Link href="/qr-code-for-restaurants" style={{padding:'6px 12px',fontSize:13,fontWeight:500,color:'#4a5568',textDecoration:'none',borderBottom:'2px solid transparent'}}>Templates</Link>
            <a href="mailto:support@klickifyagency.com" style={{padding:'6px 12px',fontSize:13,fontWeight:500,color:'#4a5568',textDecoration:'none',borderBottom:'2px solid transparent'}}>API</a>
          </div>
        )}
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          {qrCount > 0 && (
            <a href="/dashboard" style={{display:'flex',alignItems:'center',gap:5,background:'#f1f4f6',border:'1px solid rgba(74,85,104,0.15)',borderRadius:4,padding:'5px 10px',fontSize:12,fontWeight:600,color:'#4a5568',textDecoration:'none'}}>
              {!isMobile && 'My QRs '}
              <span style={{background:'#0058c3',color:'#fff',borderRadius:10,padding:'1px 5px',fontSize:10}}>{qrCount}</span>
            </a>
          )}
          {isMobile && (
            <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:'none',border:'none',cursor:'pointer',padding:8,display:'flex',flexDirection:'column',gap:4}}>
              <span style={{display:'block',width:20,height:2,background:'#181c1e',borderRadius:1}}></span>
              <span style={{display:'block',width:20,height:2,background:'#181c1e',borderRadius:1}}></span>
              <span style={{display:'block',width:20,height:2,background:'#181c1e',borderRadius:1}}></span>
            </button>
          )}
        </div>
      </nav>
      {menuOpen && isMobile && (
        <div style={{background:'#fff',borderBottom:'1px solid rgba(74,85,104,0.15)',padding:'8px 16px'}}>
          <Link href="/" style={{display:'block',padding:'12px 0',fontSize:14,fontWeight:500,color:'#0058c3',borderBottom:'1px solid rgba(74,85,104,0.06)',textDecoration:'none'}}>Generator</Link>
          <Link href="/dashboard" style={{display:'block',padding:'12px 0',fontSize:14,fontWeight:500,color:'#4a5568',borderBottom:'1px solid rgba(74,85,104,0.06)',textDecoration:'none'}}>Analytics</Link>
          <Link href="/qr-code-for-restaurants" style={{display:'block',padding:'12px 0',fontSize:14,fontWeight:500,color:'#4a5568',borderBottom:'1px solid rgba(74,85,104,0.06)',textDecoration:'none'}}>Templates</Link>
          <a href="mailto:support@klickifyagency.com" style={{display:'block',padding:'12px 0',fontSize:14,fontWeight:500,color:'#4a5568',textDecoration:'none'}}>API</a>
        </div>
      )}
      <div style={{background:'#f1f4f6',padding:'8px 16px',textAlign:'center',fontSize:11,color:'#4a5568',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>
        <span style={{background:'rgba(0,88,195,0.08)',color:'#0058c3',padding:'1px 6px',borderRadius:2,fontSize:10,fontWeight:700,whiteSpace:'nowrap'}}>TRULY FREE</span>
        <span>Dynamic QR No Expiration No Account No Subscription.</span>
      </div>
      <div style={{maxWidth:1180,margin:'0 auto',padding:'0 16px'}}>
        <div style={{margin:'12px 0'}}><AdSlot slot="1234567890" format="leaderboard" /></div>
      </div>
      <div style={{maxWidth:1180,margin:'0 auto',padding:'0 16px 40px',display:isMobile?'block':'grid',gridTemplateColumns:'150px 1fr 270px',gap:0,alignItems:'start'}}>
        {!isMobile && (
          <aside style={{paddingRight:12,paddingTop:4}}>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'#718096',marginBottom:12,paddingLeft:4}}>Customize</div>
            {SIDEBAR_TOOLS.map(tool => (
              <div key={tool} onClick={()=>setActiveTool(activeTool===tool?'':tool)} style={{display:'flex',alignItems:'center',gap:8,padding:'8px 10px',borderRadius:4,cursor:'pointer',color:activeTool===tool?'#0058c3':'#4a5568',background:activeTool===tool?'rgba(0,88,195,0.06)':'none',fontSize:13,fontWeight:500,marginBottom:2}}>{tool}</div>
            ))}
            <AdSlot slot="0987654321" format="rectangle" />
          </aside>
        )}
        <main style={{padding:isMobile?'0':'0 12px',minWidth:0}}>
          {isMobile && (
            <div style={{marginBottom:12,marginTop:4,display:'flex',gap:6,overflowX:'auto',paddingBottom:4}}>
              {SIDEBAR_TOOLS.map(tool => (
                <button key={tool} onClick={()=>setActiveTool(activeTool===tool?'':tool)} style={{background:activeTool===tool?'#0058c3':'#fff',color:activeTool===tool?'#fff':'#4a5568',border:'1px solid rgba(74,85,104,0.15)',borderRadius:4,padding:'6px 12px',fontSize:12,fontWeight:500,cursor:'pointer',whiteSpace:'nowrap',flexShrink:0}}>{tool}</button>
              ))}
            </div>
          )}
          {activeTool && (
            <div style={{background:'#f1f4f6',borderRadius:8,padding:14,marginBottom:12}}>
              {activeTool==='Colors' && (
                <div>
                  <div style={{fontSize:11,fontWeight:700,color:'#181c1e',marginBottom:8}}>QR Color</div>
                  <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:12}}>
                    {QR_COLORS.map(c=><div key={c} onClick={()=>setQrColor(c)} style={{width:28,height:28,borderRadius:4,background:c,cursor:'pointer',border:qrColor===c?'3px solid #0058c3':'2px solid transparent'}} />)}
                  </div>
                  <div style={{fontSize:11,fontWeight:700,color:'#181c1e',marginBottom:8}}>Background</div>
                  <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                    {BG_COLORS.map(c=><div key={c} onClick={()=>setBgColor(c)} style={{width:28,height:28,borderRadius:4,background:c,cursor:'pointer',border:bgColor===c?'3px solid #0058c3':'1px solid rgba(74,85,104,0.2)'}} />)}
                  </div>
                </div>
              )}
              {activeTool==='Frames' && (
                <div>
                  <div style={{fontSize:11,fontWeight:700,color:'#181c1e',marginBottom:10}}>Frame Style</div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                    {['No Frame','Simple Border soon','Rounded soon','Scan Me soon'].map(f=>(
                      <div key={f} style={{background:'#fff',borderRadius:6,padding:'8px 6px',fontSize:11,fontWeight:500,color:f==='No Frame'?'#0058c3':'#a0aec0',cursor:f==='No Frame'?'pointer':'not-allowed',border:f==='No Frame'?'1px solid #0058c3':'1px solid rgba(74,85,104,0.1)',textAlign:'center'}}>{f}</div>
                    ))}
                  </div>
                  <div style={{fontSize:10,color:'#718096',marginTop:8}}>Custom frames coming in v2.</div>
                </div>
              )}
              {activeTool==='Logo' && (
                <div>
                  <div style={{fontSize:11,fontWeight:700,color:'#181c1e',marginBottom:8}}>Upload Logo</div>
                  {qrContent.length < 3 && <div style={{fontSize:11,color:'#dc2626',marginBottom:8}}>Fill in the form first to enable logo upload.</div>}
                  <label style={{display:'block',background:'#fff',borderRadius:6,padding:16,border:'1px dashed rgba(0,88,195,0.3)',textAlign:'center',cursor:qrContent.length>2?'pointer':'not-allowed',opacity:qrContent.length>2?1:0.5}}>
                    <input type="file" accept="image/png,image/svg+xml,image/jpeg" style={{display:'none'}} disabled={qrContent.length<3} onChange={handleLogoUpload} />
                    <div style={{fontSize:11,color:'#718096'}}>Click to upload PNG SVG or JPG</div>
                    <div style={{fontSize:10,color:'#a0aec0',marginTop:4}}>Logo appears centered on QR code</div>
                  </label>
                </div>
              )}
              {activeTool==='Shapes' && (
                <div>
                  <div style={{fontSize:11,fontWeight:700,color:'#181c1e',marginBottom:10}}>Module Shape</div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8}}>
                    {[['Square','active'],['Rounded','soon'],['Dots','soon'],['Extra Round','soon'],['Diamond','soon'],['Star','soon']].map(([s,b])=>(
                      <div key={s} style={{background:'#fff',borderRadius:6,padding:'8px 6px',fontSize:10,fontWeight:500,color:b==='active'?'#0058c3':'#a0aec0',cursor:b==='soon'?'not-allowed':'pointer',border:b==='active'?'1px solid #0058c3':'1px solid rgba(74,85,104,0.1)',textAlign:'center'}}>{s}</div>
                    ))}
                  </div>
                  <div style={{fontSize:10,color:'#718096',marginTop:8}}>Square active. Custom shapes coming in v2.</div>
                </div>
              )}
            </div>
          )}
          <div className="tab-scroll" style={{display:'flex',borderBottom:'1px solid rgba(74,85,104,0.15)',marginBottom:16}}>
            {TABS.map(tab=>(
              <button key={tab} onClick={()=>{setActiveTab(tab);setShortId('');setRedirectUrl('')}} style={{padding:'10px 16px',fontSize:13,fontWeight:500,color:tab===activeTab?'#0058c3':'#718096',border:'none',background:'none',cursor:'pointer',borderBottom:tab===activeTab?'2px solid #0058c3':'2px solid transparent',whiteSpace:'nowrap',flexShrink:0}}>{tab}</button>
            ))}
          </div>
          <TabForm activeTab={activeTab} fields={fields} setField={setField} pdfUploading={pdfUploading} onPDFUpload={handlePDFUpload} />
          <div style={{marginTop:12,marginBottom:12}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:4,background:'rgba(0,88,195,0.08)',color:'#0058c3',padding:'4px 10px',borderRadius:2,fontSize:10,fontWeight:700}}>SAFE-SCAN PROTECTION ACTIVE</div>
          </div>
          <div style={{background:'#f1f4f6',borderRadius:8,padding:'12px 14px',display:'flex',alignItems:'flex-start',gap:12,marginBottom:12}}>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600,color:'#181c1e',marginBottom:3,display:'flex',alignItems:'center',gap:6,flexWrap:'wrap'}}>
                Dynamic Tracking <span style={{background:'rgba(0,88,195,0.07)',border:'1px solid rgba(0,88,195,0.2)',color:'#0058c3',borderRadius:2,padding:'1px 6px',fontSize:10,fontWeight:700}}>FREE FOREVER</span>
              </div>
              <div style={{fontSize:12,color:'#4a5568',lineHeight:1.5}}>Edit destination anytime. Your code never expires.</div>
            </div>
            <div onClick={()=>setDynamic(!dynamic)} style={{position:'relative',width:40,height:22,flexShrink:0,marginTop:2,cursor:'pointer'}}>
              <div style={{position:'absolute',inset:0,background:dynamic?'#0058c3':'rgba(74,85,104,0.3)',borderRadius:11,transition:'background 0.2s'}}>
                <div style={{position:'absolute',left:dynamic?21:3,top:3,width:16,height:16,borderRadius:'50%',background:'#fff',transition:'left 0.2s',boxShadow:'0 1px 3px rgba(0,0,0,0.18)'}} />
              </div>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'1fr 1fr',gap:10,marginBottom:12}}>
            <div><label style={lbl}>Project Name</label><input value={projectName} onChange={e=>setProjectName(e.target.value)} placeholder="Optional" style={inp} /></div>
            <div><label style={lbl}>Category</label>
              <select value={category} onChange={e=>setCategory(e.target.value)} style={inp}>
                {CATEGORIES.map(c=><option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          {isMobile && <div style={{marginBottom:12}}><PreviewPanel /></div>}
          {shortId && (
            <div style={{background:'rgba(0,88,195,0.06)',border:'1px solid rgba(0,88,195,0.2)',borderRadius:8,padding:'12px 14px',marginBottom:12}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8,flexWrap:'wrap',marginBottom:10}}>
                <div>
                  <div style={{fontSize:10,fontWeight:700,color:'#0058c3',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:2}}>Dynamic QR Active — Never Expires</div>
                  <div style={{fontSize:11,color:'#4a5568',fontFamily:'monospace',wordBreak:'break-all'}}>{redirectUrl}</div>
                </div>
                <a href="/dashboard" style={{background:'#0058c3',color:'#fff',borderRadius:4,padding:'6px 12px',fontSize:11,fontWeight:600,textDecoration:'none',whiteSpace:'nowrap',flexShrink:0}}>View All</a>
              </div>
              {safeScanUrl && (
                <div style={{background:'rgba(22,163,74,0.06)',border:'1px solid rgba(22,163,74,0.2)',borderRadius:6,padding:'8px 12px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:8,flexWrap:'wrap'}}>
                  <div style={{display:'flex',alignItems:'center',gap:6}}>
                    <span style={{fontSize:14}}>🛡️</span>
                    <div>
                      <div style={{fontSize:10,fontWeight:700,color:'#16a34a',letterSpacing:'0.06em',textTransform:'uppercase'}}>Safe-Scan Active</div>
                      <div style={{fontSize:10,color:'#718096',fontFamily:'monospace',wordBreak:'break-all'}}>{safeScanUrl}</div>
                    </div>
                  </div>
                  <a href={safeScanUrl} target="_blank" rel="noopener noreferrer" style={{background:'#16a34a',color:'#fff',borderRadius:4,padding:'5px 10px',fontSize:10,fontWeight:700,textDecoration:'none',whiteSpace:'nowrap',flexShrink:0}}>Test →</a>
                </div>
              )}
            </div>
          )}
          {isMobile && <div style={{margin:'12px 0'}}><AdSlot slot="1122334455" format="mobile-banner" /></div>}
          <div style={{marginTop:20,paddingTop:20,borderTop:'1px solid rgba(74,85,104,0.15)'}}>
            <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:14,flexWrap:'wrap',gap:8}}>
              <div>
                <div style={{fontSize:15,fontWeight:700,color:'#181c1e',letterSpacing:'-0.02em'}}>Real-time Analytics</div>
                <div style={{fontSize:11,color:'#718096',marginTop:2}}>Sample data create a dynamic QR to see your real analytics.</div>
              </div>
              <div style={{display:'flex',gap:8,alignItems:'center'}}>
                <a href="/dashboard" style={{fontSize:11,fontWeight:600,color:'#0058c3',textDecoration:'none',background:'rgba(0,88,195,0.07)',padding:'3px 8px',borderRadius:2,border:'1px solid rgba(0,88,195,0.2)'}}>My Dashboard</a>
                <div style={{display:'inline-flex',alignItems:'center',gap:5,background:'#f1f4f6',border:'1px solid rgba(74,85,104,0.15)',borderRadius:2,padding:'3px 8px',fontSize:10,fontWeight:700,color:'#718096'}}>
                  <div style={{width:6,height:6,borderRadius:'50%',background:'#22c55e'}} />LIVE
                </div>
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'1fr 1fr 1fr',gap:10}}>
              <div style={{background:'#f1f4f6',borderRadius:8,padding:14}}>
                <div style={{fontSize:10,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:'#718096',marginBottom:10}}>Scans by Country</div>
                {[['United States','42%',42],['Germany','28%',28],['Japan','15%',15],['Brazil','9%',9]].map(([c,p,w])=>(
                  <div key={String(c)}>
                    <div style={{display:'flex',justifyContent:'space-between',fontSize:12,marginBottom:3}}><span style={{fontWeight:500}}>{c}</span><span style={{fontWeight:600,color:'#4a5568'}}>{p}</span></div>
                    <div style={{height:3,background:'#e5e9eb',borderRadius:2,marginBottom:6}}><div style={{height:'100%',width:w+'%',background:'linear-gradient(135deg,#0058c3,#0070f3)',borderRadius:2}} /></div>
                  </div>
                ))}
              </div>
              <div style={{background:'#f1f4f6',borderRadius:8,padding:14,display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{fontSize:10,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:'#718096',marginBottom:10,alignSelf:'flex-start'}}>Device Distribution</div>
                <svg viewBox="0 0 90 90" width="90" height="90">
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#e5e9eb" strokeWidth="12"/>
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#0070f3" strokeWidth="12" strokeDasharray="126 75" strokeDashoffset="-20" strokeLinecap="round"/>
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#b5d4f4" strokeWidth="12" strokeDasharray="75 126" strokeDashoffset="-146" strokeLinecap="round"/>
                  <text x="45" y="41" textAnchor="middle" fontSize="14" fontWeight="700" fill="#181c1e">88%</text>
                  <text x="45" y="54" textAnchor="middle" fontSize="9" fill="#718096">Mobile</text>
                </svg>
                <div style={{display:'flex',gap:10,fontSize:11,marginTop:8,flexWrap:'wrap',justifyContent:'center'}}>
                  <span style={{display:'flex',alignItems:'center',gap:4,color:'#4a5568'}}><span style={{width:7,height:7,borderRadius:'50%',background:'#0070f3',display:'inline-block'}} />Mobile</span>
                  <span style={{display:'flex',alignItems:'center',gap:4,color:'#4a5568'}}><span style={{width:7,height:7,borderRadius:'50%',background:'#b5d4f4',display:'inline-block'}} />Desktop</span>
                </div>
              </div>
              <div style={{background:'#f1f4f6',borderRadius:8,padding:14}}>
                <div style={{fontSize:10,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:'#718096',marginBottom:10}}>Scan Activity 24h</div>
                <div style={{height:80,display:'flex',alignItems:'flex-end',gap:2}}>
                  {[12,8,6,9,14,22,35,48,52,58,62,55,49,54,60,65,70,58,45,38,30,25,20,15].map((v,i)=>(
                    <div key={i} style={{flex:1,height:(v/70*100)+'%',background:v>=62?'#0058c3':v>=45?'rgba(0,88,195,0.4)':'#e5e9eb',borderRadius:'2px 2px 0 0'}} />
                  ))}
                </div>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:9,color:'#718096',marginTop:3}}>
                  <span>00:00</span><span>12:00</span><span>23:59</span>
                </div>
              </div>
            </div>
          </div>
        </main>
        {!isMobile && <aside style={{paddingLeft:12}}><PreviewPanel /></aside>}
      </div>
      <Footer />
    </div>
  )
}
