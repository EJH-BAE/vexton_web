import { links } from "../data";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Ollama-powered · v1.0.0
        </div>

        <h1 className="hero__title">
          Your AI coding agent,
          <br />
          <span className="hero__title-accent">running on localhost</span>
        </h1>

        <p className="hero__subtitle">
          Vexton is a fast, productive coding agent powered by Ollama. Chat to
          generate code, edit in a built-in browser editor, and keep everything
          private on your machine.
        </p>

        <div className="hero__actions">
          <a href={links.releases} className="btn btn--primary btn--lg">
            Download Vexton
          </a>
          <a href={links.github} className="btn btn--secondary btn--lg" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <kbd>llama3:latest</kbd>
            <span>Default model</span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <kbd>∞</kbd>
            <span>Unlimited tokens</span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <kbd>MIT + AGPL</kbd>
            <span>Open source</span>
          </div>
        </div>
      </div>
    </section>
  );
}
