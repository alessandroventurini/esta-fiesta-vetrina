# Esta Fiesta — sito post-evento e album fotografici OktoberFiesta 2026

## Problem Statement

OktoberFiesta del 2, 3 e 4 ottobre 2026 è terminata, ma il sito continua a proporre il programma, birre e cucina, la prenotazione del pranzo e la promozione dell'evento. Anche i titoli per motori di ricerca e condivisioni social pubblicizzano ancora le date trascorse.

I partecipanti riceveranno il link al sito nelle story Instagram e lo consulteranno prevalentemente da telefono. Il loro obiettivo principale è scegliere la serata, cercarsi nelle foto e salvarle. La galleria attuale contiene soltanto otto foto delle edizioni precedenti e non utilizza i nuovi album già disponibili nel progetto.

I nuovi album contengono 364 fotografie: venerdì / Aperipirlo, 147; sabato / Tutti a 90, 120; domenica / Splendido Splendente, 97. Gli originali occupano complessivamente circa 375 MiB; caricarli tutti durante l'ingresso al sito comprometterebbe l'esperienza su rete mobile.

## Solution

Trasformare il sito in una vetrina post-evento mantenendo l'identità visiva di Esta Fiesta. Una testata compatta comunica esattamente «Next event is coming soon» e invita a seguire il profilo Instagram esistente, senza date future o countdown.

Le fotografie diventano il contenuto principale. Il link pubblicato nelle story termina con `#foto` e porta direttamente alla sezione con tre copertine cliccabili, compatte e disposte una sotto l'altra su mobile. Ogni copertina identifica chiaramente giorno e serata. Selezionandola si apre una vista dedicata all'album, con tutte le foto in una griglia a due colonne su telefono e un controllo evidente «Tutti gli album».

Toccando una fotografia si apre un visualizzatore a schermo intero che mostra l'immagine completa, permette di passare alle altre foto, offre una chiusura evidente e consente di scaricare l'originale. Anteprime ottimizzate e caricamento progressivo rendono sostenibile la consultazione su mobile.

Programma, prenotazioni e promozione di birre e cucina dell'evento concluso vengono rimossi dalla pagina e dalla navigazione. Chi siamo, contatti e ringraziamento agli sponsor restano contenuti secondari sotto gli album. Titolo e descrizioni social vengono aggiornati alla nuova funzione del sito.

## User Stories

