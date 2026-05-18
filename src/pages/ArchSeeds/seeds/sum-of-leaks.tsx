import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'sum-of-leaks',
  text: '"The system is the sum of its leaks"',
  category: 'arch',
  pattern: 'Observability — if you cannot measure the output, the system does not exist in a known state. Darkness is not stability.',
  deployWhen: 'Implementing logging, monitoring, alerting, or feedback loops.'
};
export default () => null;
