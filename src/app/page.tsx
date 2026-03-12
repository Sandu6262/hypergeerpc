import Hero from '@/components/hero/Hero'
import PrebuiltSection from '@/components/prebuilt/PrebuiltSection'
import BuilderSection from '@/components/builder/BuilderSection'
import ContactSection from '@/components/contact/ContactSection'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HypergeeRPC',
  url: 'https://sandu6262.github.io/hypergeerpc/',
  logo: 'https://sandu6262.github.io/hypergeerpc/logo.svg',
  description: 'Calculatoare de performanta pentru gaming, productivitate si creare continut.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chisinau',
    addressCountry: 'MD',
  },
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <PrebuiltSection />
      <BuilderSection />
      <ContactSection />
    </main>
  )
}
