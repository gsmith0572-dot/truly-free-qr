'use client'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

// /admin and /dashboard show client data: no tag manager on a direct load of those pages.
export default function GTM() {
  const path = usePathname()
  if (path.startsWith('/admin') || path.startsWith('/dashboard')) return null
  return <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PW5KJDZK');`}</Script>
}
