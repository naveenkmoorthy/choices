"use client";

import { create } from "zustand";
import chapter1Data from "@/content/chapter1.json";
import { applyChoiceEffects, getNodeById } from "@/game/engine";
import { clearSave, loadSave, writeSave } from "@/game/saves";
import type { PlayerStats, StoryChapter, StoryChoice, StoryNode } from "@/types/story";

const chapter = chapter1Data as StoryChapter;

const defaultStats: PlayerStats = {
  confidence: 0,
  romance: 0,
  coins: 0,
};

type GameState = {
  chapter: StoryChapter;
  currentNode: StoryNode;
  stats: PlayerStats;
  hydrated: boolean;
  hydrateFromSave: () => void;
  choose: (choice: StoryChoice) => void;
  restart: () => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  chapter,
  currentNode: getNodeById(chapter, chapter.startNodeId),
  stats: defaultStats,
  hydrated: false,
  hydrateFromSave: () => {
    if (get().hydrated) return;

    const save = loadSave();
    if (!save || save.chapterId !== chapter.chapterId) {
      set({ hydrated: true });
      return;
    }

    set({
      currentNode: getNodeById(chapter, save.currentNodeId),
      stats: save.stats,
      hydrated: true,
    });
  },
  choose: (choice) => {
    const nextStats = applyChoiceEffects(get().stats, choice);
    const nextNode = getNodeById(chapter, choice.nextId);

    writeSave({
      chapterId: chapter.chapterId,
      currentNodeId: nextNode.id,
      stats: nextStats,
    });

    set({ currentNode: nextNode, stats: nextStats });
  },
  restart: () => {
    clearSave();
    set({
      currentNode: getNodeById(chapter, chapter.startNodeId),
      stats: defaultStats,
    });
  },
}));
