<!-- markdownlint-disable MD013 -->
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

## 2026-07-01 - [CI/CD Alignment & Manual Counter Discovery]

**Observation:** Found a discrepancy between documentation (recommending `pnpm`)
and the actual CI/CD workflow in `.github/workflows/deploy.yml` (using `npm`).
Also identified that seed counts and global totals in `HomePage.tsx` are
hardcoded rather than derived.

**Learning:** Keeping CI/CD in sync with the recommended developer experience is
crucial for "minute-one" success. Hardcoded UI elements create a maintenance
burden that must be explicitly documented to prevent stale UI state.

**Action:** Updated `.github/workflows/deploy.yml` to use `pnpm` exclusively.
Explicitly documented the manual counter update requirement in
`ARCHITECTURE.md` and added a build-and-preview step to `README.md` and
`QUICKSTART.md` to catch stale state early.

## 2026-08-01 - [Full Documentation Audit and Standard Alignment]

**Observation:** Found that while the codebase is extremely clean and static, the documentation contained some minor markdown linter formatting issues (list markers, inline HTML usage) and misleading references to `.env.example`.

**Learning:** Static frontend SPAs without a backend have highly predictable environments, but generic templates can lead developers to assume there are required env variables or complex server-side elements. Providing a precise, zero-env explanation prevents developer friction. Similarly, integrating standard linters (like `markdownlint-cli2`) ensures that as documentation grows, it maintains full stylistic compliance.

**Action:** Audited and rewrote `README.md`, `SECURITY.md`, and `ARCHITECTURE.md` to completely remove generic template assumptions, added a detailed directory map, and enabled `markdownlint-cli2` directives so the whole documentation suite compiles with zero lint errors.

## 2026-09-01 - [Seed Registry Count Reconciliation Pass]

**Observation:** Discovered that hardcoded seed counts on `HomePage.tsx` (22 CogniSeeds, 8 LinguaSeeds, 36 ArchSeeds, 66 Total) had drifted from the actual seed file count (15 CogniSeeds, 8 LinguaSeeds, 35 ArchSeeds, 58 Total).

**Learning:** Hardcoded counters in UI views easily drift when seed files are added or restructured. Documenting these constraints in `ARCHITECTURE.md` and keeping them synchronized during documentation passes prevents user confusion.

**Action:** Updated `HomePage.tsx` counter badges and footer numbers to match actual registry counts (15 CogniSeeds, 8 LinguaSeeds, 35 ArchSeeds, 58 Total Seeds). Updated `ARCHITECTURE.md` to explicitly state these verified numbers.