1. Come partecipante proveniente da una story Instagram, voglio aprire direttamente la sezione degli album, così posso scegliere la serata senza attraversare tutta la homepage.
2. Come visitatore da telefono, voglio trovare le copertine sotto la navigazione fissa e senza contenuti sovrapposti, così posso leggerle e toccarle subito.
3. Come visitatore da telefono, voglio tre copertine compatte disposte verticalmente, così posso trovare tutte le serate senza dover scoprire un carosello.
4. Come partecipante del venerdì, voglio riconoscere l'album «Venerdì / Aperipirlo», così posso cercare le foto della mia serata.
5. Come partecipante del sabato, voglio riconoscere l'album «Sabato / Tutti a 90», così posso cercare le foto della mia serata.
6. Come partecipante della domenica, voglio riconoscere l'album «Domenica / Splendido Splendente», così posso cercare le foto della mia serata.
7. Come visitatore, voglio copertine rappresentative dei rispettivi album, così posso distinguere visivamente le tre serate.
8. Come partecipante, voglio aprire una vista dedicata all'album scelto, così posso concentrarmi sulle foto di quel giorno.
9. Come partecipante, voglio consultare tutte le fotografie disponibili della serata, così posso trovare anche quelle che non sono state selezionate come copertina.
10. Come visitatore da telefono, voglio una griglia di anteprime a due colonne, così posso cercarmi rapidamente senza scorrere ogni foto a dimensione piena.
11. Come partecipante, voglio aprire una foto toccando l'anteprima, così posso osservarla in dettaglio.
12. Come partecipante, voglio vedere la foto completa a schermo intero senza ritagli, così non perdo persone o dettagli ai bordi.
13. Come partecipante, voglio passare alla foto precedente o successiva nel visualizzatore, così posso esplorare l'album senza riaprire continuamente la griglia.
14. Come visitatore da telefono, voglio controlli di navigazione comprensibili e utilizzabili al tocco, così posso consultare le foto senza dipendere da interazioni al passaggio del mouse.
15. Come partecipante, voglio chiudere facilmente il visualizzatore, così posso tornare alla ricerca nella griglia.
16. Come partecipante, voglio ritrovare il punto della griglia da cui ho aperto una foto, così non devo ripetere lo scorrimento.
17. Come partecipante, voglio un controllo evidente «Tutti gli album», così posso cambiare serata senza cercare il menu principale.
18. Come partecipante, voglio scaricare la singola fotografia originale dal visualizzatore, così posso conservarla con la qualità disponibile.
19. Come partecipante nel browser interno di Instagram, voglio un percorso di salvataggio comprensibile anche quando il browser richiede l'apertura dell'originale, così posso recuperare la mia fotografia.
20. Come visitatore su rete mobile, voglio caricare anteprime leggere invece di tutti gli originali, così posso iniziare a consultare il sito rapidamente.
21. Come visitatore, voglio che le altre foto vengano caricate progressivamente durante la consultazione, così non consumo subito i dati dell'intero archivio.
22. Come visitatore, voglio dimensioni delle anteprime riservate prima del caricamento, così le foto non spostano continuamente la pagina mentre la consulto.
23. Come visitatore, voglio capire quando una foto sta caricando o non è disponibile, così posso attendere o continuare a navigare senza restare bloccato.
24. Come visitatore della homepage, voglio leggere «Next event is coming soon», così so che il prossimo appuntamento sarà annunciato in seguito.
25. Come persona interessata ai prossimi eventi, voglio raggiungere il profilo Instagram di Esta Fiesta, così posso seguire i prossimi annunci.
26. Come visitatore, voglio che il sito non proponga prenotazioni o un programma già scaduti, così non confondo l'archivio con un evento ancora da svolgere.
27. Come visitatore, voglio che il menu contenga soltanto destinazioni disponibili, così non incontro collegamenti a sezioni rimosse.
28. Come visitatore, voglio continuare a trovare Chi siamo e contatti sotto le foto, così posso conoscere Esta Fiesta e contattare gli organizzatori.
29. Come sponsor o partecipante, voglio un ringraziamento dell'edizione invece di una proposta commerciale scaduta, così il sito riconosce il sostegno alla festa conclusa.
30. Come persona che riceve un link condiviso, voglio un titolo e una descrizione coerenti con foto e sito post-evento, così capisco cosa troverò prima di aprirlo.
31. Come visitatore abituale, voglio ritrovare l'identità visiva di Esta Fiesta, così riconosco il sito dopo il cambiamento di contenuti.
32. Come visitatore da desktop o con tastiera, voglio poter aprire album e foto, navigare e chiudere il visualizzatore con controlli accessibili, così posso usare il sito anche senza interazioni touch.

## Implementation Decisions

