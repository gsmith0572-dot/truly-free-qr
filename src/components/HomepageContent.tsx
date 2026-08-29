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
        text: "Yes. Every dynamic QR code you create on Truly Free QR stays active permanently at no cost. We fund operations through display advertising, not subscriptions. Your code will not be deactivated if you do not pay — because there is nothing to pay.",
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

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://trulyfreeqr.com/",
  name: "Truly Free QR — Free Dynamic QR Code Generator",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".aeo-capsule", ".aeo-answer"],
  },
}

export default function HomepageContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
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
            <div className="aeo-capsule" style={{ background: "#f0f4ff", borderLeft: "4px solid #2563eb", borderRadius: 8, padding: "24px 28px", marginBottom: "24px" }}>
              <p className="aeo-answer" style={{ fontSize: "16px", color: "#181c1e", lineHeight: 1.75, margin: 0, fontWeight: 500 }}>
                A dynamic QR code stores a short redirect link instead of your destination URL, so you can change where it points at any time without reprinting. Truly Free QR generates dynamic codes with no account, no expiration, and no subscription — plus real-time scan analytics (device, country, time of day) and built-in Safe-Scan phishing protection, all funded by advertising rather than fees.
              </p>
            </div>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
              Restaurant? Update your menu without reprinting 200 table cards. Real estate? Point the code on a For Sale sign to the new listing when a property changes. Product packaging? Swap the campaign link quarterly without a new print run. One code, endless flexibility.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "0" }}>
              Dynamic codes also track scans — device type, country, time of day, total count. You can see it all in the dashboard above. And you don't need an account to create a code to get any of this.
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
              Here's how the big QR platforms work: they give you a 14-day free trial. You generate codes, print them on menus, signs, and packaging. The trial ends. They deactivate your codes. Pay up or your materials are dead. Subscriptions run $111 to $180 per year.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
              The price isn't even the main issue. The timing is. By the time your trial runs out, those materials are already in the field. Reprinting costs money. You either pay or you leave dead codes on everything you printed. Trustpilot and G2 reviews use words like "extortion" and "blackmail." Those reviews are right.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
              Truly Free QR was built specifically to end this practice. Every dynamic QR code created here uses the same redirect infrastructure — but the codes are free because the service is ad-supported, not subscription-based. The redirect server runs on dedicated VPS infrastructure with Redis caching for sub-5ms resolution times. There is no trial period, no expiration date, and no mechanism by which a code can be deactivated due to non-payment, because payment is never requested.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75 }}>
              That's not a marketing promise. It's how the system is built. The redirect infrastructure is separate from the application layer — specifically so that codes keep working even if something goes wrong on the app side.
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
              QR phishing — quishing — jumped 400% between 2023 and 2025. The attack is simple: stick a malicious code over a legitimate one in a restaurant, parking lot, or transit station. People scan without thinking. You can't visually inspect a QR code the way you can hover over a link.
            </p>
            <p style={{ fontSize: "16px", color: "#4a5568", lineHeight: 1.75, marginBottom: "0" }}>
              Every redirect through Truly Free QR goes through Safe-Scan first: SSL check, domain reputation check, Google Safe Browsing check — all three before the redirect completes. Scanners also see a preview of where they're going before their browser navigates there. First scan of a new destination adds about 200ms. After that, it's cached and near-instant.
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
                  <p className="aeo-answer" style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
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
