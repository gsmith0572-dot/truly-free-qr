import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generateNicheMetadata, nichePages } from '@/lib/seo/metadata-config'
import NichePageTemplate from '@/components/NichePageTemplate'
import type { NichePageProps } from '@/components/NichePageTemplate'

interface Props { params: Promise<{ slug: string }> }

const BASE = 'https://trulyfreeqr.com'

export async function generateStaticParams() {
  return Object.values(nichePages).filter((p) => !p.noIndex).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = Object.values(nichePages).find((p) => p.slug === slug)
  if (!page) return {}
  return generateNicheMetadata(page)
}

function buildSchema(slug: string, name: string, description: string, faqs: { q: string; a: string }[]) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Truly Free QR Generator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: `${BASE}/${slug}`,
      description,
      offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      featureList: ['Dynamic QR Codes — Never Expire', 'No Account Required', 'No Subscription', 'Real-time Analytics', 'SVG Vector Export', 'Safe-Scan Phishing Protection', 'Sub-5ms Redirect Speed'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]
}

const COMPARISON_DEFAULT = [
  { feature: 'Price', us: '$0.00 — forever', them: '$111–$180/year' },
  { feature: 'Dynamic QR codes', us: 'Unlimited, free', them: 'Expires in 14 days' },
  { feature: 'Account required', us: 'Never', them: 'Mandatory' },
  { feature: 'Edit destination URL', us: 'Unlimited', them: 'Paid plans only' },
  { feature: 'Scan analytics', us: 'Included free', them: 'Premium only' },
  { feature: 'SVG export', us: 'Free', them: '$8+/month' },
  { feature: 'Safe-Scan protection', us: 'Always active', them: 'Not available' },
  { feature: 'Redirect speed', us: '<5ms via Redis', them: 'Unspecified' },
]

