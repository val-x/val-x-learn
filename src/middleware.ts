import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const isProtectedRoute = createRouteMatcher(["/group(.*)"])

export default clerkMiddleware(async (auth, req) => {
  try {
    const reqPath = req.nextUrl.pathname

    // Skip all header checks for the root route
    if (reqPath === "/") {
      return NextResponse.next()
    }

    // Only protect group routes
    if (isProtectedRoute(req)) {
      await auth().protect()
    }

    // Only check domain for group routes
    if (reqPath.includes("/group")) {
      const baseHost = "localhost:3000"
      const host = await req.headers.get("host")
      const origin = req.nextUrl.origin

      if (!baseHost.includes(host as string)) {
        const response = await fetch(`${origin}/api/domain?host=${host}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        const data = await response.json()
        if (data.status === 200 && data) {
          return NextResponse.rewrite(
            new URL(reqPath, `https://${data.domain}/${reqPath}`),
          )
        }
      }
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    return NextResponse.next()
  }
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
