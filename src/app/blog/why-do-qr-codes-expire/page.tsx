import AuthorBox from "@/components/blog/AuthorBox";
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Why Do QR Codes Expire? (And How to Avoid It)",
  description: "QR codes themselves don't expire. The only way a QR code \"expires\" is if the platform that hosts the redirect deactivates it. Here's how the 14-day bait-and-switch works and how to avoid it.",
  alternates: { canonical: "https://trulyfreeqr.com/blog/why-do-qr-codes-expire" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Do QR Codes Expire? (And How to Avoid It)",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: { "@type": "Person", name: "George Smith", url: "https://www.linkedin.com/in/george-smith-832113217/" },
  publisher: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do all dynamic QR codes expire?", acceptedAnswer: { "@type": "Answer", text: "No. Only dynamic codes from providers that have expiration policies. Truly Free QR does not expire. Neither do self-hosted dynamic codes (where you control the redirect server). But paid providers like QR Code Generator and Beaconstac expire free tiers to force upgrades." } },
    { "@type": "Question", name: "Can I tell if a QR code will expire before I print it?", acceptedAnswer: { "@type": "Answer", text: "Read the terms of service carefully. Look for phrases like \"free dynamic codes are valid for 14 days\" or \"temporary QR codes.\" If the provider doesn't explicitly state that codes never expire, assume they might. I state it clearly on my homepage: \"Codes never expire.\" That's a promise." } },
    { "@type": "Question", name: "What happens to my printed materials if a QR code expires?", acceptedAnswer: { "@type": "Answer", text: "They become useless. The only fix is to reprint them with a new code or set up a redirect on a domain you control. If the expired code points to a short URL (like qrprovider.com/abc123), you cannot revive it unless the provider allows you to pay to reactivate. That's why expiration is so damaging – the printed physical material is permanent, but the digital link is temporary." } },
    { "@type": "Question", name: "Does Truly Free QR have any hidden expiration?", acceptedAnswer: { "@type": "Answer", text: "No. I've stated it clearly. I built this tool because I was burned by expiration. I would be a hypocrite if I did the same thing. If I ever change this policy (I won't), I would announce it publicly months in advance and grandfather all existing codes. But I have no reason to change. Ads cover my costs." } },
    { "@type": "Question", name: "How can I protect myself from expiration if I use a paid provider?", acceptedAnswer: { "@type": "Answer", text: "Use a domain you control as an intermediary. For example, buy \"yourbusinessqr.com\". Set up a redirect from \"yourbusinessqr.com/menu\" to your actual menu URL. Print that short URL in your QR code. If your paid provider expires or you stop paying, you can change the redirect on your own domain to point somewhere else. Your printed QR code still works because the short URL is yours." } },
    { "@type": "Question", name: "Is QR Code Generator's paid plan safe from expiration?", acceptedAnswer: { "@type": "Answer", text: "Yes, as long as you keep paying. Their paid dynamic codes do not expire. The problem is the free tier. If you pay $9 a month forever, your code stays active. But if you ever stop paying, they deactivate it. That's the subscription trap. With Truly Free QR, there's no payment to stop, so no deactivation." } },
  ],
}

const STEPS = [
  { t: "1. Understand the difference between static and dynamic", d: "Static codes encode the URL directly. They cannot expire because there's no middleman. But you also cannot edit them. Dynamic codes use a redirect. They can expire if the redirect service shuts down or deactivates your code. Dynamic gives you flexibility; static gives you permanence. Choose based on your needs." },
  { t: "2. If you need dynamic, use a provider that doesn't expire", d: "Truly Free QR never expires. QR Code Generator expires after 14 days. Beaconstac after 7 days. Bitly doesn't expire as long as you pay $35/month. Choose a provider that aligns with your need for permanence. I'm biased, but I built mine specifically to solve this problem." },
  { t: "3. Avoid \"free\" dynamic codes from unknown providers", d: "If a website offers free dynamic QR codes without showing ads or asking for payment, they're probably expiring them or selling your data. There's no such thing as a free lunch. My site uses AdSense, so the \"cost\" is you seeing an ad. That's transparent. If a site has no visible revenue model, be suspicious." },
  { t: "4. Test your code after 30 days", d: "Even if you trust your provider, test your printed QR codes periodically. Scan them with your phone. Make sure they still work. I've seen cases where a provider changed their policy without notice and deactivated old codes. Don't assume permanence. Verify." },
  { t: "5. Own your redirect if possible", d: "The most permanent solution: buy a domain (e.g., yourname.link or yourbusiness.com/qr). Set up a simple redirect server. Each QR code points to a path on your domain (yourdomain.com/qr/menu). You control the redirects via a simple text file. This costs about $15 a year for the domain plus free hosting. No one can expire your codes except you." },
  { t: "6. Use static codes for truly permanent links", d: "If you're linking to your own website that you control forever, static codes are fine. The URL never changes because you own the domain. Your website might change content, but the URL stays the same. Static codes are immune to provider expiration because there's no provider involved. The QR code is just the URL." },
]

