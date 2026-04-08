import type { Metadata } from 'next'
import { BASE_URL } from './schema'
const SITE_NAME = 'Truly Free QR'
const DEFAULT_DESCRIPTION = 'Generate dynamic QR codes that never expire — free forever. No account, no subscription, no credit card. Real-time analytics, SVG export, and Safe-Scan protection included.'
const DEFAULT_OG_IMAGE = { url: `${BASE_URL}/og/default.png`, width: 1200, height: 630, alt: 'Truly Free QR — Dynamic QR codes, free forever. No expiration.', type: 'image/png' }
export const rootMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: 'Free QR Code Generator — Dynamic Codes That Never Expire | Truly Free QR', template: '%s | Truly Free QR' },
  description: DEFAULT_DESCRIPTION,
  keywords: ['qr code generator','free qr code generator','dynamic qr code','qr code no expiration','qr code no subscription','permanent qr code free','truly free dynamic qr code','safe qr code generator','qr code generator without login','free dynamic qr code no expiry'],
  authors: [{ name: 'Truly Free QR Precision Instruments', url: BASE_URL }],
  creator: 'Truly Free QR',
  publisher: 'Truly Free QR',
  alternates: { canonical: BASE_URL, languages: { 'en-US': BASE_URL } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: { type: 'website', locale: 'en_US', url: BASE_URL, siteName: SITE_NAME, title: 'Free QR Code Generator — Dynamic Codes That Never Expire', description: 'The only QR generator where free means free forever. Dynamic codes, real-time analytics, SVG export — zero subscriptions, zero account required.', images: [DEFAULT_OG_IMAGE] },
  twitter: { card: 'summary_large_image', site: '@trulyfreeqr', creator: '@trulyfreeqr', title: 'Free QR Code Generator — No Expiration, No Account', description: 'Dynamic QR codes that never expire. Real-time analytics. SVG export. 100% free forever.', images: [`${BASE_URL}/og/default.png`] },
  verification: { google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN' },
  manifest: `${BASE_URL}/manifest.json`,
  icons: { icon: [{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }, { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }], apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }] },
}
export interface NichePageConfig { slug: string; industry: string; title: string; description: string; ogImageSlug?: string; canonical?: string; noIndex?: boolean }
export function generateNicheMetadata(config: NichePageConfig): Metadata {
  const url = `${BASE_URL}/${config.slug}`
  const ogImage = config.ogImageSlug ? `${BASE_URL}/og/${config.ogImageSlug}` : `${BASE_URL}/og/default.png`
  return { title: config.title, description: config.description, alternates: { canonical: config.canonical ?? url }, robots: config.noIndex ? { index: false, follow: false } : { index: true, follow: true }, openGraph: { type: 'website', url, siteName: SITE_NAME, title: config.title, description: config.description, images: [{ url: ogImage, width: 1200, height: 630, alt: config.title }] }, twitter: { card: 'summary_large_image', title: config.title, description: config.description, images: [ogImage] } }
}
export const nichePages: Record<string, NichePageConfig> = {
  dynamicFree: { slug: 'dynamic-qr-code-generator', industry: 'Dynamic', title: 'Free Dynamic QR Code Generator — No Expiration, No Subscription', description: 'Create dynamic QR codes that never expire, free forever. Update the destination URL anytime without reprinting. No account needed.', ogImageSlug: 'dynamic.png' },
  permanentFree: { slug: 'permanent-qr-code-free', industry: 'Permanent', title: 'Permanent Free QR Code — Never Expires, No Credit Card', description: 'The only permanent free QR code generator. No 14-day trial. No bait-and-switch. Your codes stay active forever.', ogImageSlug: 'permanent.png' },
  noSubscription: { slug: 'qr-code-no-subscription', industry: 'No Subscription', title: 'QR Code Generator Without Subscription — Truly Free, Always', description: 'Tired of QR codes that stop working after a free trial? Ours never do. Dynamic, permanent, and completely free.', ogImageSlug: 'no-subscription.png' },
  noLogin: { slug: 'qr-code-generator-without-login', industry: 'No Login', title: 'QR Code Generator Without Login or Email — Instant Free Download', description: 'Generate and download QR codes instantly — no account, no email, no registration. Just paste your URL and download.' },
  wifi: { slug: 'wifi-qr-code-generator', industry: 'WiFi', title: 'Free WiFi QR Code Generator — Let Guests Connect Instantly', description: 'Create a WiFi QR code for free. Guests scan to connect — no typing passwords. Works on iPhone and Android.', ogImageSlug: 'wifi.png' },
  vcard: { slug: 'vcard-qr-code-generator', industry: 'vCard', title: 'Free vCard QR Code Generator — Digital Business Card', description: 'Turn your contact info into a scannable QR business card. Free, permanent, no account required.', ogImageSlug: 'vcard.png' },
  restaurant: { slug: 'qr-code-for-restaurants', industry: 'Restaurants', title: 'QR Code Menu for Restaurants — Free, Contactless, Never Expires', description: 'Create a contactless menu QR code for your restaurant. Update your menu anytime without reprinting.', ogImageSlug: 'restaurant.png' },
  realEstate: { slug: 'qr-code-for-real-estate', industry: 'Real Estate', title: 'Real Estate QR Codes — Free Generator for Property Listings', description: 'Generate QR codes for property listings, virtual tours, and open house signage.', ogImageSlug: 'real-estate.png' },
  safeScan: { slug: 'safe-qr-code-generator', industry: 'Security', title: 'Safe QR Code Generator — Built-in Phishing Protection', description: 'The only QR generator with Safe-Scan: verify destinations before redirecting. Protect your users from QR phishing attacks.', ogImageSlug: 'safe-scan.png' },
  dashboard: { slug: 'dashboard', industry: 'Dashboard', title: 'My QR Codes — Dashboard', description: 'Manage your QR codes and view real-time analytics.', noIndex: true, canonical: `${BASE_URL}/dashboard` },
}
