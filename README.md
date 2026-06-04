# Find Your Dating — UI Clone

A pixel-accurate recreation of [findyourdating.com](https://findyourdating.com/) built with React, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 19** + TypeScript
- **Tailwind CSS v4**
- **Framer Motion** for scroll animations and quiz transitions
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── assets/          # Static data (profiles, quiz questions, etc.)
├── components/      # Reusable UI components
├── sections/        # Page sections (Hero, Features, Quiz, etc.)
├── pages/           # Page-level compositions
└── lib/             # Utilities
```

## Sections Recreated

- Sticky navbar with logo, language selector, and CTA
- Hero with live profile grid and animated online count
- "How it works" 3-step flow
- "Why our community is different" feature cards
- Bottom CTA section
- Footer with legal links
- Full-screen matching quiz modal (6 questions)

## Design Tokens

| Token | Value |
|-------|-------|
| Primary | `hsl(22 60% 38%)` — warm brown |
| Background | `hsl(38 35% 96%)` — cream |
| Accent / Gold | `hsl(38 55% 58%)` |
| Serif font | Cormorant Garamond |
| Sans font | Inter |
