import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import Toast from '@/components/Toast'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.doghouse.fitness'),
  title: 'Dog House — Fitness & Golf',
  description: 'Loyalty. Discipline. Strength. One Brand. Two Worlds. Dog Days Drop 001 — coming soon.',
  keywords: 'Dog House Fitness, Dog House Golf, apparel, streetwear, gym, golf, Dog Days',
  openGraph: {
    title: 'Dog House — Fitness & Golf',
    description: 'Loyalty. Discipline. Strength. One Brand. Two Worlds. Dog Days Drop 001 — coming soon.',
    url: 'https://www.doghouse.fitness',
    siteName: 'Dog House',
    type: 'website',
    images: [
      {
        url: '/images/doghouse-og-v3.jpg',
        width: 1200,
        height: 630,
        alt: 'Dog House — Fitness & Golf',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dog House — Fitness & Golf',
    description: 'Loyalty. Discipline. Strength. One Brand. Two Worlds.',
    images: ['/images/doghouse-og-v3.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  )
}
