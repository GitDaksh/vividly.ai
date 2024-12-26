import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
        <body className={cn("min-h-screen", IBMPlex.variable)}>
          <SignedOut>
            <div 
              className="min-h-screen relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1541359927273-d76820fc43f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                opacity: "0.9"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/90 to-white/90" />
              <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
                <h1 className="text-6xl font-bold text-[#624cf5] mb-6">
                  Imaginify
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mb-12">
                  Transform your imagination into reality with our AI-powered image generation platform
                </p>
                <div className="flex flex-col items-center">
                  <SignInButton mode="modal">
                    <button className="bg-[#624cf5] hover:bg-[#5241d4] text-white font-semibold py-4 px-8 rounded-lg text-xl mb-4">
                      Get Started
                    </button>
                  </SignInButton>
                  <p className="text-gray-500">
                    Join thousands of creators using Imaginify
                  </p>
                </div>
              </main>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="p-4">
              {/* <UserButton afterSignOutUrl="/"/> */}
              {children}
            </div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  )
}