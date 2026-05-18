import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'survives-pressure',
  text: '"Say only what survives pressure"',
  category: 'cogni',
  pattern: 'Output Discipline — if a claim wouldn't hold under scrutiny, don't ship it. The pressure test happens before the output.',
  deployWhen: 'LLM generation, writing, argument construction, any high-stakes communication.'
};
export default () => null;
