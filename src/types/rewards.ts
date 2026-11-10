export interface Deal {
  id: string;
  title: string;
  brand: string;
  category: 'free' | 'games' | 'streaming' | 'shopping';
  categoryLabel: string;
  description: string;
  instruction: string;
  timeEstimate: string;
  cost: string;
  points: number;
  featured?: boolean;
  partnerLogo: string;
  rating: number;
  completionsCount: number;
}

export interface RewardTier {
  id: string;
  amount: number;
  dealsRequired: number;
  title: string;
  badge?: string;
  popular?: boolean;
}

export interface ClaimEvent {
  id: string;
  name: string;
  city: string;
  amount: number;
  timestamp: string;
  dealsCompleted: number;
}

export interface UserState {
  email: string;
  name: string;
  isAgeVerified: boolean;
  selectedTier: RewardTier;
  completedDeals: string[];
  isEmailVerified: boolean;
  unlockedAt: string | null;
  cardCode: string | null;
  cardPin: string | null;
}
