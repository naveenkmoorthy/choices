import type { PlayerStats } from "@/types/story";

const SAVE_KEY = "choices-portfolio-save";

export type SaveState = {
  chapterId: string;
  currentNodeId: string;
  stats: PlayerStats;
};

export const loadSave = (): SaveState | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(SAVE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as SaveState;
  } catch {
    return null;
  }
};

export const writeSave = (state: SaveState): void => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
};

export const clearSave = (): void => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SAVE_KEY);
};
