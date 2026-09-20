import { links } from "../data";

export default function Preview() {
  return (
    <section className="preview section">
      <div className="container">
        <div className="preview__frame">
          <div className="preview__chrome">
            <div className="preview__dots">
              <span />
              <span />
              <span />
            </div>
            <span className="preview__url">localhost:5173</span>
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="preview__demo-link"
            >
              Watch demo →
            </a>
          </div>
          <img
            src={links.screenshot}
            alt="Vexton application interface showing chat panel and code editor"
            className="preview__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
