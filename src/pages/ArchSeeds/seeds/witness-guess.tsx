import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'witness-guess',
  text: '"A change without a witness is just a guess"',
  category: 'arch',
  pattern: 'Observability — if a change isn\'t observable, it didn\'t happen correctly. Use telemetry to turn guesses into facts.',
  deployWhen: 'System monitoring, logging, performance tuning, any production change.'
};
export default () => null;
