---
title: 'Club'
description: 'In diesem Leitfaden erfährst du, wie du die Protokoll-API einrichten und nutzen kannst.'
---


Der Club-Endpunkt liefert dir alle Informationen eines Vereins, die du auf Fussball.de unter "Mannschaften des Vereins" sehen kannst.


## Club info

Der Club-Endpunkt liefert dir Informationen über alle Teams und die URLs, über die du detaillierte Informationen von jedem Team abrufen kannst.

* __Url__: `/api/club/{fussball.de_id}`
* __Method__: `GET`



##### Erforderliche Attribute:

`fussball.de_id` (_string_) 

Die ID der URL auf fussball.de, wo du Informationen über den Verein abrufen kannst.

__Request:__
```bash
# GET /api/club/{fussball.de_id}
curl -G https://api-fussball.de/api/club/00ES8GN8N400008VVV0AG08LVUPGND5I \
-H "x-auth-token: {token}"
```

__Response:__

```json
{
  "success": true,
  "data": [
    {
      "fussballDeUrl": "/mannschaft/borussia-dortmund-borussia-dortmund-westfalen/-/saison/2122/team-id/01E01A7L58000000VV0AG811VTA8FO8N",
      "name": "Altherren - Borussia Dortmund",
      "urls": {
        "nextGames": "/club/next_games/01E01A7L58000000VV0AG811VTA8FO8N",
        "prevGames": "/club/prev_games/01E01A7L58000000VV0AG811VTA8FO8N",
        "table": "/club/table/01E01A7L58000000VV0AG811VTA8FO8N",
        "allInfo": "/club/01E01A7L58000000VV0AG811VTA8FO8N"
      }
    },
    {
      "fussballDeUrl": "/mannschaft/borussia-dortmund-borussia-dortmund-westfalen/-/saison/2122/team-id/011MI8V6UC000000VTVG0001VTR8C1K7",
      "name": "Herren - Borussia Dortmund"
      // ...
    }
  ]
}
```

---

## Eigenschaften

`fussballDeUrl` _(string)_ - URL auf Fussball.de

`name` _(string)_ - Team name

`urls` _(object)_ - URLs für weitere detaillierte  Informationen

`nextGames` _(string)_ - URL zum nächsten Spiel des Teams

`prevGames` _(string)_ - URL zum letzten Spiel des Teams

`table` _(string)_ - URL zur aktuellen Ligatabelle des Teams

`allInfo` _(string)_ - URL, wo du alle Informationen auf einmal sehen kannst. Es enthält Informationen von den letzten Spielen, den nächsten Spielen und der aktuellen Tabelle.
