# 03: Sfogliare le foto a schermo intero e tornare alla griglia

**What to build:** Dalla griglia di una serata il partecipante tocca una foto, la vede completa a schermo intero e passa alle altre fotografie con gesti touch o controlli visibili. Quando chiude il visualizzatore torna al punto della griglia che stava consultando. L'esperienza rimane utilizzabile anche con tastiera e non interferisce con il menu mobile.

**Blocked by:** 02 — Aprire i tre album da Instagram e consultare tutte le foto su mobile. Serve la griglia dell'album con identità, ordine e corrispondenza delle immagini già funzionanti.

**Status:** implemented — verificato nella preview di produzione.

- [x] Toccando un'anteprima si apre esattamente la fotografia selezionata nel visualizzatore, all'interno dell'album corrente.
- [x] La fotografia è completa, senza ritagli, e resta contenuta nello schermo; verificare immagini verticali e orizzontali.
- [x] Il visualizzatore permette di passare alla fotografia precedente e successiva mediante gesto touch e controlli visibili con etichette comprensibili.
- [x] Alla prima e all'ultima fotografia la navigazione non produce indici non validi, schermate vuote o immagini di un'altra serata. Il ciclo tra ultima e prima foto non è obbligatorio.
- [x] Chiusura e navigazione restano facilmente raggiungibili su telefono, anche con barre del browser e aree di sicurezza, e non dipendono dal passaggio del mouse.
- [x] La chiusura esplicita e Escape riportano alla griglia preservando la posizione di scorrimento e restituendo il focus all'elemento di apertura.
- [x] La navigazione da tastiera e il focus del visualizzatore sono accessibili; la pagina sottostante non riceve interazioni mentre il visualizzatore è aperto.
- [x] Il blocco dello scorrimento viene ripristinato correttamente dopo apertura e chiusura e non entra in conflitto con il menu mobile.
- [x] Vengono richieste soltanto le immagini necessarie alla consultazione, senza precaricare tutti gli originali dell'album.
- [x] Il caricamento o l'errore di una foto non impedisce di chiudere il visualizzatore o continuare a navigare.
- [x] Verificare nel browser il percorso griglia → apertura → avanti/indietro → chiusura, touch e tastiera, limiti dell'album, ripristino della posizione e passaggio a un'altra serata.
- [x] Eseguire la build di produzione e verificare la preview su mobile e desktop.

**Copertura della spec:** user stories 11–16, 23 e 32; accessibilità del visualizzatore.

**Confini:** il download dell'originale e il controllo del salvataggio nel browser interno di Instagram appartengono al ticket 04. Non aggiunge tag, ricerca per volto o funzioni social.

**Verifica eseguita:** suite browser nella preview di produzione, Chrome mobile e desktop, WebKit mobile; 25 test passati. Il test del gesto fisico è eseguito su Chromium mobile e saltato intenzionalmente sugli altri due progetti.
