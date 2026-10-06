import { MapPin, Phone, Clock, Car, Navigation } from "lucide-react";
import { SALON } from "../config.js";
import { Reveal, SectionHead } from "./shared.jsx";

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${SALON.name}, ${SALON.street}, ${SALON.city}`);

export default function Kontakt() {
  const items = [
    { icon: MapPin, title: "Adresse", body: <>{SALON.name}<br />{SALON.street}<br />{SALON.city}</> },
    { icon: Phone, title: "Telefon", body: <a href={SALON.phoneHref}>{SALON.phoneText}</a> },
    { icon: Clock, title: "Öffnungszeiten", body: <>Termine nach telefonischer Vereinbarung</> },
    { icon: Car, title: "Parkplätze", body: <>An der Hauptstrasse und in der Umgebung</> },
  ];
  return (
    <section id="kontakt" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Kontakt" title="Wir freuen uns auf Sie" intro="Besuchen Sie uns in Bad Zurzach oder rufen Sie einfach an." />
        <div className="contact-grid">
          {items.map(({ icon: I, title, body }, i) => (
            <Reveal key={title} delay={.08 * i} className="contact-card">
              <span className="svc-icon"><I size={20} strokeWidth={1.6} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={.1} className="contact-cta">
          <a className="btn btn-primary" href={SALON.phoneHref}><Phone size={17} />Jetzt anrufen</a>
          <a className="btn btn-ghost" href={MAP_URL} target="_blank" rel="noopener noreferrer"><Navigation size={17} />Route planen</a>
        </Reveal>
      </div>
    </section>
  );
}
