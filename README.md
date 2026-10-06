# pwa-template

Vorlage für PWAs, die automatisch auf `<repo-name>.lightweightluu.com` live gehen.

## Neues Projekt starten
1. Auf GitHub **„Use this template“ → Create a new repository** (Owner: `lightweightluu-com`).
2. Repo-Name = Subdomain, z.B. `rezepte` → `rezepte.lightweightluu.com`.
   Nur Kleinbuchstaben, Zahlen und Bindestriche verwenden.
3. Repo in Claude Code öffnen und beschreiben, was gebaut werden soll.
4. Jeder Push auf `main` deployt automatisch. Die URL steht in der Zusammenfassung des Actions-Laufs.

## Lokal
```bash
npm install
npm run dev
```

## Voraussetzungen (einmalig, bereits erledigt)
- Org-Secrets `CLOUDFLARE_API_TOKEN` und `CLOUDFLARE_ACCOUNT_ID` für alle Repos.
- Zone `lightweightluu.com` in Cloudflare.
- Für die gewünschte Subdomain darf noch kein DNS-Eintrag existieren.

## Online-Terminbuchung einrichten (kostenlos)

Die Seite zeigt im Abschnitt «Termin» automatisch die passende Variante. Alle Einstellungen stehen in `src/config.js`.

1. **Cal.com (empfohlen, kostenlos):** Konto auf https://cal.com anlegen, einen Termin-Typ erstellen (z.B. «Haarschnitt»), Kalender verbinden und die öffentliche Buchungs-URL in `BOOKING_URL` eintragen. Die Buchung erscheint dann eingebettet auf der Seite.
2. **Formspree (kostenlos, Terminanfrage per Formular):** Formular auf https://formspree.io anlegen und die Adresse in `FORM_ENDPOINT` eintragen. Anfragen kommen per E-Mail an den Salon. Gilt nur, wenn `BOOKING_URL` leer ist.
3. **Ohne Eintrag:** Die Seite zeigt eine Telefonkarte mit der Nummer des Salons.

## Galerie-Fotos

Fotos aus dem Salon nach `public/galerie/` legen und in `src/config.js` bei `GALLERY` als `src` eintragen (z.B. `'/galerie/balayage-1.jpg'`). Ohne `src` zeigt die Kachel eine gestaltete Fläche.
