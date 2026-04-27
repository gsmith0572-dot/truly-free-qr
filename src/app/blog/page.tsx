import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "QR Code Resources & Guides — Truly Free QR Blog",
  description: "Expert guides on QR code technology, phishing protection, dynamic vs static codes, and why free QR generators deactivate your codes after 14 days.",
  alternates: { canonical: "https://trulyfreeqr.com/blog" },
}

const POSTS = [
  { slug: "qr-code-stopped-working", label: "INDUSTRY PROBLEM", labelColor: "#dc2626", title: "Why Your QR Code Stopped Working (And How to Fix It Permanently)", excerpt: "Millions of businesses have printed QR codes on menus, packaging, and signage only to find them broken weeks later. This is not a technical glitch. It is a deliberate business model called the QR bait-and-switch.", readTime: "8 min read", date: "April 2026" },
  { slug: "dynamic-vs-static-qr-codes", label: "TECHNICAL GUIDE", labelColor: "#0058c3", title: "Dynamic vs Static QR Codes: The Complete Technical Guide for 2026", excerpt: "Static and dynamic QR codes look identical when printed. They behave completely differently in the real world. This guide explains the technical architecture behind both types and why dynamic does not have to cost 180 per year.", readTime: "11 min read", date: "April 2026" },
  { slug: "qr-code-phishing-protection", label: "SECURITY", labelColor: "#7c3aed", title: "QR Code Phishing (Quishing): What It Is, How It Works, and How to Protect Users", excerpt: "QR phishing attacks grew 400% between 2023 and 2025. This is a complete technical breakdown of quishing attack vectors and why Safe-Scan destination preview is the correct architectural defense.", readTime: "9 min read", date: "April 2026" },
]

export default function BlogIndex() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f7fafc", minHeight: "100vh", color: "#181c1e" }}>
      <nav style={{ background: "#fff", borderBottom: "1px solid rgba(74,85,104,0.12)", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56, position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.02em", color: "#181c1e", textDecoration: "none" }}>Truly Free <span style={{ color: "#0058c3" }}>QR</span></Link>
        <Link href="/" style={{ padding: "7px 18px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Free QR Generator</Link>
      </nav>
      <div style={{ background: "linear-gradient(160deg,#08122a 0%,#0c1e45 55%,#08122a 100%)", color: "#fff", padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 16px" }}>QR Code Guides &amp; Industry Analysis</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: 0 }}>Technical breakdowns of QR code architecture, security vulnerabilities, and the predatory subscription models that have left millions of businesses with broken codes.</p>
        </div>
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 20px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <article style={{ background: "#fff", borderRadius: 8, padding: "32px 28px", border: "1px solid rgba(74,85,104,0.09)", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: post.labelColor, padding: "3px 10px", borderRadius: 2, background: "rgba(0,0,0,0.05)" }}>{post.label}</span>
                  <span style={{ fontSize: 12, color: "#718096" }}>{post.date} · {post.readTime}</span>
                </div>
                <h2 style={{ fontSize: "clamp(17px,2.5vw,22px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 12px", color: "#181c1e", lineHeight: 1.25 }}>{post.title}</h2>
                <p style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.7, margin: "0 0 16px" }}>{post.excerpt}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#0058c3" }}>Read article</span>
              </article>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 48, background: "linear-gradient(160deg,#08122a,#0c1e45)", borderRadius: 12, padding: "40px 28px", textAlign: "center", color: "#fff" }}>
          <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Generate a permanent QR code now</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>No account. No trial. No expiration.</p>
          <Link href="/" style={{ padding: "13px 32px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Create Free QR Code</Link>
        </div>
      </div>
      <footer style={{ background: "#fff", borderTop: "1px solid rgba(74,85,104,0.09)", padding: "24px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12, color: "#718096" }}>
          <span>2026 Truly Free QR</span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/" style={{ color: "#718096", textDecoration: "none" }}>Generator</Link>
            <Link href="/blog" style={{ color: "#718096", textDecoration: "none" }}>Blog</Link>
            <Link href="/about" style={{ color: "#718096", textDecoration: "none" }}>About</Link>
            <Link href="/privacy-policy" style={{ color: "#718096", textDecoration: "none" }}>Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
