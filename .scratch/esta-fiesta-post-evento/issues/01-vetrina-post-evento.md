# 01: Trasformare Esta Fiesta in una vetrina post-evento

**What to build:** Chi visita Esta Fiesta trova una testata compatta con «Next event is coming soon», un accesso chiaro alle foto e il profilo Instagram esistente. Non trova più inviti a partecipare o prenotare l'evento concluso. Chi siamo, contatti e ringraziamento agli sponsor restano disponibili come contenuti secondari, mantenendo l'identità visiva del sito. Anche il titolo e le descrizioni delle condivisioni presentano il sito come vetrina post-evento.

**Blocked by:** None (can start immediately).

**Status:** implemented — verificato nella preview di produzione.

- [x] La testata è compatta su telefono e riporta esattamente «Next event is coming soon», senza countdown o date presentate come appuntamenti futuri.
- [x] La testata e la navigazione permettono di raggiungere Foto e il profilo Instagram già configurato.
- [x] Foto precede Chi siamo e gli altri contenuti secondari nella pagina; questo ticket può utilizzare la galleria esistente finché non viene sostituita dal ticket 02.
- [x] Programma, blocco eventi dell'edizione conclusa, prenotazioni e promozione di birre e cucina non sono più presenti nell'esperienza pubblica.
- [x] Navbar, menu mobile e CTA non contengono collegamenti alle sezioni rimosse; l'accesso a `#foto` continua a funzionare.
- [x] Chi siamo e contatti restano disponibili sotto Foto. Le eventuali informazioni di luogo sono istituzionali e non promuovono l'evento passato.
- [x] Sponsor diventa un ringraziamento generico dell'edizione, senza inventare nomi, loghi o dati consuntivi; il richiamo ai pacchetti e al vecchio sponsor deck viene rimosso.
- [x] Titolo, descrizione SEO, Open Graph e Twitter Card descrivono Esta Fiesta e le foto dell'evento concluso senza pubblicizzare le date come future. Verificare i metadati nel documento restituito, non soltanto nella UI React.
- [x] Logo, colori, tipografia e contatti esistenti restano coerenti con l'identità attuale; la pagina è utilizzabile su mobile e desktop.
- [x] Verificare il comportamento nel browser, compresi menu e CTA, ed eseguire la build di produzione e un controllo della preview. Non aggiungere test dei dettagli interni dei componenti.
- [x] La rimozione delle prenotazioni dalla pagina non modifica credenziali o servizi esterni e non invia richieste EmailJS.

**Copertura della spec:** user stories 24–31; riorganizzazione della pagina e contenuti post-evento.

**Confini:** non implementa i nuovi album, il visualizzatore navigabile o il download. Non richiede un deploy.

**Verifica eseguita:** suite browser nella preview di produzione, Chrome mobile e desktop, WebKit mobile; 25 test passati. Il test del gesto fisico è eseguito su Chromium mobile e saltato intenzionalmente sugli altri due progetti.
