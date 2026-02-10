import type { ChoiceCondition, PlayerStats } from "@/types/story";

export const meetsConditions = (
  conditions: ChoiceCondition | undefined,
  stats: PlayerStats,
): boolean => {
  if (!conditions) return true;

  if (
    conditions.minConfidence !== undefined &&
    stats.confidence < conditions.minConfidence
  ) {
    return false;
  }

  if (conditions.minRomance !== undefined && stats.romance < conditions.minRomance) {
    return false;
  }

  if (conditions.minCoins !== undefined && stats.coins < conditions.minCoins) {
    return false;
  }

  return true;
};
