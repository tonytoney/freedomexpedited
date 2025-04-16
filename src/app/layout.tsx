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
  keywords: 'drayage, intermodal freight, container drayage, port logistics, full truckload shipping, expedited freight, Freedom Expedited, freight solutions USA, transportation company',
  authors: [{ name: 'Freedom Expedited' }],
  robots: 'index, follow',
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