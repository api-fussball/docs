---
title: 'Team'
description: 'Dokumentation der Team-Endpoints - Informationen zu einzelnen Mannschaften, Spielen und Tabellen'
---

Die Team-Endpoints liefern dir detaillierte Informationen über einzelne Mannschaften, deren Spiele und die aktuelle Ligatabelle.

## Verfügbare Endpoints

- **`GET /api/team/{id}`** - Alle Infos auf einmal (Tabelle + alle Spiele)
- **`GET /api/team/table/{id}`** - Aktuelle Ligatabelle des Teams
- **`GET /api/team/next_games/{id}`** - Kommende Spiele des Teams
- **`GET /api/team/prev_games/{id}`** - Vergangene Spiele des Teams

---

## Team - Alle Infos auf einen Blick

Dieser Endpoint liefert dir alle Informationen über ein Team auf einmal: Ligatabelle, vorherige und kommende Spiele.

* __Url__: `/api/team/{fussball.de_id}`
* __Method__: `GET`

##### Erforderliche Attribute:

`fussball.de_id` (_string_)

Die Team-ID von der fussball.de URL. Wie du die ID findest, erfährst du [hier](/fussballdeid).

__Request:__
```bash
# GET /api/team/{fussball.de_id}
curl -G https://api-fussball.de/api/team/011MI8V6UC000000VTVG0001VTR8C1K7 \
-H "x-auth-token: {token}"
```

__Response:__

```json
{
  "success": true,
  "data": {
    "table": [
      {
        "place": 1,
        "team": "FC Bayern München",
        "img": "https://www.fussball.de/export.media/...",
        "games": 18,
        "won": 14,
        "draw": 2,
        "lost": 2,
        "goal": "45 : 12",
        "goalDifference": 33,
        "points": 44,
        "isPromotion": true,
        "isRelegation": false
      }
      // ... weitere Teams
    ],
    "prevGames": [
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
      // ... weitere Spiele
    ],
    "nextGames": [
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
      // ... weitere Spiele
    ]
  }
}
```

---

## Team Tabelle

Dieser Endpoint liefert dir die aktuelle Ligatabelle des Teams.

* __Url__: `/api/team/table/{fussball.de_id}`
* __Method__: `GET`

__Request:__
```bash
# GET /api/team/table/{fussball.de_id}
curl -G https://api-fussball.de/api/team/table/011MI8V6UC000000VTVG0001VTR8C1K7 \
-H "x-auth-token: {token}"
```

__Response:__

```json
{
  "success": true,
  "data": [
    {
      "place": 1,
      "team": "FC Bayern München",
      "img": "https://www.fussball.de/export.media/...",
      "games": 18,
      "won": 14,
      "draw": 2,
      "lost": 2,
      "goal": "45 : 12",
      "goalDifference": 33,
      "points": 44,
      "isPromotion": true,
      "isRelegation": false
    },
    {
      "place": 2,
      "team": "Borussia Dortmund",
      "img": "https://www.fussball.de/export.media/...",
      "games": 18,
      "won": 12,
      "draw": 3,
      "lost": 3,
      "goal": "42 : 18",
      "goalDifference": 24,
      "points": 39,
      "isPromotion": true,
      "isRelegation": false
    }
    // ... weitere Teams
  ]
}
```

---

## Team - Nächste Spiele

Dieser Endpoint liefert dir die kommenden Spiele eines Teams.

* __Url__: `/api/team/next_games/{fussball.de_id}`
* __Method__: `GET`

__Request:__
```bash
# GET /api/team/next_games/{fussball.de_id}
curl -G https://api-fussball.de/api/team/next_games/011MI8V6UC000000VTVG0001VTR8C1K7 \
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
    // ... weitere Spiele
  ]
}
```

---

## Team - Vorherige Spiele

Dieser Endpoint liefert dir die vergangenen Spiele eines Teams mit Ergebnissen.

* __Url__: `/api/team/prev_games/{fussball.de_id}`
* __Method__: `GET`

__Request:__
```bash
# GET /api/team/prev_games/{fussball.de_id}
curl -G https://api-fussball.de/api/team/prev_games/011MI8V6UC000000VTVG0001VTR8C1K7 \
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
    // ... weitere Spiele
  ]
}
```

---

## Eigenschaften

### Tabellen-Objekt

`place` _(number)_ - Platzierung in der Tabelle

`team` _(string)_ - Name des Teams

`img` _(string)_ - URL zum Team-Logo

`games` _(number)_ - Anzahl gespielter Spiele

`won` _(number)_ - Anzahl gewonnener Spiele

`draw` _(number)_ - Anzahl unentschiedener Spiele

`lost` _(number)_ - Anzahl verlorener Spiele

`goal` _(string)_ - Torverhältnis (z.B. "45 : 12")

`goalDifference` _(number)_ - Tordifferenz

`points` _(number/decimal)_ - Punkte (kann auch Durchschnittswerte als Dezimalzahl sein, z.B. 2.6)

`isPromotion` _(boolean)_ - Aufstiegsplatz

`isRelegation` _(boolean)_ - Abstiegsplatz

### Spiel-Objekt

`homeTeam` _(string)_ - Name des Heimteams

`awayTeam` _(string)_ - Name des Auswärtsteams

`homeScore` _(string)_ - Tore Heimteam (leer bei zukünftigen Spielen)

`awayScore` _(string)_ - Tore Auswärtsteam (leer bei zukünftigen Spielen)

`homeLogo` _(string)_ - URL zum Logo des Heimteams

`awayLogo` _(string)_ - URL zum Logo des Auswärtsteams

`time` _(string)_ - Uhrzeit des Spiels (Format: "HH:MM")

`date` _(string)_ - Datum des Spiels (Format: "Sa, 15.04.23")

`ageGroup` _(string)_ - Altersklasse (z.B. "Herren", "A-Junioren", "B-Junioren")

`competition` _(string)_ - Wettbewerb (z.B. "Bundesliga", "Kreisliga C")

`status` _(string)_ - Status des Spiels (z.B. "angesetzt", "beendet", "abgesagt")
