# agents.md — AI Agent Instructions for Parlament der Bäume

This file defines conventions, constraints, and guidance for AI coding assistants working on this project.

---

## Project Identity

- **Name:** Parlament der Bäume (Parliament of Trees)
- **Nature:** Cultural / arts web project — not a startup or SaaS product
- **Audience:** General public, arts community, visitors to Hamburg
- **Language:** UI content is bilingual German/English. Code and comments should be in English.

---

## Tech Stack

| Concern | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (PostCSS-based, no config file needed) |
| Map | Leaflet + react-leaflet v5 |
| Audio | react-soundplayer (custom player via `withCustomAudio`) |
| Icons | lucide-react |
| UI primitives | @headlessui/react v2 |
| Node version | 24.5.0 (see `.nvmrc`) |
| Deployment | Vercel |

---

## Code Conventions

### React

- Use **functional components** with hooks only. No class components.
- Define reusable audio players **outside** render functions to avoid re-creating component types on every render. The pattern `withCustomAudio(...)` inside a render body or IIFE is an anti-pattern — refactor it when touching audio player code.
- Keep components in `src/components/`. New components get their own file.
- Prefer named exports for components; `App.tsx` and `main.tsx` use default exports.

### TypeScript

- Always type props explicitly (use `interface` or `type`).
- Avoid `any`. Use `unknown` and narrow where needed.
- Do not suppress TypeScript errors with `// @ts-ignore` without a comment explaining why.

### Styling

- Use **Tailwind utility classes** in JSX. Avoid inline `style={{}}` except for map container sizing.
- Do not add a `tailwind.config.js` — the project uses Tailwind v4 PostCSS integration.
- Custom CSS goes in `src/index.css` only.
- The design system is dark-mode only: background `bg-black`, text `text-white` / `text-gray-300`, accent `text-cyan-400`.

### Data

- Tree location data lives in two places (a known issue):
  1. `src/data/data.json` — imported in `Map.tsx` but effectively unused (names don't match).
  2. The `locations` array hardcoded in `src/components/Map.tsx`.
- When adding a new tree, update **both** `Map.tsx` (coordinates + link) and add the corresponding section in `App.tsx`.
- If refactoring data, consolidate into a single typed source (e.g. `src/data/trees.ts`) with full coordinates, audio URL, narrator, and section ID.

### Audio

- Audio files live in `public/` and are served as `/filename.mp3`.
- Do not commit new `.zip` or `.z01` archive files — the repo already has large archives that should ideally be removed.
- When adding a new tree with audio, follow this pattern (but define the player component **outside** the JSX tree):

```tsx
// Define once, outside the component:
const LehmannPlayer = withCustomAudio(TreeAudioPlayer);

// Use inside JSX:
<LehmannPlayer streamUrl="/250801_Lehmann_Platane_V1.mp3" trackTitle="Lehmann-Platane – Lisa Hagmeister" preloadType="auto" />
```

---

## File Map

```
src/
├── App.tsx               # Main single-page layout (all sections). Avoid making it longer.
├── components/
│   ├── Map.tsx           # Leaflet map — tree coordinates and popup links
│   └── Navigation.tsx    # Fixed top nav with mobile hamburger
└── data/
    └── data.json         # Legacy data (partially unused — see Known Issues)
public/                   # Static assets: MP3s, photos, logos
```

---

## Known Issues

1. **Audio player anti-pattern** — `withCustomAudio(...)` is currently called inside render IIFEs. This creates a new component type on every render. Refactor by hoisting the HOC call.
2. **`data.json` is redundant** — the map coordinates and tree names are duplicated in `Map.tsx`. The JSON data is imported but the name filter never matches because names differ.
3. **Unused imports** — `Leaf` and `MessageCircle` from `lucide-react` are imported in `App.tsx` but not rendered.
4. **Large binaries in repo** — `.zip` / `.z01` files in `public/` should not be in git. They should be removed and hosted externally if needed.
5. **`App.tsx` is monolithic** — all tree sections are inline. Consider splitting into individual tree section components as the project grows.

---

## Do's and Don'ts

**Do:**
- Respect the artistic intent and voice of the project — it is a cultural work, not a tech demo.
- Keep section IDs stable (`#lehmann-platane`, `#exeter-ulme`, etc.) — they are used by the map popups for in-page navigation.
- Test on mobile — the audience will often use this on a phone while walking through Hamburg.
- Preserve all credits, narrator names, and supporter attributions exactly as written.

**Don't:**
- Add new npm dependencies without good reason — the bundle should stay lean.
- Remove or reorder nav items without checking the corresponding section IDs.
- Change the dark color scheme (black/gray/cyan) without explicit instruction.
- Touch `.github/workflows/vercel-preview.yml` or `.github/dependabot.yml` unless specifically asked.
- Commit audio archives (`.zip`, `.z01`) to the repository.
