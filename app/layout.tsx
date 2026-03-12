import type { Metadata, Viewport } from 'next'
import { Orbitron, Roboto } from 'next/font/google'
import './globals.css'
import { StoreProvider } from '@/store/StoreContext'
import { Header } from '@/components/ui/header-2'
import Footer from '@/components/layout/Footer'
import dynamic from 'next/dynamic'
import CartSidebar from '@/components/cart/CartSidebar'
const GalaxyBg = dynamic(() => import('@/components/background/GalaxyBg'), { ssr: false })
const TargetCursor = dynamic(() => import('@/components/ui/TargetCursor'), { ssr: false })
import Toast from '@/components/ui/Toast'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
})

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sandu6262.github.io/hypergeerpc'),

  title: {
    default: 'HypergeeRPC - Calculatoare & PC Builder | Chisinau, Moldova',
    template: '%s | HypergeeRPC',
  },

  description:
    'Cumpara calculatoare prefabricate sau configureaza-l pe al tau. Gaming, productivitate, creare continut. AMD Ryzen, Intel Core, NVIDIA RTX. Garantie 2 ani. Chisinau, Moldova.',

  keywords: [
    'calculatoare Moldova', 'PC gaming Moldova', 'PC Builder Chisinau',
    'calculatoare prefabricate', 'AMD Ryzen', 'NVIDIA RTX',
    'calculatoare performanta', 'HypergeeRPC', 'cumpara calculator Moldova',
  ],

  alternates: {
    canonical: 'https://sandu6262.github.io/hypergeerpc/',
    languages: { ro: 'https://sandu6262.github.io/hypergeerpc/' },
  },

  openGraph: {
    type: 'website',
    locale: 'ro_MD',
    url: 'https://sandu6262.github.io/hypergeerpc/',
    siteName: 'HypergeeRPC',
    title: 'HypergeeRPC - Calculatoare & PC Builder | Chisinau, Moldova',
    description:
      'Calculatoare de performanta pentru gaming si productivitate. AMD Ryzen, NVIDIA RTX. Garantie 2 ani.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'HypergeeRPC' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'HypergeeRPC - Calculatoare & PC Builder',
    description: 'Calculatoare de performanta pentru gaming si productivitate. Garantie 2 ani.',
    images: ['/og-image.jpg'],
  },

  icons: { icon: `${BASE}/favicon.svg` },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${orbitron.variable} ${roboto.variable}`}>
      <body>
        <StoreProvider>
          <TargetCursor />
          <GalaxyBg />
          <Header />
          <CartSidebar />
          {children}
          <Toast />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
