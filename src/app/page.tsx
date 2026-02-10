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
    return <main className="mx-auto max-w-3xl p-6 text-readable">Loading...</main>;
  }

  const choices = getAvailableChoices(currentNode, stats);

  return (
    <main className="relative isolate min-h-screen overflow-hidden px-4 py-6 sm:px-6 sm:py-8">
      <div aria-hidden className="decorative-bg absolute inset-0 -z-20" />
      <div aria-hidden className="decorative-texture absolute inset-0 -z-10" />

      <div className="surface-panel-elevated mx-auto flex w-full max-w-3xl flex-col gap-6 text-readable sm:p-8">
        <header className="space-y-3 border-b border-slate-200/10 pb-6">
          <p className="text-readable-muted text-xs uppercase tracking-[0.3em]">Portfolio Project</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">{chapter.title}</h1>
          <p className="text-readable-muted text-sm">
            A Choices-inspired branching story prototype built with Next.js.
          </p>
        </header>

        <section className="space-y-5">
          <HUD stats={stats} />
          <StoryBox node={currentNode} />
        </section>

        <section className="space-y-3">
          <h2 className="text-readable-muted text-xs font-semibold uppercase tracking-[0.2em]">Choose your next move</h2>
          <ChoiceList choices={choices} onChoose={choose} />
        </section>

        <footer className="mt-auto flex items-center justify-between border-t border-slate-200/10 pt-4">
          <p className="text-xs text-slate-400">Node: {currentNode.id}</p>
          <button
            className="rounded-md border border-slate-300/30 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-slate-100/70 hover:bg-slate-800/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            onClick={restart}
            type="button"
          >
            Restart Episode
          </button>
        </footer>
      </div>
    </main>
  );
}
