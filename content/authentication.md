---
title: 'Authentifizierung'
description: 'Um auf die Endpunkte der Protokoll-API zugreifen zu können, müssen Sie Ihre Anfragen authentifizieren.'
---

Um auf die Endpunkte der Protokoll-API zugreifen zu können, musst du deine Anfragen authentifizieren. 
In dieser Anleitung werden wir uns ansehen, wie die Authentifizierung funktioniert. Api-fussball.de bietet eine einfache Authentifizierung über Token.

## Token authentifizieren

Wenn du deine E-Mail sendest, erhältst du dein persönliches Token, mit dem du nun die API autorisieren kannst.


```bash
# Beispiel für eine URL zum Abrufen eines Tokens
curl -X POST https://api-fussball.de/auth/register \
  -d '{"email":"my@email.de"}'
```

Bewahre deinen Token immer sicher auf und setze ihn zurück, wenn du vermutest, dass er missbraucht wurde. Du kannst das Token ändern, 
wenn du eine Anfrage zur Erstellung eines Tokens mit derselben E-Mail-Adresse sendest. In diesem Fall überschreibt das neue Token das alte.


> Mit deinem eigenen persönlichen Token kannst du nur 30 Anfragen in einer Minute stellen.



::InfoBox{type="warning"}
Bitte denke daran, die Antworten von api-fussball.de zu cachen, das wird deine Seite schneller laden lassen, denn jede Anfrage an uns kostet ca. 0,5 Sekunde Zeit.
::

