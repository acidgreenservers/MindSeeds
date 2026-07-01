# Architecture 🧱

> **Goal:** Provide a fast mental model—components, boundaries, and critical
> flows of the MindSeeds registry.

## System Overview

MindSeeds is a static React application built with Vite and Tailwind CSS.
It is designed for high performance and zero-latency content access.

```text
                    +-------------------------+
   User Browser     |       MindSeeds UI      |
  +--------------+  |  React 19 + Tailwind    |
  |  Navigation  |--|  Responsive & Dark Mode |
  +--------------+  +------------+------------+
                                  |
                                  | Synchronous Eager Import
                                  v
                    +-------------+-------------+
                    |    Seed Data Modules      |
                    |  (src/pages/*/seeds/*.tsx)|
                    +-------------+-------------+
                                  |
             +--------------------+--------------------+
             |                                         |
             v                                         v
  +---------------------+                   +---------------------+
  |     CogniSeeds      |                   |      ArchSeeds      |
  | Epistemic Reasoning |                   | Structural Invariants|
  +---------------------+                   +---------------------+
             |                                         |
             v                                         v
  +---------------------+                   +---------------------+
  |     LinguaSeeds     |                   |      Global Registry |
  | Linguistic Friction |                   | (HomePage Aggregate) |
  +---------------------+                   +---------------------+
```

## Core Philosophy: Identity-Level Compression

Unlike traditional documentation which is **procedural** (instructions on what
to do), MindSeeds are **epistemic** (definitions of what to be).

- **Rules Decay**: Procedures become outdated as tools change.
- **Seeds Compound**: Heuristics adapt to new domains without modification.

## The Seed Schema (The Four Invariants)

Every seed in this repository must survive a decomposition against these four
invariants. If it cannot be unpacked this way, it is documentation, not a seed.

1. **Compression**: Under 12 words. High-density. No decorative language or
   qualifiers.
2. **Generative**: Unfolds differently across domains (Code, Writing, Design,
   Reasoning) without modification.
3. **Falsifiable**: Ignoring the seed produces a specific, visible, and
   predictable failure mode.
4. **Decompressible**: An LLM (or trained human) can expand the single line into
   a full reasoning chain unprompted.

## Data Flow & Registration

The project uses a "drop-in" component architecture:

1. **Seed Definition**: A new seed is created as a `.tsx` file in a category
   directory (e.g., `src/pages/ArchSeeds/seeds/`).
2. **Eager Loading**: The category page and the Home page use Vite's
   `import.meta.glob('./seeds/*.tsx', { eager: true })` to scan and register
   seeds.
3. **Synchronous Rendering**: By using eager loading, the UI renders the full
   registry immediately without "pop-in" or loading states.

## Key Decisions

- **React 19**: Utilizing the latest React features for future-proofing and
  performance.
- **Tailwind CSS**: Utility-first styling for a consistent, minimal aesthetic.
- **Vite**: Modern build tool for fast development and optimized production
  bundles.
- **SPA Architecture**: Navigated via `react-router-dom` for a seamless
  application feel.

## Known Constraints

- **Static Content**: All seeds are currently defined in code.
- **Manual Counts**: Seed counts on the HomePage (e.g., "24 in registry") and the
  global total in the footer are currently hardcoded and must be updated
  manually in `src/pages/Home/HomePage.tsx` when adding new seed files.
