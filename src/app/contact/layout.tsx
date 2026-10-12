import type { Metadata } from 'next'
import { BASE_URL } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Contact Truly Free QR — Support, Security Reports, Feedback',
  description: 'Contact the team behind Truly Free QR: technical support, Safe-Scan security reports and feedback. Email info@klickifyagency.com or use the form.',
  alternates: { canonical: `${BASE_URL}/contact` },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Truly Free QR',
  url: `${BASE_URL}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Klickify Agency',
    url: 'https://klickifyagency.com',
    email: 'info@klickifyagency.com',
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', email: 'info@klickifyagency.com' }],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      {children}
    </>
  )
}
