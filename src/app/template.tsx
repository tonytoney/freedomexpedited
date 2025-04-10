'use client'

import { ThemeProvider } from 'next-themes'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Navigation />
      {children}
      <Footer />
    </ThemeProvider>
  )
} 