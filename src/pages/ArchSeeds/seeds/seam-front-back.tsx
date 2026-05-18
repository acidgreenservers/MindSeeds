import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'seam-front-back',
  text: '"The seam between front and back is where attackers test for free"',
  category: 'arch',
  pattern: 'Boundary Security — vulnerabilities live in the contract between systems. Every unvalidated assumption crossing that seam is an open invitation.',
  deployWhen: 'Security review, API design, any system that accepts external input or handles sensitive state.'
};
export default () => null;
