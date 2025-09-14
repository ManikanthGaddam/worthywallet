import arcjet, { createMiddleware, detectBot, shield } from '@arcjet/next';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Routes we want to protect
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

// configure Arcjet
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        "GO_HTTP",
      ],
    }),
  ],
});

// create Arcjet middleware to use in composition
const arcjetMiddleware = createMiddleware(aj);

/**
 * Combine Clerk middleware with Arcjet:
 * clerkMiddleware can accept an async handler (auth, req) => middlewareToRun
 * We'll use auth.protect() for protected routes (cleaner than manual userId checks).
 */
export default clerkMiddleware(async (auth, req) => {
  // If the request is for a protected route, require authentication
  if (isProtectedRoute(req)) {
    // This will throw/redirect to sign-in if the user is not authenticated
    await auth.protect();
  }

  // Return the Arcjet middleware (so it will run next)
  return arcjetMiddleware(req);
});
 
export const config = {
  matcher: [
    // Skip Next internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
