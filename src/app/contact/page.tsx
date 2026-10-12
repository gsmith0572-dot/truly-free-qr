"use client";
import Link from "next/link";

import { useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

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

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#0058c3",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function ToolIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ShieldIcon({ size = 28 }: { size?: number }) {
  return (
    <svg {...iconProps} width={size} height={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

const quickAnswers: { q: string; a: React.ReactNode }[] = [
  {
    q: "My QR code does not scan.",
    a: (
      <>
        Check contrast first: a dark code on a light background, with a blank margin around it. Then size: print it at least about 2 cm (0.75 in) wide, and larger for posters or anything scanned from a distance. Glossy or curved surfaces reflect light, so a matte print scans more reliably. The{" "}
        <Link href="/blog/qr-code-size-guide-minimum-size-for-print-fabric-and-outdoor" style={{ color: "#0058c3" }}>size guide</Link> has the numbers.
      </>
    ),
  },
  {
    q: "I changed the link, but my printed code still goes to the old page.",
    a: "Only dynamic codes can be re-pointed. In the generator, enter a URL or PDF and click Make Dynamic (Free): the code image then carries a short link, and you can change its destination any time under My QR Codes. Codes downloaded from the generator before the October 2026 update point straight at their destination and cannot be changed. If you used Make Dynamic back then, open My QR Codes and download the PNG from there: that image is the dynamic one.",
  },
  {
    q: "I lost my list of codes, or I want to edit from another device.",
    a: "There are no accounts. Your list of codes, and the key that lets you edit them, live in the browser where you made them. Use the same browser and device, and avoid clearing site data. If you clear it, the list disappears and the codes can no longer be edited from that browser, but the printed codes keep working.",
  },
  {
    q: "Why was my link refused?",
    a: "Safe-Scan only accepts https links. It also rejects URL shorteners (bit.ly, tinyurl.com, youtu.be, wa.me and similar), because their final destination cannot be verified, and a small set of high-risk address patterns. Paste the full destination link instead.",
  },
  {
    q: "My PDF will not upload.",
    a: "PDF files only, up to 20 MB. If it still fails, host the file somewhere else and paste its link instead.",
  },
];

export default function ContactPage() {
  const [subject, setSubject] = useState("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em", color: "#0a0f1e" }}>
      <section style={{ background: "#ffffff", padding: "96px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: "20px" }}>
            Support Center
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.04em", margin: "0 0 20px", color: "#0a0f1e" }}>
            Talk to a real person.
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.65, color: "#4a5568", maxWidth: "480px", margin: "0 auto" }}>
            Your message goes to the person who runs the site, not to a chatbot. Technical errors and security reports get read first.
          </p>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "64px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {[
            { icon: <ToolIcon />, title: "Technical Support", desc: "QR redirect issues, scan analytics errors, export problems." },
            { icon: <ShieldIcon />, title: "Security & Safe-Scan", desc: "Report a malicious URL embedded in a QR code. We investigate within 24h." },
            { icon: <ChatIcon />, title: "General Inquiry", desc: "Questions about our platform, business use cases, or the project." },
          ].map((card) => (
            <div key={card.title} style={{ background: "#ffffff", borderRadius: "8px", padding: "28px", border: "1px solid #e2e8f0" }}>
              <div style={{ marginBottom: "12px" }}>{card.icon}</div>
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
          <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#718096", marginBottom: "40px" }}>
            We read every message. Typical response time: 24–48 hours, and security reports within 24 hours. Prefer email? Write to{" "}
            <a href="mailto:info@klickifyagency.com" style={{ color: "#0058c3", fontWeight: 600, textDecoration: "none" }}>info@klickifyagency.com</a>.
          </p>

          {formState === "sent" ? (
            <div style={{ padding: "40px", background: "#f0f7ff", borderRadius: "8px", textAlign: "center", border: "1px solid #bee3f8" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>✓</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0a0f1e", marginBottom: "8px" }}>Message received</h3>
              <p style={{ fontSize: "15px", color: "#4a5568" }}>We&rsquo;ll reply to {email} as soon as we can, usually within one or two business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {formState === "error" && (
                <div style={{ padding: "16px 20px", background: "#fff5f5", borderRadius: "6px", border: "1px solid #fed7d7", marginBottom: "24px" }}>
                  <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#c53030", margin: 0, fontWeight: 500 }}>
                    Something went wrong sending your message. Please try again.
                  </p>
                </div>
              )}
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
                    Security reports are reviewed within 24 hours. Malicious redirect links are deactivated immediately upon verification.
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
          <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.03em", margin: "0 0 24px", color: "#0a0f1e" }}>Quick answers</h2>
          {quickAnswers.map((item) => (
            <div key={item.q} style={{ background: "#ffffff", borderRadius: "8px", padding: "22px 24px", border: "1px solid #e2e8f0", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 8px", color: "#0a0f1e" }}>{item.q}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4a5568", margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "64px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ padding: "32px", background: "#f7fafc", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flexShrink: 0 }}>
              <ShieldIcon size={36} />
            </div>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#0a0f1e", marginBottom: "10px" }}>Safe-Scan Reporting</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4a5568", marginBottom: "12px" }}>
                Found a QR code redirecting to a phishing page? Report it here. We deactivate confirmed malicious links within 24 hours.
              </p>
              <p style={{ fontSize: "13px", color: "#718096", margin: 0 }}>
                QR phishing keeps growing; the <Link href="/blog/qr-code-phishing-protection" style={{ color: "#0058c3" }}>numbers and sources</Link> are in our guide. Select <strong>Security / Malicious URL Report</strong> in the form above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
