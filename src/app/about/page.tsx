import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Truly Free QR — Built by George Smith, Klickify Agency",
  description: "Truly Free QR was built by George Smith, founder of Klickify Agency, to end the 14-day QR bait-and-switch. Dynamic QR codes that never expire. No subscription. No blackmail.",
  alternates: { canonical: "https://trulyfreeqr.com/about" },
};

export default function AboutPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em", color: "#0a0f1e", overflowX: "hidden" }}>
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
              <Image src="/george-smith.png" alt="George Smith — Founder of Klickify Agency" width={120} height={120} style={{ borderRadius: "50%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "8px" }}>THE FOUNDER</div>
              <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 4px" }}>George Smith</h2>
              <p style={{ fontSize: "14px", color: "#0058c3", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 16px" }}>Founder, Klickify Agency</p>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 0 12px" }}>I built Truly Free QR after watching small business owners get burned by QR generators that deactivate codes after 14 days unless you pay over $100 a year. I had already printed menus, flyers, and packaging. The code stopped working. The provider wanted an annual subscription to turn it back on.</p>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 0 20px" }}>That felt like blackmail. So I built the alternative: dynamic QR codes that never expire, funded by Google AdSense instead of subscriptions. Free forever. No tricks.</p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="mailto:george@klickifyagency.com" style={{ fontSize: "13px", color: "#718096", textDecoration: "none", letterSpacing: "-0.01em" }}>george@klickifyagency.com</a>
                <a href="https://www.linkedin.com/in/george-smith-832113217/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#0058c3", fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em" }}>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "32px" }}>OUR PRINCIPLES</div>
          <div style={{ display: "grid", gap: "32px" }}>
            <div><h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 8px" }}>No expiration. Ever.</h3><p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>Every dynamic QR code created on Truly Free QR stays active permanently. We make money through advertising, not by holding your codes hostage.</p></div>
            <div><h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 8px" }}>No account required.</h3><p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>Generate, customize, and download QR codes instantly. We do not ask for your email address, your credit card, or your personal information.</p></div>
            <div><h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 8px" }}>Safe-Scan protection.</h3><p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>Every redirect is screened against Google Safe Browsing. Users can preview the destination before the redirect completes — protection against QR phishing that most generators ignore.</p></div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "16px" }}>CONTACT</div>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", marginBottom: "16px" }}>Questions, feedback, or partnership inquiries:</p>
          <a href="mailto:george@klickifyagency.com" style={{ color: "#0058c3", fontWeight: 600, textDecoration: "none", fontSize: "16px" }}>george@klickifyagency.com</a>
        </div>
      </section>
    </main>
  );
}
