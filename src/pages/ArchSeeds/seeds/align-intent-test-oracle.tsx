import { SeedData } from '@/types';

export const data: SeedData = {
  id: 'arch-align-intent-test-oracle',
  text: "Align implementation intent with test oracle to prevent silent logic drift",
  category: 'arch',
  family: 'Structure',
  pattern: 'Intent‑Oracle Alignment: Ensures code reflects verified intent through test oracle verification.',
  deployWhen: 'defining new feature behavior,refactoring legacy module,integrating external API,writing critical security code'
};
