import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Truly Free QR — Free Dynamic QR Code Generator",
  description: "Generate dynamic and static QR codes free. No account, no subscription, no expiration. Free forever.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script data-cfasync="false" src="https://cmp.gatekeeperconsent.com/min.js"></script>
        <script data-cfasync="false" src="https://the.gatekeeperconsent.com/cmp.min.js"></script>
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd = ezstandalone.cmd || [];` }} />
        <script src="//ezoicanalytics.com/analytics.js"></script>
      </head>
      <body className={inter.className}>
        <Header />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
