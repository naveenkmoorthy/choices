import type { StoryChoice } from "@/types/story";

type ChoiceListProps = {
  choices: StoryChoice[];
  onChoose: (choice: StoryChoice) => void;
};

export function ChoiceList({ choices, onChoose }: ChoiceListProps) {
  if (choices.length === 0) {
    return (
      <div className="surface-panel space-y-3 border-emerald-500/40 bg-emerald-950/35 p-5">
        <p className="font-medium text-emerald-200">Episode complete.</p>
        <p className="text-sm text-emerald-100/90">You reached an ending. Restart to try another route.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {choices.map((choice) => (
        <button
          className="w-full rounded-xl border border-slate-300/20 bg-slate-900/75 p-4 text-left text-sm text-slate-100 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)] transition duration-150 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-slate-800/90 hover:shadow-[0_12px_28px_rgb(14_116_144_/_0.26)] active:translate-y-0 active:border-cyan-200/80 active:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          key={choice.id}
          onClick={() => onChoose(choice)}
          type="button"
        >
          {choice.label}
        </button>
      ))}
    </div>
  );
}
