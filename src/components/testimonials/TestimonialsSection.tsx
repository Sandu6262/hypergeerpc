const reviews = [
  {
    name: 'Ion M.',
    text: 'Am primit PC-ul în 2 zile, totul perfect asamblat. Recomandat cu încredere!',
    stars: 5,
  },
  {
    name: 'Ana C.',
    text: 'Cel mai bun raport calitate-preț din Moldova. Suportul tehnic e excelent.',
    stars: 5,
  },
  {
    name: 'Mihai P.',
    text: 'Builder-ul de pe site m-a ajutat să aleg exact ce am nevoie. Super experiență.',
    stars: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimoniale">
      <div className="container">
        <h2 className="section-title">
          Ce spun <span className="accent">clienții</span>
        </h2>
        <div className="testimonials-grid">
          {reviews.map(({ name, text, stars }) => (
            <div className="testimonial-card" key={name}>
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{text}</p>
              <div className="testimonial-stars">
                {'★'.repeat(stars)}
              </div>
              <div className="testimonial-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
