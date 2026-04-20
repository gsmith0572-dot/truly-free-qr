import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Truly Free QR',
  description: 'Truly Free QR privacy policy. No account required, no email collected, no personal data stored on our servers. Your QR codes are saved privately in your browser.',
  alternates: { canonical: 'https://trulyfreeqr.com/privacy-policy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.png" alt="TrulyFreeQR" style={{height:44,width:'auto'}} />
        </Link>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link href="/terms-of-service" style={{ fontSize: 13, color: '#4a5568', textDecoration: 'none', fontWeight: 500 }}>Terms of Service</Link>
          <Link href="/" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '8px 16px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Generate Free QR →</Link>
        </div>
      </nav>

      <div style={{ maxWidth: 740, margin: '0 auto', padding: '48px 24px 80px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 12 }}>Legal Document</div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 12px' }}>Privacy Policy</h1>
          <p style={{ fontSize: 13, color: '#718096', margin: 0 }}>Truly Free QR — Precision Instruments · Last updated: April 9, 2026</p>
        </div>

        <div style={{ background: 'rgba(0,88,195,0.06)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 8, padding: '16px 20px', marginBottom: 40 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#0058c3', marginBottom: 6 }}>✦ Our Core Privacy Commitment</div>
          <p style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7, margin: 0 }}>Truly Free QR does not require an account, email address, or any personal information to use any feature of this service. Your QR codes are stored privately in your browser. We do not sell, rent, or trade your data — ever.</p>
        </div>

        {[
          {
            label: '1. Who We Are',
            content: `Truly Free QR ("we," "our," or "us") is a free QR code generation service operated by Klickify Agency. Our registered domain is trulyfreeqr.com. Our redirect infrastructure operates at trulyfreeqr.link. We can be contacted at privacy@trulyfreeqr.com.`
          },
          {
            label: '2. Data We Do Not Collect',
            content: `We do not collect your name, email address, phone number, or any personally identifiable information. We do not require account registration of any kind. We do not store passwords. We do not sell your data to third parties. We do not use your data for advertising targeting beyond what Google AdSense automatically manages through its own systems.`
          },
          {
            label: '3. No-Account Architecture',
            content: `Truly Free QR is built on a zero-registration architecture. When you generate a QR code, your code data is stored in your browser's localStorage — a private, client-side database that never leaves your device without your explicit action. Your personal dashboard is constructed from this local data. No server-side user profile is created when you use our service without explicitly saving a dynamic code.`
          },
          {
            label: '4. Dynamic QR Code Data',
            content: `When you create a dynamic QR code, the following information is stored on our servers to enable the redirect service: a randomly generated short ID (e.g., "ab3k9"), your destination URL, the date of creation, an optional project name and category you provide, and an anonymous session token generated in your browser. This data is stored in a PostgreSQL database on our dedicated VPS server. No name, email, or personally identifiable information is associated with this data.`
          },
          {
            label: '5. Scan Analytics and IP Anonymization',
            content: `When a user scans your dynamic QR code, our redirect server temporarily processes the following data to generate analytics: the IP address of the scanner (used only to determine approximate country and city), the user-agent string (used to determine device type and operating system), and the timestamp of the scan. IP addresses are hashed using SHA-256 with a rotating salt within 60 seconds of processing and are never stored in raw form. We cannot reconstruct original IP addresses from stored data. Country and city data is derived from the IP before anonymization and stored as geographic metadata only.`
          },
          {
            label: '6. Google AdSense and Third-Party Cookies',
            content: `Truly Free QR uses Google AdSense to display non-intrusive advertisements. Google AdSense uses cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and other sites on the internet. You may opt out of personalized advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. We have no control over the cookies set by Google AdSense. For more information on Google's privacy practices, visit https://policies.google.com/privacy.`
          },
          {
            label: '7. Ads.txt',
            content: `In compliance with Google AdSense requirements, we maintain an ads.txt file at https://trulyfreeqr.com/ads.txt authorizing Google LLC (pub-8680464039127093) as a direct seller of advertising on our domain. This file is publicly accessible and required for advertising transparency.`
          },
          {
            label: '8. Cookies We Set',
            content: `Truly Free QR sets the following first-party browser storage: localStorage entries for your QR code dashboard, session token, and last-generated code state. These are not cookies transmitted to our servers — they are client-side only. We do not set tracking cookies. Third-party cookies from Google AdSense may be set in accordance with Google's own cookie policy.`
          },
          {
            label: '9. Data Retention',
            content: `Dynamic QR code redirect data (short ID and destination URL) is retained indefinitely to ensure permanent code functionality — this is our core service promise. Scan event data (anonymized geographic and device metadata) is retained for 24 months to provide analytics to code owners. Browser localStorage data is retained until you clear your browser data. We do not automatically delete QR codes due to inactivity.`
          },
          {
            label: '10. Your Rights',
            content: `You have the right to request deletion of any dynamic QR code and its associated anonymized analytics data by contacting us at privacy@trulyfreeqr.com with the short ID of the code. Because we do not store email addresses, deletion requests must include the short ID. You have the right to know what data is associated with a specific short ID. If you are located in the European Economic Area, United Kingdom, or California, you may have additional rights under GDPR, UK GDPR, or CCPA respectively.`
          },
          {
            label: '11. Security',
            content: `All data transmission between your browser and our servers is encrypted via HTTPS. Our redirect infrastructure operates on a dedicated VPS with firewall rules restricting unauthorized access. Redis cache entries use time-limited expiration. PostgreSQL access is restricted to application-level credentials with minimum required privileges. IP addresses are hashed immediately upon processing — raw IPs are never written to persistent storage.`
          },
          {
            label: '12. Children',
            content: `Truly Free QR is not directed at children under the age of 13. We do not knowingly collect any information from children. If you believe a child has provided information through our service, contact us at privacy@trulyfreeqr.com.`
          },
          {
            label: '13. Changes to This Policy',
            content: `We may update this Privacy Policy to reflect changes in our practices or legal requirements. The date at the top of this page indicates the last update. Continued use of the service after changes constitutes acceptance of the updated policy.`
          },
          {
            label: '14. Contact',
            content: `For privacy-related questions or data deletion requests, contact us at privacy@trulyfreeqr.com. We respond to all requests within 30 days.`
          },
        ].map(({ label, content }) => (
          <div key={label} style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 8 }}>{label}</div>
            <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.8, margin: 0 }}>{content}</p>
          </div>
        ))}

        <div style={{ background: '#f1f4f6', borderRadius: 8, padding: '16px 20px', marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 12, color: '#718096' }}>Also read our Terms of Service</span>
          <Link href="/terms-of-service" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '8px 16px', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>Terms of Service →</Link>
        </div>
      </div>

      <footer style={{ background: '#fff', borderTop: '1px solid rgba(74,85,104,0.15)', padding: '20px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: '#718096' }}>
          © 2026 Truly Free QR · Built by <a href="https://klickifyagency.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0058c3', fontWeight: 600, textDecoration: 'none' }}>Klickify Agency</a>
        </div>
      </footer>
    </div>
  )
}
