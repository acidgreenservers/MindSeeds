import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'oracle-source-truth',
  text: '"A test oracle is the source of truth"',
  category: 'arch',
  pattern: 'Oracle Grounding — the test oracle defines what correct means. Without one, pass/fail is opinion, not fact.',
  deployWhen: 'Designing test suites, writing assertions, any system where "working" needs a definition before it can be verified.'
};
export default () => null;
