import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ background: '#ffffff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 24px', position: 'sticky', top: 0, zIndex: 200 }}>
      <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, gap: 16, flexWrap: 'wrap' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/logo.png" alt="Truly Free QR" style={{ height: 44, width: 'auto' }} />
        </Link>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ fontSize: 13, color: '#4a5568', textDecoration: 'none', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em', fontWeight: 500 }}>Home</Link>
          <Link href="/blog" style={{ fontSize: 13, color: '#4a5568', textDecoration: 'none', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em', fontWeight: 500 }}>Blog</Link>
          <Link href="/about" style={{ fontSize: 13, color: '#4a5568', textDecoration: 'none', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em', fontWeight: 500 }}>About Us</Link>
          <Link href="/contact" style={{ fontSize: 13, color: '#4a5568', textDecoration: 'none', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em', fontWeight: 500 }}>Contact</Link>
          <Link href="/" style={{ padding: '8px 18px', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: 'none', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>
            Free QR Generator
          </Link>
        </div>
      </nav>
    </header>
  );
}
