import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "", ...rest }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className} {...rest}>{children}</div>;
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }} transition={{ duration: .8, delay, ease: [.22, 1, .36, 1] }} {...rest}>
      {children}
    </motion.div>
  );
}

export function SectionHead({ eyebrow, title, intro }) {
  return (
    <Reveal className="section-head">
      <div className="eyebrow"><i />{eyebrow}</div>
      <h2 className="h2">{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </Reveal>
  );
}
