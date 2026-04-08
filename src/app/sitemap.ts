import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/seo/schema'
import { nichePages } from '@/lib/seo/metadata-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/dynamic-qr-code-generator`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/permanent-qr-code-free`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/qr-code-no-subscription`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ]

  const nicheRoutes: MetadataRoute.Sitemap = Object.values(nichePages)
    .filter((p) => !p.noIndex)
    .map((p) => ({
      url: `${BASE_URL}/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [...staticRoutes, ...nicheRoutes]
}
