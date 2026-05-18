import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'survive-own-attempt',
  text: '"Your code must survive your own attempt to break it"',
  category: 'arch',
  pattern: 'Red Team Verification — adversarial self-review before external exposure. If you can break it, someone else already has.',
  deployWhen: 'Security review, API design, any system that accepts external input or handles sensitive state.'
};
export default () => null;
