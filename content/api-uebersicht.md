---
title: 'API Übersicht'
description: 'Vollständige Übersicht aller verfügbaren API-Endpoints von api-fussball.de'
---

Hier findest du eine vollständige Übersicht aller verfügbaren API-Endpoints.

## Basis-URL

```
https://api-fussball.de
```

## Authentifizierung

Alle API-Requests (außer `/auth/register`) benötigen einen API-Token im Header:

```bash
-H "x-auth-token: {dein_token}"
```

[Mehr zur Authentifizierung →](/token)

---

## Authentifizierungs-Endpoint

### Token erstellen

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "deine@email.de"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Token created successfully",
  "data": {
    "token": "dein_generierter_token",
    "email": "deine@email.de"
  }
}
```

[Detaillierte Dokumentation →](/token)

---

## Club (Verein) Endpoints

### GET /api/club/{id}
Liste aller Mannschaften eines Vereins mit URLs zu weiteren Informationen.

**Parameter:** `id` - fussball.de Club-ID

[Detaillierte Dokumentation →](/club#club-mannschaften-des-vereins)

---

### GET /api/club/info/{id}
Vollständige Vereinsinformationen: alle Mannschaften + alle kommenden und vergangenen Spiele.

**Parameter:** `id` - fussball.de Club-ID

**Response enthält:**
- `clubs` - Liste aller Mannschaften
- `nextGames` - Kommende Spiele aller Teams
- `prevGames` - Vergangene Spiele aller Teams

[Detaillierte Dokumentation →](/club#club-alle-infos-auf-einen-blick)

---

### GET /api/club/next_games/{id}
Kommende Spiele aller Mannschaften des Vereins.

**Parameter:** `id` - fussball.de Club-ID

[Detaillierte Dokumentation →](/club#club-nachste-spiele)

---

### GET /api/club/prev_games/{id}
Vergangene Spiele aller Mannschaften des Vereins mit Ergebnissen.

**Parameter:** `id` - fussball.de Club-ID

[Detaillierte Dokumentation →](/club#club-vorherige-spiele)

---

## Team (Mannschaft) Endpoints

### GET /api/team/{id}
Vollständige Teaminformationen: Ligatabelle + kommende und vergangene Spiele.

**Parameter:** `id` - fussball.de Team-ID

**Response enthält:**
- `table` - Aktuelle Ligatabelle
- `nextGames` - Kommende Spiele
- `prevGames` - Vergangene Spiele

[Detaillierte Dokumentation →](/team#team-alle-infos-auf-einen-blick)

---

### GET /api/team/table/{id}
Aktuelle Ligatabelle des Teams.

**Parameter:** `id` - fussball.de Team-ID

**Response enthält:**
- Platzierung, Spiele, Siege, Unentschieden, Niederlagen
- Torverhältnis, Tordifferenz, Punkte
- Aufstiegs-/Abstiegsplätze

[Detaillierte Dokumentation →](/team#team-tabelle)

---

### GET /api/team/next_games/{id}
Kommende Spiele des Teams.

**Parameter:** `id` - fussball.de Team-ID

[Detaillierte Dokumentation →](/team#team-nachste-spiele)

---

### GET /api/team/prev_games/{id}
Vergangene Spiele des Teams mit Ergebnissen.

**Parameter:** `id` - fussball.de Team-ID

[Detaillierte Dokumentation →](/team#team-vorherige-spiele)

---

## Rate Limits

::InfoBox{type="warning"}
Mit deinem Token kannst du maximal **30 Anfragen pro Minute** stellen. Bei Überschreitung erhältst du einen `429` Fehler.
::

[Mehr zu Fehlern →](/errors)

---

## IDs finden

Wie du die benötigten `fussball.de_id` für Vereine und Teams findest:

[Anleitung zur ID-Extraktion →](/fussballdeid)

---

## Beispiel-Workflow

1. **Token erstellen**
   ```bash
   curl -X POST https://api-fussball.de/api/auth/register \
     -d '{"email":"my@email.de"}'
   ```

2. **Vereins-ID von fussball.de kopieren**
   - Beispiel: `00ES8GN8N400008VVV0AG08LVUPGND5I` (Borussia Dortmund)

3. **Mannschaften des Vereins abrufen**
   ```bash
   curl -G https://api-fussball.de/api/club/00ES8GN8N400008VVV0AG08LVUPGND5I \
     -H "x-auth-token: dein_token"
   ```

4. **Team-ID aus Response kopieren und Team-Details abrufen**
   ```bash
   curl -G https://api-fussball.de/api/team/011MI8V6UC000000VTVG0001VTR8C1K7 \
     -H "x-auth-token: dein_token"
   ```

---

## Caching-Empfehlung

::InfoBox{type="info"}
Wir empfehlen dringend, API-Responses zu cachen (z.B. für 5 Minuten), um die Performance zu verbessern und Rate-Limits zu vermeiden. Jede Anfrage dauert ca. 0,5 Sekunden.
::

---

## Support

Bei Fragen oder Problemen:
- [GitHub Issues](https://github.com/api-fussball/api-dart/issues)
