# 02: Aprire i tre album da Instagram e consultare tutte le foto su mobile

**What to build:** Aprendo il link con `#foto`, il partecipante arriva direttamente a tre copertine compatte: Venerdì / Aperipirlo, Sabato / Tutti a 90 e Domenica / Splendido Splendente. Toccando una copertina entra nella vista dedicata alla serata, può cercarsi in tutte le fotografie mediante una griglia a due colonne e può tornare a «Tutti gli album». Il percorso usa immagini ottimizzate e caricamento progressivo, evitando di scaricare l'intero archivio all'ingresso.

**Blocked by:** None (can start immediately). La sezione Foto e il riferimento `#foto` esistono già; la riorganizzazione dei contenuti nel ticket 01 non è necessaria per rendere funzionanti gli album.

**Status:** draft — suddivisione da approvare prima della pubblicazione.

- [ ] La sezione Foto sostituisce la vecchia griglia di otto foto con tre copertine selezionate dai rispettivi album reali.
- [ ] Su telefono le copertine sono compatte, disposte una sotto l'altra e mostrano sempre giorno e nome della serata; nessuna serata è nascosta in un carosello.
- [ ] L'apertura a freddo del sito con `#foto` porta alla scelta degli album dopo il montaggio dell'applicazione e il caricamento delle immagini, senza copertine o controlli nascosti dalla barra fissa.
- [ ] Toccando una copertina si apre una vista dedicata con il nome dell'album e un controllo evidente «Tutti gli album»; ritorno e selezione di un'altra serata funzionano su mobile.
- [ ] La griglia dell'album ha due colonne su telefono e un layout utilizzabile su desktop, senza scorrimento orizzontale.
- [ ] Sono consultabili esattamente 147 fotografie del venerdì, 120 del sabato e 97 della domenica. Ogni originale appartiene all'album corretto, senza omissioni, duplicazioni o inserimenti delle vecchie otto fotografie.
- [ ] Ogni foto ha identità stabile, ordine deterministico e associazione tra anteprima e originale, sufficienti per navigazione e download dei ticket successivi.
- [ ] Copertine e anteprime vengono generate con un processo ripetibile che gestisce nomi con spazi e orientamento delle immagini; gli originali forniti non sono ricompressi o sovrascritti.
- [ ] Tutti gli asset necessari sono inclusi nell'output distribuibile, anche se le cartelle originali al momento non sono tracciate da Git. La vista album funziona sull'hosting statico esistente senza richiedere nuove riscritture.
- [ ] L'ingresso e la griglia usano varianti leggere, con dimensioni riservate per limitare i salti di layout. Le altre anteprime vengono caricate progressivamente nell'album selezionato; non vengono precaricati tutti gli originali o tutti gli altri album.
- [ ] Durante il caricamento o in caso di immagine non disponibile, la pagina rimane comprensibile e gli altri album e fotografie restano consultabili.
- [ ] Copertine, ritorno e griglia sono utilizzabili al tocco e con tastiera e hanno etichette accessibili.
- [ ] Verificare nel browser il percorso completo `#foto` → ogni album → griglia → ritorno, l'integrità dei tre album e le richieste di rete in condizioni mobili. Includere foto ad alta risoluzione della domenica nella verifica.
- [ ] La build di produzione e la preview rendono disponibili copertine, anteprime e originali senza link interrotti.

**Copertura della spec:** user stories 1–10, 17, 20–23 e accessibilità della selezione degli album.

**Confini:** non richiede che il ticket 01 sia terminato. Il visualizzatore completo è responsabilità del ticket 03 e il download del ticket 04. Non introduce backend, account, CMS o selezione parziale delle foto.
