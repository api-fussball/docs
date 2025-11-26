# api-fussball.de - API Dokumentation

Diese Webseite ist die offizielle Dokumentation für die **api-fussball.de** - eine JSON-API für fussball.de Daten.

## Über das Projekt

Dies ist eine statische Dokumentationswebsite, die mit **Nuxt 3** und **Nuxt Content** erstellt wurde. Die Website bietet eine benutzerfreundliche Dokumentation für Entwickler, die die api-fussball.de API nutzen möchten, um Informationen über deutsche Fußballmannschaften, Spiele und Ergebnisse abzurufen.

**Live URL:** https://www.api-fussball.de

## Tech Stack

- **Nuxt 3** - Vue.js Framework für serverseitiges Rendering und statische Site-Generierung
- **Nuxt Content** - File-based CMS für Markdown-Inhalte
- **Tailwind CSS** - Utility-first CSS Framework
- **Headless UI** - Accessible UI Components für Vue
- **Heroicons** - Icon-Bibliothek

## Projektstruktur

```
api-docs/
├── app.vue                    # Haupt-App-Component (Wrapper)
├── nuxt.config.ts             # Nuxt Konfiguration
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind CSS Konfiguration
│
├── pages/                     # Seiten-Routen
│   ├── index.vue              # Startseite (zeigt /content/home.md)
│   └── [...slug].vue          # Dynamische Routen für alle anderen Seiten
│
├── content/                   # Markdown-Dokumentation
│   ├── home.md                # Startseite - Übersicht der API
│   ├── api-uebersicht.md      # Vollständige API-Endpoint-Referenz
│   ├── quickstart.md          # Schnellstart-Anleitung
│   ├── token.md               # Token-Authentifizierung
│   ├── fussballdeid.md        # Erklärung der fussball.de IDs
│   ├── club.md                # Club/Verein Endpoints Dokumentation
│   ├── team.md                # Team Endpoints Dokumentation
│   └── errors.md              # Fehlerbehandlung und Status-Codes
│
├── layouts/
│   └── default.vue            # Standard-Layout mit Sidebar-Navigation
│
├── components/
│   └── content/
│       └── InfoBox.vue        # Wiederverwendbare Info/Warning/Error Boxen
│
├── assets/
│   └── css/
│       └── main.css           # Globale Styles und Tailwind Imports
│
└── public/                    # Statische Assets (Bilder, Icons)
    └── fussball-logo.png      # Logo für die Dokumentation
```

## Verfügbare Seiten

Die Dokumentation besteht aus folgenden Seiten:

### 1. **Home** (`/`)
- Einführung in die api-fussball.de
- Überblick über die API-Funktionen
- Hinweise zur kostenlosen Nutzung und Caching-Empfehlungen
- Erste Schritte

### 2. **API Übersicht** (`/api-uebersicht`)
- Vollständige Endpoint-Referenz
- Schnellübersicht aller verfügbaren Endpoints
- Beispiel-Workflow
- Links zu detaillierter Dokumentation

### 3. **Token** (`/token`)
- Authentifizierung mit API-Token
- Anleitung zum Token-Erstellen
- Rate Limits (30 Anfragen/Minute)
- Sicherheitshinweise

### 3. **Quickstart** (`/quickstart`)
- Schnellstart-Anleitung für Entwickler
- Beispiel-API-Anfrage mit cURL
- Erste Schritte zur API-Integration

### 4. **Fussball.de-Id** (`/fussballdeid`)
- Erklärung der fussball.de ID
- Anleitung zum Extrahieren von Vereins-IDs
- Anleitung zum Extrahieren von Mannschafts-IDs
- Beispiele mit Screenshots

### 5. **Club** (`/club`)
- Dokumentation der Club/Verein-Endpoints
- `/api/club/{id}` - Alle Mannschaften eines Vereins
- `/api/club/info/{id}` - Alle Infos auf einen Blick (Mannschaften + Spiele)
- `/api/club/next_games/{id}` - Nächste Spiele aller Mannschaften
- `/api/club/prev_games/{id}` - Vorherige Spiele aller Mannschaften
- Request/Response-Beispiele

### 6. **Team** (`/team`)
- Dokumentation der Team-Endpoints
- `/api/team/{id}` - Alle Infos auf einen Blick (Tabelle + Spiele)
- `/api/team/table/{id}` - Ligatabelle des Teams
- `/api/team/next_games/{id}` - Nächste Spiele des Teams
- `/api/team/prev_games/{id}` - Vorherige Spiele des Teams
- Detaillierte Eigenschaften-Beschreibungen

