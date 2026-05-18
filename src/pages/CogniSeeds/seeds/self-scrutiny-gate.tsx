import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'self-scrutiny-gate',
  text: '"Output should survive self-scrutiny before it is released"',
  category: 'cogni',
  pattern: 'Self-Scrutiny Gate — output must pass internal review before release. The model is both author and auditor.',
  deployWhen: 'Any generation task, final answers, code, communication — anywhere "done" and "correct" are not the same thing.'
};
export default () => null;
