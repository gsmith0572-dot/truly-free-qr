"use client";
import Link from "next/link";

import { useState } from "react";

type FormState = "idle" | "sending" | "sent";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  fontSize: "15px",
  fontFamily: "'Inter', sans-serif",
  letterSpacing: "-0.01em",
  color: "#0a0f1e",
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "6px",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.02em",
  color: "#4a5568",
  marginBottom: "8px",
  textTransform: "uppercase",
};

export default function ContactPage() {
  const [subject, setSubject] = useState("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("sent");
  };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em", color: "#0a0f1e" }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 24px', display: 'flex', alignItems: 'center', height: 64, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo.png" alt="TrulyFreeQR" style={{ height: 44, width: 'auto' }} />
        </Link>
      </nav>
      <section style={{ background: "#ffffff", padding: "96px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: "20px" }}>
            Support Center
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.04em", margin: "0 0 20px", color: "#0a0f1e" }}>
            Talk to a real person.
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.65, color: "#4a5568", maxWidth: "480px", margin: "0 auto" }}>
            Unlike competitors who route every issue through AI chatbots, we prioritize human support for technical errors and security reports.
          </p>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "64px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {[
            { icon: "⚡", title: "Technical Support", desc: "QR redirect issues, scan analytics errors, export problems." },
            { icon: "🛡️", title: "Security & Safe-Scan", desc: "Report a malicious URL embedded in a QR code. We investigate within 24h." },
            { icon: "📋", title: "General Inquiry", desc: "Questions about our platform, business use cases, or the project." },
          ].map((card) => (
            <div key={card.title} style={{ background: "#ffffff", borderRadius: "8px", padding: "28px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>{card.icon}</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "8px", color: "#0a0f1e" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#718096", margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", width: "32px", height: "3px", background: "linear-gradient(135deg, #0058c3, #0070f3)", borderRadius: "2px", marginBottom: "20px" }} />
          <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "8px", color: "#0a0f1e" }}>Send us a message</h2>
          <p style={{ fontSize: "15px", color: "#718096", marginBottom: "40px" }}>We read every message. Typical response time: under 24 hours.</p>

          {formState === "sent" ? (
            <div style={{ padding: "40px", background: "#f0f7ff", borderRadius: "8px", textAlign: "center", border: "1px solid #bee3f8" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>✓</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0a0f1e", marginBottom: "8px" }}>Message received</h3>
              <p style={{ fontSize: "15px", color: "#4a5568" }}>We&rsquo;ll get back to you within 24 hours at {email}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "24px" }}>
                <label style={labelStyle}>Topic</label>
                <select value={subject} onChange={(e) => setSubject(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="security">Security / Malicious URL Report</option>
                  <option value="feedback">Product Feedback</option>
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={subject === "security" ? "Paste the malicious URL and describe the suspected threat..." : "Describe your issue or question in detail..."}
                  rows={6}
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                />
              </div>

              {subject === "security" && (
                <div style={{ padding: "16px 20px", background: "#fff5f5", borderRadius: "6px", border: "1px solid #fed7d7", marginBottom: "24px" }}>
                  <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#c53030", margin: 0, fontWeight: 500 }}>
                    🛡️ Security reports are reviewed within 24 hours. Malicious redirect links are deactivated immediately upon verification.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === "sending"}
                style={{ width: "100%", padding: "15px 32px", background: formState === "sending" ? "#a0aec0" : "linear-gradient(135deg, #0058c3 0%, #0070f3 100%)", color: "#ffffff", border: "none", borderRadius: "6px", fontSize: "15px", fontWeight: 600, fontFamily: "'Inter', sans-serif", letterSpacing: "-0.01em", cursor: formState === "sending" ? "not-allowed" : "pointer" }}
              >
                {formState === "sending" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "64px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ padding: "32px", background: "#ffffff", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: "36px", flexShrink: 0 }}>🛡️</div>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#0a0f1e", marginBottom: "10px" }}>Safe-Scan Reporting</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4a5568", marginBottom: "12px" }}>
                Found a QR code redirecting to a phishing page? Report it here. We deactivate confirmed malicious links within 24 hours.
              </p>
              <p style={{ fontSize: "13px", color: "#718096", margin: 0 }}>
                QR phishing grew 400% between 2023–2025. Select <strong>Security / Malicious URL Report</strong> in the form above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
