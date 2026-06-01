# MindSeeds 📘

[![Deploy content](https://github.com/acidgreenservers/MindSeeds/actions/workflows/deploy.yml/badge.svg)](https://github.com/acidgreenservers/MindSeeds/actions/workflows/deploy.yml)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](https://www.gnu.org/licenses/agpl-3.0.html)
[![Node Version](https://img.shields.io/badge/node-20+-green.svg)](https://nodejs.org/)

Wisdom is not stored as documentation. It is distilled into **Seeds** —
compressed, generative heuristics that unfold into full reasoning frameworks on
contact with a problem.

MindSeeds is a registry of these heuristics across three domains: Reasoning
(Cogni), Voice (Lingua), and Structure (Arch).

---

## 🚀 Getting Started

> The commands below are verified for this repository. If your platform differs,
> see **Troubleshooting**.

### Prerequisites

- **Node.js**: 20.x or higher
- **Package Manager**: [pnpm](https://pnpm.io/) (10.x recommended)

### 1) Clone the Repository

```bash
git clone https://github.com/acidgreenservers/MindSeeds.git
cd MindSeeds
```

### 2) Install Dependencies

```bash
pnpm install
```

### 3) Run Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

### 4) Build for Production

```bash
pnpm build
```

Static assets will be generated in the `dist/` directory.

---

## 🏗️ Architecture

MindSeeds is built for speed and clarity. It utilizes a "drop-in" component
architecture where seeds are defined as individual modules and registered
automatically.

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Loading**: Eager module globbing for zero-latency UI

For a deeper dive into the system design and the "Identity-Level Compression"
philosophy, see **[ARCHITECTURE.md](./ARCHITECTURE.md)**.

---

## 🧭 Quickstart

If you want to get up and running in under 60 seconds, check out the
**[QUICKSTART.md](./QUICKSTART.md)**.

---

## ⚙️ Configuration

The project is a standard Vite-based React SPA. Most configuration is handled
via:

- `vite.config.ts`: Build and server settings.
- `tailwind.config.js`: Theme and color definitions (Cogni, Lingua, Arch).
- `tsconfig.json`: TypeScript rules.

---

## 🧪 Testing & Linting

Currently, the project focuses on visual and structural integrity.

- **Build Check**: `pnpm build` verifies TypeScript and Vite compilation.
- **Preview**: `pnpm preview` lets you test the production build locally.

---

## 🔒 Security

We follow a "Zero Backend" security model. For reporting vulnerabilities or
understanding our security posture, see **[SECURITY.md](./SECURITY.md)**.

---

## 🧩 Contributing

Contributions are welcome! Please ensure any new seeds follow the
**Four Invariants**:

<details>
<summary>Click to expand: The Seed Schema</summary>

1. **Compression**: Under 12 words. High-density.
2. **Generative**: Unfolds across different domains without modification.
3. **Falsifiable**: Ignoring it produces a specific, visible failure.
4. **Decompressible**: An LLM can expand it into a full reasoning chain.

</details>

### Branching & PRs

- Create a feature branch for your changes.
- Ensure `pnpm build` passes.
- Submit a PR with a clear description of the new seed or improvement.

---

## 🆘 Troubleshooting

- **Port Conflict**: If `5173` is taken, Vite will try the next available port.
- **pnpm vs npm**: This project is optimized for `pnpm`. If you use `npm`, ensure
  you delete `pnpm-lock.yaml` to avoid conflicts.

---

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0**.
See [LICENSE](./LICENSE) for details.
