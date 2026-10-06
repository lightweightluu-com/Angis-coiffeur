import { motion, useReducedMotion } from "framer-motion";
import { Scissors, Palette, Brush, Gem, Sparkles, Droplets } from "lucide-react";
import { GALLERY } from "../config.js";
import { Reveal, SectionHead } from "./shared.jsx";

const ICONS = { balayage: Brush, color: Palette, schnitt: Scissors, gel: Gem, nailart: Sparkles, shellac: Droplets };

export default function Galerie() {
  const reduce = useReducedMotion();
  return (
    <section id="galerie" className="section section-alt">
      <div className="wrap">
        <SectionHead eyebrow="Galerie" title="Inspiration für Ihren nächsten Termin"
          intro="Ein Blick auf das, was Sie bei uns erwartet: Farben, Formen und Looks mit Liebe zum Detail." />
        <div className="gallery">
          {GALLERY.map((g, i) => {
            const I = ICONS[g.id] || Sparkles;
            return (
              <Reveal key={g.id} delay={(i % 3) * .08}>
                <motion.figure className={`tile tile-${i % 6}`} whileHover={reduce ? undefined : { scale: 1.02 }} transition={{ duration: .4 }}>
                  {g.src
                    ? <img src={g.src} alt={g.alt} loading="lazy" />
                    : <span className="tile-art" aria-hidden="true"><I size={56} strokeWidth={1} /></span>}
                  <figcaption><b className="serif">{g.title}</b><span>{g.sub}</span></figcaption>
                </motion.figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