const pStyle = { fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" } as const
const h2Style = { fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" } as const

export default function ArticleWhyDoQRCodesExpire() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f7fafc", minHeight: "100vh", color: "#181c1e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: "linear-gradient(160deg,#08122a 0%,#0c1e45 55%,#08122a 100%)", color: "#fff", padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(22,163,74,0.15)", border: "1px solid rgba(22,163,74,0.3)", borderRadius: 2, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade80", marginBottom: 20 }}>QR CODE GUIDES</div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 18px" }}>Why Do QR Codes Expire? (And How to Avoid It)</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 24px" }}>You printed 500 flyers for your garage sale. You used a &quot;free QR code&quot; from a popular website. Two weeks after the sale, you scan the code for fun. It doesn&apos;t work. The QR code is dead.</p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>June 2026 · 11 min read · Truly Free QR Editorial Team</div>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 64px" }}>

        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(74,85,104,0.1)" }}><Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: "50%", objectFit: "cover" }} /><div><span style={{ fontSize: "14px", fontWeight: 600, color: "#181c1e", letterSpacing: "-0.01em" }}>George Smith</span><span style={{ fontSize: "13px", color: "#718096", letterSpacing: "-0.01em" }}> — Founder, Klickify Agency</span></div></div>
          <p style={pStyle}>You printed 500 flyers for your garage sale. You used a &quot;free QR code&quot; from a popular website. The flyers look great. The QR code points to a map of your location. Two weeks after the sale, you scan the code for fun. It doesn&apos;t work. You try again. Nothing. The QR code is dead.</p>
          <p style={pStyle}>Why did it expire? Because you used a dynamic QR code from a platform that deactivates free codes after a certain period. The platform doesn&apos;t tell you this upfront. The words &quot;free&quot; and &quot;expiration&quot; are buried in their terms of service. They count on you not reading the fine print. Then, when your code stops working, they offer to reactivate it – for a monthly fee.</p>
          <p style={{ ...pStyle, margin: 0 }}>QR codes themselves don&apos;t expire. A QR code is just a pattern of black and white squares. It&apos;s a physical thing (or digital image) that encodes text. That text could be a URL, a phone number, or plain words. The pattern doesn&apos;t have a clock. It doesn&apos;t know what day it is. The only way a QR code &quot;expires&quot; is if the thing it points to stops working, or if the platform that hosts the redirect deactivates it.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>The 14-Day Bait-and-Switch: How the Industry Traps You</h2>
          <p style={pStyle}>Let me name names. QR Code Generator (qr-code-generator.com) is the biggest offender. They offer &quot;free&quot; dynamic QR codes. Create one, print it, everything works. What they don&apos;t emphasize: free dynamic codes expire after 14 days. Exactly 14 days. On day 15, your code redirects to a dead page. Their system deactivates it automatically.</p>
          <p style={pStyle}>Why 14 days? Because that&apos;s enough time for you to print and distribute your materials. It&apos;s not enough time for you to realize the code is dead and demand a refund from your printer. By the time you notice, you&apos;ve already spent money. Now you have two choices: pay $9 a month ($108 a year) to reactivate the code, or throw away your printed materials and start over. Most people pay. That&apos;s the business model.</p>
          <p style={pStyle}>Beaconstac does the same but with a 7-day expiration. Seven days! That&apos;s not enough time to get flyers printed and mailed. Their free tier is literally useless. They&apos;re hoping you&apos;ll sign up for a paid plan without ever using the free one. Bitly doesn&apos;t have a free dynamic tier at all – you pay $35 a month from day one. QRCode Monkey charges $19 a month for dynamic, no free tier.</p>
          <p style={{ ...pStyle, margin: 0 }}>Truly Free QR is different. Dynamic codes never expire. Not after 14 days, not after a year, not after a decade. I don&apos;t have an expiration policy because I don&apos;t have a subscription system. I can&apos;t turn off your code even if I wanted to. And I don&apos;t want to. My revenue comes from ads, not from holding your codes hostage.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>How to Avoid QR Code Expiration (Step by Step)</h2>
          <p style={pStyle}>Here&apos;s exactly how to ensure your QR codes work forever, no matter what.</p>
          {STEPS.map((s) => (
            <div key={s.t} style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", padding: "18px 22px", marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Why Truly Free QR Never Expires</h2>
          <p style={pStyle}>Truly Free QR is ad-supported, not subscription-based. Display ads appear on the generator page — not on the scan redirect, and with no subscription prompts. Server costs are minimal — a few hundred dollars a year — covered entirely by advertising.</p>
          <p style={pStyle}>My database has no &quot;expiration_date&quot; column. Every QR code row has just an ID and a destination URL. That&apos;s it. I don&apos;t store creation date, last scan date, or any other metadata that would let me automatically expire codes. I would have to manually write a script to delete old codes. I haven&apos;t. I won&apos;t. It would hurt my reputation and drive users away.</p>
          <p style={{ ...pStyle, margin: 0 }}>If I ever needed to shut down the service (I don&apos;t plan to), I would give months of notice and provide a way to export your redirect mappings. You could then set up your own redirect server. But as long as the site runs, your codes run. I made a promise to myself after my restaurant got burned: never expire codes, never charge for basic functionality. I&apos;m keeping that promise.</p>
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
          <p style={{ ...pStyle, margin: 0 }}>Don&apos;t let your printed materials become trash. Use a QR provider that never expires. Use Truly Free QR. Your flyers, menus, and business cards will still work years from now.</p>
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
            <Link href="/blog/qr-code-stopped-working" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Why Your QR Code Stopped Working — The Bait-and-Switch Explained</Link>
            <Link href="/blog/free-dynamic-qr-code-generator-no-expiration" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Free Dynamic QR Code Generator (Codes Never Expire)</Link>
            <Link href="/blog/dynamic-vs-static-qr-code" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Dynamic vs Static QR Code: What&apos;s the Difference?</Link>
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
