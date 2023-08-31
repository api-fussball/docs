---
title: 'Quickstart'
description: 'In diesem Leitfaden erfährst du, wie du die Protokoll-API einrichten und nutzen kannst.'
---

In diesem Leitfaden erfährst du, wie du die Protokoll-API einrichten und nutzen kannst.
Ich zeige dir, wie du einen unserer API-Clients verwendest und wie du deine erste API-Anfrage stellst.
Außerdem erfährst du, wo du als nächstes alle Informationen findest, die du benötigst, um die Vorteile unserer leistungsstarken REST-API voll auszuschöpfen.

::InfoBox{type="info"}
Bevor du Anfragen an die Protokoll-API stellen kannst,
musst du dir deinen API-Schlüssel von deinem Dashboard holen.
Du findest ihn unter [Token](/token).
::

## Deine erste API-Anfrage stellen

Du kannst mit einfachen Anfragen die Informationen von Fussball.de erhalten.
Zum Beispiel, wenn wir alle Mannschaften des Vereins Borussia Dortmund abrufen möchten,
müssen wir die entsprechende Anfrage stellen.

```bash
# GET /api/club/{fussball.de_id}
curl -G https://api-fussball.de/api/club/00ES8GN8N400008VVV0AG08LVUPGND5I \
-H "x-auth-token: {token}"
```

