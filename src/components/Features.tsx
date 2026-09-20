import { features } from "../data";

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Features</p>
          <h2 className="section-title">Code smarter, stay local</h2>
          <p className="section-desc">
            Vexton brings the power of AI-assisted development to your machine —
            no cloud APIs, no subscriptions, no data leaving your desk.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