- Conservare lo stack esistente: React, Vite, Tailwind CSS e le convenzioni visive del sito. Non introdurre backend, account o servizi esterni per gli album.
- Riorganizzare la composizione della pagina affinché la testata sia compatta e la sezione Foto preceda i contenuti istituzionali. Mantenere il riferimento `#foto` già presente come destinazione stabile del link nelle story.
- Verificare l'ingresso diretto con hash al primo caricamento: la sezione deve raggiungere la posizione corretta anche dopo il montaggio React e il caricamento delle copertine. La navigazione fissa non deve nascondere titolo o controlli.
- Aggiornare Hero, Navbar e contenuti centralizzati: messaggio «Next event is coming soon», accesso alle foto e profilo Instagram già configurato. Eliminare CTA Prenota e collegamenti alle sezioni operative rimosse.
- Non montare più i blocchi Eventi, Programma, Birre e Prenota relativi all'evento concluso; eliminare il countdown dall'esperienza pubblica. La rimozione dalla UI non comporta invii EmailJS o modifiche ai servizi di prenotazione.
- Sostituire la vecchia galleria di otto foto con l'accesso ai tre album di OktoberFiesta 2026. Non mescolare le vecchie fotografie ai nuovi album.
- Organizzare i dati degli album con identità stabile, giorno, nome della serata, copertina e lista ordinata delle fotografie. Ogni fotografia deve associare anteprima ottimizzata e originale corrispondente; l'ordine deve restare deterministico durante la navigazione.
- Pubblicare tutte le 147 fotografie del venerdì, tutte le 120 del sabato e tutte le 97 della domenica, ciascuna soltanto nell'album corretto. Selezionare una copertina rappresentativa tra le foto reali di ogni album.
- Le copertine su mobile sono tre elementi verticali compatti con etichette sempre visibili. Le fotografie nella vista album sono disposte in due colonne; i layout per schermi più ampi possono adattarsi preservando lo stesso percorso.
- La vista dedicata all'album deve rendere evidente il giorno selezionato e offrire il ritorno a «Tutti gli album». L'esperienza deve funzionare sul sito statico esistente, senza imporre nuove riscritture lato hosting per accedere agli album.
- Ampliare il visualizzatore della galleria: immagine completa con contenimento nel viewport, navigazione avanti/indietro con gesto touch e controlli visibili, chiusura esplicita e download. Ai limiti dell'album evitare indici non validi; il ciclo tra ultima e prima foto non è un requisito.
- Chiudere il visualizzatore senza perdere la posizione nella griglia. Gestire il blocco dello scorrimento e il focus in modo coordinato con il menu mobile esistente.
- Garantire controlli semanticamente accessibili, nomi comprensibili, focus visibile, navigazione da tastiera e chiusura con Escape. Le dimensioni e la posizione dei controlli devono funzionare nei viewport mobili, anche con barre del browser e aree di sicurezza.
- Preservare gli originali già forniti. Generare varianti ottimizzate per copertine e anteprime con un processo ripetibile, senza ricomprimere o sovrascrivere i file destinati al download. Gestire correttamente spazi nei nomi delle cartelle e orientamento delle immagini.
- Usare copertine e anteprime ottimizzate nella pagina. Caricare progressivamente il contenuto dell'album selezionato e rendere disponibile l'immagine a maggiore qualità quando necessaria. Non precaricare tutti gli originali, né gli altri album completi.
- Riservare le dimensioni delle immagini per ridurre i salti di layout e prevedere caricamento ed errore senza bloccare la navigazione.
- Il download riguarda la singola foto originale. Verificare il comportamento reale nel browser interno di Instagram; se il salvataggio diretto non è disponibile, offrire accesso comprensibile all'originale senza mostrare un successo di download non verificato.
- Conservare Chi siamo e i contatti come contenuti secondari. Le informazioni di luogo eventualmente mantenute devono restare istituzionali e non invitare a partecipare all'evento passato; non sono parte del percorso principale dalle story.
- Convertire Sponsor in un ringraziamento dell'edizione e togliere il richiamo ai pacchetti commerciali e al vecchio sponsor deck. Nel progetto attuale non sono presenti nomi o loghi degli sponsor: usare un ringraziamento generico senza inventare sostenitori o cifre consuntive.
- Aggiornare titolo, descrizione, Open Graph e Twitter Card per descrivere Esta Fiesta e l'archivio fotografico. Le date del 2–4 ottobre possono identificare l'edizione passata, ma non devono apparire come un invito a un evento futuro.
- Non sono presenti glossario di dominio o ADR nel repository ispezionato. Utilizzare il vocabolario già esistente: Esta Fiesta, OktoberFiesta, Foto, Chi siamo, Sponsor, album e serata.

## Testing Decisions

