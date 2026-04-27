import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "QR Code Phishing (Quishing): How It Works and How to Protect Users 2026",
  description: "QR phishing attacks grew 400% between 2023 and 2025. This is a complete technical breakdown of quishing attack vectors, how attackers deploy fraudulent QR codes in physical environments, and why Safe-Scan destination preview is the correct architectural defense.",
  alternates: { canonical: "https://trulyfreeqr.com/blog/qr-code-phishing-protection" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "QR Code Phishing (Quishing): What It Is, How It Works, and How to Protect Users",
  datePublished: "2026-04-01",
  dateModified: "2026-04-27",
  author: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
  publisher: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
}

export default function ArticlePhishing() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f7fafc", minHeight: "100vh", color: "#181c1e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <nav style={{ background: "#fff", borderBottom: "1px solid rgba(74,85,104,0.12)", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56, position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 14, color: "#181c1e", textDecoration: "none" }}>Truly Free <span style={{ color: "#0058c3" }}>QR</span></Link>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/blog" style={{ fontSize: 13, color: "#718096", textDecoration: "none" }}>Blog</Link>
          <Link href="/" style={{ padding: "7px 18px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Free QR Generator</Link>
        </div>
      </nav>
      <div style={{ background: "linear-gradient(160deg,#1a0a2e 0%,#2d1b4e 55%,#1a0a2e 100%)", color: "#fff", padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 2, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c4b5fd", marginBottom: 20 }}>SECURITY</div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 18px" }}>QR Code Phishing (Quishing): What It Is, How It Works, and How to Protect Users</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 24px" }}>QR phishing attacks grew 400% between 2023 and 2025. Attackers deploy fraudulent codes in restaurants, hotels, parking lots, and public signage. This is the complete technical breakdown.</p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>April 2026 · 9 min read · Truly Free QR Security Team</div>
        </div>
      </div>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 64px" }}>
        <div style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.05),rgba(124,58,237,0.02))", border: "1px solid rgba(124,58,237,0.14)", borderRadius: 8, padding: "24px 22px", marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7c3aed", marginBottom: 16 }}>KEY STATISTICS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 16 }}>
            {[{ stat: "400%", label: "Increase in quishing attacks 2023 to 2025" }, { stat: "89.3%", label: "Of attacks target credential theft" }, { stat: "#1", label: "Attack vector in hospitality environments" }, { stat: "0ms", label: "Warning before redirect in standard QR scanning" }].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#7c3aed", letterSpacing: "-0.03em" }}>{s.stat}</div>
                <div style={{ fontSize: 12, color: "#4a5568", lineHeight: 1.4, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>What Is QR Phishing (Quishing)?</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>Quishing is a cyberattack that uses malicious QR codes to redirect victims to fraudulent websites designed to steal credentials, install malware, or capture payment information. It exploits a fundamental property of QR code scanning: users cannot read the destination URL before scanning. In a traditional phishing email, a trained user can hover over a link to preview the destination. With a QR code, no preview is possible in the default scanning flow.</p>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: 0 }}>The Anti-Phishing Working Group documented a 400% increase in quishing incidents between 2023 and 2025, with 89.3% of attacks targeting credential theft — login pages for banking, email, and corporate systems that are visually indistinguishable from the legitimate services they impersonate.</p>
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>Four Quishing Attack Vectors</h2>
          {[
            { n: "01", t: "Physical overlay attacks", b: "The attacker prints a fraudulent QR code sticker and places it over a legitimate code in a physical environment such as a restaurant menu, hotel check-in code, or parking payment terminal. The legitimate code underneath is obscured. Users scan the overlay and are redirected to a credential harvesting page that mimics the expected destination. Physical overlay attacks can persist for days before staff notice." },
            { n: "02", t: "Malicious QR in email and documents", b: "Email security filters detect malicious URLs in hyperlinks and HTML. Embedding a malicious URL in a QR code image bypasses most text-based link scanners because the URL is encoded in an image rather than present as text. Attackers use QR codes in phishing emails that claim to require scanning to verify identity or access a document." },
            { n: "03", t: "Counterfeit codes on payment terminals", b: "Payment terminals and parking kiosks increasingly support QR code payment. Attackers affix fraudulent QR codes over legitimate payment terminal codes, redirecting payment flows to fake collection pages. The victim believes they are paying for parking or a service while providing payment credentials to an attacker." },
            { n: "04", t: "Compromised dynamic QR destinations", b: "If an attacker gains access to a dynamic QR generator dashboard, they can change the destination URL of an existing QR code to a malicious site without touching the physical code. All printed instances immediately redirect to the attacker's destination. This vector is especially dangerous for organizations using shared credentials on QR generator platforms." },
          ].map((v) => (
            <div key={v.n} style={{ background: "#fff", borderRadius: 8, padding: "24px 22px", border: "1px solid rgba(74,85,104,0.09)", display: "flex", gap: 20, marginBottom: 14 }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: "rgba(124,58,237,0.2)", flexShrink: 0, minWidth: 36 }}>{v.n}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 8 }}>{v.t}</div>
                <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{v.b}</div>
              </div>
            </div>
          ))}
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>High-Risk Environments</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
            {[
              { icon: "🍽️", env: "Restaurants and cafes", risk: "Table QR codes for menus and ordering are prime overlay targets. High scan volume and unmonitored tables." },
              { icon: "🏨", env: "Hotels", risk: "Check-in QR codes, WiFi access codes, and restaurant ordering codes throughout the property." },
              { icon: "🅿️", env: "Parking facilities", risk: "Payment terminal QR codes at meters and kiosks with minimal supervision." },
              { icon: "🏥", env: "Healthcare facilities", risk: "Patient check-in codes and visitor WiFi access codes in high-trust environments." },
              { icon: "🎪", env: "Events and conferences", risk: "Registration QR codes and sponsor materials throughout large venues." },
              { icon: "🚆", env: "Public transit", risk: "Ticketing QR codes and payment terminals with high throughput and low inspection." },
            ].map((e, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "18px", border: "1px solid rgba(74,85,104,0.09)" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{e.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#181c1e", marginBottom: 6 }}>{e.env}</div>
                <div style={{ fontSize: 12, color: "#718096", lineHeight: 1.55 }}>{e.risk}</div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>The Safe-Scan Architecture: Destination Preview Before Redirect</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>The fundamental vulnerability in standard QR scanning is the absence of a preview step. Safe-Scan intercepts the redirect at the server level. When a user scans a Truly Free QR dynamic code, the initial request reaches the redirect server which returns a preview page instead of an immediate redirect. The preview displays the full destination URL, the domain in large readable text, and a clear confirmation button to proceed. The user can verify the destination before any redirect occurs.</p>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: 0 }}>This informed-consent step eliminates the primary quishing attack vector. A victim who scanned a fraudulent overlay code sees the malicious domain on the preview page before being redirected. For legitimate QR codes the preview adds approximately two seconds — comparable to a browser download confirmation dialog. The redirect engine behind the preview still resolves in under 5ms; the additional time is the user reading and confirming the destination.</p>
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>What Businesses Can Do to Protect Users</h2>
          {[
            { t: "Use tamper-evident QR code displays", b: "Laminated or encased QR codes are more difficult to overlay than paper printouts. Custom-shaped or branded QR displays make unauthorized replacements visually obvious." },
            { t: "Inspect codes regularly in high-risk environments", b: "Restaurant and hotel staff should periodically scan their own QR codes to verify they redirect to the expected destination. A 30-second spot check during setup identifies overlay attacks before guests encounter them." },
            { t: "Include the destination URL in text near the QR code", b: "Print the expected destination domain next to the QR code. Users who see a different domain after scanning have a reference point for suspicion." },
            { t: "Monitor dynamic QR dashboards for anomalies", b: "Dynamic QR dashboards show scan volume by time and location. An unusual spike in scans from an unexpected geographic area may indicate a fraudulent copy of your code has been deployed elsewhere." },
            { t: "Use generators with built-in phishing protection", b: "Most QR generators offer no security layer between the scan and the redirect. Safe-Scan preview is active on every dynamic QR on Truly Free QR at no cost. Enterprise-grade security should not require enterprise-grade pricing." },
          ].map((tip, i) => (
            <div key={i} style={{ display: "flex", gap: 18, marginBottom: 18 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#7c3aed", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 6 }}>{tip.t}</div>
                <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{tip.b}</div>
              </div>
            </div>
          ))}
        </section>
        <div style={{ background: "linear-gradient(160deg,#08122a,#0c1e45)", borderRadius: 12, padding: "40px 28px", textAlign: "center", color: "#fff", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Generate QR codes with phishing protection built in</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>Safe-Scan destination preview active on every dynamic QR. No premium plan. No account needed.</p>
          <Link href="/" style={{ padding: "13px 32px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Create Safe QR Code</Link>
        </div>
        <div style={{ borderTop: "1px solid rgba(74,85,104,0.09)", paddingTop: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#718096", marginBottom: 16 }}>RELATED ARTICLES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/blog/qr-code-stopped-working" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Why Your QR Code Stopped Working — The QR Bait-and-Switch Explained</Link>
            <Link href="/blog/dynamic-vs-static-qr-codes" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Dynamic vs Static QR Codes: The Complete Technical Guide for 2026</Link>
          </div>
        </div>
      </div>
      <footer style={{ background: "#fff", borderTop: "1px solid rgba(74,85,104,0.09)", padding: "24px 20px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12, color: "#718096" }}>
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
