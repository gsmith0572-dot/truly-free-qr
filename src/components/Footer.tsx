import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid rgba(74,85,104,0.15)', padding: '20px 24px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 8, flexWrap: 'wrap' }}>
        <Link href="/about" style={{ fontSize: 12, color: '#718096', textDecoration: 'none' }}>About Us</Link>
        <Link href="/contact" style={{ fontSize: 12, color: '#718096', textDecoration: 'none' }}>Contact Us</Link>
        <Link href="/privacy-policy" style={{ fontSize: 12, color: '#718096', textDecoration: 'none' }}>Privacy Policy</Link>
        <Link href="/terms-of-service" style={{ fontSize: 12, color: '#718096', textDecoration: 'none' }}>Terms of Service</Link>
        <a href="mailto:support@klickifyagency.com" style={{ fontSize: 12, color: '#718096', textDecoration: 'none' }}>Help Center</a>
        <a href="mailto:support@klickifyagency.com" style={{ fontSize: 12, color: '#718096', textDecoration: 'none' }}>Feedback</a>
        <a href="mailto:support@klickifyagency.com" style={{ fontSize: 12, color: '#718096', textDecoration: 'none' }}>API Docs</a>
      </div>
      <div style={{ fontSize: 11, color: '#718096' }}>
        © 2026 Truly Free QR · Built by <a href="https://klickifyagency.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0058c3', fontWeight: 600, textDecoration: 'none' }}>Klickify Agency</a>
      </div>
    </footer>
  )
}
