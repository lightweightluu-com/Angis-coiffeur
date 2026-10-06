import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from "framer-motion";
import { Phone, MapPin, Car, Clock, Menu, X, Sparkles, ArrowDown } from "lucide-react";

const LINKS = [
  ["Leistungen", "#leistungen"], ["Galerie", "#galerie"], ["Über uns", "#ueber-uns"], ["Kontakt", "#kontakt"],
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
              <Phone size={16} /><span className="hidden sm:inline">{TEL_TEXT}</span><span className="sm:hidden">Anrufen</span>
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

/* Fliessende Strähnen: Linien zeichnen sich selbst, Aceternity-inspirierter "Beams"-Look */
function Strands({ reduce }) {
  const paths = Array.from({ length: 16 }, (_, i) => {
    const o = i * 14;
    return `M ${-20 + o} -20 C ${120 + o * .5} 140, ${-40 + o * 1.2} 300, ${150 + o * .6} 520`;
  });
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
      {paths.map((d, i) => (
        <motion.path key={i} d={d} fill="none" stroke="var(--rose)" strokeWidth={i % 3 === 0 ? 1.6 : .8} strokeOpacity={i % 3 === 0 ? .75 : .4}
          initial={reduce ? false : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, delay: .5 + i * .07, ease: "easeOut" }} />
      ))}
    </svg>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yArch = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 }), sy = useSpring(my, { stiffness: 60, damping: 18 });
  const tx = useTransform(sx, [-1, 1], [-14, 14]), ty = useTransform(sy, [-1, 1], [-14, 14]);
  const tx2 = useTransform(sx, [-1, 1], [18, -18]), ty2 = useTransform(sy, [-1, 1], [12, -12]);
  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1); my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const word = { hidden: { y: "110%" }, show: (i) => ({ y: 0, transition: { duration: .9, delay: .25 + i * .09, ease: [.22, 1, .36, 1] } }) };
  const fade = (d) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: .8, delay: d, ease: [.22, 1, .36, 1] } });
  const lines = [["Schönes", "Haar."], ["Gepflegte", "Nägel."]];
  let n = 0;

  return (
    <section id="top" className="hero" ref={ref} onMouseMove={onMove}>
      <motion.div className="orb" style={{ width: 360, height: 360, background: "var(--rose-soft)", opacity: .7, top: -80, left: -120, y: yOrb }} />
      <motion.div className="orb" style={{ width: 300, height: 300, background: "var(--sage)", opacity: .22, bottom: -60, right: -80, y: yOrb }} />
      <div className="wrap">
        <div className="hero-grid">
          <motion.div style={{ y: reduce ? 0 : yText }}>
            <motion.div className="eyebrow" {...fade(.1)}><i />Bad Zurzach · Aargau</motion.div>
            <h1 className="h1">
              {lines.map((line, li) => (
                <span key={li} style={{ display: "block" }}>
                  {line.map((w) => {
                    const i = n++;
                    return (
                      <span key={w} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingBottom: ".12em", marginRight: ".25em" }}>
                        <motion.span style={{ display: "inline-block" }} className={li === 1 && w === "Nägel." ? "it" : li === 0 && w === "Haar." ? "it" : ""} variants={word} custom={i} initial="hidden" animate="show">{w}</motion.span>
                      </span>
                    );
                  })}
                </span>
              ))}
            </h1>
            <motion.p className="lead" {...fade(.9)}>
              Angi’s Hair und Nail Design an der Hauptstrasse 46: Schnitt, Farbe und Styling für Damen, Herren und Kinder, dazu Maniküre, Gel, Acryl und Nail Art. Alles an einem Ort, mit Zeit für Sie.
            </motion.p>
            <motion.div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }} {...fade(1.05)}>
              <a className="btn btn-primary" href={TEL_HREF}><Phone size={17} />Termin vereinbaren</a>
              <a className="btn btn-ghost" href="#leistungen"><Sparkles size={17} />Leistungen ansehen</a>
            </motion.div>
            <motion.div className="facts" {...fade(1.2)}>
              <span><Phone size={16} />{TEL_TEXT}</span>
              <span><Clock size={16} />Termine nach telefonischer Vereinbarung</span>
              <span><Car size={16} />Parkplätze an der Hauptstrasse</span>
            </motion.div>
            <div className="scroll"><ArrowDown size={16} />Entdecken</div>
          </motion.div>

          <motion.div className="stage" style={{ y: reduce ? 0 : yArch }} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: .2, ease: [.22, 1, .36, 1] }}>
            <motion.div className="arch" style={{ x: reduce ? 0 : tx, y: reduce ? 0 : ty }}>
              <div className="orb" style={{ width: 220, height: 220, background: "var(--rose)", opacity: .35, top: "8%", left: "18%" }} />
              <Strands reduce={reduce} />
              <div className="grain" />
            </motion.div>
            <motion.div className="float" style={{ top: "14%", left: "-6%", x: reduce ? 0 : tx2, y: reduce ? 0 : ty2 }} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4, duration: .8 }}>
              <b>Haare</b><small>Damen, Herren & Kinder<br />Balayage, Strähnen, Colorationen</small>
            </motion.div>
            <motion.div className="float" style={{ bottom: "16%", right: "-5%", x: reduce ? 0 : tx2, y: reduce ? 0 : ty2 }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6, duration: .8 }}>
              <b>Nails</b><small>Shellac, Gel & Acryl<br />Maniküre und Nail Art</small>
            </motion.div>
            <motion.div className="float" style={{ bottom: "-4%", left: "10%", display: "flex", gap: 10, alignItems: "center" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: .8 }}>
              <MapPin size={18} /><span>Hauptstrasse 46<br />5330 Bad Zurzach</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (<><Navigation /><main><Hero /></main></>);
}

export default App;
