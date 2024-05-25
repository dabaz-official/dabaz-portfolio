import type { Metadata } from 'next'
import { fontSans, fontMono, fontSerif } from 'app/fonts/fonts'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Navbar } from 'components/nav'
import Footer from 'components/footer'
import { baseUrl } from 'app/sitemap'
import { seo } from 'lib/seo'
import 'styles/global.css'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | DabAZ",
    default: seo.home.title,
  },
  description: seo.home.description,

  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },

  referrer: "origin-when-cross-origin",
  keywords: [
    "personal website",
    "technology",
    "entrepreneurship",
    "innovation",
    "networking",
    "community",
    "artificial intelligence",
    "3D printing",
    "software development",
    "startup tips",
    "music production",
    "rapper",
    "front-end development",
    "DabAZ",
    "Diebold Dai",
    "dabaz_official",
  ],
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
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 15,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dabaz_official",
    title: seo.home.title,
    description: seo.home.description,
    images: seo.home.imageSrc,
  },
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
        'text-black bg-white dark:text-white dark:bg-black font-sans',
        fontSans.variable,
        fontMono.variable,
        fontMono.variable,
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
