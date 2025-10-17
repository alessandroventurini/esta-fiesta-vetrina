// Tutti i contenuti e dati mock centralizzati

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'Chi Siamo', href: '#about' },
  { id: 'next-event', label: 'Prossimo Evento', href: '#next-event' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'beneficenza', label: 'Beneficenza', href: '#beneficenza' },
  { id: 'collabora', label: 'Collabora', href: '#collabora' },
];

export const stats = [
  { number: 4, suffix: '', label: 'Eventi/Anno' },
  { number: 2023, suffix: '', label: 'Dal' },
  { number: 100, suffix: '%', label: 'Energia' },
];

export const photos = [
  { 
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80', 
    location: 'Roccaforte, Luglio 2024',
    badge: '🔥 Sold Out'
  },
  { 
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    location: 'Montefiore, Agosto 2024',
    badge: '📸 Best Food'
  },
  { 
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
    location: 'Castelfranco, Giugno 2024',
    badge: '🎵 Musica Live'
  },
  { 
    url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80',
    location: 'Valle Verde, Maggio 2024',
    badge: '🌟 Best Night'
  },
  { 
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    location: 'Monterosso, Settembre 2024',
    badge: '🎉 Festa Vintage'
  },
  { 
    url: 'https://images.unsplash.com/photo-1543007631-283050bb3e8c?w=800&q=80',
    location: 'Borgo Antico, Luglio 2024',
    badge: '🍕 Food Fest'
  },
  { 
    url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80',
    location: 'Collelungo, Agosto 2024',
    badge: '🎸 Rock Night'
  },
  { 
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    location: 'Marina del Sole, Giugno 2024',
    badge: '🌅 Sunset Edition'
  },
  { 
    url: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80',
    location: 'Fontanelle, Settembre 2024',
    badge: '💃 Dance Floor'
  },
  { 
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    location: 'Pietralunga, Luglio 2024',
    badge: '🎭 Tema Anni 90'
  },
  { 
    url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
    location: 'Colle Alto, Agosto 2024',
    badge: '🍻 Beer Festival'
  },
  { 
    url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
    location: 'Vallechiara, Giugno 2024',
    badge: '⭐ New Opening'
  },
];

export const menuCards = [
  {
    title: 'Cibo da Sagra',
    items: [
      'Porchetta e salamelle alla brace',
      'Fritto misto e arancini',
      'Primi della tradizione',
      'Dolci artigianali'
    ],
    badge: 'Produttori Locali'
  },
  {
    title: 'Drink Bar',
    items: [
      'Birre artigianali regionali',
      'Cocktail con ingredienti km0',
      'Spritz e classici rivisitati',
      'Analcolici homemade'
    ],
    badge: 'Mixology & Tradizione'
  },
  {
    title: 'Format Musicali',
    items: [
      'Live band emergenti locali',
      'DJ set Indie/Pop/Reggaeton',
      'Silent Disco sotto le stelle',
      'Karaoke della nonna'
    ],
    badge: 'Talenti del Territorio'
  }
];

export const formats = [
  {
    name: 'FIESTA Sunset',
    description: 'Aperitivo + Live Music (18:00-22:00)',
    color: 'fiesta-blue'
  },
  {
    name: 'FIESTA Night',
    description: 'Cena + DJ Set (20:00-02:00)',
    color: 'fiesta-red'
  },
  {
    name: 'FIESTA Weekend',
    description: 'Format 2 giorni con mercatini',
    color: 'fiesta-teal'
  },
  {
    name: 'FIESTA Vintage',
    description: "Festa anni '80/'90 a tema",
    color: 'fiesta-blue'
  }
];

export const partners = [
  { name: 'Comune di Roccaforte', type: 'Amministrazione' },
  { name: 'Pro Loco Valle Verde', type: 'Associazione' },
  { name: 'Birrificio Artigianale del Colle', type: 'Partner Food' },
  { name: 'Radio Locale 105', type: 'Media Partner' },
  { name: 'Gruppo Giovani Montefiore', type: 'Organizzatori' },
  { name: 'Ristorante La Taverna', type: 'Partner Food' },
  { name: 'DJ Collective Local Beats', type: 'Partner Musica' },
];

export const projects = [
  {
    title: 'FIESTA Academy',
    description: 'Workshop gratuiti per giovani aspiranti DJ, bartender e organizzatori di eventi. Impara dai professionisti del settore e porta le tue idee sul palco delle prossime FIESTA.',
    cta: 'Candidati per il Prossimo Corso',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80'
  },
  {
    title: 'Art in Fiesta',
    description: 'Collaborazioni con street artist e artisti emergenti per trasformare ogni festa in una galleria a cielo aperto. Murales, installazioni e performance live che rimangono nel territorio.',
    cta: 'Scopri gli Artisti',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80'
  },
  {
    title: 'Fiesta Green',
    description: 'Il nostro impegno per l\'ambiente: stoviglie compostabili, raccolta differenziata, energia da fonti rinnovabili. Perché festeggiare deve essere sostenibile.',
    cta: 'Scopri le Nostre Policy',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'
  }
];

export const charityOrgs = [
  {
    name: 'Croce Rossa Locale',
    amount: '€15.000',
    description: 'Donati per nuove ambulanze'
  },
  {
    name: 'Scuole del Territorio',
    amount: '€20.000',
    description: 'Borse di studio per giovani talenti'
  },
  {
    name: 'Associazioni Sportive',
    amount: '€18.000',
    description: 'Supporto alle squadre giovanili'
  },
  {
    name: 'Centro Anziani',
    amount: '€12.000',
    description: 'Attività ricreative e assistenza'
  },
  {
    name: 'Biblioteca Comunale',
    amount: '€10.000',
    description: 'Nuovi libri e spazi digitali'
  }
];

export const rappresentantiOptions = [
  'Comune/Amministrazione',
  'Pro-Loco',
  'Associazione Giovanile',
  'Privato/Altro'
];

export const mesiOptions = [
  'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
];

export const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/estafiestaaa' },
  { name: 'Facebook', url: 'https://facebook.com/estafiestaaa' },
];

export const footerLinks = {
  utilLinks: [
    { label: 'Chi Siamo', href: '#about' },
    { label: 'Prossimo Evento', href: '#next-event' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Beneficenza', href: '#beneficenza' },
  ],
  collaboraLinks: [
    { label: 'Organizza con Noi', href: '#collabora' },
    { label: 'Contattaci', href: '#collabora' },
  ],
  contactInfo: {
    email: 'estafiestacastelmella@gmail.com',
    instagram: '@estafiestaaa',
    facebook: 'estafiestaaa'
  }
};
