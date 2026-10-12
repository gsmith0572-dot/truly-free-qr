import AuthorBox from "@/components/blog/AuthorBox";
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "What Breaks a QR Scan: Lab Results on Logos, Size and Blur",
  description: "We generated 480 QR codes and ran more than 20,000 decode tests: how big a logo can be, the smallest readable size, and what blur and contrast do.",
  alternates: { canonical: "https://trulyfreeqr.com/blog/qr-code-scan-test-logo-size-blur-contrast" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Breaks a QR Scan: Lab Results on Logos, Size and Blur",
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  author: { "@type": "Person", name: "George Smith", url: "https://www.linkedin.com/in/george-smith-832113217/" },
  publisher: { "@type": "Organization", name: "Truly Free QR", url: "https://trulyfreeqr.com" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How big can a logo be on a QR code?", acceptedAnswer: { "@type": "Answer", text: "In our decoder tests a round logo decoded reliably up to about 16 to 18 percent of the code width at error correction level L, about 26 percent at level M, and at least 35 percent at levels Q and H. Always scan the final artwork with two or three real phones before printing." } },
    { "@type": "Question", name: "Which error correction level should I use?", acceptedAnswer: { "@type": "Answer", text: "Level M is a sound default. Use Q or H only if you need a large logo, and expect a denser code: for the same 35-character link the code grows from 29 modules per side at level M to 37 at level H." } },
    { "@type": "Question", name: "What is the smallest a QR code can be printed?", acceptedAnswer: { "@type": "Answer", text: "The limit is the camera image, not the print. In our tests the decoder needed at least 2 pixels per module. A code with 29 modules plus its quiet zone therefore needs roughly 75 pixels across in the camera image. How small that is on paper depends on the phone and the scanning distance." } },
    { "@type": "Question", name: "Does a short URL really make a QR code easier to scan?", acceptedAnswer: { "@type": "Answer", text: "Yes. A 35-character link at level M gives a code with 29 modules per side, while a 186-character link gives 57. At the same printed width the modules of the longer code are about half as wide, which makes it harder to read when small or slightly out of focus." } },
  ],
}

const pStyle = { fontSize: 15, color: "#4a5568", lineHeight: 1.75, margin: "0 0 16px" } as const
const h2Style = { fontSize: "clamp(19px,2.5vw,24px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#181c1e" } as const
const thStyle = { textAlign: "left", fontSize: 12, fontWeight: 700, color: "#181c1e", padding: "8px 10px", borderBottom: "2px solid rgba(74,85,104,0.15)", whiteSpace: "nowrap" } as const
const tdStyle = { fontSize: 13, color: "#4a5568", padding: "8px 10px", borderBottom: "1px solid rgba(74,85,104,0.09)", whiteSpace: "nowrap" } as const

const LOGO_COLS = ["8%", "14%", "18%", "22%", "26%", "30%", "35%"]
const LOGO_ROWS = [
  { level: "L (about 7% recovery)", v: [84, 100, 100, 85, 33, 2, 0] },
  { level: "M (about 15%)", v: [98, 100, 100, 100, 100, 100, 38] },
  { level: "Q (about 25%)", v: [100, 100, 100, 100, 100, 100, 100] },
  { level: "H (about 30%)", v: [91, 100, 100, 100, 100, 100, 100] },
]

const SIZE_ROWS = [
  { len: "35 characters (a short link)", v: [29, 29, 33, 37] },
  { len: "81 characters", v: [37, 37, 45, 49] },
  { len: "186 characters (a long tracked URL)", v: [49, 57, 65, 73] },
]

const PPM_ROWS = [
  { len: "35 characters", v: [45, 100, 100] },
  { len: "81 characters", v: [70, 100, 100] },
  { len: "186 characters", v: [0, 100, 100] },
]

