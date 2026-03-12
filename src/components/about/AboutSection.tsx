const stats = [
  { value: '500+', label: 'Clienți mulțumiți' },
  { value: '6', label: 'Modele disponibile' },
  { value: '2 Ani', label: 'Garanție completă' },
]

export default function AboutSection() {
  return (
    <section className="about-section" id="despre-noi">
      <div className="container">
        <div className="about-inner">
          <div className="about-text">
            <h2 className="section-title">
              Despre <span className="accent">noi</span>
            </h2>
            <p className="about-desc">
              HypergeeRPC este o companie din Chișinău, Moldova, fondată în 2020.
              Ne specializăm în asamblarea și vânzarea de calculatoare personalizate
              pentru gaming, design și productivitate. Fiecare PC este testat manual
              înainte de livrare, iar clienții noștri beneficiază de suport tehnic
              dedicat pe toată perioada garanției.
            </p>
          </div>
          <div className="about-stats">
            {stats.map(({ value, label }) => (
              <div className="about-stat" key={label}>
                <span className="about-stat-value accent">{value}</span>
                <span className="about-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
