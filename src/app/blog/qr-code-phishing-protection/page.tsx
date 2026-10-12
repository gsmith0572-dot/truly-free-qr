import AuthorBox from "@/components/blog/AuthorBox";
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "QR Code Phishing (Quishing): How It Works and How to Protect Users 2026",
  description: "APWG counted 716,306 malicious QR codes in Q3 2025 alone. How quishing works, where it happens, and what a destination check can and cannot catch.",
  alternates: { canonical: "https://trulyfreeqr.com/blog/qr-code-phishing-protection" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "QR Code Phishing (Quishing): What It Is, How It Works, and How to Protect Users",
  datePublished: "2026-04-01",
  dateModified: "2026-10-12",
  author: { "@type": "Person", name: "George Smith", url: "https://www.linkedin.com/in/george-smith-832113217/" },
  publisher: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is QR code phishing (quishing)?",
      acceptedAnswer: { "@type": "Answer", text: "Quishing is a cyberattack that uses malicious QR codes to redirect victims to fraudulent websites designed to steal credentials, install malware, or capture payment information. It exploits the fact that users cannot preview a QR code destination before scanning." },
    },
    {
      "@type": "Question",
      name: "How much have QR phishing attacks increased?",
      acceptedAnswer: { "@type": "Answer", text: "The Anti-Phishing Working Group's Q3 2025 report counts 716,306 unique malicious QR codes detected by Mimecast in that quarter, 13% more than the 635,672 in Q2, and more than 3 million over the 12 months from Q2 2024 through Q3 2025. Kaspersky separately reported blocked phishing emails with malicious QR codes rising from 46,969 in August 2025 to 249,723 in November 2025." },
    },
    {
      "@type": "Question",
      name: "How does Safe-Scan protect users from QR phishing?",
      acceptedAnswer: { "@type": "Answer", text: "Safe-Scan is the link check built into Truly Free QR. When you create or edit a dynamic code it only accepts https links, rejects URL shorteners and high-risk address patterns, and asks Google Safe Browsing about the address. Each code also has a Safe-Scan page that shows the destination and the results. The check runs at creation and edit time, not on every scan." },
    },
    {
      "@type": "Question",
      name: "Where do quishing attacks most commonly occur?",
      acceptedAnswer: { "@type": "Answer", text: "Quishing attacks most commonly occur in physical environments where QR codes are expected: restaurants, hotel lobbies, parking payment kiosks, and public transit stations. Attackers place fake QR codes over legitimate ones or replace signage entirely." },
    },
  ],
}

