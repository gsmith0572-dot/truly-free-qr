import AuthorBox from "@/components/blog/AuthorBox";
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "QR Code Size Guide: Minimum Size for Print, Fabric, and Outdoor Signage",
  description: "How big should a QR code be? The 2 cm minimum, the 10:1 distance rule, why a long URL needs a bigger code, and how to size one on screen.",
  alternates: { canonical: "https://trulyfreeqr.com/blog/qr-code-size-guide-minimum-size-for-print-fabric-and-outdoor" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "QR Code Size Guide: Minimum Size for Print, Fabric, and Outdoor Signage",
  datePublished: "2026-07-17",
  dateModified: "2026-10-12",
  author: { "@type": "Person", name: "George Smith", url: "https://www.linkedin.com/in/george-smith-832113217/" },
  publisher: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the minimum size for a QR code?", acceptedAnswer: { "@type": "Answer", text: "For close-up scanning the figure most guides give is 2 x 2 cm (0.8 x 0.8 in), measured without the blank margin. Treat it as a floor for short links, not a target: longer URLs make a denser code and need more width." } },
    { "@type": "Question", name: "How big should a QR code be for a poster?", acceptedAnswer: { "@type": "Answer", text: "Use the 10:1 rule of thumb: the scanning distance is about ten times the width of the code. A poster people will scan from 1.5 m (5 ft) away needs a code about 15 cm (6 in) wide." } },
    { "@type": "Question", name: "Does the blank margin count toward the size?", acceptedAnswer: { "@type": "Answer", text: "No. The quiet zone, a blank margin of at least four modules on every side, is extra. The sizes in this guide refer to the code itself." } },
    { "@type": "Question", name: "Why does a long URL need a bigger code?", acceptedAnswer: { "@type": "Answer", text: "More characters mean more modules. At error correction level M, a 35-character link makes a code 29 modules wide and a 186-character URL makes one 57 modules wide. At the same printed width, each module of the long code is about half as wide, which is harder for a camera to resolve." } },
    { "@type": "Question", name: "What size should I display a QR code on a web page?", acceptedAnswer: { "@type": "Answer", text: "Give every module at least four screen pixels. That works out to about 150 px for a 29-module code, 180 px for 37 modules and 260 px for 57 modules, each including the margin. Four pixels is double the two-pixel floor we measured, to leave room for scaling and compression." } },
  ],
}

