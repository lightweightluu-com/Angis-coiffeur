import { Scissors, Droplets, Palette, Sparkles, Wand2, Brush, Gem, Hand } from "lucide-react";
import { Reveal, SectionHead } from "./shared.jsx";

const HAARE = [
  { icon: Scissors, title: "Schnitt für Damen, Herren und Kinder", text: "Ein Schnitt, der zu Ihrem Typ und Ihrem Alltag passt, vom Kurzhaarschnitt bis zur Länge mit Struktur." },
  { icon: Droplets, title: "Waschen und Föhnen", text: "Wohltuende Pflege und ein Finish, das den ganzen Tag hält." },
  { icon: Palette, title: "Colorationen", text: "Kräftige, natürliche oder ganz neue Farben, abgestimmt auf Haut und Haar." },
  { icon: Brush, title: "Strähnen und Balayage", text: "Weiche Übergänge und Licht im Haar, für einen Look, der schön herauswächst." },
  { icon: Wand2, title: "Styling", text: "Für den Alltag, das Fest oder den grossen Auftritt." },
];
const NAILS = [
  { icon: Hand, title: "Maniküre", text: "Gepflegte Hände und Nägel, die sich so gut anfühlen, wie sie aussehen." },
  { icon: Gem, title: "Nagelmodellage in Gel oder Acryl", text: "Stabile, schön geformte Nägel in der Länge und Form, die Sie sich wünschen." },
  { icon: Sparkles, title: "Nail Art", text: "Von dezent bis auffallend: Muster, Farbe und Details nach Ihrem Geschmack." },
  { icon: Palette, title: "Shellac und Gellack", text: "Leuchtende Farbe mit Glanz, die lange hält." },
];

function Group({ name, lead, items, delay }) {
  return (
    <Reveal className="group" delay={delay}>
      <h3 className="serif group-title">{name}</h3>
      <p className="group-lead">{lead}</p>
      <ul className="svc-list">
        {items.map(({ icon: I, title, text }) => (
          <li key={title} className="svc">
            <span className="svc-icon"><I size={20} strokeWidth={1.6} aria-hidden="true" /></span>
            <div><h4>{title}</h4><p>{text}</p></div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Leistungen() {
  return (
    <section id="leistungen" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Leistungen" title="Alles für Haare und Nägel, an einem Ort"
          intro="Wählen Sie, was Ihnen guttut. Gerne beraten wir Sie persönlich und finden gemeinsam die passende Lösung." />
        <div className="groups">
          <Group name="Haare" lead="Für Damen, Herren und Kinder" items={HAARE} />
          <Group name="Nails" lead="Pflege, Form und Farbe" items={NAILS} delay={.12} />
        </div>
      </div>
    </section>
  );
}
