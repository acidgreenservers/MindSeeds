import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'wall-bridge-no-road',
  text: '"A wall is a bridge with no road"',
  category: 'arch',
  pattern: 'Decoupling — do not separate components unless you define the communication protocol first. Isolation without interface is just isolation.',
  deployWhen: 'Modularizing monoliths or creating plugin architectures.'
};
export default () => null;