- Confermato dall'utente: utilizzare un unico livello principale di verifica, il sito nel browser su mobile, coprendo il percorso completo dal link `#foto` al download. Aggiungere un controllo manuale nel browser interno di Instagram.
- Un buon test osserva il comportamento esterno: destinazione del link, contenuti e controlli visibili, album corretto, foto completa, navigazione, ritorno e file originale. Non verificare nomi di componenti interni, struttura dello stato React o classi CSS specifiche.
- Il confine di verifica è l'applicazione composta, includendo Navbar, Hero, Foto, vista album, visualizzatore, contenuti secondari e metadati. Evitare una nuova suite di test unitari dei singoli componenti che replichi l'implementazione.
- Il repository dispone soltanto dei comandi di sviluppo, build e preview; non contiene un framework di test, una suite browser o precedenti simili da estendere. Se viene aggiunta automazione, introdurre una suite browser minima allo stesso confine e concentrarla sui flussi descritti di seguito.
- Ingresso da story: aprire il sito direttamente con `#foto` in un viewport mobile, anche da caricamento a freddo. Verificare che siano raggiungibili tutte le tre copertine, che la barra fissa non le copra e che non sia necessario attraversare la testata.
- Integrità degli album: aprire ciascuna serata e verificare etichetta, conteggio e corrispondenza delle foto con gli asset reali. Nessuna fotografia deve essere omessa o associata all'album sbagliato.
- Consultazione: verificare la griglia a due colonne su telefono, aprire una foto, passare avanti e indietro anche ai limiti dell'album, chiudere e ritrovare la posizione precedente. Tornare a «Tutti gli album» e scegliere un'altra serata.
- Visualizzatore: provare fotografie verticali e orizzontali; l'immagine deve restare completa e i controlli devono essere visibili e utilizzabili. Verificare touch, pulsanti, focus, Escape e assenza di conflitti con il menu mobile.
- Download: verificare che il controllo produca o renda accessibile l'originale della foto selezionata, non l'anteprima o un file errato. Ripetere il percorso sul browser interno di Instagram usando un dispositivo reale; l'emulazione browser da sola non verifica quel contenitore.
- Caricamento: osservare le richieste di rete in condizioni mobili per confermare che l'ingresso utilizzi varianti leggere e che non scarichi tutti i 364 originali. Verificare caricamento progressivo, stabilità del layout e recupero da un'immagine non disponibile.
- Contenuti post-evento: verificare frase esatta «Next event is coming soon», link al profilo esistente, assenza di programma, prenotazione, countdown e promozione dell'evento passato, navigazione senza link a sezioni rimosse e ringraziamento sponsor senza dati inventati.
- Metadati: verificare il documento restituito in produzione o preview, non soltanto il testo renderizzato, per controllare titolo e descrizioni SEO, Open Graph e Twitter aggiornati.
- Eseguire la build di produzione e un controllo della preview come verifica d'integrazione. Verificare inoltre il percorso principale su uno schermo desktop per evitare regressioni introdotte dal layout mobile.
- Non dichiarare completata la verifica nel browser interno di Instagram se non è stata eseguita sul dispositivo reale; riportare separatamente le verifiche automatizzate e manuali effettivamente svolte.

## Out of Scope

- Annunciare date, programma, prezzi o prenotazioni per un nuovo evento.
- Introdurre un nuovo countdown o mantenere attivo il pranzo dell'edizione conclusa.
- Rifare l'identità visiva del sito o creare un nuovo brand.
- Aggiungere autenticazione, caricamento foto da parte degli utenti, CMS, backend o database.
- Creare un archivio navigabile di tutte le edizioni precedenti o mescolare le vecchie otto foto ai nuovi album.
- Selezionare soltanto una parte delle 364 fotografie per la pubblicazione.
- Fornire ZIP o download dell'intero album.
- Aggiungere ricerca per volto, tag delle persone, commenti, like o altre funzioni social.
- Introdurre una nuova piattaforma di hosting, un dominio diverso o un'integrazione con le API Instagram.
- Pubblicare automaticamente le story Instagram o inviare messaggi ai partecipanti.
- Inventare nomi degli sponsor, aggiungere nuove proposte commerciali o produrre un nuovo sponsor deck.
- Cambiare o disattivare servizi esterni di prenotazione, credenziali EmailJS o configurazioni dell'account.
- Effettuare il deploy nell'ambito della sola redazione di questa specifica.

## Further Notes

- Il pubblico principale usa telefono e arriva dalle story: il percorso Instagram → tre album → fotografie è il criterio prioritario per valutare il risultato.
- Il collegamento previsto per le story è `https://www.estafiesta.it/#foto`, sulla base dell'indirizzo già configurato nel progetto. Non è stato pubblicato o verificato un aggiornamento del sito durante la redazione della specifica.
- I file fotografici sono già presenti nel progetto ma le tre cartelle risultano non tracciate da Git. L'implementazione deve includere nel pacchetto pubblicato gli asset necessari, senza perdere gli originali.
- L'album della domenica pesa circa 225 MiB da solo, contro circa 80 MiB per venerdì e 71 MiB per sabato. La verifica delle anteprime deve includere soprattutto le foto ad alta risoluzione della domenica.
- Il README descrive una struttura precedente e non rispecchia interamente i componenti attualmente montati. Le decisioni di questa specifica si basano sul codice corrente.
- Questa specifica descrive il lavoro concordato; non certifica implementazione, build, download o verifica su Instagram già effettuati.
