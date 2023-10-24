---
title: 'Fehler'
description: 'In In diesem Leitfaden werden wir darüber sprechen, was passiert, wenn bei der Arbeit mit der API etwas schief geht.'
---

In In diesem Leitfaden werden wir darüber sprechen, was passiert, wenn bei der Arbeit mit der API etwas schief geht. Fehler passieren, und meistens sind es deine Fehler, nicht unsere. Sehen wir uns einige Statuscodes und Fehlertypen an, auf die du stoßen könntest.

Du kannst feststellen, ob deine Anfrage erfolgreich war, indem du den Statuscode überprüfst, wenn du eine API-Antwort erhältst.
Wenn eine Antwort nicht erfolgreich war, kannst du anhand des Fehlertyps und der Fehlermeldung herausfinden,
was schief gelaufen ist, und eine rudimentäre Fehlersuche durchführen.

::InfoBox{type="warning"}
Bevor du dich mit einer Fehlermeldung an den Support wendest, solltest du wissen, dass 99 % aller gemeldeten Fehler in Wirklichkeit Benutzerfehler sind.
Prüfe daher deinen Code sorgfältig, bevor du dich an den Support wendest.
::

---

## Statuscode

Hier findest du eine Liste der verschiedenen Kategorien von Statuscodes, die von der Protokoll-API zurückgegeben werden.
Nutze diese, um zu verstehen, ob eine Anfrage erfolgreich war.


#### 2xx

Ein 2xx-Statuscode zeigt eine erfolgreiche Antwort an.

#### 4xx

Ein 4xx-Statuscode weist auf einen Client-Fehler hin - das heißt, es ist ein _dein_ Problem.
    
#### 5xx

Ein 5xx-Statuscode weist auf einen Serverfehler hin - du wirst diesen nicht sehen.

--- 

### Beispiel für 4xx Error resonse:


##### Fehlender Header

_Status-Code: 401_

```json
{
    "message": "Token in header: \"x-auth-token\" not found",
    "success": false,
    "data": []
}
```

Bitte sende den Header "x-auth-token" mit deinem Token im Request.

---

##### Token nicht erkannt

_Status-Code: 401_

```json
{
    "message": "Token L1u609q8l0j6h1g0n9l2U7U0E2SFcIOcAY5sYtM1zV not found",
    "success": false,
    "data": []
}
```

Dein Token konnte im System nicht gefunden werden. Es wäre ratsam, einen neuen Token zu generieren.

---

##### Anfragelimit überschritten

_Status-Code: 429_

```json
{
    "message": "You are allowed a maximum of 30 queries per minute. Please try again later.",
    "success": false,
    "data": []
}
```

Du hast das Limit von 30 Abfragen pro Minute bei api-fussball.de erreicht. Du kannst es in Kürze erneut versuchen. 
Sollte das Problem weiterhin bestehen, empfehlen wir, die Ergebnisse unserer Seite zu cachen, beispielsweise für 5 Minuten
