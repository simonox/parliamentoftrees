# context.md — Project Context for Parlament der Bäume

This document gives AI agents and new contributors the background needed to understand and work on this project meaningfully.

---

## What is this project?

**Parlament der Bäume** ("Parliament of Trees") is a site-specific sound art and text installation across Hamburg's inner city. From July to September 2025, selected urban trees were equipped with discreet, solar-powered listening units that play poetic monologues — giving each tree a voice.

The monologues are written by artist **Julia Nordholz** and voiced by professional actors and students. The sound design blends field recordings with sonified climate and environmental sensor data.

This web app is the digital companion to that physical installation. It lets people:
- Discover the trees on an interactive map
- Read about each tree's story and location
- Listen to the audio recordings directly in the browser
- Learn about the team, process, and funders

---

## The Trees

Each tree is a distinct installation with its own identity, narrator, and audio recording.

| ID (anchor) | Tree & Location | Narrator | Audio Status |
|---|---|---|---|
| `#lehmann-platane` | Lehmann-Platane, Alter Botanischer Garten, Planten un Blomen | Lisa Hagmeister | ✅ Live |
| `#exeter-ulme` | Exeter-Ulme, Alter Botanischer Garten, Planten un Blomen | Bjarne Mädel | ✅ Live |
| `#ailanthus` | Götterbaum, Kaiser-Wilhelm-Straße / Kronträgergang | Lina Beckmann | ✅ Live |
| `#kloppstock-linde` | Klopstock-Linde, Christianskirche, Altona | Tilo Werner | ✅ Live |
| `#gerhard-hauptmann-platz` | 5 Platanen, Gerhart-Hauptmann-Platz | Students, STS Eidelstedt | ✅ Live |
| `#fusion` | Eiche, Kulturkosmos Lärz / Fusion Festival | Martin Muth | ✅ Live |
| `#lohsepark` | Kirschbäume, Lohsepark (Yokohamastraße entrance) | Julian Greis | ✅ Live |
| `#glaskirsche` | Glaskirsche, University of Hamburg | Julia Nordholz | 🔜 Coming soon |
| `#sumpfeiche` | Sumpfeiche, University of Hamburg | Martin Kohlstedt | 🔜 Coming soon |
| `#marco-polo-terassen` | Sumpfzypresse, Marco-Polo-Terrassen | — | 🔜 Coming soon |

---

## Artistic Context

The project is rooted in:
- **Ecological research** — trees address their own climate stress, soil compaction, and urban ecology
- **Sound art** — field recordings and sonified sensor data shape the sonic texture
- **Participatory formats** — students at STS Eidelstedt created the Gerhart-Hauptmann-Platz installation in workshops
- **Rights of Nature** — the trees speak as subjects with agency, not objects

The monologues draw on historical landscape plans, municipal tree data, climate and weather records, library archives, and conversations with caretakers, residents, and passers-by.

---

## People

### Artistic Direction
- **Julia Nordholz** — Artistic Direction, Production, Text

### Core Team
- Matthias Schubert — Sound Design & Technical Support
- Hannes Hehemann — Architecture
- Oliver Ochs — Software & Technical Support
- Martin Hupf — Hardware & Technical Support
- Heidrun Bock — Project Management Assistant
- Argo Paalmann — Project Management Assistant
- Fiona Grassl — Text Assistant (Klopstock-Linde & Fusion Eiche)
- Charlotte Höflich — Workshop Support
- Martin Muth — Workshop Support

### Narrators
Lisa Hagmeister, Bjarne Mädel, Lina Beckmann, Tilo Werner, Julian Greis, Martin Muth, Martin Kohlstedt, Hendrik Weber, Simon Hehemann, Julia Nordholz, Students of STS Eidelstedt

---

## Funders & Supporters

The project is funded by:
- **Verborgene Potenziale Innenstadt** — Behörde für Stadtentwicklung und Wohnen
- **Bezirksamt Hamburg-Mitte** — Stadtteilkultur
- **Hamburg Kreativgesellschaft**
- **Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen** — Zukunftsfähige Innenstädte und Zentren

Partner organisations include Universität Hamburg (Green Office), Curious Community Labs e.V., WeField e.V., Planten un Blomen, altonale, Fusion Festival / Kulturkosmos e.V., LAG Kulturfonds, Kulturagent*innen Hamburg, STS Eidelstedt, Gute Leude Fabrik, Christianskirche Altona, Archiv St. Pauli, Stadtteilarchiv Ottensen, Baumpflege Thomsen, TBN Nord, Schöneberndt & Sohn, KSK Ingenieure.

---

## Deployment

- **Hosting:** Vercel
- **Preview deployments:** Automatically on every pull request via `.github/workflows/vercel-preview.yml`
- **Production deployments:** Via Vercel bot on merge to main
- **Required secrets:** `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

---

## License

- **Code:** MIT License — Copyright © 2025 Julia Nordholz and contributors
- **Content (texts, audio, photos):** CC BY-NC-ND — attribution required, no commercial use, no derivatives

---

## Contact

- Email: [julia.nordholz@gmail.com](mailto:julia.nordholz@gmail.com)
- Instagram: [@julianordholz](https://www.instagram.com/julianordholz)
