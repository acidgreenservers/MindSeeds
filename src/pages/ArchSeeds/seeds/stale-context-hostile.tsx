import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'stale-context-hostile',
  text: '"Stale context is hostile"',
  category: 'arch',
  pattern: 'Temporal Integrity — any gap in execution or unverified state must be treated as a potential adversarial change, not a pause.',
  deployWhen: 'Agent execution loops, long-running processes, cached state validation, resume-from-pause logic.'
};
export default () => null;
