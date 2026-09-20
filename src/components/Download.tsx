import { downloads, links } from "../data";

export default function Download() {
  return (
    <section id="download" className="download section">
      <div className="container">
        <div className="download__card">
          <div className="download__content">
            <p className="section-label">Download</p>
            <h2 className="section-title">Get Vexton v1.0.0</h2>
            <p className="section-desc">
              Installers for Windows and macOS, plus a Linux archive. Or build
              from source on{" "}
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              .
            </p>
          </div>

          <div className="download__grid">
            {downloads.map((dl) => (
              <a
                key={dl.platform}
                href={dl.href}
                className="download-btn"
                download
              >
                <span className="download-btn__icon" aria-hidden="true">
                  {dl.icon}
                </span>
                <span className="download-btn__text">
                  <strong>{dl.platform}</strong>
                  <small>{dl.note}</small>
                </span>
                <span className="download-btn__arrow">↓</span>
              </a>
            ))}
          </div>

          <p className="download__footnote">
            All releases on{" "}
            <a href={links.releases} target="_blank" rel="noopener noreferrer">
              GitHub Releases
            </a>
            . Requires Ollama with a compatible model installed.
          </p>
        </div>
      </div>
    </section>
  );
}
