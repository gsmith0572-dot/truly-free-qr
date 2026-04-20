import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Truly Free QR — Precision QR Infrastructure",
  description:
    "Truly Free QR was built to end the 14-day bait-and-switch. Dynamic QR codes that never expire, no subscription, no blackmail. Built by Klickify Agency.",,
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon-512.png?v=3",
  },
};

export default function AboutPage() {
  return (
    <main
      style={{
        fontFamily: "'Inter', sans-serif",
        letterSpacing: "-0.02em",
        color: "#0a0f1e",
        overflowX: "hidden",
      }}
    >
      <section style={{ background: "#ffffff", padding: "96px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: "20px" }}>
            About Truly Free QR
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.04em", margin: "0 0 24px", color: "#0a0f1e" }}>
            We built the tool we<br />wished existed.
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.65, color: "#4a5568", maxWidth: "580px", margin: "0 auto" }}>
            After watching thousands of businesses discover their printed QR codes stopped working — held hostage by 14-day trials — we decided to build something different.
          </p>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", width: "32px", height: "3px", background: "linear-gradient(135deg, #0058c3, #0070f3)", borderRadius: "2px", marginBottom: "20px" }} />
          <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "16px", color: "#0a0f1e" }}>The Mission</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#4a5568", maxWidth: "640px" }}>
            The QR code industry runs on a predatory model: offer a &ldquo;free&rdquo; dynamic code, wait until it&rsquo;s printed on restaurant menus, product packaging, and event signage, then deactivate it. Pay $111–$180 per year or your materials become worthless.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#4a5568", marginTop: "16px", maxWidth: "640px" }}>
            Truly Free QR exists to end that model. Every dynamic QR code we generate stays active permanently. We monetize through advertising, not through your data or your desperation.
          </p>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", width: "32px", height: "3px", background: "linear-gradient(135deg, #0058c3, #0070f3)", borderRadius: "2px", marginBottom: "20px" }} />
          <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "16px", color: "#0a0f1e" }}>The Entity</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#4a5568", maxWidth: "640px" }}>
            Truly Free QR is an initiative of <strong style={{ color: "#0a0f1e", fontWeight: 600 }}>Klickify Agency</strong>, engineered as a precision instrument for professionals — restaurateurs, real estate agents, event coordinators, product marketers — who need infrastructure they can trust without a recurring invoice.
          </p>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", width: "32px", height: "3px", background: "linear-gradient(135deg, #0058c3, #0070f3)", borderRadius: "2px", marginBottom: "20px" }} />
          <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "24px", color: "#0a0f1e" }}>Technical Superiority</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {[
              { metric: "<5ms", label: "Redirect Latency", desc: "VPS + Redis cache layer" },
              { metric: "99.9%", label: "Uptime SLA", desc: "PostgreSQL + redundant routing" },
              { metric: "∞", label: "Code Lifespan", desc: "No expiration. Ever." },
            ].map((item) => (
              <div key={item.metric} style={{ background: "#ffffff", borderRadius: "8px", padding: "24px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.04em", background: "linear-gradient(135deg, #0058c3, #0070f3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "4px" }}>
                  {item.metric}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#0a0f1e", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "13px", color: "#718096" }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#4a5568", maxWidth: "640px" }}>
            Our infrastructure runs on a dedicated VPS with Redis for sub-5ms redirect resolution and PostgreSQL for durable storage of dynamic link targets and scan analytics.
          </p>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", width: "32px", height: "3px", background: "linear-gradient(135deg, #0058c3, #0070f3)", borderRadius: "2px", marginBottom: "20px" }} />
          <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "16px", color: "#0a0f1e" }}>The Ethical Commitment</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#4a5568", maxWidth: "640px" }}>
            We make one guarantee in writing: <strong style={{ color: "#0a0f1e" }}>your dynamic QR codes will never be deactivated</strong> due to non-payment, because there is no payment.
          </p>
          <div style={{ marginTop: "40px", padding: "24px 28px", background: "#f0f7ff", borderRadius: "8px", borderLeft: "4px solid #0058c3" }}>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#0a0f1e", fontWeight: 500, margin: 0 }}>
              &ldquo;We will never deactivate a QR code due to billing. Static codes are free forever. Dynamic codes redirect forever. This is our written commitment to every user of this platform.&rdquo;
            </p>
            <p style={{ fontSize: "13px", color: "#4a5568", marginTop: "12px", marginBottom: 0 }}>
              — Klickify Agency, founders of Truly Free QR
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #0058c3 0%, #0070f3 100%)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "16px" }}>
            Questions or feedback?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", marginBottom: "32px" }}>
            We&rsquo;re a small team that reads every message.
          </p>
          <a href="/contact" style={{ display: "inline-block", padding: "14px 32px", background: "#ffffff", color: "#0058c3", borderRadius: "6px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
            Contact Us →
          </a>
        </div>
      </section>
    </main>
  );
}
