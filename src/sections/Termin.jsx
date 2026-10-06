import { useState } from "react";
import { Phone, CalendarCheck, Check, AlertCircle } from "lucide-react";
import { BOOKING_URL, FORM_ENDPOINT, SALON } from "../config.js";
import { Reveal, SectionHead } from "./shared.jsx";

const OPTIONS = ["Haarschnitt", "Waschen und Föhnen", "Coloration", "Strähnen / Balayage", "Styling", "Maniküre", "Nagelmodellage (Gel/Acryl)", "Nail Art", "Shellac / Gellack", "Beratung"];

function PhoneCard() {
  return (
    <div className="termin-card">
      <h3 className="serif">Termin telefonisch vereinbaren</h3>
      <p>Rufen Sie uns an. Wir finden gemeinsam einen Termin, der zu Ihnen passt.</p>
      <a className="btn btn-primary" href={SALON.phoneHref}><Phone size={17} />{SALON.phoneText}</a>
    </div>
  );
}

function Booking() {
  return (
    <div className="booking">
      <iframe title="Online-Terminbuchung" src={BOOKING_URL} loading="lazy" />
      <a className="btn btn-ghost" href={BOOKING_URL} target="_blank" rel="noopener noreferrer"><CalendarCheck size={17} />Buchung in neuem Fenster öffnen</a>
    </div>
  );
}

function RequestForm() {
  const [state, setState] = useState("idle");
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("ok");
    } catch {
      setState("error");
    }
  }
  if (state === "ok") {
    return (
      <div className="termin-card" role="status">
        <span className="ok-badge"><Check size={20} aria-hidden="true" /></span>
        <h3 className="serif">Vielen Dank für Ihre Anfrage</h3>
        <p>Wir melden uns bei Ihnen, sobald wir Ihren Termin eingeplant haben.</p>
      </div>
    );
  }
  return (
    <form className="termin-form" onSubmit={onSubmit}>
      <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" name="name" type="text" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="f-tel">Telefonnummer</label><input id="f-tel" name="telefon" type="tel" autoComplete="tel" required /></div>
      <div className="field"><label htmlFor="f-leistung">Leistung</label>
        <select id="f-leistung" name="leistung" defaultValue={OPTIONS[0]}>{OPTIONS.map((o) => <option key={o}>{o}</option>)}</select></div>
      <div className="field"><label htmlFor="f-wunsch">Wunschtag und Zeit</label><input id="f-wunsch" name="wunsch" type="text" placeholder="z.B. Donnerstagnachmittag" /></div>
      <div className="field wide"><label htmlFor="f-msg">Nachricht (optional)</label><textarea id="f-msg" name="nachricht" rows="3" /></div>
      <div className="wide form-foot">
        <button className="btn btn-primary" type="submit" disabled={state === "sending"}><CalendarCheck size={17} />{state === "sending" ? "Wird gesendet …" : "Terminwunsch senden"}</button>
        {state === "error" && <p className="form-err" role="alert"><AlertCircle size={16} aria-hidden="true" />Das hat leider nicht geklappt. Bitte rufen Sie uns an: {SALON.phoneText}</p>}
      </div>
    </form>
  );
}

export default function Termin() {
  const mode = BOOKING_URL ? "booking" : FORM_ENDPOINT ? "form" : "phone";
  return (
    <section id="termin" className="section section-alt">
      <div className="wrap">
        <SectionHead eyebrow="Termin" title="Ihr Termin bei uns"
          intro={mode === "phone"
            ? "Termine vergeben wir nach telefonischer Vereinbarung. So haben wir die Zeit, die Sie verdienen."
            : "Wählen Sie bequem online Ihren Wunschtermin. Termine vergeben wir nach Vereinbarung."} />
        <Reveal delay={.1}>
          {mode === "booking" && <Booking />}
          {mode === "form" && <RequestForm />}
          {mode === "phone" && <PhoneCard />}
        </Reveal>
      </div>
    </section>
  );
}
