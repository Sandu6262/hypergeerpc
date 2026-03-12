'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Ce garanție au PC-urile?',
    a: 'Toate calculatoarele noastre vin cu garanție de 2 ani. Aceasta acoperă defecțiunile de fabricație la toate componentele incluse.',
  },
  {
    q: 'Livrați în toată Moldova?',
    a: 'Da, livrăm în toată Moldova prin curier. Livrarea în Chișinău este gratuită; pentru alte localități costul variază.',
  },
  {
    q: 'Pot plăti în rate?',
    a: 'Da, oferim posibilitatea de plată în rate prin partenerii noștri financiari. Contactați-ne pentru detalii.',
  },
  {
    q: 'Cât durează livrarea?',
    a: 'Livrarea în Chișinău se face în 1-2 zile lucrătoare. În restul Moldovei, termenul este de 2-4 zile lucrătoare.',
  },
  {
    q: 'Pot aduce PC-ul la service?',
    a: 'Da, oferim service în garanție și post-garanție la sediul nostru din Chișinău. Contactați-ne înainte pentru programare.',
  },
  {
    q: 'Componentele sunt originale?',
    a: 'Da, folosim exclusiv componente noi, originale, achiziționate direct de la distribuitori autorizați, cu factură și garanție de producător.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i))

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title">
          Întrebări <span className="accent">frecvente</span>
        </h2>
        <div className="faq-list">
          {faqs.map(({ q, a }, i) => (
            <div className={`faq-item${open === i ? ' faq-item--open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{q}</span>
                <ChevronDown size={20} className="faq-chevron" />
              </button>
              <div className="faq-answer">
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
