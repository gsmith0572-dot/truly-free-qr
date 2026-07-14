import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
    ]
  },
}

export default nextConfig
