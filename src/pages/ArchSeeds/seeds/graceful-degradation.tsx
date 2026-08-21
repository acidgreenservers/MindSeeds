import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'graceful-degradation',
  text: '"Graceful degradation over hard failure"',
  category: 'arch',
  pattern: 'Resilience — partial functionality under stress is infinitely superior to total systemic crash.',
  deployWhen: 'Error handling, component fallback strategies, network or service outage planning.'
};
export default () => null;
