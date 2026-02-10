import type { StoryChoice } from "@/types/story";

type ChoiceListProps = {
  choices: StoryChoice[];
  onChoose: (choice: StoryChoice) => void;
};

export function ChoiceList({ choices, onChoose }: ChoiceListProps) {
  if (choices.length === 0) {
    return (
      <div className="space-y-3 rounded-xl border border-emerald-700 bg-emerald-950/40 p-5">
        <p className="font-medium text-emerald-300">Episode complete.</p>
        <p className="text-sm text-emerald-100/80">You reached an ending. Restart to try another route.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {choices.map((choice) => (
        <button
          className="w-full rounded-lg border border-slate-600 bg-slate-900/80 p-4 text-left text-sm transition hover:border-cyan-400 hover:bg-slate-800"
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
