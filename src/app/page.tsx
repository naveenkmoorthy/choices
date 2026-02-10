"use client";

import { useEffect } from "react";
import { ChoiceList } from "@/components/ChoiceList";
import { HUD } from "@/components/HUD";
import { StoryBox } from "@/components/StoryBox";
import { getAvailableChoices } from "@/game/engine";
import { useGameStore } from "@/store/useGameStore";

export default function HomePage() {
  const { chapter, currentNode, stats, choose, restart, hydrateFromSave, hydrated } = useGameStore();

  useEffect(() => {
    hydrateFromSave();
  }, [hydrateFromSave]);

  if (!hydrated) {
    return <main className="mx-auto max-w-3xl p-6">Loading...</main>;
  }

  const choices = getAvailableChoices(currentNode, stats);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-5 p-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Portfolio Project</p>
        <h1 className="text-3xl font-bold text-slate-50">{chapter.title}</h1>
        <p className="text-sm text-slate-400">A Choices-inspired branching story prototype built with Next.js.</p>
      </header>

      <HUD stats={stats} />
      <StoryBox node={currentNode} />
      <ChoiceList choices={choices} onChoose={choose} />

      <footer className="mt-auto flex items-center justify-between pt-2">
        <p className="text-xs text-slate-500">Node: {currentNode.id}</p>
        <button
          className="rounded-md border border-slate-600 px-3 py-2 text-xs text-slate-200 transition hover:border-slate-300"
          onClick={restart}
          type="button"
        >
          Restart Episode
        </button>
      </footer>
    </main>
  );
}
