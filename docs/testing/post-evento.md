# Verifica post-evento

## Confine approvato

Un unico livello di verifica: l'applicazione nel browser, dal link `#foto` al download. Nessuna suite di test dei dettagli interni dei componenti. La build verifica inoltre sintassi JSX e risoluzione dei moduli; il progetto JavaScript non dispone di un comando di typechecking TypeScript.

## Verifiche riproducibili

Eseguire `npm run test:e2e`: prepara le immagini, costruisce l'applicazione e avvia la preview di produzione. I test coprono Chrome mobile, Chrome desktop e WebKit mobile. Confrontano i file scaricati con gli originali reali, inclusa una foto della domenica da 2832 × 4240 pixel.

L'archivio contiene 147 + 120 + 97 = 364 fotografie. Gli originali occupano circa 375 MiB, le anteprime circa 12 MiB e le immagini del visualizzatore circa 50 MiB. Gli album caricano progressivamente le anteprime; il visualizzatore richiede la foto corrente e il download usa l'originale.

## Instagram su dispositivo reale — da eseguire

Questa verifica richiede l'app Instagram e un sito aggiornato raggiungibile dal telefono. Non è stata eseguita durante l'implementazione locale; WebKit e il viewport iPhone non verificano il contenitore dell'app Instagram.

- [ ] Aprire dall'app Instagram il link del sito aggiornato con `#foto`, anche su rete mobile.
- [ ] Confermare che le tre copertine siano raggiungibili direttamente e non coperte dalla navigazione.
- [ ] Aprire ogni album, toccare una foto e provare swipe, frecce e chiusura.
- [ ] Verificare che una foto verticale e una orizzontale siano mostrate complete.
- [ ] Tornare alla stessa posizione della griglia e cambiare serata.
- [ ] Scaricare una singola foto e verificare che il file salvato corrisponda all'originale.
- [ ] Se il download diretto è limitato dal browser interno, provare «Apri l’originale» e il salvataggio dal browser senza false conferme di successo.
- [ ] Ripetere su iPhone e Android se disponibili; annotare dispositivo, versione dell'app e risultato effettivo.

La redazione dei ticket e l'implementazione locale non effettuano il deploy o l'invio delle story.
