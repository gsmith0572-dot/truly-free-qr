import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Truly Free QR | Built by George Smith, Klickify Agency",
  description: "Truly Free QR was built by George Smith, founder of Klickify Agency, to end the 14-day QR bait-and-switch. Learn how the platform works, why it is permanently free, and what Safe-Scan protection means for your business.",
  alternates: { canonical: "https://trulyfreeqr.com/about" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Truly Free QR",
  url: "https://trulyfreeqr.com",
  logo: "https://trulyfreeqr.com/logo.png",
  founder: {
    "@type": "Person",
    name: "George Smith",
    url: "https://www.linkedin.com/in/george-smith-832113217/",
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "Klickify Agency",
    },
  },
  description: "Free dynamic QR code generator with no expiration, no account required, and Safe-Scan anti-phishing protection built in.",
  foundingDate: "2025",
  sameAs: ["https://www.linkedin.com/in/george-smith-832113217/"],
};

export default function AboutPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em", color: "#0a0f1e", overflowX: "hidden" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section style={{ background: "#ffffff", padding: "96px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: "20px" }}>About Truly Free QR</p>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 24px", color: "#181c1e" }}>Built to end the QR bait-and-switch</h1>
          <p style={{ fontSize: "18px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 auto", maxWidth: "600px" }}>Dynamic QR codes that never expire. No subscription. No 14-day trial. No blackmail.</p>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ flexShrink: 0 }}>
              <Image src="/george-smith.png" alt="George Smith — Founder of Klickify Agency and Truly Free QR" width={120} height={120} style={{ borderRadius: "50%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "8px" }}>THE FOUNDER</div>
              <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 4px" }}>George Smith</h2>
              <p style={{ fontSize: "14px", color: "#0058c3", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 16px" }}>Founder, Klickify Agency</p>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 0 12px" }}>I built Truly Free QR after watching small business owners get burned by QR generators that deactivate codes after 14 days unless you pay over $100 a year. I had already printed menus, flyers, and packaging. The code stopped working. The provider wanted an annual subscription to turn it back on.</p>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 0 12px" }}>That felt like blackmail. So I built the alternative: dynamic QR codes that never expire, free forever. No subscriptions. No tricks.</p>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 0 20px" }}>Klickify Agency is my digital product studio focused on building ethical, ad-supported utility tools that solve real problems without extracting money from the people who can least afford it. Truly Free QR is the first product in that portfolio.</p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="mailto:info@klickifyagency.com" style={{ fontSize: "13px", color: "#718096", textDecoration: "none", letterSpacing: "-0.01em" }}>info@klickifyagency.com</a>
                <a href="https://www.linkedin.com/in/george-smith-832113217/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#0058c3", fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em" }}>LinkedIn →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "20px" }}>THE PROBLEM WE SOLVE</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 20px" }}>How QR code providers trap small businesses</h2>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
            The dominant QR code platforms — with Domain Ratings above 70 and millions of monthly visitors — all share the same business model. They offer a free trial, typically 14 days, for dynamic QR codes. During the trial, users generate codes and deploy them on printed materials: restaurant table cards, product packaging, real estate signs, event flyers.
          </p>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
            When the trial ends, the platform deactivates the codes. The redirect engine stops resolving. Any code already printed on physical materials becomes a dead link. The cost to reprint is often higher than the annual subscription — which creates leverage. Users pay not because the product delivers value proportional to the price, but because they have no other option once they have committed to printed materials.
          </p>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "0" }}>
            Sentiment analysis across Trustpilot and G2 reviews for the top QR platforms shows users repeatedly using the words "blackmail" and "extortion." The industry has a user satisfaction problem it has chosen to monetize rather than solve. Truly Free QR exists to solve it.
          </p>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "20px" }}>TECHNICAL ARCHITECTURE</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 20px" }}>How the platform stays free and fast</h2>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
            Truly Free QR runs on a decoupled architecture designed for low latency and high availability. The frontend is a Next.js application deployed on Vercel, handling the QR generator interface, the analytics dashboard, and all content pages. The redirect engine runs separately on a dedicated VPS with Redis caching, achieving redirect resolution times under 5 milliseconds.
          </p>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>
            The separation is intentional and critical. It means that even if the frontend application were taken offline for maintenance, all existing dynamic QR codes would continue to resolve correctly. The redirect infrastructure is operationally independent, and its uptime is monitored in real time.
          </p>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "0" }}>
            Safe-Scan — the anti-phishing layer — runs inline with every redirect. Before the redirect completes, the system performs three checks: SSL certificate validity, domain reputation against a threat intelligence database, and a lookup against the Google Safe Browsing API. QR phishing attacks (quishing) increased 400% between 2023 and 2025. Safe-Scan is our answer to that threat.
          </p>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "32px" }}>OUR PRINCIPLES</div>
          <div style={{ display: "grid", gap: "32px" }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 8px" }}>No expiration. Ever.</h3>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>Every dynamic QR code created on Truly Free QR stays active permanently. We make money through advertising, not by holding your codes hostage. The business model funds the infrastructure; the infrastructure does not depend on your continued payment.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 8px" }}>No account required.</h3>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>Generate, customize, and download QR codes instantly. We do not ask for your email address, your credit card, or your personal information. The tool works from the moment you land on the page. No registration wall, no onboarding sequence.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 8px" }}>Safe-Scan protection.</h3>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>Every redirect is screened against Google Safe Browsing. Users see a destination preview before the redirect completes — protection against QR phishing that most generators ignore entirely.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 8px" }}>Transparent monetization.</h3>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>The platform is ad-supported. Display ads appear on non-critical pages: the dashboard, success pages, and content pages. The generation flow and the redirect engine are ad-free. The service earns through advertising, not subscriptions.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "16px" }}>CONTACT</div>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", marginBottom: "8px" }}>Questions, feedback, or partnership inquiries:</p>
          <a href="mailto:info@klickifyagency.com" style={{ color: "#0058c3", fontWeight: 600, textDecoration: "none", fontSize: "16px" }}>info@klickifyagency.com</a>
          <p style={{ fontSize: "13px", color: "#718096", marginTop: "8px" }}>Typical response time: 24–48 hours.</p>
        </div>
      </section>
    </main>
  );
}
