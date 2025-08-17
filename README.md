# Parlament der Bäume

A walkable soundscape web app for Hamburg, featuring interactive maps, tree stories, and sound art. Built with React, Vite, TypeScript, Tailwind CSS, Leaflet, and more.

---

## Table of Contents
- [Architecture](#architecture)
- [Frameworks & Dependencies](#frameworks--dependencies)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment & Preview](#deployment--preview)
- [Automated Workflows](#automated-workflows)
- [License](#license)

---

## Architecture

- **Frontend:** React 18 (with TypeScript), Vite for fast builds and HMR.
- **Styling:** Tailwind CSS for utility-first styling, custom CSS for animations.
- **Map:** Leaflet (via react-leaflet) for interactive maps and markers.
- **Audio:** Custom SoundCloud-style audio player using `react-soundplayer`.
- **Navigation:** Responsive, mobile-friendly navigation with anchor links and smooth scrolling.
- **Static Assets:** Served from the `public/` directory.

## Frameworks & Dependencies

- **React** (`react`, `react-dom`): UI library
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Leaflet** & **react-leaflet**: Interactive maps
- **react-soundplayer**: Custom audio player
- **lucide-react**: Icon set
- **@headlessui/react**: Accessible UI primitives
- **ESLint**: Linting

See `package.json` for full details.

## Project Structure

```
project/
├── public/                  # Static assets (e.g., audio files)
│   └── Free_Test_Data_500KB_MP3.mp3
├── src/
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles (Tailwind, custom)
│   ├── components/
│   │   ├── Map.tsx          # Map and marker logic
│   │   └── Navigation.tsx   # Responsive navigation
│   └── data/
│       └── data.json        # Tree/location data, I have NO IDEA WHERE THIS IS USED
├── .github/
│   ├── workflows/
│   │   └── vercel-preview.yml # Vercel preview deployment action
│   └── dependabot.yml       # Automated dependency updates
├── .nvmrc                   # Node.js version (24.5.0)
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md                # Project documentation
```

> TODO: Clarify where this data.json is used. As far as I can see it is unused.

## Development

### Prerequisites
- **Node.js 24.5.0** (see `.nvmrc`)
- **npm** (v9+ recommended)

### Install dependencies
```sh
npm install
```

### Start development server
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Lint code
```sh
npm run lint
```

### Build for production
```sh
npm run build
```

### Preview production build
```sh
npm run preview
```

## Deployment & Preview

### Vercel
- The project is ready for Vercel deployment.
- On every pull request, a Vercel bot will deploy a preview (see `.github/workflows/vercel-preview.yml`).
- To enable this, add the following secrets to your GitHub repository:
  - `VERCEL_TOKEN`
  - `VERCEL_ORG_ID`
  - `VERCEL_PROJECT_ID`
- For manual deployment, use the [Vercel CLI](https://vercel.com/docs/cli):
  ```sh
  vercel
  ```

## Automated Workflows

- **Dependabot**: Weekly scans for npm dependency updates (`.github/dependabot.yml`).
- **Vercel Preview Deployments**: GitHub Action for preview deployments on PRs (`.github/workflows/vercel-preview.yml`).
- **Vercel Production Deployments**: GitHub Action for production deployments on merging PRs into main (`.github/workflows/vercel-production.yml`).


## Working with the Project

- **Static Files**: Place images, audio, etc. in the `public/` directory. Reference them as `/filename.ext` in your code.
- **Map Data**: Update `Map.tsx` to add or modify tree/location data.
- **Navigation**: Edit `src/components/Navigation.tsx` for menu items and anchor links.
- **Styling**: Use Tailwind utility classes in your components, or add custom CSS to `src/index.css`.
- **Audio Player**: The custom player is implemented in `App.tsx` using `react-soundplayer`.

## License

The MIT License (MIT)
Copyright © 2025 Julia Nordholz and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
