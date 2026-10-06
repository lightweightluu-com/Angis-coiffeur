// Zentrale Einstellungen. Hier eintragen, was der Salon einrichtet.
// Keine Zugangsdaten oder Geheimnisse eintragen, nur öffentliche URLs.

// Variante A (empfohlen): Kostenlose Online-Terminbuchung mit Cal.com.
// Konto auf https://cal.com anlegen, einen Termin-Typ erstellen und die öffentliche
// Buchungsseite hier eintragen, z.B. 'https://cal.com/angis-salon/haarschnitt'.
export const BOOKING_URL = '';

// Variante B: Terminanfrage per Formular mit Formspree (kostenloser Plan).
// Auf https://formspree.io ein Formular anlegen und die Adresse eintragen,
// z.B. 'https://formspree.io/f/xxxxxxxx'. Gilt nur, wenn BOOKING_URL leer ist.
export const FORM_ENDPOINT = '';

export const SALON = {
  name: 'Angi’s Hair und Nail Design',
  street: 'Hauptstrasse 46',
  city: '5330 Bad Zurzach',
  region: 'Aargau, Schweiz',
  phoneText: '+41 56 249 18 62',
  phoneHref: 'tel:+41562491862',
};

// Galerie: Fotos aus dem Salon in public/galerie/ ablegen und hier als src eintragen,
// z.B. src: '/galerie/balayage-1.jpg'. Ohne src zeigt die Kachel eine gestaltete Fläche.
export const GALLERY = [
  { id: 'balayage', title: 'Balayage', sub: 'Sanfte Farbverläufe', src: '', alt: 'Balayage-Haarfarbe' },
  { id: 'color', title: 'Colorationen', sub: 'Farbe mit Glanz', src: '', alt: 'Colorierte Haare' },
  { id: 'schnitt', title: 'Schnitt & Styling', sub: 'Für Damen, Herren, Kinder', src: '', alt: 'Frisur nach dem Schnitt' },
  { id: 'gel', title: 'Gel & Acryl', sub: 'Nagelmodellage', src: '', alt: 'Modellierte Nägel in Gel oder Acryl' },
  { id: 'nailart', title: 'Nail Art', sub: 'Ganz nach Ihrem Geschmack', src: '', alt: 'Nail Art' },
  { id: 'shellac', title: 'Shellac', sub: 'Langanhaltender Glanz', src: '', alt: 'Nägel mit Shellac' },
];
