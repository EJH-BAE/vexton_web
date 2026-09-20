import { links, setupSteps } from "../data";

export default function Setup() {
  return (
    <section id="setup" className="setup section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Get started</p>
          <h2 className="section-title">Up and running in minutes</h2>
          <p className="section-desc">
            You need{" "}
            <a href={links.ollama} target="_blank" rel="noopener noreferrer">
              Ollama
            </a>{" "}
            and a terminal. On Windows,{" "}
            <a href={links.nodejs} target="_blank" rel="noopener noreferrer">
              Node.js
            </a>{" "}
            is also required.
          </p>
        </div>

        <div className="setup__steps">
          {setupSteps.map((step) => (
            <article key={step.step} className="setup-card">
              <span className="setup-card__step">{step.step}</span>
              <h3 className="setup-card__title">{step.title}</h3>
              <p className="setup-card__desc">{step.description}</p>
              <pre className="setup-card__code">
                <code>{step.code}</code>
              </pre>
            </article>
          ))}
        </div>

        <div className="setup__methods">
          <h3 className="setup__methods-title">Launch by platform</h3>
          <div className="setup__methods-grid">
            <div className="setup-method">
              <span className="setup-method__os">Windows</span>
              <code>run_web.bat</code>
            </div>
            <div className="setup-method">
              <span className="setup-method__os">macOS</span>
              <code>npm run dev</code>
            </div>
            <div className="setup-method">
              <span className="setup-method__os">Linux</span>
              <code>npm run dev</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
