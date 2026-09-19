import { SeedData } from '@/types';

export const data: SeedData = {
  id: 'user-enemy-system-validated',
  text: '"The user is the enemy of the system and must be validated"',
  category: 'arch',
  pattern: 'Zero-Trust Input Validation — assume all incoming data, intent, or payloads from client/user boundaries are untrusted or malicious until proven valid.',
  deployWhen: 'API gateway design, input validation schemas, form handling, authentication & authorization boundaries, edge computing.'
};

export default () => null;
