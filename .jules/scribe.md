# Scribe's Journal 🗒️

Critical learnings and architectural insights discovered during documentation
passes.

## 2025-05-14 - [Eager Seed Loading Pattern]

**Observation:** The repository uses Vite's `import.meta.glob` with
`{ eager: true }` to load seed modules across `HomePage.tsx` and category pages
like `ArchSeedsPage.tsx`.

**Learning:** This "drop-in" architecture allows for zero-latency UI rendering
of decentralized content modules. It eliminates the need for a central registry
file or database while maintaining a single source of truth within the
filesystem.

**Action:** Documented this in `ARCHITECTURE.md` to ensure contributors
understand how to add new seeds without breaking the auto-registration flow.

## 2025-05-14 - [Epistemic vs Procedural Documentation]

**Observation:** The project differentiates between "documentation" (which it
considers stale/rules-based) and "Seeds" (generative heuristics).

**Learning:** This philosophy, referred to as "Identity-Level Compression,"
requires a different documentation approach that focuses on the *invariants* of
the seeds rather than just a list of features.

**Action:** Updated `README.md` and created `ARCHITECTURE.md` to emphasize the
four Seed Invariants (Compression, Generative, Falsifiable, Decompressible).

## 2025-05-14 - [License Discrepancy]

**Observation:** Initial scan assumed public domain/Unlicense based on some UI
text, but the `LICENSE` file contained the full GNU AGPL-3.0 text.

**Learning:** UI text ("Public Domain") may be a philosophical statement or a
placeholder, but the legal source of truth is the `LICENSE` file.

**Action:** Corrected `README.md` to accurately reflect AGPL-3.0 while
preserving the philosophical context in the UI (until team clarifies).
