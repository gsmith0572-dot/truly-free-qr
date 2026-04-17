import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const url = request.nextUrl
  const host = request.headers.get("host") || ""

  if (host.startsWith("www.")) {
    const canonical = `https://trulyfreeqr.com${url.pathname}${url.search}`
    return NextResponse.redirect(canonical, { status: 301 })
  }

  if (url.protocol === "http:") {
    const canonical = `https://trulyfreeqr.com${url.pathname}${url.search}`
    return NextResponse.redirect(canonical, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
