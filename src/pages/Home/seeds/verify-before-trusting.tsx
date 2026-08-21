import { SeedData } from '@/types';

export const data: SeedData = {
  id: 'verify-before-trusting',
  text: '"Verify Before Trusting"',
  category: 'arch',
  pattern: 'Zero-Trust Context — never assume state matches memory after tool calls or elapsed time; verify state before acting.',
  deployWhen: 'Resuming context, executing state modifications, or acting after elapsed time.'
};

export default () => null;
