export type StoryEffect = {
  confidence?: number;
  romance?: number;
  coins?: number;
};

export type ChoiceCondition = {
  minConfidence?: number;
  minRomance?: number;
  minCoins?: number;
};

export type StoryChoice = {
  id: string;
  label: string;
  nextId: string;
  effects?: StoryEffect;
  conditions?: ChoiceCondition;
};

export type StoryNode = {
  id: string;
  speaker: string;
  text: string;
  background: string;
  character?: string;
  choices: StoryChoice[];
};

export type StoryChapter = {
  chapterId: string;
  title: string;
  startNodeId: string;
  nodes: StoryNode[];
};

export type PlayerStats = {
  confidence: number;
  romance: number;
  coins: number;
};
