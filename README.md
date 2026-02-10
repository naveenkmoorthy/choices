# Choices-Style Narrative Game Starter (Next.js)

This repository contains a portfolio-friendly starter for a branching narrative game inspired by interactive story apps.

## Included in this starter

- JSON-driven chapter content (`src/content/chapter1.json`)
- Lightweight game engine (`src/game/engine.ts`)
- Choice conditions (`src/game/conditions.ts`)
- Save/load helpers using localStorage (`src/game/saves.ts`)
- Zustand state store (`src/store/useGameStore.ts`)
- UI components for HUD, story scene, and choices
- Scene artwork placeholders in `public/scenes/*.svg`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Add your own scene art

1. Put image files in `public/scenes/` (jpg, png, webp, or svg).
2. Set each node's `sceneImage` path in `src/content/chapter1.json`.
3. Keep the image aspect roughly 16:9 for best results.

## Next improvements

- Add multiple chapters and route-based chapter loading
- Add character sprites/background artwork and audio
- Add timed choices and premium-currency simulation
- Add cloud save with Supabase/Firebase
