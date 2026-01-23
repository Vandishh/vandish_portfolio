import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/CustomCursor"
import { ThemeProvider } from "@/components/theme-provider"
// Remove this import
// import CursorEffects from "@/components/CursorEffects"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vandish Chauhan - Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN Stack, Next.js, and Python. Expert in RAG and Gen AI solutions.",
  keywords: "Full Stack Developer, MERN Stack, Next.js, Python, React, Node.js, RAG, Gen AI, LangChain, OpenAI",
  authors: [{ name: "Vandish Chauhan" }],
  openGraph: {
    title: "Vandish Chauhan - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN Stack, Next.js, and Python. Expert in RAG and Gen AI solutions.",
    type: "website",
  },
  generator: 'raj'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-purple-900 dark:text-purple-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
