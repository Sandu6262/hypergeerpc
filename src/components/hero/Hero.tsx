import { Flame, Monitor, Wrench } from 'lucide-react'
import HeroParticles from './HeroParticles'
import FuzzyText from '@/components/ui/FuzzyText'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-terminal">
          SYSTEM ONLINE — HYPERGEERPC v2.0
        </div>
        <div className="hero-badge">
          <Flame size={13} />
          Cele mai tari PC-uri din Moldova
        </div>
        <h1 className="hero-title">
          <FuzzyText
            fontSize="clamp(2.5rem, 8vw, 6rem)"
            fontWeight={900}
            color="#EDB600"
            baseIntensity={0.15}
            hoverIntensity={0.5}
            enableHover={true}
          >
            HypergeeRPC
          </FuzzyText>
          <FuzzyText
            fontSize="clamp(1rem, 3vw, 1.8rem)"
            fontWeight={700}
            color="#ffffff"
            baseIntensity={0.08}
            hoverIntensity={0.35}
            enableHover={true}
            className="hero-sub-fuzzy"
          >
            Calculatoare de Performanta
          </FuzzyText>
        </h1>
        <div className="hero-btns">
          <a href="#prebuilt" className="btn-primary">
            <Monitor size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
            Calculatoare Gata
          </a>
          <a href="#builder" className="btn-secondary">
            <Wrench size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
            Construieste Acum
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">500+</span>
            <span className="stat-lbl">Clienti Multumiti</span>
          </div>
          <div className="stat-div" />
          <div className="stat-item">
            <span className="stat-num">6</span>
            <span className="stat-lbl">Modele Disponibile</span>
          </div>
          <div className="stat-div" />
          <div className="stat-item">
            <span className="stat-num">2 ani</span>
            <span className="stat-lbl">Garantie</span>
          </div>
        </div>
      </div>
      <HeroParticles />
    </section>
  )
}
