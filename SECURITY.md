# Security Policy 🔐

## Supported Versions

| Version | Supported |
| --- | --- |
| main | ✅ Security updates |

## Reporting a Vulnerability

We take the security of this registry seriously. If you discover a vulnerability,
please report it via one of the following:

- **GitHub Security Advisory**:
  [Create a private advisory](https://github.com/acidgreenservers/MindSeeds/security/advisories/new)
  (Preferred).
- **Issue Tracker**: For non-sensitive bugs, use the standard issue tracker.

**Please do not** publicly disclose vulnerabilities until a fix is released.
We aim to acknowledge reports within **48 hours**.

## Handling Sensitive Data

- **No Secrets**: This is a static frontend project. No API keys, database
  credentials, or private secrets should ever be committed to the repository.
- **Environment Variables**: This project is a fully-static client-side React app
  and does not require any custom environment variables or `.env` files to build.
- **PII**: Avoid including any Personally Identifiable Information (PII) within
  the Seed registry.

## Hardening Checklist

- [x] **Static Generation**: The site is served as static assets, eliminating
  server-side execution risks.
- [x] **Dependency Scanning**: Dependencies are managed via `pnpm` and should be
  regularly audited using `pnpm audit`.
- [ ] **Content Security Policy (CSP)**: Implement strict CSP headers via hosting
  provider (e.g., GitHub Pages headers or meta tags).
- [x] **No Backend**: By design, the application has no backend to exploit.
- [ ] **Subresource Integrity (SRI)**: Ensure all external scripts/styles use
  SRI hashes (where applicable).

## Contact & Keys

- **Security Contact**: @acidgreenservers
- **Response Target**: Acknowledge within **48 hours**.
