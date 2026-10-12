import type { Metadata } from 'next'

// Per-browser tool page (codes live in localStorage): nothing here belongs in a search index.
export const metadata: Metadata = {
  title: 'My QR Codes',
  robots: { index: false, follow: false },
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
