export const BASE_URL = 'https://trulyfreeqr.com'

export const organizationSchema = {
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Truly Free QR',
  alternateName: 'TrulyFreeQR Precision Instruments',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.svg`,
    width: 520,
    height: 120,
  },
  sameAs: ['https://github.com/gsmith0572-dot/truly-free-qr'],
  description: 'Truly Free QR provides permanent, free dynamic QR codes with real-time analytics. No subscriptions, no expiration, no account required.',
  foundingDate: '2026',
  slogan: 'Precision Instruments for the Open Web',
}

export const softwareAppSchema = {
  '@type': 'SoftwareApplication',
  '@id': `${BASE_URL}/#software`,
  name: 'Truly Free QR Generator',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'QR Code Generator',
  operatingSystem: 'Web, iOS, Android',
  url: BASE_URL,
  screenshot: `${BASE_URL}/og-screenshot.png`,
  featureList: [
    'Dynamic QR Codes — Never Expire',
    'Real-time Scan Analytics',
    'SVG Vector Export — Print Ready',
    'Safe-Scan Security — Phishing Protection',
    'No Account Required',
    'No Subscription, Ever',
    'WiFi QR Code Generator',
    'vCard Digital Business Card QR',
    'PDF to QR Code',
    'Logo Overlay Customization',
    'Custom Colors and Frames',
  ],
  offers: {
    '@type': 'Offer',
    price: '0.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2099-12-31',
    description: 'All features permanently free. No trial period.',
  },
  publisher: organizationSchema,
}

export const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do dynamic QR codes expire after 14 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not on Truly Free QR. Unlike competitors who deactivate dynamic QR codes after a 14-day trial and demand annual subscriptions exceeding $100, our dynamic codes are permanently active at no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to create an account or give my email?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Generate, customize, and download your QR code without registration, no email required. Your session is saved locally in your browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a hidden subscription or credit card required?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no subscription, no credit card, and no hidden fee of any kind. Every premium feature is permanently free.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a dynamic QR code and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dynamic QR code contains a short redirect URL. You can change where the code points at any time without reprinting it. It also enables real-time analytics: scan count, country, device type, and time of day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Safe-Scan and how does it protect users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Safe-Scan is our built-in phishing protection layer. Before redirecting, we verify the destination URL against a threat database. Users can preview the destination before proceeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use these QR codes for my restaurant menu or product packaging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Print the code on menus, packaging, or signage. If your content changes, simply update the destination URL in your dashboard without reprinting. The code remains active permanently.',
      },
    },
    {
      '@type': 'Question',
      name: 'What download formats are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Truly Free QR offers PNG at 3000x3000px with transparent background, SVG for professional print, and Print-Ready PDF — all free, all without watermarks.',
      },
    },
  ],
}

export const webAppSchema = {
  '@type': 'WebApplication',
  '@id': `${BASE_URL}/#webapp`,
  name: 'Truly Free QR Generator',
  url: BASE_URL,
  browserRequirements: 'Requires JavaScript. Works on all modern browsers.',
  permissions: 'No permissions required',
  storageRequirements: 'Uses browser localStorage only. No server-side account.',
  isAccessibleForFree: true,
  inLanguage: ['en', 'es', 'de', 'fr', 'pt', 'ja'],
}

export function buildPageSchema(extras?: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      softwareAppSchema,
      faqSchema,
      webAppSchema,
      ...(extras ?? []),
    ],
  }
}

export function buildNicheSchema(params: {
  name: string
  description: string
  slug: string
  faqItems: Array<{ q: string; a: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      {
        ...softwareAppSchema,
        name: params.name,
        description: params.description,
        url: `${BASE_URL}/${params.slug}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: params.faqItems.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  }
}
