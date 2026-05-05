import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "QR Code Statistics 2026: 50+ Facts, Trends & Market Data",
  description: "Comprehensive QR code statistics for 2026: market size, scan volume, adoption by industry, mobile usage data, and growth projections. Updated with the latest research.",
  alternates: { canonical: "https://trulyfreeqr.com/blog/qr-code-statistics" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "QR Code Statistics 2026: 50+ Facts, Trends & Market Data",
  datePublished: "2026-05-04",
  dateModified: "2026-05-04",
  author: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
  publisher: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many QR codes are scanned per day in 2026?", acceptedAnswer: { "@type": "Answer", text: "Over 26 million QR codes are scanned globally every day in 2026, based on an annual scan volume exceeding 9.7 billion scans." } },
    { "@type": "Question", name: "What is the QR code market size in 2026?", acceptedAnswer: { "@type": "Answer", text: "The global QR code market is valued at approximately $16.4 billion in 2026, projected to reach $33.14 billion by 2031 at a CAGR of 16.82%." } },
    { "@type": "Question", name: "What percentage of smartphone users have scanned a QR code?", acceptedAnswer: { "@type": "Answer", text: "89% of smartphone users in the United States have scanned a QR code at least once, with 54% scanning QR codes weekly." } },
    { "@type": "Question", name: "Which country has the highest QR code adoption?", acceptedAnswer: { "@type": "Answer", text: "The United States accounts for 38.31% of global QR code scanning activity, followed by India at 13.48% and the United Kingdom at 9.2%." } },
    { "@type": "Question", name: "What industries use QR codes the most?", acceptedAnswer: { "@type": "Answer", text: "Restaurants and food service lead QR code adoption at 58%, followed by retail at 46%, healthcare at 39%, events and entertainment at 34%, and real estate at 28%." } },
  ],
}

const MARKET_STATS = [
  ["Global market size (2026)", "$16.4 billion"],
  ["Projected market size (2031)", "$33.14 billion"],
  ["Market CAGR (2026–2031)", "16.82%"],
  ["Annual QR scans globally (2026)", "9.7 billion+"],
  ["Daily QR scans globally", "26+ million"],
  ["Growth in scans since 2022", "+433%"],
  ["US share of global scan activity", "38.31%"],
  ["India share of global scan activity", "13.48%"],
]

const ADOPTION_STATS = [
  ["US smartphone users who have scanned a QR", "89%"],
  ["US consumers scanning QR weekly", "54%"],
  ["Consumers who find QR codes useful", "83%"],
  ["Restaurants using QR menus", "52%"],
  ["Retailers with QR-enabled product packaging", "46%"],
  ["Healthcare providers using QR for patient info", "39%"],
  ["Event venues using QR for ticketing", "34%"],
  ["Real estate listings with QR codes", "28%"],
]

const DEVICE_STATS = [
  ["QR scans from mobile devices", "88%"],
  ["QR scans from iOS devices", "51%"],
  ["QR scans from Android devices", "37%"],
  ["Average scan-to-landing-page time", "< 2 seconds"],
  ["Scans occurring in retail environments", "39%"],
  ["Scans triggered by restaurant menus", "22%"],
  ["Scans from printed marketing materials", "19%"],
  ["Scans from digital screens", "20%"],
]

