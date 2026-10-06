import { SALON } from "../config.js";

const LINKS = [["Leistungen", "#leistungen"], ["Galerie", "#galerie"], ["Über uns", "#ueber-uns"], ["Termin", "#termin"], ["Kontakt", "#kontakt"]];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="brand">Angi’s <em>Hair & Nail</em> Design</p>
          <p className="footer-text">{SALON.street}<br />{SALON.city}</p>
          <p className="footer-text"><a href={SALON.phoneHref}>{SALON.phoneText}</a></p>
        </div>
        <nav aria-label="Fusszeile"><ul>{LINKS.map(([l, h]) => <li key={h}><a href={h}>{l}</a></li>)}</ul></nav>
      </div>
      <div className="wrap footer-bottom">© {new Date().getFullYear()} {SALON.name}, Bad Zurzach</div>
    </footer>
  );
}