export default function ArticleQRScanTest() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f7fafc", minHeight: "100vh", color: "#181c1e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: "linear-gradient(160deg,#08122a 0%,#0c1e45 55%,#08122a 100%)", color: "#fff", padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", background: "rgba(0,88,195,0.18)", border: "1px solid rgba(0,88,195,0.35)", borderRadius: 2, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#93c5fd", marginBottom: 20 }}>TEST RESULTS</div>
          <h1 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12, margin: "0 0 18px" }}>What Breaks a QR Scan: Lab Results on Logos, Size and Blur</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 24px" }}>QR advice repeats the same rules: keep the logo small, print it big enough, use high contrast. We wanted numbers behind those rules, so we generated 480 codes and ran more than 20,000 decode attempts.</p>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>October 2026 · 8 min read</div>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 64px" }}>

        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid rgba(74,85,104,0.1)" }}><Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: "50%", objectFit: "cover" }} /><div><span style={{ fontSize: "14px", fontWeight: 600, color: "#181c1e", letterSpacing: "-0.01em" }}>George Smith</span><span style={{ fontSize: "13px", color: "#718096", letterSpacing: "-0.01em" }}> — Founder, Klickify Agency</span></div></div>
          <p style={pStyle}>Every QR guide says to keep the logo small, print the code big and use strong contrast. None of them say how small, how big or how strong. When you add a logo feature to a generator, as this site has, you need real limits, so we measured them.</p>
          <p style={pStyle}>A word on what this is. We tested one decoder, ZBar, on synthetic images made on a computer. We did not test phone cameras, glare, creased paper or bad printing. The results are good for comparing choices against each other, such as one error correction level against another. They are not a promise that your printed code will scan on every phone.</p>
          <p style={{ ...pStyle, margin: 0 }}>With that said, some of the results surprised us, and a few of them change what we would recommend.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>How We Tested</h2>
          <p style={pStyle}>We built the codes with the same <code>qrcode</code> package (version 1.5.4) that this site&apos;s generator uses. We made three kinds of payload: a 35-character short link, an 81-character URL and a 186-character URL with tracking parameters. For each kind we generated 40 random payloads at each of the four error correction levels, L, M, Q and H. That is 480 base images, drawn at 10 pixels per module with a four-module quiet zone around them.</p>
          <p style={pStyle}>We then damaged those images in controlled ways, ran each one through ZBar 0.23, and counted a success only when the decoded text matched the payload exactly. The experiments were a centered logo (three shapes, 14 sizes), downscaling to a given number of pixels per module, Gaussian blur, lower contrast, and rotation. Altogether that came to more than 20,000 decode attempts.</p>
          <p style={{ ...pStyle, margin: 0 }}>The tables below show the share of codes that decoded. Logo and size results combine all three payload lengths unless we say otherwise.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Logos: How Much of the Code Can You Cover?</h2>
          <p style={pStyle}>We placed a round, two-tone logo with a thin white ring in the center, the way most brand marks sit on a code. The sizes in the table are the logo&apos;s width as a share of the code&apos;s width. Each cell is 120 codes.</p>
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ borderCollapse: "collapse", minWidth: 520 }}>
              <thead>
                <tr>
                  <th style={thStyle}>Error correction</th>
                  {LOGO_COLS.map((c) => (<th key={c} style={thStyle}>{c}</th>))}
                </tr>
              </thead>
              <tbody>
                {LOGO_ROWS.map((r) => (
                  <tr key={r.level}>
                    <td style={tdStyle}>{r.level}</td>
                    {r.v.map((x, i) => (<td key={i} style={{ ...tdStyle, fontWeight: x === 100 ? 700 : 400, color: x === 100 ? "#16a34a" : x < 50 ? "#c53030" : "#4a5568" }}>{x}%</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={pStyle}>Level L tolerated a logo of 14 to 18 percent of the width and then fell off fast: 81 percent at 20, 33 percent at 26, and almost nothing at 28. Level M held 100 percent up to 26 percent and mostly to 30, then dropped at 32. Level Q read every code at every size we tried, up to 35 percent, and level H did the same from a 12 percent logo upward.</p>
          <p style={pStyle}>The generator on this site uses level M and a logo about 22 percent of the code width. That combination decoded in all 360 trials we ran with it (three logo shapes, 120 codes each), so the default sits inside the safe zone.</p>
          <p style={pStyle}>The part we did not expect is at the other end of the table. A very small logo is not automatically safer. At an 8 percent width, two of our twelve configurations failed noticeably: level L with the 186-character URL decoded only 52 percent of the time, and level H with the 81-character URL 72 percent. Both of those are version 8 codes, which have an alignment pattern, a small square, at the exact center. A logo that covers only part of that square seems to confuse the decoder more than a logo that covers all of it. At 14 percent both configurations read normally again.</p>
          <p style={{ ...pStyle, margin: 0 }}>Shape mattered too. Round logos behaved cleanly. A flat dark square with a white border produced odd dips, for example level Q at 22 percent decoded 70 percent of the time but 100 percent at 20 and at 24. Treat any logo size as something to test with your own artwork, not a number to trust blindly.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Why a Short Link Makes a Code Easier to Scan</h2>
          <p style={pStyle}>The length of what you encode decides how many modules the code has, and the number of modules decides how wide each one is at a given print size. The table shows the QR version and the modules per side for our three payloads at each error correction level.</p>
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ borderCollapse: "collapse", minWidth: 520 }}>
              <thead>
                <tr>
                  <th style={thStyle}>Payload</th>
                  <th style={thStyle}>L</th>
                  <th style={thStyle}>M</th>
                  <th style={thStyle}>Q</th>
                  <th style={thStyle}>H</th>
                </tr>
              </thead>
              <tbody>
                {SIZE_ROWS.map((r) => (
                  <tr key={r.len}>
                    <td style={tdStyle}>{r.len}</td>
                    {r.v.map((x, i) => (<td key={i} style={tdStyle}>{x}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={pStyle}>Numbers are modules per side. At level M, the short link makes a code 29 modules wide and the 186-character URL makes one 57 modules wide. Print both at the same width and the modules of the long one are about half as wide. Raising the error correction level adds modules too: the short link goes from 29 at level M to 37 at level H.</p>
          <p style={{ ...pStyle, margin: 0 }}>This is a practical argument for dynamic codes. The code holds a short redirect link instead of your long destination, so it stays small and sparse however long the real address is. It is the same reason we put that short link in the image once you click Make Dynamic. If you want to know more, see <Link href="/blog/dynamic-vs-static-qr-codes" style={{ color: "#0058c3", fontWeight: 600 }}>dynamic vs static QR codes</Link>.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>How Small Can It Be? Pixels Per Module</h2>
          <p style={pStyle}>For size, the number that matters is how many pixels of the camera image fall on each module. We downscaled the codes with bicubic resampling, the way a camera effectively does, and checked where reading stopped.</p>
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ borderCollapse: "collapse", minWidth: 420 }}>
              <thead>
                <tr>
                  <th style={thStyle}>Payload (level M)</th>
                  <th style={thStyle}>1.5 px</th>
                  <th style={thStyle}>2 px</th>
                  <th style={thStyle}>3 px</th>
                </tr>
              </thead>
              <tbody>
                {PPM_ROWS.map((r) => (
                  <tr key={r.len}>
                    <td style={tdStyle}>{r.len}</td>
                    {r.v.map((x, i) => (<td key={i} style={{ ...tdStyle, fontWeight: x === 100 ? 700 : 400, color: x === 100 ? "#16a34a" : x < 50 ? "#c53030" : "#4a5568" }}>{x}%</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={pStyle}>Two pixels per module was enough for every code, and 1.5 was not: the longest payload failed completely. That fits what you would expect from sampling, since a decoder needs more than one pixel to tell neighbouring modules apart.</p>
          <p style={pStyle}>It gives you an arithmetic rule. A code with 29 modules plus the four-module quiet zone on each side is 37 modules across, so the camera image needs about 75 pixels across the whole code. A 57-module code needs about 130. We did not measure how that translates to centimeters, because it depends on the phone and the distance, but the rule makes the point about short links again: fewer modules means more forgiveness.</p>
          <p style={{ ...pStyle, margin: 0 }}>For printed sizes and distances, see the <Link href="/blog/qr-code-size-guide-minimum-size-for-print-fabric-and-outdoor" style={{ color: "#0058c3", fontWeight: 600 }}>QR code size guide</Link>.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Blur, Contrast and Rotation</h2>
          <p style={pStyle}>Blur was the harshest test. We blurred the codes with a Gaussian filter measured in module widths. At a quarter of a module every code still read. At half a module, none of the 120 did. If your phone has not focused, a QR code does not degrade gracefully, it stops reading.</p>
          <p style={pStyle}>Contrast was the opposite. ZBar read every code all the way down to a 1.5 to 1 luminance ratio, light gray on white. We would not take that as permission for pale codes. It says the decoder was not the limit; glare, print quality and phone cameras are the real constraints, and we could not simulate those. Dark on light, as strong as you can make it, is still the right advice.</p>
          <p style={{ ...pStyle, margin: 0 }}>Rotation did not matter at all. Codes at 5, 15, 30, 45, 90 and 180 degrees all read. You do not need to worry about which way up the code is printed.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>A Checklist From the Results</h2>
          <ul style={{ margin: "0 0 16px", paddingLeft: 20 }}>
            <li style={{ ...pStyle, margin: "0 0 8px" }}>Encode as little as possible. A short link beats a long URL on every measure above.</li>
            <li style={{ ...pStyle, margin: "0 0 8px" }}>Use level M by default. Move to Q or H only if you need a big logo, and accept the denser code.</li>
            <li style={{ ...pStyle, margin: "0 0 8px" }}>Keep a logo to about a quarter of the code width at level M, and less at level L. On some codes a tiny logo is riskier than a medium one, so either skip the logo or make it a clear 14 percent or more.</li>
            <li style={{ ...pStyle, margin: "0 0 8px" }}>Leave the quiet zone alone. All of our tests used four modules of blank margin.</li>
            <li style={{ ...pStyle, margin: 0 }}>Test the final printed code with two or three different phones, at the distance people will really scan from. Everything above is a guide for choosing; only a real scan confirms it.</li>
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
          <h2 style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Make a code and test it</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>Free, no account. Download the PNG at 1100 pixels or the SVG for any print size.</p>
          <Link href="/" style={{ padding: "13px 32px", background: "linear-gradient(135deg,#0058c3,#0070f3)", color: "#fff", borderRadius: 4, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Create a Free QR Code</Link>
        </div>

        <div style={{ borderTop: "1px solid rgba(74,85,104,0.09)", paddingTop: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#718096", marginBottom: 16 }}>RELATED ARTICLES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/blog/qr-code-size-guide-minimum-size-for-print-fabric-and-outdoor" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>QR Code Size Guide: Minimum Size for Print, Fabric, and Outdoor Signage</Link>
            <Link href="/blog/dynamic-vs-static-qr-codes" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Dynamic vs Static QR Codes: The Complete Technical Guide for 2026</Link>
            <Link href="/blog/qr-code-stopped-working" style={{ textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#0058c3" }}>Why Your QR Code Stopped Working (And How to Fix It Permanently)</Link>
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
