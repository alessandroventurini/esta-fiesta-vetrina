# 🎉 ESTA FIESTA - Landing Page

Landing page React moderna e innovativa per **ESTA FIESTA**, format di festa di paese giovanile che celebra la tradizione locale con un twist contemporaneo.

![ESTA FIESTA](https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=400&fit=crop)

## 🚀 Tech Stack

- **React 18** - Framework UI
- **Vite** - Build tool velocissimo
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animazioni fluide
- **Lucide React** - Icon system
- **React Hook Form** - Form validation performante
- **React Intersection Observer** - Scroll animations

## 📦 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il dev server
npm run dev

# Build per produzione
npm run build

# Preview della build
npm run preview
```

Il sito sarà disponibile su `http://localhost:3000`

## 🎨 Palette Colori

- **Primary Blue**: `#4D92D0` - `fiesta-blue`
- **Primary Red**: `#C2384C` - `fiesta-red`
- **Neutral Light**: `#F4F4F4` - `fiesta-light`
- **Neutral Dark**: `#333333` - `fiesta-dark`
- **Accent Teal**: `#2F7C7D` - `fiesta-teal`

## 📁 Struttura Progetto

```
esta-fiesta-vetrina/
├── src/
│   ├── components/
│   │   ├── ui/                    # Componenti UI riusabili
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── IconBadge.jsx
│   │   │   └── BlobShape.jsx     # Forme organiche
│   │   ├── Navbar.jsx             # Navigazione sticky
│   │   ├── Hero.jsx               # Hero con logo animato 3D
│   │   ├── AnimatedLogo.jsx       # Logo con animazioni premium
│   │   ├── AboutCreative.jsx      # Chi siamo - Layout asimmetrico
│   │   ├── NextEvent.jsx          # Prossimo evento - Design organico
│   │   ├── GalleryCreative.jsx    # Gallery - Grid asimmetrico con blob
│   │   ├── BeneficenzaSimple.jsx  # Beneficenza - Senza cifre
│   │   ├── CollaboraSimple.jsx    # Form collaborazione - Semplificato
│   │   ├── Footer.jsx
│   │   └── ScrollProgress.jsx
│   ├── hooks/
│   │   ├── useScrollspy.js        # Active nav link tracking
│   │   └── useMediaQuery.js       # Responsive breakpoints
│   ├── data/
│   │   └── content.js             # Tutti i contenuti centralizzati
│   ├── assets/
│   │   └── logo.svg               # Logo ESTA FIESTA
│   ├── App.jsx                    # Main component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── public/
│   ├── logo.svg
│   └── favicon.svg
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✨ Features

### 🎨 Design Organico & Creativo
- **Forme Blob** - Sezioni con border-radius organici che si animano
- **Layout Asimmetrici** - Grid non convenzionali e posizionamenti creativi
- **Overlapping Elements** - Card che si sovrappongono per profondità
- **Decorative Blobs** - Elementi decorativi fluttuanti con blur

### 🎯 Animazioni Premium
- **Logo 3D Interattivo** con mouse tracking e parallax
- **Particelle Orbitanti** attorno al logo
- **Anelli Rotanti** animati in background
- **Light Rays** con effetto cinematico
- **Scroll-triggered animations** su tutte le sezioni
- **Morphing Shapes** - Forme che cambiano continuamente
- **Floating Effects** - Elementi che fluttuano delicatamente

### 📱 Responsive Design
- **Mobile-first approach**
- Layout che si adatta organicamente
- Hamburger menu animato
- Gallery con grid adattivo asimmetrico

### 🎨 Sezioni Principali
- **Hero** - Logo animato 3D con effetti premium
- **About** - Layout asimmetrico con card organiche sovrapposte
- **Next Event** - Card con forme blob e info dettagliate
- **Gallery** - Grid asimmetrico con forme organiche (9 foto)
- **Beneficenza** - Enti supportati senza cifre monetarie
- **Collabora** - Form semplificato con forme organiche

### 📝 Form Features
- React Hook Form con validation
- Design con forme blob animate
- Success modal con animazioni
- Privacy checkbox obbligatorio

## 🧩 Componenti Principali

### Navbar
Navbar sticky con comportamento dinamico al scroll:
- Trasparente su hero, bianco dopo scroll
- Active link tracking con scrollspy
- Mobile menu fullscreen animato

### Hero
Full viewport hero con logo animato:
- **AnimatedLogo** con 3D mouse tracking
- Particelle orbitanti e anelli rotanti
- Light rays cinematici
- Parallax background
- CTA buttons
- Scroll indicator bounce

### AboutCreative
Layout asimmetrico innovativo:
- Blob decorativi animati in background
- Card organiche sovrapposte con 3D depth
- Badge fluttuanti
- Icon features con forme organiche
- Grid 7/5 colonne asimmetrico

### NextEvent
Prossimo evento con design premium:
- Immagine con forma blob organica
- Info card con morfing animation
- Badge fluttuanti
- Highlights tags
- Layout asimmetrico 7/5

### GalleryCreative
Gallery con grid asimmetrico:
- 9 foto in pattern non convenzionale
- Forme blob diverse per ogni card
- Hover overlay con gradient
- Lightbox con forme organiche
- Lazy loading

### BeneficenzaSimple
Beneficenza senza cifre:
- 5 enti supportati
- Card con forme organiche alternate
- Icon con background blob
- Emotional storytelling
- No amounts, solo descrizioni

### CollaboraSimple
Form collaborazione semplificato:
- Solo 4 campi essenziali
- Form con shape blob animata
- Success modal organico
- Validation inline
- Feature list a lato

## 🎨 Customizzazione

### Modificare i Colori
Edita `tailwind.config.js`:

```javascript
colors: {
  'fiesta-blue': '#TUO_COLORE',
  'fiesta-red': '#TUO_COLORE',
  // ...
}
```

### Modificare i Contenuti
Tutti i testi, immagini e dati sono in `src/data/content.js`:

```javascript
export const stats = [
  { number: 150, suffix: '+', label: 'Tuo Label' },
  // ...
];
```

### Aggiungere Nuove Sezioni
1. Crea componente in `src/components/`
2. Importa in `App.jsx`
3. Aggiungi nella sezione `<main>`

## 🚀 Performance

- ✅ Lazy loading immagini
- ✅ Code splitting
- ✅ Ottimizzazione Tailwind (purge unused CSS)
- ✅ Vite HMR per dev rapido
- ✅ Animazioni 60fps

## ♿ Accessibilità

- ✅ Semantic HTML5
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus states visibili
- ✅ Alt text su immagini

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Questo è un progetto personale, ma suggerimenti sono benvenuti!

## 📄 License

© 2025 ESTA FIESTA. Tutti i diritti riservati.

## 👨‍💻 Sviluppato con

- ❤️ React & Vite
- 🎨 Tailwind CSS
- ✨ Framer Motion
- 🎯 Lucide Icons

---

**Creato per celebrare la tradizione italiana con energia giovane!** 🎉🍕🎵
