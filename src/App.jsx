import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from "framer-motion";
import Leistungen from "./sections/Leistungen.jsx";
import Galerie from "./sections/Galerie.jsx";
import UeberUns from "./sections/UeberUns.jsx";
import Termin from "./sections/Termin.jsx";
import Kontakt from "./sections/Kontakt.jsx";
import Footer from "./sections/Footer.jsx";
import { Phone, MapPin, Car, Clock, Menu, X, Sparkles, CalendarCheck } from "lucide-react";

const LINKS = [
  ["Leistungen", "#leistungen"], ["Galerie", "#galerie"], ["Über uns", "#ueber-uns"], ["Termin", "#termin"], ["Kontakt", "#kontakt"],
];
const TEL_TEXT = "+41 56 249 18 62", TEL_HREF = "tel:+41562491862";

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header className="nav" initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }}>
      <div className="wrap">
        <div className="nav-row">
          <a href="#top" className="brand">Angi’s <em>Hair & Nail</em> Design</a>
          <nav className="links" aria-label="Hauptnavigation">
            {LINKS.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
          </nav>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a className="btn btn-primary" href={TEL_HREF} style={{ padding: "11px 18px" }}>
              <Phone size={16} /><span className="call-label">{TEL_TEXT}</span><span className="sr-only">Anrufen</span>
            </a>
            <button className="icon-btn burger" aria-expanded={open} aria-label={open ? "Menü schliessen" : "Menü öffnen"} onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav className="mobile" aria-label="Mobile Navigation" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: .4, ease: [.22, 1, .36, 1] }}>
              <div style={{ paddingBottom: 12 }}>
                {LINKS.map(([l, h], i) => (
                  <motion.a key={h} href={h} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .08 * i + .1 }}>{l}</motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

/* Fliessende Strähnen als Hintergrund über die ganze Hero-Breite */
function Strands({ reduce }) {
  const paths = Array.from({ length: 18 }, (_, i) => {
    const o = i * 22;
    return `M ${380 + o} -20 C ${620 + o * .4} 140, ${300 + o * .9} 300, ${700 + o * .5} 520`;
  });
  return (
    <svg className="strands" viewBox="0 0 1200 500" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      {paths.map((d, i) => (
        <motion.path key={i} d={d} fill="none" stroke="var(--rose)" strokeWidth={i % 3 === 0 ? 1.6 : .8} strokeOpacity={i % 3 === 0 ? .7 : .38}
          initial={reduce ? false : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.6, delay: .4 + i * .07, ease: "easeOut" }} />
      ))}
    </svg>
  );
}

const SERVICES = [
  { title: "Haare", text: "Für Damen, Herren und Kinder", detail: "Ein Schnitt, der zu Ihnen passt, dazu Waschen und Föhnen, Colorationen, Strähnen und Balayage. Zum Schluss ein Styling, mit dem Sie gerne in den Spiegel schauen." },
  { title: "Nails", text: "Hände, die auffallen", detail: "Gepflegte Maniküre, Nagelmodellage in Gel oder Acryl, langanhaltender Shellac und Gellack. Auf Wunsch mit kreativer Nail Art, ganz nach Ihrem Geschmack." },
];

function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const word = { hidden: { y: "110%" }, show: (i) => ({ y: 0, transition: { duration: .9, delay: .25 + i * .09, ease: [.22, 1, .36, 1] } }) };
  const fade = (d) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: .8, delay: d, ease: [.22, 1, .36, 1] } });
  const lines = [["Haar", "&", "Nägel,"], ["mit", "Herz", "gestaltet."]];
  let n = 0;

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="orb" style={{ width: 340, height: 340, background: "var(--rose-soft)", opacity: .7, top: -100, left: -110, y: reduce ? 0 : yOrb }} />
      <motion.div className="strands-wrap" style={{ y: reduce ? 0 : yBg }}><Strands reduce={reduce} /></motion.div>
      <div className="wrap hero-inner">
        <motion.div className="eyebrow" {...fade(.1)}><i />Haare & Nails · Bad Zurzach</motion.div>
        <h1 className="h1">
          {lines.map((line, li) => (
            <span key={li} style={{ display: "block" }}>
              {line.map((w) => {
                const i = n++;
                return (
                  <span key={w} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingBottom: ".12em", marginRight: ".25em" }}>
                    <motion.span style={{ display: "inline-block" }} className={w === "gestaltet." ? "it" : ""} variants={word} custom={i} initial="hidden" animate="show">{w}</motion.span>
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
        <motion.p className="lead" {...fade(.9)}>
          Willkommen bei Angi’s Hair und Nail Design an der Hauptstrasse 46. Ob frischer Schnitt, leuchtende Farbe oder perfekt gepflegte Nägel: Bei uns nehmen Sie sich Zeit für sich, und wir uns Zeit für Sie.
        </motion.p>
        <motion.div className="cta" {...fade(1.05)}>
          <a className="btn btn-primary" href="#termin"><CalendarCheck size={17} />Jetzt Termin vereinbaren</a>
          <a className="btn btn-ghost" href="#leistungen"><Sparkles size={17} />Leistungen entdecken</a>
        </motion.div>

        <div className="services">
          {SERVICES.map((s, i) => (
            <motion.article key={s.title} className="service" {...fade(1.2 + i * .12)} whileHover={reduce ? undefined : { y: -4 }}>
              <h2>{s.title}</h2>
              <p className="service-sub">{s.text}</p>
              <p className="service-detail">{s.detail}</p>
            </motion.article>
          ))}
        </div>

        <motion.div className="facts" {...fade(1.5)}>
          <span><Phone size={16} />Rufen Sie uns an: {TEL_TEXT}</span>
          <span><MapPin size={16} />Hauptstrasse 46, 5330 Bad Zurzach</span>
          <span><Clock size={16} />Termine nach telefonischer Vereinbarung, damit Sie nie warten müssen</span>
          <span><Car size={16} />Parkplätze an der Hauptstrasse und in der Umgebung</span>
        </motion.div>
      </div>
    </section>
  );
}

function App() {
  return (<><Navigation /><main><Hero /><Leistungen /><Galerie /><UeberUns /><Termin /><Kontakt /></main><Footer /></>);
}

export default App;
