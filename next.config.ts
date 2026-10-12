import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/blog/best-free-qr-code-generator-2026",
        destination: "/blog/best-free-qr-code-generator",
        permanent: true,
      },
      {
        source: "/blog/dynamic-vs-static-qr-code",
        destination: "/blog/dynamic-vs-static-qr-codes",
        permanent: true,
      },
      {
        source: "/blog/qr-code-phishing-quishing-protect",
        destination: "/blog/qr-code-phishing-protection",
        permanent: true,
      },
      {
        source: "/blog/qr-codes-for-pharmacies-and-medical-supply-companies",
        destination: "/blog/qr-code-industry-usage",
        permanent: true,
      },
      {
        source: "/blog/qr-codes-for-spas-and-salons-booking-links-and-loyalty-progr",
        destination: "/blog/qr-code-industry-usage",
        permanent: true,
      },
      {
        source: "/blog/qr-codes-for-personal-trainers-and-health-coaches",
        destination: "/blog/qr-code-industry-usage",
        permanent: true,
      },
      {
        source: "/blog/qr-codes-for-childcare-centers-and-preschools",
        destination: "/blog/qr-code-industry-usage",
        permanent: true,
      },
      {
        source: "/blog/how-small-businesses-use-qr-codes-to-compete-with-larger-cha",
        destination: "/blog/how-to-create-qr-code-free",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
