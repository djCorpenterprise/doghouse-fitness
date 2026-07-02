import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import Toast from '@/components/Toast'

export const metadata: Metadata = {
  title: 'Dog House — Fitness & Golf',
  description: 'Loyalty. Discipline. Strength. One Brand. Two Worlds.',
  keywords: 'Dog House Fitness, Dog House Golf, apparel, streetwear, gym, golf',
  openGraph: {
    title: 'Dog House — Fitness & Golf',
    description: 'Loyalty. Discipline. Strength.',
    type: 'website',
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
