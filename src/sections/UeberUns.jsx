import { Heart, Clock, Layers } from "lucide-react";
import { Reveal, SectionHead } from "./shared.jsx";

const VALUES = [
  { icon: Heart, title: "Persönlich", text: "Wir hören zu und beraten ehrlich, damit Sie sich in Ihrem Look wiedererkennen." },
  { icon: Clock, title: "Mit Zeit für Sie", text: "Termine vereinbaren wir telefonisch, so bleibt Raum für Ihre Wünsche." },
  { icon: Layers, title: "Haare und Nails", text: "Beides an einer Adresse, praktisch verbunden in einem Besuch." },
];

export default function UeberUns() {
  return (
    <section id="ueber-uns" className="section">
      <div className="wrap about">
        <div>
          <SectionHead eyebrow="Über uns" title="Willkommen bei Angi’s" />
          <Reveal delay={.1}>
            <p className="about-text">
              Mitten in Bad Zurzach, an der Hauptstrasse 46, finden Sie unseren Salon für Haare und Nägel. Bei uns steht der Mensch im Mittelpunkt: Wir nehmen uns Zeit, hören zu und gestalten mit Sorgfalt und Freude, was Ihnen steht.
            </p>
            <p className="about-text">
              Ob Damen, Herren oder Kinder, ob Auffrischung oder neuer Look: Kommen Sie vorbei, und fühlen Sie sich bei uns einfach wohl.
            </p>
          </Reveal>
        </div>
        <ul className="values">
          {VALUES.map(({ icon: I, title, text }, i) => (
            <li key={title}>
              <Reveal delay={.1 * i} className="value">
                <span className="svc-icon"><I size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
