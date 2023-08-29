---
title: 'Fussball.de-Id'
description: 'In diesem Leitfaden werden wir darüber sprechen, was genau fussball.de_id genau bedeutet'
---

In diesem Leitfaden werden wir darüber sprechen, was genau `fussball.de_id` genau bedeutet

Anhand `fussball.de_id` kann die API identifizieren, welche Mannschaft oder Verein gemeint ist. Die `fussball.de_id` ist eindeutig und kann von der [fussball.de](https://www.fussball.de) URL genommen werden.


::InfoBox{type="info"}
Jeder resurce benötigt eine __fussball.de_id__ um aufgerufen zu werden.
::

---

## Id für einen Verein

__Resource:__ `club`

Um die ID für einen Verein zu erhalten, musst du auf die Vereinsseite auf fussball.de gehen und die letzten Parameter der URL kopieren.

z.B. wenn wir die ID für den Verein [Borussia Dortmund](https://www.fussball.de/verein/borussia-dortmund-westfalen/-/id/00ES8GN8N400008VVV0AG08LVUPGND5I#!/) wollen, kopieren wir die ID `00ES8GN8N400008VVV0AG08LVUPGND5I` aus der URL.

![fussballde_id_verein_bvb](/fussballde_id/verein-bvb.png)

Jetzt kannst du die folgende URL aufrufen, um die Daten des Vereins Borussia Dortmund zu erhalten:

```bash {{ title: 'cURL' }}
curl -G https://api-fussball.de/api/club/00ES8GN8N400008VVV0AG08LVUPGND5I \
-H "x-auth-token: {token}"
```

## ID für eine Mannschaft

__Resource:__ `team`

Um die ID einer Mannschaft zu erhalten, musst du auf die Mannschaftseite auf fussball.de gehen und die letzten Parameter der URL kopieren.

z.B. wenn wir die ID für die Mannschaft [Herren I von Borussia Dortmund](https://www.fussball.de/mannschaft/borussia-dortmund-borussia-dortmund-westfalen/-/team-id/011MI8V6UC000000VTVG0001VTR8C1K7#!/) wollen, kopieren wir die ID `011MI8V6UC000000VTVG0001VTR8C1K7` aus der URL.

![fussballde_id_team_bvb](/fussballde_id/team-bvb.png)

Jetzt kannst du die folgende URL aufrufen, um die Daten der Mannschaft Herren I von Borussia Dortmund zu erhalten:


```bash {{ title: 'cURL' }}
curl -G https://api-fussball.de/api/team/011MI8V6UC000000VTVG0001VTR8C1K7 \
-H "x-auth-token: {token}"
```
