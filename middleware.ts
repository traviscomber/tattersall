import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/" || path === "/login" || path === "/signup" || path === "/forgot-password"

  // Check if user is authenticated
  const isAuthenticated = request.cookies.has("user_token")

  // Redirect logic
  if (!isPublicPath && !isAuthenticated) {
    // Redirect to login if trying to access protected route while not authenticated
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (isPublicPath && isAuthenticated) {
    // Redirect to dashboard if trying to access public route while authenticated
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// Configure the middleware to run only on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - static files (/_next, /images, /favicon.ico, etc.)
     */
    "/((?!api|_next|images|favicon.ico).*)",
  ],
}
