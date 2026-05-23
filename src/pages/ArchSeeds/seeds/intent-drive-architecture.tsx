import { SeedData } from '@/types';

export const data: SeedData = {
  id: 'arch-intent-drive-architecture',
  text: "Intent must drive architecture, else state drift occurs",
  category: 'arch',
  family: 'Structure',
  pattern: 'Intent‑Architecture Alignment: Ensures code directly reflects purpose to prevent state drift',
  deployWhen: 'translating ambiguous user requirements into design,refactoring legacy code lacking clear specs,building stateful services from high‑level goals,automating code generation from natural language prompts'
};
