import { links } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={links.logo} alt="" className="footer__logo" aria-hidden="true" />
          <div>
            <strong>Vexton</strong>
            <p>Ollama-powered AI coding agent</p>
          </div>
        </div>

        <div className="footer__links">
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={links.releases} target="_blank" rel="noopener noreferrer">
            Releases
          </a>
          <a href={links.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={links.ollama} target="_blank" rel="noopener noreferrer">
            Ollama
          </a>
          <a href={links.license} target="_blank" rel="noopener noreferrer">
            License
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Bae Juhan. Built from scratch.
        </p>
      </div>
    </footer>
  );
}
