import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/seo/schema'
import { nichePages } from '@/lib/seo/metadata-config'

const STATIC_SLUGS = new Set([
  'dynamic-qr-code-generator',
  'permanent-qr-code-free',
  'qr-code-no-subscription',
])

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/dynamic-qr-code-generator`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/permanent-qr-code-free`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/qr-code-no-subscription`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
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

  return [...staticRoutes, ...nicheRoutes]
}
