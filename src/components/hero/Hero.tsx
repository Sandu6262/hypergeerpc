import { Flame, Monitor, Wrench } from 'lucide-react'
import HeroParticles from './HeroParticles'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <Flame size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
          Cele mai tari PC-uri din Romania
        </div>
        <h1 className="hero-title">
          <span className="rgb-text">HypergeeRPC</span>
          <br />
          <span className="hero-sub">Calculatoare de Performanta</span>
        </h1>
        <p className="hero-desc">
          Cumpara calculatoare prefabricate sau construieste-l pe al tau.<br />
          Componente premium &middot; Preturi accesibile &middot; Design RGB.
        </p>
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
