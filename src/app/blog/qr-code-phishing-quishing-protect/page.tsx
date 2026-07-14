import AuthorBox from "@/components/blog/AuthorBox";
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "What Is QR Code Phishing (Quishing)?",
  description: "QR code phishing – called \"quishing\" – is exploding. Attacks increased over 400% since 2023. Here's what quishing is, why it's dangerous, and how to protect yourself.",
  alternates: { canonical: "https://trulyfreeqr.com/blog/qr-code-phishing-quishing-protect" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is QR Code Phishing (Quishing)?",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: { "@type": "Person", name: "George Smith", url: "https://www.linkedin.com/in/george-smith-832113217/" },
  publisher: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can Safe-Scan prevent all quishing attacks?", acceptedAnswer: { "@type": "Answer", text: "No. Safe-Scan only protects scans of QR codes generated on Truly Free QR. If you scan a QR code from another source, Safe-Scan doesn't apply. Also, Safe-Scan relies on Google Safe Browsing, which doesn't catch brand-new phishing sites immediately. There's always a delay. But it catches the vast majority of known malicious links." } },
    { "@type": "Question", name: "What happens if someone places a malicious sticker over my Truly Free QR code?", acceptedAnswer: { "@type": "Answer", text: "The sticker covers your code, so scanners see the attacker's code, not yours. Safe-Scan would check the attacker's destination. If it's known to be malicious, the scanner would see a warning. This might prevent them from falling for the scam. It also alerts you that something is wrong – you'll see scans to your code drop, and users might report the warning." } },
    { "@type": "Question", name: "Does Safe-Scan slow down the redirect?", acceptedAnswer: { "@type": "Answer", text: "Yes, by about 50-100 milliseconds. That's less than the blink of an eye. Most users won't notice. The security benefit far outweighs the tiny delay." } },
    { "@type": "Question", name: "Can I disable Safe-Scan for my QR codes?", acceptedAnswer: { "@type": "Answer", text: "No. I believe it's essential. Even if you're confident your destination is safe, your website could be hacked in the future. Safe-Scan protects your customers in that scenario. I won't let you turn it off." } },
    { "@type": "Question", name: "How does Truly Free QR's security compare to Bitly's?", acceptedAnswer: { "@type": "Answer", text: "Bitly does not proactively check destinations for malware. They rely on users reporting bad links. If a hacker compromises your Bitly QR code destination, Bitly will keep redirecting until someone reports it. Safe-Scan checks every scan. For protecting your customers, Safe-Scan is superior." } },
    { "@type": "Question", name: "What should I do if I see a Safe-Scan warning on a QR code I created?", acceptedAnswer: { "@type": "Answer", text: "Immediately check your destination URL. It may have been hacked or flagged incorrectly. Go to Google Safe Browsing's transparency report (transparencyreport.google.com) and enter your URL. If it's flagged, fix your website. If it's a false positive, request a review. The warning will clear once Google re-scans." } },
  ],
}

const SAFESCAN_STEPS = [
  { t: "1. The scan hits my server", d: "The QR code points to trulyfreeqr.com/abc123. My server receives the request." },
  { t: "2. Before redirecting, Safe-Scan checks the destination", d: "I send the destination URL to Google Safe Browsing's API. Google maintains a massive database of known phishing and malware sites. The check takes about 50 milliseconds." },
  { t: "3. If the URL is safe, the redirect proceeds normally", d: "The user goes to your intended destination. They never see a warning." },
  { t: "4. If the URL is unsafe, the user sees a warning page", d: "The page says: \"Warning: This link has been reported for phishing or malware. Proceed at your own risk.\" The user can choose to continue or go back. This gives them a chance to reconsider." },
  { t: "5. You, as the QR code owner, are not penalized", d: "If your legitimate website gets hacked and starts serving malware, Safe-Scan will warn users. You'll want to know that. I don't automatically block your code – I just warn. You can fix your website, and the warning will clear after Google re-scans." },
]