export default function ArticlePhishing() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f7fafc", minHeight: "100vh", color: "#181c1e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: "linear-gradient(160deg,#1a0a2e 0%,#2d1b4e 55%,#1a0a2e 100%)", color: "#fff", padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 2, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c4b5fd", marginBottom: 20 }}>SECURITY</div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 18px" }}>QR Code Phishing (Quishing): What It Is, How It Works, and How to Protect Users</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 24px" }}>Malicious QR codes keep growing: APWG counted 716,306 in the third quarter of 2025 alone. Attackers deploy fraudulent codes in restaurants, hotels, parking lots, and public signage. This is the technical breakdown.</p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>Updated October 2026 · 6 min read</div>
        </div>
      </div>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 64px" }}>
        <div style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.05),rgba(124,58,237,0.02))", border: "1px solid rgba(124,58,237,0.14)", borderRadius: 8, padding: "24px 22px", marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7c3aed", marginBottom: 16 }}>KEY STATISTICS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 16 }}>
            {[{ stat: "716,306", label: "Malicious QR codes Mimecast detected in Q3 2025 (APWG)" }, { stat: "+13%", label: "Growth over Q2 2025 (635,672)" }, { stat: "5x", label: "Kaspersky: blocked emails with malicious QR links, Aug to Nov 2025" }, { stat: "3M+", label: "Unique malicious QR codes, Q2 2024 to Q3 2025" }].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#7c3aed", letterSpacing: "-0.03em" }}>{s.stat}</div>
                <div style={{ fontSize: 12, color: "#4a5568", lineHeight: 1.4, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(74,85,104,0.1)" }}><Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: "50%", objectFit: "cover" }} /><div><span style={{ fontSize: "14px", fontWeight: 600, color: "#181c1e", letterSpacing: "-0.01em" }}>George Smith</span><span style={{ fontSize: "13px", color: "#718096", letterSpacing: "-0.01em" }}> — Founder, Klickify Agency</span></div></div>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>What Is QR Phishing (Quishing)?</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>Quishing is a cyberattack that uses malicious QR codes to redirect victims to fraudulent websites designed to <a href="https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information" target="_blank" rel="noopener noreferrer">steal credentials, install malware, or capture payment information</a>. It exploits a fundamental property of QR code scanning: users cannot read the destination URL before scanning. In a traditional phishing email, a trained user can hover over a link to preview the destination. With a QR code, no preview is possible in the default scanning flow.</p>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: 0 }}>The numbers keep climbing. The <a href="https://docs.apwg.org/reports/apwg_trends_report_q3_2025.pdf" target="_blank" rel="noopener noreferrer">APWG Phishing Activity Trends Report for Q3 2025</a> counts 716,306 unique malicious QR codes detected by Mimecast in that quarter, up 13 percent from 635,672 in Q2, and more than 3 million over the 12 months from Q2 2024 through Q3 2025. <a href="https://me-en.kaspersky.com/about/press-releases/kaspersky-detected-a-fivefold-surge-in-qr-code-phishing-attacks-in-the-second-half-of-2025" target="_blank" rel="noopener noreferrer">Kaspersky</a> reported blocked phishing emails with malicious QR codes rising from 46,969 in August 2025 to 249,723 in November.</p>
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>Four Quishing Attack Vectors</h2>
          {[
            { n: "01", t: "Physical overlay attacks", b: "The attacker prints a fraudulent QR code sticker and places it over a legitimate code in a physical environment such as a restaurant menu, hotel check-in code, or parking payment terminal. The legitimate code underneath is obscured. Users scan the overlay and are redirected to a credential harvesting page that mimics the expected destination. Physical overlay attacks can persist for days before staff notice." },
            { n: "02", t: "Malicious QR in email and documents", b: "Email security filters detect malicious URLs in hyperlinks and HTML. Embedding a malicious URL in a QR code image bypasses most text-based link scanners because the URL is encoded in an image rather than present as text. Attackers use QR codes in phishing emails that claim to require scanning to verify identity or access a document." },
            { n: "03", t: "Counterfeit codes on payment terminals", b: "Payment terminals and parking kiosks increasingly support QR code payment. Attackers affix fraudulent QR codes over legitimate payment terminal codes, redirecting payment flows to fake collection pages. The victim believes they are paying for parking or a service while providing payment credentials to an attacker." },
            { n: "04", t: "Compromised dynamic QR destinations", b: "If an attacker gains access to a dynamic QR generator dashboard, they can change the destination URL of an existing QR code to a malicious site without touching the physical code. All printed instances immediately redirect to the attacker's destination. This vector is especially dangerous for organizations using shared credentials on QR generator platforms. The APWG report also notes that criminals use QR generators too, and that destination editing, scan tracking and free tiers can all be turned against defenders. That is why Safe-Scan checks a destination when a code is created and again when it is edited, and refuses an edit that fails the check." },
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
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>How Safe-Scan Works, and Where It Stops</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>Safe-Scan runs when you create or edit a dynamic code. It only accepts https destinations, rejects well-known URL shorteners (their final destination cannot be verified) and high-risk address patterns, and asks Google Safe Browsing whether the address is listed for malware or social engineering. A destination that fails is refused, and an edit that fails leaves the old destination in place. Every dynamic code also has a Safe-Scan page that shows the full destination URL, the domain, and the results of the checks.</p>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: 0 }}>Here is the limit, stated plainly: the redirect itself is immediate. A person who scans your printed code is sent to the destination without a preview step, and the check is not repeated on every scan. Safe-Scan will not catch a destination page that is compromised after you created the code, and it cannot stop someone from placing a different sticker over your printed code. For those cases the defenses are physical: tamper-evident displays, regular spot checks, and the expected domain printed next to the code.</p>
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>What Businesses Can Do to Protect Users</h2>
          {[
            { t: "Use tamper-evident QR code displays", b: "Laminated or encased QR codes are more difficult to overlay than paper printouts. Custom-shaped or branded QR displays make unauthorized replacements visually obvious." },
            { t: "Inspect codes regularly in high-risk environments", b: "Restaurant and hotel staff should periodically scan their own QR codes to verify they redirect to the expected destination. A 30-second spot check during setup identifies overlay attacks before guests encounter them." },
            { t: "Include the destination URL in text near the QR code", b: "Print the expected destination domain next to the QR code. Users who see a different domain after scanning have a reference point for suspicion." },
            { t: "Monitor dynamic QR dashboards for anomalies", b: "Dynamic QR dashboards show scan volume by time and location. An unusual spike in scans from an unexpected geographic area may indicate a fraudulent copy of your code has been deployed elsewhere." },
            { t: "Use a generator that checks destinations", b: "Look for one that checks links when you create or edit a code and says plainly what it does not check. Safe-Scan does this on every dynamic code on Truly Free QR at no cost." },
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
          <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Generate QR codes with link checks built in</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>Safe-Scan checks every dynamic code when you create or edit it. No premium plan. No account needed.</p>
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
      
      <AuthorBox />
      </footer>
    </div>
  )
}
