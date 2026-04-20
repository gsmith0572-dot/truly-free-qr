import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TrulyFreeQR - Free Dynamic QR Code Generator",
  description: "Dynamic QR codes that never expire. No account, no subscription, no credit card. Free forever.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon-512.png?v=3",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
