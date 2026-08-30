import AuthorBox from "@/components/blog/AuthorBox";
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "QR Code for Business Cards (Free Generator)",
  description: "Static QR codes on business cards are a mistake. Dynamic QR codes let you update the destination forever with no reprinting. Truly Free QR gives you dynamic QR codes for free.",
  alternates: { canonical: "https://trulyfreeqr.com/blog/qr-code-business-card-free" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "QR Code for Business Cards (Free Generator)",
  datePublished: "2026-06-10",
  dateModified: "2026-08-29",
  author: { "@type": "Person", name: "George Smith", url: "https://www.linkedin.com/in/george-smith-832113217/" },
  publisher: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I put a vCard (digital contact info) into a Truly Free QR code?", acceptedAnswer: { "@type": "Answer", text: "Yes and no. You can link to a hosted vCard file (like a .vcf file on your website). But I don't generate vCards directly yet. The easiest solution: use a free vCard hosting service or create a simple webpage with your contact info. Link your QR code to that webpage. If your contact info changes, update the webpage. No need to touch the QR code." } },
    { "@type": "Question", name: "What happens if I lose my edit link? Can I get a new one?", acceptedAnswer: { "@type": "Answer", text: "No. Because I don't require accounts, I have no way to verify that you own the QR code. The edit link is the only key. Treat it like a password. Save it in a secure place. If you lose it, the code still works, but you cannot change the destination. For business cards, that might be fine if you never need to update. But for maximum flexibility, save the link." } },
    { "@type": "Question", name: "Will my QR code work on glossy business card stock?", acceptedAnswer: { "@type": "Answer", text: "It depends. Glossy finishes can create glare that interferes with scanning. Test one card before printing a thousand. Hold it under different lighting: office fluorescents, direct sunlight, dim restaurant lighting. If it scans reliably, you're safe. If not, ask your printer for a matte finish or a slightly larger code. Size helps overcome glare." } },
    { "@type": "Question", name: "How does this compare to Bitly QR's $35/month plan for business cards?", acceptedAnswer: { "@type": "Answer", text: "Bitly charges $420 a year for dynamic QR codes with analytics. Truly Free QR gives you the same functionality for free. The only advantage of Bitly is their brand and their ecosystem (if you already use Bitly for all your links). For a freelancer or small business owner, paying $420 a year just for a business card QR code is insanity. Save that money for networking events or better card stock." } },
    { "@type": "Question", name: "Can I track how many people scan my business card QR code?", acceptedAnswer: { "@type": "Answer", text: "Yes, with dynamic codes. My analytics dashboard shows total scans, scans by day, device types (iPhone vs Android), and approximate city-level location. You'll know which networking events generated the most interest. This is invaluable for measuring ROI on your business cards. Static codes give you nothing." } },
    { "@type": "Question", name: "Is it safe to put my personal phone number in a QR code?", acceptedAnswer: { "@type": "Answer", text: "If you use a tel: link (e.g., tel:+1234567890), the QR code will open the phone dialer. Anyone with the code can call you. That's fine if you publish your number anyway. But be aware that QR codes can be photographed and shared. If you want privacy, link to a contact form or a LinkedIn profile instead of your direct number." } },
  ],
}

