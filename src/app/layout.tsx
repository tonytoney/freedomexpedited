import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Navigation from '@/components/Navigation'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freedom Expedited Services, Inc. | Port Drayage Trucking',
  description: 'Professional port drayage trucking services. We specialize in efficient container transportation and logistics solutions.',
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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