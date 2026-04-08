import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generateNicheMetadata, nichePages } from '@/lib/seo/metadata-config'
import { buildNicheSchema } from '@/lib/seo/schema'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.values(nichePages)
    .filter((p) => !p.noIndex)
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = Object.values(nichePages).find((p) => p.slug === slug)
  if (!page) return {}
  return generateNicheMetadata(page)
}

export default async function NichePage({ params }: Props) {
  const { slug } = await params
  const page = Object.values(nichePages).find((p) => p.slug === slug)
  if (!page) notFound()

  const schema = buildNicheSchema({
    name: page.title,
    description: page.description,
    slug: page.slug,
    faqItems: [
      {
        q: `Is the ${page.industry} QR code really free forever?`,
        a: `Yes. Truly Free QR provides permanent ${page.industry.toLowerCase()} QR codes at no cost. There is no trial period, no subscription, and no account required.`,
      },
      {
        q: `Can I update the destination of my ${page.industry} QR code?`,
        a: `Yes. Dynamic codes let you change the destination URL at any time from your dashboard without reprinting or generating a new code.`,
      },
    ],
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </main>
    </>
  )
}
