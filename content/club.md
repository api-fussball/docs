---
title: 'Club'
description: 'Dokumentation der Club-Endpoints - Informationen zu Vereinen und deren Mannschaften'
---

Die Club-Endpoints liefern dir alle Informationen zu Fußballvereinen und deren Mannschaften.

## Verfügbare Endpoints

- **`GET /api/club/{id}`** - Liste aller Mannschaften eines Vereins
- **`GET /api/club/info/{id}`** - Alle Infos auf einmal (Mannschaften + alle Spiele)
- **`GET /api/club/next_games/{id}`** - Kommende Spiele aller Vereinsmannschaften
- **`GET /api/club/prev_games/{id}`** - Vergangene Spiele aller Vereinsmannschaften

---

## Club - Mannschaften des Vereins

Dieser Endpunkt liefert dir Informationen über alle Teams eines Vereins und die URLs, über die du detaillierte Informationen von jedem Team abrufen kannst.

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
      "id": "01E01A7L58000000VV0AG811VTA8FO8N",
      "name": "Altherren - Borussia Dortmund",
      "url": {
        "nextGames": "/api/team/next_games/01E01A7L58000000VV0AG811VTA8FO8N",
        "prevGames": "/api/team/prev_games/01E01A7L58000000VV0AG811VTA8FO8N",
        "table": "/api/team/table/01E01A7L58000000VV0AG811VTA8FO8N",
        "allInfo": "/api/team/01E01A7L58000000VV0AG811VTA8FO8N"
      }
    },
    {
      "fussballDeUrl": "/mannschaft/borussia-dortmund-borussia-dortmund-westfalen/-/saison/2122/team-id/011MI8V6UC000000VTVG0001VTR8C1K7",
      "id": "011MI8V6UC000000VTVG0001VTR8C1K7",
      "name": "Herren - Borussia Dortmund",
      "url": {
        "nextGames": "/api/team/next_games/011MI8V6UC000000VTVG0001VTR8C1K7",
        "prevGames": "/api/team/prev_games/011MI8V6UC000000VTVG0001VTR8C1K7",
        "table": "/api/team/table/011MI8V6UC000000VTVG0001VTR8C1K7",
        "allInfo": "/api/team/011MI8V6UC000000VTVG0001VTR8C1K7"
      }
    }
  ]
}
```

---

## Club - Alle Infos auf einen Blick

Dieser Endpoint liefert dir alle Informationen über einen Verein auf einmal: alle Mannschaften, vorherige und kommende Spiele aller Teams.

* __Url__: `/api/club/info/{fussball.de_id}`
* __Method__: `GET`

__Request:__
```bash
# GET /api/club/info/{fussball.de_id}
curl -G https://api-fussball.de/api/club/info/00ES8GN8N400008VVV0AG08LVUPGND5I \
-H "x-auth-token: {token}"
```

__Response:__

```json
{
  "success": true,
  "data": {
    "clubs": [
      {
        "fussballDeUrl": "/mannschaft/...",
        "name": "Herren - Borussia Dortmund",
        "urls": { /* ... */ }
      }
    ],
    "prevGames": [
      {
        "homeTeam": "Team A",
        "awayTeam": "Team B",
        "homeScore": "2",
        "awayScore": "1",
        "time": "15:00",
        "date": "Sa, 15.04.23",
        "ageGroup": "Herren",
        "competition": "Bundesliga",
        "status": "beendet"
      }
    ],
    "nextGames": [
      {
        "homeTeam": "Team A",
        "awayTeam": "Team C",
        "homeScore": "",
        "awayScore": "",
        "time": "18:30",
        "date": "Sa, 22.04.23",
        "ageGroup": "Herren",
        "competition": "Bundesliga",
        "status": "angesetzt"
      }
    ]
  }
}
```

---

## Club - Nächste Spiele

Dieser Endpoint liefert dir alle kommenden Spiele aller Mannschaften des Vereins.

* __Url__: `/api/club/next_games/{fussball.de_id}`
* __Method__: `GET`

__Request:__
```bash
# GET /api/club/next_games/{fussball.de_id}
curl -G https://api-fussball.de/api/club/next_games/00ES8GN8N400008VVV0AG08LVUPGND5I \
-H "x-auth-token: {token}"
```

__Response:__

```json
{
  "success": true,
  "data": [
    {
      "homeTeam": "Borussia Dortmund",
      "awayTeam": "FC Bayern München",
      "homeScore": "",
      "awayScore": "",
      "homeLogo": "https://www.fussball.de/export.media/...",
      "awayLogo": "https://www.fussball.de/export.media/...",
      "time": "18:30",
      "date": "Sa, 22.04.23",
      "ageGroup": "Herren",
      "competition": "Bundesliga",
      "status": "angesetzt"
    }
    // ... weitere Spiele aller Mannschaften
  ]
}
```

---

## Club - Vorherige Spiele

Dieser Endpoint liefert dir alle vergangenen Spiele aller Mannschaften des Vereins mit Ergebnissen.

* __Url__: `/api/club/prev_games/{fussball.de_id}`
* __Method__: `GET`

__Request:__
```bash
# GET /api/club/prev_games/{fussball.de_id}
curl -G https://api-fussball.de/api/club/prev_games/00ES8GN8N400008VVV0AG08LVUPGND5I \
-H "x-auth-token: {token}"
```

__Response:__

```json
{
  "success": true,
  "data": [
    {
      "homeTeam": "Borussia Dortmund",
      "awayTeam": "FC Schalke 04",
      "homeScore": "3",
      "awayScore": "1",
      "homeLogo": "https://www.fussball.de/export.media/...",
      "awayLogo": "https://www.fussball.de/export.media/...",
      "time": "15:30",
      "date": "Sa, 15.04.23",
      "ageGroup": "Herren",
      "competition": "Bundesliga",
      "status": "beendet"
    }
    // ... weitere Spiele aller Mannschaften
  ]
}
```

---

## Eigenschaften

### Team-Objekt (im Club-Response)

`fussballDeUrl` _(string)_ - URL zur Mannschaftsseite auf Fussball.de

`id` _(string)_ - Team-ID (fussball.de ID)

`name` _(string)_ - Teamname (z.B. "Herren - Borussia Dortmund")

`url` _(object)_ - URLs zu den Team-Endpoints für weitere Informationen

`url.nextGames` _(string)_ - URL zum Abrufen der nächsten Spiele des Teams → `/api/team/next_games/{id}`

`url.prevGames` _(string)_ - URL zum Abrufen der vorherigen Spiele des Teams → `/api/team/prev_games/{id}`

`url.table` _(string)_ - URL zur aktuellen Ligatabelle des Teams → `/api/team/table/{id}`

`url.allInfo` _(string)_ - URL zum Abrufen aller Infos auf einmal (Tabelle + Spiele) → `/api/team/{id}`

::InfoBox{type="info"}
Die URLs im Club-Response verweisen auf **Team-Endpoints**, da jede Mannschaft separate Daten hat.
::
