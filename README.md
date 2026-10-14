# Esta Fiesta

Vetrina post-evento di OktoberFiesta 2026: tre album fotografici, consultazione mobile e download dei singoli originali. React 18, Vite, Tailwind CSS.

Il link per le story è `https://www.estafiesta.it/#foto`. Gli album sono Venerdì / Aperipirlo (147 foto), Sabato / Tutti a 90 (120) e Domenica / Splendido Splendente (97). Gli hash degli album consentono anche il ritorno mediante la cronologia del browser, senza nuove rotte lato hosting.

## Sviluppo

Verificato con Node.js 22.22.2. Installare tutte le dipendenze di sviluppo: Sharp è necessario per preparare le immagini prima della build.

```sh
npm ci
npm run dev
```

Il server di sviluppo usa la porta 3000. I contenuti istituzionali e i contatti sono centralizzati; i dati fotografici sono generati dagli originali.

## Fotografie

Le tre cartelle originali in `public` vengono incluse nella distribuzione. Non rinominare, ricomprimere o sovrascrivere gli originali durante la preparazione delle anteprime.

```sh
npm run photos:prepare
npm run build
npm run preview
```

La preparazione delle foto viene eseguita anche automaticamente prima della build. Controlla il numero atteso di fotografie, genera copertine, anteprime e immagini per il visualizzatore in WebP e aggiorna il manifest degli album. Il processo è ripetibile e riutilizza le varianti già aggiornate. Gli originali sono utilizzati soltanto per il download o l'apertura alternativa; il sito non li scarica tutti all'ingresso.

La pagina ha un messaggio «Next event is coming soon» senza date o countdown, accesso agli album, Chi siamo, ringraziamenti, sede e contatti. Il programma e il form di prenotazione dell'evento passato non sono montati.

## Verifiche browser

```sh
npx playwright install chromium webkit
npm run test:e2e
```

Su questo Mac i progetti Chromium usano Chrome se è installato; altrove usano il browser Chromium installato da Playwright. È possibile selezionare un altro canale Chromium con `PLAYWRIGHT_CHANNEL`.

La suite costruisce il sito e verifica la preview di produzione sulla porta 4174: Chrome mobile, Chrome desktop e WebKit in un viewport iPhone. Copre ingresso diretto agli album, conteggi, caricamento delle copertine, visualizzatore, ritorno alla griglia, limiti, gestione degli errori, focus e download di un originale per ciascuna serata. Il gesto touch fisico è verificato nel progetto Chromium mobile; gli stessi controlli vengono verificati anche negli altri progetti.

L'emulazione iPhone non sostituisce la prova nel browser interno dell'app Instagram su un telefono reale. Seguire la checklist in `docs/testing/post-evento.md` prima di condividere il sito aggiornato nelle story. Se il browser non supporta il download diretto, il visualizzatore offre anche «Apri l’originale».

La specifica concordata è in `docs/specs/esta-fiesta-post-evento-album-2026.md`.
