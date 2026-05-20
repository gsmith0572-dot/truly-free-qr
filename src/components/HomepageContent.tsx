import Link from "next/link"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are dynamic QR codes on Truly Free QR really free forever?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every dynamic QR code you create on Truly Free QR stays active permanently at no cost. We fund operations through non-intrusive Google AdSense advertising, not subscriptions. Your code will not be deactivated if you do not pay — because there is nothing to pay.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create an account to generate a QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No account is required. You can generate, customize, and download a QR code in under 60 seconds without providing an email address, a phone number, or a credit card. Your code is saved to your browser session.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a static and a dynamic QR code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A static QR code encodes the destination URL directly into the pixel pattern. Once printed, it cannot be changed. A dynamic QR code encodes a short redirect URL instead. The redirect destination can be changed at any time without reprinting. Dynamic codes also provide scan analytics including device type, geographic location, and time of scan.",
      },
    },
    {
      "@type": "Question",
      name: "Why did my QR code stop working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most QR generators use a 14-day free trial model. After the trial ends, dynamic QR codes are deactivated unless the user pays an annual subscription of $111 to $180. If you printed materials during the trial, those codes will stop redirecting once the trial expires. Truly Free QR guarantees codes never expire, regardless of payment status.",
      },
    },
    {
      "@type": "Question",
      name: "What is Safe-Scan and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safe-Scan is an anti-phishing layer built into every dynamic QR redirect on Truly Free QR. Before completing the redirect, the system verifies the destination URL against Google Safe Browsing and checks domain reputation. Users also see a preview of the destination, so they know where the code leads before their browser navigates there. This protects against QR phishing attacks (quishing), which increased 400% between 2023 and 2025.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit the destination of a dynamic QR code after printing it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This is the primary advantage of dynamic QR codes. Because the code encodes a short redirect URL rather than the final destination, you can update the destination at any time through the dashboard. The printed code does not change — only the redirect target changes. This is essential for restaurant menus, event pages, and seasonal campaigns.",
      },
    },
  ],
}

export default function HomepageContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em", color: "#0a0f1e" }}>

        <section style={{ background: "#f7fafc", padding: "72px 24px 64px", borderTop: "1px solid #e5e9eb" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: "16px" }}>
              What Is a Dynamic QR Code
            </p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 20px", color: "#181c1e" }}>
              A QR code that works for your business, not against it
            </h2>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
              A dynamic QR code does not store the destination URL inside the pattern itself. Instead, it stores a short redirect URL hosted on a server. When someone scans the code, the server resolves the redirect and sends them to the correct destination. This architecture means you can change where the code points at any time — without reprinting anything.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
              For a restaurant, this means updating a seasonal menu without replacing printed table cards. For a real estate agent, it means updating a property listing URL after a sale. For a product manufacturer, it means linking packaging to a campaign page that changes quarterly — all with the same printed code.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "0" }}>
              Dynamic codes also collect scan analytics: how many times the code was scanned, which devices were used, what country the scans originated from, and when during the day scans peaked. This data is accessible in real time through the dashboard above — with no account required to create a code.
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "72px 24px 64px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c53030", marginBottom: "16px" }}>
              The Subscription Trap
            </p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 20px", color: "#181c1e" }}>
              Why QR codes "stop working" — and how we guarantee they never will
            </h2>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
              The leading QR code platforms use a business model known as bait-and-switch. They offer a 14-day free trial for dynamic codes. During that window, users generate codes, print them on menus, product packaging, event signs, and marketing materials. When the trial ends, the platform deactivates the codes unless the user pays an annual subscription — typically between $111 and $180 per year.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
              The cost is not the problem. The timing is. By the time the trial expires, the printed materials are already distributed. Reprinting is expensive. Businesses feel coerced into paying because the alternative is dead codes on materials they cannot easily replace. Users on Trustpilot and G2 describe the experience as "extortion" and "blackmail." The provider has leverage because your investment in printed materials creates switching costs.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
              Truly Free QR was built specifically to end this practice. Every dynamic QR code created here uses the same redirect infrastructure — but the codes are funded by Google AdSense advertising revenue, not by subscriptions. The redirect server runs on dedicated VPS infrastructure with Redis caching for sub-5ms resolution times. There is no trial period, no expiration date, and no mechanism by which a code can be deactivated due to non-payment, because payment is never requested.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75 }}>
              This is not a promotional claim — it is an architectural guarantee. The redirect layer is separated from the application layer precisely so that even in a worst-case scenario, existing codes continue to resolve.
            </p>
          </div>
        </section>

        <section style={{ background: "#f7fafc", padding: "72px 24px 64px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: "16px" }}>
              Safe-Scan Protection
            </p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 20px", color: "#181c1e" }}>
              Anti-phishing built into every redirect
            </h2>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
              QR code phishing — known as quishing — increased 400% between 2023 and 2025. Attackers place malicious QR codes over legitimate ones in restaurants, parking lots, and transit stations. Because most users cannot visually inspect a QR code before scanning, phishing via QR is significantly more effective than traditional link-based phishing.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "0" }}>
              Every redirect processed through Truly Free QR runs through Safe-Scan: a three-layer verification system that checks SSL validity, domain reputation, and the Google Safe Browsing API before completing the redirect. Users also see a destination preview screen so they can confirm where the code leads before their browser navigates there. Safe-Scan adds approximately 200ms to the first scan of a new destination, with subsequent scans cached for near-instant resolution.
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "72px 24px 64px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: "16px" }}>
              Use Cases
            </p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 32px", color: "#181c1e" }}>
              Who uses Truly Free QR
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
              {[
                { title: "Restaurants & Cafes", body: "Link table cards to live menus. Update pricing, specials, or seasonal items without reprinting. Over 52% of US restaurants have adopted QR menus." },
                { title: "Real Estate Agents", body: "Attach QR codes to For Sale signs and property flyers. Point the code to updated listing pages, virtual tours, or open house schedules." },
                { title: "Event Organizers", body: "Use QR codes on printed tickets, banners, and programs. Redirect to schedule updates, live streams, or post-event content." },
                { title: "Product Packaging", body: "Link packaging to ingredient pages, campaign videos, or warranty registration forms. Change destinations when campaigns rotate." },
                { title: "Business Cards & vCards", body: "Encode your contact information as a vCard QR. Recipients scan and save — no app required. Update contact details without new cards." },
                { title: "WiFi Access", body: "Share WiFi credentials via QR code. Guests scan to connect without seeing or typing passwords. Update credentials and regenerate as needed." },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: "#f7fafc", borderRadius: "8px", padding: "24px" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ fontSize: "14px", color: "#4a5568", lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f7fafc", padding: "72px 24px 80px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: "16px" }}>
              FAQ
            </p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 40px", color: "#181c1e" }}>
              Frequently asked questions
            </h2>
            <div style={{ display: "grid", gap: "32px" }}>
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} style={{ borderBottom: "1px solid #e5e9eb", paddingBottom: "32px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 10px" }}>{item.name}</h3>
                  <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "48px", textAlign: "center" }}>
              <p style={{ fontSize: "14px", color: "#718096", marginBottom: "12px" }}>
                Want to understand the technical details?
              </p>
              <Link href="/blog/dynamic-vs-static-qr-codes" style={{ color: "#0058c3", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                Read: Dynamic vs Static QR Codes — Complete Technical Guide →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