const PAGE_DATA: Record<string, Omit<NichePageProps, 'slug'>> = {
  'qr-code-for-restaurants': {
    industry: 'Restaurant',
    headline: 'Free Dynamic QR Code Menu for Restaurants — No Expiration, No Trial, No Subscription',
    subheadline: 'A precision instrument for permanent digital menus. Create a contactless QR menu in 30 seconds — update dishes, prices, and specials anytime without reprinting. While competitors deactivate your menu after 14 days and charge $156/year, your Truly Free QR code works forever.',
    ctaLabel: 'Create Your Permanent Restaurant Menu Now',
    ctaHref: '/?category=Restaurant',
    painKeyword: 'restaurants choose Truly Free QR',
    showSavingsCalc: true,
    steps: [
      { icon: '🔗', title: 'Paste your menu URL', desc: 'Link to your PDF menu, Google Drive, Toast, or any online menu. Any URL works.' },
      { icon: '⚡', title: 'Enable Dynamic Tracking', desc: 'Toggle Dynamic ON. Your QR now uses our VPS+Redis redirect engine — editable and trackable forever at $0.' },
      { icon: '🖨️', title: 'Print on tables permanently', desc: 'Download SVG for professional printing. This code never expires — print on table cards, windows, receipts, and stands with full confidence.' },
    ],
    useCases: [
      { icon: '🍽️', title: 'Contactless table menus', desc: 'Replace paper menus entirely. Update prices or dishes without reprinting a single sheet.' },
      { icon: '🍷', title: 'Seasonal wine & cocktail lists', desc: 'Menus that change weekly. Dynamic QR means one print run serves every season.' },
      { icon: '📋', title: 'Daily specials board', desc: 'Link to a live Google Doc. Change specials from your phone every morning in seconds.' },
      { icon: '🛎️', title: 'Online ordering integration', desc: 'Point directly to your Toast, Square, or custom ordering system. No middleman app fees.' },
      { icon: '⭐', title: 'Google Review collection', desc: 'A QR at the table pointing to your Google Reviews page generates passive 5-star ratings.' },
      { icon: '📸', title: 'Social media growth', desc: 'Table QR linking to your Instagram. Every satisfied diner becomes a potential follower.' },
    ],
    faqs: [
      {
        q: 'Why did my restaurant QR code menu stop working?',
        a: 'This is the QR bait-and-switch: most generators offer a free dynamic QR code, then deactivate it after 14 days unless you pay $111–$180 per year. Restaurants that printed codes on table cards, windows, or menus are left with broken links on materials they cannot instantly replace. Truly Free QR never deactivates codes. Our infrastructure is funded by advertising — there is zero financial incentive to threaten your menu with expiration.',
      },
      {
        q: 'How do I create a free dynamic QR code menu that never expires?',
        a: 'Paste your menu URL into the generator at trulyfreeqr.com, toggle Dynamic Tracking ON, and download. Your QR code encodes a short URL hosted on our VPS server. The destination — your menu — can be changed at any time from your dashboard without generating a new QR or reprinting materials. This is permanently free with no trial limit.',
      },
      {
        q: 'Is it safe for my restaurant customers to scan a QR code?',
        a: 'Yes. Every code generated on Truly Free QR includes Safe-Scan protection — an anti-phishing layer that lets users preview the destination URL before being redirected. QR phishing attacks (quishing) grew 400% between 2023 and 2025, targeting hospitality environments specifically. Safe-Scan is the only built-in phishing protection available on a free QR generator.',
      },
      {
        q: 'How fast does the restaurant menu QR redirect work?',
        a: 'Under 5 milliseconds. Our redirect engine uses Redis in-memory caching on a dedicated VPS server — not shared cloud functions that throttle under load. In a busy restaurant where dozens of guests scan simultaneously during service, the redirect is instantaneous. Customers see your menu without perceivable delay.',
      },
      {
        q: 'Can I update my menu without printing new QR codes?',
        a: 'Yes. That is the entire value of dynamic QR codes. Your printed QR always points to the same short URL on our servers. When you update the destination link — your new menu PDF, updated Google Doc, or revised ordering page — every existing QR code automatically redirects there. No reprinting, no new QR generation, no cost.',
      },
      {
        q: 'What format should I use to print the menu QR code?',
        a: 'Download SVG for all professional printing. SVG is a vector format that scales infinitely without pixelation — critical for table cards, window decals, and large-format stands. For digital use only, PNG is sufficient. Both formats are free on Truly Free QR. Competitors charge $8+/month to unlock SVG export.',
      },
      {
        q: 'Do I need an account or subscription to create a restaurant QR menu?',
        a: 'No account. No email. No subscription. No credit card. The free dynamic QR code for your restaurant menu is the full product — not a degraded free tier designed to convert you to a paid plan. Truly Free QR generates revenue through advertising shown on our website, not through subscription fees charged to restaurant operators.',
      },
    ],
    comparisonRows: COMPARISON_DEFAULT,
  },

  'qr-code-for-real-estate': {
    industry: 'Real Estate',
    headline: 'Free Real Estate QR Codes — Property Listings That Never Expire, No Subscription',
    subheadline: 'Generate dynamic QR codes for yard signs, property flyers, and virtual tours. Update the listing URL after price reductions or when properties sell — without reprinting signage. Permanent, free, and built for agents who refuse to pay $156/year for a redirect.',
    ctaLabel: 'Create Property QR Free',
    ctaHref: '/?category=Real%20Estate',
    painKeyword: 'real estate agents choose Truly Free QR',
    showSavingsCalc: false,
    steps: [
      { icon: '🏠', title: 'Paste your listing URL', desc: 'Link to MLS, Zillow, Realtor.com, your agency site, or a virtual tour.' },
      { icon: '⚡', title: 'Generate with Dynamic Tracking', desc: 'Enable dynamic mode. Update the destination when listings change — zero reprinting cost.' },
      { icon: '🪧', title: 'Print on signage permanently', desc: 'Download SVG for yard signs, flyers, and brochures. One QR code serves the entire listing lifecycle.' },
    ],
    useCases: [
      { icon: '🪧', title: 'Yard signs', desc: 'Buyers scan from the car to see full listing photos, virtual tour, and agent contact.' },
      { icon: '🎥', title: 'Virtual tour links', desc: 'Point to Matterport, video walkthroughs, or 3D floor plans directly from printed flyers.' },
      { icon: '📄', title: 'Price reduction updates', desc: 'When the price drops, update the destination to the new listing page. No new QR needed.' },
      { icon: '🏢', title: 'Commercial property', desc: 'Link to floor plans, CAD files, lease terms, and agent contact from a single scannable code.' },
      { icon: '📅', title: 'Open house check-in', desc: 'Collect visitor names and emails by linking to a simple form. Track attendance automatically.' },
      { icon: '📊', title: 'Buyer interest analytics', desc: 'See how many buyers scanned your yard sign per day. Real data before open houses.' },
    ],
    faqs: [
      { q: 'Why do real estate QR codes stop working after a listing closes?', a: 'If you used a paid generator\'s free trial, the dynamic QR deactivates when the trial ends — or when you cancel the subscription. Static QR codes encode the URL permanently and cannot be changed. Truly Free QR dynamic codes stay active forever, so you can redirect a sold property\'s QR to your next listing or your agency homepage without reprinting the sign.' },
      { q: 'Can I reuse one QR code across multiple listings over time?', a: 'Yes. Dynamic QR codes let you change the destination URL at any time. A QR on your business card can always point to your current featured listing. A yard sign QR can be redirected to a new property when the current one sells.' },
      { q: 'How do I get analytics on how many buyers scanned my property sign?', a: 'Every dynamic QR code on Truly Free QR includes a real-time analytics dashboard: total scans, daily scan volume, geographic location, and device type. Access it at trulyfreeqr.com/dashboard. No account required — your session token provides access.' },
      { q: 'What QR code size should I print on a yard sign?', a: 'Minimum 3x3 inches for standard scanning distance of 2–3 feet. For yard signs viewed from a passing car, 4x4 to 6x6 inches is recommended. Always use SVG format for scaling without quality loss — free on Truly Free QR.' },
      { q: 'Is a free QR code reliable enough for professional real estate use?', a: '"Free" does not mean unreliable. Truly Free QR runs on dedicated VPS infrastructure with Redis caching, serving redirects in under 5ms. The service is free because it is ad-supported — not because it is built on inferior infrastructure. The same redirect speed and uptime applies to all codes regardless of cost.' },
      { q: 'Is the QR safe from phishing for my property buyers?', a: 'Yes. Safe-Scan protection is active on every code. Buyers who scan your property QR can preview the destination URL before being redirected — critical protection as real estate QR phishing attacks have increased. Your buyers will see the verified destination before any redirect occurs.' },
    ],
    comparisonRows: COMPARISON_DEFAULT,
  },

  'wifi-qr-code-generator': {
    industry: 'WiFi',
    headline: 'Free WiFi QR Code Generator — Guests Connect Instantly, No Password Typing, No Account',
    subheadline: 'Create a permanent WiFi QR code in 20 seconds. Guests scan once to connect automatically on iPhone and Android. Client-side generation means your password never leaves your device.',
    ctaLabel: 'Create WiFi QR Free',
    ctaHref: '/?tab=WiFi',
    painKeyword: 'users choose Truly Free QR for WiFi',
    showSavingsCalc: false,
    steps: [
      { icon: '📶', title: 'Enter your WiFi details', desc: 'Network name (SSID), password, and security type (WPA2, WEP, or open). Takes 15 seconds.' },
      { icon: '🔒', title: 'Generated locally — secure', desc: 'Your WiFi password is encoded in your browser. It never transmits to our servers. Zero data exposure.' },
      { icon: '🖨️', title: 'Display permanently', desc: 'Download and frame. Works forever — no expiration, no account, no reprinting needed.' },
    ],
    useCases: [
      { icon: '🏠', title: 'Home guests', desc: 'Never recite a long WPA2 password again. Frame the QR in your entrance hall.' },
      { icon: '☕', title: 'Cafés and coworking spaces', desc: 'Post at the counter. Customers connect without asking staff. Reduces interruptions.' },
      { icon: '🏨', title: 'Hotels and Airbnb', desc: 'Include in welcome packets or frame on the desk. Update the QR instantly if the password changes.' },
      { icon: '🏢', title: 'Office guest networks', desc: 'Dedicated visitor WiFi QR keeps your internal network separate and secure.' },
      { icon: '🎪', title: 'Events and conferences', desc: 'Post large-format QR at venue entry. Hundreds connect simultaneously without congestion.' },
      { icon: '🏥', title: 'Healthcare waiting rooms', desc: 'Patients and visitors connect quickly without staff intervention.' },
    ],
    faqs: [
      { q: 'Is my WiFi password secure when using this generator?', a: 'Yes. WiFi QR codes on Truly Free QR are generated entirely in your browser using client-side JavaScript. Your password is encoded locally into the QR pattern and never transmitted to our servers. This is a static QR code — there is no server involved in its creation or operation.' },
      { q: 'Does a WiFi QR code work on iPhone and Android without an app?', a: 'Yes. iOS 11+ and Android 9+ natively support WiFi QR scanning through the built-in camera app. The user points their camera at the QR and taps "Join Network." No third-party app required. Compatibility is universal across modern devices.' },
      { q: 'What security types are supported?', a: 'WPA/WPA2 (the current standard for most home and business routers), WEP (legacy, now considered insecure), and open networks with no password. WPA3 networks can use WPA2 format in most cases for backward compatibility.' },
      { q: 'What happens if I change my WiFi password?', a: 'WiFi passwords are encoded statically in the QR pattern — if you change the password, the QR becomes invalid. You need to generate a new one, which takes under 20 seconds on Truly Free QR. Free, no account, instant.' },
      { q: 'Can I add my logo to the WiFi QR code?', a: 'Yes. Use the Logo upload tool in the generator. Upload a PNG or SVG and the QR renders with your brand mark centered. Set Error Correction to level H to maintain full scannability with a logo overlay. Both logo upload and SVG download are free.' },
      { q: 'Is there a scan limit on the WiFi QR code?', a: 'No. WiFi QR codes are static — they work entirely offline. There is no server, no scan counter, no limit. The QR encodes the WiFi credentials in its pattern and works indefinitely regardless of how many people scan it.' },
    ],
    comparisonRows: [
      { feature: 'Price', us: '$0.00 — forever', them: '$111–$180/year' },
      { feature: 'Password security', us: 'Client-side only', them: 'Varies by provider' },
      { feature: 'Logo overlay', us: 'Free', them: '$8+/month' },
      { feature: 'SVG export', us: 'Free', them: 'Paid plans only' },
      { feature: 'Account required', us: 'Never', them: 'Usually required' },
      { feature: 'Offline operation', us: 'Full static QR', them: 'Requires server' },
      { feature: 'Safe-Scan protection', us: 'Always active', them: 'Not available' },
    ],
  },

  'vcard-qr-code-generator': {
    industry: 'vCard',
    headline: 'Free vCard QR Code Generator — Digital Business Card, No Account, Never Expires',
    subheadline: 'Turn your contact information into a scannable QR code. Recipients tap once to save your name, phone, email, and website directly to their contacts. Professional, permanent, and completely free.',
    ctaLabel: 'Create vCard QR Free',
    ctaHref: '/?tab=vCard',
    painKeyword: 'professionals choose Truly Free QR for business cards',
    showSavingsCalc: false,
    steps: [
      { icon: '👤', title: 'Enter your contact info', desc: 'Name, company, phone, email, website, address — all standard vCard 3.0 fields.' },
      { icon: '⚡', title: 'Generate instantly', desc: 'Your vCard QR is encoded in your browser in under a second. No account, no email required.' },
      { icon: '💼', title: 'Add to business cards', desc: 'Download SVG for professional print production. Add to cards, email signatures, or your website permanently.' },
    ],
    useCases: [
      { icon: '💼', title: 'Printed business cards', desc: 'Add to the back. Recipients save your contact in one tap — no manual typing.' },
      { icon: '📧', title: 'Email signatures', desc: 'Embed the QR image in your footer. Anyone reading your email can save your contact instantly.' },
      { icon: '🎤', title: 'Conferences and events', desc: 'Display on name badges or presentation slides. Network without exchanging physical cards.' },
      { icon: '🌐', title: 'Personal website', desc: 'Add to your contact page. Visitors save your details without filling out a form.' },
      { icon: '🏢', title: 'Team directories', desc: 'Generate individual vCard QRs for every team member. Consistent, scannable contact data.' },
      { icon: '📲', title: 'NFC alternative', desc: 'Print on any surface — no NFC hardware, no app, no compatibility concerns.' },
    ],
    faqs: [
      { q: 'What contact information can I encode in a vCard QR?', a: 'Full name, job title, company name, phone number (multiple), email address (multiple), website URL, and physical address. The vCard 3.0 standard is natively supported by iOS Contacts and Android Contacts without any app required.' },
      { q: 'How does the recipient save my contact details?', a: 'On iPhone: the camera app recognizes the QR and displays "Add to Contacts" with a single tap. On Android: the camera or Google Lens offers the same one-tap save. No app installation, no account, no QR scanner app needed. The contact saves directly to the native contacts app.' },
      { q: 'What happens if I change jobs or phone numbers?', a: 'vCard QR codes generated here are static — the contact data is encoded in the pattern. If your details change, generate a new QR code (free, 20 seconds) and update your printed materials at next print run. For a QR that always shows current info, use a dynamic URL QR pointing to your online profile.' },
      { q: 'What file format should I use for printing business cards?', a: 'SVG for professional production. Business card printers work at 300–600 DPI and SVG scales infinitely without pixelation. For digital use only — website, email signature — PNG at 1000px is sufficient. Both are free on Truly Free QR.' },
      { q: 'Can I add my company logo to the vCard QR?', a: 'Yes. Upload a PNG or SVG logo using the Logo tool. The QR renders with your brand mark centered. Set Error Correction to H for maximum logo area without compromising scan reliability.' },
      { q: 'Is the vCard QR free for commercial use?', a: 'Completely free for personal and commercial use. No attribution required. No licensing fee. No account. Generate for yourself, your team, or your clients — unlimited, permanently free.' },
    ],
    comparisonRows: COMPARISON_DEFAULT,
  },

  'dynamic-qr-code-generator': {
    industry: 'Dynamic',
    headline: 'Free Dynamic QR Code Generator — No Expiration, No Subscription, No Free Trial Trap',
    subheadline: 'The only dynamic QR generator where free means permanent. Create QR codes that never expire, edit the destination URL anytime, and track real-time scan analytics — all without an account or credit card. Not a 14-day trial. Forever.',
    ctaLabel: 'Create Free Dynamic QR — No Expiration',
    ctaHref: '/',
    painKeyword: 'users switching from paid QR generators',
    showSavingsCalc: true,
    steps: [
      { icon: '🔗', title: 'Paste your destination URL', desc: 'Any URL — website, PDF, social profile, menu, landing page, or file.' },
      { icon: '⚡', title: 'Enable Dynamic Tracking', desc: 'Toggle Dynamic ON. Your QR encodes a short URL on our VPS+Redis infrastructure — permanently editable and trackable.' },
      { icon: '📊', title: 'Track, edit, repeat forever', desc: 'Change the destination anytime. View scan analytics. Manage all codes from your dashboard. All free, all permanent.' },
    ],
    useCases: [
      { icon: '📢', title: 'Marketing campaigns', desc: 'Print once, update the destination as campaign phases evolve. No reprinting budget wasted.' },
      { icon: '📦', title: 'Product packaging', desc: 'Update instructions, warranties, or promotions on packaged goods without physical recalls.' },
      { icon: '🎪', title: 'Event materials', desc: 'Reuse printed banners across events by updating the destination URL between shows.' },
      { icon: '📄', title: 'Business documents', desc: 'Link to always-current price lists, catalogs, or proposals that update automatically.' },
      { icon: '🔄', title: 'Seasonal campaigns', desc: 'One printed QR serves every season. Update the destination for holiday promotions.' },
      { icon: '📊', title: 'A/B testing', desc: 'Switch the destination between two landing pages and compare scan-to-conversion rates.' },
    ],
    faqs: [
      { q: 'Why did my dynamic QR code stop working after 14 days?', a: 'This is the QR bait-and-switch: most generators create a free dynamic QR on trial infrastructure that deactivates automatically after 14 days unless you pay $111–$180 per year. Businesses that already printed the code on packaging, signage, or materials are effectively forced to pay — users on Trustpilot call it "blackmail." Truly Free QR never deactivates codes. Revenue comes from advertising, not from expiration threats.' },
      { q: 'What is the difference between a static and dynamic QR code?', a: 'Static QR codes encode the destination URL directly in the pixel pattern — they cannot be changed after generation, and they do not support analytics. Dynamic QR codes encode a short URL that redirects to your destination. You can change that destination at any time from a dashboard. Both types are free on Truly Free QR; dynamic codes additionally provide real-time scan tracking.' },
      { q: 'How fast does the dynamic QR redirect work?', a: 'Under 5 milliseconds. Our redirect engine uses Redis in-memory caching on a dedicated VPS server. Short URL resolution happens before the user\'s phone finishes processing the camera frame. In high-traffic environments — trade shows, restaurant service, retail — the redirect is imperceptibly fast.' },
      { q: 'Is there a scan limit on free dynamic QR codes?', a: 'No scan limit, ever. Unlimited scans, unlimited codes, unlimited analytics history. There is no "upgrade for more scans" paywall. Truly Free QR processes millions of redirects per month on its dedicated infrastructure at no cost to users.' },
      { q: 'Do I need an account to create a dynamic QR code?', a: 'No account, no email, no password. Dynamic QR codes are associated with a browser session token stored locally. Your dashboard at trulyfreeqr.com/dashboard shows all codes from your current browser session. For cross-device management, save the dashboard URL with your session token.' },
      { q: 'Can I track who scans my dynamic QR code?', a: 'Real-time analytics are included on every dynamic code: total scans, scans by country, device type breakdown (mobile vs desktop), operating system distribution, and hourly scan frequency over 24 hours. All free, all permanent, no account required.' },
      { q: 'What happens to my dynamic QR codes if I never pay anything?', a: 'They stay active permanently. There is no degradation from free to paid tier, no expiration timer, no renewal reminder that deactivates on non-payment. The service is funded by advertising displayed on trulyfreeqr.com — your codes are protected by that business model, not threatened by it.' },
    ],
    comparisonRows: COMPARISON_DEFAULT,
  },

  'permanent-qr-code-free': {
    industry: 'Permanent',
    headline: 'Permanent Free QR Code — Never Expires, No Credit Card, No 14-Day Trial Bait-and-Switch',
    subheadline: 'The only QR generator that guarantees your codes stay active forever. Print on signage, packaging, books, and physical installations with full confidence. No subscription renewal that deactivates your code. No trial period. Permanent.',
    ctaLabel: 'Create Permanent QR — Free Forever',
    ctaHref: '/',
    painKeyword: 'users need permanent QR codes without subscriptions',
    showSavingsCalc: true,
    steps: [
      { icon: '🔗', title: 'Enter your content', desc: 'URL, WiFi credentials, vCard, email, or plain text. Any QR content type.' },
      { icon: '⚡', title: 'Generate as static or dynamic', desc: 'Static codes are permanently encoded. Dynamic codes are permanently hosted on our ad-funded infrastructure — neither ever expires.' },
      { icon: '🖨️', title: 'Print with total confidence', desc: 'Download SVG and commit to print. This code will never be deactivated by a subscription renewal failure.' },
    ],
    useCases: [
      { icon: '🪧', title: 'Permanent signage', desc: 'Engraved or embedded QR codes on physical installations that cannot be reprinted.' },
      { icon: '📦', title: 'Bulk product labels', desc: 'Printed in production runs of thousands — must remain active for the entire product lifecycle.' },
      { icon: '📚', title: 'Published books and manuals', desc: 'Printed QR codes in publications that must function years after the print date.' },
      { icon: '🏛️', title: 'Institutional materials', desc: 'Government, education, and nonprofit print runs with multi-year shelf life requirements.' },
      { icon: '🎁', title: 'Personalized gifts', desc: 'QR codes on customized gifts linking to photos, messages, or memories — forever.' },
      { icon: '🪦', title: 'Memorial installations', desc: 'QR codes on plaques, headstones, and memorial installations require guaranteed permanent operation.' },
    ],
    faqs: [
      { q: 'What makes a QR code truly permanent?', a: 'Static QR codes are permanent by design — the destination is encoded in the pattern and cannot be changed or deactivated. Dynamic QR codes are only as permanent as the provider\'s commitment to keep the redirect server running. Truly Free QR commits to permanent infrastructure because revenue comes from advertising — there is no subscription cliff that could cause mass deactivation.' },
      { q: 'Will my QR code still work in 5 or 10 years?', a: 'Static QR codes will function as long as the destination URL exists — no dependency on any service. Dynamic QR codes will function as long as Truly Free QR operates. Because the service is ad-supported rather than subscription-dependent, there is no scenario where a billing failure causes sudden deactivation of all codes.' },
      { q: 'What is the difference between a permanent and a free trial QR code?', a: 'A free trial QR is created on infrastructure that the provider plans to deactivate after 14 days unless payment is received. A permanent QR code is either static (destination encoded in pattern) or hosted on infrastructure with a long-term operational commitment. Truly Free QR provides both permanently.' },
      { q: 'Can I get a permanent dynamic QR code at no cost?', a: 'Yes. Dynamic QR codes with edit capability, real-time analytics, and permanent activation are the baseline product on Truly Free QR — not a premium tier. Permanently free because the business is funded by advertising, not subscriptions.' },
      { q: 'Is there any catch or hidden cost I should know about?', a: 'None. The service is ad-supported. Users are never charged, never enrolled in subscriptions, and codes are never threatened with deactivation. Your codes are the product we protect, not the product we charge for.' },
      { q: 'What format should I use for permanent print applications?', a: 'SVG (Scalable Vector Graphics) for all permanent print applications. SVG scales to any physical size — from 1-inch product labels to 6-foot wall installations — without any pixelation. For permanent applications specifically, avoid PNG at low resolutions. SVG export is free on Truly Free QR.' },
    ],
    comparisonRows: COMPARISON_DEFAULT,
  },

  'qr-code-no-subscription': {
    industry: 'No Subscription',
    headline: 'QR Code Generator Without Subscription — Dynamic, Permanent, and Free Forever',
    subheadline: 'Most QR generators charge $111–$180/year to keep your dynamic codes active. Stop paying. Truly Free QR provides the same dynamic QR features — edit URL, track scans, download SVG — with no subscription, no trial, and no expiration. Ever.',
    ctaLabel: 'Generate QR Free — No Subscription Required',
    ctaHref: '/',
    painKeyword: 'users escaping QR subscription traps',
    showSavingsCalc: true,
    steps: [
      { icon: '🔗', title: 'Paste your URL', desc: 'No account creation dialog. No subscription prompt. No credit card field. Just your URL.' },
      { icon: '⚡', title: 'Generate with full features', desc: 'Dynamic tracking, analytics, SVG export — all available immediately at zero cost.' },
      { icon: '♾️', title: 'Active permanently', desc: 'No renewal email. No 14-day countdown. No deactivation threat. Your code works forever.' },
    ],
    useCases: [
      { icon: '😤', title: 'Switching from QR Tiger', desc: 'QR Tiger charges $156/year. Same dynamic features here at $0. Migration takes minutes.' },
      { icon: '😤', title: 'Switching from QR Code Generator Pro', desc: 'No more $111–$180/year renewals. Generate new codes and update destinations immediately.' },
      { icon: '🏪', title: 'Small business owners', desc: 'Operators who need professional QR infrastructure without ongoing SaaS overhead.' },
      { icon: '🎨', title: 'Freelancers and agencies', desc: 'Create client QR codes without subscription costs eating into project margins.' },
      { icon: '🏫', title: 'Schools and nonprofits', desc: 'Organizations with zero discretionary budget that need professional QR tools.' },
      { icon: '🌍', title: 'Global users', desc: 'Users in markets where $150/year subscriptions represent prohibitive cost.' },
    ],
    faqs: [
      { q: 'Why do most QR generators require a subscription?', a: 'Dynamic QR codes require server infrastructure: a database to store redirect mappings, a server to process incoming scan requests, and bandwidth to handle traffic. Most companies monetize this infrastructure through annual subscriptions. Truly Free QR uses an ad-supported model instead — the same infrastructure funded by display advertising, eliminating the need to charge users.' },
      { q: 'What happens to my QR codes if I never pay anything?', a: 'Nothing — they remain active permanently. There is no free tier that degrades after a trial period. There is no "basic" plan where dynamic features are eventually removed. The complete feature set — dynamic codes, analytics, SVG export — is permanently free because the business model does not depend on subscription revenue.' },
      { q: 'Is the free version limited compared to paid generators?', a: 'No artificial limits have been applied. Dynamic codes, real-time scan analytics, SVG vector export, logo upload, and Safe-Scan phishing protection are all included at zero cost. The only thing present on Truly Free QR that paid generators lack is advertising on the website — your end users scanning your QR codes see nothing.' },
      { q: 'Can I migrate my QR codes from my current paid subscription?', a: 'You cannot transfer existing short URLs from other providers. However, generating replacement dynamic QR codes on Truly Free QR takes under 30 seconds per code. Update your physical materials at next print run or immediately for digital placements.' },
      { q: 'Are there any hidden fees at any point?', a: 'None. No premium upgrade prompts, no feature paywalls, no credit card required at any step. The revenue model is advertising. The economics are straightforward: more users generate more ad impressions, which generates more revenue. Charging subscriptions would reduce users — the opposite of what the business requires.' },
      { q: 'What if Truly Free QR discontinues the service?', a: 'Static QR codes generated here are completely independent — they encode destinations in the pattern and work permanently without any server. For dynamic codes, if the service were ever discontinued, we would provide advance notice and a tool to convert dynamic codes to static. The ad-supported model means there is no subscription cliff trigger for sudden shutdown.' },
    ],
    comparisonRows: COMPARISON_DEFAULT,
  },

  'qr-code-generator-without-login': {
    industry: 'No Login',
    headline: 'QR Code Generator Without Login — No Email, No Account, No Registration, Instant Download',
    subheadline: 'Generate and download professional QR codes in under 10 seconds. No sign-up dialog, no email verification, no password creation. Paste your URL, click download, done. Dynamic tracking and SVG export included — no login gate.',
    ctaLabel: 'Generate Without Login — Instant',
    ctaHref: '/',
    painKeyword: 'users need QR generation without registration',
    showSavingsCalc: false,
    steps: [
      { icon: '🔗', title: 'Paste your content', desc: 'URL, WiFi details, contact info, or text. No account screen blocks your path.' },
      { icon: '⬇️', title: 'Download immediately', desc: 'Click PNG or SVG. File downloads in one click. No email confirmation required.' },
      { icon: '✅', title: 'Done in under 10 seconds', desc: 'No welcome email. No onboarding flow. No account dashboard pushed on you. Finished.' },
    ],
    useCases: [
      { icon: '⏱️', title: 'Time-critical generation', desc: 'Need a QR in 60 seconds before a meeting, print deadline, or live event setup.' },
      { icon: '🔒', title: 'Privacy-conscious users', desc: 'No email address collected. No marketing list added. No retargeting pixels from registration.' },
      { icon: '💼', title: 'One-time use cases', desc: 'Single event, single document, single campaign — no ongoing account management needed.' },
      { icon: '🏫', title: 'Classroom and education', desc: 'Teachers generating QR codes for lesson materials without institutional IT approval processes.' },
      { icon: '🌍', title: 'International users', desc: 'No identity verification or phone number requirements that vary by jurisdiction.' },
      { icon: '🧑‍💻', title: 'Developers and testers', desc: 'Rapid QR generation during development without OAuth flows, API keys, or test accounts.' },
    ],
    faqs: [
      { q: 'Why do most QR generators require an email address?', a: 'Email capture is a lead generation strategy. QR generator companies collect email addresses to build marketing lists, trigger subscription upsell sequences, and create account dependency that increases switching costs. Truly Free QR does not require email because revenue comes from advertising — marketing to users through email campaigns is not part of the business model.' },
      { q: 'How do I manage my QR codes without an account?', a: 'Dynamic QR codes are stored against a session token in your browser\'s local storage. Your dashboard at trulyfreeqr.com/dashboard shows all codes created in the current browser session. Bookmark the URL to return. The token persists until you clear browser data — your codes remain active on the server regardless.' },
      { q: 'Can I create dynamic QR codes without logging in?', a: 'Yes. Dynamic tracking, real-time scan analytics, editable destination URLs, and SVG export are all available without any login. The browser session token is the only identifier required. This is the full feature set — not a restricted anonymous tier.' },
      { q: 'Is a no-login QR code less reliable or secure?', a: 'No. Security and reliability are infrastructure properties, not authentication properties. Your QR codes run on the same dedicated VPS infrastructure with Redis caching regardless of login status. Safe-Scan phishing protection is active on all codes. The redirect speed of under 5ms applies universally.' },
      { q: 'What happens to my QR codes if I clear my browser history?', a: 'Your dynamic QR codes remain active on our servers permanently — clearing browser data does not deactivate them. The codes continue to redirect correctly. You lose dashboard visibility for those codes in that browser, but the codes keep functioning for everyone who scans them.' },
      { q: 'Is there a limit to how many QR codes I can generate without an account?', a: 'No limit. The no-account model is not a restricted free tier — it is the complete product. Generate as many codes as your project requires. There is no usage cap designed to push you toward account creation.' },
    ],
    comparisonRows: COMPARISON_DEFAULT,
  },

  'safe-qr-code-generator': {
    industry: 'Security',
    headline: 'Safe QR Code Generator — Anti-Phishing Protection Built Into Every Code',
    subheadline: 'QR phishing attacks (quishing) grew 400% between 2023 and 2025, targeting businesses and consumers through fraudulent codes. Truly Free QR is the only free generator with Safe-Scan built in — users preview the destination before any redirect occurs.',
    ctaLabel: 'Create Safe QR Free',
    ctaHref: '/',
    painKeyword: 'organizations need phishing-protected QR codes',
    showSavingsCalc: false,
    steps: [
      { icon: '🔗', title: 'Generate your QR code', desc: 'Any content type — URL, WiFi, vCard, or text. All codes receive Safe-Scan automatically.' },
      { icon: '🛡️', title: 'Safe-Scan activates automatically', desc: 'No configuration required. Every dynamic QR includes a destination preview page before redirect.' },
      { icon: '✅', title: 'Users verify before scanning', desc: 'Recipients see the full destination URL and domain before being redirected. Informed consent on every scan.' },
    ],
    useCases: [
      { icon: '🏢', title: 'Enterprise environments', desc: 'IT security policies increasingly require QR destination verification before employee device redirects.' },
      { icon: '🏥', title: 'Healthcare facilities', desc: 'Patient-facing QR codes must be verifiably safe given strict data protection requirements.' },
      { icon: '🏫', title: 'Educational institutions', desc: 'Campus QR codes scanned by students require protection from malicious replacement attacks.' },
      { icon: '🏨', title: 'Hospitality venues', desc: 'Restaurant and hotel QR codes are high-value phishing targets. Safe-Scan protects guests.' },
      { icon: '🎪', title: 'Public events', desc: 'Conference and event QR codes displayed publicly are vulnerable to physical replacement attacks.' },
      { icon: '🛍️', title: 'Retail and product QR', desc: 'Product packaging QR codes are targets for counterfeit replacement in retail environments.' },
    ],
    faqs: [
      { q: 'What is QR phishing (quishing) and how serious is it?', a: 'Quishing is the use of malicious QR codes to redirect victims to phishing websites that steal credentials or install malware. The Anti-Phishing Working Group (APWG) reported a 400% increase in quishing attacks between 2023 and 2025. 89.3% of these attacks target credential theft. Physical QR codes in public environments are particularly vulnerable as attackers can place fraudulent codes over legitimate ones.' },
      { q: 'How does Safe-Scan protection work?', a: 'When a user scans a dynamic QR code from Truly Free QR, they are first directed to a Safe-Scan preview page that displays the full destination URL and domain. The user can verify the destination before choosing to proceed. This informed-consent step eliminates the primary attack vector of QR phishing, where victims are redirected without any opportunity to verify the destination.' },
      { q: 'Does Safe-Scan slow down the user experience?', a: 'Safe-Scan adds one deliberate confirmation step before redirect. For legitimate uses, this takes under two seconds. The redirect engine itself operates in under 5ms. The preview step is a security feature, not a performance issue — comparable to the confirmation dialog browsers show before downloading files.' },
      { q: 'Is Safe-Scan available on all QR codes or only premium plans?', a: 'Safe-Scan is active on all dynamic QR codes generated on Truly Free QR at no cost. There is no premium tier required to access phishing protection. This is a fundamental difference from paid competitors where security features are reserved for enterprise plans.' },
      { q: 'Can my organization use Truly Free QR for employee-facing QR codes?', a: 'Yes. The service is free for organizational use at any scale. For high-volume enterprise deployments requiring custom domains or API integration, contact support@trulyfreeqr.com. The core QR generation, Safe-Scan protection, and analytics are available to organizations at zero cost.' },
      { q: 'What is the difference between Safe-Scan and standard QR code scanning?', a: 'Standard QR scanning redirects immediately upon scan — no verification, no visibility into destination. Safe-Scan intercepts the redirect and presents a verification page showing the exact destination URL. For legitimate QR codes this adds a two-second confirmation. For malicious QR codes, it prevents the attack entirely by giving the user visibility before any redirect occurs.' },
    ],
    comparisonRows: [
      { feature: 'Price', us: '$0.00 — forever', them: '$111–$180/year' },
      { feature: 'Safe-Scan / phishing protection', us: 'Built-in, all codes', them: 'Not available' },
      { feature: 'Destination preview', us: 'Every scan', them: 'Not available' },
      { feature: 'Dynamic QR codes', us: 'Free forever', them: 'Trial then paid' },
      { feature: 'Account required', us: 'Never', them: 'Mandatory' },
      { feature: 'SVG export', us: 'Free', them: '$8+/month' },
      { feature: 'Redirect speed', us: '<5ms Redis cache', them: 'Unspecified' },
    ],
  },
}

export default async function NichePage({ params }: Props) {
  const { slug } = await params
  const page = Object.values(nichePages).find((p) => p.slug === slug)
  if (!page) notFound()

  const data = PAGE_DATA[slug]
  if (!data) notFound()

  const schema = buildSchema(slug, page.title, page.description, data.faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <NichePageTemplate {...data} slug={slug} />
    </>
  )
}
