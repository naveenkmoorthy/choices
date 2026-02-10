import type { PlayerStats, StoryChapter, StoryChoice, StoryNode } from "@/types/story";
import { meetsConditions } from "@/game/conditions";

export const getNodeById = (chapter: StoryChapter, nodeId: string): StoryNode => {
  const node = chapter.nodes.find((entry) => entry.id === nodeId);

  if (!node) {
    throw new Error(`Story node not found: ${nodeId}`);
  }

  return node;
};

export const getAvailableChoices = (
  node: StoryNode,
  stats: PlayerStats,
): StoryChoice[] => {
  return node.choices.filter((choice) => meetsConditions(choice.conditions, stats));
};

export const applyChoiceEffects = (
  currentStats: PlayerStats,
  choice: StoryChoice,
): PlayerStats => {
  return {
    confidence: currentStats.confidence + (choice.effects?.confidence ?? 0),
    romance: currentStats.romance + (choice.effects?.romance ?? 0),
    coins: currentStats.coins + (choice.effects?.coins ?? 0),
  };
};