export default function ArticleQRCodeStatistics() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f7fafc", minHeight: "100vh", color: "#181c1e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav style={{ background: "#fff", borderBottom: "1px solid rgba(74,85,104,0.12)", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56, position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 14, color: "#181c1e", textDecoration: "none" }}>Truly Free <span style={{ color: "#0058c3" }}>QR</span></Link>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/blog" style={{ fontSize: 13, color: "#718096", textDecoration: "none" }}>Blog</Link>
          <Link href="/" style={{ padding: "7px 18px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Free QR Generator</Link>
        </div>
      </nav>

      <div style={{ background: "linear-gradient(160deg,#08122a 0%,#0c1e45 55%,#08122a 100%)", color: "#fff", padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(0,112,243,0.12)", border: "1px solid rgba(0,112,243,0.25)", borderRadius: 2, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#60a5fa", marginBottom: 20 }}>MARKET RESEARCH 2026</div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 18px" }}>QR Code Statistics 2026: 50+ Facts, Trends & Market Data</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 24px" }}>The definitive compilation of QR code statistics for 2026: global market size, scan volume, adoption by industry, device distribution, and growth projections. All data sourced from primary market research reports.</p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>May 2026 · 14 min read · Truly Free QR Research Team</div>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 64px" }}>

        <div style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(0,88,195,0.15)", padding: "20px 24px", marginBottom: 40, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0058c3", marginBottom: 8 }}>KEY NUMBERS AT A GLANCE</div>
          {[
            ["$16.4B", "Global QR market size in 2026"],
            ["9.7B+", "QR code scans annually worldwide"],
            ["433%", "Scan growth since 2022"],
            ["89%", "US smartphone users who have scanned a QR code"],
            ["16.82%", "Market CAGR through 2031"],
          ].map(([num, label]) => (
            <div key={num} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: 22, fontWeight: 800, color: "#0058c3", minWidth: 80 }}>{num}</span>
              <span style={{ fontSize: 13, color: "#4a5568" }}>{label}</span>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>QR Code Market Size & Growth Statistics</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>The QR code market has undergone a structural transformation since 2020. What began as an obscure bar code format used in automotive manufacturing has become core infrastructure for contactless commerce, digital authentication, and marketing attribution. The COVID-19 pandemic accelerated adoption by 5 to 7 years according to estimates from multiple market research firms, collapsing the timeline for mainstream consumer acceptance.</p>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 24px" }}>By 2026 the market has reached a self-sustaining adoption flywheel: as more businesses deploy QR codes, more consumers scan them, which drives more business deployment. The following statistics quantify this growth.</p>
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", overflow: "hidden", marginBottom: 16 }}>
            <div style={{ background: "#f7fafc", padding: "12px 22px", borderBottom: "1px solid rgba(74,85,104,0.09)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#718096" }}>MARKET SIZE & VOLUME STATISTICS</div>
            {MARKET_STATS.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", padding: "12px 22px", borderBottom: i < MARKET_STATS.length - 1 ? "1px solid rgba(74,85,104,0.06)" : "none", background: i % 2 === 0 ? "#fff" : "#fafbfc", fontSize: 13 }}>
                <span style={{ color: "#4a5568" }}>{row[0]}</span>
                <span style={{ fontWeight: 700, color: "#181c1e" }}>{row[1]}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#a0aec0", lineHeight: 1.6, margin: 0 }}>Sources: QRTiger Market Report 2026, Statista QR Code Market Forecast, Grand View Research QR Code Technology Report.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>QR Code Adoption Statistics by Industry</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>Adoption rates vary significantly by industry. Restaurants and food service lead all sectors due to the contactless menu transition accelerated by the pandemic. The 52% of US restaurants now using QR menus represents a near-permanent shift: operators report that customers expect digital menus even in post-pandemic environments, and the cost savings from eliminating printed menu updates are substantial.</p>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 24px" }}>Retail adoption is driven by the convergence of physical and digital commerce. QR codes on product packaging bridge the in-store browsing experience to online reviews, ingredient transparency, and loyalty programs. The National Retail Federation reports that products with scannable QR codes see 23% higher engagement than comparable products without them.</p>
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", overflow: "hidden", marginBottom: 16 }}>
            <div style={{ background: "#f7fafc", padding: "12px 22px", borderBottom: "1px solid rgba(74,85,104,0.09)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#718096" }}>ADOPTION BY INDUSTRY & CONSUMER BEHAVIOR</div>
            {ADOPTION_STATS.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", padding: "12px 22px", borderBottom: i < ADOPTION_STATS.length - 1 ? "1px solid rgba(74,85,104,0.06)" : "none", background: i % 2 === 0 ? "#fff" : "#fafbfc", fontSize: 13 }}>
                <span style={{ color: "#4a5568" }}>{row[0]}</span>
                <span style={{ fontWeight: 700, color: "#181c1e" }}>{row[1]}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>QR Code Scanning Behavior & Device Statistics</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>Mobile dominates QR scanning with 88% of scans occurring on smartphones. This figure has remained stable since 2023, suggesting that tablet and desktop QR scanning — while technically possible through browser-based cameras — has not seen meaningful adoption. The split between iOS and Android reflects the broader smartphone market, with iOS slightly overrepresented in QR scanning relative to its market share, which analysts attribute to higher engagement rates among iPhone users with marketing materials.</p>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 24px" }}>The environments where scanning occurs reveal how QR codes have been integrated into daily commerce. Retail environments account for the largest share, followed by restaurant contexts, printed marketing materials such as business cards and flyers, and digital screens including TV ads and digital signage.</p>
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", overflow: "hidden", marginBottom: 16 }}>
            <div style={{ background: "#f7fafc", padding: "12px 22px", borderBottom: "1px solid rgba(74,85,104,0.09)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#718096" }}>DEVICE & SCANNING ENVIRONMENT STATISTICS</div>
            {DEVICE_STATS.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", padding: "12px 22px", borderBottom: i < DEVICE_STATS.length - 1 ? "1px solid rgba(74,85,104,0.06)" : "none", background: i % 2 === 0 ? "#fff" : "#fafbfc", fontSize: 13 }}>
                <span style={{ color: "#4a5568" }}>{row[0]}</span>
                <span style={{ fontWeight: 700, color: "#181c1e" }}>{row[1]}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>QR Code Generator Market: Competitive Landscape Statistics</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>The QR code generator market is dominated by a small number of high-authority platforms that have built significant search engine moats through domain authority and backlink profiles. The leading platform, qr-code-generator.com, holds a Domain Rating of 82 and attracts over 5 million monthly search visits with a traffic value estimated at $1.4 million per month.</p>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>However, user sentiment toward these platforms reveals significant dissatisfaction with monetization practices. Trustpilot and G2 reviews consistently cite three primary complaints: codes deactivating after 14-day free trials without clear warning, annual-only billing that requires commitments of $111 to $180 without monthly options, and AI-only customer support that fails to resolve technical issues for printed materials already deployed in the field.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
            {[
              { stat: "10,400+", label: "Referring domains to the #1 QR generator", color: "#0058c3" },
              { stat: "$1.4M", label: "Monthly traffic value of the leading platform", color: "#0058c3" },
              { stat: "82", label: "Domain Rating of the market leader", color: "#7c3aed" },
              { stat: "$111–180", label: "Typical annual subscription cost", color: "#dc2626" },
              { stat: "14 days", label: "Free trial window before code deactivation", color: "#dc2626" },
              { stat: "76%", label: "Users who report frustration with QR expiration", color: "#ea580c" },
            ].map(({ stat, label, color }) => (
              <div key={stat} style={{ background: "#fff", borderRadius: 8, padding: "16px 18px", border: "1px solid rgba(74,85,104,0.09)" }}>
                <div style={{ fontSize: 24, fontWeight: 800, color, marginBottom: 4 }}>{stat}</div>
                <div style={{ fontSize: 12, color: "#718096", lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>QR Code Security Statistics: The Quishing Threat</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>As QR code adoption has grown, so has their use as a vector for phishing attacks. "Quishing" — QR code phishing — involves replacing legitimate QR codes with malicious ones that redirect users to credential-harvesting pages. The FBI issued a public warning about this attack vector in 2022, and the threat has grown significantly since.</p>
          {[
            { stat: "400%", label: "Increase in QR phishing attacks between 2023 and 2025", bg: "rgba(220,38,38,0.04)", border: "rgba(220,38,38,0.12)", color: "#dc2626" },
            { stat: "51%", label: "Year-over-year increase in quishing attempts in 2023 alone", bg: "rgba(220,38,38,0.04)", border: "rgba(220,38,38,0.12)", color: "#dc2626" },
            { stat: "89.3%", label: "Of quishing attacks target credential theft specifically", bg: "rgba(220,38,38,0.04)", border: "rgba(220,38,38,0.12)", color: "#dc2626" },
            { stat: "22%", label: "Of employees click malicious QR codes in simulated phishing tests", bg: "rgba(220,38,38,0.04)", border: "rgba(220,38,38,0.12)", color: "#dc2626" },
          ].map(({ stat, label, bg, border, color }) => (
            <div key={stat} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, padding: "14px 18px", marginBottom: 10, display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 22, fontWeight: 800, color, minWidth: 64 }}>{stat}</span>
              <span style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.5 }}>{label}</span>
            </div>
          ))}
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "16px 0 0" }}>Truly Free QR addresses this threat through its Safe-Scan system, which provides users with a destination preview page before the final redirect occurs. The preview checks the destination against the Google Safe Browsing API and allows users to verify the URL before proceeding.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>QR Code Growth Projections: 2026 to 2031</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" }}>Forward-looking projections from market research firms converge on sustained high growth through 2031. The 16.82% CAGR represents one of the higher sustained growth rates among mature technology sectors, driven by three structural tailwinds: the continued global rollout of smartphone infrastructure in developing markets, the expansion of QR-based payment systems in markets where mobile payments are replacing cash, and the integration of QR codes into physical-digital commerce infrastructure across retail, healthcare, and government services.</p>
          <div style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", padding: "20px 24px", marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#718096", marginBottom: 16 }}>PROJECTED MARKET SIZE (USD BILLIONS)</div>
            {[
              { year: "2024", value: 11.9, pct: 36 },
              { year: "2025", value: 13.9, pct: 42 },
              { year: "2026", value: 16.4, pct: 50 },
              { year: "2027", value: 19.1, pct: 58 },
              { year: "2028", value: 22.3, pct: 67 },
              { year: "2029", value: 26.0, pct: 79 },
              { year: "2030", value: 29.8, pct: 90 },
              { year: "2031", value: 33.1, pct: 100 },
            ].map(({ year, value, pct }) => (
              <div key={year} style={{ display: "grid", gridTemplateColumns: "48px 1fr 64px", gap: 12, alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#718096" }}>{year}</span>
                <div style={{ height: 8, background: "#f1f4f6", borderRadius: 4 }}>
                  <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(135deg,#0058c3,#0070f3)", borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#181c1e", textAlign: "right" }}>${value}B</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" }}>Frequently Asked Questions About QR Code Statistics</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 8, border: "1px solid rgba(74,85,104,0.09)", padding: "18px 22px", marginBottom: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#181c1e", marginBottom: 8 }}>{item.name}</div>
              <div style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.65 }}>{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </section>

        <div style={{ background: "linear-gradient(160deg,#08122a,#0c1e45)", borderRadius: 12, padding: "40px 28px", textAlign: "center", color: "#fff", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Generate QR codes for free — no subscription required</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>Static and dynamic QR codes. No account. No trial. No expiration. Permanently free.</p>
          <Link href="/" style={{ padding: "13px 32px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Create Free QR Code</Link>
        </div>

        <div style={{ borderTop: "1px solid rgba(74,85,104,0.09)", paddingTop: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#718096", marginBottom: 16 }}>RELATED ARTICLES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/blog/dynamic-vs-static-qr-codes" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Dynamic vs Static QR Codes: The Complete Technical Guide for 2026</Link>
            <Link href="/blog/qr-code-stopped-working" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Why Your QR Code Stopped Working — The QR Bait-and-Switch Explained</Link>
            <Link href="/blog/qr-code-phishing-protection" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>QR Code Phishing: What It Is and How to Protect Users</Link>
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