const PROTECT_STEPS = [
  { t: "1. Inspect the QR code physically before scanning", d: "Look for stickers over legitimate codes. Does the code look like it's part of the original sign, or does it appear stuck on? Attackers often place stickers on parking meters, menus, and EV chargers. If the code looks suspicious, don't scan it." },
  { t: "2. Check the URL preview", d: "Before your phone opens a link, most QR scanners show a preview of the URL. Glance at it. Does it match the expected domain? If the parking meter QR code points to \"parking-pay.com\" instead of \"officialcityparking.gov\", that's a red flag. Truly Free QR shows a preview before redirecting (coming soon)." },
  { t: "3. Never scan a QR code from an unsolicited email", d: "If you get an email saying \"Scan this code to verify your account,\" it's almost certainly a scam. Legitimate companies don't send QR codes in email for account verification. Delete the email. If you're worried, go directly to the company's website by typing the URL manually." },
  { t: "4. Use a QR scanner with security features", d: "Some phone cameras now warn about suspicious links. Google Lens on Android has this. iPhone's camera does not (yet). Truly Free QR's Safe-Scan works for codes you create, but for scanning codes you encounter, use a dedicated app like Kaspersky QR Scanner or Sophos Intercept X." },
  { t: "5. If you run a business, use Safe-Scan for your QR codes", d: "When you create QR codes for your restaurant, parking lot, or event, use Truly Free QR. Safe-Scan will protect your customers if someone tampers with your codes. It also protects you if your own website gets hacked. Most QR generators don't offer this." },
  { t: "6. Report suspicious QR codes", d: "If you find a QR code that looks like a phishing attempt, report it to the business that owns the location. For parking meters, report to the city. For restaurant menus, tell the manager. You might save someone from fraud." },
]