### 7. **Fehler** (`/errors`)
- Übersicht der HTTP-Status-Codes
- Häufige Fehler und Lösungen
- Beispiele für 4xx Fehler-Responses
- Rate-Limit-Fehler

## Components

### InfoBox Component
Die `InfoBox.vue` Component wird in den Markdown-Dateien verwendet, um wichtige Informationen hervorzuheben:

```markdown
::InfoBox{type="info"}
Wichtige Information für Entwickler
::

::InfoBox{type="warning"}
Warnung oder Hinweis
::

::InfoBox{type="error"}
Fehler oder kritischer Hinweis
::
```

## Installation und Setup

### Voraussetzungen
- Node.js (v18 oder höher)
- pnpm (Package Manager)

### pnpm installieren

Falls du `pnpm` noch nicht installiert hast:

```bash
# Via npm
npm install -g pnpm

# Oder via Corepack (empfohlen für Node.js >= 16.13)
corepack enable
corepack prepare pnpm@latest --activate

# Oder via Homebrew (macOS)
brew install pnpm
```

Weitere Installationsmethoden: https://pnpm.io/installation

### Dependencies installieren

```bash
pnpm install
```

## Development

Entwicklungsserver starten (läuft auf `http://localhost:3000`):

```bash
pnpm run dev
```

## Production Build

Anwendung für Production bauen:

```bash
pnpm run build
```

Production-Build lokal testen:

```bash
pnpm run preview
```

Statische Website generieren:

```bash
pnpm run generate
```

## Wie funktioniert die Navigation?

Die Navigation wird in `layouts/default.vue` definiert und enthält:

**Hauptnavigation:**
- Home
- API Übersicht
- Token
- Quickstart
- Fussball.de-Id
- Fehler

**Resources:**
- Club (Verein-Endpoints Dokumentation)
- Team (Mannschafts-Endpoints Dokumentation)

Die Navigation ist responsiv und zeigt auf mobilen Geräten ein Hamburger-Menü.

## API Endpoints Übersicht

Die api-fussball.de bietet folgende REST-API Endpoints:

### Authentifizierung
- `POST /api/auth/register` - API-Token erstellen

### Club (Verein) Endpoints
- `GET /api/club/{id}` - Liste aller Mannschaften eines Vereins
- `GET /api/club/info/{id}` - Vollständige Vereinsinfo (Mannschaften + alle Spiele)
- `GET /api/club/next_games/{id}` - Kommende Spiele aller Vereinsmannschaften
- `GET /api/club/prev_games/{id}` - Vergangene Spiele aller Vereinsmannschaften

### Team (Mannschaft) Endpoints
- `GET /api/team/{id}` - Vollständige Teaminfo (Tabelle + alle Spiele)
- `GET /api/team/table/{id}` - Aktuelle Ligatabelle des Teams
- `GET /api/team/next_games/{id}` - Kommende Spiele des Teams
- `GET /api/team/prev_games/{id}` - Vergangene Spiele des Teams

Alle Endpoints (außer `/auth/register`) benötigen den `x-auth-token` Header zur Authentifizierung.

## Content Management

Alle Dokumentationsinhalte befinden sich im `/content` Ordner als Markdown-Dateien. Um neue Seiten hinzuzufügen:

1. Erstelle eine neue `.md` Datei im `/content` Ordner
2. Füge Frontmatter hinzu (title, description)
3. Schreibe den Inhalt in Markdown
4. Die Seite ist automatisch unter `/{dateiname}` verfügbar
5. Füge die Route optional zur Navigation in `layouts/default.vue` hinzu

### Markdown-Beispiel:

```markdown
---
title: 'Seitentitel'
description: 'Seitenbeschreibung für SEO'
---

# Überschrift

Hier kommt der Inhalt...

::InfoBox{type="info"}
Wichtiger Hinweis
::
```

## Deployment

Die Seite wird als statische Website generiert und kann auf verschiedenen Plattformen gehostet werden:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Features

- Server-Side Rendering (SSR)
- Statische Site-Generierung
- SEO-optimiert mit Meta-Tags
- Sitemap-Generierung (nuxt-simple-sitemap)
- Responsive Design
- Syntax-Highlighting für Code-Beispiele
- Markdown-basiertes CMS
- Accessible UI-Komponenten

## Support

Bei Problemen oder Fragen zur API:
- GitHub Issues: https://github.com/api-fussball/api-dart/issues

## Lizenz

Private Project
