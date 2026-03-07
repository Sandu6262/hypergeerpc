import type { Metadata } from 'next'
import { Orbitron, Rajdhani } from 'next/font/google'
import './globals.css'
import { StoreProvider } from '@/store/StoreContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import dynamic from 'next/dynamic'
import CartSidebar from '@/components/cart/CartSidebar'
const GalaxyBg = dynamic(() => import('@/components/background/GalaxyBg'), { ssr: false })
import Toast from '@/components/ui/Toast'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  title: 'HypergeeRPC - Calculatoare & PC Builder',
  description: 'Cumpara calculatoare prefabricate sau construieste-l pe al tau. Componente premium, preturi accesibile, design RGB.',
  icons: { icon: `${BASE}/favicon.svg` },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body>
        <StoreProvider>
          <GalaxyBg />
          <Navbar />
          <CartSidebar />
          {children}
          <Toast />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
