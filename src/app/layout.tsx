import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { rootMetadata } from '@/lib/seo/metadata-config'
import { Analytics } from "@vercel/analytics/next"
import { buildPageSchema } from '@/lib/seo/schema'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = rootMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = buildPageSchema()

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8680464039127093"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-surface font-inter antialiased">
        {children}
      <Analytics />
      </body>
    </html>
  )
}
