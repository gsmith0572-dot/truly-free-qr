import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/seo/schema'
import { nichePages } from '@/lib/seo/metadata-config'

const STATIC_SLUGS = new Set([
  'dynamic-qr-code-generator',
  'permanent-qr-code-free',
  'qr-code-no-subscription',
])

const BLOG_POSTS: { slug: string; date: string }[] = [
  { slug: 'qr-code-statistics', date: '2026-05-04' },
  { slug: 'qr-code-market-size', date: '2026-05-04' },
  { slug: 'qr-code-industry-usage', date: '2026-05-04' },
  { slug: 'best-free-qr-code-generator', date: '2026-05-04' },
  { slug: 'dynamic-vs-static-qr-codes', date: '2026-04-27' },
  { slug: 'qr-code-stopped-working', date: '2026-04-27' },
  { slug: 'qr-code-phishing-protection', date: '2026-05-04' },
  { slug: 'how-starbucks-uses-qr-codes', date: '2026-05-04' },
  { slug: 'how-mcdonalds-uses-qr-codes', date: '2026-05-04' },
  { slug: 'how-coca-cola-uses-qr-codes', date: '2026-05-04' },
  { slug: 'how-nike-uses-qr-codes', date: '2026-05-04' },
  { slug: 'codigo-qr-menu-restaurante', date: '2026-05-04' },
  { slug: 'generador-codigos-qr-gratis', date: '2026-05-04' },
  { slug: 'free-dynamic-qr-code-generator-no-expiration', date: '2026-06-10' },
  { slug: 'qr-code-restaurant-menu-free', date: '2026-06-10' },
  { slug: 'dynamic-vs-static-qr-code', date: '2026-06-10' },
  { slug: 'qr-code-business-card-free', date: '2026-06-10' },
  { slug: 'qr-code-alternatives-bitly-free', date: '2026-06-10' },
  { slug: 'why-do-qr-codes-expire', date: '2026-06-10' },
  { slug: 'how-to-create-qr-code-free', date: '2026-06-10' },
  { slug: 'qr-code-product-packaging-free', date: '2026-06-10' },
  { slug: 'qr-code-real-estate-flyer-free', date: '2026-06-10' },
  { slug: 'qr-code-phishing-quishing-protect', date: '2026-06-10' },
  { slug: 'qr-code-analytics-free', date: '2026-06-10' },
  { slug: 'qr-code-generator-events-free', date: '2026-06-10' },
  { slug: 'best-free-qr-code-generator-2026', date: '2026-06-10' },
  { slug: 'how-to-update-qr-code-without-reprinting', date: '2026-06-10' },
  { slug: 'qr-code-wifi-password-free', date: '2026-06-10' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/dynamic-qr-code-generator`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/permanent-qr-code-free`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/qr-code-no-subscription`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  const nicheRoutes: MetadataRoute.Sitemap = Object.values(nichePages)
    .filter((p) => !p.noIndex && !STATIC_SLUGS.has(p.slug))
    .map((p) => ({
      url: `${BASE_URL}/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticRoutes, ...nicheRoutes, ...blogRoutes]
}
