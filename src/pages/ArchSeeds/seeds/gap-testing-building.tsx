import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'gap-testing-building',
  text: '"The project lives in the gap between testing and building"',
  category: 'arch',
  pattern: 'State Emergence — true application state isn't found in code or tests alone. It lives in what tests reveal about the build.',
  deployWhen: 'Any moment you think you are done — when the build passes but tests haven't run.'
};
export default () => null;
