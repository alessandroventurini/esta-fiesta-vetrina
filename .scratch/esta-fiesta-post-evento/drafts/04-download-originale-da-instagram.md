# 04: Salvare la foto originale dal visualizzatore, anche da Instagram

**What to build:** Il partecipante apre una fotografia e usa un pulsante evidente per salvarne l'originale. Il file corrisponde alla foto selezionata e conserva la qualità fornita. Nel browser interno di Instagram il percorso deve restare comprensibile: se il download diretto non è disponibile, il partecipante può raggiungere l'originale senza ricevere una falsa conferma di salvataggio.

**Blocked by:** 03 — Sfogliare le foto a schermo intero e tornare alla griglia. Il pulsante appartiene al visualizzatore. I dati degli originali del ticket 02 sono già una dipendenza transitiva; il ticket 01 non blocca la funzione di download.

**Status:** draft — suddivisione da approvare prima della pubblicazione.

- [ ] Il visualizzatore mostra un controllo evidente e accessibile per scaricare la singola fotografia corrente.
- [ ] Il file scaricato o reso accessibile è l'originale corrispondente alla foto selezionata, non l'anteprima ottimizzata, una pagina HTML o un'immagine di un'altra serata.
- [ ] La corrispondenza viene verificata su almeno una foto di ciascun album, inclusa una foto ad alta risoluzione della domenica, e resta corretta dopo la navigazione avanti/indietro.
- [ ] Il download non modifica gli originali e non avvia il caricamento dell'intero album o degli altri originali.
- [ ] Il controllo funziona nei browser mobili verificati e su desktop; apertura o salvataggio non fanno perdere la foto corrente o impediscono di tornare alla griglia.
- [ ] Il percorso completo dal link `#foto` fino al salvataggio viene verificato anche nel browser interno di Instagram su un dispositivo reale.
- [ ] Se quel browser non consente il salvataggio diretto, viene offerto un accesso comprensibile alla foto originale e non viene mostrato un messaggio di download riuscito senza conferma effettiva.
- [ ] La verifica browser osserva il file e il comportamento esterno; non testa dettagli interni dello stato React. Un download emulato non sostituisce il controllo sul dispositivo reale.
- [ ] Eseguire build e preview; documentare separatamente i controlli browser effettuati e il dispositivo e contesto del controllo manuale Instagram.
- [ ] Se non è disponibile un dispositivo reale per Instagram, riportare esplicitamente la verifica ancora da eseguire senza dichiarare completato quel criterio.

**Copertura della spec:** user stories 18–19 e percorso completo Instagram → album → visualizzatore → originale.

**Confini:** nessuno ZIP o download massivo, nessun invio di story o messaggi e nessuna integrazione con le API Instagram. Non richiede modifiche ai contenuti del ticket 01 né autorizza un deploy.
