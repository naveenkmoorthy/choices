import type { StoryNode } from "@/types/story";

type StoryBoxProps = {
  node: StoryNode;
};

export function StoryBox({ node }: StoryBoxProps) {
  return (
    <section className="space-y-2 rounded-xl border border-slate-700 bg-slate-900/70 p-5">
      <p className="text-xs uppercase tracking-widest text-slate-400">{node.background}</p>
      <h2 className="text-lg font-semibold text-cyan-200">{node.speaker}</h2>
      <p className="leading-relaxed text-slate-100">{node.text}</p>
      {node.character ? <p className="text-sm text-slate-400">On screen: {node.character}</p> : null}
    </section>
  );
}
