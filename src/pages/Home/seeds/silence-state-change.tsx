import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'silence-state-change',
  text: '"Silence is a state change"',
  category: 'arch',
  pattern: 'Absence Detection — lack of response or missing feedback is a substantive data point indicating a break in the causal chain.',
  deployWhen: 'Timeout design, heartbeat monitoring, event-driven architectures, external service integration.'
};
export default () => null;
