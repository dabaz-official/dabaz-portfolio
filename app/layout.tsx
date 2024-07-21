import type { Metadata } from 'next'
import type { Viewport } from 'next'
import localFont from 'next/font/local'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { baseUrl } from 'app/sitemap'
import { seo } from 'lib/seo'
import './globals.css'
import { Navbar } from 'components/layout/nav'
import { Footer } from 'components/layout/footer'

const inter = localFont({
  src: './inter.woff2',
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dabaz.me'),
  title: {
    template: "%s | DabAZ",
    default: seo.home.title,
  },
  description: seo.home.description,

  keywords: "DabAZ, Diebold Dai, dabaz_official",
  authors: [{ name: "DabAZ", url: "https://dabaz.me" }],
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: baseUrl,
    siteName: seo.home.siteName,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': 15,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dabaz_official",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black h-full antialiased select-none',
        inter.variable
      )}
    >
      <body>
        <Navbar />
        <main className="max-w-7xl p-4 lg:px-8 mx-auto mt-16">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
