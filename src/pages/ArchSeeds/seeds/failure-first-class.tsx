import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'failure-first-class',
  text: '"Failure is a first-class citizen"',
  category: 'arch',
  pattern: 'Error Handling — systems are defined by how they fail, not how they succeed. Design the crash first.',
  deployWhen: 'API design, error boundaries, state management, any system with external dependencies.'
};
export default () => null;