const STEPS = [
  { t: "1. Go to trulyfreeqr.com", d: "No account. No email. The generator is right there. I designed it for busy professionals who don't have time for signup forms." },
  { t: "2. Decide what your QR code should link to", d: "Best options for business cards: LinkedIn profile, portfolio website, Calendly booking link, WhatsApp contact link, or a vCard (digital business card). I recommend a page you control, like your own website's contact page. That way, you can update that page anytime without even touching the QR code settings." },
  { t: "3. Paste that link into the URL field", d: "Test it first. Open the link in incognito mode to make sure it works for people who aren't you. For LinkedIn, use your public profile URL (linkedin.com/in/yourname). For Calendly, use your booking link. For vCard, you'll need a service that hosts vCards – I can't generate them directly yet." },
  { t: "4. Select \"Dynamic QR Code\"", d: "This is critical. Dynamic means you can change the link later. If you use static, you're locking in that URL forever. Business cards are expensive to reprint. Choose dynamic." },
  { t: "5. Customize the design for your card", d: "Business cards are small – typically 2x3.5 inches. Your QR code should be at least 0.75 inches (2cm) on each side. Use dark colors (black, navy, dark green) on a white or light background. Add your logo in the center, but keep it small – under 20% of the code. Test the design on your phone before sending to the printer. Hold your phone at different angles, under different lighting." },
  { t: "6. Add a subtle call to action", d: "Below the QR code on your business card, add text: \"Scan for portfolio\" or \"View my work.\" Not everyone knows what QR codes do. A small instruction increases scan rates by 30–50% in my experience." },
  { t: "7. Download as SVG for professional printing", d: "SVG is vector format – scales perfectly. Send the SVG file to your printer. Ask them to print it at 300 DPI minimum. If they ask for a different format, PDF is also fine. Never send a low-res PNG – the code might become unreadable." },
  { t: "8. Save your edit link", d: "This is the most important step. After generating, you'll see a unique edit link. Bookmark it immediately. Paste it into a Google Doc. Email it to yourself. If you lose this link, you cannot change the destination later. Your code will still work with the original link, but you lose the flexibility that made dynamic worthwhile." },
]

