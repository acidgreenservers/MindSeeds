import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'state-lives-truth',
  text: '"If you assume it just works, it is already broken"',
  category: 'arch',
  pattern: 'Verification over Assumption — stability is a verified state, not a default. If you didn\'t test it, it\'s already failing.',
  deployWhen: 'Any code release, new feature, complex logic path, high-stakes system change.'
};
export default () => null;