const pStyle = { fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" } as const
const h2Style = { fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" } as const

export default function ArticleQRPhishingQuishing() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f7fafc", minHeight: "100vh", color: "#181c1e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: "linear-gradient(160deg,#08122a 0%,#0c1e45 55%,#08122a 100%)", color: "#fff", padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(22,163,74,0.15)", border: "1px solid rgba(22,163,74,0.3)", borderRadius: 2, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade80", marginBottom: 20 }}>SECURITY</div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 18px" }}>What Is QR Code Phishing (Quishing)?</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 24px" }}>QR code phishing – called &quot;quishing&quot; – is exploding. Attacks increased over 400% since 2023, according to cybersecurity firms.</p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>June 2026 · 12 min read · Truly Free QR Editorial Team</div>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 64px" }}>

        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(74,85,104,0.1)" }}><img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: "50%", objectFit: "cover" }} /><div><span style={{ fontSize: "14px", fontWeight: 600, color: "#181c1e", letterSpacing: "-0.01em" }}>George Smith</span><span style={{ fontSize: "13px", color: "#718096", letterSpacing: "-0.01em" }}> — Founder, Klickify Agency</span></div></div>
          <p style={pStyle}>You see a QR code on a parking meter. It promises &quot;easy payment via app.&quot; You scan it. It takes you to a website that looks like the official parking app. You enter your credit card info. Two days later, you see $500 in fraudulent charges. You&apos;ve been quished.</p>
          <p style={pStyle}>QR code phishing – called &quot;quishing&quot; – is exploding. Attacks increased over 400% since 2023, according to cybersecurity firms. Attackers print QR codes on stickers and place them over legitimate codes. Or they send QR codes via email, pretending to be from your bank or IT department. When you scan, you go to a fake website designed to steal your passwords or credit card numbers.</p>
          <p style={{ ...pStyle, margin: 0 }}>Most QR code generators don&apos;t protect against this. They just create the code and forget about it. Truly Free QR includes Safe-Scan, an anti-phishing layer that checks every destination against Google Safe Browsing before redirecting. If a link is known for malware or phishing, the scanner sees a warning. Here&apos;s what quishing is, why it&apos;s dangerous, and how to protect yourself.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>How Quishing Works (And Why It&apos;s So Effective)</h2>
          <p style={pStyle}>Let me explain the mechanics. A QR code is just a pattern that encodes text – usually a URL. The attacker creates a QR code that points to a phishing website. That website looks identical to a real one – your bank, your email provider, a payment portal. The attacker prints stickers of that QR code and <a href="https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information" target="_blank" rel="noopener noreferrer">places them over legitimate codes</a> on parking meters, restaurant menus, or EV charging stations.</p>
          <p style={pStyle}>When you scan, you see the fake website. It looks real. You enter your credentials. The attacker captures them. They then use those credentials to access your real accounts. Because the QR code itself doesn&apos;t look suspicious – it&apos;s just black and white squares – most people don&apos;t think twice. They assume the code is legitimate because it&apos;s physically present.</p>
          <p style={pStyle}>Email quishing is even more common. You receive an email that appears to be from Microsoft or Google: &quot;Your account has been compromised. Scan this QR code to verify your identity.&quot; The email looks real. The QR code points to a fake login page. You scan, you log in, you give away your password. Security experts warn that quishing bypasses traditional email filters because the malicious content is in an image (the QR code), not in the text.</p>
          <p style={{ ...pStyle, margin: 0 }}>The numbers are staggering. The <a href="https://www.ic3.gov/PSA/2022/PSA220118" target="_blank" rel="noopener noreferrer">FBI&apos;s Internet Crime Complaint Center</a> reported a 400% increase in quishing attacks from 2023 to 2025. Attackers love QR codes because users are trained to scan them without thinking. Restaurants, parking meters, and event tickets are prime targets.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>How Safe-Scan Protects You (And Your Customers)</h2>
          <p style={pStyle}>Truly Free QR includes Safe-Scan on every dynamic QR code. Here&apos;s what happens when someone scans your code:</p>
          {SAFESCAN_STEPS.map((s) => (
            <div key={s.t} style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", padding: "18px 22px", marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
          <p style={{ ...pStyle, margin: "16px 0 0" }}>Safe-Scan protects your customers even if your own site is compromised. It also protects you if someone places a malicious sticker over your QR code. The sticker&apos;s destination would be checked, and if it&apos;s malicious, scanners would see a warning. That warning might save your reputation.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Step-by-Step: How to Protect Yourself from Quishing</h2>
          <p style={pStyle}>Here&apos;s what you can do to avoid falling victim to QR code phishing.</p>
          {PROTECT_STEPS.map((s) => (
            <div key={s.t} style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", padding: "18px 22px", marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Why Truly Free QR Includes Safe-Scan (No Extra Cost)</h2>
          <p style={pStyle}>I added Safe-Scan because I saw the quishing trend growing. Most QR code generators don&apos;t check destinations. They just redirect blindly. That&apos;s dangerous. If a hacker compromises your website or places a malicious sticker over your code, your customers could get scammed. And they&apos;ll blame you.</p>
          <p style={pStyle}>Safe-Scan uses Google Safe Browsing, the same technology that protects Chrome and Safari. It&apos;s free for me to use up to a certain volume. My ad revenue covers it. I don&apos;t charge extra. Every dynamic QR code on Truly Free QR gets Safe-Scan protection automatically. There&apos;s no toggle to turn it off – it&apos;s always on.</p>
          <p style={{ ...pStyle, margin: 0 }}>This makes your QR codes safer than those from Bitly, QR Code Generator, or Beaconstac. None of those providers check destinations for malware before redirecting. They rely on users reporting bad links after the fact. Safe-Scan is proactive. It checks every single scan. That&apos;s a feature I&apos;m proud of.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", padding: "18px 22px", marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 8 }}>{item.name}</div>
              <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <p style={{ ...pStyle, margin: 0 }}>Stay safe. Use Truly Free QR for your dynamic codes. Safe-Scan protects you and your customers from the rising tide of quishing.</p>
        </section>

        <div style={{ background: "linear-gradient(160deg,#08122a,#0c1e45)", borderRadius: 12, padding: "40px 28px", textAlign: "center", color: "#fff", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>The only truly free QR code generator</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 8px" }}>Unlimited dynamic QR codes. No account. No expiration. No subscription. Ever.</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "0 0 24px" }}>Monetized by advertising, not by locking your printed materials behind a paywall.</p>
          <Link href="/" style={{ padding: "13px 32px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Create Free QR Code Now</Link>
        </div>

        <div style={{ borderTop: "1px solid rgba(74,85,104,0.09)", paddingTop: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#718096", marginBottom: 16 }}>RELATED ARTICLES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/blog/qr-code-phishing-protection" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>QR Code Phishing Protection: The Complete Safety Guide</Link>
            <Link href="/blog/free-dynamic-qr-code-generator-no-expiration" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Free Dynamic QR Code Generator (Codes Never Expire)</Link>
            <Link href="/blog/qr-code-statistics" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>QR Code Statistics 2026: 50+ Facts, Trends &amp; Market Data</Link>
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