const pStyle = { fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" } as const
const h2Style = { fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" } as const

export default function ArticleQRBusinessCardFree() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f7fafc", minHeight: "100vh", color: "#181c1e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", url: "https://trulyfreeqr.com/blog/qr-code-business-card-free", speakable: { "@type": "SpeakableSpecification", cssSelector: [".aeo-capsule", ".aeo-answer"] } }) }} />

      <div style={{ background: "linear-gradient(160deg,#08122a 0%,#0c1e45 55%,#08122a 100%)", color: "#fff", padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(22,163,74,0.15)", border: "1px solid rgba(22,163,74,0.3)", borderRadius: 2, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade80", marginBottom: 20 }}>BUSINESS CARDS</div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 18px" }}>QR Code for Business Cards (Free Generator)</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 24px" }}>You&apos;re a freelance graphic designer. You order 1,000 premium business cards. Six months later, you redesign your website. Your business cards now point to a 404 error.</p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>June 2026 · 12 min read · Truly Free QR Editorial Team</div>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 64px" }}>

        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(74,85,104,0.1)" }}><Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: "50%", objectFit: "cover" }} /><div><span style={{ fontSize: "14px", fontWeight: 600, color: "#181c1e", letterSpacing: "-0.01em" }}>George Smith</span><span style={{ fontSize: "13px", color: "#718096", letterSpacing: "-0.01em" }}> — Founder, Klickify Agency</span></div></div>
          <p style={pStyle}>You&apos;re a freelance graphic designer. You order 1,000 premium business cards. On the back, you print a QR code that links to your portfolio. Six months later, you redesign your website. The portfolio link changes. Your business cards now point to a 404 error. You have 950 cards left. To fix it, you need to either reorder cards ($150) or find a way to change the link without reprinting.</p>
          <p style={pStyle}>This happened to me. I printed 500 cards with a static QR code. Six months later, I changed my freelance portfolio URL. Those cards became trash. I learned the hard way: static QR codes on business cards are a mistake unless you never change anything about your online presence. But dynamic QR codes let you update the destination forever. No reprinting.</p>
          <p style={{ ...pStyle, margin: 0 }}>Most QR code generators charge subscriptions for dynamic codes. QR Code Generator wants $108 a year. Bitly QR wants $420 a year. Beaconstac starts at $15 a month. Even Canva QR only gives you static – no editing. Truly Free QR gives you dynamic QR codes for free. No expiration. No account. Update your portfolio link, your phone number, your Calendly booking page – anything – without throwing away your beautiful cards.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>The Business Card QR Code Trap: Why Competitors Want You to Reprint</h2>
          <p style={pStyle}>Let me explain exactly how the industry traps professionals. You search &quot;free QR code for business card.&quot; You find QR Code Generator or Beaconstac. You create a dynamic code (good), print your cards (expensive), and everything works. What you don&apos;t realize: their free dynamic codes expire after 7–14 days. On day 15, your business card QR code stops working. Potential clients scan your card and get a dead link.</p>
          <p style={pStyle}>Why would they do this? Because they know you&apos;ve already printed the cards. They know reprinting costs money. So they offer you a &quot;solution&quot;: pay $9 a month ($108 a year) to reactivate your code. That&apos;s the bait-and-switch. They lure you with &quot;free,&quot; trap you with printing costs, then charge you forever. It&apos;s predatory, and it&apos;s standard practice in the QR industry.</p>
          <p style={pStyle}>Bitly does the same but at a higher price. Their QR product costs $35 a month – $420 a year. For a freelancer or small business owner, that&apos;s absurd. That&apos;s more than Adobe Creative Cloud. That&apos;s more than most website hosting plans. And what do you get? A dynamic QR code that doesn&apos;t expire (if you keep paying). The moment you stop paying, your code stops working. Your business cards become useless.</p>
          <p style={{ ...pStyle, margin: 0 }}>Truly Free QR has no expiration. I don&apos;t care if you use my service for ten years or ten minutes. Your code keeps working. I don&apos;t have a subscription system, so I cannot turn off your code even if I wanted to. And it&apos;s free because I run ads on the dashboard, not because I&apos;m holding your cards hostage.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Step-by-Step: Create a QR Code for Your Business Card</h2>
          <p style={pStyle}>Here&apos;s how to make a dynamic QR code that protects your investment in premium business cards.</p>
          {STEPS.map((s) => (
            <div key={s.t} style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", padding: "18px 22px", marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Why Truly Free QR Never Expires</h2>
          <p style={pStyle}>Truly Free QR is ad-supported, not subscription-based. Display ads appear on the generator dashboard and blog pages — not on the scan redirect, which would be unprofessional and would reflect poorly on your business cards.</p>
          <p style={pStyle}>The reason I can keep your QR code active forever is technical. Each dynamic code is just a row in a database: a short ID (like &quot;abc123&quot;) and a destination URL. There&apos;s no expiration date column. I don&apos;t automatically delete old codes. The storage cost is tiny – a million codes take up less space than a smartphone photo. So I have no incentive to expire codes. In fact, expiring codes would make me look bad and drive users away.</p>
          <p style={{ ...pStyle, margin: 0 }}>Safe-Scan protects the people who scan your business card. Before redirecting, I check the destination against Google Safe Browsing. If your portfolio site ever gets hacked and starts serving malware, Safe-Scan will show a warning. Your potential client will see &quot;Warning: This link may be unsafe&quot; and can choose to proceed or go back. This protects your professional reputation. If someone scans your card and gets a malware warning, they&apos;ll assume you&apos;re careless. Safe-Scan prevents that.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", padding: "18px 22px", marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 8 }}>{item.name}</div>
              <div className="aeo-answer" style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <p style={{ ...pStyle, margin: 0 }}>Try it now. Create a dynamic QR code for your business card. Test it with your phone. Change the destination a few times. See how fast it updates. No subscription, no expiration, no reprinting. That&apos;s how business cards should work in 2026.</p>
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
            <Link href="/blog/dynamic-vs-static-qr-codes" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Dynamic vs Static QR Code: What&apos;s the Difference?</Link>
            <Link href="/blog/free-dynamic-qr-code-generator-no-expiration" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Free Dynamic QR Code Generator (Codes Never Expire)</Link>
            <Link href="/blog/best-free-qr-code-generator" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Best Free QR Code Generator 2026: No Subscription, No Expiration</Link>
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
