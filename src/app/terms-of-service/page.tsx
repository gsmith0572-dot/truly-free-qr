import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Truly Free QR',
  description: 'Truly Free QR terms of service. Dynamic QR codes never expire. No subscription traps. Safe-Scan protection on all codes. Read our ethical service commitment.',
  alternates: { canonical: 'https://trulyfreeqr.com/terms-of-service' },
  robots: { index: true, follow: true },
}

export default function TermsOfService() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#f7fafc', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid rgba(74,85,104,0.15)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.png" alt="TrulyFreeQR" style={{height:44,width:'auto'}} />
        </Link>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link href="/privacy-policy" style={{ fontSize: 13, color: '#4a5568', textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</Link>
          <Link href="/" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '8px 16px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Generate Free QR →</Link>
        </div>
      </nav>

      <div style={{ maxWidth: 740, margin: '0 auto', padding: '48px 24px 80px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 12 }}>Legal Document</div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', margin: '0 0 12px' }}>Terms of Service</h1>
          <p style={{ fontSize: 13, color: '#718096', margin: 0 }}>Truly Free QR — Precision Instruments · Last updated: April 9, 2026</p>
        </div>

        <div style={{ background: 'rgba(0,88,195,0.06)', border: '1px solid rgba(0,88,195,0.2)', borderRadius: 8, padding: '16px 20px', marginBottom: 40 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#0058c3', marginBottom: 6 }}>✦ Our Ethical Service Promise</div>
          <p style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.7, margin: 0 }}>Truly Free QR guarantees that dynamic QR codes created on this platform will never be deactivated due to non-payment, trial expiration, or subscription status. Unlike industry-standard 14-day trial models, our codes are permanently active. This is a binding service commitment, not a marketing claim.</p>
        </div>

        {[
          {
            label: '1. Acceptance of Terms',
            content: `By accessing or using Truly Free QR at trulyfreeqr.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use this service. These terms apply to all visitors, users, and others who access or use the service.`
          },
          {
            label: '2. Description of Service',
            content: `Truly Free QR provides a free QR code generation service that includes: static QR code generation and download, dynamic QR code creation with permanent redirect infrastructure, real-time scan analytics, and a browser-based anonymous dashboard. The service is monetized exclusively through Google AdSense advertising. There are no subscription tiers, no premium plans, and no paid features.`
          },
          {
            label: '3. The No-Expiration Guarantee',
            content: `Dynamic QR codes created on Truly Free QR will not be deactivated, expired, or disabled due to: the passage of time, the absence of a subscription or payment, inactivity of the code, or any change in our business model. This guarantee is a core term of this service agreement. The only circumstances under which a dynamic QR code may be deactivated are: a user-initiated deletion request, a violation of our Acceptable Use Policy (Section 6), a court order or legal requirement, or a confirmed Safe-Scan security threat associated with the destination URL.`
          },
          {
            label: '4. Comparison to Industry Standard',
            content: `We explicitly acknowledge the following industry practice that Truly Free QR rejects: many QR code generators offer dynamic codes free for 14 days, then deactivate those codes to compel subscription payments. Users who have already printed codes on physical materials are effectively required to pay or lose their investment. Truly Free QR does not practice this model. Our service is free at the point of use and remains free permanently. We disclose this comparison not as marketing but as a material term of service that distinguishes our obligations from those of other providers.`
          },
          {
            label: '5. Safe-Scan Security Commitment',
            content: `Truly Free QR includes Safe-Scan protection on all dynamic codes. Before executing a redirect, our system verifies the destination URL against threat intelligence databases. Users are provided the ability to preview the destination URL before being redirected. We reserve the right to deactivate any dynamic QR code whose destination URL is confirmed as a phishing site, malware distributor, or other security threat — without prior notice. This is the only circumstance under which we may deactivate a code without user consent. Deactivated codes due to security threats will display a Safe-Scan warning page rather than executing the redirect.`
          },
          {
            label: '6. Acceptable Use Policy',
            content: `You may not use Truly Free QR to create QR codes that redirect to: phishing websites or credential harvesting pages, malware or ransomware distribution, spam or unsolicited commercial messages, illegal content under applicable law, content that violates the rights of third parties, or material that violates Google AdSense content policies. Violations of this policy may result in immediate deactivation of associated QR codes and permanent termination of access to the service. We reserve the right to report confirmed violations to relevant authorities.`
          },
          {
            label: '7. Ownership and Intellectual Property',
            content: `You retain full ownership of your destination URLs and the content to which your QR codes point. Truly Free QR claims no ownership over your content. Truly Free QR owns the redirect infrastructure, including the trulyfreeqr.link domain and all associated short IDs. The short ID assigned to your dynamic QR code is a service-provided identifier — it is not transferable and does not constitute intellectual property of the user. You may not attempt to reverse-engineer, scrape, or systematically harvest our redirect infrastructure.`
          },
          {
            label: '8. Analytics Data Ownership',
            content: `Scan analytics data generated by your dynamic QR codes — including scan counts, geographic distribution, and device data — is your operational data. We provide this data to you through our analytics dashboard. We use aggregated, anonymized versions of this data to improve our service infrastructure. We do not sell individual analytics data to third parties.`
          },
          {
            label: '9. Service Availability',
            content: `We target 99.9% uptime for our redirect infrastructure. Planned maintenance will be announced with reasonable notice. We are not liable for damages resulting from service interruptions beyond our control, including infrastructure failures at our hosting provider, distributed denial of service attacks, or force majeure events. Our redirect infrastructure at trulyfreeqr.link uses Redis caching to maintain sub-5ms redirect performance under normal operating conditions.`
          },
          {
            label: '10. Advertising',
            content: `Truly Free QR displays Google AdSense advertisements on the generator interface. By using this service, you acknowledge that advertisements will be displayed. Advertisements are not displayed on redirect pages at trulyfreeqr.link. We do not control the content of advertisements served by Google AdSense. Advertisements are served in accordance with Google's AdSense Program Policies.`
          },
          {
            label: '11. Limitation of Liability',
            content: `Truly Free QR is provided "as is" without warranty of any kind. We are not liable for damages resulting from the use or inability to use the service, unauthorized access to your QR code data, actions taken by third parties who scan your QR codes, or content at destination URLs. Our total liability to you for any claim arising from use of this service shall not exceed zero dollars, as the service is provided free of charge.`
          },
          {
            label: '12. Modifications to Terms',
            content: `We reserve the right to modify these Terms of Service. Material changes — particularly any change to the No-Expiration Guarantee in Section 3 — will be announced with a minimum of 90 days notice via a notice on the homepage. Continued use of the service after the effective date of changes constitutes acceptance of the updated terms.`
          },
          {
            label: '13. Governing Law',
            content: `These Terms of Service are governed by the laws of the United States. Any disputes arising from these terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.`
          },
          {
            label: '14. Contact',
            content: `For questions about these Terms of Service, contact us at legal@trulyfreeqr.com. For privacy-related requests, use privacy@trulyfreeqr.com.`
          },
        ].map(({ label, content }) => (
          <div key={label} style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: 8 }}>{label}</div>
            <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.8, margin: 0 }}>{content}</p>
          </div>
        ))}

        <div style={{ background: '#f1f4f6', borderRadius: 8, padding: '16px 20px', marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 12, color: '#718096' }}>Also read our Privacy Policy</span>
          <Link href="/privacy-policy" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#fff', borderRadius: 4, padding: '8px 16px', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>Privacy Policy →</Link>
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
