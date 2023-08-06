import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { VercelAnalytics } from "./vercel-analytics";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dictionary',
  description: 'Easily find the meaning of words with Dictionary. Powered by Oxford Youglish and Random Word API.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dictionary-cihat.vercel.app/learn',
    title: 'Dictionary',
    description: 'Easily find the meaning of words.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chtslk',
    creator: '@chtslk',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  metadataBase: new URL('https://dictionary-cihat.vercel.app/learn'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <VercelAnalytics />
        <Toaster />
      </body>
    </html>
  )
}