const pStyle = { fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" } as const
const h2Style = { fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" } as const
const thStyle = { textAlign: "left", fontSize: 12, fontWeight: 700, color: "#181c1e", padding: "8px 10px", borderBottom: "2px solid rgba(74,85,104,0.15)", whiteSpace: "nowrap" } as const
const tdStyle = { fontSize: 13, color: "#4a5568", padding: "8px 10px", borderBottom: "1px solid rgba(74,85,104,0.09)", whiteSpace: "nowrap" } as const

const DISTANCE_ROWS = [
  ["Business card, flyer or menu in hand", "25 to 30 cm (10 to 12 in)", "2.5 to 3 cm (never below 2 cm)"],
  ["Table tent or counter sign", "about 50 cm (20 in)", "about 5 cm (2 in)"],
  ["Shop-window poster", "1.2 to 1.8 m (4 to 6 ft)", "12 to 18 cm (5 to 7 in)"],
  ["Wall poster or event banner", "about 3 m (10 ft)", "about 30 cm (12 in)"],
  ["Storefront or bus-stop sign", "about 5 m (16 ft)", "about 50 cm (20 in)"],
  ["Billboard", "about 10 m (33 ft)", "about 1 m (3 ft)"],
]

const MODULE_ROWS = [
  ["35-character short link", "29", "0.69 mm", "1.03 mm"],
  ["81-character URL", "37", "0.54 mm", "0.81 mm"],
  ["186-character tracked URL", "57", "0.35 mm", "0.53 mm"],
]

export default function ArticleQRSizeGuide() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f7fafc", minHeight: "100vh", color: "#181c1e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: "linear-gradient(160deg,#08122a 0%,#0c1e45 55%,#08122a 100%)", color: "#fff", padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(0,88,195,0.18)", border: "1px solid rgba(0,88,195,0.35)", borderRadius: 2, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#93c5fd", marginBottom: 20 }}>QR CODE GUIDES</div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 18px" }}>QR Code Size Guide: Minimum Size for Print, Fabric, and Outdoor Signage</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 24px" }}>Two numbers decide whether a QR code scans: how wide you print it, and how many modules it holds. Here is how to work out both, with the arithmetic shown.</p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>Updated October 2026 · 7 min read</div>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 64px" }}>

        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(74,85,104,0.1)" }}><Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: "50%", objectFit: "cover" }} /><div><span style={{ fontSize: "14px", fontWeight: 600, color: "#181c1e", letterSpacing: "-0.01em" }}>George Smith</span><span style={{ fontSize: "13px", color: "#718096", letterSpacing: "-0.01em" }}> — Founder, Klickify Agency</span></div></div>
          <p style={pStyle}>The most common size advice for QR codes is a single number, and it hides the part that matters. A QR code is a grid of small squares called modules, and a camera has to tell those squares apart. How wide the whole code is printed matters, but so does how many modules are packed into it.</p>
          <p style={{ ...pStyle, margin: 0 }}>This guide gives you the two rules of thumb that most sources agree on, then shows how payload length changes the picture, with numbers from our own decoder tests.</p>
        </section>

        <div style={{ background: "#f0f4ff", borderLeft: "4px solid #2563eb", borderRadius: 8, padding: "24px 28px", marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", margin: "0 0 12px" }}>What is the minimum size for a QR code?</h2>
          <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, margin: 0 }}>For close-up scanning, at least 2 x 2 cm (0.8 x 0.8 in), not counting the blank margin. For anything scanned from further away, make the code about one tenth as wide as the distance it will be scanned from. Keep the link short, because a longer URL makes the modules smaller at the same width.</p>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>The Two Rules Most Guides Agree On</h2>
          <p style={pStyle}>The first is a close-up floor: <a href="https://www.qr-code-generator.com/blog/qr-code-distance/" target="_blank" rel="noopener noreferrer" style={{ color: "#0058c3" }}>QR Code Generator&apos;s size guide</a> and others recommend at least 2 x 2 cm (0.8 x 0.8 in) for things scanned in the hand. Smaller codes can work with a short link and a good camera, but 2 cm is where you stop having to hope.</p>
          <p style={pStyle}>The second is the 10:1 rule: the scanning distance is about ten times the width of the code. A code 3 cm wide is comfortable at about 30 cm, which is roughly arm&apos;s length. It is a rule of thumb, not a law of physics, and phones differ, so treat it as the least you should do.</p>
          <p style={{ ...pStyle, margin: 0 }}>There is also a margin to respect. Every code needs a blank border, the quiet zone, of at least four modules on all sides. The standard behind QR codes, ISO/IEC 18004, requires it, and the border is in addition to the sizes in this guide. For more, see <a href="https://www.qrcode.com/en/howto/generate.html" target="_blank" rel="noopener noreferrer" style={{ color: "#0058c3" }}>DENSO WAVE&apos;s notes on generating a code</a>, which state that a margin is required.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>How Wide for Each Place You Print It</h2>
          <p style={pStyle}>Applying the 10:1 rule to some typical distances gives this table. The distances are examples, so replace them with how far your real audience will stand.</p>
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ borderCollapse: "collapse", minWidth: 520 }}>
              <thead>
                <tr>
                  <th style={thStyle}>Where it is scanned</th>
                  <th style={thStyle}>Example distance</th>
                  <th style={thStyle}>Width (10:1)</th>
                </tr>
              </thead>
              <tbody>
                {DISTANCE_ROWS.map((r) => (
                  <tr key={r[0]}>
                    <td style={tdStyle}>{r[0]}</td>
                    <td style={tdStyle}>{r[1]}</td>
                    <td style={tdStyle}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...pStyle, margin: 0 }}>Most people scan from a bit further than they expect to. If the code sits at the edge of the range, go one row up.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Why a Long URL Needs a Bigger Code</h2>
          <p style={pStyle}>Width alone does not tell you how big each module is. The number of modules depends on what the code holds. In our tests, at error correction level M, a 35-character link made a code 29 modules wide, an 81-character URL made one 37 wide, and a 186-character URL with tracking parameters made one 57 wide.</p>
          <p style={pStyle}>Divide the printed width by the module count and you get the width of one module. The table uses the width of the code itself, without its margin.</p>
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ borderCollapse: "collapse", minWidth: 520 }}>
              <thead>
                <tr>
                  <th style={thStyle}>What the code holds</th>
                  <th style={thStyle}>Modules per side</th>
                  <th style={thStyle}>One module at 2 cm</th>
                  <th style={thStyle}>One module at 3 cm</th>
                </tr>
              </thead>
              <tbody>
                {MODULE_ROWS.map((r) => (
                  <tr key={r[0]}>
                    <td style={tdStyle}>{r[0]}</td>
                    <td style={tdStyle}>{r[1]}</td>
                    <td style={tdStyle}>{r[2]}</td>
                    <td style={tdStyle}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={pStyle}>A 2 cm code holding the long URL has modules about a third of a millimeter wide, roughly half the width of the modules in a same-size code holding a short link (0.69 mm). That is why the long one is less forgiving: the camera has half as many pixels to spend on each module.</p>
          <p style={{ ...pStyle, margin: 0 }}>The practical fix is to encode less. A dynamic code holds a short redirect link instead of your long destination, which keeps the code sparse at any print size. Our <Link href="/blog/qr-code-scan-test-logo-size-blur-contrast" style={{ color: "#0058c3", fontWeight: 600 }}>decoder test results</Link> show how much this matters, including the two-pixels-per-module floor below.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>On a Screen: Pixels, Not Centimeters</h2>
          <p style={pStyle}>For a code shown on a web page, an email or a slide, the size that matters is how many screen pixels each module gets. In our decoder tests, a code was read reliably down to two pixels per module and failed below that, in particular for the denser codes.</p>
          <p style={pStyle}>Screens add scaling, compression and glare, so aim for double the floor: at least four pixels per module, including the margin. For the three payloads above that is about 150 pixels for a 29-module code, 180 for a 37-module code and 260 for a 57-module code. The PNG that this site&apos;s generator downloads is 1100 by 1100 pixels, which gives a short-link code more than 30 pixels per module, far more than it needs.</p>
          <p style={{ ...pStyle, margin: 0 }}>If you need to print from a PNG, use the SVG instead. A vector file has no pixels to run out of, and it scales to a business card or a billboard.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Fabric, Glossy Paper, Curved Surfaces and Outdoor Signs</h2>
          <p style={pStyle}>Surface changes what the camera sees. Woven fabric breaks up the edges of modules, glossy paper and laminate throw glare, a curved bottle bends the grid, and sunlight washes out contrast. We did not test any of these, so we are not going to hand you a centimeter figure for each.</p>
          <p style={{ ...pStyle, margin: 0 }}>What follows from the rest of this guide is a sensible order of operations. Start from the 10:1 width for the real distance, shorten the link to keep the module count down, then go one size up for fabric, shine or weather, and print a proof on the real material before you commit to a full run.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>A Two-Minute Size Check</h2>
          <ul style={{ margin: "0 0 16px", paddingLeft: 20 }}>
            <li style={{ ...pStyle, margin: "0 0 8px" }}>Measure the code without its margin. It should be at least 2 cm wide and at least a tenth of the scanning distance.</li>
            <li style={{ ...pStyle, margin: "0 0 8px" }}>Count the modules, or compare it to the table above. More modules means you need more width.</li>
            <li style={{ ...pStyle, margin: "0 0 8px" }}>Check the blank margin: four modules on every side, with nothing printed in it.</li>
            <li style={{ ...pStyle, margin: 0 }}>Scan a printed proof with two or three different phones, from the real distance, in the real light. Everything above helps you choose; only a real scan confirms.</li>
          </ul>
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

        <div style={{ background: "linear-gradient(160deg,#08122a,#0c1e45)", borderRadius: 12, padding: "40px 28px", textAlign: "center", color: "#fff", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Make a QR code with a short link</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>Free, no account. Download the SVG for print or the 1100-pixel PNG for screens.</p>
          <Link href="/" style={{ padding: "13px 32px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Create a Free QR Code</Link>
        </div>

        <div style={{ borderTop: "1px solid rgba(74,85,104,0.09)", paddingTop: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#718096", marginBottom: 16 }}>RELATED ARTICLES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/blog/qr-code-scan-test-logo-size-blur-contrast" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>What Breaks a QR Scan: Lab Results on Logos, Size and Blur</Link>
            <Link href="/blog/dynamic-vs-static-qr-codes" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Dynamic vs Static QR Codes: The Complete Technical Guide for 2026</Link>
            <Link href="/blog/qr-code-business-card-free" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>QR Code for Business Cards (Free Generator)</Link>
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
