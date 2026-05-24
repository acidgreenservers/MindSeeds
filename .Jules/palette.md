## 2025-03-08 - [Interactive Element Semantics]
**Learning:** Interactive elements like seeds (pills) that trigger actions (copying to clipboard) should be semantic `<button>` elements rather than `<span>` or `<div>` to ensure they are keyboard-navigable and accessible to screen readers out of the box.
**Action:** Always prefer `<button>` for clickable UI components that don't navigate to a new URL, and ensure they have appropriate `aria-label` and focus-visible states.
