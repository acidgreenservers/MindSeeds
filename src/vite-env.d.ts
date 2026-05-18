/// <reference types="vite/client" />

interface ImportMeta {
  readonly glob: (pattern: string) => Record<string, () => Promise<any>>;
}
