import { SeedData } from '@/types';

export const data: SeedData = {
  id: 'arch-state-relationship',
  text: "Maintain explicit state-relationship contract to avoid drift",
  category: 'arch',
  family: 'Structure',
  pattern: 'State-Relationship Contract: Ensure the interface between a system and its mutable state is defined and enforced to prevent unnoticed drift.',
  deployWhen: 'Event-driven microservices interacting with external state, UI components syncing with backend data, Distributed caches across multiple nodes, Long-running workflows modifying shared data'
};
