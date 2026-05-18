export interface SeedData {
  id: string;
  text: string;
  pattern?: string;
  deployWhen?: string;
  failureMode?: string;
  category?: 'cogni' | 'lingua' | 'arch';
  family?: string;
}

export type SeedVariant = 'pill' | 'card';
