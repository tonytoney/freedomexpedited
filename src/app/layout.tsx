import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import Navigation from '@/components/Navigation'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export const metadata: Metadata = {
  title: 'Freedom Expedited | Drayage, Intermodal & Freight Solutions',
  description: 'Freedom Expedited delivers fast, reliable drayage, intermodal, and full truckload solutions with real-time tracking and coast-to-coast service coverage.',
  keywords: 'drayage, intermodal freight, container drayage, port logistics, full truckload shipping, expedited freight, Freedom Expedited, freight solutions USA, transportation company, port drayage services, container transport, logistics solutions',
  authors: [{ name: 'Freedom Expedited' }],
  creator: 'Freedom Expedited',
  publisher: 'Freedom Expedited',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://freedomexpedited.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://freedomexpedited.com',
    siteName: 'Freedom Expedited',
    title: 'Freedom Expedited | Drayage, Intermodal & Freight Solutions',
    description: 'Freedom Expedited delivers fast, reliable drayage, intermodal, and full truckload solutions with real-time tracking and coast-to-coast service coverage.',
    images: [
      {
        url: '/images/hero-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Freedom Expedited Truck with Container',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freedom Expedited | Drayage, Intermodal & Freight Solutions',
    description: 'Freedom Expedited delivers fast, reliable drayage, intermodal, and full truckload solutions with real-time tracking and coast-to-coast service coverage.',
    images: ['/images/hero-truck.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon/favicon.svg',
    apple: '/favicon/apple-touch-icon.svg',
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="BPRw5i6PrJlbfCpMQlZULRs0Fb1fdeLf5bitxJvum8Q" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TransportationCompany",
              "name": "Freedom Expedited",
              "description": "Freedom Expedited delivers fast, reliable drayage, intermodal, and full truckload solutions with real-time tracking and coast-to-coast service coverage.",
              "url": "https://freedomexpedited.com",
              "logo": "https://freedomexpedited.com/images/freedom-logo-removebg-preview (1).png",
              "image": "https://freedomexpedited.com/images/hero-truck.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "serviceArea": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Transportation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Port Drayage",
                      "description": "Efficient container transportation from ports to warehouses or distribution centers."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Container Transport",
                      "description": "Reliable transportation of containers across the Southeast region."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "24/7 Dispatch",
                      "description": "Round-the-clock dispatch services to meet your transportation needs."
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.linkedin.com/company/freedom-expedited",
                "https://www.facebook.com/freedomexpedited"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 