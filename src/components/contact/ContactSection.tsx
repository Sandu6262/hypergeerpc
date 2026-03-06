import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const contacts: { Icon: LucideIcon; title: string; text: string; small: string }[] = [
  { Icon: Phone, title: 'Telefon',  text: '+40 700 123 456',    small: 'Luni - Vineri' },
  { Icon: Mail,  title: 'Email',    text: 'contact@neontech.ro', small: 'Raspuns in 24h' },
  { Icon: MapPin, title: 'Adresa',  text: 'Str. Informaticii 7', small: 'Chisinau, Moldova' },
  { Icon: Clock, title: 'Program',  text: '09:00 - 18:00',       small: 'Luni - Vineri' },
]

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact <span className="accent">&amp; Suport</span></h2>
        <div className="contact-grid">
          {contacts.map(({ Icon, title, text, small }) => (
            <div key={title} className="contact-card">
              <span className="contact-icon"><Icon size={36} strokeWidth={1.5} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <small>{small}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
