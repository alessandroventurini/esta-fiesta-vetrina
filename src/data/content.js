// Tutti i contenuti e dati centralizzati — OktoberFiesta 2026

import photoVenerdi from '../assets/oktoberfiesta/poster-venerdi.png';
import photoSabato from '../assets/oktoberfiesta/poster-sabato.png';
import photoDomenica from '../assets/oktoberfiesta/poster-domenica.png';

import ph01 from '../assets/oktoberfiesta/ph-01.jpg';
import ph02 from '../assets/oktoberfiesta/ph-02.jpg';
import ph03 from '../assets/oktoberfiesta/ph-03.jpg';
import ph04 from '../assets/oktoberfiesta/ph-04.jpg';
import ph05 from '../assets/oktoberfiesta/ph-05.jpg';
import ph06 from '../assets/oktoberfiesta/ph-06.jpg';
import ph07 from '../assets/oktoberfiesta/ph-07.jpg';
import ph08 from '../assets/oktoberfiesta/ph-08.jpg';

export const heroImage = ph01;

export const navLinks = [
  { label: 'Chi siamo', href: '#chi-siamo' },
  { label: 'Eventi', href: '#eventi' },
  { label: 'OktoberFiesta', href: '#programma' },
  { label: 'Birre & cucina', href: '#birre' },
  { label: 'Foto', href: '#foto' },
  { label: 'Prenota', href: '#prenota' },
  { label: 'Sponsor', href: '#sponsor' },
  { label: 'Dove siamo', href: '#dove' },
];

// Data/ora di apertura di OktoberFiesta, usata per il countdown
export const eventCountdownTarget = new Date(2026, 9, 2, 18, 0, 0).getTime();

export const formats = [
  {
    season: 'Primavera',
    name: 'Evento di primavera',
    when: 'Date in definizione',
    status: 'In arrivo',
    what: "Il primo appuntamento dell'anno: dj set, cucina e bar all'aperto.",
    place: 'Brescia e provincia',
    bg: '#63ADE2',
    fg: '#0E1116',
  },
  {
    season: 'Estate',
    name: 'Evento estivo',
    when: 'Date in definizione',
    status: 'In arrivo',
    what: "La festa più grande dell'anno, all'aria aperta e fino a notte.",
    place: 'Brescia e provincia',
    bg: '#F2F1EC',
    fg: '#0E1116',
  }
];

export const days = [
  {
    weekday: 'Venerdì',
    date: '02 Ottobre',
    partner: 'Aperipirlo',
    music: 'Commerciale',
    hours: '18 › 24',
    poster: photoVenerdi,
    note: 'Apertura della festa: area cucina attiva e due postazioni bar.',
    slots: [
      { time: '18:00', what: 'Apertura cancelli e aperitivo' },
      { time: '18:00', what: 'Area cucina' },
      { time: '21:00', what: 'DJ set Aperipirlo' },
      { time: '24:00', what: 'Chiusura' },
    ],
  },
  {
    weekday: 'Sabato',
    date: '03 Ottobre',
    partner: 'Tutti a 90 · on tour',
    music: 'Anni 90',
    hours: '18 › 24',
    poster: photoSabato,
    note: 'Serata clou, la più affollata dei tre giorni.',
    slots: [
      { time: '18:00', what: 'Apertura, birre alla spina' },
      { time: '18:00', what: 'Area cucina' },
      { time: '21:30', what: 'Tutti a 90 — on tour' },
      { time: '24:00', what: 'Chiusura' },
    ],
  },
  {
    weekday: 'Domenica',
    date: '04 Ottobre',
    partner: 'Lo Spiedone · lunch party',
    music: 'House / Tech house',
    hours: 'Pranzo',
    poster: photoDomenica,
    note: 'Pranzo con lo spiedone e Splendido Splendente. Solo su prenotazione.',
    slots: [
      { time: '12:30', what: 'Lo Spiedone · pranzo' },
      { time: '14:30', what: 'Splendido Splendente' },
      { time: '18:00', what: 'Chiusura della festa' },
    ],
  },
];

export const beerCards = [
  {
    number: '5',
    title: 'Tipologie di birra',
    desc: 'Selezione premium a tema tedesco ed europeo, alla spina per tutti e tre i giorni.',
  },
  {
    number: '1',
    title: 'Area cucina',
    desc: 'Cibo tipico da sagra: prodotti tradizionali, porzioni serie, servizio continuo dalle 18.',
  },
  {
    number: '2',
    title: 'Postazioni bar',
    desc: 'Bar professionali con cocktail e signature drink dedicati alla festa.',
  },
];

// Ordine curato per la gallery/archivio foto
export const photos = [ph02, ph03, ph06, ph04, ph07, ph05, ph08, ph01];

export const volunteerDays = [
  { key: 'ven', label: 'Ven 02' },
  { key: 'sab', label: 'Sab 03' },
  { key: 'dom', label: 'Dom 04' },
  { key: 'prima', label: 'Allestimenti' },
];

export const contact = {
  phone: '329 483 2875',
  phoneHref: 'tel:3294832875',
  whatsappHref: 'https://wa.me/393294832875',
  email: 'estafiestacastelmella@gmail.com',
  instagram: '@estafiestaaa',
  instagramHref: 'https://instagram.com/estafiestaaa',
  website: 'www.estafiesta.it',
  websiteHref: 'https://www.estafiesta.it',
  address: 'Via Marconi 25, 25030 Castel Mella (BS)',
  place: 'Oratorio di Castel Mella',
  mapsHref: 'https://maps.google.com/?q=Via+Marconi+25+Castel+Mella+Brescia',
  osmEmbedSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=10.1290%2C45.4855%2C10.1590%2C45.5005&layer=mapnik&marker=45.4930%2C10.1440',
};

export const sponsorDeckHref = '/sponsor-deck.pdf';
