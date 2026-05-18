import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'truth-home-rumor',
  text: '"Truth has one home, or it is a rumor"',
  category: 'arch',
  pattern: 'Single Source of Truth — state duplicated is state corrupted. Ensure truth is never in two places at once.',
  deployWhen: 'System architecture, database schema, prop management, anywhere data is stored.'
};
export default () => null;
