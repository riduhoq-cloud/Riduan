
export enum Category {
  PRAYER = 'Prayer (Salah)',
  CHARACTER = 'Character (Akhlaq)',
  BELIEF = 'Belief (Aqidah)',
  LIFE = 'Daily Life',
  RESPECT = 'Respect & Rights'
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  category?: Category;
}

export interface GardenState {
  growthLevel: number;
  seedsPlanted: number;
  wateredToday: boolean;
  lastReflection: string;
}
