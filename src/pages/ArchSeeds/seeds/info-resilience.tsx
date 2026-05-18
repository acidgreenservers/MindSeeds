import { SeedData } from '@/types';
export const data: SeedData = {
  id: 'info-resilience',
  text: '"Better to have the info and not need it, than need it and not have it"',
  category: 'arch',
  pattern: 'Information Resilience — over-logging and over-communicating beats under-preparing. Missing context during failure is catastrophic.',
  deployWhen: 'Logging strategy, documentation, observability, incident response, any system where context is king.'
};
export default () => null;
