import { useEffect, useState } from "react";
import { links } from "../data";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Setup", href: "#setup" },
  { label: "Download", href: "#download" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__brand">
          <img src={links.logo} alt="Vexton" className="navbar__logo" />
          <span>Vexton</span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link navbar__link--external"
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </a>
        </nav>

        <div className="navbar__actions">
          <a href={links.releases} className="btn btn--primary btn--sm">
            Download
          </a>
          <button
            type="button"
            className="navbar__menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
