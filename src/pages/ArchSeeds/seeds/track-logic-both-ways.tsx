import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'track-logic-both-ways',
  text: '"Track the logic both ways before crossing the bridge"',
  category: 'arch',
  pattern: 'Bidirectional Verification — trace the call forward and backward before committing. One direction is assumption. Both is understanding.',
  deployWhen: 'Debugging, refactoring, integrating unfamiliar code, any function with non-obvious effects.'
};
export default () => null;
