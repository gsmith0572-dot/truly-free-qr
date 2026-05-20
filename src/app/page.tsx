import type { Metadata } from 'next'
import { rootMetadata } from '@/lib/seo/metadata-config'
import QRGenerator from '@/components/QRGenerator'
import HomepageContent from '@/components/HomepageContent'

export const metadata: Metadata = rootMetadata

export default function Home() {
  return (
    <>
      <QRGenerator />
      <HomepageContent />
    </>
  )
}
