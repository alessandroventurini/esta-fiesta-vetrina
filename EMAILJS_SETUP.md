# 📧 Setup EmailJS - Guida Completa

## 1️⃣ Crea Account EmailJS (5 minuti)

1. Vai su **https://www.emailjs.com/**
2. Clicca su **"Sign Up"** (gratuito fino a 200 email/mese)
3. Verifica la tua email

---

## 2️⃣ Aggiungi il Servizio Email

1. Nel dashboard, vai su **"Email Services"**
2. Clicca **"Add New Service"**
3. Scegli **Gmail** (o il tuo provider)
4. Clicca **"Connect Account"** e autorizza Gmail
5. Copia il **SERVICE_ID** (es: `service_abc123`)

---

## 3️⃣ Crea il Template Email

1. Vai su **"Email Templates"**
2. Clicca **"Create New Template"**
3. Usa questo template:

### Template Consigliato:

**Subject:** `Nuova Richiesta da {{from_name}} - ESTA FIESTA`

**Body:**
```
Nuova richiesta di collaborazione dal sito ESTA FIESTA!

DATI CONTATTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━
Nome: {{from_name}}
Email: {{from_email}}
Telefono: {{phone}}
Comune/Località: {{comune}}

MESSAGGIO:
━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━
Ricevuto dal form di contatto su estafiesta.it
```

4. **IMPORTANTE**: In "To Email" metti: `estafiestacastelmella@gmail.com`
5. Salva e copia il **TEMPLATE_ID** (es: `template_xyz789`)

---

## 4️⃣ Ottieni la Public Key

1. Vai su **"Account"** → **"General"**
2. Trovi la **Public Key** (es: `abcXYZ123_ABC`)
3. Copiala

---

## 5️⃣ Configura il File .env

Apri il file `.env` nella root del progetto e sostituisci:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcXYZ123_ABC
```

⚠️ **ATTENZIONE**: Non committare mai il file `.env` su Git (è già in .gitignore)

---

## 6️⃣ Testa il Form

1. Riavvia il dev server: `npm run dev`
2. Vai alla sezione "Collabora"
3. Compila e invia il form
4. Controlla la mail: `estafiestacastelmella@gmail.com`

---

## 🎯 Template Variables Disponibili

Nel template EmailJS puoi usare:

- `{{from_name}}` - Nome del mittente
- `{{from_email}}` - Email del mittente
- `{{phone}}` - Telefono (opzionale)
- `{{comune}}` - Comune/Località
- `{{message}}` - Messaggio
- `{{to_email}}` - Email destinatario (tua)

---

## 🔥 Tips Avanzati

### Aggiungi Auto-Reply
Crea un secondo template per inviare conferma automatica al richiedente:
- Subject: `Richiesta ricevuta - ESTA FIESTA`
- Body: "Grazie per averci contattato! Ti risponderemo entro 48h..."

### Notifiche Multiple
Puoi aggiungere più email in CC/BCC dal template

### Tracking
EmailJS dashboard mostra tutte le email inviate

---

## ❓ Troubleshooting

**Errore: "EmailJS non è configurato"**
→ Controlla che il file `.env` sia nella root e le chiavi siano corrette

**Email non arriva**
→ Controlla spam/promozioni in Gmail
→ Verifica "To Email" nel template EmailJS

**Limite 200 email superato**
→ Upgrade al piano a pagamento ($9/mese per 1000 email)

---

## 📞 Contatti EmailJS Support
- Docs: https://www.emailjs.com/docs/
- Support: dashboard EmailJS → chat

---

✅ **Setup completato!** Il form ora invia email a estafiestacastelmella@gmail.com
