import Image from "next/image";
import type { StoryNode } from "@/types/story";

type StoryBoxProps = {
  node: StoryNode;
};

export function StoryBox({ node }: StoryBoxProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900/70">
      <div className="relative h-56 w-full md:h-72">
        <Image
          alt={node.background}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          src={node.sceneImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        <p className="absolute left-4 top-4 rounded-md bg-slate-950/70 px-2 py-1 text-xs uppercase tracking-widest text-slate-200">
          {node.background}
        </p>
      </div>

      <div className="space-y-2 p-5">
        <h2 className="text-lg font-semibold text-cyan-200">{node.speaker}</h2>
        <p className="leading-relaxed text-slate-100">{node.text}</p>
        {node.character ? <p className="text-sm text-slate-400">On screen: {node.character}</p> : null}
      </div>
    </section>
  );
}
