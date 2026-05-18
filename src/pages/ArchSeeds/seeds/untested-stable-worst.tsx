import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'untested-stable-worst',
  text: '"Untested code is only as stable as its worst line"',
  category: 'arch',
  pattern: 'Test Oracle — stability is the presence of evidence. Without a test, you have a guess, not a system.',
  deployWhen: 'Continuous integration, code reviews, legacy codebases, any production system.'
};
export default () => null;
