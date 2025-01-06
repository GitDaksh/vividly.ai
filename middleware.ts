import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((request) => {
  const url = new URL(request.toString());
  if (url.pathname === '/api/webhooks/clerk') return;
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};