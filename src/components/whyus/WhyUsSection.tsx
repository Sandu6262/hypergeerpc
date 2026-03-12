import { Shield, Wrench, Headphones, Zap } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Garanție 2 Ani',
    desc: 'Toate PC-urile livrate au garanție completă de 2 ani inclusă în preț.',
  },
  {
    icon: Wrench,
    title: 'Asamblare Inclusă',
    desc: 'Montăm și testăm fiecare PC înainte de livrare — gata de pornit din cutie.',
  },
  {
    icon: Headphones,
    title: 'Suport Tehnic',
    desc: 'Asistență post-vânzare dedicată pentru orice problemă tehnică apărută.',
  },
  {
    icon: Zap,
    title: 'Componente Originale',
    desc: 'Numai piese noi, cu factură și garanție de la producător.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="why-us-section" id="why-us">
      <div className="container">
        <h2 className="section-title">
          De ce <span className="accent">noi</span>
        </h2>
        <div className="why-us-grid">
          {items.map(({ icon: Icon, title, desc }) => (
            <div className="why-card" key={title}>
              <div className="why-icon">
                <Icon size={32} />
              </div>
              <h3 className="why-title">{title}</h3>
              <p className="why-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
