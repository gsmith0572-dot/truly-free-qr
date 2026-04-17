import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.trulyfreeqr.com" }],
        destination: "https://trulyfreeqr.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "http://trulyfreeqr.com" }],
        destination: "https://trulyfreeqr.com/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
