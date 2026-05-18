import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'gravity-increases-state',
  text: '"Gravity increases with the size of the state"',
  category: 'arch',
  pattern: 'State Management — state is the weight of a system. Every bit of state added makes the next bit harder to move.',
  deployWhen: 'Frontend architecture, global state, cache strategy, any system growing in complexity.'
};
export default () => null;
