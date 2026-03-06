import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">HYPERGEE<span className="logo-accent">RPC</span></span>
            <p>Calculatoare de performanta pentru toti</p>
          </div>
          <div className="footer-links">
            <a href="#prebuilt">Calculatoare</a>
            <a href="#builder">PC Builder</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 HypergeeRPC. Toate drepturile rezervate. Facut cu{' '}
            <Heart size={13} fill="#8B00FF" color="#8B00FF" style={{ display: 'inline', verticalAlign: 'middle' }} />
            {' '}in Moldova.
          </p>
        </div>
      </div>
    </footer>
  )
}
