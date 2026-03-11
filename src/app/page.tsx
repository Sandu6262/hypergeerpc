import Hero from '@/components/hero/Hero'
import PrebuiltSection from '@/components/prebuilt/PrebuiltSection'
import BuilderSection from '@/components/builder/BuilderSection'
import ContactSection from '@/components/contact/ContactSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <PrebuiltSection />
      <BuilderSection />
      <ContactSection />
    </main>
  )
}
